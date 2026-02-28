'use client';

import { useState, useRef } from 'react';
import Resizer from 'react-image-file-resizer';
import Image from 'next/image';
import { IoPersonOutline, IoCameraOutline, IoWarningOutline, IoInformationCircleOutline, IoAlertCircleOutline } from 'react-icons/io5';
import { toast } from 'sonner';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { authClient } from '@/lib/auth-client';
import { updateUserProfileImage } from '@/actions/user/update-profile-image';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const passwordSchema = z
  .object({
    currentPassword: z.string().min(1, 'Current password is required'),
    newPassword: z.string().min(8, 'New password must be at least 8 characters long'),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Passwords do not match',
    path: ['confirmNewPassword'],
  });

type PasswordFormValues = z.infer<typeof passwordSchema>;

interface ProfileViewProps {
  user: {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image?: string | null;
    createdAt?: Date | null;
    role?: string | null;
  };
}

export const ProfileView: React.FC<ProfileViewProps> = ({ user: initialUser }) => {
  const [user, setUser] = useState(initialUser);

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [newName, setNewName] = useState(initialUser.name);
  const [newImageFile, setNewImageFile] = useState<File | null>(null);
  const [newImagePreview, setNewImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  const [isWorking, setIsWorking] = useState(false);
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);

  const handleVerifyEmail = async () => {
    setIsWorking(true);
    try {
      const { error } = await authClient.sendVerificationEmail({
        email: user.email,
        callbackURL: window.location.origin + '/profile',
      });

      if (error) {
        toast.error(error.message || 'Error sending verification email');
      } else {
        toast.success('Verification email sent to ' + user.email);
        setVerificationEmailSent(true);
      }
    } catch (err: any) {
      toast.error('Unexpected error sending email');
    } finally {
      setIsWorking(false);
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      try {
        Resizer.imageFileResizer(
          file,
          500, // maxWidth
          500, // maxHeight
          'WEBP', // compressFormat
          80, // quality 80%
          0, // rotation
          (uri) => {
            setNewImageFile(uri as File);
            setNewImagePreview(URL.createObjectURL(uri as File));
            setIsEditingProfile(true);
          },
          'file', // outputType
        );
      } catch (err) {
        console.error('Error resizing image', err);
        setNewImageFile(file); // fallback to original
        setNewImagePreview(URL.createObjectURL(file));
        setIsEditingProfile(true);
      }
    }
  };

  const handleSaveProfile = async () => {
    setIsWorking(true);

    try {
      let imageUrl = user.image || undefined;

      // Handle Image Upload First
      if (newImageFile) {
        toast.loading('Uploading image...', { id: 'upload-img' });
        const formData = new FormData();
        formData.append('image', newImageFile);

        const uploadResult = await updateUserProfileImage(formData);

        toast.dismiss('upload-img');

        if (!uploadResult.ok) {
          toast.error(uploadResult.message || 'Error uploading image');
          setIsWorking(false);
          return;
        }

        imageUrl = uploadResult.url;
      }

      // Update user using authClient
      toast.loading('Updating profile...', { id: 'update-profile' });
      const { data, error } = await authClient.updateUser({
        name: newName,
        image: imageUrl,
      });

      toast.dismiss('update-profile');

      if (error) {
        toast.error(error.message || 'Error updating profile');
      } else {
        toast.success('Profile updated successfully');
        setUser({
          ...user,
          name: newName,
          image: imageUrl,
        });
        setIsEditingProfile(false);
        setNewImageFile(null);
        setNewImagePreview(null);
      }
    } catch (err: any) {
      toast.dismiss('upload-img');
      toast.dismiss('update-profile');
      toast.error('Unexpected error');
    } finally {
      setIsWorking(false);
    }
  };

  const handleCancelEditProfile = () => {
    setIsEditingProfile(false);
    setNewName(user.name);
    setNewImageFile(null);
    setNewImagePreview(null);
  };

  const onSubmitPassword = async (data: PasswordFormValues) => {
    setIsWorking(true);
    toast.loading('Changing password...', { id: 'change-pwd' });

    try {
      const { error } = await authClient.changePassword({
        newPassword: data.newPassword,
        currentPassword: data.currentPassword,
        revokeOtherSessions: true,
      });

      toast.dismiss('change-pwd');

      if (error) {
        if (error.status === 401 || error.code === 'INVALID_PASSWORD') {
          passwordForm.setError('currentPassword', { message: 'Incorrect current password' });
        } else {
          passwordForm.setError('root', { message: error.message || 'Error changing password' });
        }
      } else {
        toast.success('Password changed successfully');
        setIsChangingPassword(false);
        passwordForm.reset();
      }
    } catch (err: any) {
      toast.dismiss('change-pwd');
      passwordForm.setError('root', { message: 'Unexpected error' });
    } finally {
      setIsWorking(false);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        {/* Profile Header */}
        <div className="mb-8 rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <div className="group relative">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageSelect}
                  accept="image/png, image/jpeg, image/webp"
                  className="hidden"
                />
                <div className="flex size-28 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-md dark:border-slate-900 dark:bg-slate-800">
                  {newImagePreview || user.image ? (
                    <Image
                      src={newImagePreview || user.image!}
                      alt={user.name || 'User profile image'}
                      width={112}
                      height={112}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <IoPersonOutline className="text-5xl text-slate-400" />
                  )}
                </div>
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isWorking}
                  className="absolute right-1 bottom-1 flex size-8 items-center justify-center rounded-full border-2 border-white bg-[#135bec] text-white shadow-sm transition-transform hover:scale-105 disabled:opacity-50 dark:border-slate-900"
                >
                  <IoCameraOutline className="text-lg" />
                </Button>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  {isEditingProfile ? (
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="rounded border border-slate-300 px-2 py-1 text-2xl font-bold text-slate-900 focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    />
                  ) : (
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{user.name}</h2>
                  )}

                  <span className="rounded border border-slate-200 bg-slate-100 px-2 py-0.5 text-[10px] font-bold tracking-wider text-slate-600 uppercase dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
                    {user.role || 'User'}
                  </span>
                </div>
                <p className="mt-1 text-slate-500 dark:text-slate-400">
                  Member since{' '}
                  {user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Unknown'}
                </p>
                {isEditingProfile && (
                  <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                    <Button
                      onClick={handleSaveProfile}
                      disabled={isWorking}
                      className="rounded-lg bg-[#135bec] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#135bec]/90 disabled:opacity-50"
                    >
                      Save Changes
                    </Button>
                    <Button
                      onClick={handleCancelEditProfile}
                      disabled={isWorking}
                      className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
            </div>
            {!isEditingProfile && !isChangingPassword && (
              <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
                <Button
                  onClick={() => setIsEditingProfile(true)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 sm:w-auto dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  Edit Profile
                </Button>
                <Button
                  onClick={() => setIsChangingPassword(true)}
                  className="w-full rounded-lg bg-[#135bec] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#135bec]/90 sm:w-auto"
                >
                  Change Password
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Change Password Modal */}
        <Dialog
          open={isChangingPassword}
          onOpenChange={(open) => {
            if (!open) passwordForm.reset();
            setIsChangingPassword(open);
          }}
        >
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Change Password</DialogTitle>
              <DialogDescription>Enter your current password and a new password to update your access.</DialogDescription>
            </DialogHeader>
            <form onSubmit={passwordForm.handleSubmit(onSubmitPassword)} className="mt-4 flex flex-col gap-4">
              {passwordForm.formState.errors.root && (
                <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-400">
                  <p>{passwordForm.formState.errors.root.message}</p>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Current Password</label>
                <input
                  type="password"
                  {...passwordForm.register('currentPassword')}
                  className="rounded-lg border border-slate-300 px-4 py-2 focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
                {passwordForm.formState.errors.currentPassword && (
                  <p className="text-xs text-red-500">{passwordForm.formState.errors.currentPassword.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">New Password</label>
                <input
                  type="password"
                  {...passwordForm.register('newPassword')}
                  className="rounded-lg border border-slate-300 px-4 py-2 focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
                {passwordForm.formState.errors.newPassword && (
                  <p className="text-xs text-red-500">{passwordForm.formState.errors.newPassword.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Confirm New Password</label>
                <input
                  type="password"
                  {...passwordForm.register('confirmNewPassword')}
                  className="rounded-lg border border-slate-300 px-4 py-2 focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
                {passwordForm.formState.errors.confirmNewPassword && (
                  <p className="text-xs text-red-500">{passwordForm.formState.errors.confirmNewPassword.message}</p>
                )}
              </div>
              <DialogFooter className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Button
                  onClick={() => setIsChangingPassword(false)}
                  disabled={isWorking}
                  type="button"
                  className="w-full rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 disabled:opacity-50 sm:w-auto dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isWorking}
                  className="w-full rounded-lg bg-[#135bec] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#135bec]/90 disabled:opacity-50 sm:w-auto"
                >
                  Update Password
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Verification Warning Card */}
        {user.emailVerified === false && (
          <div
            className={`mb-8 flex flex-col items-start justify-between gap-4 rounded-xl border p-5 md:flex-row md:items-center ${verificationEmailSent ? 'border-emerald-200 bg-emerald-50 dark:border-emerald-900/30 dark:bg-emerald-900/10' : 'border-amber-200 bg-amber-50 dark:border-amber-900/30 dark:bg-amber-900/10'}`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`rounded-lg p-2 ${verificationEmailSent ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-500' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-500'}`}
              >
                {verificationEmailSent ? <IoInformationCircleOutline className="text-2xl" /> : <IoWarningOutline className="text-2xl" />}
              </div>
              <div>
                <p
                  className={`text-base leading-none font-bold ${verificationEmailSent ? 'text-emerald-900 dark:text-emerald-200' : 'text-amber-900 dark:text-amber-200'}`}
                >
                  {verificationEmailSent ? 'Link Sent' : 'Unverified Email'}
                </p>
                <p
                  className={`mt-1 text-sm ${verificationEmailSent ? 'text-emerald-800 dark:text-emerald-300/80' : 'text-amber-800 dark:text-amber-300/80'}`}
                >
                  {verificationEmailSent
                    ? 'We have sent a verification link to your email address. Please check your inbox.'
                    : 'Your email address is not yet verified. Please verify it to secure your account.'}
                </p>
              </div>
            </div>
            {!verificationEmailSent && (
              <Button
                onClick={handleVerifyEmail}
                disabled={isWorking}
                className="w-full rounded-lg bg-amber-600 px-6 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-amber-700 disabled:opacity-50 md:w-auto"
              >
                Verify Email
              </Button>
            )}
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
              To update your personal information, use the "Edit Profile" button above. Some settings may require administrative approval.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
