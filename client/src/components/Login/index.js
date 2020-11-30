import React from "react";
import { Link } from "react-router-dom";
import "./style.css";



function Login({ login, message, input }) {

    // const [message, setMessage] = useState('message hideMessage')


    return (
        <div className="homepage container overflow-auto">
            <div className="mainContent container d-flex justify-content-center">
                <div class="card loginContainer ">
                <div className="card-body">
                    <h1 className="px-auto mb-0 brand">
                        JERONIVOSH
                    </h1>
                    <hr/>
                        <form id="loginForm" className="form-group" onSubmit={login}>
                            <div className="form-group mx-auto text-center">
                                <p className="h5 mt-4 usernameLabel">Username: </p>
                                <input type="text" className="form-control" id="userName" placeholder="Enter your username" />
                            </div>
                            <div className="form-group mx-auto text-center">
                                <p className="h5 mt-4 passwordLabel">Password: </p>
                                <input type="password" className={input} id="password" placeholder="Enter your password" />
                            </div>
                            <div className={message}>
                                    <p>Invalid username or password.</p>
                                </div>
                            <div className ="row mx-auto text-center">
                                <div className="col-md">
                                    <button id="loginBtn" value="send" type="submit" className="btn mt-1 mb-1">Login
                                    </button>
                                </div>
                            </div>
                            <hr/>
                            <div className ="row mx-auto text-center">
                                <div className="col-md">
                                    <p className="mt-1 mb-1 notUser">Not a user?</p>
                                    <Link className="button" to="/">
                                        <button className="btn mt-1" id="signUpBtn">Sign Up Here</button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;


{/* <div className="container logIn">
<div className="row">
    <h1 className=" ml-3 px-auto brand mb-0">JERONIVOSH</h1>
</div>
<div className="gameplay text-center">
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
                    Not a user?
                    <button className="btn">Sign Up Page</button>
                </Link>
            </div> */}
           {/* <div className="col-md">
                <Link className="button" to="/cooplogin">
                    <button className="btn">Play Co-op</button>
                </Link>
           </div> */}
           
        {/* </div> */}
        {/* <div className ="row mx-auto text-center"> */}
            
        {/* <Link className="button" to="/credits">Credits</Link> */}
        {/* </div> */}
    {/* </form>
    </div>
</div> */}