import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Image from "../components/Image";
import Text from "../components/Text";
import storyline from "../story.json";
import API from '../utils/api';
import './style.css';
import Signup from "../components/Signup";
import Login from "../components/Login";
// import Chat from '../components/Chat';
import Credits from "../components/Credits";
import Polls from "../components/Sidebar/polls";
import CoopLogin from "../components/CoopLogin";
import Multiplayer from "../components/Multiplayer";



function Game() {
    // when logging in, setUser to data from mongodb
    // pass level prop to image and text components to display
    const [user, setUser] = useState({})
    const [authorized, setAuth] = useState(false);

    // state to deal with refresh during game
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        setRefresh(true);
        setAuth(false);
    }, [])

    useEffect(() => {
        console.log("new user: ", user)
        API.updateUser(user)
            .then(res => console.log("update response: ", res))
            .then(err => console.log(err));
        // console.log("Authorization: ", authorized);
    }, [user])


    function signup(event) {
        event.preventDefault();
        let holder = [];
        holder.length = 0;
        let name = event.target[0].value;
        let pass = event.target[1].value;
        console.log("username, password: ", name, pass)
        // check all users
        API.findAll()
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    holder.push(res.data[i].username);
                }
                // check if username exists
                if (!holder.includes(name)) {
                    // add new user
                    API.signUp({ username: name, password: pass })
                        .then(function (res) {
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
        // console.log("user signup: ", user);
    }

    function login(event) {
        event.preventDefault();
        let name = event.target[0].value;
        let pass = event.target[1].value;
        API.getUser(name, pass)
            .then(res => {
                // console.log("login client res: ", res);
                if (res.data) {
                    setUser(res.data);
                    setAuth(true);
                } else {
                    // modal/text popup alerting user that user doesnt exist
                }

            }).catch(err => {
                console.log("login error: ", err);
            })
    }

    function coopLogin(event) {
        event.preventDefault();
        let title = event.target[0].value;
        console.log("title: ", title);
        API.startCoop(title)
            .then(res => {
                // console.log("login client res: ", res);
                if (res.data) {
                    console.log("coop login response", res.data)
                    setUser(res.data);
                    setAuth(true);
                } else {
                    // modal/text popup alerting user that user doesnt exist
                }
            }).catch(err => {
                console.log("login error: ", err);
            })
    }

    function coopJoin(event) {
        event.preventDefault();
        console.log(event.target.form[0].value);
        API.findGame(event.target.form[0].value)
            .then(res => {
                if (res.data) {
                    console.log("coop login response", res.data)
                    setUser(res.data);
                    setAuth(true);
                } else {
                    // modal/text popup alerting user that user doesnt exist
                }
            }).catch(err => {
                console.log("login error: ", err);
            })
    }


    function choice(event) {
        event.preventDefault();
        // console.log(user._id);
        let value = event.target.value;
        if (storyline[user.level].decision) {
            if (storyline[user.level].badchoice) {
                console.log("working");
                setUser({ ...user, "level": storyline[user.level].decision[value], "lives": user.lives - 1 });
            } else {
                setUser({ ...user, "level": storyline[user.level].decision[value] });
            }
        } else {
            setUser({ ...user, "level": user.level + 1 });
        }
    }

    document.volume = 0.3


    return (
        <Router>
            <div className="con">

                <Switch>
                    <Route exact path="/">{authorized ? <Redirect to="/game" /> : <Signup signup={signup} authorized={authorized} />}</Route>
                    <Route exact path="/login">{authorized ? <Redirect to="/game" /> : <Login login={login} authorized={authorized} />}</Route>
                    <Route exact path="/game">{authorized ? <><Image user={user} story={storyline} />
                        <Text user={user} story={storyline} click={choice} /></> : <Redirect to="/" />}
                    </Route>
                    <Route exact path="/credits" component={Credits} />
                    <Route exact path="/coopLogin">{authorized ? <Redirect to="/multiplayer" /> : <CoopLogin coopLogin={coopLogin} coopJoin={coopJoin} user={user} />}  </Route>
                    <Route exact path="/multiplayer">{authorized ? <><Multiplayer user={user} story={storyline} click={choice} /></> : <Redirect to="/coopLogin" />} </Route>
                </Switch>
            </div>
        </Router >
    )
}


export default Game;