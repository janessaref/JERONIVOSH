import React, { useState, useEffect } from "react";
import "./style.css";

function Instructions() {
    const [modalInstructions, setModalInstructions] = useState("modal hideModal");
    const [text, setText] = useState();

    useEffect(() => {
    }, [modalInstructions]);

    function hideModalInstructions() {
        setModalInstructions("modal hideModal");
    };

    return(
        <>
            <button className="btn mr-1" id="InstructionsBtn">Instructions</button>

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
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                className="bi bi-archive"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
            <div className="modal-footer">
              <button
                // onClick={() => hideModalInstructions()}
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