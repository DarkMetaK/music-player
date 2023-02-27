import NextAuth, { Account, Session, User } from 'next-auth'
import { JWT } from 'next-auth/jwt';
import SpotifyProvider from 'next-auth/providers/spotify'

import { spotifyApi, LOGIN_URL } from '@/lib/spotify'

async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

    console.log('REFRESHED TOKEN IS', refreshedToken);
    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken
    }

  } catch (error) {
    console.log(error);
    return {
      ...token,
      error: 'RefreshAccessTokenError'
    }
  }
}

export default NextAuth({
 // Configure one or more authentication providers
 providers: [
    SpotifyProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      authorization: LOGIN_URL
    },),
  // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token, account, user }): Promise<JWT> {
      // initial sign-in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account.expires_at! * 1000
        }
      }

      // Return previous token if the acess token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        console.log('EXISTING ACCESS TOKEN IS VALID');
        return token
      }

      // Access token has expired, so we need to refresh it...
      console.log('ACCESS TOKEN HAS EXPIRED, REFRESHING...');
      return await refreshAccessToken(token)
    },

    async session({session, token}: {session: Session, token: JWT}): Promise<Session> {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.error = token.error
      return session
    }
  }
})
