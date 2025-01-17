// 'use client'

// import { useState } from 'react'
// import { signIn } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { useToast } from "@/components/ui/use-toast"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// export default function SignIn() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   })
//   const [errors, setErrors] = useState<Record<string, string>>({})
//   const [isLoading, setIsLoading] = useState(false)
//   const router = useRouter()
//   const { toast } = useToast()

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {}
    
//     if (!formData.email) newErrors.email = 'Email is required'
//     if (!formData.password) newErrors.password = 'Password is required'

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!validateForm()) return

//     setIsLoading(true)

//     try {
//       const result = await signIn('credentials', {
//         email: formData.email,
//         password: formData.password,
//         redirect: false,
//       })

//       if (result?.error) {
//         setErrors({ auth: 'Invalid email or password' })
//         toast({
//           title: "Error",
//           description: "Invalid email or password",
//           variant: "destructive",
//         })
//       } else {
//         router.push('/dashboard')
//       }
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "An unexpected error occurred",
//         variant: "destructive",
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }))
//     }
//   }

//   return (
//     <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
//       <div className="relative hidden h-full flex-col bg-muted p-10 dark:text-white lg:flex dark:border-r">
//         <div className="absolute inset-0 dark:bg-zinc-900" />
//         <div className="relative z-20 flex items-center text-lg font-medium">
//           <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
//           LML Digitals
//         </div>
//         <div className="relative z-20 mt-auto">
//           <blockquote className="space-y-2">
//             <p className="text-lg">
//               "Transform your business with innovative digital solutions."
//             </p>
//           </blockquote>
//         </div>
//       </div>
//       <div className="lg:p-8">
//         <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
//           <Card>
//             <CardHeader>
//               <CardTitle>Sign in</CardTitle>
//               <CardDescription>
//                 Enter your credentials to access your account
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="space-y-2">
//                   <label htmlFor="email" className="text-sm font-medium">
//                     Email
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={errors.email ? 'border-red-500' : ''}
//                   />
//                   {errors.email && (
//                     <p className="text-sm text-red-500">{errors.email}</p>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="password" className="text-sm font-medium">
//                     Password
//                   </label>
//                   <Input
//                     id="password"
//                     name="password"
//                     type="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className={errors.password ? 'border-red-500' : ''}
//                   />
//                   {errors.password && (
//                     <p className="text-sm text-red-500">{errors.password}</p>
//                   )}
//                 </div>

//                 {errors.auth && (
//                   <p className="text-sm text-red-500 text-center">{errors.auth}</p>
//                 )}

//                 <Button type="submit" className="w-full" disabled={isLoading}>
//                   {isLoading ? 'Signing in...' : 'Sign in'}
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//           <p className="text-center text-sm text-muted-foreground">
//             Don't have an account?{' '}
//             <Link
//               href="/auth/signup"
//               className="underline underline-offset-4 hover:text-primary"
//             >
//               Sign up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState<Record<string, boolean>>({})
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    const newSuccess: Record<string, boolean> = {}
    
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    else newSuccess.email = true

    if (!formData.password) newErrors.password = 'Password is required'
    else newSuccess.password = true

    if (!formData.userType) newErrors.userType = 'User type is required'
    else newSuccess.userType = true

    setErrors(newErrors)
    setSuccess(newSuccess)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        userType: formData.userType,
        redirect: false,
      })

      if (result?.error) {
        setErrors({ auth: 'Invalid email or password' })
        toast({
          title: "Error",
          description: "Invalid email or password",
          variant: "destructive",
        })
      } else {
        router.push('/dashboard')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    validateForm()
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, userType: value }))
    if (errors.userType) {
      setErrors(prev => ({ ...prev, userType: '' }))
    }
    validateForm()
  }

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 dark:text-white lg:flex dark:border-r">
        <div className="absolute inset-0 dark:bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          LML Digitals
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "Transform your business with innovative digital solutions."
            </p>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Card>
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'border-red-500' : success.email ? 'border-green-500' : ''}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'border-red-500' : success.password ? 'border-green-500' : ''}
                  />
                  {errors.password && (
                    <p className="text-sm text-red-500">{errors.password}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="userType" className="text-sm font-medium">
                    User Type
                  </label>
                  <Select name="userType" onValueChange={handleSelectChange}>
                    <SelectTrigger className={errors.userType ? 'border-red-500' : success.userType ? 'border-green-500' : ''}>
                      <SelectValue placeholder="Select user type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="staff">Staff</SelectItem>
                      <SelectItem value="customer">Customer</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.userType && (
                    <p className="text-sm text-red-500">{errors.userType}</p>
                  )}
                </div>

                {errors.auth && (
                  <p className="text-sm text-red-500 text-center">{errors.auth}</p>
                )}

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </Button>
              </form>
            </CardContent>
          </Card>
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link
              href="/auth/signup"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

