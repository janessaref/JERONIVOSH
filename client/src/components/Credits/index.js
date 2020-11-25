import React from "react";
import "./style.css"
import {Link} from "react-router-dom"


function Credits(reset) {
    const names=["Jerri Fong", "Jon SanPedro","Ivan Torres","Josh Glugatch"]
  return (
    <div className="wrapper img-fluid">
        <div>
            <audio autoPlay >
                <source src="./assets/CreditsSong.mp3" type="audio/mpeg" />
            </audio>
        </div>

        <p className="gameTitle" style={{color:"black"}}>Jeronivosh</p>

       <div className="break"/><div className="break"/>
       <br/><br/><br/><br/>
       <p className="name">Developers:</p>
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
        <p className="name">Story By:</p>
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
        <p className="name">Art By:</p>
       <br/>
       
       <p className="name">Jerri Fong</p>
       <p className="name">Josh Glugatch</p>

       <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p className="name">Music By:</p>
       <br/>
       <p className="name">Josh Glugatch</p>


       <div className="break"/><div className="break"/>
       
       <img className="name logo" src="./assets/logos/reactlogo.png" alt="reactlogo"/>

       <div className="break"/><div className="break"/>
       
        <p>Thanks for playing</p>
        <br/>
        <br/>
        <br/>
        <Link to={"/main"}> <img className="name logo cat" src="./assets/logos/cattransparent.png" onClick={reset} alt="catlogo"/> </Link>
     
    </div>
  );
}

export default Credits;



