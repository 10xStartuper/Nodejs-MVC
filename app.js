const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/index")); //initializing routes

app.listen(
  process.env.PORT || 3000,
    ()=> console.log("Application has been started on the port: http://localhost:3000")
);
