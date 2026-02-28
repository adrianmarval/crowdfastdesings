import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recover Password',
  description: 'Regain access to your Crowdfast Designs account. We will send you a link to reset your password.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
