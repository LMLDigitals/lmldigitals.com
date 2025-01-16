'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRoles } from '@/hooks/use-roles'

export default function InviteStaff() {
  const [email, setEmail] = useState('')
  const [roleId, setRoleId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const { data: roles, isLoading: rolesLoading, error: rolesError } = useRoles()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const res = await fetch('/api/auth/generate-staff-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, roleId }),
      })

      if (!res.ok) {
        throw new Error('Failed to create invitation')
      }

      const data = await res.json()

      toast({
        title: 'Success',
        description: `Invitation link created: ${data.signupLink}`,
      })

      setEmail('')
      setRoleId('')
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to create invitation',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (rolesLoading) {
    return <div>Loading roles...</div>
  }

  if (rolesError) {
    return <div>Error loading roles. Please try again later.</div>
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Invite Staff Member</CardTitle>
          <CardDescription>Create an invitation link for a new staff member</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="role" className="text-sm font-medium">
                Role
              </label>
              <Select value={roleId} onValueChange={setRoleId}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  {roles?.map((role) => (
                    <SelectItem key={role.id} value={role.id}>
                      {role.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Creating invitation...' : 'Create Invitation'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

