
import React, { useRef, useEffect, useState } from "react";
import "./style.css";
import { withRouter } from "react-router-dom";
import API from '../../utils/api';


function Credits({ end }) {
  // Variable to hold the recent scores of the user
  const [recentScores, setRecentScores] = useState([])
  // Variable to set the volume
  const volume = useRef(null);

  useEffect(() => {
    volume.current.volume = 0.5;
  }, []);

  useEffect(() => {
    setTimeout(()=>
      API.allHighScores()
      .then(res => {

        var scores = res.data.reverse();
        
        setRecentScores(scores.slice(0,10));

      })
      .catch(err => {
        const defaultRecentScores=[
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
        console.log(err);
        setRecentScores(defaultRecentScores);
      }), 5000
    ); 
}, []);

  return (
    <div className="wrapper img-fluid">
      <div>
        <audio className="float-right" autoPlay id="gameAudio" ref={volume}>
          <source src="./assets/CreditsSong.mp3" type="audio/mpeg" />
        </audio>
      </div>

      {/* Game Title */}
      <div className="titleContainer">
        <p className="gameTitle img-fluid" style={{color:"black"}}>Jeronivosh</p>
      </div>

      {/* Game Developers */}
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

      {/* Story Creators */}
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
      
      {/* Art Creators */}
      <div className="break"/><div className="break"/>
      <p className="name">Art By:</p>
      <br/>
      <br/>
      <br/>
      <br/>
      <p className="name">Jerri Fong</p>
      <p className="name">Josh Glugatch</p>

      {/* Music Creator */}
      <div className="break"/><div className="break"/>
      <p className="name">Music By:</p>
      <br/>
      <br/>
      <br/>
      <br/>
      <p className="name">Josh Glugatch</p>

      {/* Recent Scores */}
      <div className="break"/><div className="break"/>
      <br/>
      <br/>
      <br/>
      <p className="name">Recent Scores:</p>
      <br/>
      <br/>
      <br/>
      <br/>
      {recentScores.map(score=>{
        return (
          <p className="name" key={score.id}>{score.username}: {score.lives}</p>
        )
        })}

      {/* Logos */}
      <div className="break"/><div className="break"/>
      <br/>
      <br/>
      <br/>
      <img className="name logo" src="./assets/logos/reactlogo.png" alt="reactlogo"/>
      <br/>
      <br/>
      <br/>
      <br/>
      <img className="name logos" src="./assets/logos/html5-logo-31816.png" alt="htmllogo"/>
      <br/>
      <img className="name logos" src="./assets/logos/bootstrap-logo.png" alt="bootstraplogo"/>
      <br/>
      <img className="name logos" src="./assets/logos/pixilart-logo.png" alt="pixilartlogo"/>
      
      {/* Acknowledgments */}
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
      
      {/* Cat Logo and if user clicks cat, takes them back to the main menu */}
      <p>Thanks for playing</p>
      <br/>
      <br/>
      <br/>
      <div onClick={end}><img className="name cat" src="./assets/logos/creditscat.png" alt="catlogo"/></div>
      {/* <Link to={"/main"}> <img className="name logo cat" src="./assets/logos/cattransparent.png"  alt="catlogo"/> </Link> */}
    </div>
  );
};

export default withRouter(Credits);



