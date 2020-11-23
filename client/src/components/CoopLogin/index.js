import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/api";

function CoopLogin({ }) {
    const [user, setUser] = useState({})
    const [authorized, setAuth] = useState(false);

    function coopLogin(event) {
        event.preventDefault();
        let title = event.target[0].value;
        console.log("title: ", title);
        API.startCoop(title)
            .then(res => {
                // console.log("login client res: ", res);
                if (res.data) {
                    console.log("coop login response", res.data)
                    setUser(res.data);
                    setAuth(true);
                } else {
                    // modal/text popup alerting user that user doesnt exist
                }
            }).catch(err => {
                console.log("login error: ", err);
            })
    }

    function coopJoin(event){
        console.log(event);
    }

    return (
        <>
            <h1 className="float-left ml-3"> JERONIVOSH</h1>
            <div className="gameplay img-fluid">
                <form id="signup" className="form-group signupForm" onSubmit={coopLogin}>
                    <div className="form-group">
                        <label>Game Title: </label>
                        <input type="text" className="form-control" id="userName" placeholder="Enter game title: " />
                    </div>
                    <button id="submit" value="send" type="submit" className="btn btn-primary">Submit</button>
                    {/* <button id="submit" value="send" onClick={coopJoin} className="btn btn-primary">Join Game</button> */}
                    <Link className="button" to="/login">Login</Link>
                    <Link className="button" to="/">Sign Up</Link>
                    <Link className="button" to="/credits">Credits</Link>
                </form>
            </div>
        </>
    )
}

export default CoopLogin;