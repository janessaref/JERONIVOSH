import React from 'react';
import About from '../About';
import Instructions from '../Instructions';
import './style.css';

// Main Menu
function Main({ start, viewHighScores, logout }) {

    return (
        <div className="container mainMenu">
            <div className="d-flex justify-content-center">
                <div className="card gameTypeContainer col-auto">
                    <div className="card-body">
                        <h1 className="px-auto mb-0 brand">
                            JERONIVOSH
                        </h1>
                        <hr />
                        <div className="row">
                            <div className="col-md-5">
                                <button className="btn btn-block mr-1 hvr-back-pulse" id="soloBtn" onClick={start}>Single Player</button>
                            </div>
                            <div className="col-md-7">
                                <div className="btn btn-block hvr-back-pulse" id="coopBtn">CO-OP (COMING SOON)</div>
                            </div>
                        </div>
                        {/* Instructions component */}
                        <Instructions />
                        <button className="btn btn-block hvr-back-pulse" onClick={viewHighScores} id="highscoresBtn">My High Scores</button>
                        {/* About component */}
                        <About />
                        <button className="btn btn-block hvr-back-pulse" onClick={logout} id="signOutBtn">Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;


