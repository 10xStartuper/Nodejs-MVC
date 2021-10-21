const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Dashboard page" });
});

router.use("/profile", require("./profile"));
router.use("/payment", require("./payment"));
router.use("/add-card", require("./add-card"));
router.use("/settings", require("./settings"));

module.exports = router;
