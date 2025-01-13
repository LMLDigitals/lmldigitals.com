// import { NextApiRequest, NextApiResponse } from 'next'
// // import { getServerSession } from "next-auth/next"
// // import { authOptions } from "../auth/[...nextauth]"
// import { auth } from '@/lib/auth'
// import { PrismaClient } from "@prisma/client"
// import bcrypt from "bcryptjs"

// const prisma = new PrismaClient()

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const session = await auth()

//   if (!session) {
//     return res.status(401).json({ message: "Unauthorized" })
//   }

//   const { id } = req.query

//   if (req.method === 'GET') {
//     const user = await prisma.user.findUnique({
//       where: { id: id as string },
//       include: { role: true },
//     })

//     if (!user) {
//       return res.status(404).json({ message: "User not found" })
//     }

//     if (session.user.role !== 'admin' && session.user.id !== user.id) {
//       return res.status(403).json({ message: "Forbidden" })
//     }

//     res.status(200).json(user)
//   } else if (req.method === 'PUT') {
//     if (session.user.role !== 'admin' && session.user.id !== id) {
//       return res.status(403).json({ message: "Forbidden" })
//     }

//     const { name, email, password, roleId } = req.body

//     const updateData: any = {}
//     if (name) updateData.name = name
//     if (email) updateData.email = email
//     if (password) updateData.password = await bcrypt.hash(password, 10)
//     if (roleId && session.user.role === 'admin') updateData.roleId = roleId

//     const updatedUser = await prisma.user.update({
//       where: { id: id as string },
//       data: updateData,
//       include: { role: true },
//     })

//     res.status(200).json(updatedUser)
//   } else if (req.method === 'DELETE') {
//     if (session.user.role !== 'admin' && session.user.id !== id) {
//       return res.status(403).json({ message: "Forbidden" })
//     }

//     await prisma.user.delete({
//       where: { id: id as string },
//     })

//     res.status(204).end()
//   } else {
//     res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
//     res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }

import { NextResponse } from 'next/server'
import { isAuthorized } from '@/lib/user'
import { prisma } from '@/lib/prisma'

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  if (!(await isAuthorized(['admin']))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = params

  await prisma.user.delete({
    where: { id },
  })

  return NextResponse.json({ message: 'User deleted successfully' })
}

