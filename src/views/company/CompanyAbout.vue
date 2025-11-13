<template>
  <div class="company-about">
    <!-- Header dengan Background -->
    <section class="about-header section">
      <div class="header-background">
        <div class="header-overlay"></div>
      </div>
      <div class="header-content">
        <div class="container">
          <h1 class="page-title">Tentang Kami</h1>
          <p class="page-subtitle">Kenali lebih dekat perusahaan kami, visi misi, dan nilai-nilai yang kami pegang</p>
        </div>
      </div>
    </section>

    <!-- Misi & Visi dalam Layout Berbeda -->
    <section class="mission-vision section section-alt">
      <div class="container">
        <div class="mv-wrapper">
          <div class="mission-box card">
            <div class="mv-icon">🎯</div>
            <h2>Misi Kami</h2>
            <p>Memberikan nilai dan kualitas layanan yang luar biasa yang melebihi harapan klien kami sambil mempertahankan standar profesionalisme dan integritas tertinggi. Kami berkomitmen untuk membangun hubungan jangka panjang dan menciptakan dampak positif dalam segala hal yang kami lakukan.</p>
          </div>
          <div class="vision-box card">
            <div class="mv-icon">👁️</div>
            <h2>Visi Kami</h2>
            <p>Menjadi perusahaan terdepan di industri kami, diakui karena inovasi, kualitas, dan kepuasan pelanggan. Kami membayangkan masa depan di mana layanan kami menjadi standar keunggulan dan menginspirasi yang lain di industri.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cerita Perusahaan -->
    <section class="story-section section">
      <div class="container">
        <div class="story-wrapper">
          <div class="story-image">
            <img :src="optimizeImageUrl(companyData?.image || defaultImage, 600)" 
                 :alt="companyData?.title" 
                 loading="lazy">
          </div>
          <div class="story-content">
            <h2 class="section-title">Cerita Kami</h2>
            <div class="story-text">
              <p>{{ companyData?.longDescription || companyData?.description || 'Kami adalah perusahaan yang berdedikasi untuk memberikan layanan terbaik kepada klien kami. Perjalanan kami dimulai dengan visi sederhana: memberikan kualitas dan nilai dalam segala hal yang kami lakukan.' }}</p>
              <p>Sejak didirikan, kami telah tumbuh dan berkembang dengan fokus pada kepuasan pelanggan dan inovasi berkelanjutan. Setiap langkah yang kami ambil didasarkan pada komitmen untuk memberikan yang terbaik.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nilai-Nilai Inti -->
    <section class="values-section section section-alt">
      <div class="container">
        <h2 class="section-title">Nilai-Nilai Inti Kami</h2>
        <div class="values-grid">
          <div class="value-item card" v-for="(value, index) in values" :key="index">
            <div class="value-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="value-icon">{{ value.icon }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Target Market & Keunggulan -->
    <section class="market-section section">
      <div class="container">
        <div class="market-wrapper">
          <div class="market-box">
            <h2 class="section-title">Siapa yang Kami Layani?</h2>
            <p class="market-description">{{ getTargetMarket() }}</p>
          </div>
          
          <div class="advantages-box">
            <h2 class="section-title">Keunggulan Kami</h2>
            <div class="advantages-list">
              <div class="advantage-item" v-for="(advantage, index) in advantages" :key="index">
                <div class="advantage-icon">
                  <i :class="advantage.icon"></i>
                </div>
                <div class="advantage-content">
                  <h3>{{ advantage.title }}</h3>
                  <p>{{ advantage.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tim Kami -->
    <section class="team-section section section-alt">
      <div class="container">
        <h2 class="section-title">Tim Kami</h2>
        <p class="section-subtitle">Kenali para profesional berdedikasi di balik kesuksesan kami</p>
        <div class="team-grid">
          <div class="team-member card" v-for="(member, index) in teamMembers" :key="index">
            <div class="member-avatar">{{ member.avatar }}</div>
            <h3>{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
            <p class="member-bio">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section section">
      <div class="container">
        <div class="cta-box">
          <h2>Ingin Tahu Lebih Banyak?</h2>
          <p>Jelajahi layanan kami dan lihat bagaimana kami dapat membantu Anda mencapai tujuan.</p>
          <div class="cta-buttons">
            <router-link :to="`/website/${projectId}/services`" class="btn-primary">
              <i class="fas fa-briefcase"></i> Lihat Layanan
            </router-link>
            <router-link :to="`/website/${projectId}/contact`" class="btn-secondary">
              <i class="fas fa-envelope"></i> Hubungi Kami
            </router-link>
          </div>
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
  name: 'CompanyAbout',
  props: {
    companyData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const route = useRoute()
    const projectId = computed(() => route.params.id)
    const defaultImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop'
    
    const values = [
      { icon: '🎯', title: 'Keunggulan', description: 'Kami berusaha untuk keunggulan dalam segala hal yang kami lakukan, menetapkan standar tinggi dan terus meningkatkan kualitas.' },
      { icon: '🤝', title: 'Integritas', description: 'Kejujuran dan transparansi memandu semua tindakan dan hubungan bisnis kami.' },
      { icon: '💡', title: 'Inovasi', description: 'Kami merangkul ide dan teknologi baru untuk tetap unggul dan memberikan solusi yang lebih baik.' },
      { icon: '❤️', title: 'Fokus Pelanggan', description: 'Pelanggan kami berada di pusat segala hal yang kami lakukan, dan kesuksesan mereka adalah prioritas kami.' },
      { icon: '🌱', title: 'Pertumbuhan Berkelanjutan', description: 'Kami berkomitmen untuk terus berkembang dan beradaptasi dengan perubahan zaman sambil menjaga nilai-nilai inti kami.' },
      { icon: '🌟', title: 'Komitmen Kualitas', description: 'Setiap layanan yang kami berikan didasarkan pada komitmen untuk memberikan kualitas terbaik tanpa kompromi.' }
    ]
    
    const getTargetMarket = () => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return 'Kami melayani individu, keluarga, klien korporat, dan penyelenggara acara yang mencari pengalaman kuliner istimewa. Layanan kami melayani mereka yang menghargai kualitas, rasa, dan pelayanan profesional.'
      } else if (category === 'umroh' || category === 'travel') {
        return 'Kami melayani individu, keluarga, dan kelompok yang mencari pengalaman perjalanan yang bermakna. Layanan kami dirancang untuk mereka yang merencanakan perjalanan religi, liburan, atau perjalanan bisnis yang menghargai keandalan dan kualitas layanan.'
      } else if (category === 'it') {
        return 'Kami melayani bisnis dari startup hingga enterprise yang ingin mengoptimalkan operasional melalui teknologi. Layanan kami dirancang untuk perusahaan yang ingin beradaptasi dengan era digital dan memanfaatkan teknologi untuk pertumbuhan bisnis.'
      }
      return 'Kami melayani bisnis dari berbagai ukuran yang ingin tumbuh, meningkatkan efisiensi, dan mencapai tujuan mereka. Layanan kami disesuaikan untuk perusahaan yang menghargai profesionalisme, inovasi, dan hasil.'
    }
    
    const advantages = computed(() => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return [
          { icon: 'fas fa-leaf', title: 'Bahan Segar', description: 'Kami hanya menggunakan bahan-bahan terbaik dan terbaru untuk hidangan kami' },
          { icon: 'fas fa-award', title: 'Berprestasi', description: 'Diakui karena keunggulan dalam kualitas makanan dan layanan' },
          { icon: 'fas fa-clock', title: 'Layanan Cepat', description: 'Persiapan dan pengiriman cepat tanpa mengorbankan kualitas' },
          { icon: 'fas fa-heart', title: 'Tim Berdedikasi', description: 'Chef dan staf kami berdedikasi untuk menciptakan pengalaman yang tak terlupakan' }
        ]
      } else if (category === 'umroh' || category === 'travel') {
        return [
          { icon: 'fas fa-certificate', title: 'Berlisensi & Bersertifikat', description: 'Agen perjalanan berlisensi penuh dengan pemandu bersertifikat' },
          { icon: 'fas fa-shield-alt', title: 'Mitra Terpercaya', description: 'Bertahun-tahun pengalaman melayani ribuan traveler yang puas' },
          { icon: 'fas fa-handshake', title: 'Harga Terbaik', description: 'Harga kompetitif tanpa biaya tersembunyi' },
          { icon: 'fas fa-headset', title: 'Dukungan 24/7', description: 'Bantuan sepanjang waktu selama perjalanan Anda' }
        ]
      } else if (category === 'it') {
        return [
          { icon: 'fas fa-code', title: 'Pengembangan Custom', description: 'Tim developer berpengalaman dengan teknologi terkini' },
          { icon: 'fas fa-cloud', title: 'Cloud Solutions', description: 'Solusi cloud yang scalable dan cost-effective' },
          { icon: 'fas fa-shield-alt', title: 'Keamanan Data', description: 'Prioritas utama pada keamanan dan privasi data' },
          { icon: 'fas fa-rocket', title: 'Inovasi Teknologi', description: 'Terus mengadopsi teknologi terbaru untuk solusi terbaik' }
        ]
      }
      return [
        { icon: 'fas fa-users', title: 'Tim Ahli', description: 'Profesional berpengalaman dengan rekam jejak terbukti' },
        { icon: 'fas fa-rocket', title: 'Solusi Inovatif', description: 'Pendekatan mutakhir untuk menyelesaikan tantangan bisnis Anda' },
        { icon: 'fas fa-chart-line', title: 'Hasil Terbukti', description: 'Rekam jejak memberikan hasil bisnis yang terukur' },
        { icon: 'fas fa-handshake', title: 'Pendekatan Kemitraan', description: 'Kami bekerja sebagai mitra Anda, bukan hanya penyedia layanan' }
      ]
    })
    
    const teamMembers = [
      {
        avatar: '👤',
        name: 'Tim Kepemimpinan',
        role: 'Manajemen',
        bio: 'Profesional berpengalaman yang memimpin perusahaan kami dengan visi dan dedikasi.'
      },
      {
        avatar: '👥',
        name: 'Staf Ahli',
        role: 'Operasional',
        bio: 'Anggota tim terampil yang berkomitmen untuk memberikan layanan terbaik.'
      },
      {
        avatar: '💼',
        name: 'Tim Dukungan',
        role: 'Layanan Pelanggan',
        bio: 'Berdedikasi untuk memastikan kepuasan dan kesuksesan Anda.'
      }
    ]
    
    return {
      projectId,
      optimizeImageUrl,
      defaultImage,
      values,
      getTargetMarket,
      advantages,
      teamMembers
    }
  }
}
</script>

