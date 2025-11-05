# Faiznute Portfolio

Portfolio website untuk Muhamad Faiz Abdurrahman (Faiznute) - Graphic Designer & Video Editor.

## Tech Stack

- **Vue.js 3** - Progressive JavaScript Framework
- **Vue Router** - Official router for Vue.js
- **Vite** - Next generation frontend tooling
- **Flexbox** - Modern CSS layout

## Features

- ✅ Home page dengan profil, skills, dan featured projects
- ✅ About page dengan detail pendidikan dan pengalaman kerja
- ✅ Projects page dengan filter dan pagination
- ✅ Project detail page
- ✅ Project Management System (Login required)
- ✅ Responsive design dengan Flexbox
- ✅ LocalStorage untuk project management

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Deployment

### Vercel
Project sudah dikonfigurasi dengan `vercel.json` untuk menangani SPA routing. Deploy langsung ke Vercel dengan:
- Connect repository ke Vercel
- Build command: `npm run build`
- Output directory: `dist`

### Netlify
Jika menggunakan Netlify, buat file `netlify.toml` atau gunakan `public/_redirects` yang sudah tersedia.

### Server Configuration
Untuk server lain, pastikan semua routes di-redirect ke `index.html` untuk menangani Vue Router history mode.

## Project Management

Akses project management di `/login` dengan password: `faiznute`

Fitur:
- Tambah project baru
- Edit project yang ada
- Approve/Reject project
- Delete project
- Export projects ke JSON
- Compress images

## Project Structure

```
Portofolio-1/
├── src/                 # Vue.js source code
│   ├── components/      # Vue components (reusable)
│   │   ├── AppHeader.vue
│   │   └── AppFooter.vue
│   ├── views/           # Page components (routes)
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Projects.vue
│   │   ├── ProjectDetail.vue
│   │   └── Login.vue
│   ├── composables/     # Vue composables (reusable logic)
│   │   ├── useProjects.js
│   │   └── useImageCompression.js
│   ├── data/            # Data files
│   │   └── projects-data.js
│   ├── router/          # Vue Router configuration
│   │   └── index.js
│   ├── styles/          # CSS files
│   │   └── main.css
│   ├── App.vue          # Root component
│   └── main.js          # Application entry point
├── assets/              # Static assets (images, etc.)
│   └── images/
├── index.html           # HTML entry point (Vite template)
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── README.md
```

**Note:** Semua file HTML dan JavaScript lama sudah dihapus. Project sekarang 100% menggunakan Vue.js dengan struktur yang bersih dan modern.

## Browser Support

Modern browsers that support ES6+ and CSS Flexbox.

## License

© 2025 FaizNute. All rights reserved.

