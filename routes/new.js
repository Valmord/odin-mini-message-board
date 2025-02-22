const express = require("express");
const router = express.Router();
const messages = require("../models/messages");

router.get("/", (req, res) => {
  res.render("form");
});

router.post("/", (req, res) => {
  console.log(req.body);
  const { text, user } = req.body;
  messages.push({ text, user, added: new Date() });
  res.redirect("/");
});

module.exports = router;
