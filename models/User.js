const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    level: {
        type: Number,
        default: 0
    },
    lives: {
        type: Number,
        default: 9
    }
});



const User = mongoose.model("User", UserSchema);

module.exports = User;