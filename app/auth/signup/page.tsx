// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
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

// const locations = [
//   { id: "nyc", name: "New York City" },
//   { id: "la", name: "Los Angeles" },
//   { id: "chi", name: "Chicago" },
//   { id: "hou", name: "Houston" },
// ];

// const states = [
//   { id: "ny", name: "New York" },
//   { id: "ca", name: "California" },
//   { id: "il", name: "Illinois" },
//   { id: "tx", name: "Texas" },
// ];

// const cities = {
//   ny: ["New York City", "Buffalo", "Albany"],
//   ca: ["Los Angeles", "San Francisco", "San Diego"],
//   il: ["Chicago", "Springfield", "Peoria"],
//   tx: ["Houston", "Austin", "Dallas"],
// };

// export default function SignUp() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     number: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     location: "",
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [success, setSuccess] = useState<Record<string, boolean>>({});
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();
//   const { toast } = useToast();

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};
//     const newSuccess: Record<string, boolean> = {};

//     // if (!formData.name) newErrors.name = "Name is required";
//     // if (!formData.email) newErrors.email = "Email is required";
//     // if (!formData.password) newErrors.password = "Password is required";
//     // if (formData.password.length < 8)
//     //   newErrors.password = "Password must be at least 8 characters";
//     // if (formData.password !== formData.confirmPassword) {
//     //   newErrors.confirmPassword = "Passwords do not match";
//     // }

//     if (!formData.name) newErrors.name = "Name is required";
//     else newSuccess.name = true;

//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Email is invalid";
//     else newSuccess.email = true;

//     if (!formData.number) newErrors.number = "Phone number is required";
//     else newSuccess.number = true;

//     if (!formData.password) newErrors.password = "Password is required";
//     else if (formData.password.length < 8)
//       newErrors.password = "Password must be at least 8 characters";
//     else newSuccess.password = true;

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     } else if (formData.confirmPassword) {
//       newSuccess.confirmPassword = true;
//     }

//     if (!formData.location) newErrors.location = "Location is required";
//     else newSuccess.location = true;

//     if (formData.state) newSuccess.state = true;

//     if (!formData.city) newSuccess.state = true;

//     if (!formData.zip) newSuccess.state = true;

//     setErrors(newErrors);
//     setSuccess(newSuccess);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsLoading(true);

//     try {
//       const response = await fetch("/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const data = await response.json();
//         throw new Error(data.error || "Failed to create account");
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

//   const handleSelectChange = (name: string, value: string) => {
//     setFormData(prev => ({ ...prev, [name]: value }))
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }))
//     }
//     if (name === 'state') {
//       setFormData(prev => ({ ...prev, city: '' }))
//     }
//     validateForm()
//   }

//   return (
//     <div className="container relative min-h-dvh flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
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
//               <CardTitle>Create an account</CardTitle>
//               <CardDescription>
//                 Enter your information to create your account
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
//                     className={errors.name ? "border-red-500" : success.name ? 'border-green-500' : ''}
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
//                     onChange={handleChange}
//                     className={errors.email ? 'border-red-500' : success.email ? 'border-green-500' : ''}
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
//                     className={errors.password ? "border-red-500" : success.password ? 'border-green-500' : ''}
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
//                     className={errors.confirmPassword ? "border-red-500" : success.confirmPassword ? 'border-green-500' : ''}
//                   />
//                   {errors.confirmPassword && (
//                     <p className="text-sm text-red-500">
//                       {errors.confirmPassword}
//                     </p>
//                   )}
//                 </div>

//                 <Button type="submit" className="w-full" disabled={isLoading}>
//                   {isLoading ? "Creating account..." : "Create account"}
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//           <p className="text-center text-sm text-muted-foreground">
//             Already have an account?{" "}
//             <Link
//               href="/auth/signin"
//               className="underline underline-offset-4 hover:text-primary"
//             >
//               Sign in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
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

const states = [
  { id: 'ny', name: 'New York' },
  { id: 'ca', name: 'California' },
  { id: 'il', name: 'Illinois' },
  { id: 'tx', name: 'Texas' },
]

const cities = {
  ny: ['New York City', 'Buffalo', 'Albany'],
  ca: ['Los Angeles', 'San Francisco', 'San Diego'],
  il: ['Chicago', 'Springfield', 'Peoria'],
  tx: ['Houston', 'Austin', 'Dallas'],
}

export default function CustomerSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    number: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    location: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState<Record<string, boolean>>({})
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    const newSuccess: Record<string, boolean> = {}
    
    if (!formData.name) newErrors.name = 'Name is required'
    else newSuccess.name = true

    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    else newSuccess.email = true

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

    if (!formData.state) newErrors.state = 'State is required'
    else newSuccess.state = true

    if (!formData.city) newErrors.city = 'City is required'
    else newSuccess.city = true

    if (!formData.zip) newErrors.zip = 'ZIP Code is required'
    else newSuccess.zip = true

    setErrors(newErrors)
    setSuccess(newSuccess)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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
    if (name === 'state') {
      setFormData(prev => ({ ...prev, city: '' }))
    }
    validateForm()
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
              "Join our community and experience innovative digital solutions."
            </p>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Card>
            <CardHeader>
              <CardTitle>Create your account</CardTitle>
              <CardDescription>
                Sign up to access our services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
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
                      onChange={handleChange}
                      className={errors.email ? 'border-red-500' : success.email ? 'border-green-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
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
                </div>

                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-medium">
                    Address
                  </label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="state" className="text-sm font-medium">
                      State
                    </label>
                    <Select name="state" onValueChange={(value) => handleSelectChange('state', value)}>
                      <SelectTrigger className={errors.state ? 'border-red-500' : success.state ? 'border-green-500' : ''}>
                        <SelectValue placeholder="Select a state" />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state.id} value={state.id}>
                            {state.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.state && (
                      <p className="text-sm text-red-500">{errors.state}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-medium">
                      City
                    </label>
                    <Select name="city" onValueChange={(value) => handleSelectChange('city', value)} disabled={!formData.state}>
                      <SelectTrigger className={errors.city ? 'border-red-500' : success.city ? 'border-green-500' : ''}>
                        <SelectValue placeholder="Select a city" />
                      </SelectTrigger>
                      <SelectContent>
                        {formData.state && cities[formData.state as keyof typeof cities].map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.city && (
                      <p className="text-sm text-red-500">{errors.city}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="zip" className="text-sm font-medium">
                    ZIP Code
                  </label>
                  <Input
                    id="zip"
                    name="zip"
                    type="text"
                    value={formData.zip}
                    onChange={handleChange}
                    className={errors.zip ? 'border-red-500' : success.zip ? 'border-green-500' : ''}
                  />
                  {errors.zip && (
                    <p className="text-sm text-red-500">{errors.zip}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
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
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Creating account...' : 'Sign up'}
                </Button>
              </form>
            </CardContent>
          </Card>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link
              href="/auth/signin"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

