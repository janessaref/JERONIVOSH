const router = require("express").Router();
const userController = require("../../controllers/userController.js");


router
  .route("/")
  .get(userController.findAll)
  .post(userController.create)

router
  .route("/:id")
  .put(userController.update)


module.exports = router;