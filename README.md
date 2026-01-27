# Modern Portfolio Website

A professional, job-ready portfolio website built with Next.js, React, and JavaScript. Features a modern design with smooth animations, responsive layout, and a working contact form.

## 🚀 Features

- **Modern Design**: Clean, professional layout with subtle animations
- **Responsive**: Works perfectly on all devices
- **Fast & Accessible**: Optimized for performance and accessibility
- **Contact Form**: Working contact form with email integration
- **Dark/Light Mode**: Theme toggle with saved preferences
- **Project Filtering**: Filter projects by category
- **Smooth Scrolling**: Enhanced navigation experience
- **SEO Optimized**: Meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Frontend**: React 18, JavaScript
- **Styling**: CSS Modules with custom properties
- **Email**: Resend API for contact form
- **Deployment**: Vercel

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── api/contact/
│   │   └── route.js          # Contact form API endpoint
│   ├── layout.js             # Root layout
│   └── page.js               # Main page
├── components/
│   ├── Navigation.js         # Navigation with theme toggle
│   ├── Hero.js               # Hero section
│   ├── About.js              # About section
│   ├── Skills.js             # Skills section
│   ├── Projects.js           # Projects with filtering
│   ├── Contact.js            # Contact form
│   └── Footer.js             # Footer
├── config/
│   └── site.js               # Site configuration & data
├── styles/
│   └── globals.css           # Global styles
├── public/
│   ├── cv.pdf                # Your CV/Resume
│   └── projects/             # Project images
└── package.json
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Create `.env.local` file:

```bash
cp .env.example .env.local
```

Add your Resend API key:

```
RESEND_API_KEY=your_resend_api_key_here
```

### 3. Configure Your Information

Edit `config/site.js` to customize:
- Personal information
- Social links
- Skills
- Projects

### 4. Add Your Assets

- Replace `public/cv.pdf` with your actual CV
- Add project images to `public/projects/`

### 5. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📧 Contact Form Setup

### Option A: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
4. Verify your domain or use the default sender

### Option B: Alternative Email Services

The contact form API can be easily modified to use:
- EmailJS
- Nodemailer with SMTP
- SendGrid
- Mailgun

## 🚀 Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables:
   - `RESEND_API_KEY`: Your Resend API key
6. Deploy!

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables
vercel env add RESEND_API_KEY
```

### Environment Variables on Vercel

1. Go to your project dashboard
2. Navigate to Settings → Environment Variables
3. Add:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key
   - **Environment**: Production, Preview, Development

## 🎨 Customization

### Colors & Styling

Edit CSS custom properties in `styles/globals.css`:

```css
:root {
  --primary: #3b82f6;        /* Primary blue */
  --primary-dark: #2563eb;   /* Darker blue */
  --secondary: #64748b;      /* Gray */
  --accent: #f59e0b;         /* Amber */
  /* ... */
}
```

### Content

All content is centralized in `config/site.js`:

```javascript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  // ...
};

export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    tech: ["React", "Node.js"],
    category: "Web",
    // ...
  }
];
```

### Adding New Projects

1. Add project data to `config/site.js`
2. Add project image to `public/projects/`
3. Update categories in `Projects.js` if needed

## 🧪 Testing Contact Form

### Local Testing

1. Start development server
2. Fill out contact form
3. Check terminal for API responses
4. Verify email delivery

### Production Testing

1. Deploy to Vercel
2. Test contact form on live site
3. Check Vercel function logs if issues occur

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Focus indicators
- Alt text for images
- ARIA labels
- Keyboard navigation
- Color contrast compliance

## 🔧 Troubleshooting

### Contact Form Issues

1. **Email not sending**:
   - Check Resend API key
   - Verify environment variables
   - Check Vercel function logs

2. **Form validation errors**:
   - Check browser console
   - Verify all required fields
   - Test email format validation

### Build Issues

1. **Build fails**:
   - Check for syntax errors
   - Verify all imports
   - Run `npm run build` locally

2. **Styling issues**:
   - Check CSS syntax
   - Verify custom property names
   - Test in different browsers

## 📈 Performance Optimization

- Images are optimized with Next.js Image component
- CSS is minified in production
- JavaScript is code-split automatically
- Fonts are optimized with Next.js font optimization

## 🔒 Security Features

- Input sanitization
- Anti-spam honeypot
- Rate limiting (via Vercel)
- XSS protection
- CSRF protection

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

If you need help with setup or customization, please:
1. Check this README
2. Review the code comments
3. Open an issue on GitHub

---

**Built with ❤️ using Next.js and React**