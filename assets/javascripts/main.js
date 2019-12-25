var controller = new ScrollMagic.Controller();

	var scene1 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",duration: "90%"})
			.setTween(".sun", 2,{scale: 0})
			.addTo(controller);


	var scene2 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",duration: "80%"})
			.setTween(".cloud", 2,{scale: 0}, 1)
			.addTo(controller);

	var tween3 = TweenMax.to(".main", 1, {backgroundColor: "rgb(15, 6, 37)"});
	var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 200, offset: 75})
	.setTween(tween3)
	.addTo(controller);

	var scene4 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",duration: '100%'})
			.setTween(".text-marry", 0.5, {scale: 0}) // trigger a TweenMax.to tween
			.addTo(controller);
	var scenee1 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",duration: '100%'})
			.setTween(".content-merry", 0.5, {x: "70%", y: "-100%",scale: 0}) // trigger a TweenMax.to tween
			.addTo(controller);

	var scenee2 = new ScrollMagic.Scene({
				triggerElement: "#trigger2"})
			.setTween(".star-container", 0.5, {opacity: 1}) // trigger a TweenMax.to tween
			.addTo(controller);

	var scene5 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",duration: 500})
			.setTween(".main-right", 2,{x: "100%"})
			.addTo(controller);
	var scene5 = new ScrollMagic.Scene({
				triggerElement: "#trigger1",duration: 500})
			.setTween(".main-left", 2,{x: "-100%"})
			.addTo(controller);
	var scene7 = new ScrollMagic.Scene({
				triggerElement: "#trigger2",duration: 200})
			.setTween(".main-footer", 2,{scale: 1})
			.addTo(controller);

	var tween8 = TweenMax.fromTo(".moon", 1, {y: 200}, {y: 0});
	var scene8 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 200, offset: 75})
	.setTween(tween8)
	.addTo(controller);

	var tween9 = TweenMax.fromTo(".santa", 1, {x: 1000}, {x: 0});
	var scene9 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 200, offset: 75})
	.setTween(tween9)
	.addTo(controller);





var tl = gsap.timeline();

tl.fromTo(".load-logo",2,{scale: 1, opacity: 1},{scale: 20, opacity: 0,ease: "circ"});
tl.fromTo(".main",0.1,{opacity: 0},{opacity: 1,ease: "circ"});
tl.fromTo(".logo",0.3,{opacity: 0, y: "-100%"},{opacity: 1, y: 0,ease: "circ"});


tl.fromTo(".content-merry",1,{scale: 50, opacity: 0, x: "50%", y: "50%"},{scale: 1, opacity: 1, x: 0, y: 0,ease: "circ"});

tl.fromTo(".main-right",1,{scale: 0, opacity: 0, x: 1000},{scale: 1, opacity: 1, x: 0,ease: "circ"});
tl.fromTo(".main-left",1,{scale: 0, opacity: 0, x: -1000},{scale: 1, opacity: 1, x: 0,ease: "circ"}, 2);


tl.fromTo("#home-2",0.3,{scale: 0, opacity: 0},{scale: 1, opacity: 1,ease: "back"});
tl.fromTo("#home-1",0.3,{scale: 0, opacity: 0},{scale: 1, opacity: 1,ease: "back"});
tl.fromTo("#home-3",0.3,{scale: 0, opacity: 0},{scale: 1, opacity: 1,ease: "back"});

tl.fromTo(".tree",0.3,{scale: 0, opacity: 0},{scale: 1, opacity: 1,ease: "back"}, 4);

tl.fromTo("#christmas-tree",0.5,{scale: 0, opacity: 0},{scale: 1, opacity: 1,ease: "back"});

tl.fromTo(".user-main-right1",0.25,{scale: 0, opacity: 0},{scale: 1, opacity: 1,ease: "back"});
tl.fromTo(".user-main-right2",0.25,{scale: 0, opacity: 0},{scale: 1, opacity: 1,ease: "back"});
tl.fromTo(".user-main-right3",0.25,{scale: 0, opacity: 0},{scale: 1, opacity: 1,ease: "back"});
tl.fromTo(".user-main-right4",0.25,{scale: 0, opacity: 0},{scale: 1, opacity: 1,ease: "back"});
tl.fromTo(".user-main-right5",0.25,{scale: 0, opacity: 0},{scale: 1, opacity: 1,ease: "back"});
tl.fromTo(".user-main-right6",0.25,{scale: 0, opacity: 0},{scale: 1, opacity: 1,ease: "back"});
tl.fromTo(".user-main-right7",0.25,{scale: 0, opacity: 0},{scale: 1, opacity: 1,ease: "back"});



tl.from("#Layer-9",{scale: 0, opacity: 0},4.2);
tl.to("#Layer-9",0.5,{scale: 1, opacity: 1,ease: "back"});

tl.to(".dau-huou", 0.5, {rotate: 15,transformOrigin:"center",yoyo: true,ease: Power0.easeNone,  repeat:-1}, 4.8);

tl.from("#Layer-8", 0.5,{scale: 0, opacity: 0}, 4.5);
tl.to("#Layer-8", 0.5, {scale: 1,opacity: 1,y: 15,yoyo: true,ease: Power0.easeNone,  repeat:-1});
tl.to(".tay-nguoi-tuyet-1", 0.5, {rotate: 15,transformOrigin:"right",yoyo: true,ease: Power0.easeNone,  repeat:-1}, 4.5);
tl.to(".tay-nguoi-tuyet-2", 0.5, {rotate: 5,transformOrigin:"left",yoyo: true,ease: Power0.easeNone,  repeat:-1}, 4.5);