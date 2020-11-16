import React from 'react';
import "./style.css"

function Image({ user, story }) {
    console.log(story[user.level]);
    return (
     
        <img src={story[user.level].image}></img>

    )
}

export default Image;