import axios from 'axios';

const API = {
    signUp: function (user) {
        return axios.post("/api/user", user);
    },
    getUser: function (username, password) {
        return axios.post("/api/user/login", { username, password });
    },
    updateUser: function (user) {
        return axios.put("/api/user", user);
    },
    findAll: function () {
        return axios.get("/api/user/all")
    },
    findHighScore: function(username){
        return axios.post("/api/user/findhighscores", {username})
    },
    newHighScore: function(username, level, lives){
        return axios.post("/api/user/newhighscore", {username, level, lives})
    },
    updateHighScore: function(id, level, lives){
        return axios.put("/api/user/highscores", {id, level, lives})
    },
    allHighScores: function(){
        return axios.get("/api/user/allscores")
    },
    allScoresByUser: function(username){
        return axios.get("/api/user/allscores", {username})
    },
    startCoop: function (title) {
        return axios.post("/api/user/coop", { title });
    },
    findGame: function (title) {
        return axios.get("/api/user/coop", { title });
    },
    updateCoop: function (user) {
        return axios.put("api/user/coop", user)
    }
}

export default API;