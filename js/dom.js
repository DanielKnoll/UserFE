dom = {
    data: {
        userData: [],
        isLoggedIn: false  // TODO request this from server
    },

    initFunctions: {
        loadElements: function() {
            $(".navbar").html(htmlStructures.navbar);
            $(".navMenu").html(htmlStructures.menuPoints);
            $(".navMenu li").hide();
            $(".logInOut").html(htmlStructures.logIn)
                .append(htmlStructures.logOut);
            if(dom.data.isLoggedIn) {
                $(".logRegBtns").hide();
            } else {
                $(".logOutBtns").hide();
            }
            $(".modalPlace").html(htmlStructures.logInModal)
                .append(htmlStructures.regModal);
        },

        loadEventListeners: function () {
            dom.eventListeners.loginSubmit();
            dom.eventListeners.regSubmit();
            dom.eventListeners.logOutBtn();
        }
    },
    eventListeners: {
        loginSubmit: function() {
            $(".logInForm").submit(function(event){
                event.preventDefault();
                let userName = $("input[name='userName']").val();
                let userPswd = $("input[name='userPassword']").val();
                apiData.postLoginData(userName, userPswd);
            });
        },

        regSubmit: function() {
            $(".regForm").submit(function(event){
                event.preventDefault();
                let userName = $("input[name='userNameReg']").val();
                let userEmail = $("input[name='userEmailReg']").val();
                let userPswd = $("input[name='userPasswordReg']").val();
                apiData.postRegData(userName, userEmail, userPswd);
            });
        },

        logOutBtn: function () {
            $(".logOutBtn").click(function () {
                apiData.logOutFromServer();
            });
        }
    },

    utility: {
        logInSuccess: function (username) {
            dom.data.isLoggedIn = true;
            $(".navMenu li").show();
            $(".logRegBtns").hide();
            $(".logOutBtns").show();
            $(".errorMessage").html("");
            $(".usrGreeter").html("Hi " + username);
            apiData.getUserData();
        },

        logInRegFailed: function (errorMsg) {
            $(".modal-body").append(htmlStructures.loginError);
            $(".errorMessage").html(errorMsg);
        },

        logOutSuccess: function () {
            dom.data.isLoggedIn = false;
            $(".navMenu li").hide();
            $(".logOutBtns").hide();
            $(".logRegBtns").show();
            $(".container").html(`<h1>Please log in or register to see the user data.</h1>`);
        },
        
        renderUserData: function () {
            $(".container").html(htmlStructures.userDataTable);
            for(let i = 0; i < dom.data.userData.length; i++){
                $(".usrDBody").append(dom.utility.getRowForTable(dom.data.userData[i]));
            }
        },

        getRowForTable: function (oneUserData) {
            return `<tr>
                        <td>` + oneUserData[0] + `</td>
                        <td>` + oneUserData[1] + `</td>
                        <td>` + oneUserData[2] + `</td>
                    </tr>`;
        }
    },

    dataFunctions: {

        saveUserData: function (userData) {
            dom.data.userData = userData.allUsers;
        }
    }
};