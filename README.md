# ❤️ Happy Birthday Divya — From Aditya

A beautiful, romantic single-page birthday website built with **Bootstrap 5**.

## ✨ Features

- Bootstrap 5 responsive grid & components
- Elegant romantic design (pinks, reds & gold)
- Floating animated hearts
- Typewriter love letter
- Photo gallery placeholders (ready for your pictures)
- Flower gallery with romantic captions
- Interactive “Send a Heart” counter
- Fully responsive (phone + desktop)
- Smooth scroll animations

## 🚀 Host on GitHub Pages (Free)

1. Create a new **public** repository on GitHub
2. Upload all files from this folder
3. Go to **Settings → Pages**
4. Source: Deploy from a branch → `main` / root → Save
5. Site will be live at:  
   `https://YOUR-USERNAME.github.io/REPO-NAME/`

## 📸 Adding Your Personal Photos

1. Put photos in the `images/` folder
2. Open `index.html` and find the gallery section
3. Replace a placeholder card like this:

```html
<!-- Before (placeholder) -->
<div class="col-md-6 col-lg-4">
  <div class="card gallery-card h-100 border-0 shadow-sm placeholder-card" ...>
    ...
  </div>
</div>

<!-- After (your photo) -->
<div class="col-md-6 col-lg-4">
  <div class="card gallery-card h-100 border-0 shadow-sm overflow-hidden">
    <img src="images/us1.jpg" class="card-img-top" alt="Our First Date"
         style="height:220px;object-fit:cover;">
    <div class="card-body">
      <h5 class="card-title">Our First Date</h5>
    </div>
  </div>
</div>
```

## ✏️ Customize the Love Letter

Edit the `message` variable inside `js/script.js`.

---

Made with ❤️ by Aditya for Divya  
September 29
