const express = require("express");
const app = express();

const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");

const PORT = 5051;

app.use("/", indexRouter);
app.use("/new", newRouter);

// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${5051}`);
});
