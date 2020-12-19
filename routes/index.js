const express = require("express");
const router = express.Router();

const messages = [
  {
    name: "Amanda",
    text: "Hello how are you?",
    added: new Date(),
  },
  {
    name: "Ria",
    text: "Hey",
    added: new Date(),
  },
  {
    name: "Joey",
    text: "How you doin?",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  messages.push({
    name: req.body.name,
    text: req.body.text,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
