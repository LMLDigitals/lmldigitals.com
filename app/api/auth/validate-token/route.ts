import { NextResponse } from 'next/server'
import { validateStaffInvitation } from '@/lib/staff-invitation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.json({ error: 'Token is required' }, { status: 400 })
  }

  const invitation = await validateStaffInvitation(token)

  if (!invitation) {
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 })
  }

  return NextResponse.json({ email: invitation.email })
}