<style scoped>
.company-about {
  width: 100%;
  min-height: 100vh;
}

/* Section Base */
.section {
  padding: var(--cp-section-spacing, 100px) 0;
}

.section-alt {
  background: var(--cp-bg-secondary, #f0fdfa);
}

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
  
  .section {
    padding: 60px 0;
  }
}

/* Header Section */
.about-header {
  position: relative;
  background: var(--cp-gradient);
  color: #fff;
  text-align: center;
  padding: 120px 0;
  overflow: hidden;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.08;
  background-image: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="2" fill="white"/></svg>');
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--cp-gradient);
  opacity: 0.92;
}

.header-content {
  position: relative;
  z-index: 2;
}

.page-title {
  font-size: 64px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.page-subtitle {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.95);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Mission Vision Section */
.mission-vision {
  background: var(--cp-bg-secondary, #f0fdfa);
}

.mv-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.mission-box,
.vision-box {
  padding: 48px 40px;
  text-align: center;
  background: var(--cp-bg-primary, #ffffff);
  border-radius: 16px;
  border: 1px solid var(--cp-border, rgba(13, 148, 136, 0.15));
  transition: all 0.3s ease;
}

.mission-box:hover,
.vision-box:hover {
  transform: translateY(-4px);
  box-shadow: var(--cp-card-shadow, 0 4px 20px rgba(13, 148, 136, 0.08));
}

.mv-icon {
  font-size: 64px;
  margin-bottom: 24px;
  line-height: 1;
}

.mission-box h2,
.vision-box h2 {
  font-size: 28px;
  color: var(--cp-text-primary, #134e4a);
  margin-bottom: 20px;
  font-weight: 600;
}

.mission-box p,
.vision-box p {
  color: var(--cp-text-secondary, #64748b);
  line-height: 1.8;
  font-size: 16px;
}

/* Story Section */
.story-section {
  background: var(--cp-bg-primary, #ffffff);
}

.story-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 64px;
  align-items: center;
}

.story-image {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--cp-card-shadow, 0 4px 20px rgba(13, 148, 136, 0.08));
}

.story-image img {
  width: 100%;
  height: auto;
  display: block;
}

.section-title {
  font-size: 48px;
  font-weight: 700;
  color: var(--cp-text-primary, #134e4a);
  margin-bottom: 24px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.story-text p {
  font-size: 18px;
  line-height: 1.8;
  color: var(--cp-text-secondary, #64748b);
  margin-bottom: 20px;
}

/* Values Section */
.values-section {
  background: var(--cp-bg-secondary, #f0fdfa);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.value-item {
  padding: 48px 32px;
  text-align: center;
  position: relative;
  background: var(--cp-bg-primary, #ffffff);
  border-radius: 16px;
  border: 1px solid var(--cp-border, rgba(13, 148, 136, 0.15));
  transition: all 0.3s ease;
}

.value-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--cp-card-shadow, 0 4px 20px rgba(13, 148, 136, 0.08));
  border-color: var(--cp-accent, #0d9488);
}

.value-number {
  position: absolute;
  top: 24px;
  right: 24px;
  font-size: 48px;
  font-weight: 700;
  color: var(--cp-accent, #0d9488);
  opacity: 0.1;
}

.value-icon {
  font-size: 56px;
  margin-bottom: 24px;
  line-height: 1;
}

.value-item h3 {
  font-size: 22px;
  color: var(--cp-text-primary, #134e4a);
  margin-bottom: 16px;
  font-weight: 600;
}

.value-item p {
  color: var(--cp-text-secondary, #64748b);
  line-height: 1.7;
  font-size: 15px;
}

/* Market Section */
.market-section {
  background: var(--cp-bg-primary, #ffffff);
}

.market-wrapper {
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.market-description {
  font-size: 18px;
  color: var(--cp-text-secondary, #64748b);
  line-height: 1.8;
  max-width: 900px;
}

.advantages-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
}

.advantage-item {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  padding: 32px;
  background: var(--cp-bg-secondary, #f0fdfa);
  border-radius: 16px;
  border: 1px solid var(--cp-border, rgba(13, 148, 136, 0.15));
  transition: all 0.3s ease;
}

.advantage-item:hover {
  transform: translateX(4px);
  border-color: var(--cp-accent, #0d9488);
}

.advantage-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cp-gradient);
  color: #fff;
  border-radius: 16px;
  font-size: 24px;
  flex-shrink: 0;
}

.advantage-content h3 {
  font-size: 22px;
  color: var(--cp-text-primary, #134e4a);
  margin-bottom: 12px;
  font-weight: 600;
}

.advantage-content p {
  color: var(--cp-text-secondary, #64748b);
  line-height: 1.7;
  font-size: 15px;
}

/* Team Section */
.team-section {
  background: var(--cp-bg-secondary, #f0fdfa);
}

.section-subtitle {
  text-align: center;
  font-size: 18px;
  color: var(--cp-text-secondary, #64748b);
  margin-bottom: 48px;
  line-height: 1.7;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.team-member {
  text-align: center;
  padding: 48px 32px;
  background: var(--cp-bg-primary, #ffffff);
  border-radius: 16px;
  border: 1px solid var(--cp-border, rgba(13, 148, 136, 0.15));
  transition: all 0.3s ease;
}

.team-member:hover {
  transform: translateY(-4px);
  box-shadow: var(--cp-card-shadow, 0 4px 20px rgba(13, 148, 136, 0.08));
}

.member-avatar {
  font-size: 72px;
  margin-bottom: 24px;
  line-height: 1;
}

.team-member h3 {
  font-size: 22px;
  color: var(--cp-text-primary, #134e4a);
  margin-bottom: 8px;
  font-weight: 600;
}

.member-role {
  color: var(--cp-accent, #0d9488);
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 16px;
}

.member-bio {
  color: var(--cp-text-secondary, #64748b);
  line-height: 1.7;
  font-size: 15px;
}

/* CTA Section */
.cta-section {
  background: var(--cp-gradient);
  color: #fff;
  text-align: center;
}

.cta-box {
  max-width: 800px;
  margin: 0 auto;
}

.cta-box h2 {
  font-size: 48px;
  margin-bottom: 24px;
  color: #fff;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.cta-box p {
  font-size: 18px;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
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
  border-color: #fff;
}

/* Responsive */
@media (max-width: 1024px) {
  .page-title {
    font-size: 48px;
  }
  
  .section-title {
    font-size: 40px;
  }
  
  .cta-box h2 {
    font-size: 40px;
  }
  
  .mv-wrapper,
  .story-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 36px;
  }

  .section-title {
    font-size: 32px;
  }
  
  .cta-box h2 {
    font-size: 32px;
  }

  .values-grid,
  .team-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .advantage-item {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  
  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>
