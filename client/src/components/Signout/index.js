import React from "react";
import API from "../../utils/api";

function Signout() {

    function signUserOut(event) {
        event.preventDefault();
        API.signOut()
            .then(res => {
            res.redirect("/")
        }).catch(err => {
            console.log("logout error: ", err);
        })
    }
   

    return(

        <button 
        className="btn btn-block Sign Out"
        onSubmit={signUserOut}>Sign Out</button>
    )
    
}

export default Signout;