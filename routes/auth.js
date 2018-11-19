/* eslint-disable no-undef */
const express = require('express');
const passport = require('passport');
const keys = require('../config/keys');

const router = express.Router();

router.route('/login')
  .get((req, res) => {
    res.render('auth/login');
  })
  .post((req, res) => {
    res.redirect('/main');
  });

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/spotify', passport.authenticate('spotify', {
  scope: keys.spotify.scope
}));

router.get('/spotify/redirect', passport.authenticate('spotify'), (req, res) => {
  res.redirect('/profile');
});

module.exports = router;
