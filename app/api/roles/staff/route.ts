// import { NextResponse } from 'next/server'
// import { prisma } from '@/lib/prisma'

// export async function GET() {
//   const roles = await prisma.role.findMany({
//     where: {
//       NOT: [
//         { name: 'admin' },
//         { name: 'customer' }
//       ]
//     },
//     orderBy: { name: 'asc' },
//   })
//   return NextResponse.json(roles)
// }

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

