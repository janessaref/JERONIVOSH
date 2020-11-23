const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoopSchema = new Schema({
    coop: {
        type: String,
        trim: true,
        required: true,
        unique: true
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

const Coop = mongoose.model("Coop", UserSchema);

module.exports = Coop;