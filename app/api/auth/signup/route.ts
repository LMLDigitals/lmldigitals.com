import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const customerRole = await prisma.role.findUnique({
      where: { name: 'customer' },
    })

    if (!customerRole) {
      return NextResponse.json({ error: 'Customer role not found' }, { status: 500 })
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        roleId: customerRole.id,
      },
    })

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 })
  } catch (error) {
    console.error('Error in signup:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

