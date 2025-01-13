import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/user";
import Sidebar from "@/components/Sidebar";
import UserNav from "@/components/UserNav";
import { SessionProvider } from "next-auth/react";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getUser();

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <SessionProvider>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <UserNav user={user} />
            </div>
          </header>
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">{children}</div>
          </main>
        </div>
      </div>
    </SessionProvider>
  );
}
