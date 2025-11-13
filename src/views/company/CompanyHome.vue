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
          <h1 class="hero-title">{{ companyData?.title }}</h1>
          <p class="hero-subtitle">{{ getHeroDescription() }}</p>
          <div class="hero-info">
            <div class="info-item" v-for="(info, index) in heroInfo" :key="index">
              <i :class="info.icon"></i>
              <span>{{ info.text }}</span>
            </div>
          </div>
          <div class="hero-buttons">
            <router-link :to="`/website/${projectId}/contact`" class="btn-primary">
              <i class="fas fa-envelope"></i> Hubungi Kami
            </router-link>
            <router-link :to="`/website/${projectId}/services`" class="btn-secondary">
              <i class="fas fa-briefcase"></i> Layanan Kami
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Tentang Kami</h2>
          <p class="section-description">Menghadirkan pengalaman spiritual yang bermakna dengan layanan terpercaya dan profesional</p>
        </div>
        <div class="about-wrapper">
          <div class="about-card" v-for="(item, index) in aboutItems" :key="index">
            <div class="about-icon">
              <i :class="item.icon"></i>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section section section-alt">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Mengapa Memilih Kami?</h2>
          <p class="section-description">Keunggulan yang membuat perjalanan spiritual Anda lebih bermakna</p>
        </div>
        <div class="features-wrapper">
          <div class="feature-card" v-for="(feature, index) in features" :key="index">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section section">
      <div class="container">
        <div class="cta-content">
          <h2>Siap Memulai Perjalanan Spiritual Anda?</h2>
          <p>Mari bergabung dengan ribuan jamaah yang telah mempercayakan perjalanan mereka kepada kami. Hubungi kami hari ini untuk konsultasi gratis.</p>
          <router-link :to="`/website/${projectId}/contact`" class="btn-primary btn-large">
            <i class="fas fa-paper-plane"></i> Hubungi Kami Sekarang
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
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
    const projectId = computed(() => route.params.id)
    const defaultImage = 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1920&auto=format&fit=crop'
    
    const getHeroDescription = () => {
      const desc = props.companyData?.description || ''
      const firstLine = desc.split('\n')[0] || 'Selamat datang di Baitul Hikmah'
      return firstLine.length > 150 ? firstLine.substring(0, 150) + '...' : firstLine
    }
    
    const aboutItems = computed(() => {
      return [
        {
          icon: 'fas fa-hands-praying',
          title: 'Layanan Terpercaya',
          description: 'Pengalaman bertahun-tahun melayani jamaah dengan komitmen memberikan pelayanan terbaik'
        },
        {
          icon: 'fas fa-certificate',
          title: 'Berpengalaman',
          description: 'Tim profesional yang telah mengantarkan ribuan jamaah dengan sukses'
        },
        {
          icon: 'fas fa-shield-alt',
          title: 'Aman & Nyaman',
          description: 'Prioritas utama kami adalah keselamatan dan kenyamanan perjalanan Anda'
        },
        {
          icon: 'fas fa-headset',
          title: 'Dukungan 24/7',
          description: 'Tim support siap membantu Anda kapan saja selama perjalanan'
        }
      ]
    })
    
    const heroInfo = computed(() => {
      return [
        { icon: 'fas fa-plane', text: 'Mitra Perjalanan Terpercaya' },
        { icon: 'fas fa-users', text: '10.000+ Jamaah Bahagia' },
        { icon: 'fas fa-globe', text: 'Jangkauan Luas' }
      ]
    })
    
    const features = computed(() => {
      return [
        { icon: '✈️', title: 'Paket Terbaik', description: 'Paket perjalanan yang dipilih dengan cermat untuk pengalaman terbaik' },
        { icon: '🕌', title: 'Perjalanan Religi', description: 'Pengalaman perjalanan religi yang autentik dan bermakna' },
        { icon: '🏨', title: 'Hotel Berkualitas', description: 'Akomodasi yang nyaman dan strategis untuk kenyamanan Anda' },
        { icon: '👥', title: 'Pemandu Ahli', description: 'Pemandu yang berpengalaman, ramah, dan berpengetahuan luas' },
        { icon: '📋', title: 'Dokumen Lengkap', description: 'Bantuan lengkap dalam pengurusan visa dan dokumen perjalanan' },
        { icon: '🛡️', title: 'Keamanan Terjamin', description: 'Prioritas utama kami adalah keselamatan dan kenyamanan perjalanan Anda' }
      ]
    })
    
    return {
      projectId,
      optimizeImageUrl,
      defaultImage,
      getHeroDescription,
      aboutItems,
      heroInfo,
      features
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
  padding: 0 200px;
}

