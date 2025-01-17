import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create roles
  const adminRole = await prisma.role.upsert({
    where: { name: 'admin' },
    update: {},
    create: { 
      name: 'admin',
      description: 'Administrator with full access'
    },
  })

  const staffRole = await prisma.role.upsert({
    where: { name: 'staff' },
    update: {},
    create: { 
      name: 'staff',
      description: 'Staff member with limited access'
    },
  })

  const customerRole = await prisma.role.upsert({
    where: { name: 'customer' },
    update: {},
    create: { 
      name: 'customer',
      description: 'Customer with access to their own data'
    },
  })

  // Create admin user
  const adminPassword = await bcrypt.hash('password123', 10)
  const admin = await prisma.staff.upsert({
    where: { email: 'admin@lmlrepair.com' },
    update: {},
    create: {
      email: 'admin@lmlrepair.com',
      name: 'Admin User',
      password: adminPassword,
      number: '1234567890', // Add a valid number
      location: 'kenya', // Add a valid location
      role: {
        connect: { id: adminRole.id }
      },
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