import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "de"];

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  let siteLanguage = request.cookies.get("NEXT_LOCALE")?.value || "";

  if (!siteLanguage) {
    const res = NextResponse.next();
    res.cookies.set("NEXT_LOCALE", "en", {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      secure: true,
    });

    return res;
  }

  if (!locales.includes(siteLanguage)) {
    siteLanguage = "en";
  }

  const pathname = request.nextUrl.pathname;

  // Redirect if there is no locale
  if (
    request.nextUrl.locale === "default" &&
    pathname !== "/excluded-page-1" &&
    pathname !== "/excluded-page-2"
  ) {
    const res = NextResponse.redirect(
      new URL(`/${siteLanguage}/${pathname}`, request.url)
    );

    res.cookies.set("NEXT_LOCALE", siteLanguage, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      secure: true,
    });

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return res;
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|favicon/favicon.png|next.svg).*)",
    // Optional: only run on root (/) URL
    "/",
  ],
};
