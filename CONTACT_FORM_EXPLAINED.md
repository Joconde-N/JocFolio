# 📧 How the Contact Form Works

## Overview
When someone fills out your contact form, the message is sent directly to **ngogajoconde@gmail.com** via the Resend email service.

## Step-by-Step Process

### 1. User Fills Out Form
The visitor enters:
- **Full Name** - Their name
- **Email** - Their email address (this becomes the reply-to address)
- **Subject** - Message subject
- **Message** - Their message to you

### 2. Form Validation
Before sending, the form checks:
- All fields are filled
- Email format is valid (e.g., user@example.com)
- Anti-spam honeypot field is empty (hidden from users, catches bots)

### 3. Email is Sent
When they click "Send Message":
- Form data is sent to `/api/contact` (your Next.js API route)
- The API uses **Resend** service to send the email
- Email goes to: **ngogajoconde@gmail.com**
- Reply-to is set to: **visitor's email address**

### 4. You Receive Email
You get an email with:
```
From: Portfolio Contact <onboarding@resend.dev>
Reply-To: visitor@example.com
To: ngogajoconde@gmail.com
Subject: Portfolio Contact: [Their Subject]

Body:
Name: John Doe
Email: visitor@example.com
Subject: Job Opportunity

Message:
Hi, I'd like to discuss a project...
```

### 5. You Can Reply Directly
When you hit "Reply" in your email client, it automatically replies to the visitor's email address!

## Configuration

### Current Setup
- **Recipient**: ngogajoconde@gmail.com ✅
- **API Key**: Already configured in `.env.local` ✅
- **Service**: Resend (free tier: 100 emails/day)

### Files Involved
1. **components/Contact.js** - The form users see
2. **app/api/contact/route.js** - Handles sending emails
3. **.env.local** - Contains your Resend API key

## Testing

### Test Locally
1. Run `npm run dev`
2. Go to http://localhost:3000
3. Scroll to Contact section
4. Fill out form with your own email
5. Click "Send Message"
6. Check ngogajoconde@gmail.com inbox

### Test on Production (After Deployment)
1. Visit your live site
2. Fill out contact form
3. Check email

## Security Features

✅ **Input Validation** - Checks all fields before sending
✅ **Email Format Check** - Ensures valid email addresses
✅ **Anti-Spam Honeypot** - Hidden field catches bots
✅ **Input Sanitization** - Limits field lengths (prevents abuse)
✅ **Rate Limiting** - Vercel automatically limits requests

## Troubleshooting

**Not receiving emails?**
1. Check spam/junk folder
2. Verify API key in `.env.local`
3. Check Vercel function logs (if deployed)
4. Verify email in `app/api/contact/route.js` line 31

**Form shows error?**
- Check browser console for details
- Verify all fields are filled correctly
- Make sure email format is valid

## Alternative: Change Recipient Email

To change where emails are sent, edit `app/api/contact/route.js`:

```javascript
to: ['your-new-email@example.com'],  // Line 31
```

---

**Your contact form is fully functional and ready to receive messages!** 🎉