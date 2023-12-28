import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/auth", "/", "/api/uploadthing"],
  // apiRoutes: ["/api/courses"],
});

export const config = {
  matcher: ["/(api|trpc)(.*)", "/create"],
};
