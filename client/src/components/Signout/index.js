import React from "react";

// Signout button in the settings modal to log the user out
function Signout({logoutUser}) {
    return(
        <button className="btn btn-block signOut" type="submit" onClick={logoutUser} id="signOutBtn">Logout</button>
    );
};

export default Signout;