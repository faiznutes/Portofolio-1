<template>
  <div class="company-home">
    <!-- Hero Section dengan Background Visual -->
    <section class="hero-section">
      <div class="hero-background">
        <img :src="optimizeImageUrl(companyData?.image || defaultImage)" 
             :alt="companyData?.title" 
             loading="eager"
             class="hero-bg-image">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="container">
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

    <!-- Penjelasan Singkat -->
    <section class="intro-section section">
      <div class="container">
        <div class="intro-content">
          <h2 class="section-title">Tentang Kami</h2>
          <div class="intro-grid">
            <div class="intro-text">
              <h3>Apa yang Kami Tawarkan?</h3>
              <p>{{ getOfferDescription() }}</p>
            </div>
            <div class="intro-text">
              <h3>Siapa Target Kami?</h3>
              <p>{{ getTargetDescription() }}</p>
            </div>
            <div class="intro-text">
              <h3>Bagaimana Kami Membantu?</h3>
              <p>{{ getHelpDescription() }}</p>
            </div>
            <div class="intro-text">
              <h3>Dimana Jangkauan Kami?</h3>
              <p>{{ getLocationDescription() }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fitur Unggulan -->
    <section class="features-section section section-alt">
      <div class="container">
        <h2 class="section-title">Mengapa Memilih Kami?</h2>
        <div class="features-grid">
          <div class="feature-card card" v-for="(feature, index) in features" :key="index">
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
          <h2>Siap Memulai?</h2>
          <p>Mari bekerja sama untuk mencapai tujuan Anda. Hubungi kami hari ini dan temukan bagaimana kami dapat membantu Anda.</p>
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
    const defaultImage = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&auto=format&fit=crop'
    
    const getHeroDescription = () => {
      const desc = props.companyData?.description || ''
      const firstLine = desc.split('\n')[0] || 'Selamat datang di perusahaan kami'
      return firstLine.length > 150 ? firstLine.substring(0, 150) + '...' : firstLine
    }
    
    const getOfferDescription = () => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return 'Kami menyediakan layanan makanan dan minuman berkualitas tinggi, mulai dari fine dining hingga catering untuk acara besar. Setiap hidangan dibuat dengan bahan-bahan segar dan resep yang telah teruji.'
      } else if (category === 'umroh' || category === 'travel') {
        return 'Kami menawarkan paket perjalanan lengkap untuk umroh, haji, dan wisata religi. Dengan pengalaman bertahun-tahun, kami memastikan perjalanan spiritual Anda berjalan lancar dan bermakna.'
      } else if (category === 'it') {
        return 'Kami menyediakan solusi teknologi inovatif untuk transformasi digital bisnis Anda. Dari pengembangan aplikasi custom hingga cloud computing, kami menghadirkan teknologi masa depan untuk bisnis Anda hari ini.'
      }
      return 'Kami menyediakan solusi profesional yang dirancang khusus untuk membantu bisnis Anda tumbuh dan berkembang. Dari konsultasi strategis hingga implementasi teknis, kami siap mendukung kesuksesan Anda.'
    }
    
    const getTargetDescription = () => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return 'Kami melayani individu, keluarga, klien korporat, dan penyelenggara acara yang mencari pengalaman kuliner istimewa. Layanan kami cocok untuk mereka yang menghargai kualitas, rasa, dan pelayanan profesional.'
      } else if (category === 'umroh' || category === 'travel') {
        return 'Kami melayani individu, keluarga, dan kelompok yang ingin melakukan perjalanan spiritual atau wisata. Layanan kami dirancang untuk mereka yang merencanakan umroh, haji, atau perjalanan wisata yang membutuhkan bimbingan profesional.'
      } else if (category === 'it') {
        return 'Kami melayani bisnis dari startup hingga enterprise yang ingin mengoptimalkan operasional melalui teknologi. Layanan kami dirancang untuk perusahaan yang ingin beradaptasi dengan era digital dan memanfaatkan teknologi untuk pertumbuhan bisnis.'
      }
      return 'Kami melayani bisnis dari berbagai ukuran yang ingin berkembang, meningkatkan efisiensi, dan mencapai tujuan mereka. Layanan kami cocok untuk perusahaan yang menghargai profesionalisme, inovasi, dan hasil yang terukur.'
    }
    
    const getHelpDescription = () => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return 'Kami membantu dengan menyediakan menu berkualitas, perencanaan acara yang detail, staf profesional, dan layanan lengkap dari persiapan hingga pembersihan. Tim kami akan memastikan acara Anda berjalan sempurna.'
      } else if (category === 'umroh' || category === 'travel') {
        return 'Kami membantu dengan mengurus visa, tiket pesawat, akomodasi hotel, pemandu yang berpengalaman, dan dukungan 24/7 selama perjalanan. Kami memastikan semua detail terorganisir dengan baik.'
      } else if (category === 'it') {
        return 'Kami membantu dengan pengembangan aplikasi custom, migrasi ke cloud, optimasi infrastruktur IT, dan dukungan teknis 24/7. Tim developer dan engineer kami akan bekerja sama dengan Anda untuk mengimplementasikan solusi teknologi yang tepat.'
      }
      return 'Kami membantu dengan memberikan konsultasi strategis, solusi yang disesuaikan, dukungan teknis, dan pendampingan berkelanjutan. Tim ahli kami akan bekerja sama dengan Anda untuk mencapai tujuan bisnis.'
    }
    
    const getLocationDescription = () => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return 'Kami melayani berbagai lokasi dengan beberapa cabang restoran dan layanan delivery yang mencakup area perkotaan. Kami juga menyediakan layanan catering untuk acara di berbagai kota besar.'
      } else if (category === 'umroh' || category === 'travel') {
        return 'Kami melayani klien dari seluruh Indonesia dengan kantor pusat di Jakarta. Kami juga memiliki jaringan mitra di berbagai kota untuk memudahkan akses informasi dan pendaftaran.'
      } else if (category === 'it') {
        return 'Kami melayani klien secara global dengan kantor pusat di Jakarta. Dengan teknologi cloud dan remote support, kami dapat memberikan layanan IT untuk klien di seluruh dunia, 24 jam sehari, 7 hari seminggu.'
      }
      return 'Kami melayani klien secara nasional dengan kantor pusat di Jakarta. Kami juga menyediakan layanan konsultasi online untuk klien di seluruh Indonesia dan luar negeri.'
    }
    
    const heroInfo = computed(() => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return [
          { icon: 'fas fa-users', text: 'Melayani Ribuan Pelanggan' },
          { icon: 'fas fa-map-marker-alt', text: 'Beberapa Lokasi' },
          { icon: 'fas fa-star', text: 'Rating 5 Bintang' }
        ]
      } else if (category === 'umroh' || category === 'travel') {
        return [
          { icon: 'fas fa-plane', text: 'Mitra Perjalanan Terpercaya' },
          { icon: 'fas fa-users', text: '10.000+ Jamaah Bahagia' },
          { icon: 'fas fa-globe', text: 'Jangkauan Luas' }
        ]
      } else if (category === 'it') {
        return [
          { icon: 'fas fa-server', text: 'Infrastruktur Modern' },
          { icon: 'fas fa-code', text: 'Pengembangan Custom' },
          { icon: 'fas fa-shield-alt', text: 'Keamanan Terjamin' }
        ]
      }
      return [
        { icon: 'fas fa-briefcase', text: 'Layanan Profesional' },
        { icon: 'fas fa-clock', text: 'Dukungan 24/7' },
        { icon: 'fas fa-trophy', text: 'Berprestasi' }
      ]
    })
    
    const features = computed(() => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return [
          { icon: '🍽️', title: 'Bahan Segar', description: 'Kami hanya menggunakan bahan-bahan terbaik dan terbaru untuk setiap hidangan' },
          { icon: '👨‍🍳', title: 'Chef Berpengalaman', description: 'Tim chef kami memiliki pengalaman bertahun-tahun dalam menciptakan hidangan istimewa' },
          { icon: '🚚', title: 'Pengiriman Cepat', description: 'Layanan pengiriman yang cepat dan dapat diandalkan untuk memastikan makanan tetap segar' },
          { icon: '⭐', title: 'Kualitas Terjamin', description: 'Komitmen kami untuk memberikan pelayanan terbaik dan kepuasan pelanggan' }
        ]
      } else if (category === 'umroh' || category === 'travel') {
        return [
          { icon: '✈️', title: 'Paket Terbaik', description: 'Paket perjalanan yang dipilih dengan cermat untuk pengalaman terbaik' },
          { icon: '🕌', title: 'Perjalanan Religi', description: 'Pengalaman perjalanan religi yang autentik dan bermakna' },
          { icon: '🏨', title: 'Hotel Berkualitas', description: 'Akomodasi yang nyaman dan strategis untuk kenyamanan Anda' },
          { icon: '👥', title: 'Pemandu Ahli', description: 'Pemandu yang berpengalaman, ramah, dan berpengetahuan luas' }
        ]
      } else if (category === 'it') {
        return [
          { icon: '💻', title: 'Teknologi Terkini', description: 'Menggunakan teknologi terbaru dan inovatif untuk solusi terbaik' },
          { icon: '⚡', title: 'Respon Cepat', description: 'Tim ahli yang siap membantu dengan respon yang cepat' },
          { icon: '🔒', title: 'Keamanan Terjamin', description: 'Prioritas utama kami adalah keamanan data dan sistem Anda' },
          { icon: '🚀', title: 'Inovasi Berkelanjutan', description: 'Terus berinovasi untuk memberikan solusi masa depan' }
        ]
      }
      return [
        { icon: '💼', title: 'Profesional', description: 'Layanan profesional yang dapat Anda percaya' },
        { icon: '⚡', title: 'Respon Cepat', description: 'Tanggapan cepat terhadap kebutuhan Anda' },
        { icon: '🎯', title: 'Fokus Kualitas', description: 'Kami fokus pada kualitas dalam segala hal' },
        { icon: '🤝', title: 'Mitra Terpercaya', description: 'Mitra bisnis terpercaya Anda' }
      ]
    })
    
    return {
      projectId,
      optimizeImageUrl,
      defaultImage,
      getHeroDescription,
      getOfferDescription,
      getTargetDescription,
      getHelpDescription,
      getLocationDescription,
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

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 600px;
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
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.85) 0%, rgba(118, 75, 162, 0.85) 100%);
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
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 22px;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.95);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.hero-info {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.95);
  font-size: 16px;
}

