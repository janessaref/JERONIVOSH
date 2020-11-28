import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import CoopLogin from '../CoopLogin';
import './style.css'

function Main() {


   return(
    <div className="container menu">
            
        <div className="text-center pad">
        
            <div className="col-auto ">
                <Link to={"/game"}><div className="btn mr-1">SOLO</div></Link>
                
                {/* <Link to={"/coopLogin"}> */}
                        <div className="btn ml-1">CO-OP (AVAILABLE SOON)</div>
                 {/* </Link> */}
                
            </div>
        </div>

    </div>
   ) 
}

export default withRouter(Main);

