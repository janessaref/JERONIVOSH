import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signout from "../Signout";
import "./style.css"
function Settings({backToMain, logoutUser}) {

  const [modalSettings, setModalSettings] = useState("modal hideModal");

  function hideModalSettings() {
    setModalSettings("modal hideModal");
};

  const showModalSettings = () => {
    setModalSettings("modal showModal")
  }
 
  return (
    <div className="settingsButton">
      {/* <h1> JERONIVOSH</h1>
      <audio controls autoplay loop>
        <source src="./assets/4_29.mp3" type="audio/mpeg" />
      </audio> */}

      <button 
            className="btn float-right" 
            id="settingsBtn" 
            onClick={() => {showModalSettings()}}>
                Settings
            </button>
    {/* Settings Modal */}
    <div className={modalSettings} id="settingsModal" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        SETTINGS
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body mt-2 overflow-auto">

                          <button className="btn btn-block backtoMainMenu" onClick={backToMain}>Back to Main Menu
                              {/* <Link to="/main">Back to Main Menu</Link> */}
                              </button>

                           
                            <Signout logoutUser={logoutUser}/>
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={() => hideModalSettings()}
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