.info-item i {
  font-size: 20px;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  padding: 16px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
}

.btn-primary {
  background: #fff;
  color: #2563eb;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.btn-secondary:hover {
  background: #fff;
  color: #2563eb;
}

/* Intro Section */
.intro-section {
  background: #ffffff;
}

.intro-content {
  text-align: center;
}

.section-title {
  font-size: 42px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 50px;
}

.intro-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  text-align: left;
}

.intro-text h3 {
  font-size: 24px;
  color: #1a1a1a;
  margin-bottom: 15px;
  font-weight: 600;
}

.intro-text p {
  font-size: 16px;
  color: #6c757d;
  line-height: 1.8;
}

/* Features Section */
.features-section {
  background: #f8f9fa;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  text-align: center;
  padding: 40px 30px;
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 22px;
  color: #1a1a1a;
  margin-bottom: 15px;
  font-weight: 600;
}

.feature-card p {
  color: #6c757d;
  line-height: 1.6;
  font-size: 15px;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  text-align: center;
}

.cta-content h2 {
  font-size: 42px;
  margin-bottom: 20px;
  color: #fff;
}

.cta-content p {
  font-size: 18px;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.95);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.btn-large {
  padding: 18px 40px;
  font-size: 18px;
}

@media (max-width: 1024px) {
  .intro-grid {
    grid-template-columns: 1fr;
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
    gap: 20px;
  }

  .section-title {
    font-size: 32px;
  }

  .cta-content h2 {
    font-size: 32px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
