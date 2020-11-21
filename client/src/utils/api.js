import axios from 'axios';

const API = {
    signUp: function (user) {
        return axios.post("/api/user/", user);
    },
    getUser: function (user, pass) {
        return axios.get("/api/user/", {user});
    },
    updateUser: function (user) {
        return axios.put("/api/user/", user);
    },
    findAll: function () {
        return axios.get("/api/user/all")
    }
}

export default API;