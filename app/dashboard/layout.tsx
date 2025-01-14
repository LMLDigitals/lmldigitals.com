"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import DashboardNavbar from "@/components/DashboardNav";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const breadcrumbs = pathname
    .split("/")
    .filter((segment) => segment) // Remove empty segments
    .map((segment, index, array) => ({
      name: segment,
      href: `/${array.slice(0, index + 1).join("/")}`,
    }));
  return (
    <SidebarProvider>
      <SessionProvider>
        <div className="flex h-screen bg-gray-100">
          <AppSidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* <DashboardNavbar /> */}
            <SidebarInset>
              <header className="flex h-16 items-center gap-2 border-b px-4 bg-white">
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
                      </BreadcrumbItem>
                    ))}
                  </BreadcrumbList>
                </Breadcrumb>
              </header>
              <section className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <div className="container mx-auto px-6 py-8">{children}</div>
              </section>
            </SidebarInset>
          </div>
        </div>
      </SessionProvider>
    </SidebarProvider>
  );
}
