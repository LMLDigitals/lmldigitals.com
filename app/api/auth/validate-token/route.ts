import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.json({ error: 'Token is required' }, { status: 400 })
  }

  try {
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

    return NextResponse.json({
      email: invitation.email,
      roleId: invitation.roleId,
      roleName: invitation.role.name
    })
  } catch (error) {
    console.error('Error validating token:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

