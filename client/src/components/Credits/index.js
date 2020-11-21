import React from "react";
import "./style.css"

function Credits() {
    const names=["Jerri", "Jon","Ivan","Josh"]
  return (
    <div className="wrapper">
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
       <img className="name logo" src="./assets/logos/reactlogo.png" alt="reactlogo"/>
     
    </div>
  );
}

export default Credits;



