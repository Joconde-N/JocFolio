import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message, honeypot } = await request.json();

    // Anti-spam honeypot check
    if (honeypot) {
      return Response.json({ error: 'Spam detected' }, { status: 400 });
    }

    // Validation
    if (!name || !email || !subject || !message) {
      return Response.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim().slice(0, 100),
      email: email.trim().slice(0, 100),
      subject: subject.trim().slice(0, 200),
      message: message.trim().slice(0, 2000)
    };

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['ngogajoconde@gmail.com'],
      replyTo: sanitizedData.email,
      subject: `Portfolio Contact: ${sanitizedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${sanitizedData.name}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${sanitizedData.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #eff6ff; border-radius: 8px; font-size: 14px; color: #1e40af;">
            <p><strong>Reply directly to this email to respond to ${sanitizedData.name}</strong></p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return Response.json({ 
      success: true, 
      message: 'Email sent successfully',
      id: data?.id 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}