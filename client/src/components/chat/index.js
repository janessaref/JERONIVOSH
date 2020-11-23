import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost/3001";

function Chat() {
    const [response, setResponse] = useState("");

    useEffect(() => {
        console.log(response);
        const socket = socketIOClient(ENDPOINT);
        socket.on("FromAPI", data => {
            setResponse(data);
        });
        return () => socket.disconnect();
    }, []);

    return (
        <div>
            <input type="text" className="form-control" id="message" placeholder="Enter Message Here: " />
            <p className="card bg-light">It's:{response}<time dateTime={response}>{response}</time></p>
        </div>
    );
}

export default Chat;