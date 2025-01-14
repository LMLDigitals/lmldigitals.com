'use client'

import { CreditCard, LogOut, PlusCircle, Settings, User } from 'lucide-react'
import { useSession, signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export interface UserInterface {
  name?: string | null
  email?: string | null
  role?: string | null
}

export default function UserNav({ user }: { user: UserInterface }) {
  const { data: session } = useSession()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-12 w-full justify-start gap-4 px-4 md:w-[256px]">
          <Avatar className="h-8 w-8 rounded">
            <AvatarImage src={`https://ui-avatars.com/api/?name=${user.name}&background=random`} alt={user.name || ''} />
            <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start gap-1 overflow-hidden">
            <p className="text-sm font-medium leading-none truncate w-full">
              {user.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground truncate w-full">
              {user.email}
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" side="right" sideOffset={8}>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
            {user.role && (
              <p className="text-xs leading-none text-muted-foreground">
                Role: {user.role}
              </p>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        {session?.user?.role !== 'admin' && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <PlusCircle className="mr-2 h-4 w-4" />
              <span>Upgrade to Pro</span>
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

