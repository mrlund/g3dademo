import {Injectable, Inject} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

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
    uid:string;
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

class ChannelSubject {
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
    reviewData$:Observable<any>;

    // These are used to feed the public observables 
    //
    private connectionStateSubject = new Subject<ConnectionState>();
    private startingSubject = new Subject<any>();
    private errorSubject = new Subject<any>();
    private dataSubject = new Subject<any>();
    private asignmentDataSubject = new Subject<any>();
    private reviewDataSubject = new Subject<any>();

    // These are used to track the internal SignalR state 
    //
    private hubConnection:any;
    private hubProxy:any;

    // An internal array to track what channel subscriptions exist
    //
    private subjects = new Array<ChannelSubject>();

    constructor(@Inject(SignalrWindow) private window:SignalrWindow,
                @Inject("channel.config") private channelConfig:ChannelConfig) {
        if (this.window.$ === undefined || this.window.$.hubConnection === undefined) {
            throw new Error("The variable '$' or the .hubConnection() function are not defined...please check the SignalR scripts have been loaded properly");
        }

        var userData = JSON.parse(<string>localStorage.getItem('userData'));
        channelConfig.uid = userData['StudentId'];
        // Set up our observables
        //
        this.connectionState$ = this.connectionStateSubject.asObservable();
        this.error$ = this.errorSubject.asObservable();
        this.starting$ = this.startingSubject.asObservable();
        this.data$ = this.dataSubject.asObservable();
        this.asignmentData$ = this.asignmentDataSubject.asObservable();
        this.reviewData$ = this.reviewDataSubject.asObservable();


        this.hubConnection = this.window.$.hubConnection();
        this.hubConnection.url = channelConfig.url;
        this.hubConnection.qs = {'uid': channelConfig.uid};
        this.hubProxy = this.hubConnection.createHubProxy(channelConfig.hubName);

        // Define handlers for the connection state events
        //
        this.hubConnection.stateChanged((state:any) => {
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
        });

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
        var dataSource = this.data$['source'];
        var assignmentDataSource = this.asignmentData$['source'];
        var reviewDataSource = this.reviewData$['source'];
        this.hubConnection.start()
            .done(() => {
                this.hubConnection.received((data) => {
                    dataSource['next'](data);
                });
                this.hubConnection.proxies.inclasshub.on('receiveAssignment', (data) => {
                    assignmentDataSource['next'](data);
                });
                this.hubConnection.proxies.inclasshub.on('receiveReview', (data) => {
                    reviewDataSource['next'](data);
                });                
            })
            .fail((error:any) => {
                this.startingSubject.error(error);
            });
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
    getReviewData():Observable<any> {
        return this.reviewData$;
    }
}