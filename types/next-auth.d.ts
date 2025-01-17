import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image: string;
      role: string;
      userType: string;
    };
  }
  interface User {
    role: string;
    userType: string;
  }
  interface AdapterUser {
    userType: string;
  }
}


declare module "next-auth/jwt" {
  interface JWT {
    role: string;
  }
}