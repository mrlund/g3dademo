p5s6.js
Long ago
A
Alexey Bogdankevich uploaded an item
Dec 31, 2016
Javascript
p5s6.js
No recorded activity before December 31, 2016

(function (lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes

// library properties:
    lib.properties = {
        width: 600,
        height: 600,
        fps: 24,
        color: "#FFFFFF",
        manifest: [
            {src:"images/background2.jpg?1483176148926", id:"background2"},
            {src:"sounds/_1.mp3?1483176148926", id:"_1"},
            {src:"sounds/_10.mp3?1483176148926", id:"_10"},
            {src:"sounds/_11.mp3?1483176148926", id:"_11"},
            {src:"sounds/_12.mp3?1483176148926", id:"_12"},
            {src:"sounds/_13.mp3?1483176148926", id:"_13"},
            {src:"sounds/_14.mp3?1483176148926", id:"_14"},
            {src:"sounds/_15.mp3?1483176148926", id:"_15"},
            {src:"sounds/_16.mp3?1483176148926", id:"_16"},
            {src:"sounds/_17.mp3?1483176148926", id:"_17"},
            {src:"sounds/_18.mp3?1483176148926", id:"_18"},
            {src:"sounds/_19.mp3?1483176148926", id:"_19"},
            {src:"sounds/_2.mp3?1483176148926", id:"_2"},
            {src:"sounds/_20.mp3?1483176148926", id:"_20"},
            {src:"sounds/_21.mp3?1483176148926", id:"_21"},
            {src:"sounds/_22.mp3?1483176148926", id:"_22"},
            {src:"sounds/_23.mp3?1483176148926", id:"_23"},
            {src:"sounds/_24.mp3?1483176148926", id:"_24"},
            {src:"sounds/_25.mp3?1483176148926", id:"_25"},
            {src:"sounds/_26.mp3?1483176148926", id:"_26"},
            {src:"sounds/_27.mp3?1483176148926", id:"_27"},
            {src:"sounds/_28.mp3?1483176148926", id:"_28"},
            {src:"sounds/_29.mp3?1483176148926", id:"_29"},
            {src:"sounds/_3.mp3?1483176148926", id:"_3"},
            {src:"sounds/_30.mp3?1483176148926", id:"_30"},
            {src:"sounds/_31.mp3?1483176148926", id:"_31"},
            {src:"sounds/_32.mp3?1483176148926", id:"_32"},
            {src:"sounds/_33.mp3?1483176148926", id:"_33"},
            {src:"sounds/_34.mp3?1483176148926", id:"_34"},
            {src:"sounds/_4.mp3?1483176148926", id:"_4"},
            {src:"sounds/_5.mp3?1483176148926", id:"_5"},
            {src:"sounds/_6.mp3?1483176148926", id:"_6"},
            {src:"sounds/_7.mp3?1483176148926", id:"_7"},
            {src:"sounds/_8.mp3?1483176148926", id:"_8"},
            {src:"sounds/_9.mp3?1483176148926", id:"_9"},
            {src:"sounds/key1.mp3?1483176148926", id:"key1"},
            {src:"sounds/key2.mp3?1483176148926", id:"key2"}
        ]
    };



// symbols:



    (lib.background2 = function() {
        this.initialize(img.background2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,900,900);


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


    (lib.rtvevetrvкопия1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D7AF94").s().p("AgSCDQhDhIgvhIQgQgZgBgJQgBgHAIgGQAIgGAlAvQAiArABgCQABgGgWgcIgsg6QgUgZACgOQAAgHAJgFQAGgEAIAHQAOALAeAuQA0BKgJgfQgEgLhGhnQgKgOgEgHQgFgMAGgKQAMgUAsBFQAsBGACgBQAEgEg0hsQgMgXAPgIQAQgHAOAbQA3B8AcAmQAPATAMgBQAHAAgXgnIgeg2IgQghQgHgTALgCQAMgBAYAdQALAPAKAPQBKCFACA1QADA8hNArQgDACgDAAQgZAAg/hHg");
        this.shape.setTransform(12.7,24.2,1.03,1.03,0,30,-150);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.2,9,40,30);


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


    (lib.f4wfewfw = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#D0B684").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
        this.shape.setTransform(39,100.8,1.568,1.568);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#D0B684").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
        this.shape_1.setTransform(537.4,100.8,1.568,1.568);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#985A34").s().p("A6zBSIAAijMA1nAAAIAACjg");
        this.shape_2.setTransform(291.6,100.8,1.568,1.568);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#D0B684").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
        this.shape_3.setTransform(39,55,1.568,1.568);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#D0B684").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
        this.shape_4.setTransform(537.4,55,1.568,1.568);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#985A34").s().p("A6zBSIAAijMA1nAAAIAACjg");
        this.shape_5.setTransform(291.6,55,1.568,1.568);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#D0B684").s().p("A8jAwIAAhfMA5GAAAIAABfg");
        this.shape_6.setTransform(286.6,163.7,1.568,1.568);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#985A34").s().p("A8jBSIAAijMA5GAAAIAACjg");
        this.shape_7.setTransform(286.6,150.8,1.568,1.568);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#985A34").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
        this.shape_8.setTransform(39,12.9,1.568,1.568);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#985A34").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
        this.shape_9.setTransform(537.4,12.9,1.568,1.568);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#985A34").s().p("A6zBSIAAijMA1nAAAIAACjg");
        this.shape_10.setTransform(291.6,12.9,1.568,1.568);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#383732").s().p("AhEG6IAAtzICJAAIAANzg");
        this.shape_11.setTransform(38.2,207.3,1.568,1.568);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#383732").s().p("AhEG6IAAtzICJAAIAANzg");
        this.shape_12.setTransform(538.6,207.3,1.568,1.568);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#383732").s().p("AgtG6IAAtzIBbAAIAANzg");
        this.shape_13.setTransform(523.7,81.6,1.568,1.568);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#383732").s().p("AgtG6IAAtzIBbAAIAANzg");
        this.shape_14.setTransform(52.6,75.9,1.568,1.568);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,573.2,276.6);


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


    (lib.rtvevetrvкопия1_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#8D6845").s().p("AgSCDQhDhIgvhIQgQgZgBgJQgBgHAIgGQAIgGAlAvQAiArABgCQABgGgWgcIgsg6QgUgZACgOQAAgHAJgFQAGgEAIAHQAOALAeAuQA0BKgJgfQgEgLhGhnQgKgOgEgHQgFgMAGgKQAMgUAsBFQAsBGACgBQAEgEg0hsQgMgXAPgIQAQgHAOAbQA3B8AcAmQAPATAMgBQAHAAgXgnIgeg2IgQghQgHgTALgCQAMgBAYAdQALAPAKAPQBKCFACA1QADA8hNArQgDACgDAAQgZAAg/hHg");
        this.shape_1.setTransform(12.7,24.2,1.03,1.03,0,30,-150);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.2,9,40,30);


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


    (lib.KimHeadTalkingSm = function(mode,startPosition,loop) {
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
        this.instance_5 = new lib.lips("synched",4);
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


    (lib.KimHeadTalkingNo = function(mode,startPosition,loop) {
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


    (lib.KimHeadEyeup = function(mode,startPosition,loop) {
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
        this.instance_3.setTransform(125.7,96.7,1.516,1.516,0,0,0,5.9,4.4);

        this.instance_3.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:128.7,y:94.7},7).wait(588));

        // Слой 3 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        mask_1.graphics.p("AExH1QhqgWAehhQAMgoBNAMQBWAPBHBZQgyAwhHAAQgXAAgagFg");
        mask_1.setTransform(47.6,50.7);

        // Слой 2
        this.instance_4 = new lib.ClipGroup();
        this.instance_4.setTransform(82.5,95.1,1.516,1.516,0,0,0,8.3,5.9);

        this.instance_4.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:84.5,y:91.1},7).wait(588));

        // Слой 8
        this.instance_5 = new lib.lips("single",0);
        this.instance_5.setTransform(103.8,132.8,1,1,0,0,180,11.7,6.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({startPosition:4},0).wait(582));

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


    (lib.KimHeadEyeDF = function(mode,startPosition,loop) {
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
        this.instance_3.setTransform(125.7,96.7,1.516,1.516,0,0,0,5.9,4.4);

        this.instance_3.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:128.7,y:94.7},7).wait(588));

        // Слой 3 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        mask_1.graphics.p("AExH1QhqgWAehhQAMgoBNAMQBWAPBHBZQgyAwhHAAQgXAAgagFg");
        mask_1.setTransform(47.6,50.7);

        // Слой 2
        this.instance_4 = new lib.ClipGroup();
        this.instance_4.setTransform(82.5,95.1,1.516,1.516,0,0,0,8.3,5.9);

        this.instance_4.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:84.5,y:91.1},7).wait(588));

        // Слой 8
        this.instance_5 = new lib.lips("single",0);
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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},45).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},37).to({state:[]},579).wait(666));

        // Brow
        this.instance_4 = new lib.Brow2();
        this.instance_4.setTransform(17.9,74,1,1,0,0,0,12.3,4.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},45).wait(37).to({_off:false},0).to({_off:true},579).wait(666));

        // brow
        this.instance_5 = new lib.brow1();
        this.instance_5.setTransform(64.3,75.4,1,1,0,0,0,15.1,5.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},45).wait(37).to({_off:false},0).to({_off:true},579).wait(666));

        // Lash
        this.instance_6 = new lib.Lash();
        this.instance_6.setTransform(41.8,96.2,1,1,0,0,0,34,6.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},45).wait(37).to({_off:false},0).to({_off:true},579).wait(666));

        // Слой 7 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");
        var mask_graphics_82 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:14.3,y:53.4}).wait(45).to({graphics:null,x:0,y:0}).wait(37).to({graphics:mask_graphics_82,x:14.3,y:53.4}).wait(579).to({graphics:null,x:0,y:0}).wait(666));

        // eye
        this.instance_7 = new lib.ClipGroup_2();
        this.instance_7.setTransform(16.8,101.9,1.323,1.323,0,0,180,6.5,4.5);

        this.instance_7.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},45).wait(37).to({_off:false},0).to({_off:true},579).wait(666));

        // Слой 8 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_0 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");
        var mask_1_graphics_82 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:36.9,y:53.5}).wait(45).to({graphics:null,x:0,y:0}).wait(37).to({graphics:mask_1_graphics_82,x:36.9,y:53.5}).wait(579).to({graphics:null,x:0,y:0}).wait(666));

        // eye2
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgIAAQAAgCACgDQADgDADAAQADgBADADQADADAAADQAAAIgJABQgHAAgBgJg");
        this.shape_6.setTransform(55.9,102.1,1.323,1.323,0,0,180);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#1C1717").s().p("AgSAWQgJgJgBgMQgBgLAJgJQAIgJAMgBQALAAAJAIQAJAIAAANQABALgJAJQgIAJgMAAIgBABQgKAAgIgIg");
        this.shape_7.setTransform(58.7,99.8,1.323,1.323,0,0,180);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4A3A2E").s().p("AgaAdQgMgLgBgRQAAgPALgMQALgMAQgBQAPgBAMALQANALAAARQABAPgLANQgLAMgRABIgBAAQgOAAgMgLg");
        this.shape_8.setTransform(58.6,100,1.323,1.323,0,0,180);

        this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[]},45).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},37).to({state:[]},579).wait(666));

        // Слой 9
        this.instance_8 = new lib.JennLips("synched",0);
        this.instance_8.setTransform(37.1,133.9,0.754,0.754);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},45).wait(37).to({_off:false,startPosition:2},0).to({_off:true},579).wait(666));

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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[]},45).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},37).to({state:[]},579).wait(666));

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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},71).to({state:[]},17).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[]},702).wait(532));

        // Brow
        this.instance_4 = new lib.Brow2();
        this.instance_4.setTransform(17.9,74,1,1,0,0,0,12.3,4.5);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(71).to({_off:false},0).to({_off:true},17).wait(5).to({_off:false},0).to({_off:true},702).wait(532));

        // brow
        this.instance_5 = new lib.brow1();
        this.instance_5.setTransform(64.3,75.4,1,1,0,0,0,15.1,5.5);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(71).to({_off:false},0).to({_off:true},17).wait(5).to({_off:false},0).to({_off:true},702).wait(532));

        // Lash
        this.instance_6 = new lib.Lash();
        this.instance_6.setTransform(41.8,96.2,1,1,0,0,0,34,6.5);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(71).to({_off:false},0).to({_off:true},17).wait(5).to({_off:false},0).to({_off:true},702).wait(532));

        // Слой 7 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_71 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");
        var mask_graphics_93 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(71).to({graphics:mask_graphics_71,x:14.3,y:53.4}).wait(17).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_93,x:14.3,y:53.4}).wait(702).to({graphics:null,x:0,y:0}).wait(532));

        // eye
        this.instance_7 = new lib.ClipGroup_2();
        this.instance_7.setTransform(16.8,101.9,1.323,1.323,0,0,180,6.5,4.5);
        this.instance_7._off = true;

        this.instance_7.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(71).to({_off:false},0).to({_off:true},17).wait(5).to({_off:false},0).to({_off:true},702).wait(532));

        // Слой 8 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_71 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");
        var mask_1_graphics_93 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(71).to({graphics:mask_1_graphics_71,x:36.9,y:53.5}).wait(17).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_1_graphics_93,x:36.9,y:53.5}).wait(702).to({graphics:null,x:0,y:0}).wait(532));

        // eye2
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgIAAQAAgCACgDQADgDADAAQADgBADADQADADAAADQAAAIgJABQgHAAgBgJg");
        this.shape_6.setTransform(55.9,102.1,1.323,1.323,0,0,180);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#1C1717").s().p("AgSAWQgJgJgBgMQgBgLAJgJQAIgJAMgBQALAAAJAIQAJAIAAANQABALgJAJQgIAJgMAAIgBABQgKAAgIgIg");
        this.shape_7.setTransform(58.7,99.8,1.323,1.323,0,0,180);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4A3A2E").s().p("AgaAdQgMgLgBgRQAAgPALgMQALgMAQgBQAPgBAMALQANALAAARQABAPgLANQgLAMgRABIgBAAQgOAAgMgLg");
        this.shape_8.setTransform(58.6,100,1.323,1.323,0,0,180);

        this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},71).to({state:[]},17).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},5).to({state:[]},702).wait(532));

        // Слой 9
        this.instance_8 = new lib.JennLips("single",6);
        this.instance_8.setTransform(37.1,133.9,0.754,0.754);
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(71).to({_off:false},0).to({_off:true},17).wait(5).to({_off:false},0).to({_off:true},702).wait(532));

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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},71).to({state:[]},17).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},5).to({state:[]},702).wait(532));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.4,15.4,125.6,210.2);


    (lib.JennHeadS = function(mode,startPosition,loop) {
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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},136).to({state:[]},318).wait(873));

        // Brow
        this.instance_4 = new lib.Brow2();
        this.instance_4.setTransform(17.9,74,1,1,0,0,0,12.3,4.5);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(136).to({_off:false},0).to({_off:true},318).wait(873));

        // brow
        this.instance_5 = new lib.brow1();
        this.instance_5.setTransform(64.3,75.4,1,1,0,0,0,15.1,5.5);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(136).to({_off:false},0).to({_off:true},318).wait(873));

        // Lash
        this.instance_6 = new lib.Lash();
        this.instance_6.setTransform(41.8,96.2,1,1,0,0,0,34,6.5);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(136).to({_off:false},0).to({_off:true},318).wait(873));

        // Слой 7 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_136 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(136).to({graphics:mask_graphics_136,x:14.3,y:53.4}).wait(318).to({graphics:null,x:0,y:0}).wait(873));

        // eye
        this.instance_7 = new lib.ClipGroup_2();
        this.instance_7.setTransform(16.8,101.9,1.323,1.323,0,0,180,6.5,4.5);
        this.instance_7._off = true;

        this.instance_7.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(136).to({_off:false},0).to({_off:true},318).wait(873));

        // Слой 8 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_136 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(136).to({graphics:mask_1_graphics_136,x:36.9,y:53.5}).wait(318).to({graphics:null,x:0,y:0}).wait(873));

        // eye2
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgIAAQAAgCACgDQADgDADAAQADgBADADQADADAAADQAAAIgJABQgHAAgBgJg");
        this.shape_6.setTransform(55.9,102.1,1.323,1.323,0,0,180);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#1C1717").s().p("AgSAWQgJgJgBgMQgBgLAJgJQAIgJAMgBQALAAAJAIQAJAIAAANQABALgJAJQgIAJgMAAIgBABQgKAAgIgIg");
        this.shape_7.setTransform(58.7,99.8,1.323,1.323,0,0,180);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4A3A2E").s().p("AgaAdQgMgLgBgRQAAgPALgMQALgMAQgBQAPgBAMALQANALAAARQABAPgLANQgLAMgRABIgBAAQgOAAgMgLg");
        this.shape_8.setTransform(58.6,100,1.323,1.323,0,0,180);

        this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},136).to({state:[]},318).wait(873));

        // Слой 9
        this.instance_8 = new lib.JennLips("single",2);
        this.instance_8.setTransform(37.1,133.9,0.754,0.754);
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(136).to({_off:false},0).to({_off:true},318).wait(873));

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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},136).to({state:[]},318).wait(873));

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


    (lib.KimScene6_14 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // flash0.ai
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#92D4D6").s().p("AgTAYQgKgJgBgNQgBgLAIgKQAJgKANgBQALgCAKAJQAKAJABAMQABAMgIAKQgJALgNABIgCAAQgKAAgJgIg");
        this.shape.setTransform(-46.2,252.2,2.161,2.161);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#6493B3").s().p("AgNAIIABgTIAGAHQAGAHANAKg");
        this.shape_1.setTransform(-157.9,305.3,2.161,2.161);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#6493B3").s().p("AgRAAQAOAAAVgKIAAAVg");
        this.shape_2.setTransform(27.2,314.6,2.161,2.161);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#6493B3").s().p("AgeAlQgQgNgCgUQgBgTANgPQANgQAUgBQATgCAPANQAQANABAUQACATgNAPQgNAQgUACIgEAAQgQAAgOgMg");
        this.shape_3.setTransform(-46.3,252.3,2.161,2.161);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#6493B3").s().p("AgeAlQgQgNgBgUQgCgTANgPQANgQAUgBQATgCAPANQAQANACAUQABATgNAPQgNAQgUACIgEAAQgRAAgNgMg");
        this.shape_4.setTransform(-43.4,277.1,2.161,2.161);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#92D4D6").s().p("AgyA9QgagWgCghQgDgfAVgZQAVgaAhgCQAfgDAaAVQAaAVACAiQADAfgVAZQgWAZghADIgGABQgbAAgXgTg");
        this.shape_5.setTransform(-45.3,266.4,2.161,2.161);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#92D4D6").s().p("AF0DlIgnm7QgBgSgOgLQgOgMgSABIqQA5QgMABgJAGQAMgSAVgCIKXg5QASgCAPAMQAOAMABASIAnHAQABASgLANQgLAOgRADQAUgPgCgZg");
        this.shape_6.setTransform(-46,252.3,2.161,2.161);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#6493B3").s().p("AlJESQgcgXgCgjIggluQgDgjAXgbQAXgbAigDIJGgzQAjgDAbAXQAbAXADAjIAgFuQADAjgXAbQgXAcgjADIpFAyIgIAAQgeAAgYgUg");
        this.shape_7.setTransform(-46,258.4,2.161,2.161);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#050807").s().p("AlJESQgbgXgDgjIggluQgDgjAXgbQAXgbAjgDIJFgzQAjgDAbAXQAbAXADAjIAgFuQADAjgXAbQgWAbgkAEIpEAyIgIAAQgfAAgYgUg");
        this.shape_8.setTransform(-47.5,260.2,2.161,2.161);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#4C5667").s().p("AlJEVQgbgWgDgkIggl1QgDgjAXgbQAXgbAjgDIJFgzQAjgDAbAYQAbAWADAjIAgF2QADAigXAcQgWAbgjADIpFAzIgIAAQgeAAgZgVg");
        this.shape_9.setTransform(-52.2,261.4,2.161,2.161);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#6493B3").s().p("AAuAqIh8hQQgEgDACgCQACgCAHgBQAQgBAKAGIB8BRQAEACgCADQgCACgHABIgEAAQgNAAgJgGg");
        this.shape_10.setTransform(-59.9,304.3,2.161,2.161);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#6493B3").s().p("AAuAqIh8hRQgEgCACgDQACgBAHgCQAQgBAKAHIB8BQQAEADgCACQgCADgHAAIgEABQgOAAgIgGg");
        this.shape_11.setTransform(-75.3,305.6,2.161,2.161);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#6493B3").s().p("AAuAqIh8hRQgEgCACgDQACgCAHAAQAPgCALAHIB8BQQAEADgCACQgCADgHAAIgGABQgMAAgIgGg");
        this.shape_12.setTransform(-90.8,307.6,2.161,2.161);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#6493B3").s().p("AA7AzIiVhhQgEgDACgDQACgCAGAAQARgBAJAFICVBhQAEADgCADQgCACgGAAIgFABQgNAAgIgFg");
        this.shape_13.setTransform(1.5,300.4,2.161,2.161);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#6493B3").s().p("AA7AyIiVhgQgEgDACgDQACgCAGAAQAQgCAKAHICVBhQAEACgCADQgCACgGAAIgGABQgMAAgIgGg");
        this.shape_14.setTransform(-13.3,301.9,2.161,2.161);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#6493B3").s().p("AA7AyIiVhhQgEgCACgDQACgCAGAAQAQgCAKAHICVBhQAEACgCADQgCACgGAAIgGABQgMAAgIgGg");
        this.shape_15.setTransform(-28.2,303.2,2.161,2.161);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#6493B3").s().p("AA7AyIiVhgQgEgDACgDQACgCAGAAQAQgCAKAHICVBhQAEACgCADQgCACgGABIgFAAQgNAAgIgGg");
        this.shape_16.setTransform(-43.4,304.5,2.161,2.161);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#6493B3").s().p("AA7AyIiVhgQgEgDACgDQACgCAGAAQAQgCAKAHICVBhQAEACgCADQgBACgIAAIgGABQgLAAgIgGg");
        this.shape_17.setTransform(-105.9,309.9,2.161,2.161);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#6493B3").s().p("AA7AzIiVhhQgEgDACgDQACgBAGgBQARgBAJAFICVBhQAEADgCADQgCACgGAAIgFABQgNAAgIgFg");
        this.shape_18.setTransform(-121.8,311.7,2.161,2.161);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#6493B3").s().p("AlGAcQgGgEAKgBIJ6g1QAJgBAGAEQABABAAAAQABAAAAABQAAAAAAABQAAAAAAAAIgFACIp7A1IgDAAQgHAAgFgDg");
        this.shape_19.setTransform(-79.7,295.5,2.161,2.161);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#6493B3").s().p("AlGAcQgGgEAKgBIJ6g1QAJgBAGAEQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgFACIp7A1IgDAAQgHAAgFgDg");
        this.shape_20.setTransform(-76.1,299,2.161,2.161);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#6493B3").s().p("AlGAcQgGgEAJgBIJ7g1QAJgBAGAEQABABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQgCACgDAAIp7A1IgDAAQgIAAgEgDg");
        this.shape_21.setTransform(-70.9,302.3,2.161,2.161);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#6493B3").s().p("AlGAcQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAFgCIJ7g1QAJgBAGAEQABABAAAAQABAAAAABQAAAAAAAAQAAABgBAAQgBACgEAAIp6A1IgEAAQgHAAgEgDg");
        this.shape_22.setTransform(-66.8,305.6,2.161,2.161);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#6493B3").s().p("AlHAcQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIAFgCIJ6g1QAJgBAHAEQAFAEgJABIp7A1IgDAAQgHAAgFgDg");
        this.shape_23.setTransform(-61,308.8,2.161,2.161);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#6493B3").s().p("AlGAcQgFgEAJgBIJ6g1QALAAAEADQAGAEgJABIp7A1QgKAAgFgDg");
        this.shape_24.setTransform(-56.4,311.9,2.161,2.161);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#6493B3").s().p("AlHAcQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIAFgCIJ7g1QAJgBAGAEQAFAEgJABIp6A1IgEAAQgGAAgGgDg");
        this.shape_25.setTransform(-54.1,315.6,2.161,2.161);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#E8E8E6").s().p("AjnBGQgcgHgPgJIhSg2QgQgIAHgJQAHgIAYgCIIAgtQAZgCAcAFQAdAGAQAKIBRA1QAQAJgHAJQgHAJgYABIoBAtIgNABQgTAAgVgEg");
        this.shape_26.setTransform(-65,306.8,2.161,2.161);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#E8E8E6").s().p("AAPgIIAHAFQgCAFgpAHg");
        this.shape_27.setTransform(-60.8,309.9,2.161,2.161);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#6493B3").s().p("AgTAKQgTgCgHgEQgHgEAJgDQAIgFAUgCQARgBATACQASACAHAFQAHACgJAFQgIAEgUACIgQAAIgTgBg");
        this.shape_28.setTransform(-72.6,307.4,2.161,2.161);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#E8E8E6").s().p("AghARQgegDgLgIQgMgGAPgHQAOgGAfgEQAegCAeADQAeAEALAHQAMAGgOAGQgPAIgfACIgbACQgQAAgRgCg");
        this.shape_29.setTransform(-65.5,304.7,2.161,2.161);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#BEBDBC").s().p("AldBWQAMABAKgBIJwg2QARgCAIgEQAIgEgGgEIiZhiQgIgFgYgCQAQgBAQACQAQACAGAEICaBjQAHAEgIAEQgIAEgRACIp3A2IgRABQgMAAgKgCg");
        this.shape_30.setTransform(-44.5,306.7,2.161,2.161);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#6493B3").s().p("AkBBRQgggGgSgLIhlhBQgRgLAIgKQAHgJAcgDIJEgyQAcgCAgAGQAgAGARALIBlBBQASAMgIAJQgIAKgcACIpDAyIgQABQgVAAgXgFg");
        this.shape_31.setTransform(-62.7,306.5,2.161,2.161);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#050807").s().p("AkBBRQgggGgSgLIhlhBQgRgLAIgKQAHgJAcgDIJEgyQAcgCAgAGQAgAGARALIBlBBQASALgIAKQgIAKgcACIpDAyIgQABQgVAAgXgFg");
        this.shape_32.setTransform(-64.8,306.3,2.161,2.161);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#4C5667").s().p("AkABSQgggGgRgLIhohDQgRgLAIgKQAHgKAcgCIJEgyQAbgDAhAHQAgAGARAMIBoBBQARAMgIAJQgHALgcACIpEAyIgQABQgVAAgXgFg");
        this.shape_33.setTransform(-69.6,306.6,2.161,2.161);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#6493B3").s().p("AkABXIARgBQgZAAgZgGQgZgHgOgJIhnhCQgRgLAHgKQAIgKAbgCIJEgyIAagBQASgBAZADIASACQgKgDgTgBQARgCAQACQAQACAGAEIANAJQAIADAJAFIBlBBQAHAFACAEIAOAIQAGAEgIAEQgHAEgSACIgVACIgBAAIpEAyIgBAAIgcADIgOAAQgNAAgMgBg");
        this.shape_34.setTransform(-64.8,312,2.161,2.161);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(639));

        // Head
        this.instance = new lib.KimHeadEyeup("synched",68);
        this.instance.setTransform(-130,83.3,1,1,-6,0,0,82.4,147.2);

        this.instance_1 = new lib.KimHeadTalking("synched",24);
        this.instance_1.setTransform(-130,83.3,1,1,-6,0,0,82.3,147.2);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},6).wait(614));
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({rotation:-1.8,startPosition:28},4).to({rotation:-6,startPosition:32},4).to({_off:true},6).wait(614));

        // Каркас_11 - копия
        this.ikNode_996 = new lib.erervev_1();
        this.ikNode_996.setTransform(-203.4,192.5,1.107,1.107,58.5,0,0,14,34.5);

        this.ikNode_995 = new lib.rtvgretvrevкопия_1();
        this.ikNode_995.setTransform(-152.3,129.7,1.108,1.108,105,0,0,-3.1,25.7);

        this.ikNode_997 = new lib.rtvevetrvкопия1_1();
        this.ikNode_997.setTransform(-122.2,266.9,1.392,1.392,74.2,0,0,6,27.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_997,p:{y:266.9}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:14}}]}).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).to({state:[{t:this.ikNode_997,p:{y:266.8}},{t:this.ikNode_995},{t:this.ikNode_996,p:{regX:13.9}}]},1).wait(1));

        // flash0.ai
        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#896648").s().p("AhqBRQjJnxA2hGQBDhXBaAJQBdAJAVBrQAgCTDXMaIigBJQhujrhlj6g");
        this.shape_35.setTransform(-136,381.4,1.392,1.392,0,0,180);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#896648").s().p("ABeH2QhFh7hMiiQjSm1gEidQgEidA4gmQAWgPAugIIBdgOQBVgRB+IhQA+EPAtEUIgtA7QguBAgJAUIgBACQgKAAg9htg");
        this.shape_36.setTransform(-84.8,392.9,1.392,1.392,0,0,180);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#E7BB84").s().p("AhBCKQiNgKhjgbQhmgdAOgcQAYguAWhKIARhBILWC6QgxA8iMAYQhNANhdAAQgvAAg3gEg");
        this.shape_37.setTransform(-129,339.9,1.802,1.802);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#E7BB84").s().p("AgMApIAGhRIATABIgGBQg");
        this.shape_38.setTransform(-137.6,300.3,1.802,1.802);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#E7BB84").s().p("AgOAuIALhcIASABIgKBbg");
        this.shape_39.setTransform(-185.9,297.7,1.802,1.802);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#E7BB84").s().p("AgMApIAHhRIASABIgGBQg");
        this.shape_40.setTransform(-164.6,298.9,1.802,1.802);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#D9AE7E").s().p("AgQgmIASAAIAPBMIgSABg");
        this.shape_41.setTransform(-96.7,300.3,1.802,1.802);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#D9AE7E").s().p("AhkhrIBfACICMDUIkNABg");
        this.shape_42.setTransform(-89.6,306.7,1.802,1.802);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#D9AE7E").s().p("AgKAHQg0gvAcgFIAngJIAoBtQgfgYgYgYg");
        this.shape_43.setTransform(-72.8,294.2,1.802,1.802);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#E7BB84").s().p("AmKCrIAagCIAniHIAAgEIgEgBQAEg7gHhtQgBgXAFgLQAGgLAVgMQAFgDAiADIAvAEQCDAPDagCQBuAABUgEQAPAQAcB5QAfCGgDBVQjtAUhdAGg");
        this.shape_44.setTransform(-128.8,317.1,1.802,1.802);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]}).wait(639));

        // flash0.ai
        this.instance_2 = new lib.grtgerg();
        this.instance_2.setTransform(-126.3,280.8,1,1,0,0,0,58.6,207.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(639));

        // Каркас_11
        this.ikNode_999 = new lib.erervev_1();
        this.ikNode_999.setTransform(-88,198,0.992,0.992,53.8,0,0,15,32.5);

        this.ikNode_998 = new lib.rtvgretvrev();
        this.ikNode_998.setTransform(-96.6,113.7,0.994,0.994,63.7,0,0,-17.3,26.4);

        this.ikNode_1000 = new lib.rtvevetrvкопия1_1();
        this.ikNode_1000.setTransform(-9.9,261.6,1.202,1.202,72.1,0,0,7.3,25.9);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]}).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).to({state:[{t:this.ikNode_1000},{t:this.ikNode_998},{t:this.ikNode_999}]},1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-223.5,-62.7,262.5,540.8);


    (lib.KimScene6_12 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // flash0.ai
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#92D4D6").s().p("AgTAYQgKgJgBgNQgBgLAIgKQAJgKANgBQALgCAKAJQAKAJABAMQABAMgIAKQgJALgNABIgCAAQgKAAgJgIg");
        this.shape.setTransform(-46.2,252.2,2.161,2.161);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#6493B3").s().p("AgNAIIABgTIAGAHQAGAHANAKg");
        this.shape_1.setTransform(-157.9,305.3,2.161,2.161);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#6493B3").s().p("AgRAAQAOAAAVgKIAAAVg");
        this.shape_2.setTransform(27.2,314.6,2.161,2.161);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#6493B3").s().p("AgeAlQgQgNgCgUQgBgTANgPQANgQAUgBQATgCAPANQAQANABAUQACATgNAPQgNAQgUACIgEAAQgQAAgOgMg");
        this.shape_3.setTransform(-46.3,252.3,2.161,2.161);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#6493B3").s().p("AgeAlQgQgNgBgUQgCgTANgPQANgQAUgBQATgCAPANQAQANACAUQABATgNAPQgNAQgUACIgEAAQgRAAgNgMg");
        this.shape_4.setTransform(-43.4,277.1,2.161,2.161);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#92D4D6").s().p("AgyA9QgagWgCghQgDgfAVgZQAVgaAhgCQAfgDAaAVQAaAVACAiQADAfgVAZQgWAZghADIgGABQgbAAgXgTg");
        this.shape_5.setTransform(-45.3,266.4,2.161,2.161);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#92D4D6").s().p("AF0DlIgnm7QgBgSgOgLQgOgMgSABIqQA5QgMABgJAGQAMgSAVgCIKXg5QASgCAPAMQAOAMABASIAnHAQABASgLANQgLAOgRADQAUgPgCgZg");
        this.shape_6.setTransform(-46,252.3,2.161,2.161);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#6493B3").s().p("AlJESQgcgXgCgjIggluQgDgjAXgbQAXgbAigDIJGgzQAjgDAbAXQAbAXADAjIAgFuQADAjgXAbQgXAcgjADIpFAyIgIAAQgeAAgYgUg");
        this.shape_7.setTransform(-46,258.4,2.161,2.161);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#050807").s().p("AlJESQgbgXgDgjIggluQgDgjAXgbQAXgbAjgDIJFgzQAjgDAbAXQAbAXADAjIAgFuQADAjgXAbQgWAbgkAEIpEAyIgIAAQgfAAgYgUg");
        this.shape_8.setTransform(-47.5,260.2,2.161,2.161);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#4C5667").s().p("AlJEVQgbgWgDgkIggl1QgDgjAXgbQAXgbAjgDIJFgzQAjgDAbAYQAbAWADAjIAgF2QADAigXAcQgWAbgjADIpFAzIgIAAQgeAAgZgVg");
        this.shape_9.setTransform(-52.2,261.4,2.161,2.161);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#6493B3").s().p("AAuAqIh8hQQgEgDACgCQACgCAHgBQAQgBAKAGIB8BRQAEACgCADQgCACgHABIgEAAQgNAAgJgGg");
        this.shape_10.setTransform(-59.9,304.3,2.161,2.161);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#6493B3").s().p("AAuAqIh8hRQgEgCACgDQACgBAHgCQAQgBAKAHIB8BQQAEADgCACQgCADgHAAIgEABQgOAAgIgGg");
        this.shape_11.setTransform(-75.3,305.6,2.161,2.161);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#6493B3").s().p("AAuAqIh8hRQgEgCACgDQACgCAHAAQAPgCALAHIB8BQQAEADgCACQgCADgHAAIgGABQgMAAgIgGg");
        this.shape_12.setTransform(-90.8,307.6,2.161,2.161);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#6493B3").s().p("AA7AzIiVhhQgEgDACgDQACgCAGAAQARgBAJAFICVBhQAEADgCADQgCACgGAAIgFABQgNAAgIgFg");
        this.shape_13.setTransform(1.5,300.4,2.161,2.161);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#6493B3").s().p("AA7AyIiVhgQgEgDACgDQACgCAGAAQAQgCAKAHICVBhQAEACgCADQgCACgGAAIgGABQgMAAgIgGg");
        this.shape_14.setTransform(-13.3,301.9,2.161,2.161);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#6493B3").s().p("AA7AyIiVhhQgEgCACgDQACgCAGAAQAQgCAKAHICVBhQAEACgCADQgCACgGAAIgGABQgMAAgIgGg");
        this.shape_15.setTransform(-28.2,303.2,2.161,2.161);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#6493B3").s().p("AA7AyIiVhgQgEgDACgDQACgCAGAAQAQgCAKAHICVBhQAEACgCADQgCACgGABIgFAAQgNAAgIgGg");
        this.shape_16.setTransform(-43.4,304.5,2.161,2.161);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#6493B3").s().p("AA7AyIiVhgQgEgDACgDQACgCAGAAQAQgCAKAHICVBhQAEACgCADQgBACgIAAIgGABQgLAAgIgGg");
        this.shape_17.setTransform(-105.9,309.9,2.161,2.161);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#6493B3").s().p("AA7AzIiVhhQgEgDACgDQACgBAGgBQARgBAJAFICVBhQAEADgCADQgCACgGAAIgFABQgNAAgIgFg");
        this.shape_18.setTransform(-121.8,311.7,2.161,2.161);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#6493B3").s().p("AlGAcQgGgEAKgBIJ6g1QAJgBAGAEQABABAAAAQABAAAAABQAAAAAAABQAAAAAAAAIgFACIp7A1IgDAAQgHAAgFgDg");
        this.shape_19.setTransform(-79.7,295.5,2.161,2.161);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#6493B3").s().p("AlGAcQgGgEAKgBIJ6g1QAJgBAGAEQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgFACIp7A1IgDAAQgHAAgFgDg");
        this.shape_20.setTransform(-76.1,299,2.161,2.161);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#6493B3").s().p("AlGAcQgGgEAJgBIJ7g1QAJgBAGAEQABABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQgCACgDAAIp7A1IgDAAQgIAAgEgDg");
        this.shape_21.setTransform(-70.9,302.3,2.161,2.161);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#6493B3").s().p("AlGAcQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAFgCIJ7g1QAJgBAGAEQABABAAAAQABAAAAABQAAAAAAAAQAAABgBAAQgBACgEAAIp6A1IgEAAQgHAAgEgDg");
        this.shape_22.setTransform(-66.8,305.6,2.161,2.161);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#6493B3").s().p("AlHAcQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIAFgCIJ6g1QAJgBAHAEQAFAEgJABIp7A1IgDAAQgHAAgFgDg");
        this.shape_23.setTransform(-61,308.8,2.161,2.161);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#6493B3").s().p("AlGAcQgFgEAJgBIJ6g1QALAAAEADQAGAEgJABIp7A1QgKAAgFgDg");
        this.shape_24.setTransform(-56.4,311.9,2.161,2.161);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#6493B3").s().p("AlHAcQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIAFgCIJ7g1QAJgBAGAEQAFAEgJABIp6A1IgEAAQgGAAgGgDg");
        this.shape_25.setTransform(-54.1,315.6,2.161,2.161);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#E8E8E6").s().p("AjnBGQgcgHgPgJIhSg2QgQgIAHgJQAHgIAYgCIIAgtQAZgCAcAFQAdAGAQAKIBRA1QAQAJgHAJQgHAJgYABIoBAtIgNABQgTAAgVgEg");
        this.shape_26.setTransform(-65,306.8,2.161,2.161);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#E8E8E6").s().p("AAPgIIAHAFQgCAFgpAHg");
        this.shape_27.setTransform(-60.8,309.9,2.161,2.161);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#6493B3").s().p("AgTAKQgTgCgHgEQgHgEAJgDQAIgFAUgCQARgBATACQASACAHAFQAHACgJAFQgIAEgUACIgQAAIgTgBg");
        this.shape_28.setTransform(-72.6,307.4,2.161,2.161);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#E8E8E6").s().p("AghARQgegDgLgIQgMgGAPgHQAOgGAfgEQAegCAeADQAeAEALAHQAMAGgOAGQgPAIgfACIgbACQgQAAgRgCg");
        this.shape_29.setTransform(-65.5,304.7,2.161,2.161);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#BEBDBC").s().p("AldBWQAMABAKgBIJwg2QARgCAIgEQAIgEgGgEIiZhiQgIgFgYgCQAQgBAQACQAQACAGAEICaBjQAHAEgIAEQgIAEgRACIp3A2IgRABQgMAAgKgCg");
        this.shape_30.setTransform(-44.5,306.7,2.161,2.161);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#6493B3").s().p("AkBBRQgggGgSgLIhlhBQgRgLAIgKQAHgJAcgDIJEgyQAcgCAgAGQAgAGARALIBlBBQASAMgIAJQgIAKgcACIpDAyIgQABQgVAAgXgFg");
        this.shape_31.setTransform(-62.7,306.5,2.161,2.161);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#050807").s().p("AkBBRQgggGgSgLIhlhBQgRgLAIgKQAHgJAcgDIJEgyQAcgCAgAGQAgAGARALIBlBBQASALgIAKQgIAKgcACIpDAyIgQABQgVAAgXgFg");
        this.shape_32.setTransform(-64.8,306.3,2.161,2.161);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#4C5667").s().p("AkABSQgggGgRgLIhohDQgRgLAIgKQAHgKAcgCIJEgyQAbgDAhAHQAgAGARAMIBoBBQARAMgIAJQgHALgcACIpEAyIgQABQgVAAgXgFg");
        this.shape_33.setTransform(-69.6,306.6,2.161,2.161);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#6493B3").s().p("AkABXIARgBQgZAAgZgGQgZgHgOgJIhnhCQgRgLAHgKQAIgKAbgCIJEgyIAagBQASgBAZADIASACQgKgDgTgBQARgCAQACQAQACAGAEIANAJQAIADAJAFIBlBBQAHAFACAEIAOAIQAGAEgIAEQgHAEgSACIgVACIgBAAIpEAyIgBAAIgcADIgOAAQgNAAgMgBg");
        this.shape_34.setTransform(-64.8,312,2.161,2.161);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(639));

        // Head
        this.instance = new lib.KimHeadEyeup("synched",68);
        this.instance.setTransform(-130,83.3,1,1,-6,0,0,82.4,147.2);

        this.instance_1 = new lib.KimHeadTalking("single",12);
        this.instance_1.setTransform(-130,83.3,1,1,-6,0,0,82.3,147.2);
        this.instance_1._off = true;

        this.instance_2 = new lib.KimHeadTalkingNo("single",0);
        this.instance_2.setTransform(-130,83.3,1,1,-6,0,0,82.3,147.2);
        this.instance_2._off = true;

        this.instance_3 = new lib.KimHeadTalkingSm("single",0);
        this.instance_3.setTransform(-130,83.3,1,1,-6,0,0,82.3,147.2);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},67).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},19).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},26).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},57).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},31).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},41).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_3}]},73).wait(274));
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({regX:82.4,rotation:0.9},4).to({regX:82.3,rotation:-6,mode:"synched",startPosition:33},5).to({_off:true},67).wait(5).to({_off:false},0).to({_off:true},19).wait(6).to({_off:false},0).to({_off:true},26).wait(5).to({_off:false},0).to({_off:true},57).wait(6).to({_off:false},0).to({_off:true},31).wait(5).to({_off:false},0).to({_off:true},41).wait(4).to({_off:false},0).to({_off:true},73).wait(274));
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(87).to({_off:false},0).to({_off:true},5).wait(19).to({_off:false},0).to({_off:true},6).wait(26).to({_off:false},0).to({_off:true},5).wait(57).to({_off:false},0).to({_off:true},6).wait(31).to({_off:false},0).to({_off:true},5).wait(41).to({_off:false},0).to({_off:true},4).wait(347));

        // Каркас_11 - копия
        this.ikNode_984 = new lib.erervev_1();
        this.ikNode_984.setTransform(-203.5,192.6,1.107,1.107,58.5,0,0,14.1,34.4);

        this.ikNode_983 = new lib.rtvgretvrevкопия_1();
        this.ikNode_983.setTransform(-152.3,129.8,1.108,1.108,105,0,0,-3.1,25.7);

        this.ikNode_985 = new lib.rtvevetrvкопия1_1();
        this.ikNode_985.setTransform(-122.1,266.7,1.392,1.392,74.2,0,0,5.9,27.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_985,p:{rotation:74.2,y:266.7,x:-122.1,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.108,scaleY:1.108,y:129.8,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.5,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]}).to({state:[{t:this.ikNode_985,p:{rotation:74.2,y:266.7,x:-122.1,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.4,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.2,y:266.7,x:-122.1,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.4,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.2,y:266.7,x:-122.1,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.4,y:192.5,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.2,y:266.7,x:-122.1,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.4,y:192.5,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.2,y:266.7,x:-122.1,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.4,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.2,y:266.7,x:-122.1,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.108,scaleY:1.108,y:129.8,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.4,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.2,y:266.7,x:-122.1,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.4,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.2,y:266.7,x:-122.1,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.108,scaleY:1.108,y:129.9,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.4,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.2,y:266.7,x:-122.1,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.108,scaleY:1.108,y:129.9,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.4,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.1,y:266.7,x:-122.1,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.108,scaleY:1.108,y:129.8,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.4,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.1,y:266.8,x:-122.1,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.4,y:192.5,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.1,y:266.7,x:-122.1,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.108,scaleY:1.108,y:129.8,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.4,y:192.5,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.1,y:266.7,x:-122,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.4,y:192.5,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.1,y:266.7,x:-122.1,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.3,y:192.5,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.1,y:266.7,x:-122,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.3,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.1,y:266.7,x:-122,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.3,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.1,y:266.7,x:-122,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.3,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.1,y:266.7,x:-122.1,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.3,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.1,y:266.8,x:-122,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:105,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.3,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.1,y:266.7,x:-122,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.2,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.1,y:266.7,x:-122,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.2,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74.1,y:266.7,x:-121.9,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.3,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74,y:266.8,x:-122,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.3,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74,y:266.8,x:-121.9,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.3,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74,y:266.8,x:-121.9,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.3,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74,y:266.7,x:-121.9,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.3,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74,y:266.7,x:-122,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.2,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74,y:266.7,x:-121.9,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.9,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.2,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74,y:266.7,x:-121.9,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.9,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.2,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74,y:266.7,x:-121.9,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.9,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.2,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74,y:266.7,x:-121.9,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.9,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.2,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74,y:266.8,x:-121.9,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.2,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74,y:266.8,x:-121.9,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.1,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74,y:266.8,x:-121.9,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.1,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:74,y:266.7,x:-121.9,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.2,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:73.9,y:266.8,x:-121.9,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.2,y:192.6,rotation:58.5,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:73.9,y:266.8,x:-121.9,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.2,y:192.6,rotation:58.4,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:73.9,y:266.8,x:-121.9,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.2,y:192.6,rotation:58.4,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:73.9,y:266.8,x:-121.9,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.2,y:192.6,rotation:58.4,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:73.9,y:266.7,x:-121.8,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.1,y:192.6,rotation:58.4,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:73.9,y:266.7,x:-121.8,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:104.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-203.1,y:192.7,rotation:58.4,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:67.7,y:262.3,x:-107.9,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:99.2,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-196.7,y:197.3,rotation:52.3,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:61.6,y:256.3,x:-94.6,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:93.6,x:-152.3,regY:25.7}},{t:this.ikNode_984,p:{x:-189.8,y:201.4,rotation:46.1,regY:34.4,regX:14.1}}]},1).to({state:[{t:this.ikNode_985,p:{rotation:55.4,y:249.1,x:-82,regY:27.4,regX:5.9}},{t:this.ikNode_983,p:{scaleX:1.107,scaleY:1.107,y:129.8,rotation:87.9,x:-152.3,regY:25.7}},{t:this.ikNode_984,p