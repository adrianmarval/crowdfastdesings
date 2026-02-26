'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { Skeleton } from '@/components/ui/skeleton';

export function AuthButtons() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <Skeleton className="h-9 w-[155px]" />;
  }

  return session?.user ? (
    // informacion del usuario
    <div className="flex items-center gap-2">
      {/* <span className="text-sm">{session.user.name}</span> */}
      <Button variant="outline" size="sm" onClick={() => authClient.signOut()}>
        Log out
      </Button>
    </div>
  ) : (
    <>
      <Link href="/login">
        <Button variant="outline" size="sm">
          Log in
        </Button>
      </Link>
      <Link href="/signup">
        <Button size="sm">Sign up</Button>
      </Link>
    </>
  );
}
