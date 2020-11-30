import React, { useState, useEffect } from 'react';
import API from "../../utils/api";
import "./style.css";

function Highscores({ user, exitScores }) {

    const [highScores, setHighScores] = useState([]);
    const [data, setData] = useState(false);

    useEffect(() => {
        let sorted = [];
        sorted.length = 0;
        console.log("username: ", user.username)
        console.log("score useffect running");
        API.allScoresByUser(user.username)
            .then(res => {
                console.log("find all scores: ", res)
                if (res.data.length !== 0) {
                    console.log("there is data")
                    setData(true);


                    sorted = res.data.sort(function (a, b) {
                        if (a.lives < b.lives) { return 1; }
                        if (a.lives > b.lives) { return -1; }
                        return 0;
                    })

                    var scores = [...sorted]
                    let final = scores.map(scores => {
                        if (scores.level === 35) {
                            return ({ ...scores, ending: "Cemetary Ending" })
                        } else {
                            return ({ ...scores, ending: "Home Ending" })
                        }

                    })
                    console.log("scores: ", final)

                    setHighScores(final.slice(0, 10))
                    console.log(highScores)
                }
            })
            .catch(err => {
                console.log(err);
            })

    }, [])

    return (
        <div>
            <div className="container mainMenu">
                <div className="d-flex justify-content-center">
                    <div className="card gameTypeContainer col-auto">
                        <div className="card-body">
                            <h1 className="px-auto mb-0 brand username">
                                {user.username}
                            </h1>
                            <hr />
                            <div className="row">

                                <div className="scores">
                                    {data ? highScores.map(score => {
                                        return (
                                            <div>
                                                <p className="name" key={score._id}>{"Ending: " + score.ending}</p>
                                                <p className="name">{"Score: " + score.lives}</p>
                                            </div>
                                        )
                                    }) : <div className="noScore">No High Scores</div>}
                                    <button className="btn btn-block hvr-back-pulse" onClick={exitScores}>Main Menu</button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Highscores;