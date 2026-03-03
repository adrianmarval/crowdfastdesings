'use server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { headers } from 'next/headers';

export const getPaginatedUsers = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session?.user.role !== 'admin') {
    return {
      ok: false,
      message: 'Debe de ser un usuario administrador',
    };
  }

  const users = await prisma.user.findMany({
    orderBy: {
      name: 'desc',
    },
  });

  return {
    ok: true,
    users: users,
  };
};
