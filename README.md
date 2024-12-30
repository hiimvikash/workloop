This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# Steps to start this project from scratch

## Basic Setup
0. setup Git and GitHub.
1. run it - `npx create-next-app@latest`
    ```
    Would you like to use TypeScript? ... No / Yes👍🏼
    √ Would you like to use ESLint? ... No / Yes👍🏼
    √ Would you like to use Tailwind CSS? ... No / Yes👍🏼
    √ Would you like your code inside a `src/` directory? ... No / Yes👍🏼
    √ Would you like to use App Router? (recommended) ... No / Yes👍🏼
    √ Would you like to use Turbopack for `next dev`? ... No👍🏼 / Yes
    √ Would you like to customize the import alias (`@/*` by default)? ... No👍🏼 / Yes
    ```
2. Install shadcnUI - `npx shadcn@latest init` and add `Button component`
3. Run your app and test tailwind and shadcn.
4. go to `src/app/global.css` and add `html, body, :root { height : 100%}`
## Auth Screens
1. `@\src\features\auth\components\auth-screen.tsx` & `@\src\features\auth\types.ts`
2. add `card`, `input`, `separator` from shadCn UI
3. install react-icons `npm i react-icons`
4. make signInCard(`@\src\features\auth\components\sign-in-card.tsx`) which will be used in authScreen
## Setup Convex DB & Auth
0. Convex is a realtime DB by default.
1. [Follow this quickstart](https://docs.convex.dev/quickstart/nextjs)
2. [Setup convex Auth](https://labs.convex.dev/auth/setup)
3. [Configure middleware](https://labs.convex.dev/auth/authz/nextjs) & Move `middleware.ts` to `src/middleware.ts`
4. [Setup Github OAuth](https://labs.convex.dev/auth/config/oauth/github)
5. Now give power to the "SIGNIN WITH GH" button.


