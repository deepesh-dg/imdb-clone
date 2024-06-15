import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtecetedRoute = createRouteMatcher(["/save-user"]);

export default clerkMiddleware((auth, req) => {
    if (isProtecetedRoute(req)) auth().protect();
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
