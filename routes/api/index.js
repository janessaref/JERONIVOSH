const router = require("express").Router();
const userRoutes = require("./User");

// Book routes
router.use("/user", userRoutes);

module.exports = router;