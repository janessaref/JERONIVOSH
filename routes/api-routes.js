const db = require("../models/User.js");
module.exports = function (app) {

    app.post("/api/create", ({body}, res) =>{
        console.log("body", body);
        db.create(body)
        .then(() => {
            res.status(201).send("success!");
          })
          .catch(err => {
            res.json(err);
          });

    });
    

}