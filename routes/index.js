var express = require('express');
var router = express.Router();
const mailService = require('../service/mail.service')
/* GET home page. */

router.post('/send', async function(req, res, next) {
  const {body} = req
  res.json(await mailService.sendActivationMail("pravo_na_prava44@mail.ru", `/`, body))
});

module.exports = router;
