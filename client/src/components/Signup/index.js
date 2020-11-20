import React from 'react';

function login() {

    return (
        <div class="gameplay img-fluid">

            <form id="login">
                <div class="form-group">
                    <label for="userName">User Name: </label>
                    <input type="text" class="form-control" id="userName" placeholder="Enter User Name: " />
                </div>
                <div class="form-group">
                    <label for="password">Password: </label>
                    <input type="password" class="form-control" id="password" placeholder="Password" />
                </div>
                <button id="submit" type="submit" class="btn btn-primary">Submit</button>
            </form>
            <button id="start" type="button" class="btn btn-primary">Start!</button>
        </div>
    )
}