import React from "react";
import "./style.css"

function Credits() {
    const names=["Jerri", "Jon","Ivan","Josh"]
  return (
    <div className="wrapper img-fluid">
        <div>
            <audio autoPlay loop>
                <source src="./assets/CreditsSong.mp3" type="audio/mpeg" />
            </audio>
        </div>

        <p className="gameTitle" style={{color:"black"}}>Jeronivosh</p>

       <div className="break"/><div className="break"/>
       <br/><br/><br/><br/>
       <p className="name">Developed by:</p>
       <br/>
        {names.map(name=>{
            return(
                <p className="name">{name}</p>
            )
        })}
       
       <div className="break"/><div className="break"/>
       
       <img className="name logo" src="./assets/logos/reactlogo.png" alt="reactlogo"/>

       <div className="break"/><div className="break"/>
       
        <p>Thanks for playing</p>
        <br/>
        <br/>
        <br/>
        <img className="name logo cat" src="./assets/logos/cattransparent.png" alt="catlogo"/>
     
    </div>
  );
}

export default Credits;



