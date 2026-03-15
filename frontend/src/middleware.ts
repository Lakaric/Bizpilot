import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SIGNIN_PATH = "/signin";
const SESSION_COOKIE = "better-auth.session_token";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE);

  if (!token) {
    const signinUrl = new URL(SIGNIN_PATH, request.url);
    signinUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(signinUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/settings/:path*", "/profile/:path*"],
};
