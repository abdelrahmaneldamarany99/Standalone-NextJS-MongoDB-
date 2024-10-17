import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const nextRes = NextResponse.next();
  if (request.nextUrl.pathname === "/") {
    // console.log("middleware");
    // return NextResponse.rewrite(new URL("/dashboard", request.url));
  }
  const theme = request.cookies.get("theme");
  // console.log("theme", theme);

  if (!theme) {
    nextRes.cookies.set("theme", "light");
  }

  nextRes.headers.set("headers1", "headers1-value");

  return nextRes;
}

// export const config = {
//   matcher: ["/"],
// };
