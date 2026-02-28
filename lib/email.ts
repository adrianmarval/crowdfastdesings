import { Resend } from 'resend';
import { env } from 'process';

export const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;

export async function sendEmail({ to, subject, text, html }: { to: string; subject: string; text: string; html?: string }) {
  if (!env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY is not set. Mocking email send:');
    console.log(`To: ${to}\nSubject: ${subject}\nText: ${text}`);
    return;
  }

  try {
    const data = await resend!.emails.send({
      from: 'contact@giftcardshop.app',
      to: [to],
      subject: `[Crowdfast Designs] - ${subject}`,
      text,
      html,
    });
    return data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
