import React, { useEffect, useRef, useState } from "react";
import "./style.css";

// Scene image set in the gameplay 
function Image({ user, story, spinner, lives }) {
  // mute icon
  const [levels, setLevels] = useState({ status: "unmuted" });
  const [visibleX, setVisibleX] = useState(false);
  // loading icon
  const [loading, setLoading] = useState(true);

  // hides or shows the red X when the volume icon is clicked
  let style = { display: "block" };
  if (!visibleX) style.display = "none";

  useEffect(() => {
    setLoading(true);
  }, [story[user.level].image]);

  function spinner() {
    setLoading(false);
  };

  function showXImage() {
    setVisibleX(true);
  };

  function hideXImage() {
    setVisibleX(false);
  };

  function handleMute() {
    if (levels.status === "muted") {
      unmute();
      hideXImage();
    } else if (levels.status === "unmuted") {
      mute();
      showXImage();
    }
  };

  function mute() {
    setLevels({ status: "muted" });
    volume.current.volume = 0;
  };

  function unmute() {
    setLevels({ status: "unmuted" });
    volume.current.volume = 0.5;
  };

  const volume = useRef(null);

  useEffect(() => {
    volume.current.volume = 0.5;
  }, []);

  return (
    <div>
      <div className="mute fixed">
        <img src="./assets/redx.png" className="redX" style={style} onClick={handleMute} alt="red x" />
        <img src="./assets/audiosmall.png" onClick={handleMute} id="volIcon" alt="volume icon" />
      </div>
      <div className={lives}>
        <p>Lives: {user.lives}</p>
      </div>
      <audio className="float-right" autoPlay loop id="gameAudio" ref={volume}>
        <source src="./assets/4_29.mp3" type="audio/mpeg" />
      </audio>
      <div style={{ display: loading ? "block" : "none" }} className="spinner-border loading" role="status">
        Loading...
      </div>
      <div style={{ display: loading ? "none" : "block" }}>
        <img className="gif img-fluid" src={story[user.level].image} onLoad={() => spinner()} alt="loading" />
      </div>
    </div>
  );
};

export default Image;
