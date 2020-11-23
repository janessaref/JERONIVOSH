import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/api";

function CoopLogin({coopLogin, coopJoin }) {


    

    return (
        <>
            <h1 className="float-left ml-3"> JERONIVOSH</h1>
            <div className="gameplay img-fluid">
                <form id="signup" className="form-group signupForm" onSubmit={coopLogin}>
                    <div className="form-group">
                        <label>Game Title: </label>
                        <input type="text" className="form-control" id="title" placeholder="Enter game title: " />
                    </div>
                    <button id="submit" value="send" type="submit" className="btn btn-primary">Submit</button>
                    <button onClick={coopJoin} className="btn btn-primary">Join Game</button>
                    <Link className="button" to="/login">Login</Link>
                    <Link className="button" to="/">Sign Up</Link>
                    <Link className="button" to="/credits">Credits</Link>
                </form>
            </div>
        </>
    )
}

export default CoopLogin;