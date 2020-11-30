import React, { useState } from "react";
import Signout from "../Signout";
import "./style.css";

// Settings gear displayed in the game to show and hide the modal with options of logging out the user or going back to main menu
function Settings({backToMain, logoutUser}) {
  const [modalSettings, setModalSettings] = useState("modal hideModal");

  function hideModalSettings() {
    setModalSettings("modal hideModal");
  };

  const showModalSettings = () => {
    setModalSettings("modal showModal")
  };
 
    return (
      <div className="settingsButton">
        <img src="./assets/settingsgear.png" onClick={() => {showModalSettings()}} id="settingsGear"/>

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
                <button 
                  className="btn btn-block backtoMainMenu" 
                  onClick={backToMain}>Back to Main Menu
                </button>

                {/* Signout component */}
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
};

export default Settings;



