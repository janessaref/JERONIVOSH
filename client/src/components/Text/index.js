import React from 'react';
import './style.css'



function Text({ user, story, click }) {
    console.log("text user", user);
    console.log(story[0].choices)
    return (
        <div className= "Container fixed-bottom">
            <div className="row">
            {/* user story */}
            <p>{story[user.level].story}</p>
            </div>
            <div className="row">
                {/* user buttons */}
                {story[user.level].choices.map(x => {
                    return <button className="col btn hvr-back-pulse" key={story[user.level].choices.indexOf(x)} value={story[user.level].choices.indexOf(x)} onClick={click}>{x}</button>
                })}
            </div>
        </div>
    )
}

export default Text;

