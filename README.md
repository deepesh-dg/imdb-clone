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
