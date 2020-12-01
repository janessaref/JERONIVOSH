import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Signup card on the homepage
function signup({ signup, authorized, userMessage, passMessage, erase, userLengthMessage }) {
    return (
        <div className="homepage container">
            <div className="mainContent container d-flex justify-content-center">
                <div class="card signUpContainer ">
                <div className="card-body h-50">
                    <h1 className="px-auto mb-0 brand">
                        JERONIVOSH
                    </h1>
                    <hr/>
                    {authorized ? 
                        <>
                        <button id="start" type="button" className="btn startBtn">Start!</button>
                        <Link to={"/game"}>Start!</Link>
                        </>
                        : 
                        // Sign up form for non-users
                        <form id="signUpForm" className="form-group" onSubmit={signup}>
                            <div className="form-group mx-auto text-center">
                                <p className="h5 mt-4 usernameLabel">Username: </p>
                                <input type="text" className="form-control" id="userName" placeholder="Create username" />
                            </div>
                            <div className="form-group mx-auto text-center">
                                <p className="h5 mt-4 passwordLabel">Password: </p>
                                <input type="password" className="form-control" id="password" placeholder="Create password" />
                            </div>
                            {/* display error messages if username is taken, password length is less than 8 characters and/or username is longer than 15 characters */}
                            <div className={userMessage}>
                            <p>Username is taken.</p>
                            </div>
                            <div className={passMessage}>
                                <p>Password must be <br /> at least <strong>8</strong> characters.</p>
                            </div>
                            <div className={userLengthMessage}>
                                <p>Username must be <br /> longer than 15 characters.</p>
                            </div>
                            <div className ="row mx-auto text-center">
                                <div className="col-md">
                                    <button id="signUpBtn" value="send" type="submit" className="btn mt-1 mb-1 hvr-back-pulse">Sign Up
                                    </button>
                                </div>
                            </div>
                            <hr/>
                            {/* If user is not new, button should redirect them to the login page */}
                            <div className ="row mx-auto text-center">
                                <div className="col-md">
                                    <p className="mt-1 mb-1 alreadyUser">Already a user?</p>
                                    <Link className="button" onClick={erase} to="/login">
                                        <button className="btn mt-1 hvr-back-pulse" id="loginBtn">Login Here</button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    }
                    </div>
                </div>      
            </div>  
        </div>
    );
};

export default signup;
