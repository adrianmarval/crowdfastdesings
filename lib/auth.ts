import { betterAuth } from 'better-auth';
import { env } from 'process';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { sendEmail } from './email';

const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export const auth = betterAuth({
  user: {
    additionalFields: {
      role: {
        type: 'string',
        input: false,
      },
    },
  },

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    sendResetPassword: async ({ user, url, token }, request) => {
      await sendEmail({
        to: user.email,
        subject: 'Reset your password',
        text: `Click the link to reset your password: ${url}`,
        html: `<p>Click the link below to reset your password:</p><p><a href="${url}">Reset Password</a></p>`,
      });
    },
  },
  emailVerification: {
    sendOnSignUp: false,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      await sendEmail({
        to: user.email,
        subject: 'Verify your email address',
        text: `Click the link to verify your email: ${url}`,
        html: `<p>Click the link below to verify your email address:</p><p><a href="${url}">Verify Email</a></p>`,
      });
    },
  },
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
});

type Session = typeof auth.$Infer.Session;
