import React, { useState, useEffect } from "react";
import "./style.css";

function Instructions() {
    const [modalInstructions, setModalInstructions] = useState("modal hideModal");
    const [text, setText] = useState("instructions");

    useEffect(() => {
    }, [modalInstructions]);

    function hideModalInstructions() {
        setModalInstructions("modal hideModal");

    };

    const showInstructions = () => {
        setModalInstructions("modal showModal");
    }

    return(
        <>
            <button 
            className="btn mr-1" 
            id="InstructionsBtn" 
            onClick={() => {showInstructions()}}>
                Instructions
            </button>

            <div className={modalInstructions} id="instuctionsModal" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body mt-2">
              {/* <p>{text}</p> */}
             
            </div>
            <div className="modal-footer">
              <button
                onClick={() => hideModalInstructions()}
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
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