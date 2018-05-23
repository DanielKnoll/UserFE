apiData = {

    data: {
        serverAddress: "http://localhost:8080"
    },

    postLoginData: function (name, pswd) {
        $.jpost(apiData.data.serverAddress + "/api/login/",
            {
                userName: name,
                userPassword: pswd,
            }
        ).done(function( response ) {
            if(response === 'Logged in') {
                dom.utility.logInSuccess(name);
            }
        });
    },

    logOutFromServer: function () {
        $.get(apiData.data.serverAddress + "/api/logout", function ( response ) {
            if(response === 'User logged out.') {
                dom.utility.logOutSuccess();
            }
        });
    },
};

$.extend({
    jpost: function(url, body) {
        return $.ajax({
            type: 'POST',
            url: url,
            data: JSON.stringify(body),
            contentType: 'application/json',
        });
    }
});