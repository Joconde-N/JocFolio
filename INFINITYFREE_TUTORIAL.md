# 📤 InfinityFree Step-by-Step Tutorial

## Step 1: Sign Up

1. Go to [https://infinityfree.net](https://infinityfree.net)
2. Click **"Sign Up"** (top right)
3. Enter your email
4. Create password
5. Click **"Create Account"**
6. Check email and verify

## Step 2: Create Website

1. After login, click **"Create Account"** button
2. Fill in:
   - **Username**: Choose any (e.g., `myproject123`)
   - **Domain**: Choose subdomain (e.g., `myproject.infinityfreeapp.com`)
   - **Password**: Create one
3. Click **"Create Account"**
4. Wait 2-5 minutes for setup

## Step 3: Upload PHP Files

### Method A: File Manager (Easiest)

1. In your account dashboard, click **"Control Panel"**
2. Scroll down to **"Files"** section
3. Click **"Online File Manager"**
4. You'll see folders: `htdocs`, `logs`, etc.
5. **IMPORTANT**: Click on `htdocs` folder (this is where files go!)
6. Click **"Upload"** button (top toolbar)
7. Select your PHP files
8. Wait for upload to complete

**File Structure:**
```
htdocs/
  ├── index.php          ← Your main file
  ├── login.php
  ├── config.php
  ├── css/
  ├── js/
  └── images/
```

### Method B: FTP (For Large Projects)

1. Download [FileZilla](https://filezilla-project.org)
2. In InfinityFree Control Panel, find:
   - **FTP Hostname**: (e.g., `ftpupload.net`)
   - **FTP Username**: (your account username)
   - **FTP Password**: (your account password)
3. Open FileZilla:
   - Host: `ftpupload.net`
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: `21`
4. Click **"Quickconnect"**
5. On right side, navigate to `htdocs` folder
6. Drag your PHP files from left to right

## Step 4: Setup Database (If Needed)

1. In Control Panel, go to **"MySQL Databases"**
2. Click **"Create Database"**
3. Note down:
   - Database name
   - Database username
   - Database password
   - MySQL hostname
4. Click **"phpMyAdmin"** to import your SQL file
5. Select your database
6. Click **"Import"** tab
7. Choose your `.sql` file
8. Click **"Go"**

## Step 5: Update Database Config

Edit your `config.php` file with InfinityFree details:

```php
<?php
// OLD (local)
$host = "localhost";
$username = "root";
$password = "";
$database = "mydb";

// NEW (InfinityFree)
$host = "sql123.infinityfree.com";  // From MySQL Databases page
$username = "if0_12345678";          // From MySQL Databases page
$password = "your_db_password";      // From MySQL Databases page
$database = "if0_12345678_mydb";     // From MySQL Databases page

$conn = mysqli_connect($host, $username, $password, $database);
?>
```

## Step 6: Test Your Site

1. Go to your URL: `https://myproject.infinityfreeapp.com`
2. Your PHP project should load!

## Common Issues & Fixes

### ❌ "Index of /" showing
**Fix**: Rename your main file to `index.php` (not `home.php` or `main.php`)

### ❌ Database connection error
**Fix**: 
- Check database credentials in `config.php`
- Use hostname from InfinityFree (not `localhost`)
- Make sure database is created

### ❌ Files not showing
**Fix**: 
- Make sure files are in `htdocs` folder (not root)
- Check file permissions (should be 644 for files, 755 for folders)

### ❌ Images not loading
**Fix**: 
- Use relative paths: `images/logo.png` (not `C:/xampp/...`)
- Check image file names (case-sensitive!)

## Quick Checklist

✅ Files uploaded to `htdocs` folder
✅ Main file named `index.php`
✅ Database created and imported
✅ `config.php` updated with InfinityFree credentials
✅ Test URL in browser

## Where to Find Your Live URL

After creating account, your URL is:
```
https://YOUR-USERNAME.infinityfreeapp.com
```

Example: `https://myproject123.infinityfreeapp.com`

## Video Tutorial (Alternative)

Search YouTube: "How to upload PHP website to InfinityFree"

---

## Alternative: Use 000webhost (Simpler)

1. Go to [https://000webhost.com](https://000webhost.com)
2. Sign up
3. Click **"Build Website"** → **"Upload Own Website"**
4. Use their **File Manager**:
   - Upload to `public_html` folder
   - Same as InfinityFree but simpler interface
5. Get URL: `https://yoursite.000webhostapp.com`

---

**Once uploaded, copy your live URL and add it to `config/site.js` in your portfolio!**