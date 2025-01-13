import { prisma } from '@/lib/prisma'
import crypto from 'crypto'

export async function createStaffInvitation(email: string, roleId: string) {
  const token = crypto.randomBytes(32).toString('hex')
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

  const invitation = await prisma.staffInvitation.create({
    data: {
      email,
      token,
      roleId,
      expiresAt,
    },
    include: {
      role: true,
    },
  })

  return invitation
}

export async function validateStaffInvitation(token: string) {
  const invitation = await prisma.staffInvitation.findUnique({
    where: { token },
    include: { role: true },
  })

  if (!invitation) {
    return null
  }

  if (invitation.expiresAt < new Date()) {
    await prisma.staffInvitation.delete({
      where: { id: invitation.id },
    })
    return null
  }

  return invitation
}

export async function deleteStaffInvitation(token: string) {
  await prisma.staffInvitation.delete({
    where: { token },
  })
}

