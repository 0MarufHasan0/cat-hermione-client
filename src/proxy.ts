
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request: NextRequest) {
  // Better Auth দিয়ে session check
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  console.log("Session from server:", session);

  // User login না থাকলে sign-in page-এ পাঠাবে
  if (!session) {
    return NextResponse.redirect(
      new URL("/sign-in", request.url)
    );
  }

  // User login থাকলে requested page-এ যেতে দেবে
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
