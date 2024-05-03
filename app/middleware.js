import { NextResponse } from "next/server";

const isLoggedIn = true;

export const middleware = (request) => {
  if (isLoggedIn) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
};

export const config = { matcher: ["/adminutility/:path*"] };
