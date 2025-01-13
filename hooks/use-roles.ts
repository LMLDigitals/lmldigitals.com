import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Role } from '@prisma/client'

export function useRoles() {
  return useQuery<Role[]>({
    queryKey: ['roles'],
    queryFn: () => fetch('/api/roles').then(res => {
        if (!res.ok) throw new Error('Failed to fetch roles')
        return res.json()
      }),
  })
}

export function useStaffRoles() {
  return useQuery<Role[]>({
    queryKey: ['staff-roles'],
    queryFn: () => fetch('/api/roles/staff').then(res => {
        if (!res.ok) throw new Error('Failed to fetch staff roles')
        return res.json()
      }),
  })
}

export function useCreateRole() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: { name: string; description: string }) =>
      fetch('/api/roles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(res => {
        if (!res.ok) throw new Error('Failed to create roles')
        return res.json()
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roles'] })
    },
  })
}

export function useDeleteRole() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) =>
      fetch(`/api/roles/${id}`, {
        method: 'DELETE',
      }).then(res => {
        if (!res.ok) throw new Error('Failed to delete roles')
        return res.json()
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roles'] })
    },
  })
}

