// "use client";

// import { useState, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useToast } from "@/components/ui/use-toast";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const locations = [
//   { id: "nyc", name: "New York City" },
//   { id: "la", name: "Los Angeles" },
//   { id: "chi", name: "Chicago" },
//   { id: "hou", name: "Houston" },
// ];

// export default function StaffSignup() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     number: "",
//     location: "",
//     jobTitle: "",
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [validatingToken, setValidatingToken] = useState(true);
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { toast } = useToast();
//   const token = searchParams.get("token");

//   useEffect(() => {
//     const validateToken = async () => {
//       if (!token) {
//         router.push("/auth/signin");
//         return;
//       }

//       try {
//         const res = await fetch(`/api/auth/validate-token?token=${token}`);
//         if (!res.ok) {
//           throw new Error("Invalid token");
//         }
//         const data = await res.json();
//         setFormData((prev) => ({
//           ...prev,
//           email: data.email,
//         }));
//       } catch (error) {
//         toast({
//           title: "Invalid Token",
//           description: "This invitation link is invalid or has expired.",
//           variant: "destructive",
//         });
//         router.push("/auth/signin");
//       } finally {
//         setValidatingToken(false);
//       }
//     };

//     validateToken();
//   }, [token, router, toast]);

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};

//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.number) newErrors.number = "Phone Number is required";
//     if (!formData.password) newErrors.password = "Password is required";
//     if (formData.password.length < 8)
//       newErrors.password = "Password must be at least 8 characters";
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }
//     if (!formData.location) newErrors.location = "Location is required";
//     if (!formData.jobTitle) newErrors.jobTitle = "Job title is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsLoading(true);

//     try {
//       const res = await fetch("/api/auth/staff-signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           // name: formData.name,
//           // email: formData.email,
//           // password: formData.password,
//           ...formData,
//           token,
//         }),
//       });

//       if (!res.ok) {
//         const data = await res.json();
//         throw new Error(data.error);
//       }

//       toast({
//         title: "Success",
//         description: "Your account has been created. Please sign in.",
//       });
//       router.push("/auth/signin");
//     } catch (error) {
//       toast({
//         title: "Error",
//         description:
//           error instanceof Error ? error.message : "Failed to create account",
//         variant: "destructive",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   if (validatingToken) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-transparent">
//         <p className="text-lg">Validating invitation...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
//       <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
//         <div className="absolute inset-0 bg-zinc-900" />
//         <div className="relative z-20 flex items-center text-lg font-medium">
//           <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
//           LML Digitals
//         </div>
//         <div className="relative z-20 mt-auto">
//           <blockquote className="space-y-2">
//             <p className="text-lg">
//               "Join our team and help transform businesses with innovative
//               digital solutions."
//             </p>
//           </blockquote>
//         </div>
//       </div>
//       <div className="lg:p-8">
//         <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
//           <Card>
//             <CardHeader>
//               <CardTitle>Complete your registration</CardTitle>
//               <CardDescription>
//                 Set up your staff account using your invitation
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="space-y-2">
//                   <label htmlFor="name" className="text-sm font-medium">
//                     Name
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     type="text"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className={errors.name ? "border-red-500" : ""}
//                   />
//                   {errors.name && (
//                     <p className="text-sm text-red-500">{errors.name}</p>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="email" className="text-sm font-medium">
//                     Email
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     disabled
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="number" className="text-sm font-medium">
//                     Phone Number
//                   </label>
//                   <Input
//                     id="number"
//                     name="number"
//                     type="tel"
//                     value={formData.number}
//                     onChange={handleChange}
//                     className={errors.number ? "border-red-500" : ""}
//                   />
//                   {errors.number && (
//                     <p className="text-sm text-red-500">{errors.number}</p>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="location" className="text-sm font-medium">
//                     Location
//                   </label>
//                   <Select
//                     name="location"
//                     onValueChange={(value) =>
//                       setFormData((prev) => ({ ...prev, location: value }))
//                     }
//                   >
//                     <SelectTrigger
//                       className={errors.location ? "border-red-500" : ""}
//                     >
//                       <SelectValue placeholder="Select a location" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {locations.map((location) => (
//                         <SelectItem key={location.id} value={location.id}>
//                           {location.name}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   {errors.location && (
//                     <p className="text-sm text-red-500">{errors.location}</p>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="jobTitle" className="text-sm font-medium">
//                     Job Title
//                   </label>
//                   <Input
//                     id="jobTitle"
//                     name="jobTitle"
//                     type="text"
//                     value={formData.jobTitle}
//                     onChange={handleChange}
//                     className={errors.jobTitle ? "border-red-500" : ""}
//                   />
//                   {errors.jobTitle && (
//                     <p className="text-sm text-red-500">{errors.jobTitle}</p>
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
//                     className={errors.password ? "border-red-500" : ""}
//                   />
//                   {errors.password && (
//                     <p className="text-sm text-red-500">{errors.password}</p>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <label
//                     htmlFor="confirmPassword"
//                     className="text-sm font-medium"
//                   >
//                     Confirm Password
//                   </label>
//                   <Input
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type="password"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className={errors.confirmPassword ? "border-red-500" : ""}
//                   />
//                   {errors.confirmPassword && (
//                     <p className="text-sm text-red-500">
//                       {errors.confirmPassword}
//                     </p>
//                   )}
//                 </div>

