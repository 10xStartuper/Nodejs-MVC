const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome");
});

router.use("/api", require("./api/"));
router.use("/dashboard", require("./dashboard"));
router.get("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

module.exports = router;
