import type {
  NextAuthConfig,
  Session,
  User as NextAuthUser,
  AdapterUser,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

export default {
  pages: {
    signIn: "/auth/signin",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        userType: { label: "User Type", type: "text" },
      },
      async authorize(credentials) {
        if (
          !credentials?.email ||
          !credentials?.password ||
          !credentials?.userType
        ) {
          throw new Error("Invalid credentials");
        }

        // const user = await prisma.user.findUnique({
        //     where: { email: credentials.email },
        //     include: { role: true }
        // })
        let user;

        if (credentials.userType === "staff") {
          user = await prisma.staff.findUnique({
            where: { email: credentials.email as string },
            include: { role: true },
          });
        } else if (credentials.userType === "customer") {
          user = await prisma.customer.findUnique({
            where: { email: credentials.email as string },
            include: { role: true },
          });
        }

        if (!user || !user.password) {
          throw new Error("Invalid credentials");
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password as string,
          user.password as string
        );

        if (!isPasswordValid) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          userType: credentials.userType as string,
          role: user.role.name,
        };
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.email = token.email ?? "";
        session.user.name = token.name ?? "";
        session.user.userType = token.userType as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.userType = user.userType;
      }
      return token;
    },
  },
} satisfies NextAuthConfig;
