'use client'

import { useState } from 'react'
import { useRoles, useCreateRole, useDeleteRole } from '@/hooks/use-roles'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import withRoleAccess from '@/components/WithRoleAccess'
import { Role } from '@prisma/client'

function ManageRoles() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [deletingRoleId, setDeletingRoleId] = useState<string | null>(null)
  const { toast } = useToast()

  const { data: roles, isLoading: rolesLoading, error: rolesError } = useRoles()
  const createRole = useCreateRole()
  const deleteRole = useDeleteRole()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await createRole.mutateAsync({ name, description })
      setName('')
      setDescription('')
      toast({
        title: "Success",
        description: "Role created successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create role",
        variant: "destructive",
      })
    }
  }

  const handleDelete = async (id: string) => {
    setDeletingRoleId(id)
    try {
      await deleteRole.mutateAsync(id)
      toast({
        title: "Success",
        description: "Role deleted successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete role",
        variant: "destructive",
      })
    } finally {
      setDeletingRoleId(null)
    }
  }

  if (rolesLoading) return <div>Loading roles...</div>
  if (rolesError) return <div>Error loading roles</div>

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Manage Roles</h2>
        <p className="text-muted-foreground">Create and manage staff roles</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder="Role name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <Textarea
            placeholder="Role description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <Button type="submit" disabled={createRole.status === 'pending'}>
          {createRole.status === 'pending' ? 'Creating...' : 'Create Role'}
        </Button>
      </form>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Existing Roles</h3>
        <div className="grid gap-4">
          {roles?.map((role: Role) => (
            <div
              key={role.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div>
                <h4 className="font-medium">{role.name}</h4>
                <p className="text-sm text-muted-foreground">{role.description}</p>
              </div>
              {role.name !== 'admin' && (
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(role.id)}
                  disabled={deletingRoleId === role.id}
                >
                  {deletingRoleId === role.id ? 'Deleting...' : 'Delete'}
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withRoleAccess(ManageRoles, ['admin'])
