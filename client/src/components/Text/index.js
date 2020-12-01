import React from 'react';
import './style.css';

// Story text displayed in the game with the button choices
function Text({ user, story, click }) {
    return (
        <div className= "Container fixed-bottom">
            <div className="row">
            {/* Story/level the user is at */}
            <p>{story[user.level].story}</p>
            </div>
            <div className="row">
                {/* buttons corresponding to the decisions the user has to make */}
                {story[user.level].choices.map(x => {
                    return <button className="col btn hvr-back-pulse choiceBtns" key={story[user.level].choices.indexOf(x)} value={story[user.level].choices.indexOf(x)} onClick={click}>{x}</button>
                })}
            </div>
        </div>
    );
};

export default Text;

