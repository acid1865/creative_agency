import $ from 'jquery';


$(document).ready(function() {
	$(window).scrollTop() > 10 ? $('.header').addClass('fixed') : $('.header').removeClass('fixed');

	$(window).on('scroll', () => {
		$(window).scrollTop() > 10 ? $('.header').addClass('fixed') : $('.header').removeClass('fixed');
	});

	// Cookies (Local storage - for an easier using for presentation ⛳)

	if (localStorage.getItem('visited') && localStorage.getItem('visited') == 'true') {
		$('allow-cookies').remove();
	} else {
		$('.allow-cookies').addClass('never-visited');
		$('.js-accept-cookies').on('click', function() {
			$(this).parents('.allow-cookies').eq(0).removeClass('never-visited');
			localStorage.setItem('visited', 'true');
	
			setTimeout(() => {
				$(this).parents('.allow-cookies').eq(0).remove();
			}, 1000);
		});
	}

	$('.burger').on('click', function() {
		$(this).toggleClass('is-active');
		$('.header__nav').fadeToggle(300);
		$('body').toggleClass('overflow');
	});
});	
