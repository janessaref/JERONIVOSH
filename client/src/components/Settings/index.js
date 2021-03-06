import React, { useState } from "react";
import Signout from "../Signout";
import "./style.css";

// Settings gear displayed in the game to show and hide the modal with options of logging out the user or going back to main menu
function Settings({backToMain, logoutUser}) {
  // Variable to hide and show the modal 
  const [modalSettings, setModalSettings] = useState("modal hideModal");

  function hideModalSettings() {
    setModalSettings("modal hideModal");
  };

  const showModalSettings = () => {
    setModalSettings("modal showModal")
  };
 
    return (
      <div className="settingsButton">
        {/* Settings icon to show modal when clicked */}
        <img src="./assets/settingsgear.png" onClick={() => {showModalSettings()}} id="settingsGear" alt="settings icon" />

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
                  className="btn btn-block backtoMainMenu hvr-back-pulse" 
                  onClick={backToMain}>Back to Main Menu
                </button>

                {/* Signout component */}
                <Signout logoutUser={logoutUser}/>
              </div>
              {/* Exit button to hide modal */}
              <div className="modal-footer">
                <button
                  onClick={() => hideModalSettings()}
                  type="button"
                  className="btn hvr-back-pulse"
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



