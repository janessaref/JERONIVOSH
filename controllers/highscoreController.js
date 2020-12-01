const highscores = require("../models/Highscores");

module.exports = {
  findOne: function (req, res) {
    // console.log("find score res", req.body)
    // console.log("req username", req.body.username)
    // console.log("find response: ", req.body)
    highscores.findOne({ username: req.body.username })
      .then((highscores) => res.json(highscores))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    // console.log("body: ", req.body)
    highscores
      .create({
        username: req.body.username,
        level: req.body.level,
        lives: req.body.lives
      })
      .then((highscores) => res.json(highscores))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    // console.log("level: ", req.body)
    // console.log("id: ", req.body._id)
    highscores.findByIdAndUpdate(
      req.body.id
      ,
      {
        level: req.body.level,
        lives: req.body.lives
      })
      .then((highscores) => res.json(highscores))
      .catch((err) => {
        // console.log("error: ", err);
        return res.status(422).json(err)
      });
  },
  findAll: function (req, res) {
    highscores.find({})
      .then((highscores) => res.json(highscores))
      .catch((err) => res.status(422).json(err));
  },
  findAllByUser: function (req, res) {
    // console.log("username: ", req.body.username)
    highscores.find({ username: req.body.username })
      .then((highscores) => res.json(highscores))
      .catch((err) => res.status(422).json(err));

  }
};
