import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { getUser } from '@/lib/user'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const user = await getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { currentPassword, newPassword } = await req.json()

  const isPasswordValid = await bcrypt.compare(currentPassword, user.password)

  if (!isPasswordValid) {
    return NextResponse.json({ error: 'Invalid current password' }, { status: 400 })
  }

  const hashedNewPassword = await bcrypt.hash(newPassword, 10)

  await prisma.user.update({
    where: { id: user.id },
    data: { password: hashedNewPassword },
  })

  return NextResponse.json({ message: 'Password updated successfully' })
}

