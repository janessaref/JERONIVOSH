const router = require("express").Router();
const userRoutes = require("./User");
const userController = require("../../controllers/userController.js");

// Book routes
router.use("/user", userRoutes);



module.exports = router;