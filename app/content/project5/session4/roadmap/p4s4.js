p5s4.js
Long ago
A
Alexey Bogdankevich uploaded an item
Dec 31, 2016
Javascript
p5s4.js
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
            {src:"images/_1.jpg?1483115074251", id:"_1"},
            {src:"images/background.jpg?1483115074251", id:"background"},
            {src:"images/image002psd.png?1483115074251", id:"image002psd"},
            {src:"sounds/_1_1.mp3?1483115074251", id:"_1_1"},
            {src:"sounds/_10.mp3?1483115074251", id:"_10"},
            {src:"sounds/_11.mp3?1483115074251", id:"_11"},
            {src:"sounds/_12.mp3?1483115074251", id:"_12"},
            {src:"sounds/_13.mp3?1483115074251", id:"_13"},
            {src:"sounds/_14.mp3?1483115074251", id:"_14"},
            {src:"sounds/_15.mp3?1483115074251", id:"_15"},
            {src:"sounds/_16.mp3?1483115074251", id:"_16"},
            {src:"sounds/_17.mp3?1483115074251", id:"_17"},
            {src:"sounds/_18.mp3?1483115074251", id:"_18"},
            {src:"sounds/_2.mp3?1483115074251", id:"_2"},
            {src:"sounds/_3.mp3?1483115074251", id:"_3"},
            {src:"sounds/_4.mp3?1483115074251", id:"_4"},
            {src:"sounds/_5.mp3?1483115074251", id:"_5"},
            {src:"sounds/_6.mp3?1483115074251", id:"_6"},
            {src:"sounds/_7.mp3?1483115074251", id:"_7"},
            {src:"sounds/_8.mp3?1483115074251", id:"_8"},
            {src:"sounds/_9.mp3?1483115074251", id:"_9"},
            {src:"sounds/key1.mp3?1483115074251", id:"key1"},
            {src:"sounds/key2.mp3?1483115074251", id:"key2"},
            {src:"sounds/laugh.mp3?1483115074251", id:"laugh"}
        ]
    };



