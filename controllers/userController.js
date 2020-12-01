const user = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = {
  findOne: async function (req, res) {
    try {
      var check = await user.findOne({ username: req.body.username }).exec();
      if (bcrypt.compareSync(req.body.password, check.password)) {
        res.send(check)
      } else {
        return res.status(422).send("bad password")
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
  create: function (req, res) {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt);
    user
      .create({ username: req.body.username, password: hash })
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));


  },
  update: function (req, res) {
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
