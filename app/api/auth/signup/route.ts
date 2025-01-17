import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { name, email, password, number, address, city, state, zip, location } = await req.json()

    const existingUser = await prisma.customer.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const referralCode = crypto.randomBytes(6).toString('hex')

    const customerRole = await prisma.role.findUnique({
      where: { name: 'customer' },
    })

    if (!customerRole) {
      return NextResponse.json({ error: 'Customer role not found' }, { status: 500 })
    }

    const user = await prisma.customer.create({
      data: {
        name,
        email,
        password: hashedPassword,
        roleId: customerRole.id,
        number,
        address,
        city,
        state,
        zip,
        location,
        referralCode,
      },
    })

    return NextResponse.json({ message: 'User created successfully', user }, { status: 201 })
  } catch (error) {
    console.error('Error in signup:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

