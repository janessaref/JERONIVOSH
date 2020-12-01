import React from "react";
import "./style.css";

// Signout button in the settings modal to log the user out
function Signout({logoutUser}) {
    return(
        <button className="btn btn-block signOut hvr-back-pulse" type="submit" onClick={logoutUser}>Logout</button>
    );
};

export default Signout;