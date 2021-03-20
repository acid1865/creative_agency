import $ from 'jquery';

$(function () {
	function isInViewport(node) {
		let rect = node.getBoundingClientRect()
		return (
			(rect.height > 0 || rect.width > 0) &&
			rect.bottom >= 0 &&
			rect.right >= 0 &&
			rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.left <= (window.innerWidth || document.documentElement.clientWidth)
		)
	}

	function setParallax() {
		let scrolled = $(window).scrollTop()
		$('.parallax-image').each(function () {
			let initY = $(this).offset().top
			let height = $(this).height()
			let endY = initY + $(this).height()
			let visible = isInViewport(this)

			if (visible) {
				let diff = scrolled - initY
				let ratio = Math.round((diff / height) * 100)
				$(this).css('background-position', 'center ' + parseInt((ratio * 0.8)) + 'px')
			}
		})
	}
	setParallax();
	$(window).scroll(setParallax);
});
