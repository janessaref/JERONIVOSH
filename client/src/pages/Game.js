import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Image from "../components/Image";
import Text from "../components/Text";
import story from "../story.json";
import API from '../utils/api';
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
    const [storyline, setStory] = useState(story);

    useEffect(() => {
        console.log("running");
        API.signUp(user)
            .then(function (res) {
                console.log("Response: ", res);
                setUser(res.data)

            }).catch(err => {
                console.log("error: ", err);
            })
    }, [])
   

    useEffect(() => {
        console.log("user update ", user)
    }, [user])


    function choice(event) {
        event.preventDefault();
        console.log(user._id);
        let value = event.target.value;
        if (storyline[user.level].decision) {
            setUser({ ...user, "level": storyline[user.level].decision[value] });
            console.log("choice made: ", value, user.level);
            API.updateLevel(user._id)
                .then(res => console.log(res))
                .then(err => console.log(err));
        } else {
            setUser({ ...user, "level": user.level + 1 });
            API.updateLevel(user._id, user.level)
                .then(res => console.log(res))
                .then(err => console.log(err));
        }
        if (storyline.badchoice) {
            setUser({ ...user, "lives": user.lives - 1 });
            API.updateLevel(user._id)
                .then(res => console.log(res))
                .then(err => console.log(err));
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