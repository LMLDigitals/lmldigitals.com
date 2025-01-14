import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { User, Users, Key, Settings, BarChart2 } from "lucide-react";
import UserNav, { UserInterface } from "@/components/UserNav";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      items: [
        {
          title: "Profile",
          url: "/dashboard/profile",
          isActive: true,
          icon: User,
        },
        {
          title: "Manage Users",
          url: "/dashboard/manage-users",
          icon: Users,
        },
        {
          title: "Manage Roles",
          url: "/dashboard/manage-roles",
          icon: Key,
        },
        {
          title: "Settings",
          url: "/dashboard/settings",
          icon: Settings,
        },
        {
          title: "Reports",
          url: "/dashboard/reports",
          icon: BarChart2,
        },
      ],
    },
  ],
};

export default function AppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & { user: UserInterface }) {
  return (
    <Sidebar className="dark:bg-red-700" {...props}>
      <SidebarHeader>
        <a href="/dashboard">
          <img src="/logo.png" alt="LML Logo" className="w-12 h-10" />
        </a>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((subItem) => (
                  <SidebarMenuItem key={subItem.title}>
                    <SidebarMenuButton asChild isActive={subItem.isActive}>
                      <a href={subItem.url} className="flex items-center gap-2">
                        <subItem.icon className="w-4 h-4" />
                        <span>{subItem.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="p-4 border-t">
        <UserNav user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
