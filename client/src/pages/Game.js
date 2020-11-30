import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
// import history from "../utils/history";
// import {useHistory} from "react-router";
import Image from "../components/Image";
import Text from "../components/Text";
import storyline from "../story.json";
import API from '../utils/api';
import './style.css';
import Signup from "../components/Signup";
import Login from "../components/Login";
import Credits from "../components/Credits";
import Polls from "../components/Polls";
import CoopLogin from "../components/CoopLogin";
// import Multiplayer from "../components/Multiplayer";
import Main from "../components/Main";
import Chat from '../components/chat';

// let time = 0;


function Game() {
    // when logging in, setUser to data from mongodb
    // pass level prop to image and text components to display
    const [user, setUser] = useState({});
    const [authorized, setAuth] = useState(false);
    const [coopUser, setCoopUser] = useState({});
    // state to deal with refresh during game
    // const [refresh, setRefresh] = useState(false);
    // const [timer, setTimer] = useState("");
    const [endGame, setEndGame] = useState(true);

    const [startGame, setStart] = useState(false);
    // state for end of credits
    const [end, setEnd] = useState(false);
    // let history = useHistory();
    const [message, setMessage] = useState('message hideMessage')
    const [passInput, setPassInput] = useState('form-control')
    const [userMessage, setUserMessage] = useState('hideUserMsg signupMsg')
    const [passMessage, setPassMessage] = useState('hidePassMsg signupMsg')
    useEffect(() => {
        // setRefresh(true);
        setAuth(false);
        // coopTimer();
    }, [])


    useEffect(() => {
        // console.log("user before update: ", user)

        API.updateUser(user)
            .then(res => console.log("updated user"))
            .catch(err => console.log("update user error: ", err));
        // console.log("Authorization: ", authorized);

    }, [user])

    useEffect(() => {
        // console.log("new coop user: ", coopUser)

        API.updateCoop(coopUser)
            .then(res => console.log("coop update response: ", res))
            .catch(err => console.log(err));
        // console.log("Authorization: ", authorized);
        // coopTimer();
    }, [coopUser])

    // useEffect(() => {
    //     console.log("tick");
    //     coopTimer();
    // }, [timer])

    // function coopTimer() {
    //     console.log("tick");
    //     // setTimeout(findGame(), 5000);
    //     setTimer(time);
    // }

    // function reset() {
    //     // event.preventDefault();
    //     console.log("reset event:");
    //     // API.findHighScore(user.username)
    //     // .then(res=>{
    //     //     console.log("highscore find: ", res);
    //     //     if(res){
    //     //         API.newHighScore(user.username, user.level, user.lives)
    //     //     }
    //     // })
    //     // write code to push user level, name, lives to a new db table
    //     setUser({ ...user, level: 0, lives: 9 });
    //     setEndGame(true);
    //     // history.push("/main");
    // }


    // function findGame() {
    //     API.findGame(coopUser.title)
    //         .then(res => {
    //             if (res.data) {
    //                 console.log("coop login response", res.data)
    //                 setCoopUser(res.data);
    //                 // coopTimer();
    //                 // setAuth(true);
    //                 // console.log("coopuser: ", coopUser);
    //             } else {
    //                 // modal/text popup alerting user that user doesnt exist
    //             }
    //         }).catch(err => {
    //             console.log("error: ", err);
    //         })
    // }

    function signup(event) {
        event.preventDefault();
        let holder = [];
        holder.length = 0;
        let name = event.target[0].value;
        let pass = event.target[1].value;
        // console.log("username, password: ", name, pass)
        // check all users
        API.findAll()
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    holder.push(res.data[i].username);
                }
                // check if username exists
                if (!holder.includes(name) && pass.length > 7) {
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

                } else if (holder.includes(name))
                    {
                setUserMessage('showUserMsg signupMsg')
                setPassMessage('hidePassMsg')
                } else if (pass.length <= 7) {
                    setPassMessage('showPassMsg signupMsg')
                    setUserMessage('hideUserMsg')
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
                 setMessage('message row showMessage')
                 setPassInput('form-control redInput')
                }

            }).catch(err => {
                console.log("login error: ", err);
            })
    }

    function start(event) {
        event.preventDefault();
        console.log("start event: ", event)
        console.log("user at start: ", user);
        setEnd(false);
        setStart(true);
        if (user.level === 35 || user.level === 24) {
            setUser({ ...user, level: 0, lives: 9 })
        }
        console.log(endGame)
    }

    function endCredits(event) {
        event.preventDefault();
        console.log("end event: ", event)
        console.log("user at credits: ", user);

        setStart(false);
        setEnd(true);
        setEndGame(true);
    }

    function coopLogin(event) {
        event.preventDefault();
        let title = event.target[0].value;
        // console.log("title: ", title);
        API.startCoop(title)
            .then(res => {
                // console.log("login client res: ", res);
                if (res.data) {
                    // console.log("coop login response", res.data)
                    setCoopUser(res.data);
                    setAuth(true);
                    // coopTimer();
                    // console.log("coopuser: ", coopUser);
                } else {
                    // modal/text popup alerting user that user doesnt exist
                }
            }).catch(err => {
                console.log("login error: ", err);
            })
    }

    function coopJoin(event) {
        event.preventDefault();
        // console.log(event.target.form[0].value);
        API.findGame(event.target.form[0].value)
            .then(res => {
                if (res.data) {
                    // console.log("coop login response", res.data)
                    setCoopUser(res.data);
                    setAuth(true);
                    // coopTimer();
                    // console.log("coopuser: ", coopUser);
                } else {
                    // modal/text popup alerting user that user doesnt exist
                }
            }).catch(err => {
                console.log("login error: ", err);
            })
    }

    // if story line lever end return false, then return false
    function choice(event) {
        event.preventDefault();
        setStart(false);
        // console.log(user._id);
        let value = event.target.value;
        if (storyline[user.level].decision) {
            if (storyline[user.level].badchoice) {
                // console.log("working");
                setUser({ ...user, "level": storyline[user.level].decision[value], "lives": user.lives - 1 });
            }
            else {
                setUser({ ...user, "level": storyline[user.level].decision[value] });
            }
        } else if (storyline[user.level].end === true) {

            API.findHighScore(user.username).then(res => {
                console.log("highscore: ", res);
                if (!res.data) {
                    API.newHighScore(user.username, user.level, user.lives)
                } else {
                    if (res.data.lives < user.lives) {
                        API.updateHighScore(res.data._id, user.level, user.lives)
                    }
                }
            })
            setEndGame(false)
        } else {
            setUser({ ...user, "level": user.level + 1 });
        }
    }

    function coopChoice(event) {
        event.preventDefault();
        // console.log(user._id);
        let value = event.target.value;
        if (storyline[coopUser.level].decision) {
            if (storyline[coopUser.level].badchoice) {
                // console.log("working");
                setCoopUser({ ...coopUser, "level": storyline[coopUser.level].decision[value], "lives": coopUser.lives - 1 });
            } else {
                setCoopUser({ ...coopUser, "level": storyline[coopUser.level].decision[value] });
            }
        } else {
            setCoopUser({ ...coopUser, "level": coopUser.level + 1 });
        }
    }



    return (
        <Router>
            <div className="con">

                <Switch>
                    <Route exact path="/">{authorized ? <Redirect to="/main" /> : <Signup signup={signup} authorized={authorized} userMessage={userMessage} passMessage={passMessage}/>}</Route>
                    <Route exact path="/login">{authorized ? <Redirect to="/main" /> : <Login login={login} authorized={authorized} message={message} input={passInput}/>}</Route>
                    <Route exact path="/game">{authorized ? endGame ? <><Image user={user} story={storyline} />
                        <Text user={user} story={storyline} click={choice} /></> : <Redirect to="/credits" /> : <Redirect to="/login" />}
                    </Route>
                    <Route exact path="/main">{startGame ? <Redirect to="/game" /> : <Main start={start} />} </Route>
                    <Route exact path="/credits">{end ? <Redirect to="/main" /> : <Credits end={endCredits} />} </Route>
                    <Route exact path="/coopLogin">{authorized ? <Redirect to="/multiplayer" /> : <CoopLogin coopLogin={coopLogin} coopJoin={coopJoin} user={user} />}  </Route>
                    <Route exact path="/multiplayer">{authorized ? <><Image user={coopUser} story={storyline} /><Chat /><Polls user={coopUser} story={storyline} click={coopChoice} /></> : <Redirect to="/coopLogin" />} </Route>
                </Switch>
            </div>
        </Router >
    )
}


export default Game;