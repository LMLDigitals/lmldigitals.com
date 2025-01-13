import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create roles
  const adminRole = await prisma.role.upsert({
    where: { name: 'admin' },
    update: {},
    create: { name: 'admin' },
  })

  const staffRole = await prisma.role.upsert({
    where: { name: 'staff' },
    update: {},
    create: { name: 'staff' },
  })

  const customerRole = await prisma.role.upsert({
    where: { name: 'customer' },
    update: {},
    create: { name: 'customer' },
  })

  // Create admin user
  const adminPassword = await bcrypt.hash('password123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@lmlrepair.com',
      name: 'Admin User',
      password: adminPassword,
      roleId: adminRole.id,
    },
  })

  console.log({ adminRole, staffRole, customerRole, admin })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

