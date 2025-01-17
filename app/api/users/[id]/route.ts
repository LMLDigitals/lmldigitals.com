import { NextResponse } from 'next/server'
import { isAuthorized } from '@/lib/user'
import { prisma } from '@/lib/prisma'

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  if (!(await isAuthorized(['admin']))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  await prisma.staff.delete({
    where: { id },
  })

  return NextResponse.json({ message: 'User deleted successfully' })
}

export async function PUT(
  req: Request,
  { params, body }: { params: { id: string }; body: { role: string } }
) {
  if (!(await isAuthorized(['admin']))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const { role } = await body

  await prisma.staff.update({
    where: { id },
    data: { role: { connect: { name: role } } },
  })

  return NextResponse.json({ message: 'User updated successfully' })
}