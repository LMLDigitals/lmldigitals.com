// import { NextAuthOptions } from "next-auth"
// import { PrismaAdapter } from "@auth/prisma-adapter"
// import CredentialsProvider from "next-auth/providers/credentials"
// import { PrismaClient } from "@prisma/client"
// import bcrypt from "bcryptjs"
// import NextAuth from "next-auth"

// const prisma = new PrismaClient()

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           return null
//         }

//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email },
//           include: { role: true },
//         })

//         if (!user) {
//           return null
//         }

//         const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

//         if (!isPasswordValid) {
//           return null
//         }

//         return {
//           id: user.id,
//           email: user.email,
//           name: user.name,
//           role: user.role.name,
//         }
//       }
//     })
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.role = user.role
//       }
//       return token
//     },
//     async session({ session, token }) {
//       if (session?.user) {
//         session.user.role = token.role
//       }
//       return session
//     }
//   },
//   pages: {
//     signIn: '/auth/signin',
//   },
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.AUTH_SECRET,
// }

// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST }

import { handlers } from "@/lib/auth"
export const { GET, POST } = handlers