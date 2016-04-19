var config = require('./config');
var authButton = require('../html/authButton.html');
var $ = require('jquery-browserify');

function authorize(gapi, opts) {
	options = opts !== undefined ? opts : {};
	immediate = options.immediate !== undefined ? options.immediate : false;

        console.log("INFO: authorizing with google...");

	params = {
                client_id: config.gapi.clientId,
                scope:     config.gapi.scopes,
                immediate: immediate
	};

        gapi.auth.authorize(params, processAuthResult);
}

function authorizeClicked() {
	authorize(gapi, {immediate: false});
}

function processAuthResult(authResult) {
	var button = $('#fit-hr-zones-auth');

	if(authResult.status.signed_in) {
		console.log('disabling login button');
		button.prop('disabled', true);
		button.html('Logged in');
	} else {
		console.log('enabling login button');
		button.prop('disabled', false);
		button.html('Authorize');
	}
}

module.exports = function (gapi) {
	$('header').append(authButton);
	var button = $('#fit-hr-zones-auth');
	button.click(authorizeClicked);

	authorize(gapi, {immediate: true});
};
