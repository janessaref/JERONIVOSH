import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function LoginPage() {


   return(
    <div className="container menu">
        
            <Link to={"/game"}><div className="btn">SOLO</div></Link>
        
            <Link to={"/coopLogin"}><div className="btn">CO-OP</div></Link>

        

    </div>
   ) 
}

export default LoginPage;

