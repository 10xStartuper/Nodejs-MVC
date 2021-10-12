const express = require("express");
const router = express.Router();

const apiRoute = require("./api/");

router.get("/", (req, res) => {
  res.send("Welcome");
});

router.use("/api", apiRoute);
router.get("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

module.exports = router;
