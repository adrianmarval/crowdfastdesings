'use client';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { authClient } from '@/lib/auth-client';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Terminal } from 'lucide-react';
import { IconLoader } from '@tabler/icons-react';
import { z } from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

interface SignupFormProps extends React.ComponentProps<'div'> {
  returnTo?: string;
}

export function SignupForm({ className, returnTo = '/shop', ...props }: SignupFormProps) {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    const parsed = signupSchema.safeParse({ name: fullname, email, password });
    if (!parsed.success) {
      setError(parsed.error.errors[0].message);
      return;
    }

    await authClient.signUp.email(
      {
        email,
        password,
        name: fullname,
      },
      {
        onRequest: () => setLoading(true),
        onSuccess: () => {
          setSuccess(true);
          router.push(returnTo);
        },
        onError: (ctx) => {
          setError(ctx.error.message);
          setLoading(false);
        },
      },
    );
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Get started with your new account</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert className="mb-4 border border-red-500" variant="destructive">
              <Terminal className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {success ? (
            <Alert className="border-green-200 bg-green-50 text-green-800">
              <AlertTitle>Account Created</AlertTitle>
              <AlertDescription>Please check your email to verify your account before logging in.</AlertDescription>
            </Alert>
          ) : (
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Full Name</Label>
                  <Input
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullname}
                    id="name"
                    type="text"
                    placeholder="Achour Meguenni"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                      Forgot your password?
                    </a>
                  </div>
                  <Input onChange={(e) => setPassword(e.target.value)} value={password} id="password" type="password" required />
                </div>
                <div className="flex flex-col gap-3">
                  <Button disabled={loading} type="submit" className="w-full">
                    {loading ? <IconLoader className="animate-spin" stroke={2} /> : 'Sign Up'}
                  </Button>
                  <Button variant="outline" className="w-full">
                    Sign Up with Google
                  </Button>
                </div>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?{' '}
                <Link href={`/auth/login?returnTo=${returnTo}`} className="underline underline-offset-4">
                  Login
                </Link>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
