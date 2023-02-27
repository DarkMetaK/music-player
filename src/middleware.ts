import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {

  // Token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  // Redirec to login if they dont have token AND are requesting a protected route
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - /login
     */
    '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
  ],
}