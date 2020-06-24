const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// default route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application!" });
});

// customers route
require("./src/routes/customer.routes.js")(app);

// set port, listen for requests
app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log("Server is running on port 3001");
});
