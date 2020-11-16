import React from 'react';

function Text({ user, story, choice }) {
    console.log("text user", user);
    console.log(story[0].choices)
    return (
        <div>
            <p>{story[user.level].story}</p>
            <div>
                {story[user.level].choices.map(x => {
                    return <button onClick={choice}>{x}</button>
                })}
            </div>
        </div>
    )
}

export default Text;

