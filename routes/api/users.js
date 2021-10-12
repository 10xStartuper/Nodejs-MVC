const express = require("express");
const Router = express.Router();

Router.get("/api/users", (req, res, next) => {
  res.send("<h2>Hello from users</h2>");
});

module.exports = Router;
