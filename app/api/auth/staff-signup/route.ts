import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { name, email, password, token } = await req.json()

    const invitation = await prisma.staffInvitation.findUnique({
      where: { 
        token,
        used: false,
        expiresAt: {gt: new Date()}
      },
      include: { role: true }
    })

    if (!invitation || invitation.expiresAt < new Date()) {
      return NextResponse.json({ error: 'Invalid or expired invitation' }, { status: 400 })
    }

    if (invitation.email !== email) {
      return NextResponse.json({ error: 'Email does not match invitation' }, { status: 400 })
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
        roleId: invitation.roleId,
      },
    })

    // Mark invitation as used
    await prisma.staffInvitation.update({
      where: { id: invitation.id },
      data: { used: true }
    })

    return NextResponse.json({ message: 'Staff user created successfully', user }, { status: 201 })
  } catch (error) {
    console.error('Error in staff signup:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

