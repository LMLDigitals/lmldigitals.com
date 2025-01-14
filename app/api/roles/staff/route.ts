import { NextResponse } from 'next/server'
import { getNonAdminRoles } from '@/lib/role'

export async function GET() {
  try {
    const roles = await getNonAdminRoles()
    return NextResponse.json(roles)
  } catch (error) {
    console.error('Error fetching staff roles:', error)
    return NextResponse.json({ error: 'Failed to fetch staff roles' }, { status: 500 })
  }
}

