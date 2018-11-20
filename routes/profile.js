const router = require('express').Router();
const API = require('../config/APIHandler');
const User = require('../models/user');

const userAPI = new API('https://api.spotify.com/v1/me/');

const authCheck = ((req, res, next) => {
  if (!req.user) {
    res.redirect('/auth/login');
  } else {
    next();
  }
});


router.get('/', authCheck, (req, res) => {
  // console.log(req.user);
  const { spotifyID, accessToken } = req.user;
  userAPI.getTopArtists(accessToken)
    .then((topArtists) => {
      User.findOneAndUpdate({
        spotifyID
      }, {
        topArtists: topArtists.data.items
      })
        .then((currentUser) => { console.log(currentUser); })
        .catch(err => console.log('error find', err));
    }).catch(err => console.log('error top', err));

  userAPI.getTopTracks(accessToken)
    .then((topTracks) => {
      console.log(topTracks);
      User.findOneAndUpdate({
        spotifyID
      }, {
        topTracks: topTracks.data.items
      })
        .then((currentUser) => { console.log(currentUser); })
        .catch(err => console.log('error find', err));
    }).catch(err => console.log('error top', err));
  res.render('profile/main', {
    user: req.user
  });

  userAPI.getAlbums(accessToken)
    .then((Albums) => {
      console.log(Albums);
      User.findOneAndUpdate({
        spotifyID
      }, {
        topAlbums: Albums.data.items
      })
        .then((currentUser) => { console.log(currentUser); })
        .catch(err => console.log('error find', err));
    }).catch(err => console.log('error top', err));
});

module.exports = router;
