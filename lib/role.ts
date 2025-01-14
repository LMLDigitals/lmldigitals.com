import { prisma } from '@/lib/prisma'

export async function getRoles() {
  return prisma.role.findMany({
    orderBy: { name: 'asc' },
  })
}

export async function getNonAdminRoles() {
  return prisma.role.findMany({
    where: {
      NOT: { name: 'admin' },
    },
    orderBy: { name: 'asc' },
  })
}

export async function createRole(name: string, description: string) {
  return prisma.role.create({
    data: {
      name,
      description,
    },
  })
}

export async function updateRole(id: string, name: string, description: string) {
  return prisma.role.update({
    where: { id },
    data: {
      name,
      description,
    },
  })
}

export async function deleteRole(id: string) {
  return prisma.role.delete({
    where: { id },
  })
}
