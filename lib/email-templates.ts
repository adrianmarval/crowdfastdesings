export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

const BASE_HTML = (content: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crowdfast Designs</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9f9f9; color: #333333;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; padding: 40px 0;">
        <tr>
            <td align="center">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); max-width: 600px; width: 100%;">
                    <tr>
                        <td align="center" style="padding: 40px 0; background-color: #ffffff; border-bottom: 1px solid #eaeaea;">
                            <img src="${APP_URL}/logo.png" alt="Crowdfast Designs Logo" width="120" style="display: block; max-width: 100%; height: auto;">
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 40px 30px;">
                            ${content}
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px 30px; background-color: #f3f4f6; text-align: center; font-size: 14px; color: #6b7280;">
                            <p style="margin: 0;">&copy; ${new Date().getFullYear()} Crowdfast Designs. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

export const getResetPasswordEmailHtml = (url: string) =>
  BASE_HTML(`
    <h1 style="margin: 0 0 20px 0; font-size: 24px; color: #111827; text-align: center;">Reset Your Password</h1>
    <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.5; color: #4b5563;">You recently requested to reset your password for your Crowdfast Designs account. Click the button below to reset it. This link is only valid for the next 24 hours.</p>
    <div style="text-align: center; margin: 30px 0;">
        <a href="${url}" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">Reset Password</a>
    </div>
    <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #6b7280;">If you did not request a password reset, please ignore this email or reply to let us know.</p>
`);

export const getVerificationEmailHtml = (url: string) =>
  BASE_HTML(`
    <h1 style="margin: 0 0 20px 0; font-size: 24px; color: #111827; text-align: center;">Verify Your Email</h1>
    <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.5; color: #4b5563;">Thank you for registering an account with Crowdfast Designs! Please confirm your email address by clicking the button below.</p>
    <div style="text-align: center; margin: 30px 0;">
        <a href="${url}" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">Verify Email</a>
    </div>
    <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #6b7280;">If you did not create an account, no further action is required.</p>
`);
