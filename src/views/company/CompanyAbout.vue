<template>
  <div class="company-about">
    <!-- Hero Section -->
    <section class="about-hero section">
      <div class="container">
        <h1 class="page-title">Tentang Kami</h1>
        <p class="page-subtitle">{{ companyData?.description || 'Barokah Journey - Perjalanan Suci Menuju Baitullah dengan Tenang & Terpercaya' }}</p>
      </div>
    </section>

    <!-- Visi Misi Section -->
    <section class="vision-mission-section section">
      <div class="container">
        <div class="vision-mission-wrapper">
          <div class="vision-card">
            <div class="card-icon">
              <i class="fas fa-eye"></i>
            </div>
            <h2>Visi Kami</h2>
            <p>Menjadi biro perjalanan umroh dan haji terpercaya yang menghadirkan pengalaman perjalanan suci yang bermakna, nyaman, dan penuh barokah bagi setiap jamaah.</p>
          </div>
          <div class="mission-card">
            <div class="card-icon">
              <i class="fas fa-bullseye"></i>
            </div>
            <h2>Misi Kami</h2>
            <ul>
              <li>Menyediakan layanan perjalanan umroh dan haji dengan kualitas terbaik</li>
              <li>Memberikan bimbingan ibadah yang tepat dan profesional</li>
              <li>Memastikan kenyamanan dan keamanan jamaah selama perjalanan</li>
              <li>Menjaga transparansi harga dan layanan</li>
              <li>Membangun kepercayaan melalui pelayanan yang konsisten</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Nilai-Nilai Section -->
    <section class="values-section section section-alt">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Nilai-Nilai Inti Kami</h2>
        </div>
        <div class="values-wrapper">
          <div class="value-card" v-for="(value, index) in values" :key="index">
            <div class="value-icon">
              <i :class="value.icon"></i>
            </div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tim Section -->
    <section class="team-section section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Tim Kami</h2>
          <p class="section-description">Tim profesional yang siap membantu perjalanan suci Anda</p>
        </div>
        <div class="team-wrapper">
          <div class="team-card" v-for="(member, index) in team" :key="index">
            <div class="team-avatar">{{ member.avatar }}</div>
            <h3>{{ member.name }}</h3>
            <p class="team-role">{{ member.role }}</p>
            <p class="team-desc">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section section">
      <div class="container">
        <div class="cta-content">
          <h2>Siap Memulai Perjalanan Suci Anda?</h2>
          <p>Hubungi kami sekarang untuk konsultasi gratis dan informasi lebih lanjut tentang paket perjalanan kami.</p>
          <router-link :to="`/website/${projectId}/contact`" class="btn-primary btn-large">
            <i class="fas fa-paper-plane"></i> Hubungi Kami
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

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
    
    const values = [
      {
        icon: 'fas fa-heart',
        title: 'Kejujuran',
        description: 'Kami berkomitmen untuk memberikan informasi yang jujur dan transparan kepada setiap jamaah.'
      },
      {
        icon: 'fas fa-hands-helping',
        title: 'Pelayanan Terbaik',
        description: 'Memberikan pelayanan terbaik dengan penuh dedikasi dan perhatian kepada setiap jamaah.'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Keamanan',
        description: 'Memastikan keamanan dan kenyamanan jamaah menjadi prioritas utama kami.'
      },
      {
        icon: 'fas fa-star',
        title: 'Kualitas',
        description: 'Menjaga kualitas layanan dan akomodasi sesuai dengan standar terbaik.'
      },
      {
        icon: 'fas fa-users',
        title: 'Kepercayaan',
        description: 'Membangun kepercayaan melalui konsistensi dan profesionalitas dalam setiap layanan.'
      },
      {
        icon: 'fas fa-praying-hands',
        title: 'Spiritualitas',
        description: 'Menghadirkan pengalaman spiritual yang bermakna dalam setiap perjalanan suci.'
      }
    ]
    
    const team = [
      {
        avatar: '👨‍💼',
        name: 'Ahmad Fauzi',
        role: 'Direktur',
        description: 'Berpengalaman lebih dari 10 tahun dalam industri travel umroh dan haji.'
      },
      {
        avatar: '👨‍🏫',
        name: 'Ustadz Muhammad',
        role: 'Pembimbing Ibadah',
        description: 'Ahli dalam bimbingan ibadah umroh dan haji dengan pengalaman bertahun-tahun.'
      },
      {
        avatar: '👩‍💼',
        name: 'Siti Aisyah',
        role: 'Customer Service',
        description: 'Siap membantu Anda dengan ramah dan profesional dalam setiap pertanyaan.'
      }
    ]
    
    return {
      projectId,
      values,
      team
    }
  }
}
</script>

