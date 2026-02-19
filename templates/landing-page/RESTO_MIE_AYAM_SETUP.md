# 🍜 Mie Ayam Mas Reza - Landing Page Restaurant

Website landing page modern dan menarik untuk restoran mie ayam dengan menu showcase. Build menggunakan **Next.js 13+** dengan Tailwind CSS.

## ✨ Fitur

✅ **Landing Page Menarik**
- Hero section dengan copywriting yang powerful dan modern
- Stats section (28K+ pelanggan, 29 tahun pengalaman, 5⭐ rating)
- Why Us section (3 keunggulan utama)

✅ **Menu Showcase**
- Grid menu interaktif dengan kategori filter
- 12 menu item dengan deskripsi detail, harga, dan badge (Bestseller, Favorit, dll)
- Kategori: Signature, Special Edition, Noodles, Lauk Pauk, Minuman
- Responsive design (mobile-first)

✅ **Location & Contact**
- Informasi lokasi lengkap
- Jam operasional (buka setiap hari)
- Tombol WhatsApp dan Telepon terintegrasi
- Google Maps integration ready

✅ **Social Proof**
- Testimonial section dengan 3 review pelanggan
- 5 bintang rating
- Pelanggan terverifikasi (loyal customer, Singapore expat, food blogger)

✅ **Modern Design**
- Gradient background (amber-to-orange theme)
- Smooth animations dan hover effects
- Mobile responsive (fully)
- Accessibility optimized
- Loading fast dengan Next.js optimization

## 🎨 Design Highlights

### Color Palette
- **Primary:** Amber-600, Orange-600
- **Background:** Gradient amber-50 to orange-50
- **Accent:** White, Gray shades

### Typography
- **Headlines:** Bold, clear, modern
- **Body:** Readable, comfortable line-height
- **Copywriting Style:** Friendly, conversational, persuasive

## 📋 Menu Items (16 Total)

### Signature (3 items)
- Mie Ayam Spesial Original (Bestseller) - Rp 28.000
- Mie Ayam Bombay (Favorit) - Rp 32.000
- Mie Ayam Level Maksimal (Paling Pedas) - Rp 30.000

### Special Edition (3 items)
- Mie Ayam Telur Ceplok - Rp 31.000
- Mie Ayam Extra Ayam - Rp 38.000
- Mie Ayam Pedas Manis Korea - Rp 34.000

### Noodles Lainnya (2 items)
- Kwetiau Ayam - Rp 30.000
- Bihun Goreng Ayam - Rp 27.000

### Lauk Pauk (2 items)
- Bakso Ayam Homemade - Rp 18.000
- Pangsit Goreng (6 pcs) - Rp 16.000

### Minuman (2 items)
- Es Teh Manis Original - Rp 8.000
- Jus Jeruk Segar Premium - Rp 15.000

## 🚀 Quick Start

### Option 1: Gunakan Nextra Template (Recommended)

```bash
# 1. Navigate ke Nextra
cd F:\SC Repo\templates\landing-page\nextra

# 2. Install dependencies
npm install

# 3. Copy komponen ke pages folder
# (atau gunakan sebagai reference untuk styling)

# 4. Run development server
npm run dev

# 5. Open http://localhost:3000
```

### Option 2: Setup Fresh Next.js Project

```bash
# 1. Create new Next.js app
npx create-next-app@latest resto-mie-ayam --typescript --tailwind

# 2. Navigate ke project
cd resto-mie-ayam

# 3. Ganti content pages/index.tsx dengan komponen ini

# 4. Install dependencies (jika belum)
npm install

# 5. Run development
npm run dev
```

### Option 3: Gunakan Vercel (Fastest Deploy)

```bash
1. Push to GitHub
2. Import project ke Vercel
3. Deploy dalam 30 detik
4. Custom domain integration ready
```

## 🛠️ Customization Guide

### 1. **Update Menu Items**
Edit `menuItems` array di halaman utama:
```javascript
const menuItems = [
  {
    id: 1,
    category: 'signature',
    name: 'Menu Name',
    description: 'Menu Description',
    price: 'Rp XX.000',
    image: '🍜', // Emoji atau image URL
    badge: 'Badge Name'
  },
  // ... more items
]
```

### 2. **Update Lokasi & Kontak**
Find the "Kunjungi Kami" section:
- Ganti alamat dengan lokasi asli
- Update nomor WhatsApp/Telepon
- Update jam operasional

### 3. **Update Testimonial**
Ubah quotes dari pelanggan di section "Testimonial":
- Nama pelanggan
- Review text
- Lokasi/asal (optional)

### 4. **Update Warna Theme**
Tailwind CSS classes yang digunakan:
- `amber-50`, `amber-100`, `amber-600` - Primary colors
- `orange-50`, `orange-600` - Secondary colors
- Untuk dark mode, tambahkan `dark:` prefix

