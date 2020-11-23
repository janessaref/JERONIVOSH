import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function login({ login }) {


    return (
        <div className="container logIn">
            <div className="row">
            <h1 className="float-left ml-3"> JERONIVOSH</h1>
            </div>
            <div className="gameplay img-fluid">
                <form id="signup" className="form-group signupForm" onSubmit={login}>
                    <div className="form-group">
                        <label>User Name: </label>
                        <input type="text" className="form-control" id="userName" placeholder="Enter User Name: " />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <button id="submit" value="send" type="submit" className="btn">Submit</button>
                    <Link className="button" to="/">Sign Up</Link>
                    <Link className="button" to="/credits">Credits</Link>
                </form>
            </div>
        </div>
    )
}

export default login;