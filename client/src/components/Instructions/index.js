import React, { useState, useEffect } from "react";
import "./style.css";

function Instructions() {
    const [modalInstructions, setModalInstructions] = useState("modal hideModal");
    const [text, setText] = useState("");
    const [coopText, setCoopText] = useState("");

    useEffect(() => {
    }, [modalInstructions]);

    function hideModalInstructions() {
        setModalInstructions("modal hideModal");

    };

    const showInstructions = () => {
        setModalInstructions("modal showModal");
        setText("You are a cat exploring the city with nine lives and you need to make some tough decisions in order to survive. Make a wrong decision, and your cat loses a life! Your score is based on how many lives you have left by the end of the game.")
        setCoopText("(COMING SOON)");
    }

    return(
        <>
            <button 
            className="btn btn-block" 
            id="InstructionsBtn" 
            onClick={() => {showInstructions()}}>
                How to play
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
                            <p>{text}</p>
                            <p className="font-weight-bold coopPlayer">COOP PLAYER MODE:</p>
                            <p>{coopText}</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={() => hideModalInstructions()}
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal">
                                Exit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Instructions;