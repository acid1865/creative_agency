import $ from 'jquery';

$(function () {
	let correctTitle,
		correctName,
		correctEmail,
		correctComment;

	function validEmail(email) {
		let testEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return testEmail.test(email);
	}

	$('.form__field').each(function () {
		$(this).on('blur', function () {
			if ($(this).val() == '') {
				$(this).addClass('error');
			}
		})
	});

	// Title validation
	$('.js-title').on('input', function () {
		$(this).removeClass('error').val($(this).val().replace(/[^a-zA-Zа-яА-ЯёЁ\s\-]/ig, ''))
	});
	$('.js-title').on('change', function () {
		$(this).val() == '' ? correctTitle = false : correctTitle = true;
	});

	// Name validation
	$('.js-name').on('input', function () {
		$(this).removeClass('error');
	});
	$('.js-name').on('change', function () {
		$(this).val() == '' ? correctName = false : correctName = true;
	});

	// Email
	$('.js-email').on('input', function () {
		validEmail($(this).val()) ? correctEmail = true : correctEmail = false;
	});
	$('.js-email').on('change', function () {
		validEmail($(this).val()) ? $(this).removeClass('error') : $(this).addClass('error');
	});

	// Comment
	$('.js-comment').on('input', function () {
		$(this).removeClass('error').val($(this).val().replace(/[^a-zA-Zа-яА-ЯёЁ\s\-]/ig, ''));
	});
	$('.js-comment').on('change', function () {
		$(this).val() == '' ? correctComment = false : correctComment = true;
	});



	// Submit
	$('.js-contact-form').on('submit', function (e) {
		e.preventDefault();

		if (correctTitle && correctName && correctEmail && correctComment) {
			$('.js-submit-button').addClass('success-form').text('Success');

			setTimeout(() => {
				$('#contacts-form')[0].reset();
				correctTitle = correctName = correctEmail = correctComment = '';
				$('.js-submit-button').removeClass('success-form').text('Send message');
			}, 1500);
		} else {
			correctTitle ? $('.js-title').removeClass('error') : $('.js-title').addClass('error');
			correctName ? $('.js-name').removeClass('error') : $('.js-name').addClass('error');
			correctEmail ? $('.js-email').removeClass('error') : $('.js-email').addClass('error');
			correctComment ? $('.js-comment').removeClass('error') : $('.js-comment').addClass('error');
		}
	});
});
