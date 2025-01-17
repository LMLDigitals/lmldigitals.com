"use client";

import { useState, useEffect, SetStateAction } from "react";
import withRoleAccess from "@/components/WithRoleAccess";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PencilIcon } from "lucide-react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [newRole, setNewRole] = useState("");

  const handleEditClick = (userId: SetStateAction<null>, currentRole: SetStateAction<string>) => {
    setEditingUserId(userId);
    setNewRole(currentRole);
  };

  const handleRoleChange = async (userId: string) => {
    const response = await fetch(`/api/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: newRole }),
    });
    if (response.ok) {
      setEditingUserId(null);
    }
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const deleteUser = async (userId: string) => {
    const response = await fetch(`/api/users/${userId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setUsers(users.filter((user: any) => user.id !== userId));
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Manage Users
      </h2>
      <div className=" min-w-full flex-row flex flex-1 justify-between p-4">
        <p className="text-lg font-bold">Generate Staff Invitation Link</p>
        <Button asChild>
          <Link href="/dashboard/manage-users/invite-staff">Invite Staff</Link>
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            {users.map((user: any) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">
                  {user.role.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                  {editingUserId === user.id ? (
                    <input
                      type="text"
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    user.role.name
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {editingUserId === user.id ? (
                    <button
                      onClick={() => handleRoleChange(user.id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Save
                    </button>
                  ) : (
                    <PencilIcon
                      className="h-5 w-5 text-gray-400 cursor-pointer"
                      onClick={() => handleEditClick(user.id, user.role.name)}
                    />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default withRoleAccess(ManageUsers, ["admin"]);
