import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { name, email, password, role, token } = await req.json()

    const verificationToken = await prisma.verificationToken.findUnique({
      where: { token },
    })

    if (!verificationToken || verificationToken.expires < new Date()) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 })
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        roleId: role,
      },
    })

    await prisma.verificationToken.delete({
      where: { token },
    })

    return NextResponse.json({ message: 'Staff user created successfully' }, { status: 201 })
  } catch (error) {
    console.error('Error in staff signup:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