@media (max-width: 1400px) {
  .container {
    padding: 0 100px;
  }
}

@media (max-width: 1024px) {
  .container {
    padding: 0 40px;
  }
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
  background: var(--cp-bg-secondary, #f0fdfa);
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 70vh;
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
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--cp-gradient);
  opacity: 0.92;
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
  color: #fff;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 22px;
  margin-bottom: 48px;
  color: rgba(255, 255, 255, 0.95);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.hero-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 48px;
  margin-bottom: 48px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.95);
  font-size: 16px;
  font-weight: 500;
}

.info-item i {
  font-size: 20px;
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
  background: #fff;
  color: var(--cp-accent, #0d9488);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.9);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

.btn-large {
  padding: 18px 40px;
  font-size: 18px;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-title {
  font-size: 48px;
  font-weight: 700;
  color: var(--cp-text-primary, #134e4a);
  margin-bottom: 16px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.section-description {
  font-size: 18px;
  color: var(--cp-text-secondary, #64748b);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

/* About Section */
.about-section {
  background: var(--cp-bg-primary, #ffffff);
}

.about-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}

.about-card {
  flex: 1 1 260px;
  min-width: 260px;
  max-width: 300px;
  text-align: center;
  padding: 40px 30px;
  background: var(--cp-bg-primary, #ffffff);
  border-radius: 16px;
  border: 1px solid var(--cp-border, rgba(13, 148, 136, 0.15));
  transition: all 0.3s ease;
}

.about-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--cp-card-shadow, 0 4px 20px rgba(13, 148, 136, 0.08));
  border-color: var(--cp-accent, #0d9488);
}

.about-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cp-gradient);
  border-radius: 16px;
  color: #fff;
  font-size: 32px;
}

.about-card h3 {
  font-size: 22px;
  color: var(--cp-text-primary, #134e4a);
  margin-bottom: 12px;
  font-weight: 600;
}

.about-card p {
  font-size: 15px;
  color: var(--cp-text-secondary, #64748b);
  line-height: 1.7;
  margin: 0;
}

/* Features Section */
.features-section {
  background: var(--cp-bg-secondary, #f0fdfa);
}

.features-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}

.feature-card {
  flex: 1 1 280px;
  min-width: 280px;
  max-width: 350px;
  text-align: center;
  padding: 48px 32px;
  background: var(--cp-bg-primary, #ffffff);
  border-radius: 16px;
  border: 1px solid var(--cp-border, rgba(13, 148, 136, 0.15));
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--cp-card-shadow, 0 4px 20px rgba(13, 148, 136, 0.08));
  border-color: var(--cp-accent, #0d9488);
}

.feature-icon {
  font-size: 56px;
  margin-bottom: 24px;
  line-height: 1;
}

.feature-card h3 {
  font-size: 22px;
  color: var(--cp-text-primary, #134e4a);
  margin-bottom: 16px;
  font-weight: 600;
}

.feature-card p {
  font-size: 15px;
  color: var(--cp-text-secondary, #64748b);
  line-height: 1.7;
  margin: 0;
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
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.7;
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
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .hero-info {
    flex-direction: column;
    gap: 24px;
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

  .about-wrapper,
  .features-wrapper {
    flex-direction: column;
  }
  
  .about-card,
  .feature-card {
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
