import React, { useState, useEffect } from "react";
import "./style.css";

// About the developers modal
function About() {
    // Variable to show or hide the modal
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
            {/* Button displayed in the main menu page */}
            <button 
            className="btn btn-block hvr-back-pulse" 
            id="aboutBtn" 
            onClick={() => {showDevelopersModal()}}>
                About the Creators
            </button>
            {/* Developers Modal */}
            <div className={modalDevelopers} id="developersModal" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        Meet the Team
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close">
                            </button>
                        </div>
                        <small className="mt-2">Click on the icon to check out their portfolio!</small>
                        <div className="modal-body mt-2 overflow-auto">
                            {/* Jerri Fong's Portfolio */}
                            <a 
                            href="https://janessaref.herokuapp.com" 
                            target="_blank"
                            rel="noreferrer"
                            className="text-center">
                                <img src="./assets/developers/dog.png" className="developers" id="dog" alt="dog icon"/>
                            </a>
                            <p className="font-weight-bold">JERRI FONG</p>
                             {/* Jon SanPedro's Portfolio */}
                            <a 
                            href="https://jsp-react-portfolio.herokuapp.com/" 
                            target="_blank"
                            rel="noreferrer"
                            className="text-center">
                                <img src="./assets/developers/bird.png" className="developers" id="bird" alt="bird icon" />
                            </a>
                            <p className="font-weight-bold mt-2">JON SANPEDRO</p>
                             {/* Ivan Torres Mia's Portfolio */}
                            <a 
                            href="https://ivan-torres-mia.herokuapp.com/" 
                            target="_blank"
                            rel="noreferrer"
                            className="text-center">
                                  <img src="./assets/developers/spider.png" className="developers" id="spider" alt="spider icon" />
                            </a>
                            <p className="font-weight-bold mt-2">IVAN TORRES</p>
                             {/* Josh Glugatch's Portfolio */}
                            <a 
                            href="https://josh-glugatch.herokuapp.com/" 
                            target="_blank"
                            rel="noreferrer"
                            className="text-center">
                                  <img src="./assets/developers/cat.png" className="developers" id="cat" alt="cat icon" />
                            </a>
                            <p className="font-weight-bold mt-1">JOSH GLUGATCH</p>
                        </div>
                        <div className="modal-footer">
                            {/* Exit the modal and hide the modal */}
                            <button
                                onClick={() => hideDevelopersModal()}
                                type="button"
                                className="btn btn-secondary hvr-back-pulse"
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