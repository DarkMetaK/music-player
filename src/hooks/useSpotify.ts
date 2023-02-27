import { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
})

export default function useSpotify() {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (session) {
      // If refresh access token attempt fails, direct user to login...
      if (session.error === 'RefreshAccessTokenError') {
        signIn()
      }

      spotifyApi.setAccessToken(session.user.accessToken)
    }
  }, [session])

  return spotifyApi
}
