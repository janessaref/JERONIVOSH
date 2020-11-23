import axios from 'axios';

const API = {
    signUp: function (user) {
        return axios.post("/api/user", user);
    },
    getUser: function (username, password) {
        return axios.post("/api/user/login", {username, password});
    },
    updateUser: function (user) {
        return axios.put("/api/user", user);
    },
    findAll: function () {
        return axios.get("/api/user/all")
    },
    startCoop: function(title){
        return axios.post("/api/user/coop", {title});
    },
    findGame: function(title){
        return axios.get("/api/user/coop", {title});
    } 
}

export default API;