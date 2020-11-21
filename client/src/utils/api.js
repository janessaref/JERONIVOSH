import axios from 'axios';

const API = {
    signUp: function(user){
        return axios.post("/api/user", user);
    },
    getUser: function(username){
        return axios.get("/api/user", {username});
    },
    updateLevel: function(id, level){
        return axios.put(`/api/user/${id}`, {level});
    }
}

export default API;