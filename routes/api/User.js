const router = require("express").Router();
const userController = require("../../controllers/userController.js");


router
  .route("/")
  .get(userController.findOne)
  .post(userController.create)

router
  .route("/all")
  .get(userController.findAll)
  
router
  .route("/:id")
  .put(userController.update)


module.exports = router;