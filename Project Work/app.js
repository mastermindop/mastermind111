function spiltScroll(){
	const controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		duration: '16605px' ,
		triggerElement:'.toc',
		triggerHook: 0
	})
	.setPin('.toc')
	.addTo(controller);
}
spiltScroll();

