var newProject = function() {

	var init = function() {
		_setUpListners();
		jQuery('input[placeholder], textarea[placeholder]').placeholder();
	};

	var _setUpListners = function() {
		$('#project-new-link').on('click', _showModal);
		$('#new-project-form').on('submit', _addProject);
	};

	var _showModal = function(ev) {
		ev.preventDefault();
		$('#popup-new-project').bPopup({
			onClose: function() {$('#new-project-form').trigger('reset');}
		});
	};

	var _addProject = function(ev) {
		ev.preventDefault();

		var form = $(this);
		

		validation.validateForm(form);
	};

	var _aaa = function(ev) {
		console.log('aaa');
	};

	return {
		init: init
	};

}();

newProject.init();