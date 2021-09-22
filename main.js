

	$(window).on('load resize', function(){
		let windowSize = $(window).width();
		let windowHeight = $(window).height();
		
		mainSectionChangeValue(windowSize);
		aboutMixerChangeValue(windowSize);
		aboutMixer__forArrow(windowHeight);

		
	});


function mainSectionChangeValue(windowWidth){
	let knowMoreLink = $('.know-more-link','.buttons-wrap');

	if (windowWidth < 767)
	{
		knowMoreLink.html("Подробнее");	
	} else {
		knowMoreLink.html('Узнать больше');
	}
};
function aboutMixerChangeValue(windowWidth){
	let featureName = $('.aboutBlock:last-child','.aboutBlock-wrap').find('.feature-name');
	let featureDescription = $('.aboutBlock','.aboutBlock-wrap').find('.feature-description');

	if (windowWidth < 767)
	{
		featureName.html("Экологичный");	
		featureDescription.html('Пластиковый размешиватель Nevelvend для холодных и горячих напитков вы можете,	выбрав тип и количество коробок ниже');
	} else {
		featureName.html('От производителя');
		featureDescription.html('Одноразовый пластиковый размешиватель Nevelvend для холодных и горячих напитков вы можете,	выбрав тип и количество коробок ниже');
	}
};
function aboutMixer__forArrow(windowHeight) {
	let arrow = $('.ellipseBlock', '.ellipses-wrap').find('img','.arrow');

	(windowHeight < 670)					   ?  arrow.attr('src', 'img/aboutMixer/Arrow_short.svg') :
	(windowHeight > 670 && windowHeight < 720) ?  arrow.attr('src', 'img/aboutMixer/Arrow_large.svg') :
												  arrow.attr('src', 'img/aboutMixer/Arrow_xl.svg');

};
// console.log(lottie);

// const anim = lottie;

// anim.loadAnimation({
// 	container: document.getElementById('animation-div'),
// 	renderer: 'svg',
// 	loop: true,
// 	autoplay: false,
// 	path: 'js/MixerAnimation/MixerSequence.json',
// });

// $('.body').on('scroll', function(playAnimation){
// 	anim.play();
// });



// let theWindow = $(window);
// let winHeight = theWindow.height();
// let animDuration = winHeight * 4;
// let rotating = {
// 	container: document.getElementById('animation-div'),
// 	renderer: 'svg',
// 	loop: true,
// 	autoplay: false,
// 	path: 'js/MixerAnimation/MixerSequence.json',
// };

// var anim = bodymovin.loadAnimation(rotating);

// $(window).on('scroll', function(){
// 	animatebodymovin(animDuration, anim);
// });

// function animatebodymovin(duration, animObject){
// 	let scrollPosition = theWindow.scrollTop();
// 	let maxFrames = animObject.totalFrames;
// 	let frame = (maxFrames / 80) * (scrollPosition / (duration / 100));

// 	animObject.goToAndStop(frame, true);
// }