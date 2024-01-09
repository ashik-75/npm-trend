import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Make all routes public by default
  publicRoutes: (req) => !req.url.includes("/api"),

  // Protect routes under "/api" path
});

export const config = {
  // Ensure that API routes are matched
  // The rest of the routes will be considered public
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/api/(.*)"],
};
