const express = require("express");
const router = express.Router();

const messages = require("../models/messages");
router.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

router.get("/message/:id", (req, res) => {
  const message = messages[req.params.id];
  if (!message) {
    return res.status(404).send("Message not found");
  }
  res.render("message", { message: message });
});

module.exports = router;
