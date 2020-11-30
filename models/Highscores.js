const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HighScoreSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    lives: {
        type: Number,
        required: true
    }
});

const Highscores = mongoose.model("Highscores", HighScoreSchema);

module.exports = Highscores;