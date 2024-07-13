// pages/api/route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

// Initialize Resend instance with your API key from environment variable
const resend = new Resend(process.env.RESEND_API);

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'POST') {
      const { name, email, message } = req.body;

      try {
         // Example email sending using Resend
         const emailResponse = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Hello from Resend!',
            html: `<p>Hello ${name},</p>
                   <p>Congrats on sending your <strong>first email</strong>!</p>
                   <p>Message: ${message}</p>`,
         });

         console.log('Email sent:', emailResponse);

         // Respond to client with success message or appropriate data
         res.status(200).json({
            message: 'Email sent successfully',
            emailResponse,
         });
      } catch (error) {
         console.error('Error sending email:', error);
         // Respond with error status and message
         res.status(500).json({ error: 'Failed to send email' });
      }
   } else {
      // Handle unsupported methods
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
   }
}
