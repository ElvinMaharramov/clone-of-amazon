import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // Diğer sağlayıcılar ekleyebilirsiniz
  ],
  pages: {
    signIn: '/auth/signin',  // Giriş sayfanızı belirleyin
    // Diğer sayfalar varsa buraya ekleyin
  },
  // Diğer NextAuth yapılandırmaları
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
export default handler;


/* import NextAuth from "next-auth";

import { authOptions } from "../../../../lib/authOptions";

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};
export default NextAuth(authOptions); */

/* export default NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      // Diğer sağlayıcılar
    ],
    // Diğer yapılandırma
    pages: {
      signIn: '/auth/signin',  // veya gerekli diğer sayfalar
    },
  }); */

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
// [...nextauth].js veya [...nextauth].ts dosyasındaki yapılandırma
  