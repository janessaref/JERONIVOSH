const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require("bcryptjs");
// const uniqueValidator = require("mongoose-unique-validator");

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

// UserSchema.plugin(uniqueValidator);

// UserSchema.methods.generateHash = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };
// UserSchema.methods.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// };

const User = mongoose.model("User", UserSchema);

module.exports = User;