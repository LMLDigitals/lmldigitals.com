import { NextResponse } from 'next/server';
import { Resend } from 'resend';

//Todo: Initialize Resend instance with your API key from environment variable
const resend = new Resend(process.env.RESEND_API);

export async function POST(request: any) {
   const { name, email, message, phone, region, reason, newsletter } =
      await request.json();

   try {
      //Todo: Example email sending using Resend
      const emailResponse = await resend.emails.send({
         from: 'onboarding@resend.dev',
         to: 'lmldevs@gmail.com',
         subject: `Customer Email from: ${name}!`,
         html: `<p>Name: ${name}</p><p>Email: ${email}</p>
                  <p>Phone: ${phone}</p>
                  <p>Region: ${region}</p>
                  <p>Reason: ${reason}</p>
                  <p>News Letter: ${newsletter}</p>
                <p>Message: ${message}</p>`,
      });

      return NextResponse.json('Email sent successfully.', { status: 200 });
   } catch (error) {
      console.error('Error sending email:', error);
      // Respond with error status and message
      return NextResponse.json('Email has not been sent.', { status: 400 });
   }
}
