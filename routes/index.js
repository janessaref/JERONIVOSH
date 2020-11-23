const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");


router.use("/api", apiRoutes);

// socket working
// router.get("/", (req, res) => {
//   res.send({ response: "I am alive" }).status(200);
// });

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.get("/message", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

module.exports = router;