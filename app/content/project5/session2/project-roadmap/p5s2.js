p5s2.js
Last month
Martin Lund shared an item
Dec 27, 2016
Javascript
p5s2.js
P
Can edit
You
A
Alexey Bogdankevich uploaded an item
Dec 15, 2016
Javascript
p5s2.js
No recorded activity before December 15, 2016

(function (lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes

// library properties:
    lib.properties = {
        width: 600,
        height: 600,
        fps: 24,
        color: "#FFFFFF",
        manifest: [
            {src:"images/background.jpg?1481795177445", id:"background"},
            {src:"sounds/_1.mp3?1481795177445", id:"_1"},
            {src:"sounds/_10.mp3?1481795177445", id:"_10"},
            {src:"sounds/_11.mp3?1481795177445", id:"_11"},
            {src:"sounds/_12.mp3?1481795177445", id:"_12"},
            {src:"sounds/_13.mp3?1481795177445", id:"_13"},
            {src:"sounds/_14.mp3?1481795177445", id:"_14"},
            {src:"sounds/_15.mp3?1481795177445", id:"_15"},
            {src:"sounds/_16.mp3?1481795177445", id:"_16"},
            {src:"sounds/_17.mp3?1481795177445", id:"_17"},
            {src:"sounds/_18.mp3?1481795177445", id:"_18"},
            {src:"sounds/_19.mp3?1481795177445", id:"_19"},
            {src:"sounds/_2.mp3?1481795177445", id:"_2"},
            {src:"sounds/_20.mp3?1481795177445", id:"_20"},
            {src:"sounds/_21.mp3?1481795177445", id:"_21"},
            {src:"sounds/_22.mp3?1481795177445", id:"_22"},
            {src:"sounds/_23.mp3?1481795177445", id:"_23"},
            {src:"sounds/_3.mp3?1481795177445", id:"_3"},
            {src:"sounds/_4.mp3?1481795177445", id:"_4"},
            {src:"sounds/_5.mp3?1481795177445", id:"_5"},
            {src:"sounds/_6.mp3?1481795177445", id:"_6"},
            {src:"sounds/_7.mp3?1481795177445", id:"_7"},
            {src:"sounds/_8.mp3?1481795177445", id:"_8"},
            {src:"sounds/_9.mp3?1481795177445", id:"_9"}
        ]
    };



// symbols:



    (lib.background = function() {
        this.initialize(img.background);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,920,920);


    (lib.thgtyh = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#1D1C1A").s().p("Ag5AJQAagbAjADQAlADAPgMIAIgOQgBAUgPAKQAYgOAEgNIgDANQgFAOgKAGQAPgBAEgFIgGAIQgJAJgNgEQg2gGgIABQgnABgYAlQAGgPANgOg");
        this.shape.setTransform(61.8,9.6,1.516,1.516);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#1D1C1A").s().p("AAVgKQgsgRhHAZQgVAGgPgOIgMgQQAIAKAZACQgRgLgJgXIgFgUQAGAUAoAVQgQgJgHgTIgEgSIANAVQAaAUA6gHQA5gGA8A5QAeAfATAfQhWhJgjgLg");
        this.shape_1.setTransform(14.3,7.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{rotation:0,x:14.3,y:7.4}},{t:this.shape,p:{rotation:0,x:61.8,y:9.6}}]}).to({state:[{t:this.shape_1,p:{rotation:-30,x:13.8,y:16}},{t:this.shape,p:{rotation:30,x:63,y:15.9}}]},14).to({state:[{t:this.shape_1,p:{rotation:0,x:14.3,y:7.4}},{t:this.shape,p:{rotation:0,x:61.8,y:9.6}}]},4).wait(42));

        // Слой 2
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#8D6845").s().p("ACdBsQgKgDgEgIQgFgKAEgMQADgJAJgKIACgGIgCgFQgKgQAIgUQAEgLAQgSQAkgnAkgNQARgHAMAFQAJAEAEAJQAEAJgDAJQAJAAATgCQARAAAJAJQAGAGAAAKQAAAKgGAHIgGAEIAAAJQAAARgWAIQgHACgDADQgDADgCAEQgMAXgLAGQgJAFgXAAQgUgBgJgFQgDADgEAGIgHAKQgJAMgQADIgGABQgGAAgGgCgAiwBVQgmgFgUgBQgaAAgJgCQgUgEgGgQQgDgHABgVIAAgLIgEgEIgHgLIgFgIIgIgKIgBgGQgRgDgGgSQgFgRANgNQAEgEAHgDIANgGIAPgJQAJgGAGgCQAggPA4ATQAOAFAMAGQAMAIAGACIAJACIAKADQAFADAJAKQAEADAKAFQAJAEAEADQAIAIAHAVQADAHAIAIIAMAQQAFAKAAAKQAAALgHAGQgFAEgIACIgPACQgHACgLAGIgRAIQgSAIgaAAIgOAAg");
        this.shape_2.setTransform(33.9,12.4);
        this.shape_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(14).to({_off:false},0).to({_off:true},4).wait(42));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,73.6,15.5);


    (lib.rtvgretvrevкопия2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#B2242C").s().p("AgdDFQiYgeAIhmQAagYAZgiQAxhCgCg0QgBggAagcQAbgcAlgGQBkgQA8CMIgfB9QgcCEAIAfIgpABQg5AAg2gLg");
        this.shape.setTransform(-1.4,27.6,1.361,1.361,0,-54.5,125.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#C89F83").s().p("ACBDMIj1hnQqJkAGjhlQDaAJEFCIQEHCFALgKQDXCrjlBDQgYAHgeAAQhUAAh+g1g");
        this.shape_1.setTransform(25.2,41.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-30.1,8.2,106.5,59.1);


    (lib.rtvgretvrevкопия = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CE232F").s().p("AgdDFQiYgeAIhmQAagYAZgiQAxhCgCg0QgBggAagcQAbgcAlgGQBkgQA8CMIgfB9QgcCEAIAfIgpABQg5AAg2gLg");
        this.shape.setTransform(-1.4,27.6,1.361,1.361,0,-54.5,125.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#D7AF94").s().p("ACBDMIj1hnQqJkAGjhlQDaAJEFCIQEHCFALgKQDXCrjlBDQgYAHgeAAQhUAAh+g1g");
        this.shape_1.setTransform(25.2,41.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-30.1,8.2,106.5,59.1);


    (lib.rtvevetrv2копия = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D7AF94").s().p("AAoDBQhEgcgtg8Iggg3QgGgYALgIQAFgFAKgDQAPgQAHgBQAEgBABACIAGgWQAEgPASAGQAJADAJAFIgag/QgahBgBgKQgBgQAQgMQARgOAKAcQAIAZAcBBIAmBTQAGANAAgEQABgBgDgSQgIgyAEgPQAFgTATABQAJABAJAEIgJAaQgHAeANAUQANAUAEAoQACAUgBAQQgOCCgOgKQgMAFgJAAQgMAAgHgIg");
        this.shape.setTransform(9.1,20.2,0.994,0.994,0,30,-150);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-8,4.8,31.7,30.4);


    (lib.rtvevetrvкопия1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D7AF94").s().p("AgSCDQhDhIgvhIQgQgZgBgJQgBgHAIgGQAIgGAlAvQAiArABgCQABgGgWgcIgsg6QgUgZACgOQAAgHAJgFQAGgEAIAHQAOALAeAuQA0BKgJgfQgEgLhGhnQgKgOgEgHQgFgMAGgKQAMgUAsBFQAsBGACgBQAEgEg0hsQgMgXAPgIQAQgHAOAbQA3B8AcAmQAPATAMgBQAHAAgXgnIgeg2IgQghQgHgTALgCQAMgBAYAdQALAPAKAPQBKCFACA1QADA8hNArQgDACgDAAQgZAAg/hHg");
        this.shape.setTransform(12.7,24.2,1.03,1.03,0,30,-150);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.2,9,40,30);


    (lib.rtvevetrvкопия2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // flash0.ai
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D7AF94").s().p("AirBdQB1iZAUgdQASgYA1gxQA5gzAGAHQAEAEAqABQAnABgCAFQgDAGgqARQgpASgBAEQgCAIhHA+IAugBQAuABAAAMQAAANgGADIgFABIATADQASAFgFAJQgHAPgPACIAOAJQAOAJgGALQgJARgrAaQgHAVgZAaQgwAyhSAWQgkAdgdAEIgIABQgxAAAdhzg");
        this.shape.setTransform(12.9,15.4,1,1,0,90,-90);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.9,-2.9,41.7,36.6);


    (lib.rtvevetrvкопия = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#C89F83").s().p("AgSCDQhDhIgvhIQgQgZgBgJQgBgHAIgGQAIgGAlAvQAiArABgCQABgGgWgcIgsg6QgUgZACgOQAAgHAJgFQAGgEAIAHQAOALAeAuQA0BKgJgfQgEgLhGhnQgKgOgEgHQgFgMAGgKQAMgUAsBFQAsBGACgBQAEgEg0hsQgMgXAPgIQAQgHAOAbQA3B8AcAmQAPATAMgBQAHAAgXgnIgeg2IgQghQgHgTALgCQAMgBAYAdQALAPAKAPQBKCFACA1QADA8hNArQgDACgDAAQgZAAg/hHg");
        this.shape.setTransform(12.7,24.2,1.03,1.03,0,30,-150);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.2,9,40,30);


    (lib.ClipGroup_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgGAGAAQACAAADACQACACAAACQAAAGgHABQgBAAgDgCg");
        this.shape.setTransform(7,6.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#161211").s().p("AgPASQgHgIgBgJQAAgJAHgHQAGgHAKgBQAIgBAIAIQAHAGABAKQAAAJgHAHQgGAIgKAAIgBAAQgIAAgHgGg");
        this.shape_1.setTransform(5.3,5.3);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#4A3829").s().p("AgUAYQgKgJgBgOQAAgMAJgKQAJgKANgBQALAAAKAJQAKAJABAOQABAMgKAKQgJAKgNAAIgBABQgLAAgJgJg");
        this.shape_2.setTransform(5.3,5.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(2.1,2.1,6.5,6.6);


    (lib.ClipGroup = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQADgBACADQADACAAADQAAAHgIABQgGAAgBgIg");
        this.shape.setTransform(11.1,9.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#161211").s().p("AgRAUQgIgIAAgLQgBgKAIgIQAHgIALgBQAJAAAJAHQAIAIAAALQABAJgHAJQgIAIgLABIgBAAQgJAAgIgHg");
        this.shape_1.setTransform(9.2,8.1);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#4A3829").s().p("AgXAbQgLgKgBgQQAAgNAKgLQAKgLAPgBQANgBALAKQALALABAPQABANgLAMQgKALgPAAIgBAAQgNAAgKgJg");
        this.shape_2.setTransform(9.2,8.2);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(5.6,4.6,7.3,7.4);


    (lib.lips = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Режим изоляции
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#AE8163").s().p("AgzgCIAogTQApgMARAhQANAZgXAAQgYAAhAgbg");
        this.shape.setTransform(13.6,9.5,1.442,1.442,0,0,180);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#583E2D").s().p("Ag3AZIAjglQAmghAcAcQAeAbg7AOQgcAHgTAAQgRAAgIgGg");
        this.shape_1.setTransform(13.1,4.3,1.442,1.442,0,0,180);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#DCC1BD").s().p("AgqAAQgcgRgMgMIBSAQQAwALAjALQgTgGgZALQghAPgGABQgNgLgdgTg");
        this.shape_2.setTransform(14.5,6.7,0.101,0.082);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#DCC1BD").s().p("Ag1gCQgkgfgkgLIgFgLICDADQBMADA2AMQgnABgiAgQgXAQggAsQgjgqgVgQg");
        this.shape_3.setTransform(11.2,6.8,0.101,0.082);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#DCC1BD").s().p("Ag7ARQgbgSgbgGIgIgKQAhgPA1gIIBZgNQAggFAkAEQgoAIgmAlIg6BBQgagagTgNg");
        this.shape_4.setTransform(8,6.8,0.101,0.082);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#6B4F3D").s().p("AhfAcIABgVQBJgYBxgKIAEALIhbAMQgzAHghAPIAIAKg");
        this.shape_5.setTransform(8,6.6,0.101,0.082);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#AE8163").s().p("AqEGDQj+gdiHh4Qg8g0gihNQgihLgBhQQgBgOADg5QACgrgJgaQB2BCBbgIQAdAUAoANQAdAJAtAJQBKANBVAFQBHAFBagBQFWgEFIhNQFIhODiiIIAYABQCXgYA4gHQB0gOBcAAQjBBTjKDCQh6BzhLA8QhxBchoA5QiCBHh/ApQjQAuiiASQhvAMhnAAQhUAAhOgIg");
        this.shape_6.setTransform(14.9,10.3,0.101,0.082);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#583E2D").s().p("Aw9F1QgOgbgjghQgsgqgKgOQg6hBgdhCQgjhPAHhJQAGhNA1hEQAvg8BKgsQBuhBCMgmQB4gfCUgNQDqgYD2AqQDmAoDmBgQBjAnCNBCIDtBwQEgCDDMAtQAGAXgVAJQgIAEggAEQhbAAh1AOQg4AHiXAYIgYgBIAOgOQhAAOhLADQg+ADhQgDQhMgGhjgVIitgpQicgkhMgOQiDgWhqgBQhcgGiSAJQhzAKhJAaQhBAVgsAkQg1ApgTA5IACBTQABAxACAiIgTABQhUAAhqg7g");
        this.shape_7.setTransform(14.1,5.7,0.101,0.082);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AvpEmIAApMIfTCcImzGwg");
        this.shape_8.setTransform(14.1,7.8,0.101,0.082);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AhKAQQgLglAGgbQAcAKAiAFQBDANAggOQgBAQgTASQglAkhXAMQgHgOgFgSg");
        this.shape_9.setTransform(13.3,8.3,0.771,0.771);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#583E2D").s().p("AhiAuQgwgUgPgvQgCgJACgDQABgEAIgCQAYgGAhACQAUABAlAHQAxAJAOABQAhADAfgIIAngKQAggJADgIQgPAqgvAdQgtAeg3AKQgTAEgTAAQgiAAgbgMg");
        this.shape_10.setTransform(13.4,4.6,0.771,0.771);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#AE8163").s().p("AiJBLQgIgTAGgUQAIgWAVgMQACgCANgDQAZgGA5gBQA3gBA4gvQAcgYARgXQAEBZhVA7QgnAchMAcQgVAHgQAAQghAAgOgfg");
        this.shape_11.setTransform(15,8.3,0.771,0.771);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#F09393").s().p("Al3ENQhUgeg1g+QBgifBnhoQBVhZBhg1QBtg8BugGQASAHBBAfQA1AZAiAKQAVANBmBNQBMA4A3AXQhsAUhQAtQg6AhhrBHQhvBJg1AgQg9AggmAQQg5AWgyADIgQAAQhOAAhGgag");
        this.shape_12.setTransform(13.8,8.6,0.104,0.085);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#C41C1C").s().p("AmQC+IgZgyQgQgfgEgVQARhYAJgtQAShNAag0QAVgqAqgdQAngcAxgKQCtglC1A1QCsAyCQB2QgjgKg0gZQhBgfgTgIQhvAGhtA8QhfA1hVBYQhnBqhgCfQgeghguhMg");
        this.shape_13.setTransform(11.9,7.6,0.104,0.085);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#AE8163").s().p("Aj4GXQiKgEiDgsQhhghhOg2QhVg7g3hNQhJhjgQiFQgPh6AgiAQB4AyBvAMQAuBMAfAhQA1A9BTAfQBOAcBWgDQAygDA5gWQAngPA8ghQA4gfBshJQBshIA6ggQBPgvBtgUQARAHAYAEIAqAFQDbAaDFgYQgCARgMAPQhiA8huB9Qh4CRhABBQhqB2h5BUQiEBaiMArQhzAhh9AAIgeAAg");
        this.shape_14.setTransform(14.7,11.6,0.104,0.085);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#583E2D").s().p("AtKGIQhgh5gliMQgWhXALhUQAMhaAuhIQA4hZBkg9QBag3BwgZQDOgsDmAuQDKAqDQBsQB0BBB/B9QBKBICMCVQBEBFAqAjQBBA1A/AaQAKAEAGALQAGAMgEAJQjFAYjbgaIgqgFQgYgEgRgHQg4gXhLg4QhnhOgVgMQiPh2irgwQi3g1itAlQgxAKgnAaQgqAdgVAqQgaA0gRBNQgKAtgQBaQADAVAQAfIAZAyQhvgMh4gyg");
        this.shape_15.setTransform(14.1,5.3,0.104,0.085);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#FFFFFF").s().p("AgSATQgDgGgBgIQgDgOAHgJQAGgIAUASQALAIAFAMQgCADgJADQgKADgHAAQgHAAgHgCg");
        this.shape_16.setTransform(11.6,6.5,1.96,1.96);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#583E2D").s().p("AhjAnIADgQQAahxBXA0QAsAaAnAvIgBAEQg8AQgwAAQgyAAgogQg");
        this.shape_17.setTransform(13.4,3.7);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#AE8163").s().p("AhhgwQBRAgB1ggQgNAjgkAaQglAcglAGIgTACQhJAAARhhg");
        this.shape_18.setTransform(13.2,12.6);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#FFFFFF").s().p("Ag4gSQAZACAbgBQA0gBAJgKQgDAMgLAOQgWAYglAHg");
        this.shape_19.setTransform(14.1,8.5,1.05,1.05,10.7);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#583E2D").s().p("AhwAQQgDgFABgDQABgEAFgCQARgGAXgEQAOgCAcgBIAugDQAZgDAVgKIAbgOQAVgLABgGQgEAggdAcQgcAdgmAPQgfANgaAAQgvAAgYgrg");
        this.shape_20.setTransform(13.3,4,1.05,1.05,10.7);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#AE8163").s().p("AhTBPQgWgfAegaQABgDAJgEQARgJApgIQAmgJAhgrQARgVAIgTQARA/gzA3QgYAagyAhQgUAMgPAAQgRAAgMgQg");
        this.shape_21.setTransform(14.7,9.2,1.05,1.05,10.7);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#FFFFFF").s().p("AnRESQiSgGiFgaQgOg6gXg7QgZhAgohFQEcBVFmgOQG6gXFeiYQBWgoAygeQBJgsAwgxQAEARgEAZIgIApQhrBVhbA+QhtBGhoAxQjLBsjkAzQi/ArjEAAQgkAAglgCg");
        this.shape_22.setTransform(13.3,5,0.104,0.085);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#F09393").s().p("AmHBzQifh1hNiEQDoAJDkgyQDkgzDLhsIASAGQC5ALChgZQACASgGAYIgMAqQgcBigzBZQg0BXhHBIQiKCOjWBxQj/hWjCiOg");
        this.shape_23.setTransform(15,8.5,0.104,0.085);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#C41C1C").s().p("AnmEDQBIlNg/j9QCFAaCRAHQBOCFCdB2QDCCMEBBWIghAVQjkBeivAWQg+AIhBAAQjDAAjXhFg");
        this.shape_24.setTransform(10.5,9.9,0.104,0.085);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#C41C1C").s().p("Ai5CHIgTgGQBogxBrhJQBcg7BqhWQgGBJgYCOIgFAXQgDAOgJAHQhwASh6AAQg2AAg3gEg");
        this.shape_25.setTransform(19.9,4.6,0.104,0.085);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#AE8163").s().p("AsSMaQg/gugjhLQgjhJADhPQAsjaAKhBQAXiigMh8QgIhcgphaQgmhVhAhLQAqAJBUAVQBLARA1gCQAXA8AOA5QA/D7hHFPQEgBcD6gfQCvgWDjheIAggVQDWhwCKiOQBHhGA0haQAzhYAchjIAMgpQAGgZgCgRQAIgHAEgOIAEgYQAYiQAHhIIAIgqQAEgYgEgRQApgyBUhhQgZBNgOBqIgTC7IgTC5QgNBsgVBMQgvDGhYCSQhDBwhnBqQhXBbh4BdIh1BYQhFAwg5AaQkECAkLALIgdABQjoAAiHhkg");
        this.shape_26.setTransform(13,9,0.104,0.085);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#583E2D").s().p("Ar7EZQhVgWgqgIQhJgug3hAQg6hDgehMQgRgygEgWQgHgrAQgeQAVgaAngQQAWgKAwgOQBygbCMgDQBkgCCcAKQC6AQC3AgQE7BADpAMQB6AEBVgGQBwgHBbgZQCpgtBjhpQARAEgGAPIgMAaQhUBhgpAxQgxAyhIArQgyAchWAoQleCbm7AXQllANkdhXQAoBHAaBAIgLAAQgyAAhDgPg");
        this.shape_27.setTransform(11.8,3.6,0.104,0.085);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#F09393").s().p("AjvDAQhPgIg7gnIACgQQAZiTBBhvQCcAeDGheIAHACQAYA8BBAlQA3AgBIAHQAIACAkACQAbABAPAIQiZBehKAmQiDBEhwAYQg3AMgzAAQgVAAgUgCg");
        this.shape_28.setTransform(11.5,8.9,0.104,0.085);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#C41C1C").s().p("AhhAiIgJgRQgGgLgHgEQAsgQAQg6IAPhlQBJBHBaASQhBBtgZCVQhNgygxhag");
        this.shape_29.setTransform(7.3,8.6,0.104,0.085);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#AE8163").s().p("AmbFrQiAgWhfgdQh2glhcg1QhIgqgzg6Qg4g/gYhHQgxiZBPjPQByBCCKAEQA0B/BgA9QA8AnBOAIQBGAHBNgRQBygYCDhEQBKgmCXhgQARAGAqACQHKAdGcguIgEAOQkdBVkZEaQhqBwiJBJQiKBKiVAaQhmAThvAAQhQAAhVgKg");
        this.shape_30.setTransform(14.1,11.2,0.104,0.085);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#583E2D").s().p("AC/FZQgqgCgRgGQgPgIgcgBQgjgCgJgCQhFgHg4ggQhAglgYg8IgHgCQjJBeibgeQhagShMhHIgPBlQgQA6grASQiKgEhyhCQg3i6AdiUQANhGAlg6QAng9A5gkQBJgtBbgDQBYgCBPAmQBFAiBGAHQBNAIBCgZQAlgQBLghQBCgaA1gBQAwABApASQAtATAgAiQCPCBB8BhQCSBxCMBVQBiA8BTAmQBlAtBdAVQAJABAGAIIAKAOQj7AckNAAQirAAiygLg");
        this.shape_31.setTransform(14.1,5.7,0.104,0.085);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#FFFFFF").s().p("AgeATIgTgaIAcgKQAigDAlAng");
        this.shape_32.setTransform(13,6.8,1.474,1.474);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#AE8163").s().p("AhDAHQgGgJAOgKQANgJAYgBQA5gEAjAnQgfAHghACIgXACQgrAAgHgRg");
        this.shape_33.setTransform(13.1,9.7,1.474,1.474);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#583E2D").s().p("ABAAcQgKgGgKgDQgNgHgSgBIgegBQgnAAgSgJIgEgCIABgGQAYgvA+AYQA+AXAIAuQgBgEgOgHg");
        this.shape_34.setTransform(11.7,5.8,1.474,1.474);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},2).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},2).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},2).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},2).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},2).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(5,-0.2,16.3,13.5);


    (lib.Lash = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#222220").s().p("Ag7AAQAagdAmAIQAlAIAQgIQAIgDABgGIAAAHQgBAIgJABQAHAFAJgLIABAFQgBAFgJAEIADADQAEADAHgCQgBACgEAAQgJABgOgDQgpgLgTAAQglABgeArQAFgRANgOg");
        this.shape.setTransform(20.8,12.9,1.323,1.323,0,-30,150,-7.8,3.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#222220").s().p("AALgQQgggPgzASQgPAFgKgEIgCgCQAGACAKgEQgMgIgDgKIAAgJQADAKAMAFQAGACAFABQgLgHgDgIIAAgHIAHAKQAPAIArgFQAogEAtApQAWAWANAXQhDg2gVgKg");
        this.shape_1.setTransform(41.6,12.7,1.323,1.323,0,25.4,-154.6,10,4.8);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},14).to({state:[]},5).wait(36));

        // Слой 1
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#222220").s().p("Ag7AAQAagdAmAIQAlAIAQgIQAIgDABgGIAAAHQgBAIgJABQAHAFAJgLIABAFQgBAFgJAEIADADQAEADAHgCQgBACgEAAQgJABgOgDQgpgLgTAAQglABgeArQAFgRANgOg");
        this.shape_2.setTransform(10.4,8.8,1.323,1.323,0,0,180);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#222220").s().p("AALgQQgggPgzASQgPAFgKgEIgCgCQAGACAKgEQgMgIgDgKIAAgJQADAKAMAFQAGACAFABQgLgHgDgIIAAgHIAHAKQAPAIArgFQAogEAtApQAWAWANAXQhDg2gVgKg");
        this.shape_3.setTransform(54.9,6.4,1.323,1.323,0,0,180);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#C89F83").s().p("ABQBdQgXgNgFgiQgCgRAEgJQAGgLASgJQAFgDABgCIgBgIQgEgNAGgPQAGgPANgHQAHgEANgDQAugNAaAAQAJABAFgCIAJgHQAKgGAPgBQAlgEAPAVQAEAFADAJIAFAPIAHAWQADAKAEATIADAKQADAIgBAFQAAAMgKALQgRAWgaAEIgfABQgJAAgDACQgEABgFAGQgNAMgRADQgTADgPgHQgCgCgDAAIgFAEQgIAGgTAAQgegBgLgGgAjpBgQgQgEgHgPQgJAGgKABQgLAAgHgIIgIgLIgIgMQgFgIgBgJIgBgLIgGgMQgFgLAAgJQABgKAFgIQAGgJAJgCIAKgCIAHgEQAGgFAOgCIAYgDQAdgEAPABQAJABAQAFQAUAGAJAIQAOAPgGAPIgEAIIAAAJQACAWgFARIgCAIQgDALgHAHQgHAIgKABQgNgCgGACIgJAGQgJAGgKAAIgLgCg");
        this.shape_4.setTransform(36.3,9.6);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_4}]},14).to({state:[{t:this.shape_3},{t:this.shape_2}]},5).wait(36));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,68.1,13);


    (lib.JennLips = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // flash0.ai
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#F6ECE1").s().p("AgsAEIAegJQAegMAKgCQAMgBAFASQAEAPgGAHg");
        this.shape.setTransform(11.6,7,1.802,1.802,0,0,180);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#C88E86").s().p("AAZgYQAfgDAVAGQAiAVhfAOIhlAMQAxgsA9gGg");
        this.shape_1.setTransform(11.7,4.5,1.802,1.802,0,0,180);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#BE8580").s().p("AgUAEIg1gQIA0gGQA4gFAZALIAMAPQAHARgWABIgDAAQgWAAg0gRg");
        this.shape_2.setTransform(13.9,11.7,1.802,1.802,0,0,180);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#BE8580").s().p("AhDAHQgGgJAOgJQANgJAYgCQA5gEAjAnQgfAHghACIgWABQgrAAgIgQg");
        this.shape_3.setTransform(13.4,9.8,1.435,1.435);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#C88E86").s().p("ABAAbIgTgIQgOgHgRgBQgIgBgXAAIgdgCQgQgBgMgGIgEgBQAAgDACgDQAYgvA+AYQA9AWAIAtQgBgEgOgHg");
        this.shape_4.setTransform(12.1,6.1,1.435,1.435);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#F6ECE1").s().p("AgeATIgTgaIAcgKQAigDAlAng");
        this.shape_5.setTransform(13,6.8,1.474,1.474);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#BE8580").s().p("AhDAHQgGgJAOgKQANgJAYgBQA5gEAjAnQgfAHghACIgXACQgrAAgHgRg");
        this.shape_6.setTransform(13.1,9.7,1.474,1.474);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#C88E86").s().p("ABAAcQgKgGgKgDQgNgHgSgBIgegBQgnAAgSgJIgEgCIABgGQAYgvA+AYQA+AXAIAuQgBgEgOgHg");
        this.shape_7.setTransform(11.7,5.8,1.474,1.474);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#F6ECE1").s().p("AhKAQQgLglAGgbQAcAKAiAFQBDANAggOQgBAQgTASQglAkhXAMQgHgOgFgSg");
        this.shape_8.setTransform(11.7,8.3,0.771,0.771);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#C88E86").s().p("AhiAuQgwgUgPgvQgCgJACgDQABgEAIgCQAYgGAhACQAUABAlAHQAxAJAOABQAhADAfgIIAngKQAggJADgIQgPAqgvAdQgtAeg3AKQgTAEgTAAQgiAAgbgMg");
        this.shape_9.setTransform(11.8,4.6,0.771,0.771);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#BE8580").s().p("AiJBLQgIgTAGgUQAIgWAVgMQACgCANgDQAZgGA5gBQA3gBA4gvQAcgYARgXQAEBZhVA7QgnAchMAcQgVAHgQAAQghAAgOgfg");
        this.shape_10.setTransform(13.4,8.3,0.771,0.771);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#F6ECE1").s().p("Ag4gSQAZACAbgBQA0gBAJgKQgDAMgLAOQgWAYglAHg");
        this.shape_11.setTransform(14.1,8.5,1.05,1.05,10.7);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#C88E86").s().p("AhwAQQgDgFABgDQABgEAFgCQARgGAXgEQAOgCAcgBIAugDQAZgDAVgKIAbgOQAVgLABgGQgEAggdAcQgcAdgmAPQgfANgaAAQgvAAgYgrg");
        this.shape_12.setTransform(13.3,4,1.05,1.05,10.7);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#BE8580").s().p("AhTBPQgWgfAegaQABgDAJgEQARgJApgIQAmgJAhgrQARgVAIgTQARA/gzA3QgYAagyAhQgUAMgPAAQgRAAgMgQg");
        this.shape_13.setTransform(14.7,9.2,1.05,1.05,10.7);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#F6ECE1").s().p("AgUATQgDgGgBgIQgDgOAHgJQAGgIAUASQALAIAJAKQgGAFgJADQgKADgHAAQgIAAgGgCg");
        this.shape_14.setTransform(11,7.3,1.96,1.96);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#BE8580").s().p("AgvgIQANg6ArAaQAXAOAUAZQgGARgUAPQgTAOgSADIgJABQgoAAANg5g");
        this.shape_15.setTransform(12.2,8.6,1.96,1.96);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#C88E86").s().p("AAmglQAvgFAhAJQA0AhiSAWQhHAMhTAGQBKhDBegKg");
        this.shape_16.setTransform(13.7,5.6,1.171,1.171,0,0,180);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#BE8580").s().p("AggAGQgqgLgmgOQAkgGAsgEQBVgGAnAQIASAXQAKAaghACIgEAAQgiAAhRgag");
        this.shape_17.setTransform(15.9,12.7,1.171,1.171,0,0,180);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#F6ECE1").s().p("AAXAoQhQgHgpgqIBOgIQBTgLAjgNIgDBQQgSADgUAAQgQAAgSgCg");
        this.shape_18.setTransform(14.9,8.8,1,1,0,0,180);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#C88E86").s().p("AhBAhQgygSgggaQBMAPBJgSQAmgJAWgOQAVgSAYAIQANAFAIAHQAaASgJAWQgEAMgKAIQg1AZg3AAQgqAAgugRg");
        this.shape_19.setTransform(14.8,5.1,1,1,0,0,180);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#BE8580").s().p("AguApQhQgggNhFQAgAOAnAMQBNAZAlgHQAkgGASABQAIABACACQAiAOgEAeQgFAggtADIgZAAQg9AAgygUg");
        this.shape_20.setTransform(15.6,10,1,1,0,0,180);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},2).to({state:[{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},2).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.9,-0.2,31.2,15.8);


    (lib.JennBody = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CE232F").s().p("ABmEFIh2iMQgugegsglQhYhHAJggQAtiaB7g0IAbgGQAkgEAfAOQBiAqAKDDQAKDCgtA8QgSAXgTAAQgFAAgGgCg");
        this.shape.setTransform(106.1,72.8,1.038,1.086,0,0,180);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B2242C").s().p("AhKBiQgFg9AAh1IABi/ICLDIQAOAUADAKQAFASgHAXQgFANgOAYIhnC2IAJA1QgchKgJhkg");
        this.shape_1.setTransform(92.4,100.4,1,1,0,0,180);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AgMANQgGgGAAgHQAAgHAGgFQAGgGAGAAQAHAAAHAGQAFAFAAAHQAAAIgFAFQgHAGgHAAQgGAAgGgGgAACAFQAAAAAAABQAAABAAAAQABAAAAABQABAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBAAgBAAQAAABgBAAQAAABAAAAQAAABAAABgAgHAFQAAAAAAABQAAABABAAQAAAAABABQABAAABAAQAAAAABAAQABgBAAAAQABAAAAgBQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAgBgBQgBAAAAAAQgBAAgBAAQgBABAAAAQgBABAAAAQAAABAAABgAACgEQAAABAAABQAAAAAAABQABAAAAABQABAAABAAQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABgAgHgEQAAABAAABQAAAAABABQAAAAABABQABAAABAAQAAAAABAAQABgBAAAAQABgBAAAAQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBAAAAAAQgBAAgBAAQgBABAAAAQgBAAAAABQAAAAAAABg");
        this.shape_2.setTransform(42.7,89,1.241,1.241,0,0,180);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgMAOQgGgHAAgHQAAgGAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAGQAAAIgGAGQgFAFgIAAQgHAAgFgFgAACAFQAAAAAAABQAAABAAAAQABABAAAAQABAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQAAAAgBABQAAAAAAABQAAABAAABgAgHAFQAAAAAAABQAAABABAAQAAABABAAQABAAAAAAQABAAABAAQABAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAgBQAAgBgBAAQAAgBgBAAQgBAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAABQAAABAAABgAACgDQAAAAAAABQAAABAAAAQABABAAAAQABAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQAAAAgBABQAAAAAAABQAAABAAABgAgHgDQAAAAAAABQAAABABAAQAAABABAAQABAAAAAAQABAAABAAQABAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAgBQAAgBgBAAQAAgBgBAAQgBAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAABQAAABAAABg");
        this.shape_3.setTransform(43.1,80.2,1.241,1.241,0,0,180);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AgMAOQgGgHAAgHQAAgGAGgGQAFgGAHAAQAIAAAFAGQAGAGAAAGQAAAHgGAHQgFAFgIAAQgHAAgFgFgAABAFQAAAAAAABQABABAAAAQABABAAAAQABAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAABAAABgAgHAFQAAAAAAABQAAABABAAQAAABABAAQAAAAABAAQABAAABAAQAAAAABgBQAAAAABgBQAAgBAAAAQAAgBAAgBQgBgBAAAAQgBgBAAAAQgBAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAABAAABgAABgDQAAAAAAABQABAAAAABQABAAAAAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAABAAABgAgHgDQAAAAAAABQAAAAABABQAAAAABAAQAAAAABAAQABAAABAAQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBAAgBQgBgBAAAAQgBgBAAAAQgBAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAABAAABg");
        this.shape_4.setTransform(44,71.4,1.241,1.241,0,0,180);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#C89F83").s().p("AijAPQAWgVgNh/IgRh6QALgRCXBIQBKAkBKAoQgGAOARBDQAJAiAKAcQAJAkgXBpQgLA1gOAug");
        this.shape_5.setTransform(60.8,35.3,1.241,1.241,0,0,180);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#CE232F").s().p("Ah5KOQiXgHh6gXQAFhMAUgzIATgjQAXh5gTh5IgXhgIgQrVICtg3QAsAmCUgNQBIgHBBgOQAhgIA8AcQAeAOAXAPQATBABTC1QA4BlgxFAQgZChgkCNQAmCPgKA5QgEAcgNAAQh3BAjiAAQgvAAgzgDg");
        this.shape_6.setTransform(52.7,118.3,1.241,1.241,0,0,180);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(3.6,3.1,122,196.9);


    (lib.Path_2_0 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#C8DFE3").s().p("AgMBNQgnAAgcgbQgbgcAAglIAAgmQAAgJAHgHQAHgHAJAAICnAAQAKAAAGAHQAHAHAAAJIAAAmQAAAlgbAcQgcAbgmAAg");
        this.shape.setTransform(10.8,7.8);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,21.6,15.5);


    (lib.Path_2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#C8DFE3").s().p("AgMBNQgnAAgcgbQgbgcAAglIAAgmQAAgJAHgIQAGgGAKAAICnAAQAKAAAGAGQAHAIAAAJIAAAmQAAAlgbAcQgcAbgmAAg");
        this.shape.setTransform(10.8,7.8);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,21.6,15.5);


    (lib.Path_0 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgHgaIAOAAQABALgCANQgEAYgJAFg");
        this.shape.setTransform(0.8,2.8);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,1.6,5.6);


    (lib.Path = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgHgaIAOAAQABAMgCAMQgEAYgJAFg");
        this.shape.setTransform(0.8,2.8);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,1.6,5.6);


    (lib.ClipGroup_2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 3
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQACgBADADQADACAAADQAAACgCADQgDADgDAAQgGAAgBgIg");
        this.shape_3.setTransform(7.6,5.1);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#1C1717").s().p("AgQAUQgIgIgBgLQgBgJAIgJQAHgIALgBQAKAAAIAHQAIAIAAALQABAKgIAIQgHAIgLABIgBAAQgJAAgHgHg");
        this.shape_4.setTransform(5.7,3.5);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#4A3A2E").s().p("AgXAaQgKgKgBgPQgBgNAKgLQAKgLAPgBQANgBALAKQALALAAAPQABANgKALQgKALgPABIgBAAQgNAAgKgKg");
        this.shape_5.setTransform(5.7,3.7);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(2.1,0,7.2,7.3);


    (lib.erervevкопия = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#C89F83").s().p("AlNDcQgVgBgGgCQj2hcDzivQAWgQAbgCQAbgCEfhDQEhhDCRgQQBLA9gjAuQgiAUl5CcQlzCdgZABIAAgBg");
        this.shape.setTransform(48.5,25.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,3.2,97.1,44.2);


    (lib.erervev = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D7AF94").s().p("AlYDdQgVgCg4glQg5glAGhJQAHhIBPgfQBOghEmhGQEkhGCRgQQBKA9gjAuQgiAUl4CcQl0CegXAAIgBAAg");
        this.shape.setTransform(49.7,25.3);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(2.3,3.2,94.8,44.3);


    (lib.Brow2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AgkABIghANQgOAFgIgJQAJgMAQgMQAigYAmAHQAoAHAbAcQANAQAGAOQhJgxg3AQg");
        this.shape.setTransform(12.2,4.6,1.323,1.323,0,0,180);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,24.5,9.1);


    (lib.brow1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AhWAIQAjghAvgMQAygNAnAfQAUAQAJAQQgQAAgXgIQgbgIgOgCQg2gHhdA2QAJgQASgSg");
        this.shape.setTransform(15.1,5.6,1.323,1.323,0,0,180);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,30.3,11.2);


    (lib._54ggg = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#583E2D").s().p("ABTAfQgagQgRgHQhDgdhUArQAJgQASgNQAkgfAwACQAwABAkAjQATARAJASQgEACgFAAQgJAAgLgGg");
        this.shape.setTransform(17,5.7,1.516,1.516);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,34,11.4);


    (lib._5gggt = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#583E2D").s().p("AhTAfQAGgRAOgPQAcgiAjACQAlACAbAfQAOAQAGAQQg/gwgyAZQgNAGgTAOQgIAFgGAAQgFAAgDgDg");
        this.shape.setTransform(12.8,5.3,1.516,1.516);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,25.7,10.6);


    (lib.thgtyh_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#1D1C1A").s().p("Ag5AJQAagbAjADQAlADAPgMIAIgOQgBAUgPAKQAYgOAEgNIgDANQgFAOgKAGQAPgBAEgFIgGAIQgJAJgNgEQg2gGgIABQgnABgYAlQAGgPANgOg");
        this.shape_3.setTransform(61.8,9.6,1.516,1.516);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#1D1C1A").s().p("AAVgKQgsgRhHAZQgVAGgPgOIgMgQQAIAKAZACQgRgLgJgXIgFgUQAGAUAoAVQgQgJgHgTIgEgSIANAVQAaAUA6gHQA5gGA8A5QAeAfATAfQhWhJgjgLg");
        this.shape_4.setTransform(14.3,7.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{rotation:0,x:14.3,y:7.4}},{t:this.shape_3,p:{rotation:0,x:61.8,y:9.6}}]}).to({state:[{t:this.shape_4,p:{rotation:-30,x:13.8,y:16}},{t:this.shape_3,p:{rotation:30,x:63,y:15.9}}]},14).to({state:[{t:this.shape_4,p:{rotation:0,x:14.3,y:7.4}},{t:this.shape_3,p:{rotation:0,x:61.8,y:9.6}}]},4).wait(42));

        // Слой 2
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#8D6845").s().p("ACdBsQgKgDgEgIQgFgKAEgMQADgJAJgKIACgGIgCgFQgKgQAIgUQAEgLAQgSQAkgnAkgNQARgHAMAFQAJAEAEAJQAEAJgDAJQAJAAATgCQARAAAJAJQAGAGAAAKQAAAKgGAHIgGAEIAAAJQAAARgWAIQgHACgDADQgDADgCAEQgMAXgLAGQgJAFgXAAQgUgBgJgFQgDADgEAGIgHAKQgJAMgQADIgGABQgGAAgGgCgAiwBVQgmgFgUgBQgaAAgJgCQgUgEgGgQQgDgHABgVIAAgLIgEgEIgHgLIgFgIIgIgKIgBgGQgRgDgGgSQgFgRANgNQAEgEAHgDIANgGIAPgJQAJgGAGgCQAggPA4ATQAOAFAMAGQAMAIAGACIAJACIAKADQAFADAJAKQAEADAKAFQAJAEAEADQAIAIAHAVQADAHAIAIIAMAQQAFAKAAAKQAAALgHAGQgFAEgIACIgPACQgHACgLAGIgRAIQgSAIgaAAIgOAAg");
        this.shape_5.setTransform(33.9,12.4);
        this.shape_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(14).to({_off:false},0).to({_off:true},4).wait(42));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,73.6,15.5);


    (lib.rtvgretvrevкопия_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#8A1F1B").s().p("ACBDMIj1hnQqJkAGjhlQDaAJEFCIQEHCFALgKQDXCrjlBDQgYAHgeAAQhUAAh+g1g");
        this.shape_2.setTransform(25.2,41.5);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-25.9,15.7,102.3,51.6);


    (lib.rtvgretvrev = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#8A1F1B").s().p("ACLDaIj1hoQqmjHHMjXQDTgMC+BxQFLDFAIAcQDXCqkRBqQgwgMirhIg");
        this.shape.setTransform(24.3,40.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-26.9,9.9,102.3,60.5);


    (lib.rtvevetrv2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // flash0.ai
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#896648").s().p("ABUCRQh2gShlgjQgjgMgIgIQgGgFAEgMQAEgNBHARQBDARgBgDQgEgHgrgMIhYgWQgmgJgJgOQgFgIAEgJQAEgJANABQAVABBBARQBtAigjgZQgJgGhEgUIhRgaIgegJQgOgHgCgOQgDgeBeAhQBhAiABgDQABgHiFhAQgdgOAJgTQAJgTAiAPQCWBMA2APQAfAJALgLQAAgBABgBQAAAAABgBQAAAAAAgBQAAAAgBAAQgCgCgMgGIAJgvQCAA6AhAyQAiAygmBcQgHARgyAAQgjAAg2gHg");
        this.shape.setTransform(19.9,20.7,1,1,0,-13,167);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#BDA975").s().p("AiqhKQgvh2gbhRIEEg6QgIBsB2EMQA6CHA8BxIjTAnQhrivhgjng");
        this.shape_1.setTransform(30,5.5,1,1,0,-13,167);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#E1C884").s().p("AipEjQACjOAsj3QAWh9AWhTID5BcQhABXgtEhQgXCRgJCAg");
        this.shape_2.setTransform(18.4,10.6,1,1,0,-13,167);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-4.5,-27.4,52.2,74.9);


    (lib.rtvevetrvкопия1_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#8D6845").s().p("AgSCDQhDhIgvhIQgQgZgBgJQgBgHAIgGQAIgGAlAvQAiArABgCQABgGgWgcIgsg6QgUgZACgOQAAgHAJgFQAGgEAIAHQAOALAeAuQA0BKgJgfQgEgLhGhnQgKgOgEgHQgFgMAGgKQAMgUAsBFQAsBGACgBQAEgEg0hsQgMgXAPgIQAQgHAOAbQA3B8AcAmQAPATAMgBQAHAAgXgnIgeg2IgQghQgHgTALgCQAMgBAYAdQALAPAKAPQBKCFACA1QADA8hNArQgDACgDAAQgZAAg/hHg");
        this.shape_1.setTransform(12.7,24.2,1.03,1.03,0,30,-150);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.2,9,40,30);


    (lib.lips_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Режим изоляции
        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#AE8163").s().p("AgzgCIAogTQApgMARAhQANAZgXAAQgYAAhAgbg");
        this.shape_35.setTransform(13.6,9.5,1.442,1.442,0,0,180);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#583E2D").s().p("Ag3AZIAjglQAmghAcAcQAeAbg7AOQgcAHgTAAQgRAAgIgGg");
        this.shape_36.setTransform(13.1,4.3,1.442,1.442,0,0,180);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#DCC1BD").s().p("AgqAAQgcgRgMgMIBSAQQAwALAjALQgTgGgZALQghAPgGABQgNgLgdgTg");
        this.shape_37.setTransform(14.5,6.7,0.101,0.082);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#DCC1BD").s().p("Ag1gCQgkgfgkgLIgFgLICDADQBMADA2AMQgnABgiAgQgXAQggAsQgjgqgVgQg");
        this.shape_38.setTransform(11.2,6.8,0.101,0.082);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#DCC1BD").s().p("Ag7ARQgbgSgbgGIgIgKQAhgPA1gIIBZgNQAggFAkAEQgoAIgmAlIg6BBQgagagTgNg");
        this.shape_39.setTransform(8,6.8,0.101,0.082);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#6B4F3D").s().p("AhfAcIABgVQBJgYBxgKIAEALIhbAMQgzAHghAPIAIAKg");
        this.shape_40.setTransform(8,6.6,0.101,0.082);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#AE8163").s().p("AqEGDQj+gdiHh4Qg8g0gihNQgihLgBhQQgBgOADg5QACgrgJgaQB2BCBbgIQAdAUAoANQAdAJAtAJQBKANBVAFQBHAFBagBQFWgEFIhNQFIhODiiIIAYABQCXgYA4gHQB0gOBcAAQjBBTjKDCQh6BzhLA8QhxBchoA5QiCBHh/ApQjQAuiiASQhvAMhnAAQhUAAhOgIg");
        this.shape_41.setTransform(14.9,10.3,0.101,0.082);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#583E2D").s().p("Aw9F1QgOgbgjghQgsgqgKgOQg6hBgdhCQgjhPAHhJQAGhNA1hEQAvg8BKgsQBuhBCMgmQB4gfCUgNQDqgYD2AqQDmAoDmBgQBjAnCNBCIDtBwQEgCDDMAtQAGAXgVAJQgIAEggAEQhbAAh1AOQg4AHiXAYIgYgBIAOgOQhAAOhLADQg+ADhQgDQhMgGhjgVIitgpQicgkhMgOQiDgWhqgBQhcgGiSAJQhzAKhJAaQhBAVgsAkQg1ApgTA5IACBTQABAxACAiIgTABQhUAAhqg7g");
        this.shape_42.setTransform(14.1,5.7,0.101,0.082);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#FFFFFF").s().p("AvpEmIAApMIfTCcImzGwg");
        this.shape_43.setTransform(14.1,7.8,0.101,0.082);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#FFFFFF").s().p("AhKAQQgLglAGgbQAcAKAiAFQBDANAggOQgBAQgTASQglAkhXAMQgHgOgFgSg");
        this.shape_44.setTransform(13.3,8.3,0.771,0.771);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#583E2D").s().p("AhiAuQgwgUgPgvQgCgJACgDQABgEAIgCQAYgGAhACQAUABAlAHQAxAJAOABQAhADAfgIIAngKQAggJADgIQgPAqgvAdQgtAeg3AKQgTAEgTAAQgiAAgbgMg");
        this.shape_45.setTransform(13.4,4.6,0.771,0.771);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#AE8163").s().p("AiJBLQgIgTAGgUQAIgWAVgMQACgCANgDQAZgGA5gBQA3gBA4gvQAcgYARgXQAEBZhVA7QgnAchMAcQgVAHgQAAQghAAgOgfg");
        this.shape_46.setTransform(15,8.3,0.771,0.771);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#F09393").s().p("Al3ENQhUgeg1g+QBgifBnhoQBVhZBhg1QBtg8BugGQASAHBBAfQA1AZAiAKQAVANBmBNQBMA4A3AXQhsAUhQAtQg6AhhrBHQhvBJg1AgQg9AggmAQQg5AWgyADIgQAAQhOAAhGgag");
        this.shape_47.setTransform(13.8,8.6,0.104,0.085);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#C41C1C").s().p("AmQC+IgZgyQgQgfgEgVQARhYAJgtQAShNAag0QAVgqAqgdQAngcAxgKQCtglC1A1QCsAyCQB2QgjgKg0gZQhBgfgTgIQhvAGhtA8QhfA1hVBYQhnBqhgCfQgeghguhMg");
        this.shape_48.setTransform(11.9,7.6,0.104,0.085);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#AE8163").s().p("Aj4GXQiKgEiDgsQhhghhOg2QhVg7g3hNQhJhjgQiFQgPh6AgiAQB4AyBvAMQAuBMAfAhQA1A9BTAfQBOAcBWgDQAygDA5gWQAngPA8ghQA4gfBshJQBshIA6ggQBPgvBtgUQARAHAYAEIAqAFQDbAaDFgYQgCARgMAPQhiA8huB9Qh4CRhABBQhqB2h5BUQiEBaiMArQhzAhh9AAIgeAAg");
        this.shape_49.setTransform(14.7,11.6,0.104,0.085);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#583E2D").s().p("AtKGIQhgh5gliMQgWhXALhUQAMhaAuhIQA4hZBkg9QBag3BwgZQDOgsDmAuQDKAqDQBsQB0BBB/B9QBKBICMCVQBEBFAqAjQBBA1A/AaQAKAEAGALQAGAMgEAJQjFAYjbgaIgqgFQgYgEgRgHQg4gXhLg4QhnhOgVgMQiPh2irgwQi3g1itAlQgxAKgnAaQgqAdgVAqQgaA0gRBNQgKAtgQBaQADAVAQAfIAZAyQhvgMh4gyg");
        this.shape_50.setTransform(14.1,5.3,0.104,0.085);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#FFFFFF").s().p("AgSATQgDgGgBgIQgDgOAHgJQAGgIAUASQALAIAFAMQgCADgJADQgKADgHAAQgHAAgHgCg");
        this.shape_51.setTransform(11.6,6.5,1.96,1.96);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#583E2D").s().p("AhjAnIADgQQAahxBXA0QAsAaAnAvIgBAEQg8AQgwAAQgyAAgogQg");
        this.shape_52.setTransform(13.4,3.7);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#AE8163").s().p("AhhgwQBRAgB1ggQgNAjgkAaQglAcglAGIgTACQhJAAARhhg");
        this.shape_53.setTransform(13.2,12.6);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#FFFFFF").s().p("Ag4gSQAZACAbgBQA0gBAJgKQgDAMgLAOQgWAYglAHg");
        this.shape_54.setTransform(14.1,8.5,1.05,1.05,10.7);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#583E2D").s().p("AhwAQQgDgFABgDQABgEAFgCQARgGAXgEQAOgCAcgBIAugDQAZgDAVgKIAbgOQAVgLABgGQgEAggdAcQgcAdgmAPQgfANgaAAQgvAAgYgrg");
        this.shape_55.setTransform(13.3,4,1.05,1.05,10.7);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#AE8163").s().p("AhTBPQgWgfAegaQABgDAJgEQARgJApgIQAmgJAhgrQARgVAIgTQARA/gzA3QgYAagyAhQgUAMgPAAQgRAAgMgQg");
        this.shape_56.setTransform(14.7,9.2,1.05,1.05,10.7);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#FFFFFF").s().p("AnRESQiSgGiFgaQgOg6gXg7QgZhAgohFQEcBVFmgOQG6gXFeiYQBWgoAygeQBJgsAwgxQAEARgEAZIgIApQhrBVhbA+QhtBGhoAxQjLBsjkAzQi/ArjEAAQgkAAglgCg");
        this.shape_57.setTransform(13.3,5,0.104,0.085);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#F09393").s().p("AmHBzQifh1hNiEQDoAJDkgyQDkgzDLhsIASAGQC5ALChgZQACASgGAYIgMAqQgcBigzBZQg0BXhHBIQiKCOjWBxQj/hWjCiOg");
        this.shape_58.setTransform(15,8.5,0.104,0.085);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#C41C1C").s().p("AnmEDQBIlNg/j9QCFAaCRAHQBOCFCdB2QDCCMEBBWIghAVQjkBeivAWQg+AIhBAAQjDAAjXhFg");
        this.shape_59.setTransform(10.5,9.9,0.104,0.085);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#C41C1C").s().p("Ai5CHIgTgGQBogxBrhJQBcg7BqhWQgGBJgYCOIgFAXQgDAOgJAHQhwASh6AAQg2AAg3gEg");
        this.shape_60.setTransform(19.9,4.6,0.104,0.085);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#AE8163").s().p("AsSMaQg/gugjhLQgjhJADhPQAsjaAKhBQAXiigMh8QgIhcgphaQgmhVhAhLQAqAJBUAVQBLARA1gCQAXA8AOA5QA/D7hHFPQEgBcD6gfQCvgWDjheIAggVQDWhwCKiOQBHhGA0haQAzhYAchjIAMgpQAGgZgCgRQAIgHAEgOIAEgYQAYiQAHhIIAIgqQAEgYgEgRQApgyBUhhQgZBNgOBqIgTC7IgTC5QgNBsgVBMQgvDGhYCSQhDBwhnBqQhXBbh4BdIh1BYQhFAwg5AaQkECAkLALIgdABQjoAAiHhkg");
        this.shape_61.setTransform(13,9,0.104,0.085);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#583E2D").s().p("Ar7EZQhVgWgqgIQhJgug3hAQg6hDgehMQgRgygEgWQgHgrAQgeQAVgaAngQQAWgKAwgOQBygbCMgDQBkgCCcAKQC6AQC3AgQE7BADpAMQB6AEBVgGQBwgHBbgZQCpgtBjhpQARAEgGAPIgMAaQhUBhgpAxQgxAyhIArQgyAchWAoQleCbm7AXQllANkdhXQAoBHAaBAIgLAAQgyAAhDgPg");
        this.shape_62.setTransform(11.8,3.6,0.104,0.085);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#F09393").s().p("AjvDAQhPgIg7gnIACgQQAZiTBBhvQCcAeDGheIAHACQAYA8BBAlQA3AgBIAHQAIACAkACQAbABAPAIQiZBehKAmQiDBEhwAYQg3AMgzAAQgVAAgUgCg");
        this.shape_63.setTransform(11.5,8.9,0.104,0.085);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#C41C1C").s().p("AhhAiIgJgRQgGgLgHgEQAsgQAQg6IAPhlQBJBHBaASQhBBtgZCVQhNgygxhag");
        this.shape_64.setTransform(7.3,8.6,0.104,0.085);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#AE8163").s().p("AmbFrQiAgWhfgdQh2glhcg1QhIgqgzg6Qg4g/gYhHQgxiZBPjPQByBCCKAEQA0B/BgA9QA8AnBOAIQBGAHBNgRQBygYCDhEQBKgmCXhgQARAGAqACQHKAdGcguIgEAOQkdBVkZEaQhqBwiJBJQiKBKiVAaQhmAThvAAQhQAAhVgKg");
        this.shape_65.setTransform(14.1,11.2,0.104,0.085);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#583E2D").s().p("AC/FZQgqgCgRgGQgPgIgcgBQgjgCgJgCQhFgHg4ggQhAglgYg8IgHgCQjJBeibgeQhagShMhHIgPBlQgQA6grASQiKgEhyhCQg3i6AdiUQANhGAlg6QAng9A5gkQBJgtBbgDQBYgCBPAmQBFAiBGAHQBNAIBCgZQAlgQBLghQBCgaA1gBQAwABApASQAtATAgAiQCPCBB8BhQCSBxCMBVQBiA8BTAmQBlAtBdAVQAJABAGAIIAKAOQj7AckNAAQirAAiygLg");
        this.shape_66.setTransform(14.1,5.7,0.104,0.085);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#FFFFFF").s().p("AgeATIgTgaIAcgKQAigDAlAng");
        this.shape_67.setTransform(13,6.8,1.474,1.474);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#AE8163").s().p("AhDAHQgGgJAOgKQANgJAYgBQA5gEAjAnQgfAHghACIgXACQgrAAgHgRg");
        this.shape_68.setTransform(13.1,9.7,1.474,1.474);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#583E2D").s().p("ABAAcQgKgGgKgDQgNgHgSgBIgegBQgnAAgSgJIgEgCIABgGQAYgvA+AYQA+AXAIAuQgBgEgOgHg");
        this.shape_69.setTransform(11.7,5.8,1.474,1.474);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},2).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},2).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},2).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},2).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},2).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},2).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},2).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},2).wait(2));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(5,-0.2,16.3,13.5);


    (lib.erervev_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#8A1F1B").s().p("Al5DqQj2hcDzivQAWgRAJgDQAvgPF/hVQDAgqC3goIAjBDQAcBPgsA9QsVEHg2AAIgJgBg");
        this.shape_1.setTransform(50.2,23.6);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,100.5,47.2);


    (lib.Body = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#A52722").s().p("AA6DqIhVg2QhvjUAih4QAKglAYgYIAWgQIAXgFQAagDAYAMQBOAmAICvQAJCtgeA2QgMAVgNAAQgDAAgEgCg");
        this.shape.setTransform(22,41.9,1.516,1.516);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#9B2120").s().p("Ag/BTQgEg0AAhjIABiiIB1CpQALAPAEALQAEAQgGATQgEALgMAUIhWCbIAHAtQgYg/gIhVg");
        this.shape_1.setTransform(19.5,64.5,1.516,1.516);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#A52722").s().p("AhZODQiUgSiiggIiCgdQhAgwAoiWIA0iLQBEh6AIiXIg+uHIDyjkQA4AyC5gTQBagJBRgTQArgKBMAkQAmASAeAUQAaBSBqDpQBICChPGwQgoDZg2C/QBPDmA9B6QAeA9APAQQhzA+jkAAQiKAAiygXg");
        this.shape_2.setTransform(57,92.2);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

        // Слой 2
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#8D6845").s().p("AgfCgQglgOgngbIgfgYQAUgVgMh7IgRh4QAJgQCKBCQBDAhBCAjQgIAVAXCEQgrBHhHAAQgfAAgigNg");
        this.shape_3.setTransform(52.4,-4.4,1.516,1.516);

        this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-30.7,114,215.2);


    (lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 3
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgGAGAAQACAAADACQACACAAACQAAAGgHABQgBAAgDgCg");
        this.shape_3.setTransform(7,6.7);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#161211").s().p("AgPASQgHgIgBgJQAAgJAHgHQAGgHAKgBQAIgBAIAIQAHAGABAKQAAAJgHAHQgGAIgKAAIgBAAQgIAAgHgGg");
        this.shape_4.setTransform(5.3,5.3);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#4A3829").s().p("AgUAYQgKgJgBgOQAAgMAJgKQAJgKANgBQALAAAKAJQAKAJABAOQABAMgKAKQgJAKgNAAIgBABQgLAAgJgJg");
        this.shape_5.setTransform(5.3,5.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(2.1,2.1,6.5,6.6);


    (lib.ClipGroup_3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 3
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQADgBACADQADACAAADQAAAHgIABQgGAAgBgIg");
        this.shape_6.setTransform(11.1,9.7);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#161211").s().p("AgRAUQgIgIAAgLQgBgKAIgIQAHgIALgBQAJAAAJAHQAIAIAAALQABAJgHAJQgIAIgLABIgBAAQgJAAgIgHg");
        this.shape_7.setTransform(9.2,8.1);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4A3829").s().p("AgXAbQgLgKgBgQQAAgNAKgLQAKgLAPgBQANgBALAKQALALABAPQABANgLAMQgKALgPAAIgBAAQgNAAgKgJg");
        this.shape_8.setTransform(9.2,8.2);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(5.6,4.6,7.3,7.4);


    (lib._54ggg_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#583E2D").s().p("ABTAfQgagQgRgHQhDgdhUArQAJgQASgNQAkgfAwACQAwABAkAjQATARAJASQgEACgFAAQgJAAgLgGg");
        this.shape_1.setTransform(17,5.7,1.516,1.516);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,34,11.4);


    (lib._5gggt_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#583E2D").s().p("AhTAfQAGgRAOgPQAcgiAjACQAlACAbAfQAOAQAGAQQg/gwgyAZQgNAGgTAOQgIAFgGAAQgFAAgDgDg");
        this.shape_1.setTransform(12.8,5.3,1.516,1.516);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,25.7,10.6);


    (lib.wregf435f43f43 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.instance = new lib.JennBody();
        this.instance.setTransform(74.9,320.1,1.312,1.312,0,0,0,60.6,247);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,160.1,258.3);


    (lib.KimHeadTalking = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // morgan
        this.instance = new lib.thgtyh();
        this.instance.setTransform(103.4,89.5,1,1,0,0,0,36.8,7.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(595));

        // Слой 7
        this.instance_1 = new lib._54ggg();
        this.instance_1.setTransform(80.8,70.7,1,1,0,0,0,16.9,5.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(595));

        // Слой 6
        this.instance_2 = new lib._5gggt();
        this.instance_2.setTransform(131.3,72.8,1,1,0,0,0,12.8,5.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(595));

        // Слой 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AH7HnIgOgaQAQgcAdgTQA8goBLAoIgRAmQgcAogxAKQgOACgMAAQgeAAgQgRg");
        mask.setTransform(67.4,50.5);

        // Слой 4
        this.instance_3 = new lib.ClipGroup_1();
        this.instance_3.setTransform(128.7,94.7,1.516,1.516,0,0,0,5.9,4.4);

        this.instance_3.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(595));

        // Слой 3 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        mask_1.graphics.p("AExH1QhqgWAehhQAMgoBNAMQBWAPBHBZQgyAwhHAAQgXAAgagFg");
        mask_1.setTransform(47.6,50.7);

        // Слой 2
        this.instance_4 = new lib.ClipGroup();
        this.instance_4.setTransform(84.5,91.1,1.516,1.516,0,0,0,8.3,5.9);

        this.instance_4.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(595));

        // Слой 8
        this.instance_5 = new lib.lips("synched",0);
        this.instance_5.setTransform(103.8,132.8,1,1,0,0,180,11.7,6.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(595));

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#DD7126").s().p("Ag+AFQAQgUA0gKQAcgFAYgBIAFAfQgcAAgwAPIgsARg");
        this.shape.setTransform(34.8,219.2,1.516,1.516);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#583E2D").s().p("AAaAnQgGgcgQgYIgQghQgJgTgOgUQALABAQARQAJAMAJAOQAhAygKBNQgEgfgDgQg");
        this.shape_1.setTransform(36.5,97.3,1.516,1.516);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#8D6845").s().p("AATCCQg/gQgghxQgWhIATgjQAQgeAmAFQAiAEAdAdQAeAfgCAiQgBAaAMABQAGAAAGgEIgMCFIgBAAQgQAKgTAAQgLAAgLgDg");
        this.shape_2.setTransform(36.4,96.9,1.516,1.516);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#36281B").s().p("AhoKwQgUgEgSgPQgQgNgLgUQgTgjAAgyQAAgYAGgMIAIgKQgHgPgGggQgJgzgCgbQgDgsAIgiQAKgqAdgdQgzhgA0h5QhAg2gThbQgQhKAMhpQAKhQAFgYQAMg3AXgpIBAhsQAng1A1gNQAlgJAxAKQAiAHAzAVQAnAOARARIARAIIAkAEIgFCKQgEAugNAqQgoCFhuAnIggDlIBrCCIgIA4QgOA9gaAaQAWA4AHApQAJA2gOAqQgKAfgXAYQgBAWgPAZQgXAngkAbQgiAagqAKQgQAEgOAAQgIAAgHgBg");
        this.shape_3.setTransform(37.4,114.6,1.516,1.516);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#36281B").s().p("AgjCFQgWgJgZgdQgfglgIgiICHifQAXgGAYALQAWALAOAVQAWAhACA8QABAugOAbQgOAbgiAVQgkAWgdAAQgPAAgPgFg");
        this.shape_4.setTransform(41.6,136.1,1.516,1.516);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#36281B").s().p("AgfCXQgcgHgdglQgdgkAMALIARASIASgSIAbAUQAdASANgDQAcgNAZglQAxhHgYh3QACgMADgIQAHgSAIAQQADAEAFAjQAHAtgEAqQgMCChpApQgEABgFAAQgGAAgHgCg");
        this.shape_5.setTransform(66.1,50,1.516,1.516);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#36281B").s().p("ABrEbIA0g0QBMgzgHhUQgCgbgKgaIgJgWQgQguhYgMIhUgBQg1AahggqQg1gYg0gkIgEgDQgugbgLgnIgBghQAQgQAzgUIAwgQQBsgiBgAsQAxAVAbAdQCLA+AsCNQAWBEgGA6QgTBzhYAjQgbALgfACg");
        this.shape_6.setTransform(119.4,46.7,1.516,1.516);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#2B1C10").s().p("AgJCSQAThCgahJIggg5QACgWgUgwIgTgsIBhgFQAxAPASBhQAIAxgBArIhKCGg");
        this.shape_7.setTransform(149.1,57.7,1.516,1.516);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#36281B").s().p("AhJgKQAdiCB/AWIgFAIIADAnQAAAsgKAiQgfBzh0AAQgMhFAPg/g");
        this.shape_8.setTransform(66.1,45.3,1.516,1.516);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#583E2D").s().p("AgOAgQgMgLACgVQABgUANgLQANgNAXAJQgjAFgCAeQgCAfAjAFQgLAEgIAAQgJAAgIgIg");
        this.shape_9.setTransform(95.4,112.3,1.516,1.516);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#583E2D").s().p("AgmAzQA2AAACgwQACgug0gNQAigLAVAXQASATgCAeQgCAggUAPQgLAJgMAAQgOAAgSgKg");
        this.shape_10.setTransform(111.6,113.4);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FFFFFF").s().p("AgxAZIgJgSQAKgQAUgNQAlgaAyAaIgMAYQgSAageAGQgKACgIAAQgTAAgLgLg");
        this.shape_11.setTransform(125.7,95.5,1.516,1.516);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FFFFFF").s().p("AgbAvQhHgPAUg9QAIgbAzAIQA3AKAvA4QgiAgguAAQgNAAgRgDg");
        this.shape_12.setTransform(82.5,93.6,1.516,1.516);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#8D6845").s().p("Ag6ITIiWhTQh7hegTiVQgmAWgygMQhhgYgyisQgghuAcg1QAZgtA5AHQA2AHAsAsQAvAvgDA0QgDAkASACQAJABAJgHQAWhmAQgyQAZhXA1guQBEg7ALgsQAGgagPg7QgHgZAPgdQAQgfAggQQBUgrBzBSQCkB0CbgtQBOgWAsgtQAvCQAGBiQAHB8g4BKQgwA/AGBTQAHCBgEAdQgQBghlB4QhpB8hkAfQgVAGgbAAQhPAAh8g7g");
        this.shape_13.setTransform(83.3,95.3);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#36281B").s().p("AjZFPQing5gEh6QgIjOAahbQAtifCegtQDvhEC4CbQBbBOAsBbQgmDojPCHQhnBEheAVQhTgEhTgcg");
        this.shape_14.setTransform(79,55.7,1.516,1.516);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#785331").s().p("AA3BuQhHgPhCg2Qgigdgeh5IAJgGIA8AgQBGAmAxAiQCjBphZAUIgRACQgTAAgZgGg");
        this.shape_15.setTransform(80.3,141.8,1.516,1.516);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#36281B").s().p("AgiFTQAqgoAdg2QAdg2AIg7QgVAsgNAVQgVAkgWAVQgeAagkAIQgnAJgfgRQBEgiAqhLQAlhEAJhUQAHhEgNhYQgIg2gXhmIB7gzQATBjAJBBQALBagCBMQgFC6hWB/QgRAZgWANQgMAIgMAAQgLAAgJgGg");
        this.shape_16.setTransform(23.7,242,1.516,1.516);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(595));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,164.8,294.4);


    (lib.KimHeadSmile = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // morgan
        this.instance = new lib.thgtyh();
        this.instance.setTransform(103.4,89.5,1,1,0,0,0,36.8,7.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(595));

        // Слой 7
        this.instance_1 = new lib._54ggg();
        this.instance_1.setTransform(80.8,70.7,1,1,0,0,0,16.9,5.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(595));

        // Слой 6
        this.instance_2 = new lib._5gggt();
        this.instance_2.setTransform(131.3,72.8,1,1,0,0,0,12.8,5.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(595));

        // Слой 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AH7HnIgOgaQAQgcAdgTQA8goBLAoIgRAmQgcAogxAKQgOACgMAAQgeAAgQgRg");
        mask.setTransform(67.4,50.5);

        // Слой 4
        this.instance_3 = new lib.ClipGroup_1();
        this.instance_3.setTransform(128.7,94.7,1.516,1.516,0,0,0,5.9,4.4);

        this.instance_3.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(595));

        // Слой 3 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        mask_1.graphics.p("AExH1QhqgWAehhQAMgoBNAMQBWAPBHBZQgyAwhHAAQgXAAgagFg");
        mask_1.setTransform(47.6,50.7);

        // Слой 2
        this.instance_4 = new lib.ClipGroup();
        this.instance_4.setTransform(84.5,91.1,1.516,1.516,0,0,0,8.3,5.9);

        this.instance_4.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(595));

        // Слой 8
        this.instance_5 = new lib.lips("single",4);
        this.instance_5.setTransform(103.8,132.8,1,1,0,0,180,11.7,6.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(595));

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#DD7126").s().p("Ag+AFQAQgUA0gKQAcgFAYgBIAFAfQgcAAgwAPIgsARg");
        this.shape.setTransform(34.8,219.2,1.516,1.516);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#583E2D").s().p("AAaAnQgGgcgQgYIgQghQgJgTgOgUQALABAQARQAJAMAJAOQAhAygKBNQgEgfgDgQg");
        this.shape_1.setTransform(36.5,97.3,1.516,1.516);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#8D6845").s().p("AATCCQg/gQgghxQgWhIATgjQAQgeAmAFQAiAEAdAdQAeAfgCAiQgBAaAMABQAGAAAGgEIgMCFIgBAAQgQAKgTAAQgLAAgLgDg");
        this.shape_2.setTransform(36.4,96.9,1.516,1.516);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#36281B").s().p("AhoKwQgUgEgSgPQgQgNgLgUQgTgjAAgyQAAgYAGgMIAIgKQgHgPgGggQgJgzgCgbQgDgsAIgiQAKgqAdgdQgzhgA0h5QhAg2gThbQgQhKAMhpQAKhQAFgYQAMg3AXgpIBAhsQAng1A1gNQAlgJAxAKQAiAHAzAVQAnAOARARIARAIIAkAEIgFCKQgEAugNAqQgoCFhuAnIggDlIBrCCIgIA4QgOA9gaAaQAWA4AHApQAJA2gOAqQgKAfgXAYQgBAWgPAZQgXAngkAbQgiAagqAKQgQAEgOAAQgIAAgHgBg");
        this.shape_3.setTransform(37.4,114.6,1.516,1.516);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#36281B").s().p("AgjCFQgWgJgZgdQgfglgIgiICHifQAXgGAYALQAWALAOAVQAWAhACA8QABAugOAbQgOAbgiAVQgkAWgdAAQgPAAgPgFg");
        this.shape_4.setTransform(41.6,136.1,1.516,1.516);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#36281B").s().p("AgfCXQgcgHgdglQgdgkAMALIARASIASgSIAbAUQAdASANgDQAcgNAZglQAxhHgYh3QACgMADgIQAHgSAIAQQADAEAFAjQAHAtgEAqQgMCChpApQgEABgFAAQgGAAgHgCg");
        this.shape_5.setTransform(66.1,50,1.516,1.516);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#36281B").s().p("ABrEbIA0g0QBMgzgHhUQgCgbgKgaIgJgWQgQguhYgMIhUgBQg1AahggqQg1gYg0gkIgEgDQgugbgLgnIgBghQAQgQAzgUIAwgQQBsgiBgAsQAxAVAbAdQCLA+AsCNQAWBEgGA6QgTBzhYAjQgbALgfACg");
        this.shape_6.setTransform(119.4,46.7,1.516,1.516);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#2B1C10").s().p("AgJCSQAThCgahJIggg5QACgWgUgwIgTgsIBhgFQAxAPASBhQAIAxgBArIhKCGg");
        this.shape_7.setTransform(149.1,57.7,1.516,1.516);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#36281B").s().p("AhJgKQAdiCB/AWIgFAIIADAnQAAAsgKAiQgfBzh0AAQgMhFAPg/g");
        this.shape_8.setTransform(66.1,45.3,1.516,1.516);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#583E2D").s().p("AgOAgQgMgLACgVQABgUANgLQANgNAXAJQgjAFgCAeQgCAfAjAFQgLAEgIAAQgJAAgIgIg");
        this.shape_9.setTransform(95.4,112.3,1.516,1.516);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#583E2D").s().p("AgmAzQA2AAACgwQACgug0gNQAigLAVAXQASATgCAeQgCAggUAPQgLAJgMAAQgOAAgSgKg");
        this.shape_10.setTransform(111.6,113.4);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FFFFFF").s().p("AgxAZIgJgSQAKgQAUgNQAlgaAyAaIgMAYQgSAageAGQgKACgIAAQgTAAgLgLg");
        this.shape_11.setTransform(125.7,95.5,1.516,1.516);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FFFFFF").s().p("AgbAvQhHgPAUg9QAIgbAzAIQA3AKAvA4QgiAgguAAQgNAAgRgDg");
        this.shape_12.setTransform(82.5,93.6,1.516,1.516);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#8D6845").s().p("Ag6ITIiWhTQh7hegTiVQgmAWgygMQhhgYgyisQgghuAcg1QAZgtA5AHQA2AHAsAsQAvAvgDA0QgDAkASACQAJABAJgHQAWhmAQgyQAZhXA1guQBEg7ALgsQAGgagPg7QgHgZAPgdQAQgfAggQQBUgrBzBSQCkB0CbgtQBOgWAsgtQAvCQAGBiQAHB8g4BKQgwA/AGBTQAHCBgEAdQgQBghlB4QhpB8hkAfQgVAGgbAAQhPAAh8g7g");
        this.shape_13.setTransform(83.3,95.3);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#36281B").s().p("AjZFPQing5gEh6QgIjOAahbQAtifCegtQDvhEC4CbQBbBOAsBbQgmDojPCHQhnBEheAVQhTgEhTgcg");
        this.shape_14.setTransform(79,55.7,1.516,1.516);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#785331").s().p("AA3BuQhHgPhCg2Qgigdgeh5IAJgGIA8AgQBGAmAxAiQCjBphZAUIgRACQgTAAgZgGg");
        this.shape_15.setTransform(80.3,141.8,1.516,1.516);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#36281B").s().p("AgiFTQAqgoAdg2QAdg2AIg7QgVAsgNAVQgVAkgWAVQgeAagkAIQgnAJgfgRQBEgiAqhLQAlhEAJhUQAHhEgNhYQgIg2gXhmIB7gzQATBjAJBBQALBagCBMQgFC6hWB/QgRAZgWANQgMAIgMAAQgLAAgJgGg");
        this.shape_16.setTransform(23.7,242,1.516,1.516);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(595));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,164.8,294.4);


    (lib.JennHeadTalking2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Glasses
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#454545").s().p("AgJAPIAAgdIATAAIAAAdg");
        this.shape.setTransform(5.9,97.7,1.323,1.323,0,0,180);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#454545").s().p("Ag+AIQAAgJgDgJIgDgHICJAGIAAAdg");
        this.shape_1.setTransform(87.7,97.3,1.323,1.323,0,0,180);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#454545").s().p("AgJAPIAAgdIATAAIAAAdg");
        this.shape_2.setTransform(77.1,97.7,1.323,1.323,0,0,180);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#454545").s().p("AglAOIAAgbQAcAQAZgFQAOgDAIgIIAAAbg");
        this.shape_3.setTransform(40.8,96.4,1.323,1.323,0,0,180);

        this.instance = new lib.Path_0();
        this.instance.setTransform(49.4,97.9,1.323,1.323,0,0,180,0.7,2.7);
        this.instance.alpha = 0.602;

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#454545").ss(2).p("AgMBNIAaAAQAmAAAcgbQAbgcAAglIAAgmQAAgJgHgHQgGgHgKAAIinAAQgJAAgHAHQgHAHAAAJIAAAmQAAAlAbAcQAcAbAnAAg");
        this.shape_4.setTransform(60.9,101.4,1.323,1.323,0,0,180);

        this.instance_1 = new lib.Path_2_0();
        this.instance_1.setTransform(60.9,101.2,1.323,1.323,0,0,180,10.6,7.5);
        this.instance_1.alpha = 0.25;

        this.instance_2 = new lib.Path();
        this.instance_2.setTransform(10.3,99.6,1.323,1.323,0,0,180,0.6,2.6);
        this.instance_2.alpha = 0.602;

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#454545").ss(2).p("AgMBNIAaAAQAmAAAcgbQAbgcAAgkIAAgnQAAgKgHgGQgGgHgKAAIinAAQgKAAgGAHQgHAGAAAKIAAAnQAAAkAbAcQAcAbAnAAg");
        this.shape_5.setTransform(21.5,103.1,1.323,1.323,0,0,180);

        this.instance_3 = new lib.Path_2();
        this.instance_3.setTransform(21.4,102.9,1.323,1.323,0,0,180,10.8,7.5);
        this.instance_3.alpha = 0.25;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},98).to({state:[]},29).wait(1200));

        // Brow
        this.instance_4 = new lib.Brow2();
        this.instance_4.setTransform(17.9,74,1,1,0,0,0,12.3,4.5);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(98).to({_off:false},0).to({_off:true},29).wait(1200));

        // brow
        this.instance_5 = new lib.brow1();
        this.instance_5.setTransform(64.3,75.4,1,1,0,0,0,15.1,5.5);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).to({_off:true},29).wait(1200));

        // Lash
        this.instance_6 = new lib.Lash();
        this.instance_6.setTransform(41.8,96.2,1,1,0,0,0,34,6.5);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).to({_off:true},29).wait(1200));

        // Слой 7 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_98 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(98).to({graphics:mask_graphics_98,x:14.3,y:53.4}).wait(29).to({graphics:null,x:0,y:0}).wait(1200));

        // eye
        this.instance_7 = new lib.ClipGroup_2();
        this.instance_7.setTransform(15.9,103.1,1.323,1.323,0,0,180,6.5,4.5);
        this.instance_7._off = true;

        this.instance_7.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(98).to({_off:false},0).to({_off:true},29).wait(1200));

        // Слой 8 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_98 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(98).to({graphics:mask_1_graphics_98,x:36.9,y:53.5}).wait(29).to({graphics:null,x:0,y:0}).wait(1200));

        // eye2
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgIAAQAAgCACgDQADgDADAAQADgBADADQADADAAADQAAAIgJABQgHAAgBgJg");
        this.shape_6.setTransform(54.2,103,1.323,1.323,0,0,180);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#1C1717").s().p("AgSAWQgJgJgBgMQgBgLAJgJQAIgJAMgBQALAAAJAIQAJAIAAANQABALgJAJQgIAJgMAAIgBABQgKAAgIgIg");
        this.shape_7.setTransform(57,100.7,1.323,1.323,0,0,180);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4A3A2E").s().p("AgaAdQgMgLgBgRQAAgPALgMQALgMAQgBQAPgBAMALQANALAAARQABAPgLANQgLAMgRABIgBAAQgOAAgMgLg");
        this.shape_8.setTransform(56.9,100.9,1.323,1.323,0,0,180);

        this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},98).to({state:[]},29).wait(1200));

        // Слой 9
        this.instance_8 = new lib.JennLips("synched",0);
        this.instance_8.setTransform(37.1,133.9,0.754,0.754);
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(98).to({_off:false},0).to({_off:true},29).wait(1200));

        // Слой 2
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("Ag9AIQgCglACgrIAEgjIB4g8QgYAsgTCVQgKBLgFBDQg5gkgJh8g");
        this.shape_9.setTransform(107.4,203.3,1.323,1.323,0,0,180);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#000000").s().p("AhXDRQgjgbgChGQgDh8AFhbIABgmQABgYAFgPQAHgfAeg0QAKgSAKgFQAMgGAOAFQANAFAMALQAWAXAhA9QAgA7AaAXIAVAIQAAAvgXAqIgmBEQgRAqACAuQgthDgGhQQgnAigFBKIgDA8QAAAlgEAXQgHAfgRAZQgDAFgDAAQgLAAAFhRg");
        this.shape_10.setTransform(98.7,180.9,1.323,1.323,0,0,180);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#454545").s().p("AgLAdIgFgLQgFgcAUgOIATgIQgNAOgFAoQgCALgEAAQgCAAgDgEg");
        this.shape_11.setTransform(110.7,98.9,1.323,1.323,0,0,180);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FFFFFF").s().p("Ag2AbIgKgTQALgSAVgPQAqgcA3AdIgNAZQgUAeghAHQgLACgIAAQgWAAgMgNg");
        this.shape_12.setTransform(19.9,101.5,1.323,1.323,0,0,180);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FFFFFF").s().p("AgeA0QhOgQAWhEQAJgdA4AJQA9AKA0A/QgWAVgkAIQgTAFgRAAQgOAAgOgDg");
        this.shape_13.setTransform(61.6,99.6,1.323,1.323,0,0,180);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#000000").s().p("AAWB6QhQgygygPQgGgCgOgPIgcgcQgoggghAUQgiAWAGhGIAMhMID8gOID8CeQgfArguAiQg4AqgvAAQgeAAgbgRg");
        this.shape_14.setTransform(50.4,44.9,1.323,1.323,0,0,180);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#F6ECE1").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
        this.shape_15.setTransform(100.8,118.3,1.323,1.323,0,0,180);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#AA8774").s().p("AAKBGQAggZgwgjQgIgKgIgTQgPglAHggIAGAkQAKApAVATIALAKQALANADAMQAKAlhIAJQAagGAOgNg");
        this.shape_16.setTransform(35.5,110.4,1.323,1.323,0,0,180);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#AA8774").s().p("AASAbQgEgUgLgPIgKgXQgHgNgJgOQAHABALAMQAGAIAGAJQAWAigGA1IgFggg");
        this.shape_17.setTransform(102,105.4,1.323,1.323,0,0,180);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#C89F83").s().p("AAABsQg3gPgJhdQgDgpARgfQAPgbAYgIQAWgJARAPQASARgDAlQgCAcAMgJIANgQIgOCUQgQAHgQAAQgLAAgJgDg");
        this.shape_18.setTransform(101.8,106.5,1.323,1.323,0,0,180);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#C89F83").s().p("AhvGFQghgVgcgbIgVgXQgtgigUg0QgMgfgIg9QgYAPgbgGQg2gMgOhpQgGgtARggQAOgcAZgHQAZgGARARQAUATgDAmQgCAaANgKIAMgNQAQhLALgkQAThAAmghQBOg8AdgbQApgkADgaQgHgCgEgGQgGgJAGgGQAFgFAFAQQABAGAAAGQAYAIA9gpQBQgyBiAPQAxAHAhASQATA8AyB6QAhBmglAxQgkAvAAA4IACA0QABAigFAbQgNBSg+BbQhIBqhPAOQgfAGgdAAQhWAAhRgyg");
        this.shape_19.setTransform(57.8,102,1.323,1.323,0,0,180);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#000000").s().p("AjRFaQiWg6gFiGQgHjHAihsQAviYCGgpQEHhRCcCIQBOBEAZBUQgqD/jFCdQhjBOhYAaQhKgChLgdg");
        this.shape_20.setTransform(64.5,66.2,1.323,1.323,0,0,180);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#AA8774").s().p("AA9B6QhQgQhJg9QgmggggiGIAKgGIBDAjQBNAqA2AlQC1B1hkAXIgSABQgVAAgbgGg");
        this.shape_21.setTransform(63.8,145.5,1.323,1.323,0,0,180);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#000000").s().p("AgkFoQglgjgzhOQgegugIgcQgIgrgMguQgDgOAAgWIACgkQgBhwABgiQACgoAGgPQASgqgFgRQgDgMAZgmQAegsAbgdQAtguBUgPQBPgPA9AUIgzBFQgwAZgmA1QgmA1gPBGQgWBUAIBqQAHBTAXBuQAKAsAcA8QAQAjgBBLQhNg5gYgXg");
        this.shape_22.setTransform(91.7,73.6,1.323,1.323,0,0,180);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#282320").s().p("AgDBOQgUgSgHgTIgHgZIgKgSQgIgNgBgJQgCgJADgTIAJg0QAeAKAWASQAZAUANAaQAOAbgBAdQgBAhgSAYQgEAGgEgCIAEASQgagQgLgLg");
        this.shape_23.setTransform(10,62.5,1.323,1.323,0,0,180);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#000000").s().p("ADAD2QgUgSgQADQhKAOhLgIQhJgIhFgeQhGgegogrQgjglgQgyQgLghACgfQACgjASgaQANgSAigZIBUg/IgJgHQAYgBA0gfQAtgbAdAJQBHAXAvAVQBHAgAjAjQAyAxAeBeQAjBvgtAvQgRARguBAQgGAJgHAAQgGAAgHgHg");
        this.shape_24.setTransform(38.2,53.2,1.323,1.323,0,0,180);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#000000").s().p("AhvG7QgGhnAAgVQgBhWgShvQgHgtgciWQgLg5AAhLQAAjwBoh5IAAAJQAIADABAKQABAIgEAIQgCAGgHAIIgKAOQgLATAJAcQAFAQARAeQBBBwAPCCQAHAwAIBiQALBTAfAzQAOAWAZAdIAqAvQAzA7gVgQQgVgPgIAbQgIAbgNCgIgKAUIgBgHQgJhGg7ASQg5AShnCFQAGg0gFhIg");
        this.shape_25.setTransform(99,109.8,1.323,1.323,0,0,180);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#000000").s().p("ABFBNQgvg5gXgYIgKBLQgGAwgBAdQgGglgghCQgcg4gagnQgHgKgIgQIgMgbQgGgLAEgOIAJgaQAbgIAcAGQAcAGAVASQAIAGAQASQAMAPAJAHIAAgJQACAaAVAeIApAxQAVAbATAsQAUAxgCAdQgagbgug3g");
        this.shape_26.setTransform(17.4,181.9,1.323,1.323,0,0,180);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#000000").s().p("AAvE7QgFAahoAaIgqAKQhhBHAVgwQAGgPAGgcIAKgrQAnh7AIhhQALhygdhpQgniRgIg7QgPh1AhhUIgYAFQgCgIAHgIQAHgIAKAAQAMgBAXAOQB3BQBNB8QBQB8AXCNQANBMgCBpQgCA+gGB7QgCA1gOAgQgOAggQAdQgQAdgIBBQgCAMgDAAQgNAAgqjsg");
        this.shape_27.setTransform(29.4,139.6);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},98).to({state:[]},29).wait(1200));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.4,15.4,125.6,210.2);


    (lib.JennHeadTalking = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Glasses
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#454545").s().p("AgJAPIAAgdIATAAIAAAdg");
        this.shape.setTransform(5.9,97.7,1.323,1.323,0,0,180);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#454545").s().p("Ag+AIQAAgJgDgJIgDgHICJAGIAAAdg");
        this.shape_1.setTransform(87.7,97.3,1.323,1.323,0,0,180);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#454545").s().p("AgJAPIAAgdIATAAIAAAdg");
        this.shape_2.setTransform(77.1,97.7,1.323,1.323,0,0,180);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#454545").s().p("AglAOIAAgbQAcAQAZgFQAOgDAIgIIAAAbg");
        this.shape_3.setTransform(40.8,96.4,1.323,1.323,0,0,180);

        this.instance = new lib.Path_0();
        this.instance.setTransform(49.4,97.9,1.323,1.323,0,0,180,0.7,2.7);
        this.instance.alpha = 0.602;

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#454545").ss(2).p("AgMBNIAaAAQAmAAAcgbQAbgcAAglIAAgmQAAgJgHgHQgGgHgKAAIinAAQgJAAgHAHQgHAHAAAJIAAAmQAAAlAbAcQAcAbAnAAg");
        this.shape_4.setTransform(60.9,101.4,1.323,1.323,0,0,180);

        this.instance_1 = new lib.Path_2_0();
        this.instance_1.setTransform(60.9,101.2,1.323,1.323,0,0,180,10.6,7.5);
        this.instance_1.alpha = 0.25;

        this.instance_2 = new lib.Path();
        this.instance_2.setTransform(10.3,99.6,1.323,1.323,0,0,180,0.6,2.6);
        this.instance_2.alpha = 0.602;

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#454545").ss(2).p("AgMBNIAaAAQAmAAAcgbQAbgcAAgkIAAgnQAAgKgHgGQgGgHgKAAIinAAQgKAAgGAHQgHAGAAAKIAAAnQAAAkAbAcQAcAbAnAAg");
        this.shape_5.setTransform(21.5,103.1,1.323,1.323,0,0,180);

        this.instance_3 = new lib.Path_2();
        this.instance_3.setTransform(21.4,102.9,1.323,1.323,0,0,180,10.8,7.5);
        this.instance_3.alpha = 0.25;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},50).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},32).to({state:[]},105).wait(1140));

        // Brow
        this.instance_4 = new lib.Brow2();
        this.instance_4.setTransform(17.9,74,1,1,0,0,0,12.3,4.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},50).wait(32).to({_off:false},0).to({_off:true},105).wait(1140));

        // brow
        this.instance_5 = new lib.brow1();
        this.instance_5.setTransform(64.3,75.4,1,1,0,0,0,15.1,5.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},50).wait(32).to({_off:false},0).to({_off:true},105).wait(1140));

        // Lash
        this.instance_6 = new lib.Lash();
        this.instance_6.setTransform(41.8,96.2,1,1,0,0,0,34,6.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},50).wait(32).to({_off:false},0).to({_off:true},105).wait(1140));

        // Слой 7 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");
        var mask_graphics_82 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:14.3,y:53.4}).wait(50).to({graphics:null,x:0,y:0}).wait(32).to({graphics:mask_graphics_82,x:14.3,y:53.4}).wait(105).to({graphics:null,x:0,y:0}).wait(1140));

        // eye
        this.instance_7 = new lib.ClipGroup_2();
        this.instance_7.setTransform(17.4,100.7,1.323,1.323,0,0,180,6.5,4.5);

        this.instance_7.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},50).wait(32).to({_off:false},0).to({_off:true},105).wait(1140));

        // Слой 8 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_0 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");
        var mask_1_graphics_82 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:36.9,y:53.5}).wait(50).to({graphics:null,x:0,y:0}).wait(32).to({graphics:mask_1_graphics_82,x:36.9,y:53.5}).wait(105).to({graphics:null,x:0,y:0}).wait(1140));

        // eye2
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgIAAQAAgCACgDQADgDADAAQADgBADADQADADAAADQAAAIgJABQgHAAgBgJg");
        this.shape_6.setTransform(55.9,100.9,1.323,1.323,0,0,180);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#1C1717").s().p("AgSAWQgJgJgBgMQgBgLAJgJQAIgJAMgBQALAAAJAIQAJAIAAANQABALgJAJQgIAJgMAAIgBABQgKAAgIgIg");
        this.shape_7.setTransform(58.7,98.6,1.323,1.323,0,0,180);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4A3A2E").s().p("AgaAdQgMgLgBgRQAAgPALgMQALgMAQgBQAPgBAMALQANALAAARQABAPgLANQgLAMgRABIgBAAQgOAAgMgLg");
        this.shape_8.setTransform(58.6,98.8,1.323,1.323,0,0,180);

        this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[]},50).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},32).to({state:[]},105).wait(1140));

        // Слой 9
        this.instance_8 = new lib.JennLips("synched",0);
        this.instance_8.setTransform(37.1,133.9,0.754,0.754);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},50).wait(32).to({_off:false,startPosition:2},0).to({_off:true},105).wait(1140));

        // Слой 2
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("Ag9AIQgCglACgrIAEgjIB4g8QgYAsgTCVQgKBLgFBDQg5gkgJh8g");
        this.shape_9.setTransform(107.4,203.3,1.323,1.323,0,0,180);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#000000").s().p("AhXDRQgjgbgChGQgDh8AFhbIABgmQABgYAFgPQAHgfAeg0QAKgSAKgFQAMgGAOAFQANAFAMALQAWAXAhA9QAgA7AaAXIAVAIQAAAvgXAqIgmBEQgRAqACAuQgthDgGhQQgnAigFBKIgDA8QAAAlgEAXQgHAfgRAZQgDAFgDAAQgLAAAFhRg");
        this.shape_10.setTransform(98.7,180.9,1.323,1.323,0,0,180);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#454545").s().p("AgLAdIgFgLQgFgcAUgOIATgIQgNAOgFAoQgCALgEAAQgCAAgDgEg");
        this.shape_11.setTransform(110.7,98.9,1.323,1.323,0,0,180);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FFFFFF").s().p("Ag2AbIgKgTQALgSAVgPQAqgcA3AdIgNAZQgUAeghAHQgLACgIAAQgWAAgMgNg");
        this.shape_12.setTransform(19.9,101.5,1.323,1.323,0,0,180);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FFFFFF").s().p("AgeA0QhOgQAWhEQAJgdA4AJQA9AKA0A/QgWAVgkAIQgTAFgRAAQgOAAgOgDg");
        this.shape_13.setTransform(61.6,99.6,1.323,1.323,0,0,180);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#000000").s().p("AAWB6QhQgygygPQgGgCgOgPIgcgcQgoggghAUQgiAWAGhGIAMhMID8gOID8CeQgfArguAiQg4AqgvAAQgeAAgbgRg");
        this.shape_14.setTransform(50.4,44.9,1.323,1.323,0,0,180);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#F6ECE1").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
        this.shape_15.setTransform(100.8,118.3,1.323,1.323,0,0,180);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#AA8774").s().p("AAKBGQAggZgwgjQgIgKgIgTQgPglAHggIAGAkQAKApAVATIALAKQALANADAMQAKAlhIAJQAagGAOgNg");
        this.shape_16.setTransform(35.5,110.4,1.323,1.323,0,0,180);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#AA8774").s().p("AASAbQgEgUgLgPIgKgXQgHgNgJgOQAHABALAMQAGAIAGAJQAWAigGA1IgFggg");
        this.shape_17.setTransform(102,105.4,1.323,1.323,0,0,180);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#C89F83").s().p("AAABsQg3gPgJhdQgDgpARgfQAPgbAYgIQAWgJARAPQASARgDAlQgCAcAMgJIANgQIgOCUQgQAHgQAAQgLAAgJgDg");
        this.shape_18.setTransform(101.8,106.5,1.323,1.323,0,0,180);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#C89F83").s().p("AhvGFQghgVgcgbIgVgXQgtgigUg0QgMgfgIg9QgYAPgbgGQg2gMgOhpQgGgtARggQAOgcAZgHQAZgGARARQAUATgDAmQgCAaANgKIAMgNQAQhLALgkQAThAAmghQBOg8AdgbQApgkADgaQgHgCgEgGQgGgJAGgGQAFgFAFAQQABAGAAAGQAYAIA9gpQBQgyBiAPQAxAHAhASQATA8AyB6QAhBmglAxQgkAvAAA4IACA0QABAigFAbQgNBSg+BbQhIBqhPAOQgfAGgdAAQhWAAhRgyg");
        this.shape_19.setTransform(57.8,102,1.323,1.323,0,0,180);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#000000").s().p("AjRFaQiWg6gFiGQgHjHAihsQAviYCGgpQEHhRCcCIQBOBEAZBUQgqD/jFCdQhjBOhYAaQhKgChLgdg");
        this.shape_20.setTransform(64.5,66.2,1.323,1.323,0,0,180);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#AA8774").s().p("AA9B6QhQgQhJg9QgmggggiGIAKgGIBDAjQBNAqA2AlQC1B1hkAXIgSABQgVAAgbgGg");
        this.shape_21.setTransform(63.8,145.5,1.323,1.323,0,0,180);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#000000").s().p("AgkFoQglgjgzhOQgegugIgcQgIgrgMguQgDgOAAgWIACgkQgBhwABgiQACgoAGgPQASgqgFgRQgDgMAZgmQAegsAbgdQAtguBUgPQBPgPA9AUIgzBFQgwAZgmA1QgmA1gPBGQgWBUAIBqQAHBTAXBuQAKAsAcA8QAQAjgBBLQhNg5gYgXg");
        this.shape_22.setTransform(91.7,73.6,1.323,1.323,0,0,180);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#282320").s().p("AgDBOQgUgSgHgTIgHgZIgKgSQgIgNgBgJQgCgJADgTIAJg0QAeAKAWASQAZAUANAaQAOAbgBAdQgBAhgSAYQgEAGgEgCIAEASQgagQgLgLg");
        this.shape_23.setTransform(10,62.5,1.323,1.323,0,0,180);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#000000").s().p("ADAD2QgUgSgQADQhKAOhLgIQhJgIhFgeQhGgegogrQgjglgQgyQgLghACgfQACgjASgaQANgSAigZIBUg/IgJgHQAYgBA0gfQAtgbAdAJQBHAXAvAVQBHAgAjAjQAyAxAeBeQAjBvgtAvQgRARguBAQgGAJgHAAQgGAAgHgHg");
        this.shape_24.setTransform(38.2,53.2,1.323,1.323,0,0,180);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#000000").s().p("AhvG7QgGhnAAgVQgBhWgShvQgHgtgciWQgLg5AAhLQAAjwBoh5IAAAJQAIADABAKQABAIgEAIQgCAGgHAIIgKAOQgLATAJAcQAFAQARAeQBBBwAPCCQAHAwAIBiQALBTAfAzQAOAWAZAdIAqAvQAzA7gVgQQgVgPgIAbQgIAbgNCgIgKAUIgBgHQgJhGg7ASQg5AShnCFQAGg0gFhIg");
        this.shape_25.setTransform(99,109.8,1.323,1.323,0,0,180);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#000000").s().p("ABFBNQgvg5gXgYIgKBLQgGAwgBAdQgGglgghCQgcg4gagnQgHgKgIgQIgMgbQgGgLAEgOIAJgaQAbgIAcAGQAcAGAVASQAIAGAQASQAMAPAJAHIAAgJQACAaAVAeIApAxQAVAbATAsQAUAxgCAdQgagbgug3g");
        this.shape_26.setTransform(17.4,181.9,1.323,1.323,0,0,180);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#000000").s().p("AAvE7QgFAahoAaIgqAKQhhBHAVgwQAGgPAGgcIAKgrQAnh7AIhhQALhygdhpQgniRgIg7QgPh1AhhUIgYAFQgCgIAHgIQAHgIAKAAQAMgBAXAOQB3BQBNB8QBQB8AXCNQANBMgCBpQgCA+gGB7QgCA1gOAgQgOAggQAdQgQAdgIBBQgCAMgDAAQgNAAgqjsg");
        this.shape_27.setTransform(29.4,139.6);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[]},50).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},32).to({state:[]},105).wait(1140));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.4,15.4,125.6,210.2);


    (lib.JennHeadSmile = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Glasses
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#454545").s().p("AgJAPIAAgdIATAAIAAAdg");
        this.shape.setTransform(5.9,97.7,1.323,1.323,0,0,180);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#454545").s().p("Ag+AIQAAgJgDgJIgDgHICJAGIAAAdg");
        this.shape_1.setTransform(87.7,97.3,1.323,1.323,0,0,180);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#454545").s().p("AgJAPIAAgdIATAAIAAAdg");
        this.shape_2.setTransform(77.1,97.7,1.323,1.323,0,0,180);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#454545").s().p("AglAOIAAgbQAcAQAZgFQAOgDAIgIIAAAbg");
        this.shape_3.setTransform(40.8,96.4,1.323,1.323,0,0,180);

        this.instance = new lib.Path_0();
        this.instance.setTransform(49.4,97.9,1.323,1.323,0,0,180,0.7,2.7);
        this.instance.alpha = 0.602;

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#454545").ss(2).p("AgMBNIAaAAQAmAAAcgbQAbgcAAglIAAgmQAAgJgHgHQgGgHgKAAIinAAQgJAAgHAHQgHAHAAAJIAAAmQAAAlAbAcQAcAbAnAAg");
        this.shape_4.setTransform(60.9,101.4,1.323,1.323,0,0,180);

        this.instance_1 = new lib.Path_2_0();
        this.instance_1.setTransform(60.9,101.2,1.323,1.323,0,0,180,10.6,7.5);
        this.instance_1.alpha = 0.25;

        this.instance_2 = new lib.Path();
        this.instance_2.setTransform(10.3,99.6,1.323,1.323,0,0,180,0.6,2.6);
        this.instance_2.alpha = 0.602;

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#454545").ss(2).p("AgMBNIAaAAQAmAAAcgbQAbgcAAgkIAAgnQAAgKgHgGQgGgHgKAAIinAAQgKAAgGAHQgHAGAAAKIAAAnQAAAkAbAcQAcAbAnAAg");
        this.shape_5.setTransform(21.5,103.1,1.323,1.323,0,0,180);

        this.instance_3 = new lib.Path_2();
        this.instance_3.setTransform(21.4,102.9,1.323,1.323,0,0,180,10.8,7.5);
        this.instance_3.alpha = 0.25;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},71).to({state:[]},660).wait(596));

        // Brow
        this.instance_4 = new lib.Brow2();
        this.instance_4.setTransform(17.9,74,1,1,0,0,0,12.3,4.5);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(71).to({_off:false},0).to({_off:true},660).wait(596));

        // brow
        this.instance_5 = new lib.brow1();
        this.instance_5.setTransform(64.3,75.4,1,1,0,0,0,15.1,5.5);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(71).to({_off:false},0).to({_off:true},660).wait(596));

        // Lash
        this.instance_6 = new lib.Lash();
        this.instance_6.setTransform(41.8,96.2,1,1,0,0,0,34,6.5);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(71).to({_off:false},0).to({_off:true},660).wait(596));

        // Слой 7 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_71 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(71).to({graphics:mask_graphics_71,x:14.3,y:53.4}).wait(660).to({graphics:null,x:0,y:0}).wait(596));

        // eye
        this.instance_7 = new lib.ClipGroup_2();
        this.instance_7.setTransform(17.4,100.7,1.323,1.323,0,0,180,6.5,4.5);
        this.instance_7._off = true;

        this.instance_7.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(71).to({_off:false},0).to({_off:true},660).wait(596));

        // Слой 8 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_71 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(71).to({graphics:mask_1_graphics_71,x:36.9,y:53.5}).wait(660).to({graphics:null,x:0,y:0}).wait(596));

        // eye2
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgIAAQAAgCACgDQADgDADAAQADgBADADQADADAAADQAAAIgJABQgHAAgBgJg");
        this.shape_6.setTransform(55.9,100.9,1.323,1.323,0,0,180);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#1C1717").s().p("AgSAWQgJgJgBgMQgBgLAJgJQAIgJAMgBQALAAAJAIQAJAIAAANQABALgJAJQgIAJgMAAIgBABQgKAAgIgIg");
        this.shape_7.setTransform(58.7,98.6,1.323,1.323,0,0,180);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4A3A2E").s().p("AgaAdQgMgLgBgRQAAgPALgMQALgMAQgBQAPgBAMALQANALAAARQABAPgLANQgLAMgRABIgBAAQgOAAgMgLg");
        this.shape_8.setTransform(58.6,98.8,1.323,1.323,0,0,180);

        this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},71).to({state:[]},660).wait(596));

        // Слой 9
        this.instance_8 = new lib.JennLips("single",6);
        this.instance_8.setTransform(37.1,133.9,0.754,0.754);
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(71).to({_off:false},0).to({_off:true},660).wait(596));

        // Слой 2
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("Ag9AIQgCglACgrIAEgjIB4g8QgYAsgTCVQgKBLgFBDQg5gkgJh8g");
        this.shape_9.setTransform(107.4,203.3,1.323,1.323,0,0,180);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#000000").s().p("AhXDRQgjgbgChGQgDh8AFhbIABgmQABgYAFgPQAHgfAeg0QAKgSAKgFQAMgGAOAFQANAFAMALQAWAXAhA9QAgA7AaAXIAVAIQAAAvgXAqIgmBEQgRAqACAuQgthDgGhQQgnAigFBKIgDA8QAAAlgEAXQgHAfgRAZQgDAFgDAAQgLAAAFhRg");
        this.shape_10.setTransform(98.7,180.9,1.323,1.323,0,0,180);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#454545").s().p("AgLAdIgFgLQgFgcAUgOIATgIQgNAOgFAoQgCALgEAAQgCAAgDgEg");
        this.shape_11.setTransform(110.7,98.9,1.323,1.323,0,0,180);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FFFFFF").s().p("Ag2AbIgKgTQALgSAVgPQAqgcA3AdIgNAZQgUAeghAHQgLACgIAAQgWAAgMgNg");
        this.shape_12.setTransform(19.9,101.5,1.323,1.323,0,0,180);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FFFFFF").s().p("AgeA0QhOgQAWhEQAJgdA4AJQA9AKA0A/QgWAVgkAIQgTAFgRAAQgOAAgOgDg");
        this.shape_13.setTransform(61.6,99.6,1.323,1.323,0,0,180);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#000000").s().p("AAWB6QhQgygygPQgGgCgOgPIgcgcQgoggghAUQgiAWAGhGIAMhMID8gOID8CeQgfArguAiQg4AqgvAAQgeAAgbgRg");
        this.shape_14.setTransform(50.4,44.9,1.323,1.323,0,0,180);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#F6ECE1").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
        this.shape_15.setTransform(100.8,118.3,1.323,1.323,0,0,180);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#AA8774").s().p("AAKBGQAggZgwgjQgIgKgIgTQgPglAHggIAGAkQAKApAVATIALAKQALANADAMQAKAlhIAJQAagGAOgNg");
        this.shape_16.setTransform(35.5,110.4,1.323,1.323,0,0,180);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#AA8774").s().p("AASAbQgEgUgLgPIgKgXQgHgNgJgOQAHABALAMQAGAIAGAJQAWAigGA1IgFggg");
        this.shape_17.setTransform(102,105.4,1.323,1.323,0,0,180);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#C89F83").s().p("AAABsQg3gPgJhdQgDgpARgfQAPgbAYgIQAWgJARAPQASARgDAlQgCAcAMgJIANgQIgOCUQgQAHgQAAQgLAAgJgDg");
        this.shape_18.setTransform(101.8,106.5,1.323,1.323,0,0,180);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#C89F83").s().p("AhvGFQghgVgcgbIgVgXQgtgigUg0QgMgfgIg9QgYAPgbgGQg2gMgOhpQgGgtARggQAOgcAZgHQAZgGARARQAUATgDAmQgCAaANgKIAMgNQAQhLALgkQAThAAmghQBOg8AdgbQApgkADgaQgHgCgEgGQgGgJAGgGQAFgFAFAQQABAGAAAGQAYAIA9gpQBQgyBiAPQAxAHAhASQATA8AyB6QAhBmglAxQgkAvAAA4IACA0QABAigFAbQgNBSg+BbQhIBqhPAOQgfAGgdAAQhWAAhRgyg");
        this.shape_19.setTransform(57.8,102,1.323,1.323,0,0,180);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#000000").s().p("AjRFaQiWg6gFiGQgHjHAihsQAviYCGgpQEHhRCcCIQBOBEAZBUQgqD/jFCdQhjBOhYAaQhKgChLgdg");
        this.shape_20.setTransform(64.5,66.2,1.323,1.323,0,0,180);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#AA8774").s().p("AA9B6QhQgQhJg9QgmggggiGIAKgGIBDAjQBNAqA2AlQC1B1hkAXIgSABQgVAAgbgGg");
        this.shape_21.setTransform(63.8,145.5,1.323,1.323,0,0,180);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#000000").s().p("AgkFoQglgjgzhOQgegugIgcQgIgrgMguQgDgOAAgWIACgkQgBhwABgiQACgoAGgPQASgqgFgRQgDgMAZgmQAegsAbgdQAtguBUgPQBPgPA9AUIgzBFQgwAZgmA1QgmA1gPBGQgWBUAIBqQAHBTAXBuQAKAsAcA8QAQAjgBBLQhNg5gYgXg");
        this.shape_22.setTransform(91.7,73.6,1.323,1.323,0,0,180);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#282320").s().p("AgDBOQgUgSgHgTIgHgZIgKgSQgIgNgBgJQgCgJADgTIAJg0QAeAKAWASQAZAUANAaQAOAbgBAdQgBAhgSAYQgEAGgEgCIAEASQgagQgLgLg");
        this.shape_23.setTransform(10,62.5,1.323,1.323,0,0,180);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#000000").s().p("ADAD2QgUgSgQADQhKAOhLgIQhJgIhFgeQhGgegogrQgjglgQgyQgLghACgfQACgjASgaQANgSAigZIBUg/IgJgHQAYgBA0gfQAtgbAdAJQBHAXAvAVQBHAgAjAjQAyAxAeBeQAjBvgtAvQgRARguBAQgGAJgHAAQgGAAgHgHg");
        this.shape_24.setTransform(38.2,53.2,1.323,1.323,0,0,180);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#000000").s().p("AhvG7QgGhnAAgVQgBhWgShvQgHgtgciWQgLg5AAhLQAAjwBoh5IAAAJQAIADABAKQABAIgEAIQgCAGgHAIIgKAOQgLATAJAcQAFAQARAeQBBBwAPCCQAHAwAIBiQALBTAfAzQAOAWAZAdIAqAvQAzA7gVgQQgVgPgIAbQgIAbgNCgIgKAUIgBgHQgJhGg7ASQg5AShnCFQAGg0gFhIg");
        this.shape_25.setTransform(99,109.8,1.323,1.323,0,0,180);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#000000").s().p("ABFBNQgvg5gXgYIgKBLQgGAwgBAdQgGglgghCQgcg4gagnQgHgKgIgQIgMgbQgGgLAEgOIAJgaQAbgIAcAGQAcAGAVASQAIAGAQASQAMAPAJAHIAAgJQACAaAVAeIApAxQAVAbATAsQAUAxgCAdQgagbgug3g");
        this.shape_26.setTransform(17.4,181.9,1.323,1.323,0,0,180);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#000000").s().p("AAvE7QgFAahoAaIgqAKQhhBHAVgwQAGgPAGgcIAKgrQAnh7AIhhQALhygdhpQgniRgIg7QgPh1AhhUIgYAFQgCgIAHgIQAHgIAKAAQAMgBAXAOQB3BQBNB8QBQB8AXCNQANBMgCBpQgCA+gGB7QgCA1gOAgQgOAggQAdQgQAdgIBBQgCAMgDAAQgNAAgqjsg");
        this.shape_27.setTransform(29.4,139.6);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},71).to({state:[]},660).wait(596));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.4,15.4,125.6,210.2);


    (lib.JennHead = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Glasses
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#454545").s().p("AgJAPIAAgdIATAAIAAAdg");
        this.shape.setTransform(5.9,97.7,1.323,1.323,0,0,180);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#454545").s().p("Ag+AIQAAgJgDgJIgDgHICJAGIAAAdg");
        this.shape_1.setTransform(87.7,97.3,1.323,1.323,0,0,180);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#454545").s().p("AgJAPIAAgdIATAAIAAAdg");
        this.shape_2.setTransform(77.1,97.7,1.323,1.323,0,0,180);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#454545").s().p("AglAOIAAgbQAcAQAZgFQAOgDAIgIIAAAbg");
        this.shape_3.setTransform(40.8,96.4,1.323,1.323,0,0,180);

        this.instance = new lib.Path_0();
        this.instance.setTransform(49.4,97.9,1.323,1.323,0,0,180,0.7,2.7);
        this.instance.alpha = 0.602;

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#454545").ss(2).p("AgMBNIAaAAQAmAAAcgbQAbgcAAglIAAgmQAAgJgHgHQgGgHgKAAIinAAQgJAAgHAHQgHAHAAAJIAAAmQAAAlAbAcQAcAbAnAAg");
        this.shape_4.setTransform(60.9,101.4,1.323,1.323,0,0,180);

        this.instance_1 = new lib.Path_2_0();
        this.instance_1.setTransform(60.9,101.2,1.323,1.323,0,0,180,10.6,7.5);
        this.instance_1.alpha = 0.25;

        this.instance_2 = new lib.Path();
        this.instance_2.setTransform(10.3,99.6,1.323,1.323,0,0,180,0.6,2.6);
        this.instance_2.alpha = 0.602;

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#454545").ss(2).p("AgMBNIAaAAQAmAAAcgbQAbgcAAgkIAAgnQAAgKgHgGQgGgHgKAAIinAAQgKAAgGAHQgHAGAAAKIAAAnQAAAkAbAcQAcAbAnAAg");
        this.shape_5.setTransform(21.5,103.1,1.323,1.323,0,0,180);

        this.instance_3 = new lib.Path_2();
        this.instance_3.setTransform(21.4,102.9,1.323,1.323,0,0,180,10.8,7.5);
        this.instance_3.alpha = 0.25;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},71).to({state:[]},645).wait(611));

        // Brow
        this.instance_4 = new lib.Brow2();
        this.instance_4.setTransform(17.9,74,1,1,0,0,0,12.3,4.5);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(71).to({_off:false},0).to({_off:true},645).wait(611));

        // brow
        this.instance_5 = new lib.brow1();
        this.instance_5.setTransform(64.3,75.4,1,1,0,0,0,15.1,5.5);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(71).to({_off:false},0).to({_off:true},645).wait(611));

        // Lash
        this.instance_6 = new lib.Lash();
        this.instance_6.setTransform(41.8,96.2,1,1,0,0,0,34,6.5);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(71).to({_off:false},0).to({_off:true},645).wait(611));

        // Слой 7 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_71 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(71).to({graphics:mask_graphics_71,x:14.3,y:53.4}).wait(645).to({graphics:null,x:0,y:0}).wait(611));

        // eye
        this.instance_7 = new lib.ClipGroup_2();
        this.instance_7.setTransform(17.4,100.7,1.323,1.323,0,0,180,6.5,4.5);
        this.instance_7._off = true;

        this.instance_7.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(71).to({_off:false},0).to({_off:true},645).wait(611));

        // Слой 8 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_71 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(71).to({graphics:mask_1_graphics_71,x:36.9,y:53.5}).wait(645).to({graphics:null,x:0,y:0}).wait(611));

        // eye2
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgIAAQAAgCACgDQADgDADAAQADgBADADQADADAAADQAAAIgJABQgHAAgBgJg");
        this.shape_6.setTransform(55.9,100.9,1.323,1.323,0,0,180);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#1C1717").s().p("AgSAWQgJgJgBgMQgBgLAJgJQAIgJAMgBQALAAAJAIQAJAIAAANQABALgJAJQgIAJgMAAIgBABQgKAAgIgIg");
        this.shape_7.setTransform(58.7,98.6,1.323,1.323,0,0,180);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4A3A2E").s().p("AgaAdQgMgLgBgRQAAgPALgMQALgMAQgBQAPgBAMALQANALAAARQABAPgLANQgLAMgRABIgBAAQgOAAgMgLg");
        this.shape_8.setTransform(58.6,98.8,1.323,1.323,0,0,180);

        this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},71).to({state:[]},645).wait(611));

        // Слой 9
        this.instance_8 = new lib.JennLips("single",2);
        this.instance_8.setTransform(37.1,133.9,0.754,0.754);
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(71).to({_off:false},0).to({_off:true},645).wait(611));

        // Слой 2
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("Ag9AIQgCglACgrIAEgjIB4g8QgYAsgTCVQgKBLgFBDQg5gkgJh8g");
        this.shape_9.setTransform(107.4,203.3,1.323,1.323,0,0,180);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#000000").s().p("AhXDRQgjgbgChGQgDh8AFhbIABgmQABgYAFgPQAHgfAeg0QAKgSAKgFQAMgGAOAFQANAFAMALQAWAXAhA9QAgA7AaAXIAVAIQAAAvgXAqIgmBEQgRAqACAuQgthDgGhQQgnAigFBKIgDA8QAAAlgEAXQgHAfgRAZQgDAFgDAAQgLAAAFhRg");
        this.shape_10.setTransform(98.7,180.9,1.323,1.323,0,0,180);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#454545").s().p("AgLAdIgFgLQgFgcAUgOIATgIQgNAOgFAoQgCALgEAAQgCAAgDgEg");
        this.shape_11.setTransform(110.7,98.9,1.323,1.323,0,0,180);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FFFFFF").s().p("Ag2AbIgKgTQALgSAVgPQAqgcA3AdIgNAZQgUAeghAHQgLACgIAAQgWAAgMgNg");
        this.shape_12.setTransform(19.9,101.5,1.323,1.323,0,0,180);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FFFFFF").s().p("AgeA0QhOgQAWhEQAJgdA4AJQA9AKA0A/QgWAVgkAIQgTAFgRAAQgOAAgOgDg");
        this.shape_13.setTransform(61.6,99.6,1.323,1.323,0,0,180);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#000000").s().p("AAWB6QhQgygygPQgGgCgOgPIgcgcQgoggghAUQgiAWAGhGIAMhMID8gOID8CeQgfArguAiQg4AqgvAAQgeAAgbgRg");
        this.shape_14.setTransform(50.4,44.9,1.323,1.323,0,0,180);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#F6ECE1").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
        this.shape_15.setTransform(100.8,118.3,1.323,1.323,0,0,180);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#AA8774").s().p("AAKBGQAggZgwgjQgIgKgIgTQgPglAHggIAGAkQAKApAVATIALAKQALANADAMQAKAlhIAJQAagGAOgNg");
        this.shape_16.setTransform(35.5,110.4,1.323,1.323,0,0,180);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#AA8774").s().p("AASAbQgEgUgLgPIgKgXQgHgNgJgOQAHABALAMQAGAIAGAJQAWAigGA1IgFggg");
        this.shape_17.setTransform(102,105.4,1.323,1.323,0,0,180);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#C89F83").s().p("AAABsQg3gPgJhdQgDgpARgfQAPgbAYgIQAWgJARAPQASARgDAlQgCAcAMgJIANgQIgOCUQgQAHgQAAQgLAAgJgDg");
        this.shape_18.setTransform(101.8,106.5,1.323,1.323,0,0,180);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#C89F83").s().p("AhvGFQghgVgcgbIgVgXQgtgigUg0QgMgfgIg9QgYAPgbgGQg2gMgOhpQgGgtARggQAOgcAZgHQAZgGARARQAUATgDAmQgCAaANgKIAMgNQAQhLALgkQAThAAmghQBOg8AdgbQApgkADgaQgHgCgEgGQgGgJAGgGQAFgFAFAQQABAGAAAGQAYAIA9gpQBQgyBiAPQAxAHAhASQATA8AyB6QAhBmglAxQgkAvAAA4IACA0QABAigFAbQgNBSg+BbQhIBqhPAOQgfAGgdAAQhWAAhRgyg");
        this.shape_19.setTransform(57.8,102,1.323,1.323,0,0,180);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#000000").s().p("AjRFaQiWg6gFiGQgHjHAihsQAviYCGgpQEHhRCcCIQBOBEAZBUQgqD/jFCdQhjBOhYAaQhKgChLgdg");
        this.shape_20.setTransform(64.5,66.2,1.323,1.323,0,0,180);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#AA8774").s().p("AA9B6QhQgQhJg9QgmggggiGIAKgGIBDAjQBNAqA2AlQC1B1hkAXIgSABQgVAAgbgGg");
        this.shape_21.setTransform(63.8,145.5,1.323,1.323,0,0,180);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#000000").s().p("AgkFoQglgjgzhOQgegugIgcQgIgrgMguQgDgOAAgWIACgkQgBhwABgiQACgoAGgPQASgqgFgRQgDgMAZgmQAegsAbgdQAtguBUgPQBPgPA9AUIgzBFQgwAZgmA1QgmA1gPBGQgWBUAIBqQAHBTAXBuQAKAsAcA8QAQAjgBBLQhNg5gYgXg");
        this.shape_22.setTransform(91.7,73.6,1.323,1.323,0,0,180);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#282320").s().p("AgDBOQgUgSgHgTIgHgZIgKgSQgIgNgBgJQgCgJADgTIAJg0QAeAKAWASQAZAUANAaQAOAbgBAdQgBAhgSAYQgEAGgEgCIAEASQgagQgLgLg");
        this.shape_23.setTransform(10,62.5,1.323,1.323,0,0,180);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#000000").s().p("ADAD2QgUgSgQADQhKAOhLgIQhJgIhFgeQhGgegogrQgjglgQgyQgLghACgfQACgjASgaQANgSAigZIBUg/IgJgHQAYgBA0gfQAtgbAdAJQBHAXAvAVQBHAgAjAjQAyAxAeBeQAjBvgtAvQgRARguBAQgGAJgHAAQgGAAgHgHg");
        this.shape_24.setTransform(38.2,53.2,1.323,1.323,0,0,180);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#000000").s().p("AhvG7QgGhnAAgVQgBhWgShvQgHgtgciWQgLg5AAhLQAAjwBoh5IAAAJQAIADABAKQABAIgEAIQgCAGgHAIIgKAOQgLATAJAcQAFAQARAeQBBBwAPCCQAHAwAIBiQALBTAfAzQAOAWAZAdIAqAvQAzA7gVgQQgVgPgIAbQgIAbgNCgIgKAUIgBgHQgJhGg7ASQg5AShnCFQAGg0gFhIg");
        this.shape_25.setTransform(99,109.8,1.323,1.323,0,0,180);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#000000").s().p("ABFBNQgvg5gXgYIgKBLQgGAwgBAdQgGglgghCQgcg4gagnQgHgKgIgQIgMgbQgGgLAEgOIAJgaQAbgIAcAGQAcAGAVASQAIAGAQASQAMAPAJAHIAAgJQACAaAVAeIApAxQAVAbATAsQAUAxgCAdQgagbgug3g");
        this.shape_26.setTransform(17.4,181.9,1.323,1.323,0,0,180);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#000000").s().p("AAvE7QgFAahoAaIgqAKQhhBHAVgwQAGgPAGgcIAKgrQAnh7AIhhQALhygdhpQgniRgIg7QgPh1AhhUIgYAFQgCgIAHgIQAHgIAKAAQAMgBAXAOQB3BQBNB8QBQB8AXCNQANBMgCBpQgCA+gGB7QgCA1gOAgQgOAggQAdQgQAdgIBBQgCAMgDAAQgNAAgqjsg");
        this.shape_27.setTransform(29.4,139.6);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},71).to({state:[]},645).wait(611));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.4,15.4,125.6,210.2);


    (lib.grtgerg = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#862223").s().p("Ag8AlQiMgTh3gbQgDgOAMgRIANgOQDxA2DGgSQBkgKAzgVQAWATAFAfQACARgDAMQg3AZhrAAQhbAAh+gSg");
        this.shape.setTransform(57.9,210.4,1.802,1.802);

        this.instance = new lib.Body();
        this.instance.setTransform(63.7,188.2,1,1,0,0,0,60.5,157.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,117.2,220.4);


    (lib._6h656h = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Каркас_11 - копия
        this.ikNode_2 = new lib.erervev();
        this.ikNode_2.setTransform(81.2,307.1,1.422,1.422,0,66.9,-113.1,13.9,34.6);

        this.ikNode_1 = new lib.rtvgretvrevкопия();
        this.ikNode_1.setTransform(173.4,260.8,1.423,1.423,0,-2.6,177.4,-2.7,25.8);

        this.ikNode_3 = new lib.rtvevetrvкопия2();
        this.ikNode_3.setTransform(67,175.6,1.422,1.422,0,57.9,-122.1,6.1,26.9);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_3,p:{regX:6.1,skewX:57.9,skewY:-122.1,x:67,y:175.6}},{t:this.ikNode_1,p:{regY:25.8,skewX:-2.6,skewY:177.4,y:260.8,regX:-2.7,x:173.4}},{t:this.ikNode_2,p:{skewX:66.9,skewY:-113.1,x:81.2,y:307.1,regY:34.6,regX:13.9}}]}).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:57.4,skewY:-122.6,x:66.8,y:177.4}},{t:this.ikNode_1,p:{regY:25.7,skewX:-3.5,skewY:176.5,y:260.7,regX:-2.7,x:173.4}},{t:this.ikNode_2,p:{skewX:66.4,skewY:-113.6,x:82,y:308.7,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:56.9,skewY:-123.1,x:66.5,y:178.9}},{t:this.ikNode_1,p:{regY:25.7,skewX:-4.5,skewY:175.5,y:260.6,regX:-2.7,x:173.4}},{t:this.ikNode_2,p:{skewX:65.9,skewY:-114.1,x:82.9,y:310.2,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:56.4,skewY:-123.6,x:66.2,y:180.6}},{t:this.ikNode_1,p:{regY:25.7,skewX:-5.4,skewY:174.6,y:260.6,regX:-2.6,x:173.2}},{t:this.ikNode_2,p:{skewX:65.4,skewY:-114.6,x:83.7,y:311.7,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:55.9,skewY:-124.1,x:66,y:182.3}},{t:this.ikNode_1,p:{regY:25.7,skewX:-6.4,skewY:173.6,y:260.6,regX:-2.6,x:173.2}},{t:this.ikNode_2,p:{skewX:64.9,skewY:-115.1,x:84.7,y:313.2,regY:34.5,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:55.4,skewY:-124.6,x:65.8,y:183.9}},{t:this.ikNode_1,p:{regY:25.7,skewX:-7.3,skewY:172.7,y:260.5,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:64.5,skewY:-115.5,x:85.5,y:314.7,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:54.8,skewY:-125.2,x:65.6,y:185.5}},{t:this.ikNode_1,p:{regY:25.7,skewX:-8.3,skewY:171.7,y:260.5,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:64,skewY:-116,x:86.4,y:316.2,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:54.3,skewY:-125.7,x:65.4,y:187.1}},{t:this.ikNode_1,p:{regY:25.8,skewX:-9.3,skewY:170.7,y:260.6,regX:-2.7,x:173.4}},{t:this.ikNode_2,p:{skewX:63.5,skewY:-116.5,x:87.3,y:317.6,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:54.8,skewY:-125.2,x:65.6,y:185.5}},{t:this.ikNode_1,p:{regY:25.7,skewX:-8.3,skewY:171.7,y:260.5,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:64,skewY:-116,x:86.3,y:316.1,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:55.3,skewY:-124.7,x:65.7,y:183.9}},{t:this.ikNode_1,p:{regY:25.7,skewX:-7.3,skewY:172.7,y:260.4,regX:-2.7,x:173.4}},{t:this.ikNode_2,p:{skewX:64.5,skewY:-115.5,x:85.5,y:314.7,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:55.8,skewY:-124.2,x:65.9,y:182.2}},{t:this.ikNode_1,p:{regY:25.7,skewX:-6.3,skewY:173.7,y:260.5,regX:-2.6,x:173.2}},{t:this.ikNode_2,p:{skewX:65,skewY:-115,x:84.5,y:313.1,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:56.3,skewY:-123.7,x:66.2,y:180.4}},{t:this.ikNode_1,p:{regY:25.7,skewX:-5.3,skewY:174.7,y:260.5,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:65.5,skewY:-114.5,x:83.6,y:311.6,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:56.8,skewY:-123.2,x:66.5,y:178.7}},{t:this.ikNode_1,p:{regY:25.7,skewX:-4.3,skewY:175.7,y:260.5,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:66,skewY:-114,x:82.8,y:310,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6.1,skewX:57.3,skewY:-122.7,x:66.7,y:176.9}},{t:this.ikNode_1,p:{regY:25.7,skewX:-3.4,skewY:176.6,y:260.4,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:66.5,skewY:-113.5,x:81.9,y:308.5,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:57.8,skewY:-122.2,x:67.1,y:175.4}},{t:this.ikNode_1,p:{regY:25.7,skewX:-2.4,skewY:177.6,y:260.5,regX:-2.7,x:173.4}},{t:this.ikNode_2,p:{skewX:66.9,skewY:-113.1,x:81.1,y:306.8,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:57.3,skewY:-122.7,x:66.8,y:176.9}},{t:this.ikNode_1,p:{regY:25.7,skewX:-3.2,skewY:176.8,y:260.5,regX:-2.7,x:173.4}},{t:this.ikNode_2,p:{skewX:66.5,skewY:-113.5,x:81.8,y:308.3,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:56.9,skewY:-123.1,x:66.5,y:178.4}},{t:this.ikNode_1,p:{regY:25.7,skewX:-4.1,skewY:175.9,y:260.5,regX:-2.7,x:173.4}},{t:this.ikNode_2,p:{skewX:66.1,skewY:-113.9,x:82.5,y:309.7,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:56.5,skewY:-123.5,x:66.3,y:179.8}},{t:this.ikNode_1,p:{regY:25.7,skewX:-5,skewY:175,y:260.5,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:65.7,skewY:-114.3,x:83.3,y:311,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:56.1,skewY:-123.9,x:66,y:181.3}},{t:this.ikNode_1,p:{regY:25.7,skewX:-5.8,skewY:174.2,y:260.5,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:65.2,skewY:-114.8,x:84,y:312.3,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:55.6,skewY:-124.4,x:65.9,y:182.8}},{t:this.ikNode_1,p:{regY:25.7,skewX:-6.7,skewY:173.3,y:260.4,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:64.8,skewY:-115.2,x:84.8,y:313.6,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:55.2,skewY:-124.8,x:65.7,y:184.3}},{t:this.ikNode_1,p:{regY:25.7,skewX:-7.5,skewY:172.5,y:260.5,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:64.4,skewY:-115.6,x:85.7,y:315.1,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:54.8,skewY:-125.2,x:65.6,y:185.7}},{t:this.ikNode_1,p:{regY:25.7,skewX:-8.4,skewY:171.6,y:260.5,regX:-2.7,x:173.4}},{t:this.ikNode_2,p:{skewX:63.9,skewY:-116.1,x:86.5,y:316.3,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:54.3,skewY:-125.7,x:65.4,y:187.1}},{t:this.ikNode_1,p:{regY:25.8,skewX:-9.3,skewY:170.7,y:260.6,regX:-2.7,x:173.4}},{t:this.ikNode_2,p:{skewX:63.5,skewY:-116.5,x:87.3,y:317.6,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:54.8,skewY:-125.2,x:65.6,y:185.5}},{t:this.ikNode_1,p:{regY:25.7,skewX:-8.3,skewY:171.7,y:260.5,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:64,skewY:-116,x:86.3,y:316,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:55.3,skewY:-124.7,x:65.7,y:183.9}},{t:this.ikNode_1,p:{regY:25.7,skewX:-7.3,skewY:172.7,y:260.4,regX:-2.7,x:173.4}},{t:this.ikNode_2,p:{skewX:64.5,skewY:-115.5,x:85.5,y:314.6,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:55.8,skewY:-124.2,x:65.9,y:182.2}},{t:this.ikNode_1,p:{regY:25.7,skewX:-6.3,skewY:173.7,y:260.5,regX:-2.6,x:173.2}},{t:this.ikNode_2,p:{skewX:65,skewY:-115,x:84.5,y:313.1,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:56.3,skewY:-123.7,x:66.2,y:180.4}},{t:this.ikNode_1,p:{regY:25.7,skewX:-5.3,skewY:174.7,y:260.4,regX:-2.7,x:173.4}},{t:this.ikNode_2,p:{skewX:65.5,skewY:-114.5,x:83.7,y:311.5,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:56.8,skewY:-123.2,x:66.5,y:178.7}},{t:this.ikNode_1,p:{regY:25.7,skewX:-4.3,skewY:175.7,y:260.4,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:66,skewY:-114,x:82.8,y:310,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6.1,skewX:57.3,skewY:-122.7,x:66.6,y:176.9}},{t:this.ikNode_1,p:{regY:25.7,skewX:-3.4,skewY:176.6,y:260.3,regX:-2.7,x:173.4}},{t:this.ikNode_2,p:{skewX:66.5,skewY:-113.5,x:82,y:308.4,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:57.8,skewY:-122.2,x:67.1,y:175.3}},{t:this.ikNode_1,p:{regY:25.7,skewX:-2.4,skewY:177.6,y:260.4,regX:-2.7,x:173.4}},{t:this.ikNode_2,p:{skewX:66.9,skewY:-113.1,x:81.1,y:306.8,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:43.9,skewY:-136.1,x:40,y:190.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-7.1,skewY:172.9,y:260.4,regX:-2.7,x:173.4}},{t:this.ikNode_2,p:{skewX:53.1,skewY:-126.9,x:85.3,y:314.4,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:30,skewY:-150,x:16.3,y:211.8}},{t:this.ikNode_1,p:{regY:25.7,skewX:-11.9,skewY:168.1,y:260.3,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:39.2,skewY:-140.8,x:89.9,y:321.4,regY:34.6,regX:14}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:16.1,skewY:-163.9,x:-2.5,y:239.4}},{t:this.ikNode_1,p:{regY:25.7,skewX:-16.7,skewY:163.3,y:260.3,regX:-2.8,x:173.5}},{t:this.ikNode_2,p:{skewX:25.3,skewY:-154.7,x:95.4,y:328.1,regY:34.6,regX:14}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:2.2,skewY:-177.8,x:-15,y:271.6}},{t:this.ikNode_1,p:{regY:25.7,skewX:-21.4,skewY:158.6,y:260.4,regX:-2.7,x:173.4}},{t:this.ikNode_2,p:{skewX:11.4,skewY:-168.6,x:101.3,y:334.4,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-11.7,skewY:168.3,x:-20.3,y:307.2}},{t:this.ikNode_1,p:{regY:25.7,skewX:-26.2,skewY:153.8,y:260.4,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:-2.5,skewY:177.5,x:107.8,y:340.1,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-25.6,skewY:154.4,x:-17.6,y:344.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-31,skewY:149,y:260.3,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:-16.4,skewY:163.6,x:114.6,y:345.3,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-39.5,skewY:140.5,x:-6.8,y:380.4}},{t:this.ikNode_1,p:{regY:25.7,skewX:-35.7,skewY:144.3,y:260.4,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:-30.3,skewY:149.7,x:121.9,y:349.8,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-53.4,skewY:126.6,x:11.9,y:414.3}},{t:this.ikNode_1,p:{regY:25.7,skewX:-40.5,skewY:139.5,y:260.3,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:-44.2,skewY:135.8,x:129.3,y:353.9,regY:34.6,regX:14}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6.1,skewX:-67.2,skewY:112.8,x:37.7,y:444.2}},{t:this.ikNode_1,p:{regY:25.7,skewX:-45.2,skewY:134.8,y:260.3,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:-58.1,skewY:121.9,x:137.2,y:357.2,regY:34.6,regX:14}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-81.1,skewY:98.9,x:69.8,y:468.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-50,skewY:130,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-72,skewY:108,x:145.6,y:359.8,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-95,skewY:85,x:106.2,y:485.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-54.8,skewY:125.2,y:260.3,regX:-2.7,x:173.3}},{t:this.ikNode_2,p:{skewX:-85.9,skewY:94.1,x:153.7,y:361.7,regY:34.5,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:120.5,y:260.3,regX:-2.7,x:173.2}},{t:this.ikNode_2,p:{skewX:-99.8,skewY:80.2,x:162.3,y:362.9,regY:34.6,regX:13.9}}]},1).to({state:[{t:this.ikNode_3,p:{regX:6,skewX:-108.9,skewY:71.1,x:145.7,y:494.1}},{t:this.ikNode_1,p:{regY:25.7,skewX:-59.5,skewY:1