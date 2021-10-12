const express = require("express");
const router = express.Router();

const authRoute = require("./auth");
const coursesRoute = require("./courses");
const usersRoute = require("./users");

router.use("/auth", authRoute);
router.use("/courses", coursesRoute);
router.use("/users", usersRoute);

module.exports = router;
