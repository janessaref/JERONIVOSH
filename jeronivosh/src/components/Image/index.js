import { userInfo } from 'os';
import React from 'react';
import "./style.css"

function Image({ user }) {
    return (
        <img src={user.Image}></img>
    )
}

export default Image;