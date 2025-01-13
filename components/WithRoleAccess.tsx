import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { ComponentType, useEffect } from 'react'
import { isAuthorized } from '@/lib/user'

const withRoleAccess = (WrappedComponent: ComponentType, allowedRoles: string[]) => {
  return function WithRoleAccess(props: any) {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
      const checkAuthorization = async () => {
        if (status === 'loading') return // Do nothing while loading
        if (!session) {
          router.push('/auth/signin')
        } else if (!(await isAuthorized(allowedRoles))) {
          router.push('/dashboard')
        }
      }

      checkAuthorization()
    }, [session, status, router])

    if (status === 'loading') {
      return <div>Loading...</div>
    }

    if (!session) {
      return null
    }

    return <WrappedComponent {...props} />
  }
}

export default withRoleAccess

