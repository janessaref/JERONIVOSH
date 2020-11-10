const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// set port
const PORT = process.env.PORT || 3000;

// create express app and configure middleware
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// create connection to mongodb
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/jeronivosh',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  
// Require routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});