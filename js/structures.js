htmlStructures = {
    navbar: `
            <img src="img/logo.png" alt="Kulcs-Soft">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto navMenu">
                    
                </ul>
                <ul class="nav navbar-nav ">
                    <li class="active logInOut">
                    </li>
                </ul>
            </div>`,

    menuPoints: `
                
                <li class="nav-item addUserBtn" data-toggle="modal" data-target="#addUserModal">
                    <a class="nav-link" >Add user</a>
                </li>
                <li class="nav-item" data-toggle="modal" data-target="#deleteUserModal">
                    <a class="nav-link" >Delete user</a>
                </li>`,

    logIn: `
            <div class="btn-group logRegBtns" role="group">
                <button type="button" class="btn btn-danger reg" data-toggle="modal" data-target="#regModal">
                  Register
                </button>
                <button type="button" class="btn btn-primary log" data-toggle="modal" data-target="#loginModal">
                  Login
                </button>
            </div>`,
    logOut: `
            <div class="btn-group logOutBtns" role="group">
                <button class="btn btn-outline-danger reg usrGreeter">Hi user</button>
                <button class="btn btn-primary log logOutBtn">Logout</button>
            </div>`,

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
                            <form class="logInForm">
                                <div class="form-group">
                                    <label for="userName">Username</label>
                                    <input id="userName" name="userName" type="text" class="form-control"
                                           placeholder="Name" required minlength="3"/>
                                </div>
                                <div class="form-group">
                                    <label for="userPassword">Password</label>
                                    <input id="userPassword" name="userPassword" type="password"
                                           class="form-control" placeholder="Password" required minlength="8"/>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <input type="submit" class="btn btn-primary logInBtn" value="Login"/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer errorMessage"></div>
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
                            <form class="regForm">
                                <div class="form-group">
                                    <label for="regUserName">Username</label>
                                    <input id="regUserName" name="userNameReg" type="text" class="form-control"
                                           placeholder="Name" required minlength="3"/>
                                </div>
                                <div class="form-group">
                                    <label for="regUserEmail">Email</label>
                                    <input id="regUserEmail" name="userEmailReg" type="email" class="form-control"
                                           placeholder="email@example.com" required/>
                                </div>
                                <div class="form-group">
                                    <label for="regUserPassword">Password</label>
                                    <input id="regUserPassword" name="userPasswordReg" type="password" class="form-control"
                                           placeholder="Password" required minlength="8"/>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <input type="submit" class="btn btn-primary regBtn" value="Register"/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer errorMessage"></div>
                    </div>
                </div>
            </div>`,

    addUserModal: `
            <div class="modal fade" id="addUserModal" tabindex="-1" role="dialog"
                 aria-labelledby="loginModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="addUser">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="addModalLabel">Fill the inputs</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form class="addUserForm">
                                <div class="form-group">
                                    <label for="addUserName">Username</label>
                                    <input id="addUserName" name="userNameAdd" type="text" class="form-control"
                                           placeholder="Name" required minlength="3"/>
                                </div>
                                <div class="form-group">
                                    <label for="addUserEmail">Email</label>
                                    <input id="addUserEmail" name="userEmailAdd" type="email" class="form-control"
                                           placeholder="email@example.com" required/>
                                </div>
                                <div class="form-group">
                                    <label for="addUserPassword">Password</label>
                                    <input id="addUserPassword" name="userPasswordAdd" type="password" class="form-control"
                                           placeholder="Password" required minlength="8"/>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <input type="submit" class="btn btn-primary addUserBtn" value="Add user"/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer errorMessage"></div>
                    </div>
                </div>
            </div>`,

    deleteUserModal: `
            <div class="modal fade" id="deleteUserModal" tabindex="-1" role="dialog"
                 aria-labelledby="loginModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="delUser">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="delModalLabel">Delete user by ID</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            This is an irreversible action due to GDPR<br/>
                            <form class="delUserForm">
                                <div class="form-group">
                                    <label for="delUserId">User ID</label>
                                    <input id="delUserID" name="userIdDel" type="number" 
                                        class="form-control" required min="1"/>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <input type="submit" class="btn btn-primary delUserBtn" value="Delete user"/>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer errorMessage"></div>
                    </div>
                </div>
            </div>`,


    userDataTable: `
            <table class="table table-striped userData">
                <thead >
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                </tr>
                </thead>
                <tbody class="usrDBody">
                </tbody>
            </table>`
};

