# 🍜 Rekomendasi Template Restoran F&B - Landing Page Only

## 📋 Quick Answer

Untuk **Landing Page + Menu Showcase** (tanpa online ordering), berikut rekomendasi dari template library Anda:

### 🏆 BEST CHOICE: **NEXTRA** ⭐⭐⭐⭐⭐

**Mengapa Nextra?**
- ✅ Modern, Beautiful design built-in
- ✅ Next.js 13+ (super fast, SEO-ready)
- ✅ MDX support (content management)
- ✅ Mobile responsive (90% users di mobile)
- ✅ Dark mode support (trending)
- ✅ Searchable content
- ✅ Vercel deployment (instan)
- ✅ Minimal setup, maximum impact

**Teknologi:**
```
Next.js 13+ → TypeScript → Tailwind CSS → MDX
```

**Cocok untuk:**
- Landing page + menu showcase
- Restaurant branding
- Food business website
- Portfolio produk

**Tidak cocok untuk:**
- Online ordering (gunakan Bagisto untuk ini)
- Complex e-commerce
- Membership system

---

## 📊 Template Comparison (Dari Library Mu)

| Template | Use Case | Complexity | Setup Time | Best For |
|----------|----------|-----------|-----------|----------|
| **NEXTRA** ⭐ | Landing + Showcase | Easy | 1 hour | Restaurant Landing Page |
| Vercel Commerce | E-commerce | Medium | 2-3 hours | Full Store with Orders |
| Bagisto | Multi-vendor Shop | Hard | 4-6 hours | Restaurant + Ordering System |
| Filament | Admin Dashboard | Medium | 2-3 hours | Backend Management (tidak untuk frontend) |
| Walgtail | CMS | Hard | 3-4 hours | Kompleks content (overkill untuk resto) |

**Verdict:** Untuk landing page + menu showcase murni, **NEXTRA adalah pilihan paling efficient, modern, dan cepat.**

---

## 🎯 Implementasi Nextra untuk Restoran F&B

### Setup Langkah-Langkah

**Step 1: Clone Nextra**
```bash
cd F:\SC Repo\templates\landing-page\nextra
npm install
npm run dev
```

**Step 2: Struktur Folder**
```
nextra/
├── pages/
│   ├── index.mdx          ← Hero + Why Us
│   ├── menu.mdx           ← Menu showcase
│   ├── menu/
│   │   ├── signature.mdx
│   │   ├── special.mdx
│   │   ├── noodles.mdx
│   │   ├── sides.mdx
│   │   └── drinks.mdx
│   ├── about.mdx          ← Tentang restoran
│   ├── location.mdx       ← Lokasi & kontak
│   └── contact.mdx        ← Form kontak
├── public/
│   ├── images/
│   │   ├── menu/
│   │   ├── restaurant/
│   │   └── hero.jpg
├── components/
│   ├── MenuCard.tsx
│   ├── LocationMap.tsx
│   ├── OrderButton.tsx
│   └── Testimonial.tsx
└── theme.config.tsx       ← Branding & colors
```

**Step 3: Customize Theme**
```typescript
// theme.config.tsx
export default {
  logo: <span>🍜 Mie Ayam Mas Reza</span>,
  primary: '#D97706',  // Amber-600
  secondary: '#EA580C', // Orange-600
  darkMode: true,
  // ... more config
}
```

**Step 4: Template Pages**

**Menu Page dengan Filter:**
```mdx
# 🍜 Menu Kami

Pilih kategori menu favorit Anda:

import MenuFilter from '@/components/MenuFilter'
<MenuFilter />
```

**Testimonial Section:**
```mdx
## Kata Pelanggan Kami

> "Mie ayam paling enak yang pernah saya makan!"
> — Budi Sentosa, Pelanggan Setia

> "Saya pindah ke Singapore tapi tetap rindu mie ayam ini!"
> — Siti Nurhaliza, Singapore
```

**Step 5: Deploy**
```bash
# Push ke GitHub
git add .
git commit -m "Mie Ayam Landing Page"
git push

# Di Vercel dashboard
# 1. Import project
# 2. Deploy (otomatis)
# 3. Custom domain (optional)
```

---

## 💡 Fitur yang Bisa Di-Add Nanti (Phase 2)

Jika mau berkembang:

✅ **Phase 1 (Sekarang)** - Landing Page + Menu Showcase
- Static pages (tidak perlu database)
- Menu showcase dengan filter
- Testimoni pelanggan
- Location & contact info
- Beautiful design

✅ **Phase 2 (Minggu depan)** - Add Interactive Features
- WhatsApp integration (chat dari website)
- Google Maps embed
- Foto menu yang lebih bagus
- Customer reviews integration
- Newsletter signup

✅ **Phase 3 (Bulan depan)** - Add Ordering
- Kalau sudah mau accept online order
- Integrasikan dengan Bagisto atau OrderMark
- Payment gateway (Stripe, Doku, etc)
- Order notifications
- Delivery integration

---

## 🎨 Copywriting Tips untuk Restoran

Saya sudah buat sample HTML version dengan copywriting yang bagus. Lihat di: `resto-mie-ayam-landing.html`

