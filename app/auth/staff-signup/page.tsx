// // 'use client'

// // import { useState, useEffect } from 'react'
// // import { useRouter, useSearchParams } from 'next/navigation'

// // export default function StaffSignup() {
// //   const [name, setName] = useState('')
// //   const [email, setEmail] = useState('')
// //   const [password, setPassword] = useState('')
// //   const [role, setRole] = useState('')
// //   const [roles, setRoles] = useState([])
// //   const [token, setToken] = useState('')
// //   const [error, setError] = useState('')
// //   const router = useRouter()
// //   const searchParams = useSearchParams()

// //   useEffect(() => {
// //     const fetchRoles = async () => {
// //       const response = await fetch('/api/roles')
// //       const data = await response.json()
// //       setRoles(data.filter((r: any) => r.name !== 'admin' && r.name !== 'customer'))
// //     }
// //     fetchRoles()

// //     const tokenFromUrl = searchParams.get('token')
// //     if (tokenFromUrl) {
// //       setToken(tokenFromUrl)
// //     }
// //   }, [searchParams])

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     const response = await fetch('/api/auth/staff-signup', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({ name, email, password, role, token }),
// //     })

// //     if (response.ok) {
// //       router.push('/auth/signin')
// //     } else {
// //       const data = await response.json()
// //       setError(data.error)
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-md w-full space-y-8">
// //         <div>
// //           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
// //             Create your staff account
// //           </h2>
// //         </div>
// //         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
// //           <input type="hidden" name="remember" defaultValue="true" />
// //           <div className="rounded-md shadow-sm -space-y-px">
// //             <div>
// //               <label htmlFor="name" className="sr-only">
// //                 Name
// //               </label>
// //               <input
// //                 id="name"
// //                 name="name"
// //                 type="text"
// //                 required
// //                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
// //                 placeholder="Name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //               />
// //             </div>
// //             <div>
// //               <label htmlFor="email-address" className="sr-only">
// //                 Email address
// //               </label>
// //               <input
// //                 id="email-address"
// //                 name="email"
// //                 type="email"
// //                 autoComplete="email"
// //                 required
// //                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
// //                 placeholder="Email address"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />
// //             </div>
// //             <div>
// //               <label htmlFor="password" className="sr-only">
// //                 Password
// //               </label>
// //               <input
// //                 id="password"
// //                 name="password"
// //                 type="password"
// //                 autoComplete="new-password"
// //                 required
// //                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
// //                 placeholder="Password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //               />
// //             </div>
// //             <div>
// //               <label htmlFor="role" className="sr-only">
// //                 Role
// //               </label>
// //               <select
// //                 id="role"
// //                 name="role"
// //                 required
// //                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
// //                 value={role}
// //                 onChange={(e) => setRole(e.target.value)}
// //               >
// //                 <option value="">Select a role</option>
// //                 {roles.map((r: any) => (
// //                   <option key={r.id} value={r.id}>
// //                     {r.name}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>
// //           </div>

// //           {error && (
// //             <div className="text-red-600 text-sm">{error}</div>
// //           )}

// //           <div>
// //             <button
// //               type="submit"
// //               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// //             >
// //               Sign up
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   )
// // }

// 'use client'

// import { useState, useEffect } from 'react'
// import { useRouter, useSearchParams } from 'next/navigation'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { useToast } from "@/components/ui/use-toast"
// import { Role } from '@prisma/client'

// export default function StaffSignup() {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [roleId, setRoleId] = useState('')
//   const [roles, setRoles] = useState<Role[]>([])
//   const [loading, setLoading] = useState(false)
//   const [validatingToken, setValidatingToken] = useState(true)
//   const router = useRouter()
//   const searchParams = useSearchParams()
//   const { toast } = useToast()
//   const token = searchParams.get('token')

//   useEffect(() => {
//     const validateToken = async () => {
//       if (!token) {
//         router.push('/auth/signin')
//         return
//       }

//       const res = await fetch(`/api/auth/validate-token?token=${token}`)
//       if (!res.ok) {
//         toast({
//           title: "Invalid Token",
//           description: "This invitation link is invalid or has expired.",
//           variant: "destructive",
//         })
//         router.push('/auth/signin')
//         return
//       }

//       const data = await res.json()
//       setEmail(data.email)
//       setValidatingToken(false)
//     }

//     const fetchRoles = async () => {
//       const res = await fetch('/api/roles/staff')
//       if (res.ok) {
//         const data = await res.json()
//         setRoles(data)
//       }
//     }

//     validateToken()
//     fetchRoles()
//   }, [token, router, toast])

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)

//     try {
//       const res = await fetch('/api/auth/staff-signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email, password, roleId, token }),
//       })

//       if (!res.ok) {
//         const data = await res.json()
//         throw new Error(data.error)
//       }

//       toast({
//         title: "Success",
//         description: "Your account has been created. Please sign in.",
//       })
//       router.push('/auth/signin')
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: error instanceof Error ? error.message : "Failed to create account",
//         variant: "destructive",
//       })
//     } finally {
//       setLoading(false)
//     }
//   }

//   if (validatingToken) {
//     return <div>Validating invitation...</div>
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Create your staff account
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Name
//               </label>
//               <Input
//                 id="name"
//                 type="text"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <Input
//                 id="email"
//                 type="email"
//                 required
//                 value={email}
//                 disabled
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <Input
//                 id="password"
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="role" className="block text-sm font-medium text-gray-700">
//                 Role
//               </label>
//               <Select value={roleId} onValueChange={setRoleId}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select a role" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {roles.map((role) => (
//                     <SelectItem key={role.id} value={role.id}>
//                       {role.name}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>

//           <Button
//             type="submit"
//             className="w-full"
//             disabled={loading}
//           >
//             {loading ? 'Creating account...' : 'Create account'}
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }

"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useStaffRoles } from "@/hooks/use-roles";

export default function StaffSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roleId, setRoleId] = useState("");
  const [loading, setLoading] = useState(false);
  const [validatingToken, setValidatingToken] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const token = searchParams.get("token");

  const {
    data: roles,
    isLoading: rolesLoading,
    error: rolesError,
  } = useStaffRoles();

  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        router.push("/auth/signin");
        return;
      }
      
      try {
        const res = await fetch(`/api/auth/validate-token?token=${token}`);
        if (!res.ok) {
          throw new Error("Invalid token");
        }
        const data = await res.json();
        setEmail(data.email);
      } catch (error) {
        toast({
          title: "Invalid Token",
          description: "This invitation link is invalid or has expired.",
          variant: "destructive",
        });
        router.push("/auth/signin");
      } finally {
        setValidatingToken(false);
      }
    };

    validateToken();
  }, [token, router, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/staff-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, roleId, token }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error);
      }

      toast({
        title: "Success",
        description: "Your account has been created. Please sign in.",
      });
      router.push("/auth/signin");
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to create account",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (validatingToken) {
    return <div>Validating invitation...</div>;
  }

  if (rolesLoading) {
    return <div>Loading roles...</div>;
  }

  if (rolesError) {
    return <div>Error loading roles. Please try again later.</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your staff account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input id="email" type="email" required value={email} disabled />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
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
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </Button>
        </form>
      </div>
    </div>
  );
}
