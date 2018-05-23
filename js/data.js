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
            if (response === "Logged in") {
                dom.utility.logInSuccess(name);
                $("#loginModal").trigger({type: "click"});  // Modal close
            }
        }).fail(function(xhr) {
            console.log(xhr);
            dom.utility.logInFailed(xhr.responseText);
        });
    },

    postRegData: function (name, email, pswd) {
        $.jpost(apiData.data.serverAddress + "/api/registration/",
            {
                userName: name,
                userEmail: email,
                userPassword: pswd,
            }
        ).done(function( response ) {
            if (response === "Registration successful") {
                dom.utility.logInSuccess(name);
                $("#regModal").trigger({type: "click"});  // Modal close
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