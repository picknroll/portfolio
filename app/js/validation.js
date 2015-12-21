var validation = function() {

	var init = function() {
		_setUpListners();
	};

	var _setUpListners = function() {
		$('form').on('keydown', '.has-error', _removeError);
		$('form').on('reset', clearForm);
	};

	var _removeError = function() {
		$(this).removeClass('has-error');
	};

	var clearForm = function(form) {
		var form = $(this);
		form.find('input, textarea').trigger('hideTooltip');
		form.find('.has-error').removeClass('has-error');
	};

	var _createQtip = function(el, pos) {
		if (pos === 'right') {
			pos = {
				my: 'left center',
				at: 'right center'
			}
		} else {
			pos = {
				my: 'right center',
				at: 'left center',
				adjust: {
					method: 'shift none'
				}
			}
		}

		el.qtip({
			content: {
				text: function() {
					return $(this).attr('qtip-content');
				}
			},
			show: {
				event: 'show'
			},
			hide: {
				event: 'keydown hideTooltip'
			},
			position: pos,
			style: {
				classes: 'qtip-red qtip-rounded',
				tip: {
					height: 10,
					width: 16
				}
			}
		}).trigger('show')
	};

	var validateForm = function(form) {
		var elements = form.find('input, textarea').not('input[type="hidden"]');

		$.each(elements, function(index, val) {
			var element = $(val),
				val = element.val(),
				pos = element.attr('qtip-position');

			if (val.length === 0) {
				element.addClass('has-error');
				if (element.hasClass('file-input')) {
					$('#fake-input').addClass('has-error');
				};
				_createQtip(element, pos);
			}
		});
	};

	return {
		init: init,
		validateForm: validateForm,
		clearForm: clearForm
	};

}();

validation.init();