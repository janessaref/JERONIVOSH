const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "You must enter a user name"
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