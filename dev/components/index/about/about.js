import {
	Swiper,
	Navigation,
	Pagination,
	Scrollbar,
	EffectCoverflow
} from 'swiper';
import $ from 'jquery';

Swiper.use([Navigation, Pagination, Scrollbar, EffectCoverflow]);

$(document).ready(function () {
	let aboutSlider = new Swiper('.js-about-swiper', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		preloadImages: true,
		allowTouchMove: true,
		centeredSlides: false,
		observer: true,
		observeParents: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		noSwiping: false,
		navigation: {
			nextEl: '.js-about-swiper .swiper-next',
			prevEl: '.js-about-swiper .swiper-prev',
		},
		pagination: {
			el: '.js-about-swiper .swiper-pagination',
			clickable: true
		},
		breakpoints: {
			375: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 1.2,
				spaceBetween: 25,
				centeredSlides: true
			},
			1024: {
				slidesPerView: 1.5,
				spaceBetween: 30,
				centeredSlides: true
			},
			1280: {
				slidesPerView: "auto",
				spaceBetween: 20,
				centeredSlides: true
			}
		}
	});
});
