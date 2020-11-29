import React, { useEffect, useRef, useState } from "react";
import "./style.css";

function Image({ user, story }) {
  const [levels, setLevels] = useState({ status: "unmuted" });
  const [visibleX, setVisibleX] = useState(false);
  const [livesColor, setLivesColor] = useState({color: "white"});

  let style = {display: "block"};
  if(!visibleX) style.display = "none";

  let livesFontColor = {
    color: "red"
  }

  function showXImage() {
    setVisibleX(true);
  }

  function hideXImage() {
    setVisibleX(false);
  }

  function handleMute() {
    if (levels.status === "muted") {
      unmute();
      hideXImage();
    } else if (levels.status === "unmuted") {
      mute();
      showXImage();
    }
  }

  function mute() {
    setLevels({ status: "muted" });
    volume.current.volume = 0;
  }

  function unmute() {
    setLevels({ status: "unmuted" });
    volume.current.volume = 0.5;
  }

  const volume = useRef(null);

  useEffect(() => {
    volume.current.volume = 0.5;
  }, []);

  return (
    <div>
      <div className="mute fixed">
        <img src="./assets/redx.png" className="redX" style={style} onClick={handleMute}/>
        <img src="./assets/audiosmall.png" onClick={handleMute} id="volIcon"/>
      </div>
      <div className="lives" style={user.lives === 7 ? {color: "red"} : {color: "white"}}>
        <p>Lives: {user.lives}</p>
      </div>
      <audio className="float-right" autoPlay loop id="gameAudio" ref={volume}>
        <source src="./assets/4_29.mp3" type="audio/mpeg" />
      </audio>
      <img className="gif img-fluid" src={story[user.level].image}></img>
    </div>
  );
}

export default Image;
