import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Image from "../components/Image";
import Text from "../components/Text";
import storyline from "../story.json";
import API from '../utils/api';
import Style from './style.css';
import Signup from "../components/Signup";


function Game() {
    // when logging in, setUser to data from mongodb
    // pass level prop to image and text components to display
    const [user, setUser] = useState({})
    const [authorized, setAuth] = useState(false);


    useEffect(() => {
        console.log("new user: ", user)
        API.updateUser(user)
            .then(res => console.log("update response: ", res))
            .then(err => console.log(err));
    }, [user])

    function signup(event) {
        event.preventDefault();
        console.log("working")
        let holder = [];
        holder.length = 0;
        console.log("event: ", event);
        let name = event.target[0].value;
        let pass = event.target[1].value;
        console.log("username, password: ", name, pass)
        // check all users
        API.findAll()
            .then(res => {
                console.log("all users: ", res)
                for (let i = 0; i < res.data.length; i++) {
                    holder.push(res.data[i].username);
                }
                // check if username exists
                if (!holder.includes(name)) {
                    // add new user
                    API.signUp({ username: name, password: pass })
                        .then(function (res) {
                            console.log("Response: ", res);
                            console.log("username sign: ", res.data.username)
                            console.log("username sign: ", res.data.password)
                            console.log("username sign: ", res.data.level)
                            console.log("username sign: ", res.data.lives)
                            setUser({
                                username: res.data.username,
                                password: res.data.password,
                                level: res.data.level,
                                lives: res.data.lives,
                                id: res.data._id
                            })
                            setAuth(true);
                        }).catch(err => {
                            console.log("error: ", err);
                        })

                } else {
                    // modal popup or text change informing user
                    // username is already taken
                }
            })
        console.log("user signup: ", user);
    }

    function choice(event) {
        event.preventDefault();
        // console.log(user._id);
        let value = event.target.value;
        if (storyline[user.level].decision) {
            if (storyline[user.level].badchoice) {
                console.log("working");
                setUser({ ...user,"level": storyline[user.level].decision[value], "lives": user.lives - 1 });
            }else{
            setUser({ ...user, "level": storyline[user.level].decision[value] });
        }
        } else {
            setUser({ ...user, "level": user.level + 1 });
        }
    }


    return (
        <Router>
            <div className="con">
                <Switch>
                    <Route exact path="/">{authorized ? <Redirect to="/game" /> : <Signup signup={signup} authorized={authorized} />}</Route>
                    <Route exact path="/game"><Image user={user} story={storyline} />
                        <Text user={user} story={storyline} click={choice} /></Route>
                </Switch>
            </div>
        </Router>
    )
}


export default Game;