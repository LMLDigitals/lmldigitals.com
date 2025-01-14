import { NextResponse } from 'next/server'
import { isAuthorized } from '@/lib/user'
import { getRoles, createRole } from '@/lib/role'
import { revalidatePath } from 'next/cache'

export async function GET() {
  const roles = await getRoles()
  return NextResponse.json(roles)
}

export async function POST(req: Request) {
  if (!(await isAuthorized(['admin']))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { name, description } = await req.json()
    const role = await createRole(name, description)
    revalidatePath('/dashboard/manage-roles')
    return NextResponse.json(role)
  } catch (error) {
    console.error('Error creating role:', error)
    return NextResponse.json(
      { error: 'Failed to create role' },
      { status: 500 }
    )
  }
}

