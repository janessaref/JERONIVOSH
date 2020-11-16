import React, { useEffect } from 'react';
import Image from "../components/Image";
import Text from "../components/Text";


// when logging in, setUser to data from mongodb
// pass level prop to image and text components to display
const [user, setUser] = useState({
    username: "Jon",
    password: "test",
    level: 1,
    lives: 9
})
// could set up different state for level so we dont have to update
// all user info when updating level
// const [level, setLevel] = useState(1);




function Game() {
    return (
        <div>
        <Image level={user.level} />
        <Text level={user.level} />
        </div>
    )
}


export default Game;