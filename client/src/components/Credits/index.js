import React, {useRef, useEffect} from "react";
import "./style.css"
import {Link} from "react-router-dom"


function Credits(reset) {

    const volume = useRef(null);

  useEffect(() => {
    volume.current.volume = 0.5;
  }, []);

    const names=["Jerri Fong", "Jon SanPedro","Ivan Torres","Josh Glugatch"]
  return (
    <div className="wrapper img-fluid">
        <div>
        <audio className="float-right" autoPlay id="gameAudio" ref={volume}>
                <source src="./assets/CreditsSong.mp3" type="audio/mpeg" />
            </audio>
        </div>

        <p className="gameTitle" style={{color:"black"}}>Jeronivosh</p>

       <div className="break"/><div className="break"/>
       <br/><br/><br/><br/>
       <p className="name">Developers:</p>
       <br/>
       <br/>
       <br/>
        {names.map(name=>{
            return(
                <p className="name">{name}</p>
            )
        })}

        <div className="break"/><div className="break"/>

        <p className="name">Story By:</p>
       <br/>
       <br/>
       <br/>
       <br/>
            {names.map(name=>{
            return(
                <p className="name">{name}</p>
            )
        })}
        
        <div className="break"/><div className="break"/>

        <p className="name">Art By:</p>
       <br/>
       <br/>
       <br/>
       <br/>
       
       <p className="name">Jerri Fong</p>
       <p className="name">Josh Glugatch</p>

       <div className="break"/><div className="break"/>

        <p className="name">Music By:</p>
       <br/>
       <br/>
       <br/>
       <br/>
       <p className="name">Josh Glugatch</p>


       <div className="break"/><div className="break"/>
       
       <img className="name logo" src="./assets/logos/reactlogo.png" alt="reactlogo"/>
       <br/>
       <br/>
       <br/>
       <br/>
       <img className="name logos" src="./assets/logos/html5-logo-31816.png" alt="reactlogo"/>
       <br/>
       <img className="name logos" src="./assets/logos/bootstrap-logo.png" alt="reactlogo"/>
       <br/>
       <img className="name logos" src="./assets/logos/pixilart-logo.png" alt="reactlogo"/>

       <div className="break"/><div className="break"/>
       <p>A special thank you to Jerome, Roger, Kerwin, Manuel, and Mahi.</p>
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



