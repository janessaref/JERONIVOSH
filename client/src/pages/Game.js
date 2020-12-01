import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
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
import Main from "../components/Main";
import Settings from '../components/Settings';
import Highscores from "../components/Highscores";

function Game() {

    // when logging in, setUser to data from mongodb
    // pass level prop to image and text components to display
    const [user, setUser] = useState({});
    const [authorized, setAuth] = useState(false);
    const [coopUser, setCoopUser] = useState({});
    const [endGame, setEndGame] = useState(true);
    const [startGame, setStart] = useState(false);

    // state for end of credits
    const [end, setEnd] = useState(false);
    const [message, setMessage] = useState('message hideMessage');
    const [passInput, setPassInput] = useState('form-control');

    // state for validation messages
    const [userMessage, setUserMessage] = useState('hideUserMsg signupMsg');
    const [passMessage, setPassMessage] = useState('hidePassMsg signupMsg');
    const [userLength, setUserLength] = useState('hidePassMsg signupMsg')
    const [livesStyle, setLivesStyle] = useState('lives lives-color1');

    // state for viewing personal high scores
    const [userScores, setUserScores] = useState(false);

    useEffect(() => {       
        setAuth(false);
    }, [])

    useEffect(() => {
        if (user.lives === 9) {
            setLivesStyle('lives lives-color1')
        } else if (user.lives === 8) {
            setLivesStyle('lives lives-color2')
        } else if (user.lives === 7) {
            setLivesStyle('lives lives-color3')
        } else if (user.lives === 6) {
            setLivesStyle('lives lives-color4')
        } else if (user.lives === 5) {
            setLivesStyle('lives lives-color5')
        } else if (user.lives === 4) {
            setLivesStyle('lives lives-color6')
        } else if (user.lives === 3) {
            setLivesStyle('lives lives-color7')
        } else if (user.lives <= 2) {
            setLivesStyle('lives lives-color8')
        }
    }, [user.lives])

    useEffect(() => {
        API.updateUser(user)
            .then(res => console.log("updated user"))
            .catch(err => console.log("update user error: ", err));
    }, [user])

    useEffect(() => {
        API.updateCoop(coopUser)
            .then(res => console.log("coop update response: ", res))
            .catch(err => console.log(err));
    }, [coopUser])


    function signup(event) {
        event.preventDefault();
        let holder = [];
        holder.length = 0;
        let name = event.target[0].value.toLowerCase();
        let pass = event.target[1].value.trim();
        // check all users
        API.findAll()
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    holder.push(res.data[i].username);
                }
                // check if username exists
                if (!holder.includes(name) && pass.length > 7 && name.length < 15) {
                    // add new user
                    API.signUp({ username: name, password: pass })
                        .then(function (res) {
                            setUser({
                                username: res.data.username,
                                level: res.data.level,
                                lives: res.data.lives,
                                id: res.data._id
                            })
                            setAuth(true);
                        }).catch(err => {
                            console.log("error: ", err);
                        })
                        // Conditions for validation messages
                } else if (holder.includes(name)) {
                    setUserMessage('showUserMsg signupMsg')
                    setPassMessage('hidePassMsg')
                    setUserLength('hidePassMsg signupMsg')
                } else if (pass.length <= 7) {
                    setPassMessage('showPassMsg signupMsg')
                    setUserMessage('hideUserMsg')
                    setUserLength('hidePassMsg signupMsg')
                } else if (name.length >= 15) {
                    setUserLength('showPassMsg signupMsg')
                    setUserMessage('hideUserMsg')
                    setPassMessage('hidePassMsg')
                }
            }
        )
    }

    // function to login user
    function login(event) {
        event.preventDefault();
        setUserScores(false);
        let name = event.target[0].value.toLowerCase();
        let pass = event.target[1].value.trim();
        API.getUser(name, pass)
            .then(res => {
                console.log("login client res: ", res);
                if (res.data) {
                    setUser(res.data);
                    setAuth(true);
                }
            }).catch(err => {
                // validation messages and error handling
                console.log("login error: ", err);
                setMessage('message row showMessage')
                setPassInput('form-control redInput')
            }
        )
    }

    // Function to view highscores. 
    function viewHighScores(event) {
        event.preventDefault();
        console.log("view high scores working");
        setUserScores(true);
    }
    // Function to exit highscores
    function exitScores(event) {
        event.preventDefault();
        console.log("exit high scores working");
        setUserScores(false);
    }

    // Function to start game, send user back to the beginning if the user finished the game. 
    function start(event) {
        event.preventDefault();
        setEnd(false);
        setStart(true);
        if (user.level === 35 || user.level === 24) {
            setUser({ ...user, level: 0, lives: 9 })
        }
    }

    // Function to Go back to the main page.
    function backToMain(event) {
        event.preventDefault();
        setStart(false);
    }

    // Function for end credits scene. 
    function endCredits(event) {
        event.preventDefault();
        setStart(false);
        setEnd(true);
        setEndGame(true);
    }

    // Function to log user out.
    function logoutUser(event) {
        event.preventDefault();
        setStart(false);
        setAuth(false);
        setUserMessage('hideUserMsg signupMsg');
        setPassMessage('hidePassMsg signupMsg');
        setPassInput('form-control');
        setMessage('message hideMessage');
        setUserLength('hidePassMsg signupMsg')
    };

    // Function for game logic, checks if for the decision the user made
    function choice(event) {
        event.preventDefault();
        let value = event.target.value;
        // Checks for bad decisions and if the user is at the end of the game.
        if (storyline[user.level].decision) {
            if (storyline[user.level].badchoice) {
                setUser({ ...user, "level": storyline[user.level].decision[value], "lives": user.lives - 1 });
            }
            else {
                setUser({ ...user, "level": storyline[user.level].decision[value] });
            }
        } else if (storyline[user.level].end === true) {

            API.newHighScore(user.username, user.level, user.lives)
            setEndGame(false)
        } else {
            setUser({ ...user, "level": user.level + 1 });
        }
    }

    // Function for Future coop game logic.
    function coopChoice(event) {
        event.preventDefault();
        let value = event.target.value;
        if (storyline[coopUser.level].decision) {
            if (storyline[coopUser.level].badchoice) {
                setCoopUser({ ...coopUser, "level": storyline[coopUser.level].decision[value], "lives": coopUser.lives - 1 });
            } else {
                setCoopUser({ ...coopUser, "level": storyline[coopUser.level].decision[value] });
            }
        } else {
            setCoopUser({ ...coopUser, "level": coopUser.level + 1 });
        }
    }

    // Function for future coop login.
    function coopLogin(event) {
        event.preventDefault();
        let title = event.target[0].value;
        API.startCoop(title)
            .then(res => {
                if (res.data) {
                    setCoopUser(res.data);
                    setAuth(true);
                } else {
                    // Future validation messages.
                }
            }).catch(err => {
                console.log("login error: ", err);
            }
        )
    }

    // Function for future coop joining
    function coopJoin(event) {
        event.preventDefault();
        API.findGame(event.target.form[0].value)
            .then(res => {
                if (res.data) {
                    setCoopUser(res.data);
                    setAuth(true);
                } else {
                // Future validation messages. 
                }
            }).catch(err => {
                console.log("login error: ", err);
            }
        )
    }

    // erases the validation messages when button is clicked. 
    function erase() {
        setUserMessage('hideUserMsg signupMsg');
        setPassMessage('hidePassMsg signupMsg');
        setPassInput('form-control');
        setMessage('message hideMessage');
        setUserLength('hidePassMsg signupMsg')
    }


    return (
        <Router>
            <div className="con">

                <Switch>

                    <Route exact path="/">{authorized ? <Redirect to="/main" /> : <Signup signup={signup} authorized={authorized} userMessage={userMessage} passMessage={passMessage} erase={erase} userLengthMessage={userLength} />}</Route>
                    <Route exact path="/login">{authorized ? <Redirect to="/main" /> : <Login login={login} authorized={authorized} message={message} input={passInput} erase={erase} />}</Route>
                    <Route exact path="/login">{authorized ? <Redirect to="/main" /> : <Login login={login} authorized={authorized} />}</Route>
                    <Route exact path="/game">{authorized ? startGame ? endGame ? <><Image user={user} story={storyline} lives={livesStyle} />
                        <Settings backToMain={backToMain} logoutUser={logoutUser} />
                        <Text user={user} story={storyline} click={choice} /></> : <Redirect to="/credits" /> : <Redirect to="/main"></Redirect> : <Redirect to="/login" />}
                    </Route>
                    <Route exact path="/main">{authorized ? !userScores ? startGame ? <Redirect to="/game" /> : <Main start={start} logout={logoutUser} viewHighScores={viewHighScores} /> : <Redirect to="/highscores" /> : <Redirect to="/login" />} </Route>
                    <Route exact path="/credits">{authorized ? end ? <Redirect to="/main" /> : <Credits end={endCredits} /> : <Redirect to="/login" />} </Route>
                    <Route exact path="/highscores">{authorized ? userScores ? <><Highscores user={user} exitScores={exitScores} /></> : <Redirect to="/main" /> : <Redirect to="/login" />} </Route>
                    <Route exact path="/coopLogin">{authorized ? <Redirect to="/multiplayer" /> : <CoopLogin coopLogin={coopLogin} coopJoin={coopJoin} user={user} />}  </Route>
                    <Route exact path="/multiplayer">{authorized ? <><Image user={coopUser} story={storyline} /><Polls user={coopUser} story={storyline} click={coopChoice} /></> : <Redirect to="/coopLogin" />} </Route>
                    <Route><Redirect to="/login" /></Route>
                </Switch>
            </div>
        </Router >
    )
}


export default Game;



// coop code
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