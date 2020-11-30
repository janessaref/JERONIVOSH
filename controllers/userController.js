const user = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = {
  findOne: function (req, res) {
    // console.log("find response: ", req.body)
    user.findOne(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("body: ", req.body)
    console.log("user/pass: ", req.body.username, " ", req.body.password)

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    console.log("encrypted pass: ", req.body.password)
    user
      .create({ username: req.body.username, password: req.body.password })
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));


  },
  update: function (req, res) {
    // console.log("level: ", req.body)
    // console.log("id: ", req.body._id)
    user.findByIdAndUpdate(
      req.body._id
      ,
      {
        level: req.body.level,
        lives: req.body.lives
      })
      .then((user) => res.json(user))
      .catch((err) => {
        // console.log("error: ", err);
        return res.status(422).json(err)
      });
  },
  findAll: function (req, res) {
    user.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
};
