var feedback = function() {

	var init = function() {
		_setUpListners();
		jQuery('input[placeholder], textarea[placeholder]').placeholder();
	};

	var _setUpListners = function() {
		$('#feedback-form').on('submit', _addProject);
	};

	var _showModal = function(ev) {
		ev.preventDefault();
		$('#popup-new-project').bPopup();
	};

	var _addProject = function(ev) {
		ev.preventDefault();

		var form = $(this);
		

		validation.validateForm(form);
	};

	var _aaa = function() {
		console.log('aaa');
	};

	return {
		init: init
	};

}();

feedback.init();