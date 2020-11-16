import React, { useEffect, useState } from 'react';
import Image from "../components/Image";
import Text from "../components/Text";
import story from "../story.json";
import Style from './style.css'


function Game() {
    // when logging in, setUser to data from mongodb
    // pass level prop to image and text components to display
    const [user, setUser] = useState({
        username: "Jon",
        password: "test",
        level: 0,
        lives: 9
    })
    // console.log(user);

    const [storyline, setStory] = useState(story);

    // console.log(storyline);
    // could set up different state for level so we dont have to update
    // all user info when updating level
    // const [level, setLevel] = useState(1);

    useEffect(() => {
        console.log("user update ", user)
    }, [user])



    function choice(event) {
        event.preventDefault();
        let value = event.target.value;
        if (storyline[user.level].decision) {
            setUser({ ...user, "level": storyline[user.level].decision[value] });
            console.log("choice made: ", value, user.level);
        } else {
            setUser({ ...user, "level": user.level + 1 });
        }
        if (storyline.badchoice) {
            setUser({ ...user, "lives": user.lives - 1 });
        }
    }

    // function save(){
    //     setUser({...user, level: level, lives, lives});
    // }




    return (
        <div className="con">
            <Image user={user} story={storyline} />
            <Text user={user} story={storyline} click={choice} />
        </div>
    )
}


export default Game;