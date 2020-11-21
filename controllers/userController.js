const db = require("../models/User");

module.exports = {
  findOne: function (req, res) {
    console.log("find response: ", req.body)
    let username = req.body.username;
    db.findOne({ username })
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
    console.log("level: ", req.body.level)
    console.log("id: ", req.params.id)
    db.findByIdAndUpdate(
      req.params.id
      ,
      {
        level: req.body.level
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
