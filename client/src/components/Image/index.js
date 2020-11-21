import React from 'react';
import "./style.css"


function Image({ user, story }) {

    return (
        <div>
            <audio className="float-right" autoPlay loop>
                <source src="./assets/4_29.mp3" type="audio/mpeg" />
            </audio>
            <img src={story[user.level].image}></img>
        </div>
    )
}

export default Image;