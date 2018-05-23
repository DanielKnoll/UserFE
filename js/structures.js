htmlStructures = {
    navbar: `
            <img src="img/logo.png" alt="Kulcs-Soft">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link usrList" href="#">User list <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link usrAdd" href="#">Add user</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link userDel" href="#">Delete user</a>
                    </li>
                </ul>
                <ul class="nav navbar-nav ">
                    <li class="active">
                        <div class="btn-group logReg" role="group">
                        </div>
                    </li>
                </ul>
            </div>`,

    menuPoints: `
            <li class="nav-item active usrList">User list</li> <!--active has to change-->
            <li class="nav-item usrAdd">Add user</li>
            <li class="nav-item userDel">Delete user</li>`,

    logIn: `
            <button type="button" class="btn btn-danger reg" data-toggle="modal" data-target="#regModal">
              Register
            </button>
            <button type="button" class="btn btn-primary log" data-toggle="modal" data-target="#loginModal">
              Login
            </button>`,
    logOut: `
            <button class="btn btn-outline-danger reg usrGreeter">Hi user</button>
            <button class="btn btn-primary log">Logout</button>`,

    logInModal: `
            <div class="modal fade" id="loginModal" tabindex="-1" role="dialog"
                 aria-labelledby="loginModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="login">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="loginModalLabel">Please log in</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="userName">User Name</label>
                                    <input id="userName" name="userName" type="text" class="form-control"
                                           placeholder="Name" required minlength="3"/>
                                </div>
                                <div class="form-group">
                                    <label for="userPassword">Password</label>
                                    <input id="userPassword" name="userPassword" type="password"
                                           class="form-control" placeholder="Password" required minlength="8"/>
                                </div>
                                <div class="form-group">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`,

    regModal: `
            <div class="modal fade" id="regModal" tabindex="-1" role="dialog"
                 aria-labelledby="loginModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="reg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="regModalLabel">Please register</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="regUserName">User Name</label>
                                    <input id="regUserName" name="userName" type="text" class="form-control"
                                           placeholder="Name" required minlength="3"/>
                                </div>
                                <div class="form-group">
                                    <label for="regUserEmail">Password</label>
                                    <input id="regUserEmail" name="userEmail" type="email" class="form-control"
                                           placeholder="email@example.com" required/>
                                </div>
                                <div class="form-group">
                                    <label for="regUserPassword">Password</label>
                                    <input id="regUserPassword" name="userPassword" type="password" class="form-control"
                                           placeholder="Password" required minlength="8"/>
                                </div>
                                <div class="form-group">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`,

    errorModal: ``,
};
