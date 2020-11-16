import React from 'react';

function Text({ user, story, click }) {
    console.log("text user", user);
    console.log(story[0].choices)
    return (
        <div>
            <p>{story[user.level].story}</p>
            <div>
                {story[user.level].choices.map(x => {
                    return <button value={story[user.level].choices.indexOf(x)} onClick={click}>{x}</button>
                })}
            </div>
        </div>
    )
}

export default Text;

