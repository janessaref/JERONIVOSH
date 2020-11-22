import React from "react";
import "./style.css"

function Credits() {
    const names=["Jerri", "Jon","Ivan","Josh"]
  return (
    <div className="wrapper">
        <h1 className="name">Jeronivosh</h1>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
        {names.map(name=>{
            return(
                <p className="name">{name}</p>
            )
        })}
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       
       <img className="name logo" src="./assets/logos/reactlogo.png" alt="reactlogo"/>

       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
        <p>Thanks for playing</p>
        <br/>
        <br/>
        <br/>
        <img className="name logo" src="./assets/logos/cattransparent.png" alt="catlogo"/>
     
    </div>
  );
}

export default Credits;



