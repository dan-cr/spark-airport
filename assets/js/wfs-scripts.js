window.onload = function() {

	// DOM Element Handles
	var dropdownToggle 	= el("#dropdown-menu-toggle"),
		dropdownMenu 	= el("#dropdown-menu"),
		helpModal 		= el("#help-modal"),
		termsModal 		= el("#terms-modal"),
		helpBtnToggle 	= el("#wifi-help"),
		menuHelpToggle 	= el("#menu-help-toggle"),
		menuTermsToggle = el("#menu-terms-toggle"),
		termsLink  		= el('#terms-modal-link'),
		helpExitBtn 	= el("#help-modal-closebtn"),
		termsExitBtn 	= el("#terms-modal-closebtn");
	
	// Validator settings
	var validator = new Wfs_Validator('wifi-registration', [
		{
			fieldName: 'firstName',
			fieldRules: 'required|alpha_numeric|min_length[3]|max_length[24]'
		},
		{
			fieldName: 'lastName',
			fieldRules: 'required|alpha_numeric|min_length[3]|max_length[24]'
		},
		{
			fieldName: 'emailAddress',
			fieldRules: 'valid_email'
		},
		{   fieldName: 'terms',
			fieldRules: 'required'
		}
	]);

	// Toggles dropdown menu
	dropdownToggle.addEventListener('click', function() {
		dropdownMenu.classList.toggle('animate');
	});

	document.addEventListener('click', function(e) {

		// Display modal if selected target is clicked
		if (event.target === helpBtnToggle || event.target === menuHelpToggle) {
			e.preventDefault();
			helpModal.style.display = "flex";
			dropdownMenu.classList.remove('animate');
		} else if (event.target === menuTermsToggle || event.target === termsLink) {
			e.preventDefault();
			termsModal.style.display = "flex";
			dropdownMenu.classList.remove('animate');
		}

		// Close modal when clicking in outer area
		if (event.target === helpModal || event.target === termsModal) {
			event.target.style.display = "none";
		}
		
	});

	// Close help modal when user clicks exit button
	helpExitBtn.addEventListener('click', function() {
		helpModal.style.display = "none";
	});

	// Close terms modal when user clicks exit button
	termsExitBtn.addEventListener('click', function() {
		termsModal.style.display = "none";
	});

	// Shorter query selector method
	function el(selector) {
		return document.querySelector(selector);
	}
	
};