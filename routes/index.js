var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages });
});

/* POST new message. */
router.post('/new', (req, res, next) => {
  messages.push({ ...req.body, added: new Date() });
  res.redirect('/');
});

module.exports = router;
