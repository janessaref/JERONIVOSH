const router = require("express").Router();
const userController = require("../../controllers/userController.js");
const coopController = require("../../controllers/coopController");

router
  .route("/")
  .post(userController.create)
  .put(userController.update)

router
  .route("/login")
  .post(userController.findOne)

router
  .route("/all")
  .get(userController.findAll)

router.route("/message")
  .get((req, res) => {
    res.send({ response: "WORKING" }).status(200);
  })

router
  .route("/coop")
  .post(coopController.create);


module.exports = router;