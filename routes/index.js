var express = require('express');
var router = express.Router();
const mailService = require('../service/mail.service')
/* GET home page. */

router.post('/send', async function(req, res, next) {
  const body = req.body


  console.log(body)
  // res.json(await mailService.sendActivationMail("stellgame.pro@gmail.com", `/`, body))
});

module.exports = router;
