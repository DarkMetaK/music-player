import NextAuth, { Account, DefaultSession, User,  } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      accessToken: Account.accessToken
      refreshToken: Account.refreshToken
      accessTokenExpires: Account.expiresAt      
    } & DefaultSession['user'],
    error ?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: Account.accessToken
    refreshToken: Account.refreshToken
    accessTokenExpires: Account.expiresAt,
    error ?: string
  }
}