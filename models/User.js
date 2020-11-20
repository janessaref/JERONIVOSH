const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        // required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        // required: true
    },
    level: {
        type: Number
    },
    lives: {
        type: Number
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;