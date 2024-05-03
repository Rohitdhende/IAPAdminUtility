import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = new URL(request.url);

  // Exclude paths that shouldn't trigger the middleware
  const nonRedirectPaths = ["/adminutility/signin", "/session-error"];

  // Authentication check - this should be replaced with your actual logic
  const isAuthenticated = false; // Dummy value; replace with real auth check

  // If it's an allowed path or the user is authenticated, proceed
  if (nonRedirectPaths.includes(pathname) || isAuthenticated) {
    return NextResponse.next();
  }

  // Otherwise, redirect to a specific error path
  return NextResponse.redirect(new URL("/session-error", request.url));
}

export const config = { matcher: ["/adminutility/:path*"] }; // Ensure middleware doesn't trigger on sign-in
