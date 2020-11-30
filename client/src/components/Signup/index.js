import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function signup({ signup, authorized, userMessage, passMessage }) {
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
                    <form id="signUpForm" className="form-group" onSubmit={signup}>
                        <div className="form-group mx-auto text-center">
                            <p className="h5 mt-4 usernameLabel">Username: </p>
                            <input type="text" className="form-control" id="userName" placeholder="Create username" />
                        </div>
                        <div className="form-group mx-auto text-center">
                            <p className="h5 mt-4 passwordLabel">Password: </p>
                            <input type="password" className="form-control" id="password" placeholder="Create password" />
                        </div>
                        <div className={userMessage}>
                           <p>Sorry that user Name is Taken</p>
                        </div>
                        <div className={passMessage}>
                            <p>Sorry password should be atleast 8 characters long</p>
                        </div>
                        <div className ="row mx-auto text-center">
                            <div className="col-md">
                                <button id="signUpBtn" value="send" type="submit" className="btn mt-1 mb-1">Sign Up
                                </button>
                            </div>
                        </div>
                        <hr/>
                        <div className ="row mx-auto text-center">
                            <div className="col-md">
                                <p className="mt-1 mb-1 alreadyUser">Already a user?</p>
                                <Link className="button" to="/login">
                                    <button className="btn mt-1" id="loginBtn">Login Here</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                }
                </div>
            </div>      
        </div>  
    </div>
    )
};

export default signup;

{/* <>
            <div className="container logIn">
                <h1 className="float-left ml-3"> JERONIVOSH</h1>
                {
                    authorized ? <><button id="start" type="button" className="btn btn-primary">Start!</button>
                        <Link to={"/game"}>Start!</Link></>
                        : <div className="gameplay img-fluid">
                            <form id="signup" className="form-group signupForm" onSubmit={signup}>
                                <div className="form-group">
                                    <label>User Name: </label>
                                    <input type="text" className="form-control" id="userName" placeholder="Enter User Name: " />
                                </div>
                                <div className="form-group">
                                    <label>Password: </label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <button id="submit" value="send" type="submit" className="btn btn-primary">Submit</button>
                                <Link className="button" to="/login">Login</Link>
                                <Link className="button" to="/cooplogin">Multiplayer</Link>
                            </form>
                        </div>
                }
            </div>
        </> */}