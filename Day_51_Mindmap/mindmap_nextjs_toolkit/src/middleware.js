// middleware.js
import { NextResponse } from "next/server";
import nextAuthMiddleware from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

const intlMiddleware = createIntlMiddleware({
  defaultLocale: "vi",
  localePrefix,
  locales,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|vi)/:path*"],
};

export async function middleware(req) {
  // First, run the next-intl middleware
  let response = await intlMiddleware(req);
  // If the response is not a NextResponse, continue the chain
  if (!(response instanceof NextResponse)) {
    // Then, run the next-auth middleware
    response = await nextAuthMiddleware(req, response);
  }
  // Return the final response
  return response;
}
