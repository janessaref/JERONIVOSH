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
        </>
    );
}

export default Instructions;