import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'

function Main() {
   return(
    <div className="container menu">
        
            <Link to={"/game"}><div className="btn">SOLO</div></Link>
        
        <div className="btn">
            CO-OP
        </div>

    </div>
   ) 
}

export default Main;

