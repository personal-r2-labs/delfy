/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  password: String,
  spotifyID: String,
  photoPath: String,
  birthdate: String,
  product: String,
  email: String,
  accessToken: String,
  refreshToken: String,
  country: String,
  topArtists: Array,
  topAlbums: Array,
  topTracks: Array,
  followers: Number
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
