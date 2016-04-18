var config = require('./config');

module.exports = function (gapi) {
        console.log("INFO: authorizing with google...");
        gapi.auth.authorize({
                client_id: config.gapi.clientId,
                scope:     config.gapi.scopes,
                immediate: false
        },
        function(auth_result) {
                // TODO - auth result was fail, auth button retry checkAuth with immediate: false
                console.log(auth_result);
        });
};
