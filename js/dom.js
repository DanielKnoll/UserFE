dom = {
    data: {
        userName: '',
        isLoggedIn: false
    },

    initFunctions: {
        loadElements: function() {
            $(".navbar").html(htmlStructures.navbar);
            $(".logReg").html(htmlStructures.logIn);
            $(".modalPlace").html(htmlStructures.logInModal)
                .append(htmlStructures.regModal);
        },

        loadEventListeners: function () {
            dom.eventListeners.loginSubmit();
        }
    },
    eventListeners: {
        loginSubmit: function() {
            $(".logInForm").submit(function(event){
                let userName = $("input[name='userName']").val();
                let userPswd = $("input[name='userPassword']").val();
                alert(userName);
                event.preventDefault();
            });
        },
    },

    utility: {}
};