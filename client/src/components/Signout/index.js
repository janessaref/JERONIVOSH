import React from "react";
// import { Link } from "react-router-dom";

function Signout({logoutUser}) {

    return(

    
        <button className="btn btn-block signOut" type="submit" onClick={logoutUser} id="signOutBtn">Logout 
        </button>

    )
    
}

export default Signout;