//                 <Button type="submit" className="w-full" disabled={isLoading}>
//                   {isLoading ? "Creating account..." : "Complete registration"}
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const locations = [
  { id: 'nyc', name: 'New York City' },
  { id: 'la', name: 'Los Angeles' },
  { id: 'chi', name: 'Chicago' },
  { id: 'hou', name: 'Houston' },
]

export default function StaffSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    number: '',
    location: '',
    jobTitle: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState<Record<string, boolean>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [validatingToken, setValidatingToken] = useState(true)
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const token = searchParams.get('token')

  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        router.push('/auth/signin')
        return
      }
      
      try {
        const res = await fetch(`/api/auth/validate-token?token=${token}`)
        if (!res.ok) {
          throw new Error('Invalid token')
        }
        const data = await res.json()
        setFormData(prev => ({
          ...prev,
          email: data.email
        }))
      } catch (error) {
        toast({
          title: 'Invalid Token',
          description: 'This invitation link is invalid or has expired.',
          variant: 'destructive',
        })
        router.push('/auth/signin')
      } finally {
        setValidatingToken(false)
      }
    }

    validateToken()
  }, [token, router, toast])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    const newSuccess: Record<string, boolean> = {}
    
    if (!formData.name) newErrors.name = 'Name is required'
    else newSuccess.name = true

    if (!formData.number) newErrors.number = 'Phone number is required'
    else newSuccess.number = true

    if (!formData.password) newErrors.password = 'Password is required'
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
    else newSuccess.password = true

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    } else if (formData.confirmPassword) {
      newSuccess.confirmPassword = true
    }

    if (!formData.location) newErrors.location = 'Location is required'
    else newSuccess.location = true

    if (!formData.jobTitle) newErrors.jobTitle = 'Job title is required'
    else newSuccess.jobTitle = true

    setErrors(newErrors)
    setSuccess(newSuccess)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)

    try {
      const res = await fetch('/api/auth/staff-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          token
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error)
      }

      toast({
        title: 'Success',
        description: 'Your account has been created. Please sign in.',
      })
      router.push('/auth/signin')
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to create account',
        variant: 'destructive',
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

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    validateForm()
  }

  if (validatingToken) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">Validating invitation...</p>
      </div>
    )
  }

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
          LML Digitals
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "Join our team and help transform businesses with innovative digital solutions."
            </p>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Card>
            <CardHeader>
              <CardTitle>Complete your registration</CardTitle>
              <CardDescription>
                Set up your staff account using your invitation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'border-red-500' : success.name ? 'border-green-500' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    disabled
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="number" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="number"
                    name="number"
                    type="tel"
                    value={formData.number}
                    onChange={handleChange}
                    className={errors.number ? 'border-red-500' : success.number ? 'border-green-500' : ''}
                  />
                  {errors.number && (
                    <p className="text-sm text-red-500">{errors.number}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium">
                    Location
                  </label>
                  <Select name="location" onValueChange={(value) => handleSelectChange('location', value)}>
                    <SelectTrigger className={errors.location ? 'border-red-500' : success.location ? 'border-green-500' : ''}>
                      <SelectValue placeholder="Select a location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location.id} value={location.id}>
                          {location.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.location && (
                    <p className="text-sm text-red-500">{errors.location}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="jobTitle" className="text-sm font-medium">
                    Job Title
                  </label>
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className={errors.jobTitle ? 'border-red-500' : success.jobTitle ? 'border-green-500' : ''}
                  />
                  {errors.jobTitle && (
                    <p className="text-sm text-red-500">{errors.jobTitle}</p>
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
                  <label htmlFor="confirmPassword" className="text-sm font-medium">
                    Confirm Password
                  </label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={errors.confirmPassword ? 'border-red-500' : success.confirmPassword ? 'border-green-500' : ''}
                  />
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-500">{errors.confirmPassword}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Creating account...' : 'Complete registration'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

