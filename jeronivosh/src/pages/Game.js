import React, { useEffect, useState } from 'react';
import Image from "../components/Image";
import Text from "../components/Text";
import story from "../story.json";


function Game() {
// when logging in, setUser to data from mongodb
// pass level prop to image and text components to display
const [user, setUser] = useState({
    username: "Jon",
    password: "test",
    level: 1,
    lives: 9
})
console.log(user);
const [storyline, setStory] = useState(story);
console.log(storyline);
// could set up different state for level so we dont have to update
// all user info when updating level
// const [level, setLevel] = useState(1);

// function save(){
//     setUser({...user, level: level, lives, lives});
// }




    return (
        <div>
        <Image user={user} story={storyline} />
        <Text user={user} story={storyline} />
        </div>
    )
}


export default Game;