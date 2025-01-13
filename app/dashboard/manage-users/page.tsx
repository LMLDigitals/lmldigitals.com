'use client'

import { useState, useEffect } from 'react'
import withRoleAccess from '@/components/WithRoleAccess'

const ManageUsers = () => {
  const [users, setUsers] = useState([])
  const [staffEmail, setStaffEmail] = useState('')
  const [signupLink, setSignupLink] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users')
      const data = await response.json()
      setUsers(data)
    }
    fetchUsers()
  }, [])

  const deleteUser = async (userId: string) => {
    const response = await fetch(`/api/users/${userId}`, {
      method: 'DELETE',
    })
    if (response.ok) {
      setUsers(users.filter((user: any) => user.id !== userId))
    }
  }

  const generateStaffLink = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/auth/generate-staff-link', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: staffEmail }),
    })
    const data = await response.json()
    if (response.ok) {
      setSignupLink(data.signupLink)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Generate Staff Signup Link</h3>
        <form onSubmit={generateStaffLink} className="flex items-center space-x-2">
          <input
            type="email"
            value={staffEmail}
            onChange={(e) => setStaffEmail(e.target.value)}
            placeholder="Staff email"
            required
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button
            type="submit"
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Generate Link
          </button>
        </form>
        {signupLink && (
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-700">Staff Signup Link:</p>
            <p className="text-sm text-gray-500 break-all">{signupLink}</p>
          </div>
        )}
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user: any) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.role.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => deleteUser(user.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default withRoleAccess(ManageUsers, ['admin'])

