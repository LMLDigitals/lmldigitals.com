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

  await prisma.user.delete({
    where: { id },
  })

  return NextResponse.json({ message: 'User deleted successfully' })
}

