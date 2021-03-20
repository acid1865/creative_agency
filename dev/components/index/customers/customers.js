import $ from 'jquery';
import Swiper from 'swiper';

$(function () {
	let customersSlider = new Swiper('.js-customers-slider', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		preloadImages: true,
		observer: true,
		observeParents: true,
		allowTouchMove: true,
		centeredSlides: false,
		noSwiping: false,
		navigation: {
			nextEl: '.customers__next',
			prevEl: '.customers__prev',
		},
		pagination: {
			el: '.customers__pagination',
			clickable: true
		}
	});
});
