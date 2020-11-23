import React, { useEffect, useState } from 'react';
import API from '../../utils/api';
import story from "../../story.json";

function Multiplayer({user, story, click}) {

    // const [user, setUser] = useState({})

    // state to deal with refresh during game
    // const [refresh, setRefresh] = useState(false);

    // useEffect(() => {
    //     setUser(player)
    //     console.log("player: ", player);
    // }, [])

    // useEffect(() => {
    //     console.log("new user: ", user)
    //     API.updateCoop(user)
    //         .then(res => console.log("update response: ", res))
    //         .then(err => console.log(err));
    //     // console.log("Authorization: ", authorized);
    // }, [user])


    // function choice(event) {
    //     event.preventDefault();
    //     // console.log(user._id);
    //     let value = event.target.value;
    //     if (story[user.level].decision) {
    //         if (story[user.level].badchoice) {
    //             console.log("working");
    //             setUser({ ...user, "level": story[user.level].decision[value], "lives": user.lives - 1 });
    //         } else {
    //             setUser({ ...user, "level": story[user.level].decision[value] });
    //         }
    //     } else {
    //         setUser({ ...user, "level": user.level + 1 });
    //     }
    // }

    return (
        <>
        
            <div>
                <audio className="float-right" autoPlay loop>
                    <source src="./assets/4_29.mp3" type="audio/mpeg" />
                </audio>
                <img src={story[user.level].image}></img>
            </div>
            <div className="Container fixed-bottom">
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