import { ReactNode } from "react";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { SessionProvider } from "next-auth/react";
import DashboardNavbar from "@/components/DashboardNav";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SessionProvider>
        <section>
          <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <DashboardNavbar />
              <section className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <div className="container mx-auto px-6 py-8">{children}</div>
              </section>
            </div>
          </div>
        </section>
      </SessionProvider>
    </div>
  );
}
