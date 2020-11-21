import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function Login({ signup, authorized }) {


    return (
        <>
            <audio className="float-right" controls autoPlay loop>
                <source src="./assets/4_29.mp3" type="audio/mpeg" />
            </audio>
            <h1 className="float-left ml-3"> JERONIVOSH</h1>
            {
                authorized ? <><button id="start" type="button" className="btn btn-primary">Start!</button>
                <Link to={"/game"}>Start!</Link></>
                    : <div className="gameplay img-fluid">
                        <form id="login" className="form-group loginForm" onSubmit={signup}>
                            <div className="form-group">
                                <label>User Name: </label>
                                <input type="text" className="form-control" id="userName" placeholder="Enter User Name: " />
                            </div>
                            <div className="form-group">
                                <label>Password: </label>
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <button id="submit" value="send" type="submit" href="/game" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
            }
        </>
    )
}

export default Login;