### 5. **Update Hero Section**
Ganti text di hero section dengan copywriting Anda:
- Main headline
- Sub-description
- Button text

## 📱 Responsive Breakpoints

- **Mobile:** < 640px (full-width, stacked layout)
- **Tablet:** 640px - 1024px (2-column grid)
- **Desktop:** > 1024px (3-column grid, full features)

## 🔗 Integration Points

### WhatsApp Integration
```html
<a href="https://wa.me/6281234567890?text=Saya%20ingin%20pesan...">
  WhatsApp Pesan
</a>
```

### Google Maps Integration
```html
<a href="https://maps.google.com/?q=Jl.+Mie+Ayam+Raya+No.+123">
  Buka di Maps
</a>
```

### Social Media Links
Update footer section dengan actual social media URLs:
- Facebook
- Instagram
- TikTok

## 📊 Performance Metrics Target

- ✅ Lighthouse Score: 90+
- ✅ Page Load: < 2s
- ✅ Mobile Friendly: 100%
- ✅ SEO Optimized: All green

## 🎯 Conversion Optimization

1. **Multiple CTA Buttons** - WhatsApp & Call buttons di berbagai section
2. **Social Proof** - Testimonials dengan 5⭐ rating
3. **FOMO Elements** - "Bestseller", "Favorit" badges
4. **Clear Value Proposition** - Why Us section yang compelling
5. **Mobile-First Design** - 90% users akses dari mobile
6. **Fast Load Time** - Image optimization, minimal JS
7. **Trust Signals** - "28K+ pelanggan", "29 tahun pengalaman"

## 🎬 Next Steps

### Immediately Ready
1. Customize menu items dengan harga actual
2. Update lokasi & jam operasional
3. Setup WhatsApp Business Account
4. Add testimonial dari actual customers
5. Deploy ke Vercel (5 minutes)

### Phase 2 (Optional)
1. Add real images (product photography)
2. Integrate Booksy/Traveloka untuk preorder
3. Add Google Analytics tracking
4. Setup email marketing (Mailchimp)
5. Implementasi WhatsApp API untuk instant notifications

### Phase 3 (Advanced)
1. Add online ordering system (Ordermark, Eazy Integration)
2. Terintegrasi dengan delivery apps (Gojek, Grab)
3. Loyalty program system
4. Customer reviews integration
5. Inventory management dashboard

## 💡 Copywriting Tips (Modern Style)

✨ **Hero Section**
- Jangan boring: "Mie Ayam Terbaik" → "Mie Ayam Legendaris yang Bikin Ketagihan"
- Emotional connection: "Sejak 1995" → builds trust & heritage

✨ **Description**
- Benefit-driven: "Bahan premium" → "Daging ayam pilihan dari supplier terpercaya"
- Storytelling: "Resep turun temurun" → makes it feel special & authentic

✨ **Call-to-Action**
- Urgent: "Pesan Sekarang" (better than "Order")
- Benefit: "Raih Kelezatan" atau "Rasakan Perbedaannya"

✨ **Social Proof**
- Specific numbers: "28K+ pelanggan puas" (credible)
- Emotional language in testimonials: "bikin ketagihan", "paling enak"

## 📈 SEO Optimization

Update `pages/_document.tsx` atau `_app.tsx`:
```html
<title>Mie Ayam Mas Reza | Mie Ayam Terbaik di Kota</title>
<meta name="description" content="Mie Ayam legendaris sejak 1995 dengan bahan premium dan resep rahasia. Pesan sekarang dan rasakan perbedaannya!">
<meta name="keywords" content="mie ayam, mie ayam terbaik, makan mie ayam, restoran mie ayam">
```

## 🎓 Learning Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

## 📞 Support & Troubleshooting

**Issue:** Styles tidak load proper
**Solution:** Ensure Tailwind CSS configured di `tailwind.config.js`

**Issue:** Images tidak appear
**Solution:** Use emoji (seperti di template) atau host images di CDN (Cloudinary, Imgbb)

**Issue:** Slow on mobile
**Solution:** Minimize JS, lazy load images, use `next/image` component

## 🎉 Ready to Deploy?

### Vercel Deployment (Recommended)
```bash
1. npm i -g vercel
2. vercel
3. Follow CLI prompts
4. Custom domain: Add to Vercel project settings
```

### Alternative: Netlify
```bash
1. Build: npm run build
2. Push to GitHub
3. Connect to Netlify
4. Auto-deploy on push
```

### Stop: Remember to Update!
- [ ] Menu prices (actual harga)
- [ ] Contact numbers (WhatsApp, Telepon)
- [ ] Location address & hours
- [ ] Remove placeholder testimonials
- [ ] Add real business photos
- [ ] Setup Google Analytics
- [ ] Add meta tags for SEO
- [ ] Setup SSL certificate

---

**Built with ❤️ for Mie Ayam Lovers**

Version: 1.0
Last Updated: Feb 2026
