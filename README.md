# 🚀 Portfolio Template — Setup Guide

## Files Included
- `index.html` — Main HTML structure
- `style.css` — All styles and animations
- `script.js` — Cursor, scroll reveal, nav effects

---

## ✏️ How to Customize

### 1. Personal Info (index.html)
Replace these placeholders throughout the file:

| Placeholder | Replace With |
|-------------|-------------|
| `Your Name` | Your full name |
| `YN` (nav logo) | Your initials |
| `Your City` | Your location |
| `X years` | Your experience |
| `your@email.com` | Your email address |
| `Full Stack Developer` | Your job title |

### 2. Add Your Photo
In the `.avatar-placeholder` div (hero section), replace the inner content with:
```html
<img src="your-photo.jpg" alt="Your Name" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />
```

In the About section `.about-img-placeholder`, replace with:
```html
<img src="your-photo2.jpg" alt="About photo" style="width:100%;height:100%;object-fit:cover;border-radius:16px;" />
```

### 3. Stats (About section)
Replace `X+` in the stats section with real numbers:
- Projects Done
- Years Experience
- Happy Clients

### 4. Projects
For each `.project-card`, update:
- Project title
- Description text
- Tech stack tags
- Live Demo and GitHub links (`href="#"`)
- Background gradient in the `.project-img` div

To add a real screenshot:
```html
<div class="project-img">
  <img src="screenshot.png" alt="Project Name" style="width:100%;height:100%;object-fit:cover;" />
</div>
```

### 5. Skills
Edit the text inside each `.skill-card` to match your actual tech stack.

### 6. Experience / Timeline
Update each `.timeline-item` with your real work history:
- Date range
- Job title & company name
- Description of your role

### 7. Social Links (Contact section)
Update the `href="#"` links with your real profiles:
```html
<a href="https://github.com/yourusername" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
```

### 8. Nav Logo
Change `YN` to your own initials.

---

## 🎨 Changing Colors
Open `style.css` and edit the CSS variables at the top:
```css
:root {
  --accent: #c8f564;   /* Change this to your preferred accent color */
  --bg: #080808;       /* Main background */
  --text: #f0f0f0;     /* Main text color */
}
```

---

## 🌐 Deployment
1. Host on **GitHub Pages** (free): push to a repo → Settings → Pages → Deploy
2. Use **Netlify** (free): drag and drop the folder
3. Use **Vercel** (free): connect your GitHub repo

---

## 📝 Tips
- Keep descriptions concise and impact-focused
- Use real numbers in your stats (they build credibility)
- Add 3–5 strong projects rather than many weak ones
- Make sure all links work before sharing!

Good luck! 🎉
