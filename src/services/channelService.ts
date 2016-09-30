import {Injectable, Inject} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {UserService} from "./userService";
import {ToastService} from "./toastService";

/**
 * When SignalR runs it will add functions to the global $ variable
 * that you use to create connections to the hub. However, in this
 * class we won't want to depend on any global variables, so this
 * class provides an abstraction away from using $ directly in here.
 */
export class SignalrWindow extends Window {
    $:any;
}


export enum ConnectionState {
    Connecting = 1,
    Connected = 2,
    Reconnecting = 3,
    Disconnected = 4
}

export class ChannelConfig {
    url:string;
    hubName:string;
    channel:string;
    params: Map<string, string>;
}

export class ChannelEvent {
    Name:string;
    ChannelName:string;
    Timestamp:Date;
    Data:any;
    Json:string;

    constructor() {
        this.Timestamp = new Date();
    }
}

export class ChannelSubject {
    channel:string;
    subject:Subject<ChannelEvent>;
}

/**
 * ChannelService is a wrapper around the functionality that SignalR
 * provides to expose the ideas of channels and events. With this service
 * you can subscribe to specific channels (or groups in signalr speak) and
 * use observables to react to specific events sent out on those channels.
 */
@Injectable()
export class ChannelService {

    /**
     * starting$ is an observable available to know if the signalr
     * connection is ready or not. On a successful connection this
     * stream will emit a value.
     */
    starting$:Observable<any>;

    /**
     * connectionState$ provides the current state of the underlying
     * connection as an observable stream.
     */
    connectionState$:Observable<ConnectionState>;

    /**
     * error$ provides a stream of any error messages that occur on the
     * SignalR connection
     */
    error$:Observable<string>;

    data$:Observable<any>;
    asignmentData$:Observable<any>;
    pageSyncData$:Observable<any>;
    reviewData$:Observable<any>;
    stateData$:Observable<any>;

    // These are used to feed the public observables
    //
  public connectionStateSubject = new Subject<ConnectionState>();
  public startingSubject = new Subject<any>();
  public errorSubject = new Subject<any>();
  public dataSubject = new Subject<any>();
  public asignmentDataSubject = new Subject<any>();
  public pageSyncDataSubject = new Subject<any>();
  public reviewDataSubject = new Subject<any>();
  public stateDataSubject = new Subject<any>();

    // These are used to track the internal SignalR state
    //
  public hubConnection:any;
  public hubProxy:any;
    // public connectionDropped: boolean = false; // is needed for showing toast

    // An internal array to track what channel subscriptions exist
    //
  public subjects = new Array<ChannelSubject>();

    constructor(@Inject(UserService) public userService:UserService,
                @Inject(SignalrWindow) public window:SignalrWindow,
                @Inject(ToastService) public toastService:ToastService
    ) {
        if (this.window.$ === undefined || this.window.$.hubConnection === undefined) {
            throw new Error("The variable '$' or the .hubConnection() function are not defined...please check the SignalR scripts have been loaded properly");
        }

        // Set up our observables
        //
        this.connectionState$ = this.connectionStateSubject.asObservable();
        this.error$ = this.errorSubject.asObservable();
        this.starting$ = this.startingSubject.asObservable();
        this.data$ = this.dataSubject.asObservable();
        this.asignmentData$ = this.asignmentDataSubject.asObservable();
        this.pageSyncData$ = this.pageSyncDataSubject.asObservable();
        this.reviewData$ = this.reviewDataSubject.asObservable();
        this.stateData$ = this.stateDataSubject.asObservable();
    }
    createConnection():any {
        var channelConfig = this.userService.getChannelConfiguration();

        this.hubConnection = this.window.$.hubConnection();
        this.hubConnection.url = channelConfig.url;
        this.hubConnection.qs = channelConfig.params;
        this.hubProxy = this.hubConnection.createHubProxy(channelConfig.hubName);

        // Define handlers for the connection state events
        //
        this.hubConnection.stateChanged(this.onStateChanged.bind(this));

        // Define handlers for any errors
        //
        this.hubConnection.error((error:any) => {
            // Push the error on our subject
            //
            this.errorSubject.next(error);
        });

        this.hubProxy.on("onEvent", (channel:string, ev:ChannelEvent) => {
            //console.log(`onEvent - ${channel} channel`, ev);

            // This method acts like a broker for incoming messages. We
            //  check the interal array of subjects to see if one exists
            //  for the channel this came in on, and then emit the event
            //  on it. Otherwise we ignore the message.
            //
            let channelSub = this.subjects.find((x:ChannelSubject) => {
                return x.channel === channel;
            }) as ChannelSubject;

            // If we found a subject then emit the event on it
            //
            if (channelSub !== undefined) {
                return channelSub.subject.next(ev);
            }
        });

        return this.hubConnection;
    }

