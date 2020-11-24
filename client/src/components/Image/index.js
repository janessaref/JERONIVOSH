import React, { useEffect, useRef, useState } from "react";
import "./style.css";

function Image({ user, story }) {
  const [levels, setLevels] = useState({ status: "unmuted" });

  function handleMute() {
    if (levels.status === "muted") {
      unmute();
    } else if (levels.status === "unmuted") {
      mute();
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
      <div className="mute">
        <img src="./assets/audiosmall.png" onClick={handleMute} />
      </div>
      <div className="lives">
        <p>Lives: {user.lives}</p>
      </div>
      <audio className="float-right" autoPlay loop id="gameAudio" ref={volume}>
        <source src="./assets/4_29.mp3" type="audio/mpeg" />
      </audio>
      <img className="gif" src={story[user.level].image}></img>
    </div>
  );
}

export default Image;
