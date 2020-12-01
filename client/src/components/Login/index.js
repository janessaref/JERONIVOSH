import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Login Card displayed oh the homepage
function Login({ login, message, input, erase }) {
    return (
        <div className="homepage container overflow-auto">
            <div className="mainContent container d-flex justify-content-center">
                <div class="card loginContainer ">
                <div className="card-body">
                    <h1 className="px-auto mb-0 brand">
                        JERONIVOSH
                    </h1>
                    <hr/>
                    {/* Login form to grab the user's inputs */}
                        <form id="loginForm" className="form-group" onSubmit={login}>
                            <div className="form-group mx-auto text-center">
                                <p className="h5 mt-4 usernameLabel">Username: </p>
                                <input type="text" className="form-control" id="userName" placeholder="Enter your username" />
                            </div>
                            <div className="form-group mx-auto text-center">
                                <p className="h5 mt-4 passwordLabel">Password: </p>
                                <input type="password" className={input} id="password" placeholder="Enter your password" />
                            </div>
                            {/* Display an error message if the user input is invalid */}
                            <div className={message}>
                                    <p>Invalid username or password.</p>
                                </div>
                            <div className ="row mx-auto text-center">
                                <div className="col-md">
                                    <button id="loginBtn" value="send" type="submit" className="btn mt-1 mb-1 hvr-back-pulse">Login
                                    </button>
                                </div>
                            </div>
                            <hr/>
                            {/* Sign Up Here redirects non-users to the sign up page */}
                            <div className ="row mx-auto text-center">
                                <div className="col-md">
                                    <p className="mt-1 mb-1 notUser">Not a user?</p>
                                    <Link className="button" to="/">
                                        <button className="btn mt-1 hvr-back-pulse" onClick={erase} id="signUpBtn">Sign Up Here</button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
