import SpotifyWebApi from 'spotify-web-api-node'

const scopes = 'user-library-read,playlist-read-private user-top-read,user-read-currently-playing,user-library-modify'

const params = {
  scope: scopes,
}

const queryParamString = new URLSearchParams(params)

export const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`

export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
})
