import React, { useState, useEffect } from "react";
import Style from "./style.css";
import io from "socket.io-client";
// import TextField from '@material-ui/core/TextField'
// import TextField from "@material-ui/core/TextField";

const socket = io.connect("http://localhost:3001");

function Chat() {
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);


const onTextChange = e => {
    setState({...state, [e.target.name]: e.target.value})
}

useEffect(() => {
    socket.on('message', ({name, message}) => {
        setChat([...chat, {name, message}])
    })
})

const onMessageSubmit = (e) => {
    e.preventDefault();

    const {name, message} = state
    socket.emit('message', {name, message})
    setState({message: '', name})
}

  const renderChat = () => {
    return chat.map(({ name, message }, i) => (
      <div key={i}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  return (
    <div>
      <form onSubmit={onMessageSubmit}>
        <h1>Messanger</h1>
        <div className="name-field">
          <input
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.name}
            label="name"
          />
        </div>
        <div>
          <input
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="message"
          />
        </div>
        <button>Send Message</button>
      </form>
      <div className="render-chat">
        <h1>chat Log</h1>
        {renderChat()}
      </div>
    </div>
  );
}

export default Chat;