<style scoped>
.company-about {
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
.about-hero {
  background: var(--cp-gradient);
  color: #fff;
  text-align: center;
  padding: 120px 0;
}

.page-title {
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #fff;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.page-subtitle {
  font-size: 22px;
  color: #ffffff;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* Vision Mission Section */
.vision-mission-section {
  background: var(--cp-bg-primary, #ffffff);
}

.vision-mission-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
  justify-content: center;
}

.vision-card,
.mission-card {
  flex: 1 1 400px;
  min-width: 300px;
  max-width: 500px;
  padding: 48px 40px;
  background: var(--cp-bg-primary, #ffffff);
  border-radius: 20px;
  border: 2px solid var(--cp-border, rgba(212, 175, 55, 0.2));
  box-shadow: var(--cp-card-shadow, 0 4px 20px rgba(10, 26, 47, 0.08));
}

.card-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
  border-radius: 20px;
  color: #0a1a2f;
  font-size: 36px;
}

.vision-card h2,
.mission-card h2 {
  font-size: 32px;
  color: var(--cp-text-primary, #0a1a2f);
  margin-bottom: 24px;
  text-align: center;
  font-weight: 700;
}

.vision-card p {
  font-size: 18px;
  color: var(--cp-text-secondary, #334155);
  line-height: 1.8;
  text-align: center;
}

.mission-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mission-card li {
  font-size: 16px;
  color: var(--cp-text-secondary, #334155);
  line-height: 1.8;
  margin-bottom: 16px;
  padding-left: 28px;
  position: relative;
}

.mission-card li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--cp-accent, #d4af37);
  font-weight: bold;
  font-size: 18px;
}

/* Values Section */
.values-section {
  background: var(--cp-bg-secondary, #faf9f6);
}

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

.values-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}

.value-card {
  flex: 1 1 300px;
  min-width: 300px;
  max-width: 380px;
  padding: 40px 32px;
  background: var(--cp-bg-primary, #ffffff);
  border-radius: 16px;
  border: 1px solid var(--cp-border, rgba(212, 175, 55, 0.2));
  text-align: center;
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--cp-card-shadow, 0 4px 20px rgba(10, 26, 47, 0.08));
  border-color: var(--cp-accent, #d4af37);
}

.value-icon {
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

.value-card h3 {
  font-size: 22px;
  color: var(--cp-text-primary, #0a1a2f);
  margin-bottom: 16px;
  font-weight: 600;
}

.value-card p {
  font-size: 15px;
  color: var(--cp-text-secondary, #334155);
  line-height: 1.7;
  margin: 0;
}

/* Team Section */
.team-section {
  background: var(--cp-bg-primary, #ffffff);
}

.team-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}

.team-card {
  flex: 1 1 300px;
  min-width: 300px;
  max-width: 380px;
  padding: 40px 32px;
  background: var(--cp-bg-primary, #ffffff);
  border-radius: 16px;
  border: 1px solid var(--cp-border, rgba(212, 175, 55, 0.2));
  text-align: center;
  transition: all 0.3s ease;
}

.team-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--cp-card-shadow, 0 4px 20px rgba(10, 26, 47, 0.08));
  border-color: var(--cp-accent, #d4af37);
}

.team-avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto 24px;
  border-radius: 50%;
  background: var(--cp-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
}

.team-card h3 {
  font-size: 24px;
  color: var(--cp-text-primary, #0a1a2f);
  margin-bottom: 8px;
  font-weight: 700;
}

.team-role {
  font-size: 16px;
  color: var(--cp-accent, #d4af37);
  margin-bottom: 16px;
  font-weight: 600;
}

.team-desc {
  font-size: 15px;
  color: var(--cp-text-secondary, #334155);
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
  color: #ffffff;
  line-height: 1.7;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* Button di CTA section dengan background gelap harus putih */
.cta-section .btn-primary {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border: 2px solid #ffffff;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.cta-section .btn-primary:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: #ffffff;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

.btn-primary {
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  background: linear-gradient(135deg, #f4d03f 0%, #d4af37 100%);
  color: #0a1a2f;
  box-shadow: 0 4px 16px rgba(212, 175, 55, 0.4);
  border: 2px solid rgba(212, 175, 55, 0.3);
  cursor: pointer;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(212, 175, 55, 0.4);
}

.btn-large {
  padding: 18px 40px;
  font-size: 18px;
}

/* Responsive */
@media (max-width: 1024px) {
  .page-title {
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
  
  .vision-mission-wrapper {
    flex-direction: column;
  }
  
  .vision-card,
  .mission-card {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 36px;
  }

  .page-subtitle {
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

  .values-wrapper,
  .team-wrapper {
    flex-direction: column;
  }
  
  .value-card,
  .team-card {
    max-width: 100%;
  }
  
  .section {
    padding: 60px 0;
  }
  
  .about-hero {
    padding: 80px 0;
  }
}
</style>
