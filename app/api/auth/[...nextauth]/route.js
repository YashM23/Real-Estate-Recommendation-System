import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const GOOGLE_CLIENT_ID = "643876789397-m09qsd5ofgeh5vf9dp5gufr0ducqmk9j.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const authOption = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
