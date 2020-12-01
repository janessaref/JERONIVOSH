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
                            return ({ ...scores, ending: "Cemetery" })
                        } else {
                            return ({ ...scores, ending: "Home" })
                        }

                    })
                    // console.log("scores: ", final)

                    setHighScores(final.slice(0, 10))
                    // console.log(highScores)
                }
            })
            .catch(err => {
                console.log(err);
            })

    }, [])

    return (
        <div>
            <div className="container mainMenu">
                <div className="row d-flex justify-content-center container">
                    <div className="card myScoresContainer col-lg-8">
                        <div className="card-body">
                            <h2 className="px-auto mb-0 username">
                                {user.username}
                            </h2>
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
                                    }) : <div>No High Scores</div>}
                                    
                                </div>
                                <div className="col-sm-4"></div>
                                <button className="col-sm-4 btn btn-block hvr-back-pulse" onClick={exitScores}>Main Menu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highscores;