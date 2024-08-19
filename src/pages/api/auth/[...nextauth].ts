import NextAuth from "next-auth";

import { authOptions } from "../../../../lib/authOptions";

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};
export default NextAuth(authOptions);


// import GithubProvider from 'next-auth/providers/github';
// import GoogleProvider from 'next-auth/providers/google';

// const handler = NextAuth({
//     providers: [

//         GithubProvider({
//             clientId: process.env.GITHUB_ID as string,
//             clientSecret: process.env.GITHUB_SECRET as string,
//         }),

//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID as string,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//         }),

//     ]
// });





// export const { handlers, auth } = NextAuth({
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID!,
//       clientSecret: process.env.GITHUB_SECRET!,
//     }),
//   ],
// });

// export default NextAuth({
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID!,
//       clientSecret: process.env.GITHUB_SECRET!,
//     }),
//   ],
// });