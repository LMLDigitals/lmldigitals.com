import { NextResponse } from 'next/server';
import { Resend } from 'resend';

//Todo: Initialize Resend instance with your API key from envi'ronment variable
const resend = new Resend('re_fx16pzTN_GwytJifKawN5YjAxZ8sxXXxh');

export async function POST(request: any) {
  const { name, email, message, phone, reason, newsletter } =
    await request.json();

  try {
    //Todo: Example email sending using Resend
    const emailResponse = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'sales@lmldigitals.com',
      subject: `Customer Email from: ${name}!`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p>
                  <p>Phone: ${phone}</p>
                  <p>Reason: ${reason}</p>
                  <p>News Letter: ${newsletter}</p>
                <p>Message: ${message}</p>`,
    });

    console.log(emailResponse);

    return NextResponse.json('Email sent successfully.', { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    // Respond with error status and message
    return NextResponse.json('Email has not been sent.', { status: 400 });
  }
}
