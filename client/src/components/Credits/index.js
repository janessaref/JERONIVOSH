import React, {useRef, useEffect, useState} from "react";
import "./style.css"
import {Link, withRouter} from "react-router-dom"
import API from '../../utils/api';


function Credits({end}) {

  const [highScores, setHighScores] = useState([])

    const volume = useRef(null);

  useEffect(() => {
    volume.current.volume = 0.5;
  }, []);

  useEffect(() => {
    setTimeout(()=>
      API.allHighScores()
      .then(res => {
        // console.log(res)
        
          var sorted = res.data.sort(function(a,b){
            if(a.lives < b.lives) { return 1; }
            if(a.lives > b.lives) { return -1; }
            return 0;
          })
          
          var scores =[...sorted]
          // console.log(scores)
        
        setHighScores(scores.slice(0,10))
        // console.log(highScores)
      })
      .catch(err => {
      console.log(err);
      setHighScores(defaultHighScores)
      }), 5000
    ) 

}, [])

    const defaultHighScores=[
      {name:"Jerry", lives: 9},
      {name:"MemeGod", lives: 9},
      {name:"Jerri", lives: 8},
      {name:"NyanCat", lives: 7},
      {name:"bluecat", lives: 6},
      {name:"acedragon48", lives: 6},
      {name:"Tom", lives: 5},
      {name:"Bob", lives: 5},
      {name:"Jill", lives: 4},
      {name:"Rat", lives: 1}
    ]
  return (
    <div className="wrapper img-fluid">
        <div>
        <audio className="float-right" autoPlay id="gameAudio" ref={volume}>
                <source src="./assets/CreditsSong.mp3" type="audio/mpeg" />
            </audio>
        </div>
      
      <div className="titleContainer">
        <p className="gameTitle img-fluid" style={{color:"black"}}>Jeronivosh</p>
      </div>
        

       <div className="break"/><div className="break"/>
       <br/><br/><br/><br/>
       <p className="name">Developers:</p>
       <br/>
       <br/>
       <br/>
       <p className="name"><span>Jer</span>ri Fong</p>
       <p className="name">J<span>on</span> SanPedro</p>
       <p className="name"><span>Iv</span>an Torres</p>
       <p className="name">J<span>osh</span> Glugatch</p>
       
      

        <div className="break"/><div className="break"/>

        <p className="name">Story By:</p>
       <br/>
       <br/>
       <br/>
       <br/>

       <p className="name">Jerri Fong</p>
       <p className="name">Jon SanPedro</p>
       <p className="name">Ivan Torres</p>
       <p className="name">Josh Glugatch</p>
        
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
       <br/>
       <br/>
       <br/>
        <p className="name">High Scores:</p>
       <br/>
       <br/>
       <br/>
       <br/>
       {highScores.map(score=>{
            return(
                <p className="name" key={score.username}>{score.username}: {score.lives}</p>
            )
        })}

       <div className="break"/><div className="break"/>
       <br/>
       <br/>
       <br/>
       
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
        <div onClick={end}><img className="name cat" src="./assets/logos/creditscat.png" alt="catlogo"/></div>
        {/* <Link to={"/main"}> <img className="name logo cat" src="./assets/logos/cattransparent.png"  alt="catlogo"/> </Link> */}
     
    </div>
  );
}

export default withRouter(Credits);



