import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function login({ login }) {
    return (
        <div className="container col-md-4 logIn">
            <div className="row">
                <h1 className=" ml-3 px-auto brand mb-0">JERONIVOSH</h1>
            </div>
            <div className="gameplay container text-center">
                <hr/>
                <form id="loginForm" className="form-group mt-2" onSubmit={login}>
                    <div className="form-group col-sm-10 mx-auto">
                        <label>Username: </label>
                        <input type="text" className="form-control" id="userName" placeholder="Enter your username" />
                    </div>
                    <div className="form-group col-sm-10 mx-auto">
                        <label>Password: </label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                    </div>
                    <button id="submit" value="send" type="submit" className="btn mt-2">Login
                    </button>
                    <div className ="row mx-auto text-center">
                        <div className="col-md">
                            <Link className="button" to="/">
                                <button className="btn">Sign Up</button>
                            </Link>
                        </div>
                       <div className="col-md">
                            <Link className="button" to="/cooplogin">
                                <button className="btn">Play Co-op</button>
                            </Link>
                       </div>
                       
                    </div>
                    <div className ="row mx-auto text-center">
                        
                    {/* <Link className="button" to="/credits">Credits</Link> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default login;