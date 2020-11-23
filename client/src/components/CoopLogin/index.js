import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/api";

function CoopLogin({ }) {
    const [user, setUser] = useState({})
    const [authorized, setAuth] = useState(false);

    function coopLogin(event) {
        event.preventDefault();
        let name = event.target[0].value;
        let pass = event.target[1].value;
        API.getUser(name, pass)
            .then(res => {
                // console.log("login client res: ", res);
                if (res.data) {
                    setUser(res.data);
                    setAuth(true);
                } else {
                    // modal/text popup alerting user that user doesnt exist
                }

            }).catch(err => {
                console.log("login error: ", err);
            })
    }

    return (
        <>
            <h1 className="float-left ml-3"> JERONIVOSH</h1>
            <div className="gameplay img-fluid">
                <form id="signup" className="form-group signupForm" onSubmit={coopLogin}>
                    <div className="form-group">
                        <label>User Name: </label>
                        <input type="text" className="form-control" id="userName" placeholder="Enter User Name: " />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <button id="submit" value="send" type="submit" className="btn btn-primary">Submit</button>
                    <Link className="button" to="/login">Single Player Log In</Link>
                    <Link className="button" to="/">Sign Up</Link>
                    <Link className="button" to="/cooplogin">Multiplayer</Link>
                    <Link className="button" to="/credits">Credits</Link>
                </form>
            </div>
        </>
    )
}

export default CoopLogin;