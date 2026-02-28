import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password',
  description: 'Create a new password for your Crowdfast Designs account.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
