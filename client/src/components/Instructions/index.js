import React, { useState, useEffect } from "react";
import "./style.css";


// How to play instructions displayed on the main page with a modal
function Instructions() {
    // variable to hide or show the instructions modal
    const [modalInstructions, setModalInstructions] = useState("modal hideModal");

    useEffect(() => {
    }, [modalInstructions]);

    function hideModalInstructions() {
        setModalInstructions("modal hideModal");
    };

    const showInstructions = () => {
        setModalInstructions("modal showModal");
    };

    return(
        <>
            {/* button displayed in the main menu */}
            <button 
            className="btn btn-block hvr-back-pulse" 
            id="instructionsBtn" 
            onClick={() => {showInstructions()}}>
                How to Play
            </button>
            {/* Instructions Modal */}
            <div className={modalInstructions} id="instuctionsModal" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        Gameplay Instructions
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body mt-2 overflow-auto">
                            <p className="font-weight-bold singlePlayer">SINGLE PLAYER MODE:</p>
                            <p>You are a cat exploring the city with nine lives and you need to make some tough decisions in order to survive.</p>
                            <p>Make a wrong decision and your cat loses a life! </p>
                            <p>Your score is based on how many lives you have left by the end of the game.</p> 
                            <p>P.S. Your game progress is auto-saved!</p>
                            <p className="font-weight-bold coopPlayer">COOP PLAYER MODE:</p>
                            <p>(COMING SOON)</p>
                        </div>
                        <div className="modal-footer">
                            {/* Exit button to hide the modal */}
                            <button
                                onClick={() => hideModalInstructions()}
                                type="button"
                                className="btn hvr-back-pulse"
                                data-dismiss="modal">
                                Exit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Instructions;