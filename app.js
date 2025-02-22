const express = require("express");
const app = express();
const path = require("path");

// Set's up eJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Allows templates to find public folder for assets
app.use(express.static(path.join(__dirname, "public")));

// Allows inputs to appear in req.body
app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");

const PORT = 5051;

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${5051}`);
});
