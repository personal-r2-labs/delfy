/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const keys = require('./keys');
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    });
});

passport.use(
  new SpotifyStrategy({
    // options for the spotify strategy
    clientID: keys.spotify.clientID,
    clientSecret: keys.spotify.clientSecret,
    callbackURL: '/auth/spotify/redirect'
  }, (accessToken, refreshToken, expires_in, profile, done) => {
    // check if user already exists in our db
    console.log(accessToken);
    console.log(refreshToken);
    User.findOneAndUpdate({
      spotifyID: profile.id
    }, { accessToken, refreshToken })
      .then((currentUser) => {
        if (currentUser) {
          // already have the user
          console.log('user is: ', currentUser);
          done(null, currentUser);
        } else {
          // if not, create user in our db
          const newUser = new User({
            username: profile.displayName,
            spotifyID: profile.id,
            photoPath: profile.photos[0],
            email: profile._json.email,
            country: profile._json.country,
            followers: profile._json.followers.total,
            accessToken,
            refreshToken
          });
          newUser.save().then(() => {
            console.log(`new user created: ${newUser}`);
            done(null, newUser);
          });
        }
      });
  })
);
