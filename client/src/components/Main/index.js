import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import CoopLogin from '../CoopLogin';
import './style.css'

function Main({start}) {


   return(
    <div className="container mainMenu">
        <div className="d-flex justify-content-center">
            <div class="card gameTypeContainer col-auto">
                <div className="card-body">
                    <h1 className="px-auto mb-0 brand">
                    JERONIVOSH
                    </h1>
                    <hr/>
                        {/* <Link to={"/game"}><div className="btn mr-1">SOLO</div></Link> */}
                        <button className="btn mr-1" id="soloBtn" onClick={start}>Single Player</button>
                        {/* <Link to={"/coopLogin"}> */}
                        <div className="btn ml-1" id ="coopBtn" >CO-OP (AVAILABLE SOON)</div>
                        {/* </Link> */}
                </div> 
            </div>
        </div>
    </div>
   ) 
}

export default withRouter(Main);