// symbols:



    (lib._1 = function() {
        this.initialize(img._1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,509,292);


    (lib.background = function() {
        this.initialize(img.background);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,800,800);


    (lib.image002psd = function() {
        this.initialize(img.image002psd);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,300,161);


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


    (lib.t5yhtyh = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#92D4D6").s().p("AgCAlQgPgBgLgLQgKgMABgPQACgPAMgLQAMgKAOACQAQABAKAMQAKAMgBAOQgBAQgNAKQgKAJgOAAIgCgBg");
        this.shape.setTransform(106.6,72.5,2.252,2.252);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#6493B3").s().p("AAQgOIAAAYIgfAFQAZgQAGgNg");
        this.shape_1.setTransform(246.1,138.8,2.252,2.252);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#6493B3").s().p("AgVgNIAQAGQAQAHALAAIgrAOg");
        this.shape_2.setTransform(14.9,150.4,2.252,2.252);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#6493B3").s().p("AgDA6QgZgCgPgTQgQgSACgXQACgYATgQQASgPAXACQAYACAQASQAQATgDAWQgCAZgSAPQgQAOgVAAIgEAAg");
        this.shape_3.setTransform(106.6,72.6,2.252,2.252);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#6493B3").s().p("AgEA6QgYgCgQgTQgPgSACgXQACgYASgQQATgPAWACQAZACAPATQAQASgCAXQgCAYgTAQQgQAOgUAAIgFgBg");
        this.shape_4.setTransform(103.1,103.5,2.252,2.252);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#92D4D6").s().p("AgHBfQgngEgageQgZgeADgmQAEgnAegaQAfgaAlAEQAnAEAaAeQAZAegDAlQgEAogeAaQgaAWgiAAIgIAAg");
        this.shape_5.setTransform(105.4,90.3,2.252,2.252);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#92D4D6").s().p("AnJEuQgNgQABgVIAvoaQACgVARgPQAQgOAWACIMbBFQAaACAOAWQgLgHgNgCIsThEQgWgCgRAOQgRAPgCAVIguIUQgCAcAXATQgUgDgNgRg");
        this.shape_6.setTransform(106.3,72.6,2.252,2.252);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#6493B3").s().p("AFSFiIrahAQgkgDgXgbQgWgbACgjIAqnZQACgjAbgXQAcgXAjADILaBAQAkADAXAbQAWAbgCAjIgqHZQgCAjgcAXQgYAUgeAAIgIAAg");
        this.shape_7.setTransform(106.3,80.3,2.252,2.252);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#050807").s().p("AFSFiIrahAQgkgDgXgbQgWgbACgjIAqnZQACgjAcgXQAbgXAjADILaBAQAkADAXAbQAWAbgCAjIgqHZQgCAjgcAXQgYAUgeAAIgIAAg");
        this.shape_8.setTransform(108.1,82.4,2.252,2.252);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#4C5667").s().p("AFRFmIrag/QgjgDgXgbQgXgbADgkIAqniQADgiAbgXQAbgXAjADILbA/QAjADAXAcQAXAagDAkIgqHiQgDAigbAXQgZAUgeAAIgIAAg");
        this.shape_9.setTransform(114.1,83.9,2.252,2.252);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#6493B3").s().p("AhWA5QgIAAgCgDQgCgDAFgDICVhiQAMgHATABQAIABACADQACACgFAEIiVBhQgJAGgRAAIgFAAg");
        this.shape_10.setTransform(123.6,137.5,2.252,2.252);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#6493B3").s().p("AhWA5QgIgBgCgCQgDgDAGgEICUhhQAOgHASABQAIABACADQADACgFAEIiWBhQgJAGgPAAIgHAAg");
        this.shape_11.setTransform(142.9,139.2,2.252,2.252);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#6493B3").s().p("AhWA5QgIgBgCgDQgCgCAFgEICVhhQALgIAUACQAIABACACQACADgFADIiVBiQgKAGgNAAIgIAAg");
        this.shape_12.setTransform(162.2,141.7,2.252,2.252);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#6493B3").s().p("AhkBCQgIAAgDgDQgCgDAFgDICzh1QALgIAUADQAIABACACQACADgFADIiyB1QgKAGgOAAIgHgBg");
        this.shape_13.setTransform(47,132.7,2.252,2.252);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#6493B3").s().p("AhlBCQgIAAgCgDQgCgDAFgDICyh1QANgHASABQAIABADADQACADgFADIizB0QgJAHgOAAIgIgBg");
        this.shape_14.setTransform(65.5,134.5,2.252,2.252);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#6493B3").s().p("AhlBDQgIgBgCgDQgCgDAFgDICyh0QAMgIAUABQAIABACADQACADgFADIiyB0QgKAHgRAAIgFAAg");
        this.shape_15.setTransform(84.1,136.1,2.252,2.252);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#6493B3").s().p("AhlBDQgIgBgCgDQgCgCAFgEICyh0QANgIASACQAIABADACQACADgFADIizB1QgFADgJACIgNABIgEAAg");
        this.shape_16.setTransform(103.1,137.8,2.252,2.252);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#6493B3").s().p("AhlBDQgIgBgCgDQgCgDAFgDICzh0QAMgIATACQAIABACACQACACgFAEIiyB0QgLAHgPAAIgGAAg");
        this.shape_17.setTransform(181.2,144.5,2.252,2.252);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#6493B3").s().p("AhkBDQgIgBgDgDQgCgDAFgDICzh0QALgIAUACQAIAAACADQACADgFADIiyB0QgKAHgRAAIgEAAg");
        this.shape_18.setTransform(201,146.7,2.252,2.252);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#6493B3").s().p("AF2AlIr5hAQgFAAgBgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAABAAQAHgFALABIL5BAQAFAAABACQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQgFAEgJAAIgEAAg");
        this.shape_19.setTransform(148.3,126.5,2.252,2.252);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#6493B3").s().p("AF2AlIr5hAQgEAAgCgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAABAAQAHgFALABIL5BAQAFAAABACQAAAAAAAAQAAABAAAAQAAABAAAAQgBABgBAAQgGAEgIAAIgEAAg");
        this.shape_20.setTransform(143.8,130.9,2.252,2.252);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#6493B3").s().p("AF2AlIr5g/QgKgCAGgEQAHgFALABIL5BAQAFAAABACQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQgFAEgJAAIgEAAg");
        this.shape_21.setTransform(137.4,135.1,2.252,2.252);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#6493B3").s().p("AF2AlIr5hAQgFAAgBgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAABAAQAHgFALABIL5BAQAFAAABACQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQgFAEgJAAIgEAAg");
        this.shape_22.setTransform(132.3,139.1,2.252,2.252);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#6493B3").s().p("AF2AlIr5hAQgEAAgCgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAABAAQAHgFALABIL5BAQAKABgGAEQgFAEgJAAIgEAAg");
        this.shape_23.setTransform(125.1,143.2,2.252,2.252);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#6493B3").s().p("AF2AlIr5hAQgFAAgBgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAABAAQAHgFALABIL5BAQAFAAABACQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQgFAEgJAAIgEAAg");
        this.shape_24.setTransform(119.3,147,2.252,2.252);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#6493B3").s().p("AF2AlIr5hAQgEAAgCgCQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAABAAQAHgFALABIL5BAQAFAAABACQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgGAEgIAAIgEAAg");
        this.shape_25.setTransform(116.5,151.7,2.252,2.252);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#E8E8E6").s().p("ADWBYIpmg1QgegDgIgLQgIgKASgLIBjg/QASgNAigGQAjgHAdACIJmA2QAeADAIAJQAIALgSAKIhiBAQgTANgiAGQgZAFgWAAIgRAAg");
        this.shape_26.setTransform(130.1,140.6,2.252,2.252);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#E8E8E6").s().p("AgZgEIAJgGIArAVQgygJgCgGg");
        this.shape_27.setTransform(124.8,144.6,2.252,2.252);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#6493B3").s().p("AgTANQgXgCgKgGQgLgFAIgDQAJgGAWgCQAXgDAUACQAYACAKAFQALAFgJAEQgIAGgWACIgZACIgTgBg");
        this.shape_28.setTransform(139.6,141.4,2.252,2.252);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#E8E8E6").s().p("AgfAVQgmgDgRgJQgRgJANgGQAOgJAlgEQAkgEAjADQAmADARAJQARAIgNAHQgOAJglAEQgTACgUAAQgPAAgRgBg");
        this.shape_29.setTransform(130.7,138.1,2.252,2.252);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#BEBDBC").s().p("AF1BpIr0hBQgVgCgKgFQgJgFAHgFIC5h3QAIgFATgCQASgCAVABQgdABgKAHIi3B2QgIAFAKAFQAJAFAVABILtBBIAaABQgNACgOAAIgUgBg");
        this.shape_30.setTransform(104.4,140.4,2.252,2.252);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#6493B3").s().p("ADuBmIq4g8QghgDgJgMQgJgLAUgOIB6hOQAUgNAngIQAmgHAhADIK4A8QAhADAJALQAJAMgUANIh6BOQgUAOgnAHQgcAGgaAAIgRgBg");
        this.shape_31.setTransform(127.2,140.4,2.252,2.252);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#050807").s().p("ADuBmIq4g8QgigDgJgLQgIgMAUgOIB5hNQAVgOAngHQAmgIAiADIK3A8QAhADAKAMQAJALgVAOIh6BNQgUAOgmAIQgcAFgZAAIgTgBg");
        this.shape_32.setTransform(129.8,140.1,2.252,2.252);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#4C5667").s().p("ADsBnIq3g8QgigDgJgLQgJgMAVgOIB8hPQAVgOAmgHQAmgIAiADIK3A8QAiADAJAMQAJALgVAOIh8BQQgVANgmAIQgbAFgZAAIgUgBg");
        this.shape_33.setTransform(135.8,140.3,2.252,2.252);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#6493B3").s().p("AEFBpIgigDIAAAAIq4g8IgBAAIgZgCQgVgCgKgFQgJgFAHgFIARgKQADgFAIgGIB6hOQAHgFAMgFIAQgKQAIgFATgCQATgCAUABQgXABgMAFIAWgDQAZgDAaABQASgBANACIK3A8QAiADAJALQAJAMgVANIh8BQQgRALgeAIQgcAHgfABIAUAAQgOACgQAAIgRgBg");
        this.shape_34.setTransform(129.8,147.1,2.252,2.252);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,249.8,171);


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


    (lib.rtvevetrvкопия3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // flash0.ai
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#C89F83").s().p("AgkgFIAngNIAUAQQATAPgHAGg");
        this.shape.setTransform(8.9,35.4,1.277,1.277,33.4);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#C89F83").s().p("AgjApIAjgqQAhgqADADQAFAGg0BLg");
        this.shape_1.setTransform(15.1,23.1,1.277,1.277,33.4);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#C89F83").s().p("AhpAhIBihrIAJgEQALgDAFAHQAHALhZBZIAQAAIAogoQAogrANgEQAPgFAOAIQAOAIgKACQgHABg3AvIgyAsIAYgBIAzgWQA3gUAIAKQAIAJgVAKIgWAHIhoArg");
        this.shape_2.setTransform(24.8,30.7,1.277,1.277,33.4);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#C89F83").s().p("AhrAEQALgsASgGQATgGA8gKQBCgKAdASQAbASgSATQgOAOgYAEQgiAAgZAKQgXALgDAWQgDAVgPABQgQAAgEgFIgoAGQgXgSAMgtg");
        this.shape_3.setTransform(4.8,31.4,1.277,1.277,33.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-10.6,20.7,47.9,19.8);


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
        this.shape_18.setTransform(15,8.8,1,1,0,0,180);

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
        this.shape.graphics.f("#CE232F").s().p("AhWDSQhnhLgGgwQgDhJAXhMQAtiaB6g0IAcgGQAkgDAfANQBiArAKDDQAJDBgtA8QgXAfgYgJIhig9IACAQQABAZgEAuQgwgcgzglg");
        this.shape.setTransform(107.1,74.2,1.038,1.086,0,0,180);

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
    p.nominalBounds = new cjs.Rectangle(3.6,3.1,124,196.9);


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


    (lib.Chair1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // flash0.ai
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#B5976E").s().p("AjtKnQgoAAgcgcQgcgcAAgoIAAyNQAAgoAcgdQAcgcAoAAIHbAAQAoAAAcAcQAcAdABAoIAASNQgBAogcAcQgcAcgoAAg");
        this.shape.setTransform(582.8,126.5,1.551,1.551);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#DEC09A").s().p("AhOAAQAug7BfADQBhADh8A3IiNA3QAEgeAXgbg");
        this.shape_1.setTransform(547.4,25.3,1.551,1.551);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#DEC09A").s().p("ABSg4IgCAQQgGAUgNARQgpA0hlAIg");
        this.shape_2.setTransform(634.2,223.1,1.551,1.551);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#DEC09A").s().p("AoRCnIAAimINogBIC7imIAACOIiXC/g");
        this.shape_3.setTransform(556.4,264.3,1.551,1.551);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#B5976E").s().p("AoRBUIFPinILUAAIiqCng");
        this.shape_4.setTransform(556.4,251.4,1.551,1.551);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#DEC09A").s().p("AjtKnQgoABgcgdQgdgcAAgoIAAyNQAAgoAdgdQAcgcAoAAIHbAAQAoAAAcAcQAcAdABAoIAASNQgBAogcAcQgcAdgogBg");
        this.shape_5.setTransform(595.2,121.8,1.551,1.551);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#685E56").s().p("AguHiIAAvDIBdAAIAAPDg");
        this.shape_6.setTransform(498.4,350.7,1.551,1.551);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#685E56").s().p("AguHiIAAvDIBdAAIAAPDg");
        this.shape_7.setTransform(593.6,343.9,1.551,1.551);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#685E56").s().p("AguHiIAAvDIBdAAIAAPDg");
        this.shape_8.setTransform(554.7,290.4,1.551,1.551);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#685E56").s().p("AguHiIAAvDIBdAAIAAPDg");
        this.shape_9.setTransform(621.3,300.4,1.551,1.551);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#B5976E").s().p("AjtKnQgoAAgcgcQgcgcAAgoIAAyNQAAgoAcgdQAcgcAoAAIHbAAQAoAAAcAcQAcAdABAoIAASNQgBAogcAcQgcAcgoAAg");
        this.shape_10.setTransform(75.2,126.5,1.551,1.551,0,0,180);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#DEC09A").s().p("AhOAAQAug7BfADQBhADh8A3IiNA3QAEgeAXgbg");
        this.shape_11.setTransform(110.6,25.3,1.551,1.551,0,0,180);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#DEC09A").s().p("ABSg4IgCAQQgGAUgNARQgpA0hlAIg");
        this.shape_12.setTransform(23.8,223.1,1.551,1.551,0,0,180);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#DEC09A").s().p("AoRCnIAAimINogBIC7imIAACOIiXC/g");
        this.shape_13.setTransform(101.5,264.3,1.551,1.551,0,0,180);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#B5976E").s().p("AoRBUIFPinILUAAIiqCng");
        this.shape_14.setTransform(101.5,251.4,1.551,1.551,0,0,180);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#DEC09A").s().p("AjtKnQgoABgcgdQgdgcAAgoIAAyNQAAgoAdgdQAcgcAoAAIHbAAQAoAAAcAcQAcAdABAoIAASNQgBAogcAcQgcAdgogBg");
        this.shape_15.setTransform(62.8,121.8,1.551,1.551,0,0,180);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#685E56").s().p("AguHiIAAvDIBdAAIAAPDg");
        this.shape_16.setTransform(159.6,350.7,1.551,1.551,0,0,180);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#685E56").s().p("AguHiIAAvDIBdAAIAAPDg");
        this.shape_17.setTransform(64.3,343.9,1.551,1.551,0,0,180);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#685E56").s().p("AguHiIAAvDIBdAAIAAPDg");
        this.shape_18.setTransform(103.2,290.4,1.551,1.551,0,0,180);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#685E56").s().p("AguHiIAAvDIBdAAIAAPDg");
        this.shape_19.setTransform(36.6,300.4,1.551,1.551,0,0,180);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(10.8,16.4,636.4,409.2);


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


    (lib._5tg4g = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiLgzIEXAAQAUAAAAAUIAAA/QAAAUgUAAIkXAAQgUAAAAgUIAAg/QAAgUAUAAg");
        this.shape.setTransform(16.1,5.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AiLA0QgUAAAAgUIAAg/QAAgUAUAAIEXAAQAUAAAAAUIAAA/QAAAUgUAAg");
        this.shape_1.setTransform(16.1,5.3);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1,-1,34.2,12.5);


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


    (lib.rtvevetrvкопия1_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#8D6845").s().p("AgSCDQhDhIgvhIQgQgZgBgJQgBgHAIgGQAIgGAlAvQAiArABgCQABgGgWgcIgsg6QgUgZACgOQAAgHAJgFQAGgEAIAHQAOALAeAuQA0BKgJgfQgEgLhGhnQgKgOgEgHQgFgMAGgKQAMgUAsBFQAsBGACgBQAEgEg0hsQgMgXAPgIQAQgHAOAbQA3B8AcAmQAPATAMgBQAHAAgXgnIgeg2IgQghQgHgTALgCQAMgBAYAdQALAPAKAPQBKCFACA1QADA8hNArQgDACgDAAQgZAAg/hHg");
        this.shape_1.setTransform(10.2,24.9,0.912,0.912,0,30,-150);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.4,11.4,35.5,26.6);


    (lib.lipsкопия = function(mode,startPosition,loop) {
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


    (lib.Анимация37 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#515151").s().p("AgEOYQiCmEi/t3QibrXFgiNQBvgsCSATQBKAKA0ATQCRL7ggJGQggJHgkD2QgkD1guApQgPAOgRAAQhQAAhulPg");
        this.shape.setTransform(24,26);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#515151").s().p("AijN/QghgegaixQgaixgJj+QgVprBYoFIBbgUQBpgPBQAgQD+BmhwINQiJJ+hdEYQhRDyg6AAQgMAAgKgKg");
        this.shape_1.setTransform(-53.7,27.5,1.386,1.386,0,0,180);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#545555").s().p("AgfBAIAmiFIAZALIgkCAg");
        this.shape_2.setTransform(-44.1,-122.7,1.934,1.934);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#545555").s().p("AgVBEIASiJIAZAIIgQCDg");
        this.shape_3.setTransform(-24.5,-117.8,1.934,1.934);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#545555").s().p("AgRhFIAaADIAJCEIgaAEg");
        this.shape_4.setTransform(38,-113.1,1.934,1.934);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#545555").s().p("AgehCIAcgBIAhCAIgcAHg");
        this.shape_5.setTransform(65.4,-115.2,1.934,1.934);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#343434").s().p("AgwA+QhngOh0gZIhfgWIAwhQQCYBAEEgNQCDgHBkgUQAKABANAuQAHAVAEAWQgyAtiPAAQhbAAh/gSg");
        this.shape_6.setTransform(12.2,-120,1.934,1.934);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#454645").s().p("Ag4gZIATkWIBeJfg");
        this.shape_7.setTransform(-1.1,-63,1.934,1.934);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#545555").s().p("AB1RLQjPuBgFgRQlGg5gjOLIkEAAQhkwAAIkeQAOpBD4kaIATggQCTBcIPAgQEIAQDrgBIAzFPIAAABQBIB9AcCTQAsDwhnDWQnaIIB6Jkg");
        this.shape_8.setTransform(9.1,-36.1);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-90.1,-152.9,180.4,305.9);


    (lib.Анимация36 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#515151").s().p("AgEOYQiCmEi/t3QibrXFgiNQBvgsCSATQBKAKA0ATQCRL7ggJGQggJHgkD2QgkD1guApQgPAOgRAAQhQAAhulPg");
        this.shape.setTransform(24,26);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#515151").s().p("AijN/QghgegaixQgaixgJj+QgVprBYoFIBbgUQBpgPBQAgQD+BmhwINQiJJ+hdEYQhRDyg6AAQgMAAgKgKg");
        this.shape_1.setTransform(-53.7,27.5,1.386,1.386,0,0,180);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#545555").s().p("AgfBAIAmiFIAZALIgkCAg");
        this.shape_2.setTransform(-44.1,-122.7,1.934,1.934);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#545555").s().p("AgVBEIASiJIAZAIIgQCDg");
        this.shape_3.setTransform(-24.5,-117.8,1.934,1.934);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#545555").s().p("AgRhFIAaADIAJCEIgaAEg");
        this.shape_4.setTransform(38,-113.1,1.934,1.934);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#545555").s().p("AgehCIAcgBIAhCAIgcAHg");
        this.shape_5.setTransform(65.4,-115.2,1.934,1.934);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#343434").s().p("AgwA+QhngOh0gZIhfgWIAwhQQCYBAEEgNQCDgHBkgUQAKABANAuQAHAVAEAWQgyAtiPAAQhbAAh/gSg");
        this.shape_6.setTransform(12.2,-120,1.934,1.934);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#454645").s().p("Ag4gZIATkWIBeJfg");
        this.shape_7.setTransform(-1.1,-63,1.934,1.934);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#545555").s().p("AB1RLQjPuBgFgRQlGg5gjOLIkEAAQhkwAAIkeQAOpBD4kaIATggQCTBcIPAgQEIAQDrgBIAzFPIAAABQBIB9AcCTQAsDwhnDWQnaIIB6Jkg");
        this.shape_8.setTransform(9.1,-36.1);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-90.1,-152.9,180.4,305.9);


    (lib.Анимация35копия = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#504F4F").s().p("AgZATQgLgIAAgLQAAgKALgIQALgIAOAAQAPAAAKAIQAMAIgBAKQABALgMAIQgKAIgPAAQgOAAgLgIg");
        this.shape.setTransform(269.7,-61.7,2.252,2.252,0,0,180);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#B9B9B9").s().p("AgkBEIAAifIAPAXQAVAOAkglIAACVIgVAbQgKAHgHAAQgSAAgQgYg");
        this.shape_1.setTransform(269.7,-40.9,2.252,2.252,0,0,180);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#B9B9B9").s().p("AAuAIIh8gDIgEgCQgCgCAGgCIB7ABIAFgDQAFgGAEgBQAHAAAJADQAKAEgBADQgDALgPAAQgIAAgMgDg");
        this.shape_2.setTransform(228.6,5.8,2.252,2.252,0,0,180);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#B9B9B9").s().p("AAhAzIAAgaIhmhVIAFgEIBmBUIAcAMIAEAcIgJgUIgFADIAMASIgSgQIgGACIAUARg");
        this.shape_3.setTransform(269.2,1.3,2.252,2.252,0,0,180);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#D67676").s().p("AACgYQANAEADgCQADgDgBAWIgCAUIgZAGIgMACQAKgsALgFg");
        this.shape_4.setTransform(190.9,-16.5,2.252,2.252,0,0,180);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#854744").s().p("Ag0AmQgBgKABgOQACgZANgQQANgRAYABQAPABASAIQAJAGAIAcIAEAZQgJAIgTAFQgSAGgSAAQgVAAgVgGg");
        this.shape_5.setTransform(186.8,-16.3,2.252,2.252,0,0,180);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#BBD77E").s().p("AhkA2QgPgGgBgJIADgIQgCgTAcgEQANgCAOACQALgTAOgEQAGgBAFACQAEgRAOACQAGABAFAEQgEgRAVADIAMAEIgBgCQgGgHAQgOQAPgNASASQAJAJAGAMQANgaAIA2QADAZACAfQhXAKg1AAQg2AAgXgJg");
        this.shape_6.setTransform(225.3,-21.8,2.252,2.252,0,0,180);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#ECEAEA").s().p("AjCACQgBAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABgBABAAIGFAAQABAAABABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQgBABgBAAg");
        this.shape_7.setTransform(188.6,-22.6,2.252,2.252,0,0,180);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#DFDDDD").s().p("AjNACQgFAAAAgCQAAgBAFAAIGcAAQAEAAAAABQAAACgEAAg");
        this.shape_8.setTransform(191.5,-2.4,2.252,2.252,0,0,180);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#999595").s().p("Ai3AqQgeAAgUgNQgVgMAAgRQAAgQAVgMQAUgNAeAAIFvAAQAdAAAVANQAVAMAAAQQAAARgVAMQgVANgdAAg");
        this.shape_9.setTransform(195.5,-12.6,2.252,2.252,0,0,180);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#B9B9B9").s().p("AjcAzQgkAAgZgPQgZgPAAgVQAAgUAZgPQAZgPAkAAIG6AAQAjAAAZAPQAZAPAAAUQAAAVgZAPQgZAPgjAAgAjAAtQgBACAFAAIGcAAQAFAAAAgCQAAgDgFAAIglAAQAbAAAUgMQAVgNAAgRQAAgQgVgMQgUgMgbgBIAmAAQABAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAgBAAImFAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAQAAAAABAAIgTAAQgeAAgUANQgVAMAAAQQAAARAVANQAUAMAbAAIgCAAQgFAAABADg");
        this.shape_10.setTransform(195.5,-12.6,2.252,2.252,0,0,180);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#504F4F").s().p("AgZAQQgLgHABgJQgBgIALgHQALgGAOAAQAPAAALAGQALAHgBAIQABAJgLAHQgLAGgPABQgOgBgLgGg");
        this.shape_11.setTransform(-272.3,-67.9,2.252,2.252,0,0,180);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#B9B9B9").s().p("AgOBGIgVgWIAAh7QAkAfAWgMQAKgGADgNIAACDQgQAUgRAAQgHAAgKgGg");
        this.shape_12.setTransform(-272.3,-50.7,2.252,2.252,0,0,180);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#B9B9B9").s().p("AhTAAQgBgDAKgEQAJgEAHABQAHABAHAJIB6gBQALAEgLACIh7ADQgMADgIAAQgPAAgDgLg");
        this.shape_13.setTransform(-231.2,-7.7,2.252,2.252,0,0,180);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#B9B9B9").s().p("AgrAvIgGgCIgRARIAMgSIgGgEIgJAUIAEgcIAcgMIBmhTIAFAEIhlBUIgBAaIgfANIAUgRg");
        this.shape_14.setTransform(-271.8,-12.2,2.252,2.252,0,0,180);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#D67676").s().p("AgRARIgCgUQgBgVADACQADABAMgDQAMAFAKAsQgTgCgSgGg");
        this.shape_15.setTransform(-193.5,-29.9,2.252,2.252,0,0,180);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#D67676").s().p("Ag3AYIARglQAZgnAiAFIASAIQATARgCAuQgOAOgVAHQgMAEgKAAQgdAAgZgZg");
        this.shape_16.setTransform(-165.4,-35.2,2.252,2.252,0,0,180);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#854744").s().p("AheA7QgBgjAMgiQAXhHA8gCQA9gCAXBIQAMAigBAkQgMAPgeAIQgSAEgVAAQgtAAg/gZg");
        this.shape_17.setTransform(-165.9,-36.4,2.252,2.252,0,0,180);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#854744").s().p("AgZAmIgcgNIAEgZQAHgcAKgGQARgIAPgBQAYgBAOARQANAQACAZQACAOgCAKQgWAGgUAAQgSAAgSgGg");
        this.shape_18.setTransform(-189.4,-29.7,2.252,2.252,0,0,180);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#BBD77E").s().p("Ah0BIQABgrAEgiQAIhHAMAiIAPgcQASgYAQASQAQASgHAJIgJAHIAVgJQAUgFgDAXIALgHQANgCAFAXIALgBQANAFALAaIAbAAQAcAGgCAaQALARgXANQgXAMg1AAQg1AAhYgNg");
        this.shape_19.setTransform(-228,-40.1,2.252,2.252,0,0,180);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#ECEAEA").s().p("AjCABQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAABAAIGFAAQABAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAg");
        this.shape_20.setTransform(-191.3,-36.1,2.252,2.252,0,0,180);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#DFDDDD").s().p("AjNACQgFAAAAgCQAAgBAFAAIGcAAQABAAAAAAQABAAABABQAAAAABAAQAAAAAAAAQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAg");
        this.shape_21.setTransform(-194.1,-15.8,2.252,2.252,0,0,180);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#999595").s().p("Ai3AqQgdAAgVgMQgVgNAAgRQAAgQAVgNQAVgMAdAAIFvAAQAdAAAVAMQAVANAAAQQAAARgVANQgVAMgdAAg");
        this.shape_22.setTransform(-198,-26,2.252,2.252,0,0,180);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#B9B9B9").s().p("AjdAzQgjAAgZgPQgZgPAAgVQAAgUAZgPQAZgPAjAAIG7AAQAjAAAZAPQAZAPAAAUQAAAVgZAPQgZAPgjAAgAjjAtQAAACAEAAIGcAAQABAAABAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBAAgBAAIgCAAQAbAAAUgMQAVgNAAgRQAAgQgVgNQgVgMgdAAIgSAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAgBAAImFAAQgBAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQABABAAAAQABAAABAAIAnAAQgcAAgUAMQgVANAAAQQAAARAVANQAUAMAcAAIgmAAQgEAAAAADg");
        this.shape_23.setTransform(-198,-26,2.252,2.252,0,0,180);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#BA9669").s().p("A0dD0QguAAgigiQghghAAgvIAAkDQAAgvAhghQAigiAuAAMAo6AAAQAvAAAhAiQAiAhAAAvIAAEDQAAAvgiAhQghAigvAAg");
        this.shape_24.setTransform(0,-38.8,2.252,2.252,0,0,180);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#C8BB8D").s().p("A0dD0QguAAgigiQghghAAgvIAAkDQAAgvAhghQAigiAuAAMAo6AAAQAvAAAhAiQAiAhAAAvIAAEDQAAAvgiAhQghAigvAAg");
        this.shape_25.setTransform(0,-18,2.252,2.252,0,0,180);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#685E56").s().p("Ag4IEIAgwHIAxAAIAgQHg");
        this.shape_26.setTransform(-82.8,77.5,2.252,2.252,0,0,180);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#685E56").s().p("Ag4IEIAgwHIAxAAIAgQHg");
        this.shape_27.setTransform(-22.8,77.5,2.252,2.252,0,0,180);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#685E56").s().p("Ag4IEIAgwHIAxAAIAgQHg");
        this.shape_28.setTransform(49.2,77.5,2.252,2.252,0,0,180);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#685E56").s().p("Ag4IEIAhwHIAvAAIAhQHg");
        this.shape_29.setTransform(122.8,77.5,2.252,2.252,0,0,180);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-320.5,-93.7,641.1,287.5);


    (lib.Анимация12 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgIAAQAAgCACgDQADgDADAAQADgBADADQADADAAADQAAAIgJABQgHAAgBgJg");
        this.shape.setTransform(-2.3,2.1,1.323,1.323,0,0,180);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#1C1717").s().p("AgSAWQgJgJgBgMQgBgLAJgJQAIgJAMgBQALAAAJAIQAJAIAAANQABALgJAJQgIAJgMAAIgBABQgKAAgIgIg");
        this.shape_1.setTransform(0.5,-0.2,1.323,1.323,0,0,180);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#4A3A2E").s().p("AgaAdQgMgLgBgRQAAgPALgMQALgMAQgBQAPgBAMALQANALAAARQABAPgLANQgLAMgRABIgBAAQgOAAgMgLg");
        this.shape_2.setTransform(0.5,0,1.323,1.323,0,0,180);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-4.8,-5.3,10.6,10.7);


    (lib.wregf435f43f43 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.instance = new lib.JennBody();
        this.instance.setTransform(74.9,320.1,1.312,1.312,0,0,0,60.6,247);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,162.7,258.3);


    (lib.rtgretgretg45g345g = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 2
        this.instance = new lib._5tg4g();
        this.instance.setTransform(730.9,971.6,1,1,0,0,0,16.1,5.3);

        this.instance_1 = new lib._5tg4g();
        this.instance_1.setTransform(695.5,971.6,1,1,0,0,0,16.1,5.3);

        this.instance_2 = new lib._5tg4g();
        this.instance_2.setTransform(658.8,971.6,1,1,0,0,0,16.1,5.3);

        this.instance_3 = new lib._5tg4g();
        this.instance_3.setTransform(623.4,971.6,1,1,0,0,0,16.1,5.3);

        this.instance_4 = new lib._5tg4g();
        this.instance_4.setTransform(409.1,971.6,1,1,0,0,0,16.1,5.3);

        this.instance_5 = new lib._5tg4g();
        this.instance_5.setTransform(374.3,971.6,1,1,0,0,0,16.1,5.3);

        this.instance_6 = new lib._5tg4g();
        this.instance_6.setTransform(338.9,971.6,1,1,0,0,0,16.1,5.3);

        this.instance_7 = new lib._5tg4g();
        this.instance_7.setTransform(302.8,971.6,1,1,0,0,0,16.1,5.3);

        this.instance_8 = new lib._5tg4g();
        this.instance_8.setTransform(267.4,971.6,1,1,0,0,0,16.1,5.3);

        this.instance_9 = new lib._5tg4g();
        this.instance_9.setTransform(715.3,953.3,1.961,1,0,0,0,16,5.3);

        this.instance_10 = new lib._5tg4g();
        this.instance_10.setTransform(658.8,953.3,1,1,0,0,0,16.1,5.3);

        this.instance_11 = new lib._5tg4g();
        this.instance_11.setTransform(623.4,953.3,1,1,0,0,0,16.1,5.3);

        this.instance_12 = new lib._5tg4g();
        this.instance_12.setTransform(587.3,953.3,1,1,0,0,0,16.1,5.3);

        this.instance_13 = new lib._5tg4g();
        this.instance_13.setTransform(551.9,953.3,1,1,0,0,0,16.1,5.3);

        this.instance_14 = new lib._5tg4g();
        this.instance_14.setTransform(515.3,953.3,1,1,0,0,0,16.1,5.3);

        this.instance_15 = new lib._5tg4g();
        this.instance_15.setTransform(479.9,953.3,1,1,0,0,0,16.1,5.3);

        this.instance_16 = new lib._5tg4g();
        this.instance_16.setTransform(444.5,953.3,1,1,0,0,0,16.1,5.3);

        this.instance_17 = new lib._5tg4g();
        this.instance_17.setTransform(409.1,953.3,1,1,0,0,0,16.1,5.3);

        this.instance_18 = new lib._5tg4g();
        this.instance_18.setTransform(374.3,953.3,1,1,0,0,0,16.1,5.3);

        this.instance_19 = new lib._5tg4g();
        this.instance_19.setTransform(338.9,953.3,1,1,0,0,0,16.1,5.3);

        this.instance_20 = new lib._5tg4g();
        this.instance_20.setTransform(282,953.3,1.918,1,0,0,0,16,5.3);

        this.instance_21 = new lib._5tg4g();
        this.instance_21.setTransform(736.1,936.2,0.591,1,0,0,0,16.1,5.3);

        this.instance_22 = new lib._5tg4g();
        this.instance_22.setTransform(707.3,936.2,1,1,0,0,0,16.1,5.3);

        this.instance_23 = new lib._5tg4g();
        this.instance_23.setTransform(670.6,936.2,1,1,0,0,0,16.1,5.3);

        this.instance_24 = new lib._5tg4g();
        this.instance_24.setTransform(635.2,936.2,1,1,0,0,0,16.1,5.3);

        this.instance_25 = new lib._5tg4g();
        this.instance_25.setTransform(599.1,936.2,1,1,0,0,0,16.1,5.3);

        this.instance_26 = new lib._5tg4g();
        this.instance_26.setTransform(563.7,936.2,1,1,0,0,0,16.1,5.3);

        this.instance_27 = new lib._5tg4g();
        this.instance_27.setTransform(527.1,936.2,1,1,0,0,0,16.1,5.3);

        this.instance_28 = new lib._5tg4g();
        this.instance_28.setTransform(491.7,936.2,1,1,0,0,0,16.1,5.3);

        this.instance_29 = new lib._5tg4g();
        this.instance_29.setTransform(456.3,936.2,1,1,0,0,0,16.1,5.3);

        this.instance_30 = new lib._5tg4g();
        this.instance_30.setTransform(420.9,936.2,1,1,0,0,0,16.1,5.3);

        this.instance_31 = new lib._5tg4g();
        this.instance_31.setTransform(386.1,936.2,1,1,0,0,0,16.1,5.3);

        this.instance_32 = new lib._5tg4g();
        this.instance_32.setTransform(350.7,936.2,1,1,0,0,0,16.1,5.3);

        this.instance_33 = new lib._5tg4g();
        this.instance_33.setTransform(314.6,936.2,1,1,0,0,0,16.1,5.3);

        this.instance_34 = new lib._5tg4g();
        this.instance_34.setTransform(273.1,936.2,1.367,1,0,0,0,16,5.3);

        this.instance_35 = new lib._5tg4g();
        this.instance_35.setTransform(730.9,919.1,1,1,0,0,0,16.1,5.3);

        this.instance_36 = new lib._5tg4g();
        this.instance_36.setTransform(695.5,919.1,1,1,0,0,0,16.1,5.3);

        this.instance_37 = new lib._5tg4g();
        this.instance_37.setTransform(658.8,919.1,1,1,0,0,0,16.1,5.3);

        this.instance_38 = new lib._5tg4g();
        this.instance_38.setTransform(623.4,919.1,1,1,0,0,0,16.1,5.3);

        this.instance_39 = new lib._5tg4g();
        this.instance_39.setTransform(587.3,919.1,1,1,0,0,0,16.1,5.3);

        this.instance_40 = new lib._5tg4g();
        this.instance_40.setTransform(551.9,919.1,1,1,0,0,0,16.1,5.3);

        this.instance_41 = new lib._5tg4g();
        this.instance_41.setTransform(515.3,919.1,1,1,0,0,0,16.1,5.3);

        this.instance_42 = new lib._5tg4g();
        this.instance_42.setTransform(479.9,919.1,1,1,0,0,0,16.1,5.3);

        this.instance_43 = new lib._5tg4g();
        this.instance_43.setTransform(444.5,919.1,1,1,0,0,0,16.1,5.3);

        this.instance_44 = new lib._5tg4g();
        this.instance_44.setTransform(409.1,919.1,1,1,0,0,0,16.1,5.3);

        this.instance_45 = new lib._5tg4g();
        this.instance_45.setTransform(374.3,919.1,1,1,0,0,0,16.1,5.3);

        this.instance_46 = new lib._5tg4g();
        this.instance_46.setTransform(338.9,919.1,1,1,0,0,0,16.1,5.3);

        this.instance_47 = new lib._5tg4g();
        this.instance_47.setTransform(302.8,919.1,1,1,0,0,0,16.1,5.3);

        this.instance_48 = new lib._5tg4g();
        this.instance_48.setTransform(267.4,919.1,1,1,0,0,0,16.1,5.3);

        this.instance_49 = new lib._5tg4g();
        this.instance_49.setTransform(736.1,903.4,0.591,1,0,0,0,16.1,5.3);

        this.instance_50 = new lib._5tg4g();
        this.instance_50.setTransform(707.3,903.4,1,1,0,0,0,16.1,5.3);

        this.instance_51 = new lib._5tg4g();
        this.instance_51.setTransform(670.6,903.4,1,1,0,0,0,16.1,5.3);

        this.instance_52 = new lib._5tg4g();
        this.instance_52.setTransform(635.2,903.4,1,1,0,0,0,16.1,5.3);

        this.instance_53 = new lib._5tg4g();
        this.instance_53.setTransform(599.1,903.4,1,1,0,0,0,16.1,5.3);

        this.instance_54 = new lib._5tg4g();
        this.instance_54.setTransform(563.7,903.4,1,1,0,0,0,16.1,5.3);

        this.instance_55 = new lib._5tg4g();
        this.instance_55.setTransform(527.1,903.4,1,1,0,0,0,16.1,5.3);

        this.instance_56 = new lib._5tg4g();
        this.instance_56.setTransform(491.7,903.4,1,1,0,0,0,16.1,5.3);

        this.instance_57 = new lib._5tg4g();
        this.instance_57.setTransform(456.3,903.4,1,1,0,0,0,16.1,5.3);

        this.instance_58 = new lib._5tg4g();
        this.instance_58.setTransform(420.9,903.4,1,1,0,0,0,16.1,5.3);

        this.instance_59 = new lib._5tg4g();
        this.instance_59.setTransform(386.1,903.4,1,1,0,0,0,16.1,5.3);

        this.instance_60 = new lib._5tg4g();
        this.instance_60.setTransform(350.7,903.4,1,1,0,0,0,16.1,5.3);

        this.instance_61 = new lib._5tg4g();
        this.instance_61.setTransform(314.6,903.4,1,1,0,0,0,16.1,5.3);

        this.instance_62 = new lib._5tg4g();
        this.instance_62.setTransform(273.1,903.4,1.367,1,0,0,0,16,5.3);

        this.instance_63 = new lib._5tg4g();
        this.instance_63.setTransform(730.2,888.3,1,1,0,0,0,16.1,5.3);

        this.instance_64 = new lib._5tg4g();
        this.instance_64.setTransform(694.8,888.3,1,1,0,0,0,16.1,5.3);

        this.instance_65 = new lib._5tg4g();
        this.instance_65.setTransform(658.1,888.3,1,1,0,0,0,16.1,5.3);

        this.instance_66 = new lib._5tg4g();
        this.instance_66.setTransform(622.7,888.3,1,1,0,0,0,16.1,5.3);

        this.instance_67 = new lib._5tg4g();
        this.instance_67.setTransform(586.6,888.3,1,1,0,0,0,16.1,5.3);

        this.instance_68 = new lib._5tg4g();
        this.instance_68.setTransform(551.2,888.3,1,1,0,0,0,16.1,5.3);

        this.instance_69 = new lib._5tg4g();
        this.instance_69.setTransform(514.6,888.3,1,1,0,0,0,16.1,5.3);

        this.instance_70 = new lib._5tg4g();
        this.instance_70.setTransform(479.2,888.3,1,1,0,0,0,16.1,5.3);

        this.instance_71 = new lib._5tg4g();
        this.instance_71.setTransform(443.8,888.3,1,1,0,0,0,16.1,5.3);

        this.instance_72 = new lib._5tg4g();
        this.instance_72.setTransform(408.4,888.3,1,1,0,0,0,16.1,5.3);

        this.instance_73 = new lib._5tg4g();
        this.instance_73.setTransform(373.6,888.3,1,1,0,0,0,16.1,5.3);

        this.instance_74 = new lib._5tg4g();
        this.instance_74.setTransform(338.2,888.3,1,1,0,0,0,16.1,5.3);

        this.instance_75 = new lib._5tg4g();
        this.instance_75.setTransform(302.1,888.3,1,1,0,0,0,16.1,5.3);

        this.instance_76 = new lib._5tg4g();
        this.instance_76.setTransform(266.7,888.3,1,1,0,0,0,16.1,5.3);

        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").ss(1,1,1).p("ArDgzIWHAAQBlAAAAAUIAAA/QAAAUhlAAI2HAAQhlAAAAgUIAAg/QAAgUBlAAg");
        this.shape.setTransform(515.4,971.5);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("ArDA0QhlAAAAgUIAAg/QAAgUBlAAIWHAAQBlAAAAAUIAAA/QAAAUhlAAg");
        this.shape_1.setTransform(515.4,971.5);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

        // Слой 1
        this.instance_77 = new lib.image002psd();
        this.instance_77.setTransform(289.7,585.8,1.464,1.464);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#787C75").ss(4).p("ACbAAQAAADgHADQgHACgJAAIkHAAQgJAAgHgCQgHgDAAgDQAAgCAHgDQAHgCAJAAIEHAAQAJAAAHACQAHADAAACg");
        this.shape_2.setTransform(723.7,999.3,1.464,1.464);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#CCCCC5").s().p("AiDAIQgJAAgHgCQgHgDAAgDQAAgCAHgDQAHgCAJAAIEHAAQAJAAAHACQAHADAAACQAAADgHADQgHACgJAAg");
        this.shape_3.setTransform(723.7,999.3,1.464,1.464);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#787C75").ss(4).p("ACbAAQAAADgHADQgHACgJAAIkHAAQgJAAgHgCQgHgDAAgDQAAgCAHgDQAHgCAJAAIEHAAQAJAAAHACQAHADAAACg");
        this.shape_4.setTransform(271.2,999.3,1.464,1.464);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#CCCCC5").s().p("AiDAIQgJAAgHgCQgHgDAAgDQAAgCAHgDQAHgCAJAAIEHAAQAJAAAHACQAHADAAACQAAADgHADQgHACgJAAg");
        this.shape_5.setTransform(271.2,999.3,1.464,1.464);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f().s("#6294B4").ss(4).p("EAp6AJHQAAAbgyAUQgyAShGAAMhOeAAAQhHAAgygSQgygUAAgbIAAyNQAAgbAygSQAygUBHAAMBOeAAAQBGAAAyAUQAyASAAAbg");
        this.shape_6.setTransform(498.8,937.4);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#2E719C").s().p("EgnOAKIQhHAAgygTQgygTAAgbIAAyNQAAgaAygUQAygTBHAAMBOeAAAQBGAAAyATQAyAUAAAaIAASNQAAAbgyATQgyAThGAAg");
        this.shape_7.setTransform(498.8,937.4);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AknhoIO2AAQAyAAAAAyIAABtQAAAygyAAIu2AAIlXAAQgUAAAAgUIAAhhIAAhIQAAgTATgBIFYAAQASABAAATIAACpQAAATgSABAqSgMQgTAAgNgOQgNgNAAgSIAAgBQAAgTANgOQANgNATAAIATAA");
        this.shape_8.setTransform(320.4,909.3);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AipBoQgUABAAgVIAAhgIAAhIQAAgTATgBIFVAAQATABAAATIAACoQAAAUgTAAg");
        this.shape_9.setTransform(273.5,909.3);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#C5C9CB").s().p("AkoBoQATAAAAgUIAAioQAAgTgTgBIO3AAQAxAAAAAzIAABsQAAAygxgBgAqzgZQgMgNAAgUIAAAAQAAgTAMgNQAOgNATgBIATAAQgTABAAATIAABIQgTAAgOgNg");
        this.shape_10.setTransform(320.4,909.3);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f().s("#787C75").ss(4).p("AA4AAQAAgWgQgRQgRgQgXAAQgWAAgRAQQgQARAAAWQAAAXAQARQARAQAWAAQAXAAARgQQAQgRAAgXg");
        this.shape_11.setTransform(498.7,540.8,1.464,1.464);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#494A48").s().p("AgnAoQgQgRAAgXQAAgWAQgRQARgRAWAAQAXAAARARQAQARAAAWQAAAXgQARQgRARgXAAQgWAAgRgRg");
        this.shape_12.setTransform(498.7,540.8,1.464,1.464);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f().s("#787C75").ss(4).p("ACbAAQAAAJgHAGQgHAHgJAAIkHAAQgJAAgHgHQgHgGAAgJQAAgIAHgHQAHgHAJAAIEHAAQAJAAAHAHQAHAHAAAIg");
        this.shape_13.setTransform(721.9,859.4,1.464,1.464);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#CCCCC5").s().p("AiDAWQgJAAgHgGQgHgHAAgJQAAgIAHgHQAHgHAJAAIEHAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAGgJAAg");
        this.shape_14.setTransform(721.9,859.4,1.464,1.464);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f().s("#787C75").ss(4).p("ACbAAQAAAJgHAGQgHAHgJAAIkHAAQgJAAgHgHQgHgGAAgJQAAgIAHgHQAHgHAJAAIEHAAQAJAAAHAHQAHAHAAAIg");
        this.shape_15.setTransform(269.4,859.4,1.464,1.464);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#CCCCC5").s().p("AiDAWQgJAAgHgGQgHgHAAgJQAAgIAHgHQAHgHAJAAIEHAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAGgJAAg");
        this.shape_16.setTransform(269.4,859.4,1.464,1.464);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f().s("#787C75").ss(5).p("EAn3AUhQAAA9gvAsQgwArhCAAMhKrAAAQhCAAgwgrQgvgsAAg9MAAAgpCQAAg9AvgrQAwgrBCAAMBKrAAAQBCAAAwArQAvArAAA9g");
        this.shape_17.setTransform(495.9,698.9);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#E1E8E0").s().p("EglUAW1QhDAAgwgrQgvgsAAg9MAAAgpCQAAg9AvgrQAwgrBDAAMBKpAAAQBDAAAwArQAvArAAA9MAAAApCQAAA9gvAsQgwArhDAAg");
        this.shape_18.setTransform(495.9,698.9);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f().s("#2A6991").ss(4).p("EAp6AXtQAABHgyAxQgyAyhGAAMhOfAAAQhHAAgxgyQgygxAAhHMAAAgvYQAAhGAygyQAxgzBHAAMBOfAAAQBGAAAyAzQAyAyAABGg");
        this.shape_19.setTransform(497,698.3);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#2F688C").s().p("EgnPAaXQhGAAgygyQgygxAAhHMAAAgvZQAAhFAygzQAygyBGAAMBOeAAAQBHAAAzAyQAxAzAABFMAAAAvZQAABHgxAxQgzAyhHAAg");
        this.shape_20.setTransform(497,698.3);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("ACxAAQAAAZg0ASQg0AThJAAQhIAAg0gTQg0gSAAgZQAAgZA0gSQA0gSBIAAQBJAAA0ASQA0ASAAAZg");
        this.shape_21.setTransform(272.2,924);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#FFFFFF").s().p("Ah8ArQg0gRAAgaQAAgZA0gSQA0gSBIAAQBJAAA0ASQA0ASAAAZQAAAag0ARQg0AThJAAQhIAAg0gTg");
        this.shape_22.setTransform(272.2,924);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_77}]}).wait(1));

        // Слой 3
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f().s("#D7AF94").ss(1,1,1).p("EAvzgVcMAAAAq5MhflAAAMAAAgq5");
        this.shape_23.setTransform(499.8,983.6);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#7BA8A2").s().p("EgvyAeyMAAAg9kMBfkAAAMAAAA9kg");
        this.shape_24.setTransform(499.8,649.2);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#B6986A").s().p("EgvyAVdMAAAgq5MBfkAAAMAAAAq5g");
        this.shape_25.setTransform(499.8,983.6);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(192.9,452.1,613.8,669.9);


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


    (lib.KimHeadSmile2 = function(mode,startPosition,loop) {
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


    (lib.JennHeadthinking = function(mode,startPosition,loop) {
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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},30).wait(1297));

        // Brow
        this.instance_4 = new lib.Brow2();
        this.instance_4.setTransform(17.9,74,1,1,0,0,0,12.3,4.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},30).wait(1297));

        // brow
        this.instance_5 = new lib.brow1();
        this.instance_5.setTransform(64.3,75.4,1,1,0,0,0,15.1,5.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},30).wait(1297));

        // Lash
        this.instance_6 = new lib.Lash();
        this.instance_6.setTransform(41.8,96.2,1,1,0,0,0,34,6.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},30).wait(1297));

        // Слой 7 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:14.3,y:53.4}).wait(30).to({graphics:null,x:0,y:0}).wait(1297));

        // eye
        this.instance_7 = new lib.ClipGroup_2();
        this.instance_7.setTransform(17.5,101.9,1.323,1.323,0,0,180,6.5,4.5);

        this.instance_7.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:17.8,y:99.7},6).wait(17).to({x:17.5,y:101.9},6).to({_off:true},1).wait(1297));

        // Слой 8 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_0 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:36.9,y:53.5}).wait(30).to({graphics:null,x:0,y:0}).wait(1297));

        // eye2
        this.instance_8 = new lib.Анимация12("synched",0);
        this.instance_8.setTransform(59,100);

        this.instance_8.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:58.7,y:97.5},6).wait(17).to({startPosition:0},0).to({x:59,y:100},6).to({_off:true},1).wait(1297));

        // flash0.ai
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#BF8680").s().p("AgXAcQAAgRADgNQAGggAQAFQAZAIgEAcQgEAXgYAAQgIAAgKgCg");
        this.shape_6.setTransform(42.3,139,1.251,1.251,0,0,180);

        this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},30).wait(1297));

        // Слой 2
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("Ag9AIQgCglACgrIAEgjIB4g8QgYAsgTCVQgKBLgFBDQg5gkgJh8g");
        this.shape_7.setTransform(107.4,203.3,1.323,1.323,0,0,180);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#000000").s().p("ABFBNQgvg5gXgYIgKBLQgGAwgBAdQgGglgghCQgcg4gagnQgHgKgIgQIgMgbQgGgLAEgOIAJgaQAbgIAcAGQAcAGAVASQAIAGAQASQAMAPAJAHIAAgJQACAaAVAeIApAxQAVAbATAsQAUAxgCAdQgagbgug3g");
        this.shape_8.setTransform(17.4,181.9,1.323,1.323,0,0,180);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#000000").s().p("AhXDRQgjgbgChGQgDh8AFhbIABgmQABgYAFgPQAHgfAeg0QAKgSAKgFQAMgGAOAFQANAFAMALQAWAXAhA9QAgA7AaAXIAVAIQAAAvgXAqIgmBEQgRAqACAuQgthDgGhQQgnAigFBKIgDA8QAAAlgEAXQgHAfgRAZQgDAFgDAAQgLAAAFhRg");
        this.shape_9.setTransform(98.7,180.9,1.323,1.323,0,0,180);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#454545").s().p("AgLAdIgFgLQgFgcAUgOIATgIQgNAOgFAoQgCALgEAAQgCAAgDgEg");
        this.shape_10.setTransform(110.7,98.9,1.323,1.323,0,0,180);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FFFFFF").s().p("Ag2AbIgKgTQALgSAVgPQAqgcA3AdIgNAZQgUAeghAHQgLACgIAAQgWAAgMgNg");
        this.shape_11.setTransform(19.9,101.5,1.323,1.323,0,0,180);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FFFFFF").s().p("AgeA0QhOgQAWhEQAJgdA4AJQA9AKA0A/QgWAVgkAIQgTAFgRAAQgOAAgOgDg");
        this.shape_12.setTransform(61.6,99.6,1.323,1.323,0,0,180);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#000000").s().p("AAWB6QhQgygygPQgGgCgOgPIgcgcQgoggghAUQgiAWAGhGIAMhMID8gOID8CeQgfArguAiQg4AqgvAAQgeAAgbgRg");
        this.shape_13.setTransform(50.4,44.9,1.323,1.323,0,0,180);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#F6ECE1").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
        this.shape_14.setTransform(100.8,118.3,1.323,1.323,0,0,180);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#AA8774").s().p("AAKBGQAggZgwgjQgIgKgIgTQgPglAHggIAGAkQAKApAVATIALAKQALANADAMQAKAlhIAJQAagGAOgNg");
        this.shape_15.setTransform(35.5,110.4,1.323,1.323,0,0,180);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#AA8774").s().p("AASAbQgEgUgLgPIgKgXQgHgNgJgOQAHABALAMQAGAIAGAJQAWAigGA1IgFggg");
        this.shape_16.setTransform(102,105.4,1.323,1.323,0,0,180);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#C89F83").s().p("AAABsQg3gPgJhdQgDgpARgfQAPgbAYgIQAWgJARAPQASARgDAlQgCAcAMgJIANgQIgOCUQgQAHgQAAQgLAAgJgDg");
        this.shape_17.setTransform(101.8,106.5,1.323,1.323,0,0,180);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#C89F83").s().p("AhvGFQghgVgcgbIgVgXQgtgigUg0QgMgfgIg9QgYAPgbgGQg2gMgOhpQgGgtARggQAOgcAZgHQAZgGARARQAUATgDAmQgCAaANgKIAMgNQAQhLALgkQAThAAmghQBOg8AdgbQApgkADgaQgHgCgEgGQgGgJAGgGQAFgFAFAQQABAGAAAGQAYAIA9gpQBQgyBiAPQAxAHAhASQATA8AyB6QAhBmglAxQgkAvAAA4IACA0QABAigFAbQgNBSg+BbQhIBqhPAOQgfAGgdAAQhWAAhRgyg");
        this.shape_18.setTransform(57.8,102,1.323,1.323,0,0,180);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#000000").s().p("AjRFaQiWg6gFiGQgHjHAihsQAviYCGgpQEHhRCcCIQBOBEAZBUQgqD/jFCdQhjBOhYAaQhKgChLgdg");
        this.shape_19.setTransform(64.5,66.2,1.323,1.323,0,0,180);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#AA8774").s().p("AA9B6QhQgQhJg9QgmggggiGIAKgGIBDAjQBNAqA2AlQC1B1hkAXIgSABQgVAAgbgGg");
        this.shape_20.setTransform(63.8,145.5,1.323,1.323,0,0,180);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#000000").s().p("AgkFoQglgjgzhOQgegugIgcQgIgrgMguQgDgOAAgWIACgkQgBhwABgiQACgoAGgPQASgqgFgRQgDgMAZgmQAegsAbgdQAtguBUgPQBPgPA9AUIgzBFQgwAZgmA1QgmA1gPBGQgWBUAIBqQAHBTAXBuQAKAsAcA8QAQAjgBBLQhNg5gYgXg");
        this.shape_21.setTransform(91.7,73.6,1.323,1.323,0,0,180);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#282320").s().p("AgDBOQgUgSgHgTIgHgZIgKgSQgIgNgBgJQgCgJADgTIAJg0QAeAKAWASQAZAUANAaQAOAbgBAdQgBAhgSAYQgEAGgEgCIAEASQgagQgLgLg");
        this.shape_22.setTransform(10,62.5,1.323,1.323,0,0,180);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#000000").s().p("ADAD2QgUgSgQADQhKAOhLgIQhJgIhFgeQhGgegogrQgjglgQgyQgLghACgfQACgjASgaQANgSAigZIBUg/IgJgHQAYgBA0gfQAtgbAdAJQBHAXAvAVQBHAgAjAjQAyAxAeBeQAjBvgtAvQgRARguBAQgGAJgHAAQgGAAgHgHg");
        this.shape_23.setTransform(38.2,53.2,1.323,1.323,0,0,180);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#000000").s().p("AAvE7QgFAahoAaIgqAKQhhBHAVgwQAGgPAGgcIAKgrQAnh7AIhhQALhygdhpQgniRgIg7QgPh1AhhUIgYAFQgCgIAHgIQAHgIAKAAQAMgBAXAOQB3BQBNB8QBQB8AXCNQANBMgCBpQgCA+gGB7QgCA1gOAgQgOAggQAdQgQAdgIBBQgCAMgDAAQgNAAgqjsg");
        this.shape_24.setTransform(29.4,139.6);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#000000").s().p("AhvG7QgGhnAAgVQgBhWgShvQgHgtgciWQgLg5AAhLQAAjwBoh5IAAAJQAIADABAKQABAIgEAIQgCAGgHAIIgKAOQgLATAJAcQAFAQARAeQBBBwAPCCQAHAwAIBiQALBTAfAzQAOAWAZAdIAqAvQAzA7gVgQQgVgPgIAbQgIAbgNCgIgKAUIgBgHQgJhGg7ASQg5AShnCFQAGg0gFhIg");
        this.shape_25.setTransform(99,109.8,1.323,1.323,0,0,180);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[]},30).wait(1297));

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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[]},38).wait(1283));

        // Brow
        this.instance_4 = new lib.Brow2();
        this.instance_4.setTransform(17.9,74,1,1,0,0,0,12.3,4.5);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({_off:true},38).wait(1283));

        // brow
        this.instance_5 = new lib.brow1();
        this.instance_5.setTransform(64.3,75.4,1,1,0,0,0,15.1,5.5);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({_off:true},38).wait(1283));

        // Lash
        this.instance_6 = new lib.Lash();
        this.instance_6.setTransform(41.8,96.2,1,1,0,0,0,34,6.5);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({_off:true},38).wait(1283));

        // Слой 7 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_6 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_6,x:14.3,y:53.4}).wait(38).to({graphics:null,x:0,y:0}).wait(1283));

        // eye
        this.instance_7 = new lib.ClipGroup_2();
        this.instance_7.setTransform(17.5,101.9,1.323,1.323,0,0,180,6.5,4.5);
        this.instance_7._off = true;

        this.instance_7.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({_off:true},38).wait(1283));

        // Слой 8 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_6 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_1_graphics_6,x:36.9,y:53.5}).wait(38).to({graphics:null,x:0,y:0}).wait(1283));

        // eye2
        this.instance_8 = new lib.Анимация12("synched",0);
        this.instance_8.setTransform(59,100);
        this.instance_8._off = true;

        this.instance_8.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({_off:true},38).wait(1283));

        // Слой 9
        this.instance_9 = new lib.JennLips("synched",0);
        this.instance_9.setTransform(37.1,133.9,0.754,0.754);
        this.instance_9._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).to({_off:true},38).wait(1283));

        // Слой 2
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#000000").s().p("Ag9AIQgCglACgrIAEgjIB4g8QgYAsgTCVQgKBLgFBDQg5gkgJh8g");
        this.shape_6.setTransform(107.4,203.3,1.323,1.323,0,0,180);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("AhXDRQgjgbgChGQgDh8AFhbIABgmQABgYAFgPQAHgfAeg0QAKgSAKgFQAMgGAOAFQANAFAMALQAWAXAhA9QAgA7AaAXIAVAIQAAAvgXAqIgmBEQgRAqACAuQgthDgGhQQgnAigFBKIgDA8QAAAlgEAXQgHAfgRAZQgDAFgDAAQgLAAAFhRg");
        this.shape_7.setTransform(98.7,180.9,1.323,1.323,0,0,180);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#454545").s().p("AgLAdIgFgLQgFgcAUgOIATgIQgNAOgFAoQgCALgEAAQgCAAgDgEg");
        this.shape_8.setTransform(110.7,98.9,1.323,1.323,0,0,180);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("Ag2AbIgKgTQALgSAVgPQAqgcA3AdIgNAZQgUAeghAHQgLACgIAAQgWAAgMgNg");
        this.shape_9.setTransform(19.9,101.5,1.323,1.323,0,0,180);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("AgeA0QhOgQAWhEQAJgdA4AJQA9AKA0A/QgWAVgkAIQgTAFgRAAQgOAAgOgDg");
        this.shape_10.setTransform(61.6,99.6,1.323,1.323,0,0,180);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#000000").s().p("AAWB6QhQgygygPQgGgCgOgPIgcgcQgoggghAUQgiAWAGhGIAMhMID8gOID8CeQgfArguAiQg4AqgvAAQgeAAgbgRg");
        this.shape_11.setTransform(50.4,44.9,1.323,1.323,0,0,180);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#F6ECE1").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
        this.shape_12.setTransform(100.8,118.3,1.323,1.323,0,0,180);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#AA8774").s().p("AAKBGQAggZgwgjQgIgKgIgTQgPglAHggIAGAkQAKApAVATIALAKQALANADAMQAKAlhIAJQAagGAOgNg");
        this.shape_13.setTransform(35.5,110.4,1.323,1.323,0,0,180);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#AA8774").s().p("AASAbQgEgUgLgPIgKgXQgHgNgJgOQAHABALAMQAGAIAGAJQAWAigGA1IgFggg");
        this.shape_14.setTransform(102,105.4,1.323,1.323,0,0,180);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#C89F83").s().p("AAABsQg3gPgJhdQgDgpARgfQAPgbAYgIQAWgJARAPQASARgDAlQgCAcAMgJIANgQIgOCUQgQAHgQAAQgLAAgJgDg");
        this.shape_15.setTransform(101.8,106.5,1.323,1.323,0,0,180);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#C89F83").s().p("AhvGFQghgVgcgbIgVgXQgtgigUg0QgMgfgIg9QgYAPgbgGQg2gMgOhpQgGgtARggQAOgcAZgHQAZgGARARQAUATgDAmQgCAaANgKIAMgNQAQhLALgkQAThAAmghQBOg8AdgbQApgkADgaQgHgCgEgGQgGgJAGgGQAFgFAFAQQABAGAAAGQAYAIA9gpQBQgyBiAPQAxAHAhASQATA8AyB6QAhBmglAxQgkAvAAA4IACA0QABAigFAbQgNBSg+BbQhIBqhPAOQgfAGgdAAQhWAAhRgyg");
        this.shape_16.setTransform(57.8,102,1.323,1.323,0,0,180);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#000000").s().p("AjRFaQiWg6gFiGQgHjHAihsQAviYCGgpQEHhRCcCIQBOBEAZBUQgqD/jFCdQhjBOhYAaQhKgChLgdg");
        this.shape_17.setTransform(64.5,66.2,1.323,1.323,0,0,180);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#AA8774").s().p("AA9B6QhQgQhJg9QgmggggiGIAKgGIBDAjQBNAqA2AlQC1B1hkAXIgSABQgVAAgbgGg");
        this.shape_18.setTransform(63.8,145.5,1.323,1.323,0,0,180);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#000000").s().p("AgkFoQglgjgzhOQgegugIgcQgIgrgMguQgDgOAAgWIACgkQgBhwABgiQACgoAGgPQASgqgFgRQgDgMAZgmQAegsAbgdQAtguBUgPQBPgPA9AUIgzBFQgwAZgmA1QgmA1gPBGQgWBUAIBqQAHBTAXBuQAKAsAcA8QAQAjgBBLQhNg5gYgXg");
        this.shape_19.setTransform(91.7,73.6,1.323,1.323,0,0,180);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#282320").s().p("AgDBOQgUgSgHgTIgHgZIgKgSQgIgNgBgJQgCgJADgTIAJg0QAeAKAWASQAZAUANAaQAOAbgBAdQgBAhgSAYQgEAGgEgCIAEASQgagQgLgLg");
        this.shape_20.setTransform(10,62.5,1.323,1.323,0,0,180);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#000000").s().p("ADAD2QgUgSgQADQhKAOhLgIQhJgIhFgeQhGgegogrQgjglgQgyQgLghACgfQACgjASgaQANgSAigZIBUg/IgJgHQAYgBA0gfQAtgbAdAJQBHAXAvAVQBHAgAjAjQAyAxAeBeQAjBvgtAvQgRARguBAQgGAJgHAAQgGAAgHgHg");
        this.shape_21.setTransform(38.2,53.2,1.323,1.323,0,0,180);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#000000").s().p("AhvG7QgGhnAAgVQgBhWgShvQgHgtgciWQgLg5AAhLQAAjwBoh5IAAAJQAIADABAKQABAIgEAIQgCAGgHAIIgKAOQgLATAJAcQAFAQARAeQBBBwAPCCQAHAwAIBiQALBTAfAzQAOAWAZAdIAqAvQAzA7gVgQQgVgPgIAbQgIAbgNCgIgKAUIgBgHQgJhGg7ASQg5AShnCFQAGg0gFhIg");
        this.shape_22.setTransform(99,109.8,1.323,1.323,0,0,180);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#000000").s().p("ABFBNQgvg5gXgYIgKBLQgGAwgBAdQgGglgghCQgcg4gagnQgHgKgIgQIgMgbQgGgLAEgOIAJgaQAbgIAcAGQAcAGAVASQAIAGAQASQAMAPAJAHIAAgJQACAaAVAeIApAxQAVAbATAsQAUAxgCAdQgagbgug3g");
        this.shape_23.setTransform(17.4,181.9,1.323,1.323,0,0,180);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#000000").s().p("AAvE7QgFAahoAaIgqAKQhhBHAVgwQAGgPAGgcIAKgrQAnh7AIhhQALhygdhpQgniRgIg7QgPh1AhhUIgYAFQgCgIAHgIQAHgIAKAAQAMgBAXAOQB3BQBNB8QBQB8AXCNQANBMgCBpQgCA+gGB7QgCA1gOAgQgOAggQAdQgQAdgIBBQgCAMgDAAQgNAAgqjsg");
        this.shape_24.setTransform(29.4,139.6);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},6).to({state:[]},38).wait(1283));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.4,15.4,125.6,210.2);


    (lib.JennHeadTalk2S = function(mode,startPosition,loop) {
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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},10).to({state:[]},1).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},49).to({state:[]},6).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},4).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},88).to({state:[]},4).wait(1163));

        // Brow
        this.instance_4 = new lib.Brow2();
        this.instance_4.setTransform(17.9,74,1,1,0,0,0,12.3,4.5);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},6).wait(2).to({_off:false},0).to({_off:true},4).wait(88).to({_off:false},0).to({_off:true},4).wait(1163));

        // brow
        this.instance_5 = new lib.brow1();
        this.instance_5.setTransform(64.3,75.4,1,1,0,0,0,15.1,5.5);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},6).wait(2).to({_off:false},0).to({_off:true},4).wait(88).to({_off:false},0).to({_off:true},4).wait(1163));

        // Lash
        this.instance_6 = new lib.Lash();
        this.instance_6.setTransform(41.8,96.2,1,1,0,0,0,34,6.5);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},6).wait(2).to({_off:false},0).to({_off:true},4).wait(88).to({_off:false},0).to({_off:true},4).wait(1163));

        // Слой 7 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_10 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");
        var mask_graphics_60 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");
        var mask_graphics_68 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");
        var mask_graphics_160 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_10,x:14.3,y:53.4}).wait(1).to({graphics:null,x:0,y:0}).wait(49).to({graphics:mask_graphics_60,x:14.3,y:53.4}).wait(6).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_68,x:14.3,y:53.4}).wait(4).to({graphics:null,x:0,y:0}).wait(88).to({graphics:mask_graphics_160,x:14.3,y:53.4}).wait(4).to({graphics:null,x:0,y:0}).wait(1163));

        // eye
        this.instance_7 = new lib.ClipGroup_2();
        this.instance_7.setTransform(17.5,101.9,1.323,1.323,0,0,180,6.5,4.5);
        this.instance_7._off = true;

        this.instance_7.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},6).wait(2).to({_off:false},0).to({_off:true},4).wait(88).to({_off:false},0).to({_off:true},4).wait(1163));

        // Слой 8 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_10 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");
        var mask_1_graphics_60 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");
        var mask_1_graphics_68 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");
        var mask_1_graphics_160 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_1_graphics_10,x:36.9,y:53.5}).wait(1).to({graphics:null,x:0,y:0}).wait(49).to({graphics:mask_1_graphics_60,x:36.9,y:53.5}).wait(6).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_1_graphics_68,x:36.9,y:53.5}).wait(4).to({graphics:null,x:0,y:0}).wait(88).to({graphics:mask_1_graphics_160,x:36.9,y:53.5}).wait(4).to({graphics:null,x:0,y:0}).wait(1163));

        // eye2
        this.instance_8 = new lib.Анимация12("synched",0);
        this.instance_8.setTransform(59,100);
        this.instance_8._off = true;

        this.instance_8.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},6).wait(2).to({_off:false},0).to({_off:true},4).wait(88).to({_off:false},0).to({_off:true},4).wait(1163));

        // Слой 9
        this.instance_9 = new lib.JennLips("single",2);
        this.instance_9.setTransform(37.1,133.9,0.754,0.754);
        this.instance_9._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({_off:true},1).wait(49).to({_off:false},0).to({_off:true},6).wait(2).to({_off:false},0).to({_off:true},4).wait(88).to({_off:false},0).to({_off:true},4).wait(1163));

        // Слой 2
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#000000").s().p("Ag9AIQgCglACgrIAEgjIB4g8QgYAsgTCVQgKBLgFBDQg5gkgJh8g");
        this.shape_6.setTransform(107.4,203.3,1.323,1.323,0,0,180);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("ABFBNQgvg5gXgYIgKBLQgGAwgBAdQgGglgghCQgcg4gagnQgHgKgIgQIgMgbQgGgLAEgOIAJgaQAbgIAcAGQAcAGAVASQAIAGAQASQAMAPAJAHIAAgJQACAaAVAeIApAxQAVAbATAsQAUAxgCAdQgagbgug3g");
        this.shape_7.setTransform(17.4,181.9,1.323,1.323,0,0,180);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#000000").s().p("AhXDRQgjgbgChGQgDh8AFhbIABgmQABgYAFgPQAHgfAeg0QAKgSAKgFQAMgGAOAFQANAFAMALQAWAXAhA9QAgA7AaAXIAVAIQAAAvgXAqIgmBEQgRAqACAuQgthDgGhQQgnAigFBKIgDA8QAAAlgEAXQgHAfgRAZQgDAFgDAAQgLAAAFhRg");
        this.shape_8.setTransform(98.7,180.9,1.323,1.323,0,0,180);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#454545").s().p("AgLAdIgFgLQgFgcAUgOIATgIQgNAOgFAoQgCALgEAAQgCAAgDgEg");
        this.shape_9.setTransform(110.7,98.9,1.323,1.323,0,0,180);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("Ag2AbIgKgTQALgSAVgPQAqgcA3AdIgNAZQgUAeghAHQgLACgIAAQgWAAgMgNg");
        this.shape_10.setTransform(19.9,101.5,1.323,1.323,0,0,180);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FFFFFF").s().p("AgeA0QhOgQAWhEQAJgdA4AJQA9AKA0A/QgWAVgkAIQgTAFgRAAQgOAAgOgDg");
        this.shape_11.setTransform(61.6,99.6,1.323,1.323,0,0,180);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#000000").s().p("AAWB6QhQgygygPQgGgCgOgPIgcgcQgoggghAUQgiAWAGhGIAMhMID8gOID8CeQgfArguAiQg4AqgvAAQgeAAgbgRg");
        this.shape_12.setTransform(50.4,44.9,1.323,1.323,0,0,180);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#F6ECE1").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
        this.shape_13.setTransform(100.8,118.3,1.323,1.323,0,0,180);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#AA8774").s().p("AAKBGQAggZgwgjQgIgKgIgTQgPglAHggIAGAkQAKApAVATIALAKQALANADAMQAKAlhIAJQAagGAOgNg");
        this.shape_14.setTransform(35.5,110.4,1.323,1.323,0,0,180);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#AA8774").s().p("AASAbQgEgUgLgPIgKgXQgHgNgJgOQAHABALAMQAGAIAGAJQAWAigGA1IgFggg");
        this.shape_15.setTransform(102,105.4,1.323,1.323,0,0,180);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#C89F83").s().p("AAABsQg3gPgJhdQgDgpARgfQAPgbAYgIQAWgJARAPQASARgDAlQgCAcAMgJIANgQIgOCUQgQAHgQAAQgLAAgJgDg");
        this.shape_16.setTransform(101.8,106.5,1.323,1.323,0,0,180);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#C89F83").s().p("AhvGFQghgVgcgbIgVgXQgtgigUg0QgMgfgIg9QgYAPgbgGQg2gMgOhpQgGgtARggQAOgcAZgHQAZgGARARQAUATgDAmQgCAaANgKIAMgNQAQhLALgkQAThAAmghQBOg8AdgbQApgkADgaQgHgCgEgGQgGgJAGgGQAFgFAFAQQABAGAAAGQAYAIA9gpQBQgyBiAPQAxAHAhASQATA8AyB6QAhBmglAxQgkAvAAA4IACA0QABAigFAbQgNBSg+BbQhIBqhPAOQgfAGgdAAQhWAAhRgyg");
        this.shape_17.setTransform(57.8,102,1.323,1.323,0,0,180);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#000000").s().p("AjRFaQiWg6gFiGQgHjHAihsQAviYCGgpQEHhRCcCIQBOBEAZBUQgqD/jFCdQhjBOhYAaQhKgChLgdg");
        this.shape_18.setTransform(64.5,66.2,1.323,1.323,0,0,180);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#AA8774").s().p("AA9B6QhQgQhJg9QgmggggiGIAKgGIBDAjQBNAqA2AlQC1B1hkAXIgSABQgVAAgbgGg");
        this.shape_19.setTransform(63.8,145.5,1.323,1.323,0,0,180);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#000000").s().p("AgkFoQglgjgzhOQgegugIgcQgIgrgMguQgDgOAAgWIACgkQgBhwABgiQACgoAGgPQASgqgFgRQgDgMAZgmQAegsAbgdQAtguBUgPQBPgPA9AUIgzBFQgwAZgmA1QgmA1gPBGQgWBUAIBqQAHBTAXBuQAKAsAcA8QAQAjgBBLQhNg5gYgXg");
        this.shape_20.setTransform(91.7,73.6,1.323,1.323,0,0,180);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#282320").s().p("AgDBOQgUgSgHgTIgHgZIgKgSQgIgNgBgJQgCgJADgTIAJg0QAeAKAWASQAZAUANAaQAOAbgBAdQgBAhgSAYQgEAGgEgCIAEASQgagQgLgLg");
        this.shape_21.setTransform(10,62.5,1.323,1.323,0,0,180);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#000000").s().p("ADAD2QgUgSgQADQhKAOhLgIQhJgIhFgeQhGgegogrQgjglgQgyQgLghACgfQACgjASgaQANgSAigZIBUg/IgJgHQAYgBA0gfQAtgbAdAJQBHAXAvAVQBHAgAjAjQAyAxAeBeQAjBvgtAvQgRARguBAQgGAJgHAAQgGAAgHgHg");
        this.shape_22.setTransform(38.2,53.2,1.323,1.323,0,0,180);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#000000").s().p("AAvE7QgFAahoAaIgqAKQhhBHAVgwQAGgPAGgcIAKgrQAnh7AIhhQALhygdhpQgniRgIg7QgPh1AhhUIgYAFQgCgIAHgIQAHgIAKAAQAMgBAXAOQB3BQBNB8QBQB8AXCNQANBMgCBpQgCA+gGB7QgCA1gOAgQgOAggQAdQgQAdgIBBQgCAMgDAAQgNAAgqjsg");
        this.shape_23.setTransform(29.4,139.6);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#000000").s().p("AhvG7QgGhnAAgVQgBhWgShvQgHgtgciWQgLg5AAhLQAAjwBoh5IAAAJQAIADABAKQABAIgEAIQgCAGgHAIIgKAOQgLATAJAcQAFAQARAeQBBBwAPCCQAHAwAIBiQALBTAfAzQAOAWAZAdIAqAvQAzA7gVgQQgVgPgIAbQgIAbgNCgIgKAUIgBgHQgJhGg7ASQg5AShnCFQAGg0gFhIg");
        this.shape_24.setTransform(99,109.8,1.323,1.323,0,0,180);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},10).to({state:[]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},49).to({state:[]},6).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[]},4).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},88).to({state:[]},4).wait(1163));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.4,15.4,125.6,210.2);


    (lib.JennHeadTalk2 = function(mode,startPosition,loop) {
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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},10).to({state:[]},136).wait(1181));

        // Brow
        this.instance_4 = new lib.Brow2();
        this.instance_4.setTransform(17.9,74,1,1,0,0,0,12.3,4.5);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({_off:true},136).wait(1181));

        // brow
        this.instance_5 = new lib.brow1();
        this.instance_5.setTransform(64.3,75.4,1,1,0,0,0,15.1,5.5);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({_off:true},136).wait(1181));

        // Lash
        this.instance_6 = new lib.Lash();
        this.instance_6.setTransform(41.8,96.2,1,1,0,0,0,34,6.5);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({_off:true},136).wait(1181));

        // Слой 7 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_10 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_10,x:14.3,y:53.4}).wait(136).to({graphics:null,x:0,y:0}).wait(1181));

        // eye
        this.instance_7 = new lib.ClipGroup_2();
        this.instance_7.setTransform(17.5,101.9,1.323,1.323,0,0,180,6.5,4.5);
        this.instance_7._off = true;

        this.instance_7.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({_off:true},136).wait(1181));

        // Слой 8 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_10 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_1_graphics_10,x:36.9,y:53.5}).wait(136).to({graphics:null,x:0,y:0}).wait(1181));

        // eye2
        this.instance_8 = new lib.Анимация12("synched",0);
        this.instance_8.setTransform(59,100);
        this.instance_8._off = true;

        this.instance_8.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).to({_off:true},136).wait(1181));

        // Слой 9
        this.instance_9 = new lib.JennLips("synched",0);
        this.instance_9.setTransform(37.1,133.9,0.754,0.754);
        this.instance_9._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({_off:true},136).wait(1181));

        // Слой 2
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#000000").s().p("Ag9AIQgCglACgrIAEgjIB4g8QgYAsgTCVQgKBLgFBDQg5gkgJh8g");
        this.shape_6.setTransform(107.4,203.3,1.323,1.323,0,0,180);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("ABFBNQgvg5gXgYIgKBLQgGAwgBAdQgGglgghCQgcg4gagnQgHgKgIgQIgMgbQgGgLAEgOIAJgaQAbgIAcAGQAcAGAVASQAIAGAQASQAMAPAJAHIAAgJQACAaAVAeIApAxQAVAbATAsQAUAxgCAdQgagbgug3g");
        this.shape_7.setTransform(17.4,181.9,1.323,1.323,0,0,180);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#000000").s().p("AhXDRQgjgbgChGQgDh8AFhbIABgmQABgYAFgPQAHgfAeg0QAKgSAKgFQAMgGAOAFQANAFAMALQAWAXAhA9QAgA7AaAXIAVAIQAAAvgXAqIgmBEQgRAqACAuQgthDgGhQQgnAigFBKIgDA8QAAAlgEAXQgHAfgRAZQgDAFgDAAQgLAAAFhRg");
        this.shape_8.setTransform(98.7,180.9,1.323,1.323,0,0,180);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#454545").s().p("AgLAdIgFgLQgFgcAUgOIATgIQgNAOgFAoQgCALgEAAQgCAAgDgEg");
        this.shape_9.setTransform(110.7,98.9,1.323,1.323,0,0,180);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("Ag2AbIgKgTQALgSAVgPQAqgcA3AdIgNAZQgUAeghAHQgLACgIAAQgWAAgMgNg");
        this.shape_10.setTransform(19.9,101.5,1.323,1.323,0,0,180);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FFFFFF").s().p("AgeA0QhOgQAWhEQAJgdA4AJQA9AKA0A/QgWAVgkAIQgTAFgRAAQgOAAgOgDg");
        this.shape_11.setTransform(61.6,99.6,1.323,1.323,0,0,180);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#000000").s().p("AAWB6QhQgygygPQgGgCgOgPIgcgcQgoggghAUQgiAWAGhGIAMhMID8gOID8CeQgfArguAiQg4AqgvAAQgeAAgbgRg");
        this.shape_12.setTransform(50.4,44.9,1.323,1.323,0,0,180);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#F6ECE1").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
        this.shape_13.setTransform(100.8,118.3,1.323,1.323,0,0,180);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#AA8774").s().p("AAKBGQAggZgwgjQgIgKgIgTQgPglAHggIAGAkQAKApAVATIALAKQALANADAMQAKAlhIAJQAagGAOgNg");
        this.shape_14.setTransform(35.5,110.4,1.323,1.323,0,0,180);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#AA8774").s().p("AASAbQgEgUgLgPIgKgXQgHgNgJgOQAHABALAMQAGAIAGAJQAWAigGA1IgFggg");
        this.shape_15.setTransform(102,105.4,1.323,1.323,0,0,180);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#C89F83").s().p("AAABsQg3gPgJhdQgDgpARgfQAPgbAYgIQAWgJARAPQASARgDAlQgCAcAMgJIANgQIgOCUQgQAHgQAAQgLAAgJgDg");
        this.shape_16.setTransform(101.8,106.5,1.323,1.323,0,0,180);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#C89F83").s().p("AhvGFQghgVgcgbIgVgXQgtgigUg0QgMgfgIg9QgYAPgbgGQg2gMgOhpQgGgtARggQAOgcAZgHQAZgGARARQAUATgDAmQgCAaANgKIAMgNQAQhLALgkQAThAAmghQBOg8AdgbQApgkADgaQgHgCgEgGQgGgJAGgGQAFgFAFAQQABAGAAAGQAYAIA9gpQBQgyBiAPQAxAHAhASQATA8AyB6QAhBmglAxQgkAvAAA4IACA0QABAigFAbQgNBSg+BbQhIBqhPAOQgfAGgdAAQhWAAhRgyg");
        this.shape_17.setTransform(57.8,102,1.323,1.323,0,0,180);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#000000").s().p("AjRFaQiWg6gFiGQgHjHAihsQAviYCGgpQEHhRCcCIQBOBEAZBUQgqD/jFCdQhjBOhYAaQhKgChLgdg");
        this.shape_18.setTransform(64.5,66.2,1.323,1.323,0,0,180);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#AA8774").s().p("AA9B6QhQgQhJg9QgmggggiGIAKgGIBDAjQBNAqA2AlQC1B1hkAXIgSABQgVAAgbgGg");
        this.shape_19.setTransform(63.8,145.5,1.323,1.323,0,0,180);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#000000").s().p("AgkFoQglgjgzhOQgegugIgcQgIgrgMguQgDgOAAgWIACgkQgBhwABgiQACgoAGgPQASgqgFgRQgDgMAZgmQAegsAbgdQAtguBUgPQBPgPA9AUIgzBFQgwAZgmA1QgmA1gPBGQgWBUAIBqQAHBTAXBuQAKAsAcA8QAQAjgBBLQhNg5gYgXg");
        this.shape_20.setTransform(91.7,73.6,1.323,1.323,0,0,180);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#282320").s().p("AgDBOQgUgSgHgTIgHgZIgKgSQgIgNgBgJQgCgJADgTIAJg0QAeAKAWASQAZAUANAaQAOAbgBAdQgBAhgSAYQgEAGgEgCIAEASQgagQgLgLg");
        this.shape_21.setTransform(10,62.5,1.323,1.323,0,0,180);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#000000").s().p("ADAD2QgUgSgQADQhKAOhLgIQhJgIhFgeQhGgegogrQgjglgQgyQgLghACgfQACgjASgaQANgSAigZIBUg/IgJgHQAYgBA0gfQAtgbAdAJQBHAXAvAVQBHAgAjAjQAyAxAeBeQAjBvgtAvQgRARguBAQgGAJgHAAQgGAAgHgHg");
        this.shape_22.setTransform(38.2,53.2,1.323,1.323,0,0,180);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#000000").s().p("AAvE7QgFAahoAaIgqAKQhhBHAVgwQAGgPAGgcIAKgrQAnh7AIhhQALhygdhpQgniRgIg7QgPh1AhhUIgYAFQgCgIAHgIQAHgIAKAAQAMgBAXAOQB3BQBNB8QBQB8AXCNQANBMgCBpQgCA+gGB7QgCA1gOAgQgOAggQAdQgQAdgIBBQgCAMgDAAQgNAAgqjsg");
        this.shape_23.setTransform(29.4,139.6);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#000000").s().p("AhvG7QgGhnAAgVQgBhWgShvQgHgtgciWQgLg5AAhLQAAjwBoh5IAAAJQAIADABAKQABAIgEAIQgCAGgHAIIgKAOQgLATAJAcQAFAQARAeQBBBwAPCCQAHAwAIBiQALBTAfAzQAOAWAZAdIAqAvQAzA7gVgQQgVgPgIAbQgIAbgNCgIgKAUIgBgHQgJhGg7ASQg5AShnCFQAGg0gFhIg");
        this.shape_24.setTransform(99,109.8,1.323,1.323,0,0,180);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},10).to({state:[]},136).wait(1181));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.4,15.4,125.6,210.2);


    (lib.JennHeadTalkNo = function(mode,startPosition,loop) {
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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).to({state:[]},7).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},38).to({state:[]},5).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},19).to({state:[]},531).wait(710));

        // Brow
        this.instance_4 = new lib.Brow2();
        this.instance_4.setTransform(17.9,74,1,1,0,0,0,12.3,4.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},7).wait(38).to({_off:false},0).to({_off:true},5).wait(19).to({_off:false},0).to({_off:true},531).wait(710));

        // brow
        this.instance_5 = new lib.brow1();
        this.instance_5.setTransform(64.3,75.4,1,1,0,0,0,15.1,5.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},7).wait(38).to({_off:false},0).to({_off:true},5).wait(19).to({_off:false},0).to({_off:true},531).wait(710));

        // Lash
        this.instance_6 = new lib.Lash();
        this.instance_6.setTransform(41.8,96.2,1,1,0,0,0,34,6.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},7).wait(38).to({_off:false},0).to({_off:true},5).wait(19).to({_off:false},0).to({_off:true},531).wait(710));

        // Слой 7 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");
        var mask_graphics_17 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");
        var mask_graphics_62 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");
        var mask_graphics_86 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:14.3,y:53.4}).wait(1).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_17,x:14.3,y:53.4}).wait(7).to({graphics:null,x:0,y:0}).wait(38).to({graphics:mask_graphics_62,x:14.3,y:53.4}).wait(5).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_graphics_86,x:14.3,y:53.4}).wait(531).to({graphics:null,x:0,y:0}).wait(710));

        // eye
        this.instance_7 = new lib.ClipGroup_2();
        this.instance_7.setTransform(17.5,101.9,1.323,1.323,0,0,180,6.5,4.5);

        this.instance_7.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},7).wait(38).to({_off:false},0).to({_off:true},5).wait(19).to({_off:false},0).to({_off:true},531).wait(710));

        // Слой 8 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_0 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");
        var mask_1_graphics_17 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");
        var mask_1_graphics_62 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");
        var mask_1_graphics_86 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:36.9,y:53.5}).wait(1).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_1_graphics_17,x:36.9,y:53.5}).wait(7).to({graphics:null,x:0,y:0}).wait(38).to({graphics:mask_1_graphics_62,x:36.9,y:53.5}).wait(5).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_1_graphics_86,x:36.9,y:53.5}).wait(531).to({graphics:null,x:0,y:0}).wait(710));

        // eye2
        this.instance_8 = new lib.Анимация12("synched",0);
        this.instance_8.setTransform(59,100);

        this.instance_8.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},7).wait(38).to({_off:false},0).to({_off:true},5).wait(19).to({_off:false},0).to({_off:true},531).wait(710));

        // Слой 9
        this.instance_9 = new lib.JennLips("single",6);
        this.instance_9.setTransform(37.1,133.9,0.754,0.754);

        this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(16).to({_off:false},0).to({_off:true},7).wait(38).to({_off:false},0).to({_off:true},5).wait(19).to({_off:false},0).to({_off:true},531).wait(710));

        // Слой 2
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#000000").s().p("Ag9AIQgCglACgrIAEgjIB4g8QgYAsgTCVQgKBLgFBDQg5gkgJh8g");
        this.shape_6.setTransform(107.4,203.3,1.323,1.323,0,0,180);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#000000").s().p("ABFBNQgvg5gXgYIgKBLQgGAwgBAdQgGglgghCQgcg4gagnQgHgKgIgQIgMgbQgGgLAEgOIAJgaQAbgIAcAGQAcAGAVASQAIAGAQASQAMAPAJAHIAAgJQACAaAVAeIApAxQAVAbATAsQAUAxgCAdQgagbgug3g");
        this.shape_7.setTransform(17.4,181.9,1.323,1.323,0,0,180);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#000000").s().p("AhXDRQgjgbgChGQgDh8AFhbIABgmQABgYAFgPQAHgfAeg0QAKgSAKgFQAMgGAOAFQANAFAMALQAWAXAhA9QAgA7AaAXIAVAIQAAAvgXAqIgmBEQgRAqACAuQgthDgGhQQgnAigFBKIgDA8QAAAlgEAXQgHAfgRAZQgDAFgDAAQgLAAAFhRg");
        this.shape_8.setTransform(98.7,180.9,1.323,1.323,0,0,180);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#454545").s().p("AgLAdIgFgLQgFgcAUgOIATgIQgNAOgFAoQgCALgEAAQgCAAgDgEg");
        this.shape_9.setTransform(110.7,98.9,1.323,1.323,0,0,180);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("Ag2AbIgKgTQALgSAVgPQAqgcA3AdIgNAZQgUAeghAHQgLACgIAAQgWAAgMgNg");
        this.shape_10.setTransform(19.9,101.5,1.323,1.323,0,0,180);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FFFFFF").s().p("AgeA0QhOgQAWhEQAJgdA4AJQA9AKA0A/QgWAVgkAIQgTAFgRAAQgOAAgOgDg");
        this.shape_11.setTransform(61.6,99.6,1.323,1.323,0,0,180);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#000000").s().p("AAWB6QhQgygygPQgGgCgOgPIgcgcQgoggghAUQgiAWAGhGIAMhMID8gOID8CeQgfArguAiQg4AqgvAAQgeAAgbgRg");
        this.shape_12.setTransform(50.4,44.9,1.323,1.323,0,0,180);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#F6ECE1").s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
        this.shape_13.setTransform(100.8,118.3,1.323,1.323,0,0,180);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#AA8774").s().p("AAKBGQAggZgwgjQgIgKgIgTQgPglAHggIAGAkQAKApAVATIALAKQALANADAMQAKAlhIAJQAagGAOgNg");
        this.shape_14.setTransform(35.5,110.4,1.323,1.323,0,0,180);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#AA8774").s().p("AASAbQgEgUgLgPIgKgXQgHgNgJgOQAHABALAMQAGAIAGAJQAWAigGA1IgFggg");
        this.shape_15.setTransform(102,105.4,1.323,1.323,0,0,180);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#C89F83").s().p("AAABsQg3gPgJhdQgDgpARgfQAPgbAYgIQAWgJARAPQASARgDAlQgCAcAMgJIANgQIgOCUQgQAHgQAAQgLAAgJgDg");
        this.shape_16.setTransform(101.8,106.5,1.323,1.323,0,0,180);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#C89F83").s().p("AhvGFQghgVgcgbIgVgXQgtgigUg0QgMgfgIg9QgYAPgbgGQg2gMgOhpQgGgtARggQAOgcAZgHQAZgGARARQAUATgDAmQgCAaANgKIAMgNQAQhLALgkQAThAAmghQBOg8AdgbQApgkADgaQgHgCgEgGQgGgJAGgGQAFgFAFAQQABAGAAAGQAYAIA9gpQBQgyBiAPQAxAHAhASQATA8AyB6QAhBmglAxQgkAvAAA4IACA0QABAigFAbQgNBSg+BbQhIBqhPAOQgfAGgdAAQhWAAhRgyg");
        this.shape_17.setTransform(57.8,102,1.323,1.323,0,0,180);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#000000").s().p("AjRFaQiWg6gFiGQgHjHAihsQAviYCGgpQEHhRCcCIQBOBEAZBUQgqD/jFCdQhjBOhYAaQhKgChLgdg");
        this.shape_18.setTransform(64.5,66.2,1.323,1.323,0,0,180);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#AA8774").s().p("AA9B6QhQgQhJg9QgmggggiGIAKgGIBDAjQBNAqA2AlQC1B1hkAXIgSABQgVAAgbgGg");
        this.shape_19.setTransform(63.8,145.5,1.323,1.323,0,0,180);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#000000").s().p("AgkFoQglgjgzhOQgegugIgcQgIgrgMguQgDgOAAgWIACgkQgBhwABgiQACgoAGgPQASgqgFgRQgDgMAZgmQAegsAbgdQAtguBUgPQBPgPA9AUIgzBFQgwAZgmA1QgmA1gPBGQgWBUAIBqQAHBTAXBuQAKAsAcA8QAQAjgBBLQhNg5gYgXg");
        this.shape_20.setTransform(91.7,73.6,1.323,1.323,0,0,180);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#282320").s().p("AgDBOQgUgSgHgTIgHgZIgKgSQgIgNgBgJQgCgJADgTIAJg0QAeAKAWASQAZAUANAaQAOAbgBAdQgBAhgSAYQgEAGgEgCIAEASQgagQgLgLg");
        this.shape_21.setTransform(10,62.5,1.323,1.323,0,0,180);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#000000").s().p("ADAD2QgUgSgQADQhKAOhLgIQhJgIhFgeQhGgegogrQgjglgQgyQgLghACgfQACgjASgaQANgSAigZIBUg/IgJgHQAYgBA0gfQAtgbAdAJQBHAXAvAVQBHAgAjAjQAyAxAeBeQAjBvgtAvQgRARguBAQgGAJgHAAQgGAAgHgHg");
        this.shape_22.setTransform(38.2,53.2,1.323,1.323,0,0,180);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#000000").s().p("AAvE7QgFAahoAaIgqAKQhhBHAVgwQAGgPAGgcIAKgrQAnh7AIhhQALhygdhpQgniRgIg7QgPh1AhhUIgYAFQgCgIAHgIQAHgIAKAAQAMgBAXAOQB3BQBNB8QBQB8AXCNQANBMgCBpQgCA+gGB7QgCA1gOAgQgOAggQAdQgQAdgIBBQgCAMgDAAQgNAAgqjsg");
        this.shape_23.setTransform(29.4,139.6);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#000000").s().p("AhvG7QgGhnAAgVQgBhWgShvQgHgtgciWQgLg5AAhLQAAjwBoh5IAAAJQAIADABAKQABAIgEAIQgCAGgHAIIgKAOQgLATAJAcQAFAQARAeQBBBwAPCCQAHAwAIBiQALBTAfAzQAOAWAZAdIAqAvQAzA7gVgQQgVgPgIAbQgIAbgNCgIgKAUIgBgHQgJhGg7ASQg5AShnCFQAGg0gFhIg");
        this.shape_24.setTransform(99,109.8,1.323,1.323,0,0,180);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},16).to({state:[]},7).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},38).to({state:[]},5).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},19).to({state:[]},531).wait(710));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.4,15.4,125.6,210.2);


    (lib.JennHeadSmileCOmpкопия = function(mode,startPosition,loop) {
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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1326));

        // Brow
        this.instance_4 = new lib.Brow2();
        this.instance_4.setTransform(17.9,74,1,1,0,0,0,12.3,4.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(1326));

        // brow
        this.instance_5 = new lib.brow1();
        this.instance_5.setTransform(64.3,75.4,1,1,0,0,0,15.1,5.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(1326));

        // Lash
        this.instance_6 = new lib.Lash();
        this.instance_6.setTransform(41.8,96.2,1,1,0,0,0,34,6.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(1326));

        // Слой 7 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:14.3,y:53.4}).wait(1).to({graphics:null,x:0,y:0}).wait(1326));

        // eye
        this.instance_7 = new lib.ClipGroup_2();
        this.instance_7.setTransform(19.2,104.8,1.323,1.323,0,0,180,6.5,4.5);

        this.instance_7.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(1326));

        // Слой 8 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_0 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:36.9,y:53.5}).wait(1).to({graphics:null,x:0,y:0}).wait(1326));

        // eye2
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgIAAQAAgCACgDQADgDADAAQADgBADADQADADAAADQAAAIgJABQgHAAgBgJg");
        this.shape_6.setTransform(57.5,104.9,1.323,1.323,0,0,180);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#1C1717").s().p("AgSAWQgJgJgBgMQgBgLAJgJQAIgJAMgBQALAAAJAIQAJAIAAANQABALgJAJQgIAJgMAAIgBABQgKAAgIgIg");
        this.shape_7.setTransform(60.3,102.7,1.323,1.323,0,0,180);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4A3A2E").s().p("AgaAdQgMgLgBgRQAAgPALgMQALgMAQgBQAPgBAMALQANALAAARQABAPgLANQgLAMgRABIgBAAQgOAAgMgLg");
        this.shape_8.setTransform(60.3,102.9,1.323,1.323,0,0,180);

        this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[]},1).wait(1326));

        // Слой 9
        this.instance_8 = new lib.JennLips("single",10);
        this.instance_8.setTransform(35.7,133.5,0.754,0.754);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(1326));

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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[]},1).wait(1326));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.4,15.4,125.6,210.2);


    (lib.JennHeadSmileCOmp = function(mode,startPosition,loop) {
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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},12).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},7).to({state:[]},633).wait(675));

        // Brow
        this.instance_4 = new lib.Brow2();
        this.instance_4.setTransform(17.9,74,1,1,0,0,0,12.3,4.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},12).wait(7).to({_off:false},0).to({_off:true},633).wait(675));

        // brow
        this.instance_5 = new lib.brow1();
        this.instance_5.setTransform(64.3,75.4,1,1,0,0,0,15.1,5.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},12).wait(7).to({_off:false},0).to({_off:true},633).wait(675));

        // Lash
        this.instance_6 = new lib.Lash();
        this.instance_6.setTransform(41.8,96.2,1,1,0,0,0,34,6.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},12).wait(7).to({_off:false},0).to({_off:true},633).wait(675));

        // Слой 7 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");
        var mask_graphics_19 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:14.3,y:53.4}).wait(12).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_graphics_19,x:14.3,y:53.4}).wait(633).to({graphics:null,x:0,y:0}).wait(675));

        // eye
        this.instance_7 = new lib.ClipGroup_2();
        this.instance_7.setTransform(18.2,103,1.323,1.323,0,0,180,6.5,4.5);

        this.instance_7.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},12).wait(7).to({_off:false},0).to({_off:true},633).wait(675));

        // Слой 8 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_0 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");
        var mask_1_graphics_19 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:36.9,y:53.5}).wait(12).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_1_graphics_19,x:36.9,y:53.5}).wait(633).to({graphics:null,x:0,y:0}).wait(675));

        // eye2
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgIAAQAAgCACgDQADgDADAAQADgBADADQADADAAADQAAAIgJABQgHAAgBgJg");
        this.shape_6.setTransform(55.6,103.7,1.323,1.323,0,0,180);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#1C1717").s().p("AgSAWQgJgJgBgMQgBgLAJgJQAIgJAMgBQALAAAJAIQAJAIAAANQABALgJAJQgIAJgMAAIgBABQgKAAgIgIg");
        this.shape_7.setTransform(58.4,101.4,1.323,1.323,0,0,180);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4A3A2E").s().p("AgaAdQgMgLgBgRQAAgPALgMQALgMAQgBQAPgBAMALQANALAAARQABAPgLANQgLAMgRABIgBAAQgOAAgMgLg");
        this.shape_8.setTransform(58.3,101.6,1.323,1.323,0,0,180);

        this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[]},12).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},7).to({state:[]},633).wait(675));

        // Слой 9
        this.instance_8 = new lib.JennLips("single",6);
        this.instance_8.setTransform(37.1,133.9,0.754,0.754);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},12).wait(7).to({_off:false},0).to({_off:true},633).wait(675));

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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[]},12).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},7).to({state:[]},633).wait(675));

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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},19).to({state:[]},40).wait(1268));

        // Brow
        this.instance_4 = new lib.Brow2();
        this.instance_4.setTransform(17.9,74,1,1,0,0,0,12.3,4.5);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({_off:true},40).wait(1268));

        // brow
        this.instance_5 = new lib.brow1();
        this.instance_5.setTransform(64.3,75.4,1,1,0,0,0,15.1,5.5);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({_off:true},40).wait(1268));

        // Lash
        this.instance_6 = new lib.Lash();
        this.instance_6.setTransform(41.8,96.2,1,1,0,0,0,34,6.5);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({_off:true},40).wait(1268));

        // Слой 7 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_19 = new cjs.Graphics().p("AA8ITQgvgJgZgnIgRglQBHgmA5AmQAdATAOAaIgMAZQgQASgeAAQgLAAgNgDg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_graphics_19,x:14.3,y:53.4}).wait(40).to({graphics:null,x:0,y:0}).wait(1268));

        // eye
        this.instance_7 = new lib.ClipGroup_2();
        this.instance_7.setTransform(16.8,101.9,1.323,1.323,0,0,180,6.5,4.5);
        this.instance_7._off = true;

        this.instance_7.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},0).to({_off:true},40).wait(1268));

        // Слой 8 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_19 = new cjs.Graphics().p("ADJIQQgvgLgdgcQBEhVBUgOQBJgMAMAmQAdBehmAVQgTAEgTAAQgYAAgagHg");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_1_graphics_19,x:36.9,y:53.5}).wait(40).to({graphics:null,x:0,y:0}).wait(1268));

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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},19).to({state:[]},40).wait(1268));

        // Слой 9
        this.instance_8 = new lib.JennLips("single",6);
        this.instance_8.setTransform(37.1,133.9,0.754,0.754);
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).to({_off:true},40).wait(1268));

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

        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},19).to({state:[]},40).wait(1268));

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


    (lib.KimHeadsmileeYe = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // morgan
        this.instance = new lib.thgtyh_1("single",15);
        this.instance.setTransform(103.4,89.5,1,1,0,0,0,36.8,7.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(595));

        // Слой 7
        this.instance_1 = new lib._54ggg_1();
        this.instance_1.setTransform(80.8,70.7,1,1,0,0,0,16.9,5.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(595));

        // Слой 6
        this.instance_2 = new lib._5gggt_1();
        this.instance_2.setTransform(131.3,72.8,1,1,0,0,0,12.8,5.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(595));

        // Слой 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AH7HnIgOgaQAQgcAdgTQA8goBLAoIgRAmQgcAogxAKQgOACgMAAQgeAAgQgRg");
        mask.setTransform(67.4,50.5);

        // Слой 4
        this.instance_3 = new lib.ClipGroup_1_1();
        this.instance_3.setTransform(128.4,94.8,1.516,1.516,0,0,0,5.9,4.4);

        this.instance_3.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(595));

        // Слой 3 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        mask_1.graphics.p("AExH1QhqgWAehhQAMgoBNAMQBWAPBHBZQgyAwhHAAQgXAAgagFg");
        mask_1.setTransform(47.6,50.7);

        // Слой 2
        this.instance_4 = new lib.ClipGroup_3();
        this.instance_4.setTransform(84.2,90.7,1.516,1.516,0,0,0,8.3,5.9);

        this.instance_4.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(595));

        // Слой 8
        this.instance_5 = new lib.lipsкопия("single",4);
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


    (lib.KimHeadsmile = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // morgan
        this.instance = new lib.thgtyh_1();
        this.instance.setTransform(103.4,89.5,1,1,0,0,0,36.8,7.8);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(595));

        // Слой 7
        this.instance_1 = new lib._54ggg_1();
        this.instance_1.setTransform(80.8,70.7,1,1,0,0,0,16.9,5.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(595));

        // Слой 6
        this.instance_2 = new lib._5gggt_1();
        this.instance_2.setTransform(131.3,72.8,1,1,0,0,0,12.8,5.3);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(595));

        // Слой 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AH7HnIgOgaQAQgcAdgTQA8goBLAoIgRAmQgcAogxAKQgOACgMAAQgeAAgQgRg");
        mask.setTransform(67.4,50.5);

        // Слой 4
        this.instance_3 = new lib.ClipGroup_1_1();
        this.instance_3.setTransform(128.4,94.8,1.516,1.516,0,0,0,5.9,4.4);

        this.instance_3.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(595));

        // Слой 3 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        mask_1.graphics.p("AExH1QhqgWAehhQAMgoBNAMQBWAPBHBZQgyAwhHAAQgXAAgagFg");
        mask_1.setTransform(47.6,50.7);

        // Слой 2
        this.instance_4 = new lib.ClipGroup_3();
        this.instance_4.setTransform(84.2,90.7,1.516,1.516,0,0,0,8.3,5.9);

        this.instance_4.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(595));

        // Слой 8
        this.instance_5 = new lib.lipsкопия("single",4);
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


    (lib.Анимация19 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#454545").s().p("AgJAPIAAgdIATAAIAAAdg");
        this.shape.setTransform(-44.8,-4.6,1.323,1.323,0,0,180);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#454545").s().p("Ag+AIQAAgJgDgJIgDgHICJAGIAAAdg");
        this.shape_1.setTransform(37,-5,1.323,1.323,0,0,180);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#454545").s().p("AgJAPIAAgdIATAAIAAAdg");
        this.shape_2.setTransform(26.5,-4.6,1.323,1.323,0,0,180);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#454545").s().p("AglAOIAAgbQAcAQAZgFQAOgDAIgIIAAAbg");
        this.shape_3.setTransform(-9.9,-5.9,1.323,1.323,0,0,180);

        this.instance = new lib.Path_0();
        this.instance.setTransform(-1.3,-4.4,1.323,1.323,0,0,180,0.7,2.7);
        this.instance.alpha = 0.602;

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f().s("#454545").ss(2).p("AgMBNIAaAAQAmAAAcgbQAbgcAAglIAAgmQAAgJgHgHQgGgHgKAAIinAAQgJAAgHAHQgHAHAAAJIAAAmQAAAlAbAcQAcAbAnAAg");
        this.shape_4.setTransform(10.3,-0.9,1.323,1.323,0,0,180);

        this.instance_1 = new lib.Path_2_0();
        this.instance_1.setTransform(10.2,-1.1,1.323,1.323,0,0,180,10.6,7.5);
        this.instance_1.alpha = 0.25;

        this.instance_2 = new lib.Path();
        this.instance_2.setTransform(-40.4,-2.7,1.323,1.323,0,0,180,0.6,2.6);
        this.instance_2.alpha = 0.602;

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f().s("#454545").ss(2).p("AgMBNIAaAAQAmAAAcgbQAbgcAAgkIAAgnQAAgKgHgGQgGgHgKAAIinAAQgKAAgGAHQgHAGAAAKIAAAnQAAAkAbAcQAcAbAnAAg");
        this.shape_5.setTransform(-29.2,0.8,1.323,1.323,0,0,180);

        this.instance_3 = new lib.Path_2();
        this.instance_3.setTransform(-29.3,0.6,1.323,1.323,0,0,180,10.8,7.5);
        this.instance_3.alpha = 0.25;

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-46.1,-12.1,92.4,24.2);


    (lib.Scene32_3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // timeline functions:
        this.frame_9 = function() {
            playSound("_11");
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(650));

        // Слой 5 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("EglVAW1QhCAAgvgrQgwgsAAg9MAAAgpCQAAg9AwgrQAvgrBCAAMBKqAAAQBEAAAuArQAwArAAA9MAAAApCQAAA9gwAsQgvArhDAAg");
        mask.setTransform(173.5,5.5);

        // Слой 6
        this.instance = new lib._1();
        this.instance.setTransform(-81.5,-140);

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(659));

        // Слой 2 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        mask_1.graphics.p("EgvuAv5MAAAhfyMBfdAAAMAAABfyg");
        mask_1.setTransform(173.9,72.7);

        // Режим изоляции
        this.instance_1 = new lib.rtgretgretg45g345g();
        this.instance_1.setTransform(342,-39.7,1,1,0,0,0,664.8,653.9);

        this.instance_1.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(659));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-129.4,-233.9,608.8,613.2);


    (lib.JennScene4_6 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Слой 8
        this.instance = new lib.t5yhtyh();
        this.instance.setTransform(-90.1,363.3,1,1,0,0,0,124.9,85.5);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).wait(623));

        // Каркас_11 - копия
        this.ikNode_120 = new lib.erervev();
        this.ikNode_120.setTransform(89.3,353.9,1.42,1.42,0,-20.9,159.1,13.3,34.6);

        this.ikNode_119 = new lib.rtvgretvrevкопия();
        this.ikNode_119.setTransform(132.5,260.5,1.42,1.42,0,-41.1,138.9,-2.7,25.9);

        this.ikNode_121 = new lib.rtvevetrvкопия1();
        this.ikNode_121.setTransform(-42.7,363.4,1.419,1.419,0,-30.1,149.9,6.8,26.6);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_121,p:{regX:6.8,x:-42.7,y:363.4,skewX:-30.1,skewY:149.9,regY:26.6}},{t:this.ikNode_119,p:{skewX:-41.1,skewY:138.9,x:132.5,y:260.5,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-20.9,skewY:159.1,x:89.3,y:353.9,regX:13.3,regY:34.6}}]}).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:-38.2,y:363.7,skewX:-30.1,skewY:149.9,regY:26.6}},{t:this.ikNode_119,p:{skewX:-41.6,skewY:138.4,x:135.8,y:260.5,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-21,skewY:159,x:93.6,y:354.3,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:-33.9,y:364.2,skewX:-30.2,skewY:149.8,regY:26.6}},{t:this.ikNode_119,p:{skewX:-42.2,skewY:137.8,x:139.2,y:260.4,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-21,skewY:159,x:97.8,y:354.7,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:-29.6,y:364.7,skewX:-30.2,skewY:149.8,regY:26.6}},{t:this.ikNode_119,p:{skewX:-42.8,skewY:137.2,x:142.6,y:260.5,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-21,skewY:159,x:102.1,y:355.1,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:-25.3,y:365.1,skewX:-30.2,skewY:149.8,regY:26.6}},{t:this.ikNode_119,p:{skewX:-43.3,skewY:136.7,x:146,y:260.5,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-21,skewY:159,x:106.5,y:355.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:-21,y:365.6,skewX:-30.2,skewY:149.8,regY:26.6}},{t:this.ikNode_119,p:{skewX:-43.9,skewY:136.1,x:149.4,y:260.5,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-21,skewY:159,x:110.8,y:356,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:-16.6,y:365.9,skewX:-30.2,skewY:149.8,regY:26.6}},{t:this.ikNode_119,p:{skewX:-44.5,skewY:135.5,x:152.8,y:260.5,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-21.1,skewY:158.9,x:115.1,y:356.4,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:-12.3,y:366.3,skewX:-30.2,skewY:149.8,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45,skewY:135,x:156.1,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-21.1,skewY:158.9,x:119.4,y:356.8,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:-8,y:366.8,skewX:-30.3,skewY:149.7,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.6,skewY:134.4,x:159.6,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-21.1,skewY:158.9,x:123.8,y:357.2,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:-3.7,y:367.2,skewX:-30.3,skewY:149.7,regY:26.6}},{t:this.ikNode_119,p:{skewX:-46.2,skewY:133.8,x:162.9,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-21.1,skewY:158.9,x:128.1,y:357.5,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:0.6,y:367.6,skewX:-30.3,skewY:149.7,regY:26.6}},{t:this.ikNode_119,p:{skewX:-46.7,skewY:133.3,x:166.4,y:260.4,regX:-2.8}},{t:this.ikNode_120,p:{skewX:-21.1,skewY:158.9,x:132.4,y:357.8,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:4.9,y:368,skewX:-30.3,skewY:149.7,regY:26.6}},{t:this.ikNode_119,p:{skewX:-47.3,skewY:132.7,x:169.7,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-21.2,skewY:158.8,x:136.7,y:358.2,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:9.2,y:368.3,skewX:-30.3,skewY:149.7,regY:26.6}},{t:this.ikNode_119,p:{skewX:-47.9,skewY:132.1,x:173,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-21.2,skewY:158.8,x:141.1,y:358.5,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:9.2,y:368.3,skewX:-30.3,skewY:149.7,regY:26.6}},{t:this.ikNode_119,p:{skewX:-47.9,skewY:132.1,x:173,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-21.2,skewY:158.8,x:141.1,y:358.5,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:9.3,y:368.3,skewX:-30.3,skewY:149.7,regY:26.6}},{t:this.ikNode_119,p:{skewX:-47.9,skewY:132.1,x:173,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-21.2,skewY:158.8,x:141.1,y:358.5,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:9.3,y:368.3,skewX:-30.3,skewY:149.7,regY:26.6}},{t:this.ikNode_119,p:{skewX:-47.9,skewY:132.1,x:173,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-21.2,skewY:158.8,x:141.1,y:358.5,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:9.3,y:368.3,skewX:-30.3,skewY:149.7,regY:26.6}},{t:this.ikNode_119,p:{skewX:-47.9,skewY:132.1,x:173,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-21.2,skewY:158.8,x:141.1,y:358.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:14,y:371.9,skewX:-31.3,skewY:148.7,regY:26.6}},{t:this.ikNode_119,p:{skewX:-50.5,skewY:129.5,x:173.1,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-22.2,skewY:157.8,x:145.6,y:360,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.8,x:18.7,y:375.5,skewX:-32.3,skewY:147.7,regY:26.6}},{t:this.ikNode_119,p:{skewX:-53.1,skewY:126.9,x:173,y:260.7,regX:-2.6}},{t:this.ikNode_120,p:{skewX:-23.2,skewY:156.8,x:150.2,y:361.1,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.8,x:23.6,y:378.8,skewX:-33.3,skewY:146.7,regY:26.6}},{t:this.ikNode_119,p:{skewX:-55.8,skewY:124.2,x:173,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-24.2,skewY:155.8,x:154.9,y:362,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:28.7,y:381.7,skewX:-34.3,skewY:145.7,regY:26.6}},{t:this.ikNode_119,p:{skewX:-58.4,skewY:121.6,x:173.1,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-25.2,skewY:154.8,x:159.4,y:362.8,regX:13.4,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:33.8,y:384.4,skewX:-35.3,skewY:144.7,regY:26.6}},{t:this.ikNode_119,p:{skewX:-61,skewY:119,x:173.1,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.2,skewY:153.8,x:164.2,y:363.3,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:38.9,y:387.1,skewX:-36.4,skewY:143.6,regY:26.6}},{t:this.ikNode_119,p:{skewX:-63.7,skewY:116.3,x:173,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-27.2,skewY:152.8,x:168.9,y:363.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:33.6,y:386.6,skewX:-36.3,skewY:143.7,regY:26.6}},{t:this.ikNode_119,p:{skewX:-60.7,skewY:119.3,x:173.1,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-27.1,skewY:152.9,x:163.7,y:363.1,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:28.3,y:385.7,skewX:-36.2,skewY:143.8,regY:26.6}},{t:this.ikNode_119,p:{skewX:-57.8,skewY:122.2,x:173,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-27,skewY:153,x:158.4,y:362.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.8,x:22.9,y:384.8,skewX:-36.1,skewY:143.9,regY:26.6}},{t:this.ikNode_119,p:{skewX:-54.8,skewY:125.2,x:173,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-27,skewY:153,x:153.1,y:361.7,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:17.8,y:383.3,skewX:-36.1,skewY:143.9,regY:26.6}},{t:this.ikNode_119,p:{skewX:-51.8,skewY:128.2,x:173,y:260.8,regX:-2.6}},{t:this.ikNode_120,p:{skewX:-26.9,skewY:153.1,x:148,y:360.5,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:12.7,y:381.8,skewX:-36,skewY:144,regY:26.6}},{t:this.ikNode_119,p:{skewX:-48.9,skewY:131.1,x:173,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:143,y:359.1,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.6,y:379.9,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.4,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:5.6,y:384.4,skewX:-38.5,skewY:141.5,regY:26.6}},{t:this.ikNode_119,p:{skewX:-44,skewY:136,x:173,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-29.3,skewY:150.7,x:134.7,y:356.3,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:3.9,y:388.9,skewX:-41,skewY:139,regY:26.6}},{t:this.ikNode_119,p:{skewX:-42.2,skewY:137.8,x:173.1,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-31.9,skewY:148.1,x:131.6,y:354.9,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:2.4,y:393.1,skewX:-43.6,skewY:136.4,regY:26.6}},{t:this.ikNode_119,p:{skewX:-40.3,skewY:139.7,x:173.2,y:260.5,regX:-2.8}},{t:this.ikNode_120,p:{skewX:-34.4,skewY:145.6,x:128.3,y:353.4,regX:13.3,regY:34.5}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:4,y:388.9,skewX:-41,skewY:139,regY:26.6}},{t:this.ikNode_119,p:{skewX:-42.2,skewY:137.8,x:173.1,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-31.9,skewY:148.1,x:131.6,y:354.9,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:5.6,y:384.4,skewX:-38.5,skewY:141.5,regY:26.6}},{t:this.ikNode_119,p:{skewX:-44,skewY:136,x:173,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-29.3,skewY:150.7,x:134.7,y:356.3,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.6,y:379.9,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.9,y:357.5,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:5.6,y:384.5,skewX:-38.5,skewY:141.5,regY:26.6}},{t:this.ikNode_119,p:{skewX:-44,skewY:136,x:173,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-29.3,skewY:150.7,x:134.7,y:356.2,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:3.9,y:388.9,skewX:-41.1,skewY:138.9,regY:26.6}},{t:this.ikNode_119,p:{skewX:-42.1,skewY:137.9,x:173.1,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-31.9,skewY:148.1,x:131.3,y:354.9,regX:13.4,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:2.3,y:393,skewX:-43.6,skewY:136.4,regY:26.5}},{t:this.ikNode_119,p:{skewX:-40.2,skewY:139.8,x:173.1,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-34.5,skewY:145.5,x:128.3,y:353.5,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:3.9,y:388.9,skewX:-41.1,skewY:138.9,regY:26.6}},{t:this.ikNode_119,p:{skewX:-42.1,skewY:137.9,x:173.1,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-31.9,skewY:148.1,x:131.3,y:354.9,regX:13.4,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:5.6,y:384.5,skewX:-38.5,skewY:141.5,regY:26.6}},{t:this.ikNode_119,p:{skewX:-44,skewY:136,x:173,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-29.3,skewY:150.7,x:134.7,y:356.2,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.6,y:379.9,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.9,y:357.5,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.6,y:379.8,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.5,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.6,y:379.7,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.5,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:5.6,y:384.4,skewX:-38.5,skewY:141.5,regY:26.6}},{t:this.ikNode_119,p:{skewX:-44,skewY:136,x:173,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-29.3,skewY:150.7,x:134.6,y:356.2,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:3.9,y:388.9,skewX:-41.1,skewY:138.9,regY:26.6}},{t:this.ikNode_119,p:{skewX:-42.1,skewY:137.9,x:173.1,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-31.9,skewY:148.1,x:131.3,y:355,regX:13.4,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:2.3,y:393,skewX:-43.6,skewY:136.4,regY:26.5}},{t:this.ikNode_119,p:{skewX:-40.2,skewY:139.8,x:173.1,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-34.5,skewY:145.5,x:128.3,y:353.5,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:3.9,y:388.9,skewX:-41.1,skewY:138.9,regY:26.6}},{t:this.ikNode_119,p:{skewX:-42.1,skewY:137.9,x:173.1,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-31.9,skewY:148.1,x:131.3,y:355,regX:13.4,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:5.6,y:384.4,skewX:-38.5,skewY:141.5,regY:26.6}},{t:this.ikNode_119,p:{skewX:-44,skewY:136,x:173,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-29.3,skewY:150.7,x:134.6,y:356.2,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.6,y:379.7,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.5,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.6,y:379.7,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.5,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.6,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:4.7,y:386.6,skewX:-39.8,skewY:140.2,regY:26.6}},{t:this.ikNode_119,p:{skewX:-43.1,skewY:136.9,x:173.1,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-30.6,skewY:149.4,x:133,y:355.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:2.3,y:393,skewX:-43.6,skewY:136.4,regY:26.5}},{t:this.ikNode_119,p:{skewX:-40.2,skewY:139.8,x:173.1,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-34.5,skewY:145.5,x:128.3,y:353.5,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:4.7,y:386.6,skewX:-39.8,skewY:140.2,regY:26.6}},{t:this.ikNode_119,p:{skewX:-43.1,skewY:136.9,x:173.1,y:260.6,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-30.6,skewY:149.4,x:133,y:355.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:this.ikNode_121,p:{regX:6.7,x:7.7,y:379.6,skewX:-35.9,skewY:144.1,regY:26.6}},{t:this.ikNode_119,p:{skewX:-45.9,skewY:134.1,x:173.1,y:260.7,regX:-2.7}},{t:this.ikNode_120,p:{skewX:-26.8,skewY:153.2,x:137.8,y:357.6,regX:13.3,regY:34.6}}]},1).to({state:[{t:thi