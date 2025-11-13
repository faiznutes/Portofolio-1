<template>
  <div class="company-home">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <img :src="optimizeImageUrl(companyData?.image || defaultImage)" 
             :alt="companyData?.title" 
             loading="eager"
             class="hero-bg-image">
        <div class="hero-overlay"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Perjalanan Suci Bersama Barokah Journey</h1>
          <p class="hero-subtitle">Bimbingan Umroh & Haji dengan layanan terpercaya dan nyaman.</p>
          <div class="hero-buttons">
            <router-link :to="`/website/${projectId}/package`" class="btn-primary">
              <i class="fas fa-box"></i> Lihat Paket
            </router-link>
            <router-link :to="`/website/${projectId}/contact`" class="btn-secondary">
              <i class="fas fa-comments"></i> Konsultasi Gratis
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Keunggulan Section -->
    <section class="features-section section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Mengapa Memilih Kami?</h2>
        </div>
        <div class="features-wrapper">
          <div class="feature-card" v-for="(feature, index) in features" :key="index">
            <div class="feature-icon">
              <i :class="feature.icon"></i>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tentang Kami Section -->
    <section class="about-preview-section section section-alt">
      <div class="container">
        <div class="about-preview-wrapper">
          <div class="about-image">
            <img :src="optimizeImageUrl(companyData?.image || defaultImage, 600)" 
                 :alt="companyData?.title" 
                 loading="lazy">
          </div>
          <div class="about-content">
            <h2 class="section-title">Tentang Kami</h2>
            <p>{{ companyData?.longDescription || companyData?.description || 'Barokah Journey adalah biro perjalanan umroh dan haji yang menghadirkan pengalaman perjalanan suci yang bermakna.' }}</p>
            <router-link :to="`/website/${projectId}/about`" class="btn-primary">
              Pelajari Lebih Lanjut
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Paket Umroh Section -->
    <section class="packages-section section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Paket Umroh & Haji</h2>
          <p class="section-description">Pilih paket yang sesuai dengan kebutuhan perjalanan suci Anda</p>
        </div>
        <div class="packages-wrapper">
          <div class="package-card" v-for="(pkg, index) in packages" :key="index">
            <div class="package-header">
              <h3>{{ pkg.name }}</h3>
              <div class="package-price">{{ pkg.price }}</div>
            </div>
            <div class="package-features">
              <div class="package-feature" v-for="(feature, fIndex) in pkg.features" :key="fIndex">
                <i class="fas fa-check"></i>
                <span>{{ feature }}</span>
              </div>
            </div>
            <router-link :to="`/website/${projectId}/package`" class="btn-primary btn-full">
              Lihat Detail
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimoni Section -->
    <section class="testimonials-section section section-alt">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Apa Kata Jemaah Kami</h2>
        </div>
        <div class="testimonials-wrapper">
          <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-rating">
              <i class="fas fa-star" v-for="n in 5" :key="n"></i>
            </div>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <div class="testimonial-author">
              <div class="author-avatar">{{ testimonial.avatar }}</div>
              <div class="author-info">
                <strong>{{ testimonial.name }}</strong>
                <span>{{ testimonial.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Galeri Preview Section -->
    <section class="gallery-preview-section section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Galeri Perjalanan</h2>
          <p class="section-description">Momen-momen indah perjalanan suci bersama kami</p>
        </div>
        <div class="gallery-preview-wrapper">
          <div class="gallery-item" v-for="(item, index) in galleryPreview" :key="index" @click="goToGallery">
            <img :src="optimizeImageUrl(item.src, 400)" :alt="item.title" loading="lazy">
            <div class="gallery-overlay">
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
        <div class="gallery-cta">
          <router-link :to="`/website/${projectId}/gallery`" class="btn-primary">
            Lihat Semua Galeri
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section section">
      <div class="container">
        <div class="cta-content">
          <h2>Daftar Sekarang untuk Keberangkatan Terdekat</h2>
          <p>Jangan lewatkan kesempatan untuk melakukan perjalanan suci bersama Barokah Journey. Hubungi kami sekarang untuk informasi lebih lanjut.</p>
          <router-link :to="`/website/${projectId}/contact`" class="btn-primary btn-large">
            <i class="fas fa-paper-plane"></i> Daftar Sekarang
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { optimizeImageUrl } from '../../composables/useImageOptimizer'

export default {
  name: 'CompanyHome',
  props: {
    companyData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    const projectId = computed(() => route.params.id)
    const defaultImage = 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1920&auto=format&fit=crop'
    
    const features = [
      {
        icon: 'fas fa-user-graduate',
        title: 'Pembimbing Berpengalaman',
        description: 'Tim pembimbing yang berpengalaman dan berpengetahuan luas tentang ibadah umroh dan haji'
      },
      {
        icon: 'fas fa-hotel',
        title: 'Akomodasi Nyaman',
        description: 'Hotel berkualitas dengan lokasi strategis dekat Masjidil Haram dan Masjid Nabawi'
      },
      {
        icon: 'fas fa-calendar-alt',
        title: 'Jadwal Fleksibel',
        description: 'Berbagai pilihan jadwal keberangkatan yang dapat disesuaikan dengan kebutuhan Anda'
      },
      {
        icon: 'fas fa-dollar-sign',
        title: 'Harga Transparan',
        description: 'Harga yang jelas dan transparan tanpa biaya tersembunyi, sesuai dengan paket yang dipilih'
      }
    ]
    
    const packages = [
      {
        name: 'Umroh Regular',
        price: 'Mulai dari Rp 25.000.000',
        features: [
          'Hotel 3-4 bintang dekat Masjidil Haram',
          'Pembimbing berpengalaman',
          'Visa umroh',
          'Tiket pesawat pulang pergi',
          'Makan 3x sehari',
          'Transportasi selama di Saudi'
        ]
      },
      {
        name: 'Umroh Plus Turki',
        price: 'Mulai dari Rp 35.000.000',
        features: [
          'Semua fasilitas Umroh Regular',
          'Wisata ke Turki 3 hari',
          'Hotel bintang 4-5 di Turki',
          'Tour guide berbahasa Indonesia',
          'Makan halal selama di Turki',
          'Transportasi lengkap'
        ]
      },
      {
        name: 'Haji Khusus',
        price: 'Hubungi Kami',
        features: [
          'Paket haji lengkap',
          'Hotel premium dekat Masjidil Haram',
          'Pembimbing haji berpengalaman',
          'Visa haji resmi',
          'Makan 3x sehari',
          'Layanan VIP selama ibadah haji'
        ]
      }
    ]
    
    const testimonials = [
      {
        avatar: '👤',
        name: 'Ahmad Rizki',
        role: 'Jamaah Umroh 2024',
        text: 'Alhamdulillah perjalanan umroh bersama Barokah Journey sangat nyaman dan lancar. Pembimbingnya sangat membantu dan ramah.'
      },
      {
        avatar: '👤',
        name: 'Siti Nurhaliza',
        role: 'Jamaah Umroh Plus Turki',
        text: 'Pengalaman yang luar biasa! Tidak hanya umroh, wisata ke Turki juga sangat menyenangkan. Terima kasih Barokah Journey.'
      },
      {
        avatar: '👤',
        name: 'Budi Santoso',
        role: 'Jamaah Haji 2024',
        text: 'Layanan yang sangat profesional. Semua detail perjalanan diatur dengan baik. Sangat direkomendasikan untuk perjalanan suci.'
      }
    ]
    
    const galleryPreview = computed(() => {
      const gallery = props.companyData?.gallery || []
      return gallery.slice(0, 6)
    })
    
    const goToGallery = () => {
      router.push(`/website/${projectId.value}/gallery`)
    }
    
    return {
      projectId,
      optimizeImageUrl,
      defaultImage,
      features,
      packages,
      testimonials,
      galleryPreview,
      goToGallery
    }
  }
}
</script>

<style scoped>
.company-home {
  width: 100%;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
}

/* Section Base */
.section {
  padding: 100px 0;
}

.section-alt {
  background: var(--cp-bg-secondary, #faf9f6);
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(2px);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(10, 26, 47, 0.88) 0%, rgba(26, 42, 63, 0.88) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: center;
  color: #fff;
  padding: 80px 0;
}

.hero-title {
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 22px;
  margin-bottom: 48px;
  color: #ffffff;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
  font-weight: 500;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.btn-primary, .btn-secondary {
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, #f4d03f 0%, #d4af37 100%);
  color: #0a1a2f;
  box-shadow: 0 8px 24px rgba(212, 175, 55, 0.5), 0 0 0 2px rgba(255, 255, 255, 0.2);
  font-weight: 700;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(212, 175, 55, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  border: 2px solid #ffffff;
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: #ffffff;
}

.btn-large {
  padding: 18px 40px;
  font-size: 18px;
}

.btn-full {
  width: 100%;
  justify-content: center;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-title {
  font-size: 48px;
  font-weight: 700;
  color: var(--cp-text-primary, #0a1a2f);
  margin-bottom: 16px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.section-description {
  font-size: 18px;
  color: var(--cp-text-secondary, #334155);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Features Section */
.features-section {
  background: var(--cp-bg-primary, #ffffff);
}

.features-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}

.feature-card {
  flex: 1 1 250px;
  min-width: 250px;
  max-width: 300px;
  text-align: center;
  padding: 40px 30px;
  background: var(--cp-bg-primary, #ffffff);
  border-radius: 16px;
  border: 1px solid var(--cp-border, rgba(212, 175, 55, 0.2));
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--cp-card-shadow, 0 4px 20px rgba(10, 26, 47, 0.08));
  border-color: var(--cp-accent, #d4af37);
}

.feature-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
  border-radius: 16px;
  color: #0a1a2f;
  font-size: 32px;
}

.feature-card h3 {
  font-size: 22px;
  color: var(--cp-text-primary, #0a1a2f);
  margin-bottom: 16px;
  font-weight: 600;
}

.feature-card p {
  font-size: 15px;
  color: var(--cp-text-secondary, #334155);
  line-height: 1.7;
  margin: 0;
}

/* About Preview Section */
.about-preview-section {
  background: var(--cp-bg-secondary, #faf9f6);
}

.about-preview-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
  align-items: center;
}

.about-image {
  flex: 1 1 400px;
  min-width: 300px;
  max-width: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--cp-card-shadow, 0 4px 20px rgba(10, 26, 47, 0.08));
}

.about-image img {
  width: 100%;
  height: auto;
  display: block;
}

.about-content {
  flex: 1 1 400px;
  min-width: 300px;
}

.about-content p {
  font-size: 18px;
  color: var(--cp-text-secondary, #334155);
  line-height: 1.8;
  margin-bottom: 32px;
}

/* Packages Section */
.packages-section {
  background: var(--cp-bg-primary, #ffffff);
}

.packages-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}

.package-card {
  flex: 1 1 300px;
  min-width: 300px;
  max-width: 380px;
  padding: 40px 32px;
  background: var(--cp-bg-primary, #ffffff);
  border-radius: 16px;
  border: 2px solid var(--cp-border, rgba(212, 175, 55, 0.2));
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.package-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--cp-card-shadow, 0 4px 20px rgba(10, 26, 47, 0.08));
  border-color: var(--cp-accent, #d4af37);
}

.package-header {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 2px solid var(--cp-border, rgba(212, 175, 55, 0.2));
}

.package-header h3 {
  font-size: 24px;
  color: var(--cp-text-primary, #0a1a2f);
  margin-bottom: 12px;
  font-weight: 700;
}

.package-price {
  font-size: 20px;
  color: var(--cp-accent, #d4af37);
  font-weight: 600;
}

.package-features {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.package-feature {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--cp-text-secondary, #334155);
  font-size: 15px;
}

.package-feature i {
  color: var(--cp-accent, #d4af37);
  font-size: 16px;
}

/* Testimonials Section */
.testimonials-section {
  background: var(--cp-bg-secondary, #faf9f6);
}

.testimonials-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}

.testimonial-card {
  flex: 1 1 300px;
  min-width: 300px;
  max-width: 380px;
  padding: 32px;
  background: var(--cp-bg-primary, #ffffff);
  border-radius: 16px;
  border: 1px solid var(--cp-border, rgba(212, 175, 55, 0.2));
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--cp-card-shadow, 0 4px 20px rgba(10, 26, 47, 0.08));
}

.testimonial-rating {
  color: #d4af37;
  margin-bottom: 16px;
  font-size: 18px;
}

.testimonial-text {
  font-size: 16px;
  color: var(--cp-text-secondary, #334155);
  line-height: 1.7;
  margin-bottom: 24px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--cp-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-info strong {
  color: var(--cp-text-primary, #0a1a2f);
  font-size: 16px;
  margin-bottom: 4px;
}

.author-info span {
  color: var(--cp-text-secondary, #334155);
  font-size: 14px;
}

/* Gallery Preview Section */
.gallery-preview-section {
  background: var(--cp-bg-primary, #ffffff);
}

.gallery-preview-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 48px;
}

.gallery-item {
  flex: 1 1 300px;
  min-width: 300px;
  max-width: 380px;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--cp-card-shadow, 0 4px 20px rgba(10, 26, 47, 0.08));
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(10, 26, 47, 0.8), transparent);
  display: flex;
  align-items: flex-end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay span {
  color: #fff;
  font-weight: 600;
  font-size: 16px;
}

.gallery-cta {
  text-align: center;
}

/* CTA Section */
.cta-section {
  background: var(--cp-gradient);
  color: #fff;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 48px;
  margin-bottom: 24px;
  color: #fff;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.cta-content p {
  font-size: 18px;
  margin-bottom: 40px;
  color: #ffffff;
  line-height: 1.7;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 48px;
  }
  
  .section-title {
    font-size: 40px;
  }
  
  .cta-content h2 {
    font-size: 40px;
  }
  
  .section {
    padding: 80px 0;
  }
  
  .about-preview-wrapper {
    flex-direction: column;
  }
  
  .about-image,
  .about-content {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .section-title {
    font-size: 32px;
  }
  
  .section-description {
    font-size: 16px;
  }

  .cta-content h2 {
    font-size: 32px;
  }
  
  .cta-content p {
    font-size: 16px;
  }

  .features-wrapper,
  .packages-wrapper,
  .testimonials-wrapper {
    flex-direction: column;
  }
  
  .feature-card,
  .package-card,
  .testimonial-card {
    max-width: 100%;
  }
  
  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
  
  .section {
    padding: 60px 0;
  }
}
</style>
