# Portfolio Setup & Deployment Guide

## ✅ Your Portfolio is Ready!

**Email configured:** jocondengoga@gmail.com
**Name:** Ngoga Joconde

---

## 🚀 Run Your Portfolio Locally

```bash
npm run dev
```

Visit: http://localhost:3000

---

## 📝 Customization Steps

### 1. Add Your Profile Picture
- Add your photo as `public/profile.jpg`
- Open `components/About.js`
- Uncomment line 73 and remove the placeholder div

### 2. Add Project Images
- Add images to `public/projects/` folder
- Name them: `project1.jpg`, `project2.jpg`, `project3.jpg`
- Update `config/site.js` with actual project details

### 3. Update Your CV Link
- Upload your CV to Google Drive
- Get shareable link
- Update `cvLink` in `config/site.js`

### 4. Update Social Links
Edit `config/site.js`:
```javascript
social: {
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_USERNAME",
  email: "mailto:jocondengoga@gmail.com"
}
```

---

## 🌐 Deploy to Vercel (Get Public Link)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your portfolio repository
5. Add environment variable:
   - Name: `RESEND_API_KEY`
   - Value: `re_SQVc4Tah_KHCma56AhtFgZo1aJzjgnjXR`
6. Click "Deploy"

### Step 3: Custom Domain (NgogaJoconde.app)
1. Buy domain from [Namecheap](https://namecheap.com) or [GoDaddy](https://godaddy.com)
2. In Vercel dashboard → Settings → Domains
3. Add `ngogajoconde.app`
4. Follow DNS configuration instructions
5. Wait 24-48 hours for DNS propagation

**Your portfolio will be live at:** https://ngogajoconde.app

---

## 📧 Contact Form Setup

Your Resend API key is already configured!

**Test it:**
1. Run `npm run dev`
2. Fill contact form
3. Check jocondengoga@gmail.com for messages

---

## 🔧 Adding PHP Projects

**Yes, you can add PHP projects!** Here's how:

### Option 1: Host PHP Project Separately
1. Deploy PHP project on:
   - [InfinityFree](https://infinityfree.net) (Free)
   - [000webhost](https://000webhost.com) (Free)
   - [Heroku](https://heroku.com) (Paid)
   
2. Get live URL
3. Update `config/site.js`:
```javascript
{
  id: 2,
  title: "My PHP Project",
  description: "E-commerce platform built with PHP and MySQL",
  tech: ["PHP", "MySQL", "JavaScript"],
  liveUrl: "https://your-php-project.com",
  githubUrl: "https://github.com/ngogajoconde/php-project"
}
```

### Option 2: Show Demo Video/Screenshots
- Record demo video → Upload to YouTube
- Take screenshots → Add to portfolio
- Link to GitHub repo with setup instructions

### Recommended Free PHP Hosting:
- **InfinityFree** - Best for PHP + MySQL
- **000webhost** - Easy setup
- **Vercel** - Doesn't support PHP (Next.js only)

---

## 📱 Mobile Responsive

Your portfolio is fully responsive! Test on:
- Desktop
- Tablet
- Mobile

---

## 🎨 Color Customization

Edit `styles/globals.css`:
```css
:root {
  --primary: #2563eb;        /* Change main color */
  --primary-dark: #1e40af;   /* Change hover color */
}
```

---

## ✨ Features Included

✅ Clean, professional design
✅ Responsive navigation bar
✅ Hero section with your name
✅ About section (add your photo)
✅ Skills with icons and categories
✅ 3 project cards with hover effects
✅ Working contact form
✅ Footer with social links
✅ Smooth scrolling
✅ Mobile responsive

---

## 🆘 Troubleshooting

**Contact form not working?**
- Check `.env.local` has correct API key
- Verify email in `app/api/contact/route.js`

**Build errors?**
```bash
npm run build
```
Fix any errors shown

**Styling issues?**
- Clear browser cache
- Hard refresh: Ctrl + Shift + R

---

## 📞 Need Help?

Check:
1. This guide
2. Code comments
3. README.md

---

**Your portfolio is production-ready! 🎉**