import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function withAdminAccess<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithAdminAccess(props: P) {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
      if (status === 'loading') return
      if (!session || session.user.role !== 'admin') {
        router.push('/dashboard')
      }
    }, [session, status, router])

    if (status === 'loading') {
      return <div>Loading...</div>
    }

    if (!session || session.user.role !== 'admin') {
      return null
    }

    return <WrappedComponent {...props} />
  }
}

