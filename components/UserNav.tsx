'use client'

import { useState } from 'react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

export interface User {
  name?: string | null
  email?: string | null
  role?: string | null
}

const UserNav = ({ user }: { user: User }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="h-8 w-8 rounded-full"
          src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
          alt=""
        />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-4 py-2 text-xs text-gray-500">
            Signed in as <br />
            <span className="font-medium text-gray-900">{user.email?.toString()}</span>
          </div>
          <div className="px-4 py-2 text-xs text-gray-500">
            Role: <span className="font-medium text-gray-900">{user.role?.toString()}</span>
          </div>
          <Link
            href="/dashboard/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Your Profile
          </Link>
          <button
            onClick={() => signOut()}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  )
}

export default UserNav

