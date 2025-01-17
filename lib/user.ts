import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export type UserWithRole = {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  emailVerified: Date | null;
  role: {
    id: string;
    name: string;
    description: string;
  };
};


export async function getUser() {
  const session = await auth();
  if (!session?.user) {
    return null;
  }

  // const user = await prisma.user.findUnique({
  //   where: { email: session.user.email },
  //   include: { role: true }
  // })

  let user;

  if (session.user.role === "staff") {
    user = await prisma.staff.findUnique({
      where: { email: session.user.email },
      include: { role: true },
    });
  } else if (session.user.role === "customer") {
    user = await prisma.customer.findUnique({
      where: { email: session.user.email },
      include: { role: true },
    });
  }

  return user;
}

export async function getUserById(id: string) {
  const session = await auth();
  let user;
  if (!session?.user) {
    return null;
  }
  if (session.user.role === "staff") {
    user = await prisma.staff.findUnique({
      where: { id },
      include: { role: true },
    });
  } else if (session.user.role === "customer") {
    user = await prisma.customer.findUnique({
      where: { id },
      include: { role: true },
    });
  }

  return user;
  //  prisma.user.findUnique({
  //   where: { id },
  //   include: { role: true },
  // });
}

export async function isAuthorized(allowedRoles: string[]) {
  const user = await getUser();
  return user && allowedRoles.includes(user.role.name);
}
