const express = require('express');

const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', { user: req.user });
  // console.log(req.user);
});

router.get('/about', (req, res, next) => {
  res.render('about');
});

module.exports = router;
