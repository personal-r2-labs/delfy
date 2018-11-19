/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  spotifyID: String,
  photoPath: String,
  email: String,
  accessToken: String,
  refreshToken: String,
  genre: String,
  country: String,
  followers: Number

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
