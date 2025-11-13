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
      { icon: '❤️', title: 'Fokus Pelanggan', description: 'Pelanggan kami berada di pusat segala hal yang kami lakukan, dan kesuksesan mereka adalah prioritas kami.' }
    ]
    
    const getTargetMarket = () => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return 'Kami melayani individu, keluarga, klien korporat, dan penyelenggara acara yang mencari pengalaman kuliner istimewa. Layanan kami melayani mereka yang menghargai kualitas, rasa, dan pelayanan profesional.'
      } else if (category === 'umroh' || category === 'travel') {
        return 'Kami melayani individu, keluarga, dan kelompok yang mencari pengalaman perjalanan yang bermakna. Layanan kami dirancang untuk mereka yang merencanakan perjalanan religi, liburan, atau perjalanan bisnis yang menghargai keandalan dan kualitas layanan.'
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

.about-header {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  opacity: 0.1;
  background-image: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="2" fill="white"/></svg>');
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
}

.header-content {
  position: relative;
  z-index: 2;
}

.page-title {
  font-size: 56px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
}

.page-subtitle {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.95);
  max-width: 700px;
  margin: 0 auto;
}

.mission-vision {
  background: #f8f9fa;
}

.mv-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.mission-box,
.vision-box {
  padding: 50px 40px;
  text-align: center;
}

.mv-icon {
  font-size: 64px;
  margin-bottom: 25px;
}

.mission-box h2,
.vision-box h2 {
  font-size: 28px;
  color: #1a1a1a;
  margin-bottom: 20px;
}

.mission-box p,
.vision-box p {
  color: #6c757d;
  line-height: 1.8;
  font-size: 16px;
}

.story-section {
  background: #ffffff;
}

.story-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  align-items: center;
}

.story-image {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.story-image img {
  width: 100%;
  height: auto;
  display: block;
}

.story-content h2 {
  font-size: 36px;
  color: #1a1a1a;
  margin-bottom: 25px;
}

.story-text p {
  font-size: 18px;
  line-height: 1.8;
  color: #6c757d;
  margin-bottom: 20px;
}

.values-section {
  background: #f8f9fa;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.value-item {
  padding: 40px 30px;
  text-align: center;
  position: relative;
}

.value-number {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 48px;
  font-weight: 700;
  color: rgba(37, 99, 235, 0.1);
}

.value-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.value-item h3 {
  font-size: 22px;
  color: #1a1a1a;
  margin-bottom: 15px;
}

.value-item p {
  color: #6c757d;
  line-height: 1.6;
}

.market-section {
  background: #ffffff;
}

.market-wrapper {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.market-description {
  font-size: 18px;
  color: #6c757d;
  line-height: 1.8;
  max-width: 900px;
}

.advantages-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
}

.advantage-item {
  display: flex;
  gap: 25px;
  align-items: flex-start;
  padding: 30px;
  background: #f8f9fa;
  border-radius: 12px;
}

.advantage-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border-radius: 12px;
  font-size: 24px;
  flex-shrink: 0;
}

.advantage-content h3 {
  font-size: 22px;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.advantage-content p {
  color: #6c757d;
  line-height: 1.6;
}

.team-section {
  background: #f8f9fa;
}

.section-subtitle {
  text-align: center;
  font-size: 18px;
  color: #6c757d;
  margin-bottom: 50px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.team-member {
  text-align: center;
  padding: 40px 30px;
}

.member-avatar {
  font-size: 64px;
  margin-bottom: 20px;
}

.team-member h3 {
  font-size: 22px;
  color: #1a1a1a;
  margin-bottom: 5px;
}

.member-role {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 16px;
}

.member-bio {
  color: #6c757d;
  line-height: 1.6;
  font-size: 15px;
}

.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  text-align: center;
}

.cta-box {
  max-width: 700px;
  margin: 0 auto;
}

.cta-box h2 {
  font-size: 42px;
  margin-bottom: 20px;
  color: #fff;
}

.cta-box p {
  font-size: 18px;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.95);
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
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

  .values-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }

  .advantage-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>
