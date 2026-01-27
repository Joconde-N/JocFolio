# 🚀 How to Add Your PHP Project to Portfolio

## Step 1: Host Your PHP Project Online

### Option A: Free Hosting (Recommended for Testing)

**InfinityFree** (Best for PHP + MySQL)
1. Go to [infinityfree.net](https://infinityfree.net)
2. Sign up for free account
3. Create new account/website
4. Upload your PHP files via:
   - File Manager (in control panel)
   - Or FTP (FileZilla)
5. Import MySQL database (if needed)
6. Get your live URL (e.g., `yourproject.infinityfreeapp.com`)

**000webhost** (Alternative)
1. Go to [000webhost.com](https://000webhost.com)
2. Sign up
3. Create website
4. Upload files
5. Get URL

### Option B: Paid Hosting (For Production)
- **Hostinger** (~$2/month)
- **Namecheap** (~$3/month)
- **Bluehost** (~$3/month)

## Step 2: Push PHP Project to GitHub

```bash
cd your-php-project-folder
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ngogajoconde/your-project-name.git
git push -u origin main
```

## Step 3: Add Project to Portfolio

Open `config/site.js` and edit the projects array:

```javascript
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",  // ← Your project name
    description: "Full-featured online store with shopping cart, payment integration, and admin dashboard built with PHP and MySQL.",  // ← Describe your project
    image: "/projects/ecommerce.jpg",  // ← Add screenshot (optional)
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],  // ← Technologies used
    liveUrl: "https://yourproject.infinityfreeapp.com",  // ← Live URL from hosting
    githubUrl: "https://github.com/ngogajoconde/ecommerce-php"  // ← GitHub repo
  },
  {
    id: 2,
    title: "Project Two",
    description: "Full-stack application with user authentication and real-time data processing capabilities.",
    image: "/projects/project2.jpg",
    tech: ["React", "Node.js", "MySQL"],
    liveUrl: "https://project2.example.com",
    githubUrl: "https://github.com/ngogajoconde/project2"
  },
  {
    id: 3,
    title: "Project Three",
    description: "Interactive dashboard with data visualization and analytics for business intelligence.",
    image: "/projects/project3.jpg",
    tech: ["Python", "SQL", "Flask"],
    liveUrl: "https://project3.example.com",
    githubUrl: "https://github.com/ngogajoconde/project3"
  }
];
```

## Step 4: Add Project Screenshot (Optional)

1. Take screenshot of your PHP project
2. Save as `ecommerce.jpg` (or any name)
3. Put in `public/projects/` folder
4. Update `image: "/projects/ecommerce.jpg"` in config

**If no image:** The card will show a placeholder with project initials.

## Step 5: Save & Test

```bash
# Save config/site.js
# Refresh browser
npm run dev
```

Visit http://localhost:3000 and check your project card!

## Example: Real PHP Project

```javascript
{
  id: 1,
  title: "Student Management System",
  description: "Complete school management system with student records, attendance tracking, grade management, and parent portal. Built with PHP and MySQL.",
  image: "/projects/student-system.jpg",
  tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
  liveUrl: "https://student-mgmt.infinityfreeapp.com",
  githubUrl: "https://github.com/ngogajoconde/student-management"
}
```

## Quick Template

Copy this and fill in your details:

```javascript
{
  id: 1,
  title: "YOUR PROJECT NAME",
  description: "What does your project do? What problem does it solve? What features does it have?",
  image: "/projects/your-image.jpg",
  tech: ["PHP", "MySQL", "JavaScript"],  // Add all technologies
  liveUrl: "https://your-live-url.com",  // From hosting
  githubUrl: "https://github.com/ngogajoconde/your-repo"  // Your GitHub
}
```

## Tips

✅ **Description**: 1-2 sentences, focus on what it does
✅ **Tech**: List main technologies (PHP, MySQL, etc.)
✅ **Live URL**: Must be accessible online
✅ **GitHub**: Make repo public so visitors can see code

## Troubleshooting

**PHP project not working on hosting?**
- Check PHP version compatibility
- Verify database connection settings
- Check file permissions
- Review hosting error logs

**Can't push to GitHub?**
```bash
git remote -v  # Check if remote is set
git push -u origin main --force  # Force push if needed
```

---

**That's it! Your PHP project is now in your portfolio!** 🎉