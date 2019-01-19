const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.post("/api/message", controller.emailMessage);

app.listen(4000, () => {
  console.log("Server is listening on port 4000 💫 💫 💫 💫");
});
