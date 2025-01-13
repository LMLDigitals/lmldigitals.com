import { NextResponse } from 'next/server'
import { isAuthorized } from '@/lib/user'
import { prisma } from '@/lib/prisma'
import crypto from 'crypto'

export async function POST(req: Request) {
  if (!(await isAuthorized(['admin']))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { email } = await req.json()

  const token = crypto.randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now

  await prisma.verificationToken.create({
    data: {
      identifier: email,
      token,
      expires: expiresAt,
    },
  })

  const signupLink = `${process.env.AUTH_URL}/auth/staff-signup?token=${token}`

  // TODO: Send email with signupLink

  return NextResponse.json({ message: 'Staff signup link generated successfully', signupLink })
}

