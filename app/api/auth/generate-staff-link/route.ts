import { NextResponse } from 'next/server'
import { isAuthorized } from '@/lib/user'
import { prisma } from '@/lib/prisma'
import crypto from 'crypto'

export async function POST(req: Request) {
  if (!(await isAuthorized(['admin']))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const { email, roleId } = await req.json()

    const token = crypto.randomBytes(32).toString('hex')
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now

    await prisma.staffInvitation.create({
      data: {
        email,
        token,
        roleId,
        expiresAt,
      },
    })

    const signupLink = `${process.env.AUTH_URL}/auth/staff-signup?token=${token}`

    // TODO: Send email with signupLink

    return NextResponse.json({ message: 'Staff signup link generated successfully', signupLink })
  } catch (error) {
    console.error('Error generating staff signup link:', error)
    return NextResponse.json({ error: 'Failed to generate staff signup link' }, { status: 500 })
  }

}

