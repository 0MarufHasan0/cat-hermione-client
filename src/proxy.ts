import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

// Protected routes
export const config = {
  matcher: [
    "/upcoming-events/:path*",
    "/create-event/:path*",
    "/profile/:path*",
    "/my-event/:path*",
    "/join-event/:path*",
  ],
};
