import React, { useState, useEffect } from "react";

function About() {
    const [modalDevelopers, setModalDevelopers] = useState("modal hideModal");

    useEffect(() => {
    }, [modalDevelopers]);

    function hideDevelopersModal() {
        setModalDevelopers("modal hideModal");
    };

    const showDevelopersModal = () => {
        setModalDevelopers("modal showModal");
    };

    return(
        <>
            <button 
            className="btn btn-block hvr-back-pulse" 
            id="aboutBtn" 
            onClick={() => {showDevelopersModal()}}>
                About the Developers
            </button>
            {/* Developers Modal */}
            <div className={modalDevelopers} id="developersModal" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        MEET JERONIVOSH
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body mt-2 overflow-auto">
                            <p className="font-weight-bold">JERRI FONG</p>
                            <p>She is blah blah.</p>
                            <p>Jerri's Portfolio </p>
                            <p className="font-weight-bold">JON SANPEDRO</p>
                            <p>He is blah blah.</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={() => hideDevelopersModal()}
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
};

export default About;