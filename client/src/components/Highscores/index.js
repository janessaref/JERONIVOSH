import React, { useState, useEffect } from 'react';
import API from "../../utils/api";
import "./style.css";

function Highscores({ user, exitScores }) {

    const [highScores, setHighScores] = useState([]);
    const [data, setData] = useState(false);

    useEffect(() => {
        API.allHighScores(user.username)
            .then(res => {
                console.log("find all scores: ", res)
                if (res.data.length !== 0) {
                    console.log("there is data")
                    setData(true);


                    var sorted = res.data.sort(function (a, b) {
                        if (a.lives < b.lives) { return 1; }
                        if (a.lives > b.lives) { return -1; }
                        return 0;
                    })

                    var scores = [...sorted]
                    console.log(scores)

                    setHighScores(scores.slice(0, 10))
                    console.log(highScores)
                }
            })
            .catch(err => {
                console.log(err);
            })

    }, [])

    return (
        <div>
            <div className="username">{user.username}</div>
            <div className="scores">
                {data ? highScores.map(score => {
                    return (
                        <p className="name" key={score.username}>{score.username}: {score.lives}</p>
                    )
                }) : <div className="noScore">No High Scores</div>}
            </div>
            <button className="btn btn-block hvr-back-pulse" onClick={exitScores}>Main Menu</button>
        </div>
    )
}

export default Highscores;