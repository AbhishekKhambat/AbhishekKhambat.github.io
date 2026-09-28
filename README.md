# Abhishek Khambat - Portfolio (React + Vite)

## Folder structure
```
portfolio/
├── index.html              page shell + fonts
├── package.json
├── vite.config.js
├── public/photo.jpg        your photo (replace with same name)
└── src/
    ├── main.jsx            app entry
    ├── App.jsx             puts all sections together
    ├── index.css           all styles, theme, animations
    ├── effects.js          scroll, typing, particles, glow effects
    ├── data/content.js     ALL your text, projects, skills, links (edit here)
    └── components/         Navbar, Hero, ApiConsole, Stats, Marquee,
                            Projects, Experience, Skills, Education,
                            Contact, Footer, WhatsAppButton, Icons
```

## Run
```
npm install
npm run dev        # http://localhost:5173
npm run build      # creates dist/
```

## Deploy on GitHub Pages
Push to a repo named `AbhishekKhambat.github.io` on branch `main`.
In Settings > Pages, set Source to **GitHub Actions**. The workflow in
`.github/workflows/deploy.yml` builds and publishes on every push.
