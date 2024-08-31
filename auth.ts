import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Kakao from "next-auth/providers/kakao";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Kakao({
      clientId: process.env.AUTH_KAKAO_ID,
      clientSecret: process.env.AUTH_KAKAO_SECRET,
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (typeof token.id === "string") {
        session.user.id = token.id;
      }
      return session;
    },
    async authorized({ auth }) {
      return !!auth;
    },
  },
  pages: {
    signIn: "/",
  },
});
