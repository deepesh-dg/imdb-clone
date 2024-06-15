# IMDB Clone

A clone of IMDB using [Next.js](https://nextjs.org/), [sanity](https://sanity.io/) and [clerkjs](https://clerk.com/).

## Getting Started

1. `npx create-next-app stack-overflow-clone`
2. configure linting with prettier and eslint
3. go to [sanity.io](https://sanity.io/) and signup and create a project. Here you will get the project id.
4. go to [manage.sanity.io](https://manage.sanity.io/) and select th project. then go to `API` tab and add `https://localhost:3000` as CORS Origin with credentials `true`.

## Steps to access sanity admin panel via next.js domain

1. `npm install next-sanity @sanity/client @portabletext/react @sanity/image-url`
2. create sanity.config.ts file in root directory and configure it
3. create `/app/admin/[[...index]]/page.tsx` for routing to sanity admin panel and configure it.
4. you will see that sanity studio is running on [https://localhost:3000/admin](https://localhost:3000/admin)
5. since we are using `clerk` for authentication, we need to create user schema in sanity to sync with clerk. create `/src/sanity/schemas/user.schema.ts` and configure it.
6. grab api token from [manage.sanity.io](https://manage.sanity.io/) and add it to `.env.local` file. we need it because we will have user to post reviews, voting and so on.
7. make sanity schemas.

## Steps to implement clerkjs authentication

1. go to [clerk.com](https://clerk.com/) and signup and create a project.
2. follow the steps to create a new app in clerk.
3. `npm install @clerk/nextjs`
4. copy paste environment variables from clerk dashboard to `.env.local` file.
5. configure middleware in `/src/middleware.ts` file.
6. Setup `<ClerkProvicer />` in `/app/layout.tsx` file.
7. create `/app/(auth)/login/[[...login]]/page.tsx` and `/app/(auth)/register/[[...register]]/page.tsx` for login and register pages.
8. go to [clerkjs docs](https://clerk.com/docs/references/nextjs/custom-signup-signin-pages) and follow the steps
9. since we need to sync between clerk user and sanity user, we need to redirect user to `/save-user` route after registeration so that we can create user in sanity.
10. `groq` is a graphql like syntax query language for sanity.
