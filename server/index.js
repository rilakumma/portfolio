const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");

const app = express();

app.use(bodyParser.json());

app.get("/api/admin/", controller.getMessages);

app.listen(4000, () => {
  console.log("Server is listening on port 4000 💫 💫 💫 💫");
});
