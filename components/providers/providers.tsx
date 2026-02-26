'use client';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { ThemeProvider } from '@/components/theme-provider';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <PayPalScriptProvider
        options={{
          clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? '',
          intent: 'capture',
          currency: 'USD',
        }}
      >
        {children}
      </PayPalScriptProvider>
    </ThemeProvider>
  );
};
