import React, {useState, useEffect} from 'react';
import API from "../../utils/api";
function Highscores({user}) {

    const [highScores, setHighScores] = useState({});


    useEffect(() => {
        API.allHighScores(user.username)
            .then(res => {
                console.log(res)

                var sorted = res.data.sort(function (a, b) {
                    if (a.lives < b.lives) { return 1; }
                    if (a.lives > b.lives) { return -1; }
                    return 0;
                })

                var scores = [...sorted]
                // console.log(scores)

                setHighScores(scores.slice(0, 10))
                // console.log(highScores)
            })
            .catch(err => {
                console.log(err);
            })

    }, [])

    return (
        <div>
            {highScores.map(score => {
                return (
                    <p className="name" key={score.username}>{score.username}: {score.lives}</p>
                )
            })}
        </div>
    )
}

export default Highscores;