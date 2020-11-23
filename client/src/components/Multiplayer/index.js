import React from 'react';


function Multiplayer({user, story, click}){


    return(
        <>
        <div>
            <audio className="float-right" autoPlay loop>
                <source src="./assets/4_29.mp3" type="audio/mpeg" />
            </audio>
            <img src={story[user.level].image}></img>
        </div>
        <div className= "Container fixed-bottom">
        <div className="row">
        {/* user story */}
        <p>{story[user.level].story}</p>
        </div>
        <div className="row">
            {/* user buttons */}
            {story[user.level].choices.map(x => {
                return <button className="col btn" key={story[user.level].choices.indexOf(x)} value={story[user.level].choices.indexOf(x)} onClick={click}>{x}</button>
            })}
        </div>
    </div>
    </>
    )
}

export default Multiplayer;