    onStateChanged(state:any):void {
        let newState = ConnectionState.Connecting;

        switch (state.newState) {
            case this.window.$.signalR.connectionState.connecting:
                newState = ConnectionState.Connecting;
                break;
            case this.window.$.signalR.connectionState.connected:
                newState = ConnectionState.Connected;
                break;
            case this.window.$.signalR.connectionState.reconnecting:
                newState = ConnectionState.Reconnecting;
                break;
            case this.window.$.signalR.connectionState.disconnected:
                newState = ConnectionState.Disconnected;
                break;
        }

        // Push the new state on our subject
        //
        this.connectionStateSubject.next(newState);
    }

    /**
     * Start the SignalR connection. The starting$ stream will emit an
     * event if the connection is established, otherwise it will emit an
     * error.
     */
    start():void {
        // Now we only want the connection started once, so we have a special
        //  starting$ observable that clients can subscribe to know know if
        //  if the startup sequence is done.
        //
        // If we just mapped the start() promise to an observable, then any time
        //  a client subscried to it the start sequence would be triggered
        //  again since it's a cold observable.
        //

        this.stop();
        var dataSource = this.data$['source'];
        var assignmentDataSource = this.asignmentData$['source'];
        var pageSyncDataSource = this.pageSyncData$['source'];
        var reviewDataSource = this.reviewData$['source'];
        var stateDataSource = this.stateData$['source'];

        this.createConnection().start()
            .done(() => {
                // if(this.connectionDropped) {
                //     this.toastService.connectionStarted();
                // }
                // this.connectionDropped = false;
                this.hubConnection.received((data) => {
                    dataSource['next'](data);
                });
                this.hubConnection.proxies.inclasshub.on('receiveAssignment', (data) => {
                    assignmentDataSource['next'](data);
                });
                this.hubConnection.proxies.inclasshub.on('receiveReview', (data) => {
                    reviewDataSource['next'](data);
                });
                this.hubConnection.proxies.inclasshub.on('receiveState', (data) => {
                    this.stateDataSubject.next(data);
                    //stateDataSource['next'](data);
                });

                this.hubConnection.proxies.inclasshub.on('syncCurrentPage', (data) => {
                    pageSyncDataSource['next'](data);
                });

                this.connectionState$.subscribe((state) => {
                    if (state == ConnectionState.Disconnected) {
                        // this.connectionDropped = true;
                        // this.toastService.connectionDropped();
                        this.onDisconnect();
                    }
                });
            })
            .fail((error:any) => {
                this.startingSubject.error(error);
            });
    }

    stop():void {
        let connection = this.hubConnection;
        if (connection) {
            delete this.hubConnection;
            connection.stop();
        }
    }

    onDisconnect():void {
        if (this.hubConnection) {
            this.start();
        }
    }

    /** publish provides a way for calles to emit events on any channel. In a
     * production app the server would ensure that only authorized clients can
     * actually emit the message, but here we're not concerned about that.
     */

    send(name:string, msg:string):void {
        this.hubConnection.send([name, msg]);
    }

    getConnection():any {
        return this.hubConnection;
    }

    getReceivedData():Observable<any> {
        return this.data$;
    }

    getAssignmentData():Observable<any> {
        return this.asignmentData$;
    }
    getPageSyncData():Observable<any> {
        return this.pageSyncData$;
    }
    getReviewData():Observable<any> {
        return this.reviewData$;
    }
    getPeerReviewState():Observable<any> {
        return this.stateData$;
    }
    getStateSubject():Subject<any> {
        return this.stateDataSubject;
    }
}
