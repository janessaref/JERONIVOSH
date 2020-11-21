const db = require("../models/User");

module.exports = {
  findOne: function (req, res) {
    console.log("find response: ", req.body)
    db.findOne(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("body: ", req.body)
    db
      .create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log("level: ", req.body)
    console.log("id: ", req.body.id)
    db.findByIdAndUpdate(
      req.body.id
      ,
      {
        level: req.body.level,
        lives: req.body.lives
      })
      .then((user) => res.json(user))
      .catch((err) => {
        console.log("error: ", err);
        return res.status(422).json(err)
      });
  },
  findAll: function (req, res) {
    db.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
};
