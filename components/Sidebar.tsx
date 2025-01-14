'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

const Sidebar = () => {
  const pathname = usePathname()
  const { data: session } = useSession()

  const isActive = (path: string) => pathname === path

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Profile', href: '/dashboard/profile', icon: '👤' },
  ]

  if (session?.user?.role === 'admin') {
    navItems.push(
      { name: 'Manage Users', href: '/dashboard/manage-users', icon: '👥' },
      { name: 'Manage Roles', href: '/dashboard/manage-roles', icon: '🔑' }
    )
  }

  return (
    <aside className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`block py-2.5 px-4 rounded transition duration-200 ${
              isActive(item.href)
                ? 'bg-gray-900 text-white'
                : 'text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {item.icon} {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar

