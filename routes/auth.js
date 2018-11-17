const express = require('express');
const router = express.Router();

router.route('/login')
  .get((req, res) => {
    res.render('auth/login');
  })
  .post((req, res) => {
    console.log(req.body);
    res.redirect('/main');
  });

router.route('/main')
  .get((req, res) => {
    res.render('auth/main');
  });

module.exports = router;
