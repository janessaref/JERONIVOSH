import React from "react";
import Settings from './Settings';
function Settings() {
  return (
    <div>
      {/* <h1> JERONIVOSH</h1>
      <audio controls autoplay loop>
        <source src="./assets/4_29.mp3" type="audio/mpeg" />
      </audio> */}
    {/* Settings Modal */}
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
    </div>
  );
}

export default Settings;



