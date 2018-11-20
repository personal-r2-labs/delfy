const axios = require('axios');

class APIHandlers {
  constructor(baseURL) {
    this.charactersAPI = axios.create({
      baseURL
    });
  }

  getTopArtists(userToken) {
    return this.charactersAPI.get('top/artists?limit=50', {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    });
  }

  getTopTracks(userToken) {
    return this.charactersAPI.get('top/tracks?limit=50', {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    });
  }

  getAlbums(userToken) {
    return this.charactersAPI.get('albums?limit=50', {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    });
  }
}



module.exports = APIHandlers;
