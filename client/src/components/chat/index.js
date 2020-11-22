import react, { userState, useEffect } from "react";
import Style from "./style.css";
import io from "socket.io";
import TextField from "@material-ui/core/TextField";

const socket = io.connect("http://localhost:3001");

function Chat() {
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setChat] = userState([]);

  return (
    <div>
      <form onSubmit={onMessageSubmit}>
        <h1>Messanger</h1>
        <div className="name-field">
          <TextField
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.name}
            label="name"
          />
        </div>
        <div>
          <TextField
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id='outlined-multiline-static'
            variant='outlined'
            label="message"
          />
        </div>
        <button>Send Message</button>
      </form>
     <div className='render-chat'></div>
    </div>
  );
}

export default Chat;
