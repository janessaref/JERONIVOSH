import React from "react";
import Settings from './Settings';
function Settings() {

  const [modalSettings, setModalSettings] = useState("modal hiddenModal");

  function hideModalSettings() {
    setModalSettings("modal hiddenModal");
};

  const showModalSettings() {
    setModalSettings("modal popupModal")
  }
 
  return (
    <div>
      {/* <h1> JERONIVOSH</h1>
      <audio controls autoplay loop>
        <source src="./assets/4_29.mp3" type="audio/mpeg" />
      </audio> */}
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
                            <button className="backtoMain">Go to Main Menu</button>
                            <button className="Sign Out">Sign Out</button>
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



