"use client";

import { ReactNode } from "react";
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
  console.log("use session", user);

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-100">
        <AppSidebar
          user={user || { id: "", email: "", name: "", image: "", role: "" }}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <SidebarInset className="flex flex-col h-full">
            <header className="flex h-16 items-center gap-2 border-b px-4 bg-white dark:bg-gray-800 dark:border-gray-700">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumbs.map((breadcrumb, index) => (
                    <BreadcrumbItem key={breadcrumb.name}>
                      <BreadcrumbLink href={breadcrumb.href}>
                        {breadcrumb.name.charAt(0).toUpperCase() +
                          breadcrumb.name.slice(1)}
                      </BreadcrumbLink>
                      {index < breadcrumbs.length - 1 && (
                        <BreadcrumbSeparator className="hidden md:block" />
                      )}
                    </BreadcrumbItem>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </header>
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 dark:bg-gray-800">
              <div className="container mx-auto px-6 py-8">{children}</div>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
