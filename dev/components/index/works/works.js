import $ from 'jquery';

$(function () {
	$('.js-flip').on('click', function () {
		$(this).siblings().removeClass('flipped');
		$(this).toggleClass('flipped');
	});
});
