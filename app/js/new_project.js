var newProject = function() {

	var init = function() {
		_setUpListners();
	};

	var _setUpListners = function() {
		$('#project-new-link').on('click', _showModal);
		console.log('sdf');
	};

	var _showModal = function(ev) {
		ev.preventDefault();
		console.log('asdasd');
		$('#popup-new-project').bPopup();
	};

	return {
		init: init
	};

}();

newProject.init();