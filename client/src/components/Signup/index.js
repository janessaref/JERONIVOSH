import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function signup({ signup, authorized }) {


    return (
        <>
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
        </>
    )
}

export default signup;