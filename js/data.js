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
            dom.utility.logInRegFailed(xhr.responseText);
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
        }).fail(function(xhr) {
            dom.utility.logInRegFailed(xhr.responseText);
        });
    },

    logOutFromServer: function () {
        $.get(apiData.data.serverAddress + "/api/logout", function ( response ) {
            if(response === 'User logged out.') {
                dom.utility.logOutSuccess();
            }
        });
    },

    getUserData: function () {
        $.getJSON(apiData.data.serverAddress + "/api/users", function (userData) {
            dom.dataFunctions.saveUserData(userData);
            dom.utility.renderUserData();
        });
    },

    postUserData: function(name, email, pswd) {
        $.jpost(apiData.data.serverAddress + "/api/adduser/",
            {
                userName: name,
                userEmail: email,
                userPassword: pswd,
            }
        ).done(function( response ) {
            if (response === "User added.") {
                apiData.getUserData();
                $("#addUserModal").trigger({type: "click"});  // Modal close
            }
        }).fail(function(xhr) {
            dom.utility.logInRegFailed(xhr.responseText);
        });
    }
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

$.extend({
    jput: function(url, body) {
        return $.ajax({
            type: 'PUT',
            url: url,
            data: JSON.stringify(body),
            contentType: 'application/json',
        });
    }
});