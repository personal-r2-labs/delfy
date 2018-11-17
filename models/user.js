/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  spotifyID: String
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
