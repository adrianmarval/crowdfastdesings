import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { IoPersonOutline, IoCameraOutline, IoWarningOutline, IoInformationCircleOutline, IoAlertCircleOutline } from 'react-icons/io5';

export default async function ProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect('/');
  }

  const { user } = session;

  return (
    <div className="my-8 flex min-h-[calc(100vh-200px)] flex-col overflow-hidden rounded-xl text-slate-900 md:flex-row dark:text-slate-100">
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-4xl px-4 py-12 md:px-8">
          {/* Profile Header */}
          <div className="mb-8 rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
                <div className="group relative">
                  <div className="flex size-28 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-md dark:border-slate-900 dark:bg-slate-800">
                    {user.image ? (
                      <Image
                        src={user.image}
                        alt={user.name || 'User profile image'}
                        width={112}
                        height={112}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <IoPersonOutline className="text-5xl text-slate-400" />
                    )}
                  </div>
                  <button className="absolute right-1 bottom-1 flex size-8 items-center justify-center rounded-full border-2 border-white bg-[#135bec] text-white shadow-sm transition-transform hover:scale-105 dark:border-slate-900">
                    <IoCameraOutline className="text-lg" />
                  </button>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 md:justify-start">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{user.name}</h2>
                    <span className="rounded border border-slate-200 bg-slate-100 px-2 py-0.5 text-[10px] font-bold tracking-wider text-slate-600 uppercase dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
                      {user.role || 'User'}
                    </span>
                  </div>
                  <p className="mt-1 text-slate-500 dark:text-slate-400">
                    Account managed since{' '}
                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Unknown'}
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
                <button className="w-full rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 sm:w-auto dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
                  Edit Profile
                </button>
                <button className="w-full rounded-lg bg-[#135bec] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#135bec]/90 sm:w-auto">
                  Change Password
                </button>
              </div>
            </div>
          </div>

          {/* Verification Warning Card */}
          {user.emailVerified === false && (
            <div className="mb-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5 md:flex-row md:items-center dark:border-amber-900/30 dark:bg-amber-900/10">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-amber-100 p-2 text-amber-600 dark:bg-amber-900/40 dark:text-amber-500">
                  <IoWarningOutline className="text-2xl" />
                </div>
                <div>
                  <p className="text-base leading-none font-bold text-amber-900 dark:text-amber-200">Email Not Verified</p>
                  <p className="mt-1 text-sm text-amber-800 dark:text-amber-300/80">
                    Your email address is not yet verified. Please verify it to secure your account and unlock all features.
                  </p>
                </div>
              </div>
              <button className="w-full rounded-lg bg-amber-600 px-6 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-amber-700 md:w-auto">
                Verify Now
              </button>
            </div>
          )}

          {/* Account Information Details */}
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-100 px-8 py-5 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Account Information</h3>
              <IoInformationCircleOutline className="text-xl text-slate-400" />
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
                {/* Email Field */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold tracking-widest text-slate-400 uppercase dark:text-slate-500">Email Address</span>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-slate-900 dark:text-slate-100">{user.email}</p>
                    {!user.emailVerified && <IoAlertCircleOutline className="text-base text-amber-500" title="Unverified" />}
                  </div>
                </div>
                {/* Member Since Field */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold tracking-widest text-slate-400 uppercase dark:text-slate-500">Member Since</span>
                  <p className="font-medium text-slate-900 dark:text-slate-100">
                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Unknown'}
                  </p>
                </div>
                {/* Full Name Field */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold tracking-widest text-slate-400 uppercase dark:text-slate-500">Full Name</span>
                  <p className="font-medium text-slate-900 dark:text-slate-100">{user.name}</p>
                </div>
                {/* Account Status Field */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold tracking-widest text-slate-400 uppercase dark:text-slate-500">Account Status</span>
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500"></span>
                    <p className="font-medium text-slate-900 dark:text-slate-100">Active</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-100 bg-slate-50 px-8 py-6 dark:border-slate-800 dark:bg-slate-800/50">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                To update your personal information, please use the &quot;Edit Profile&quot; button at the top of the page. Some security
                settings may require administrative approval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
