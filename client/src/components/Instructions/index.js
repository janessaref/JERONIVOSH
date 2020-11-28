import React from "react";
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

    );
}

export default Instructions;