### Modern + Menarik Style:

**❌ JANGAN:**
- "Kami menjual mie ayam"
- "Mie ayam enak"
- "Harga murah"

**✅ SEBAIKNYA:**
- "Mie Ayam Legendaris yang Bikin Ketagihan"
- "Sejak 1995, kami melayani setiap mangkuk dengan passion dan dedikasi"
- "Bahan premium, bumbu pilihan, resep turun temurun menjadi rahasia kelezatan kami"

### Pattern yang Terbukti Efektif:

1. **Emotional Hook** → "Mie Ayam yang Bikin Ketagihan"
2. **Heritage/Trust** → "Sejak 1995"
3. **Proof** → "28K+ pelanggan puas, 5⭐ rating"
4. **Key Differentiator** → "Resep rahasia turun temurun"
5. **Clear CTA** → "Pesan via WhatsApp"
6. **Social Proof** → Real testimonials dari customers

---

## 📱 Preview Apa yang Sudah Saya Buat

Saya sudah buatkan 2 file untuk Anda:

### 1. **resto-mie-ayam-landing.html** (OPEN DI BROWSER)
- Full working website yang bisa dibuka langsung di browser
- Tidak perlu install npm
- Tidak perlu setup apa-apa
- Langsung bisa dilihat hasilnya
- Menu interaktif dengan filter
- Responsive design (mobile-ready)

**Cara buka:**
```
Right-click: resto-mie-ayam-landing.html
Select: "Open with Browser"
```

### 2. **resto-mie-ayam-landing.jsx** (React Component)
- Next.js component version
- Untuk digunakan di Nextra atau Next.js app
- TypeScript ready

### 3. **RESTO_MIE_AYAM_SETUP.md** (Documentation)
- Setup guide lengkap
- Customization tips
- Deployment instructions

---

## 🎬 Next Steps (Sekarang)

**Immediate (Hari ini):**
1. ✅ Buka `resto-mie-ayam-landing.html` di browser
2. ✅ Review design & copywriting
3. ✅ Check mobile responsiveness

**Short-term (Minggu ini):**
1. Customize dengan data asli (nama resto, lokasi, nomor WA)
2. Setup Nextra project
3. Add menu items dengan harga actual
4. Deploy ke Vercel (free)

**Medium-term (Bulan ini):**
1. Add product photos (ambil sendiri atau pakai Unsplash)
2. Setup WhatsApp Business
3. Monitor Google Analytics
4. Get customer feedback

---

## 💰 Cost Breakdown

| Item | Cost | Notes |
|------|------|-------|
| Domain (optional) | Rp 150K/year | Minimal |
| Hosting | Free | Vercel (unlimited) |
| WhatsApp Business | Free | Built-in |
| SSL Certificate | Free | Included |
| **TOTAL** | **Free - Rp 150K/year** | **Super affordable** |

---

## ✨ Why Nextra is Perfect for Restaurant

1. **Fast Loading** - Critical untuk mobile users
2. **Beautiful Typography** - Food looks good with good fonts
3. **Dark Mode** - Trending, better at night
4. **Search Feature** - Find menu items quickly
5. **Mobile Responsive** - 90% dari restaurant customers di mobile
6. **SEO Friendly** - Show up di Google search
7. **Easy to Update** - Markdown-based, no coding needed
8. **Free Hosting** - Vercel provides unlimited bandwidth
9. **Modern Stack** - Next.js 13+ is industry standard
10. **Scalable** - Can add features later without rebuild

---

## 📞 Quick Reference

**Nextra Documentation:**
- https://nextra.site/docs

**Sample Deployed Nextra Sites:**
- https://nextjs.org/docs (Next.js docs - using Nextra-like)
- Multiple design frameworks

**Vercel Deployment:**
- https://vercel.com (Free tier available)

---

## 🎯 Rekomendasi Final

**GUNAKAN NEXTRA UNTUK:**
- ✅ Restaurant landing page
- ✅ Menu showcase
- ✅ Beautiful design with minimal effort
- ✅ Fast performance
- ✅ Easy maintenance
- ✅ Can upgrade to ordering later

**JANGAN GUNAKAN:**
- ❌ Bagisto (overkill untuk landing-only)
- ❌ Wordpress (slower, more complex)
- ❌ Custom HTML (hard to maintain)

**Timeline:**
- **Design Review:** 1 hour (lihat HTML preview)
- **Setup Nextra:** 1 hour
- **Customize:** 2-3 hours
- **Add Photos & Content:** 2-4 hours
- **Deploy:** 30 minutes
- **Total:** 1-2 hari kerja (maksimal)

---

## 🎉 You're Ready!

Semuanya sudah siap. Kamu tinggal:
1. Preview HTML version saya (lihat hasilnya)
2. Customize content (nama, harga, kontak)
3. Deploy (5 menit di Vercel)
4. Start getting customers!

**Pertanyaan?** Review `resto-mie-ayam-landing.html` dulu, nanti saya siap bantu customization!

---

**Created:** Feb 18, 2026  
**For:** Resto Mie Ayam Landing Page  
**Stack:** Next.js + Tailwind + Nextra  
**Status:** ✅ Ready to Deploy
