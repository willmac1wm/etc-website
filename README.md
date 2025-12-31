# Essential Trade Contractors Website

A professional contractor website with Decap CMS integration for easy content management.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Git
- A Netlify account
- A GitHub/GitLab account

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit `http://localhost:5173` to see the site.

---

## 📝 CMS Setup (Decap CMS + Netlify)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit with CMS"
git remote add origin https://github.com/YOUR_USERNAME/etc-website.git
git push -u origin main
```

### Step 2: Deploy to Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub repo
4. Build settings should auto-detect:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**

### Step 3: Enable Netlify Identity (Required for CMS login)

1. In Netlify dashboard, go to **Site settings** → **Identity**
2. Click **Enable Identity**
3. Under **Registration preferences**, select **Invite only**
4. Under **External providers**, optionally enable Google/GitHub login
5. Go to **Services** → **Git Gateway** → **Enable Git Gateway**

### Step 4: Invite Yourself

1. Go to **Identity** tab in Netlify dashboard
2. Click **Invite users**
3. Enter your email address
4. Check your email and set a password

### Step 5: Access the CMS

Visit `https://your-site.netlify.app/admin/`

Log in with your Netlify Identity credentials. You'll see the content manager!

---

## 📂 Project Structure

```
├── content/                  # CMS-managed content
│   ├── blog/                 # Blog posts (markdown)
│   ├── projects/             # Portfolio projects (markdown)
│   ├── services/             # Service pages (markdown)
│   ├── locations/            # Town/location pages (markdown)
│   └── settings/             # Site-wide settings (JSON)
│       ├── company.json      # Company info, phone, address
│       └── stats.json        # Safety stats and metrics
│
├── public/
│   ├── admin/                # Decap CMS admin interface
│   │   ├── index.html        # CMS entry point
│   │   └── config.yml        # CMS configuration
│   └── uploads/              # Uploaded images from CMS
│
├── src/
│   ├── components/           # React components
│   ├── services/
│   │   ├── contentService.ts # Reads CMS content
│   │   ├── mockData.ts       # Fallback/sample data
│   │   ├── serviceData.ts    # Service definitions
│   │   └── locationData.ts   # Town data
│   ├── types.ts              # TypeScript interfaces
│   └── App.tsx               # Main app component
│
├── netlify.toml              # Netlify configuration
├── vite.config.ts            # Vite bundler config
└── package.json
```

---

## ✏️ Editing Content

### Blog Posts
1. Go to `/admin/`
2. Click **Blog Posts** → **New Blog Post**
3. Fill in title, author, category, featured image
4. Write your content using the rich text editor
5. Click **Publish**

### Portfolio Projects
1. Go to `/admin/`
2. Click **Portfolio Projects** → **New Project**
3. Upload before/after images
4. Add challenge, solution, and testimonial
5. Click **Publish**

### Company Settings
1. Go to `/admin/`
2. Click **Site Settings** → **Company Info**
3. Update phone, email, address, CAGE/UEI codes
4. Click **Publish**

---

## 🎨 Customization

### Changing Colors

Edit `index.html` tailwind config:

```javascript
colors: {
  etc: {
    blue: '#0f172a',    // Primary dark color
    accent: '#eab308',  // Yellow accent
    gray: '#64748b',    // Text gray
  }
}
```

### Adding New Service Pages

1. In CMS, go to **Services** → **New Service**
2. Or create `/content/services/your-service.md` manually

### Adding New Locations

1. In CMS, go to **Service Locations** → **New Location**
2. Fill in town name, county, coordinates
3. Add local service offerings

---

## 🔧 Technical Notes

### Content Loading

The `contentService.ts` file:
- Reads markdown files from `/content/` at build time
- Falls back to `mockData.ts` if no CMS content exists
- Parses frontmatter and converts markdown to HTML

### Image Uploads

Images uploaded through CMS go to `/public/uploads/`. Reference them in content as `/uploads/filename.jpg`.

### Editorial Workflow

The CMS uses `editorial_workflow` mode:
- **Draft** → **In Review** → **Ready** → **Published**
- Changes create a pull request in your repo
- Merging the PR triggers a new deploy

---

## 📦 Deployment

Every push to `main` triggers a Netlify deploy. The site rebuilds with fresh content.

### Manual Deploy

```bash
npm run build
# Upload /dist folder to any static host
```

---

## 🆘 Troubleshooting

### CMS won't load
- Check that Identity and Git Gateway are enabled in Netlify
- Clear browser cache and try incognito mode

### Changes not appearing
- Wait 1-2 minutes for Netlify to rebuild
- Check Netlify deploy logs for errors

### Images not showing
- Ensure images are in `/public/uploads/`
- Check file paths start with `/uploads/`

---

## 📞 Support

For website issues, contact your developer.
For content questions, see the CMS documentation at [decapcms.org](https://decapcms.org/docs/).
