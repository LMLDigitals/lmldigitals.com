import { getUser } from "@/lib/user";
import { redirect } from "next/navigation";
import UserNav from "@/components/UserNav";

export default async function DashboardNavbar() {
  const user = await getUser();

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600 text-sm">Welcome, {user.name || "User"}</span>
          <UserNav user={user} />
        </div>
      </div>
    </header>
  );
}
