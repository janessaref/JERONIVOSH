import React, {useEffect, useRef} from 'react';
import "./style.css"


function Image({ user, story }) {
    const volume = useRef(null)
    useEffect(()=>{
        volume.current.volume = 0.5
    },[])
    
    return (
        <div>
            <audio className="float-right" autoPlay loop id="gameAudio" ref={volume}>
                <source src="./assets/4_29.mp3" type="audio/mpeg" />
            </audio>
            <img src={story[user.level].image}></img>
        </div>
    )
}

export default Image;