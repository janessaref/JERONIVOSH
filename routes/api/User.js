const router = require("express").Router();
const userController = require("../../controllers/userController.js");
const coopController = require("../../controllers/coopController");
const highScoreController = require("../../controllers/highscoreController");
const highscoreController = require("../../controllers/highscoreController");

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

router.route("/findhighscores")
  .post(highScoreController.findOne)

router
  .route("/highscores")
  .put(highscoreController.update)

router
  .route("/newhighscore")
  .post(highscoreController.create)

router
  .route("/allscores")
  .get(highScoreController.findAll)

router
  .route("/coop")
  .post(coopController.create)
  .get(coopController.findOne)
  .put(coopController.update)

module.exports = router;