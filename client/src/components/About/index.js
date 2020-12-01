import React, { useState, useEffect } from "react";
import "./style.css";

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
                About the Creators
            </button>
            {/* Developers Modal */}
            <div className={modalDevelopers} id="developersModal" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        Meet Jeronivosh
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close">
                            </button>
                        </div>
                        <small className="mt-2">Click on the icon to check out their portfolio!</small>
                        <div className="modal-body mt-2 overflow-auto">
                           
                           
                            <a 
                            href="http://janessaref.herokuapp.com" 
                            target="_blank"
                            rel="noreferrer"
                            className="text-center"> <img src="./assets/developers/dog.png" className="developers" id="dog" />
                        </a>
                        <p className="font-weight-bold">JERRI FONG</p>
                            <a 
                            href="#" 
                            target="_blank"
                            rel="noreferrer"
                            className="text-center">
                                <img src="./assets/developers/bird.png" className="developers" id="bird" />
                            </a>
                            <p className="font-weight-bold mt-2">JON SANPEDRO</p>
            
                            <a 
                            href="#" 
                            target="_blank"
                            rel="noreferrer"
                            className="text-center">
                                  <img src="./assets/developers/spider.png" className="developers" id="spider" />
                            </a>
                            <p className="font-weight-bold mt-2">IVAN TORRES</p>
                         
                            <a 
                            href="#" 
                            target="_blank"
                            rel="noreferrer"
                            className="text-center">
                                  <img src="./assets/developers/cat.png" className="developers" id="cat" />
                            </a>
                            <p className="font-weight-bold mt-1">JOSH GLUGATCH</p>
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