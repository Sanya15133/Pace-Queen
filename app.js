const express = require("express");
const app = express();
const path = require("path");
const router = require("./BE/routers.js");
const port = process.env.PORT || 3000;

// view engine setup
app.set("views", path.join(__dirname, "FE/views"));
app.set("view engine", "ejs");

// static files & body parsing
app.use(express.static(path.join(__dirname, "FE")));
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

// 404 handler
app.use((req, res, next) => {
  res
    .status(404)
    .render("404", { url: req.originalUrl, title: "Page not found" });
});

// start server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
