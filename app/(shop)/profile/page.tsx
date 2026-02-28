import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { ProfileView } from './ui/ProfileView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Profile',
  description: 'Manage your profile and preferences at Crowdfast Designs.',
};

export default async function ProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect('/');
  }

  const { user } = session;

  return (
    <div className="my-8 flex min-h-[calc(100vh-200px)] flex-col overflow-hidden rounded-xl text-slate-900 md:flex-row dark:text-slate-100">
      <ProfileView user={user} />
    </div>
  );
}
