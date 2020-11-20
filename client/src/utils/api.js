import axios from 'axios';

const API = {
    signUp: function(user){
        return axios.post("/api/user", user);
    },
    login: function(user){
        return axios.get("/api/user");
    },
    updateLevel: function(user){
        return axios.put("/api/user");
    }
}

export default API;