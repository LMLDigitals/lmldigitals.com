"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { useSession } from "next-auth/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import AppSidebar from "../../components/app-sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const breadcrumbs = pathname
    .split("/")
    .filter((segment) => segment)
    .map((segment, index, array) => ({
      name: segment,
      href: `/${array.slice(0, index + 1).join("/")}`,
    }));

  const { data: session } = useSession();
  const user = session?.user;

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        {/* Sidebar */}
        <AppSidebar
          user={user as any}
        />

        {/* Main Content Area */}
        <SidebarInset className="flex flex-col flex-1 w-0">
          <header className="flex h-16 items-center gap-2 border-b px-4 bg-white dark:bg-gray-900 dark:border-gray-700 text-black dark:text-white">
            <SidebarTrigger className="-ml-1 dark:text-white" />
            <Separator
              orientation="vertical"
              className="mr-2 h-4 dark:text-white"
            />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((breadcrumb, index) => (
                  <React.Fragment key={breadcrumb.name}>
                    <BreadcrumbItem>
                      <BreadcrumbLink href={breadcrumb.href}>
                        {breadcrumb.name.charAt(0).toUpperCase() +
                          breadcrumb.name.slice(1)}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && (
                      <BreadcrumbSeparator className="hidden md:block" />
                    )}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <main className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900">
            <div className="container h-full mx-auto px-6 py-8">{children}</div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
