const coop = require("../models/Coop");


module.exports = {
    findOne: function (req, res) {
        console.log("find response: ", req.body)
        coop.findOne(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log("req.body.title: ", req.body.title)
        coop
            .create({title: req.body.title})
            .then((user) => res.json(user))
            .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
        console.log("level: ", req.body)
        console.log("id: ", req.body.id)
        coop.findByIdAndUpdate(
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
        coop.find({})
            .then((user) => res.json(user))
            .catch((err) => res.status(422).json(err));
    },
}