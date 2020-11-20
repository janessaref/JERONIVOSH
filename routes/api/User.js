const router = require("express").Router();
const userController = require("../../controllers/storyControllers.js");


router
  .route("/")
  .get(userController.findAll)
  .post(userController.create)



module.exports = router;