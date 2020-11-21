import React from "react";

function Login() {
    return(
        <>
            <audio class="float-right" controls autoplay loop>
                <source src="./assets/4_29.mp3" type="audio/mpeg"/>
            </audio>
        <h1 class="float-left ml-3"> JERONIVOSH</h1>
        
        <div class="gameplay img-fluid">
            <form id="login">
            <div class="form-group">
                <label for="userName">User Name: </label>
                <input type="text" class="form-control" id="userName" placeholder="Enter User Name: "/>
            </div>
            <div class="form-group">
                <label for="password">Password: </label>
                <input type="password" class="form-control" id="password" placeholder="Password"/>
            </div>
            <button id="submit" type="submit" class="btn btn-primary">Submit</button>
            </form>
            <button id="start" type="button" class="btn btn-primary">Start!</button>
        </div>
      </>
    )
}

export default Login;