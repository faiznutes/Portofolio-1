<template>
  <div class="company-package">
    <!-- Hero Section -->
    <section class="package-hero section">
      <div class="container">
        <h1 class="page-title">Paket Umroh & Haji</h1>
        <p class="page-subtitle">Pilih paket yang sesuai dengan kebutuhan perjalanan suci Anda</p>
      </div>
    </section>

    <!-- Packages Section -->
    <section class="packages-section section">
      <div class="container">
        <div class="packages-wrapper">
          <div class="package-card featured" v-for="(pkg, index) in packages" :key="index">
            <div class="package-badge" v-if="pkg.featured">Paling Populer</div>
            <div class="package-header">
              <h3>{{ pkg.name }}</h3>
              <div class="package-price">{{ pkg.price }}</div>
              <p class="package-duration">{{ pkg.duration }}</p>
            </div>
            <div class="package-features">
              <h4>Fasilitas yang Disediakan:</h4>
              <div class="package-feature" v-for="(feature, fIndex) in pkg.features" :key="fIndex">
                <i class="fas fa-check"></i>
                <span>{{ feature }}</span>
              </div>
            </div>
            <div class="package-excludes" v-if="pkg.excludes">
              <h4>Tidak Termasuk:</h4>
              <div class="package-feature" v-for="(exclude, eIndex) in pkg.excludes" :key="eIndex">
                <i class="fas fa-times"></i>
                <span>{{ exclude }}</span>
              </div>
            </div>
            <div class="package-actions">
              <router-link :to="`/website/${projectId}/contact`" class="btn-primary btn-full">
                <i class="fas fa-phone"></i> Hubungi Kami
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Info Section -->
    <section class="info-section section section-alt">
      <div class="container">
        <div class="info-wrapper">
          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-info-circle"></i>
            </div>
            <h3>Informasi Penting</h3>
            <ul>
              <li>Harga dapat berubah sewaktu-waktu sesuai dengan kurs mata uang</li>
              <li>Pembayaran dapat dilakukan secara bertahap</li>
              <li>Semua paket termasuk asuransi perjalanan</li>
              <li>Dokumen akan kami bantu proseskan</li>
            </ul>
          </div>
          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-question-circle"></i>
            </div>
            <h3>Butuh Bantuan?</h3>
            <p>Tim kami siap membantu Anda memilih paket yang tepat. Hubungi kami untuk konsultasi gratis.</p>
            <router-link :to="`/website/${projectId}/contact`" class="btn-primary">
              <i class="fas fa-comments"></i> Konsultasi Gratis
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

export default {
  name: 'CompanyPackage',
  props: {
    companyData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const route = useRoute()
    const projectId = computed(() => route.params.id)
    
    const packages = [
      {
        name: 'Umroh Regular',
        price: 'Mulai dari Rp 25.000.000',
        duration: '9 Hari 8 Malam',
        featured: false,
        features: [
          'Hotel 3-4 bintang dekat Masjidil Haram',
          'Pembimbing berpengalaman',
          'Visa umroh',
          'Tiket pesawat pulang pergi',
          'Makan 3x sehari',
          'Transportasi selama di Saudi',
          'Manasik sebelum keberangkatan',
          'Asuransi perjalanan'
        ],
        excludes: [
          'Biaya tambahan untuk upgrade hotel',
          'Pengeluaran pribadi',
          'Tips untuk guide dan driver'
        ]
      },
      {
        name: 'Umroh Plus Turki',
        price: 'Mulai dari Rp 35.000.000',
        duration: '12 Hari 11 Malam',
        featured: true,
        features: [
          'Semua fasilitas Umroh Regular',
          'Wisata ke Turki 3 hari',
          'Hotel bintang 4-5 di Turki',
          'Tour guide berbahasa Indonesia',
          'Makan halal selama di Turki',
          'Transportasi lengkap',
          'Tiket masuk ke tempat wisata',
          'Asuransi perjalanan internasional'
        ],
        excludes: [
          'Biaya tambahan untuk upgrade hotel',
          'Pengeluaran pribadi',
          'Tips untuk guide dan driver'
        ]
      },
      {
        name: 'Haji Khusus',
        price: 'Hubungi Kami',
        duration: '40 Hari',
        featured: false,
        features: [
          'Paket haji lengkap',
          'Hotel premium dekat Masjidil Haram',
          'Pembimbing haji berpengalaman',
          'Visa haji resmi',
          'Makan 3x sehari',
          'Layanan VIP selama ibadah haji',
          'Manasik haji lengkap',
          'Asuransi perjalanan',
          'Dokumentasi perjalanan'
        ],
        excludes: [
          'Biaya tambahan untuk upgrade hotel',
          'Pengeluaran pribadi',
          'Tips untuk guide dan driver'
        ]
      }
    ]
    
    return {
      projectId,
      packages
    }
  }
}
</script>

<style scoped>
.company-package {
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
.package-hero {
  background: var(--cp-gradient);
  color: #ffffff !important;
  text-align: center;
  padding: 120px 0;
}

.page-title {
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #ffffff !important;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.5);
  opacity: 1 !important;
}

.page-subtitle {
  font-size: 22px;
  color: #ffffff !important;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 0.7), 0 0 2px rgba(0, 0, 0, 0.5);
  font-weight: 600;
  opacity: 1 !important;
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
  flex: 1 1 350px;
  min-width: 350px;
  max-width: 400px;
  padding: 48px 40px;
  background: var(--cp-bg-primary, #ffffff);
  border-radius: 20px;
  border: 2px solid var(--cp-border, rgba(212, 175, 55, 0.2));
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
}

.package-card.featured {
  border-color: var(--cp-accent, #d4af37);
  border-width: 3px;
  box-shadow: 0 8px 32px rgba(212, 175, 55, 0.2);
}

.package-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--cp-card-shadow, 0 4px 20px rgba(10, 26, 47, 0.08));
}

.package-badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
  color: #0a1a2f;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
  white-space: nowrap;
}

.package-header {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 2px solid var(--cp-border, rgba(212, 175, 55, 0.2));
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.package-header h3 {
  font-size: 28px;
  color: var(--cp-text-primary, #0a1a2f);
  margin-bottom: 16px;
  font-weight: 700;
}

.package-price {
  font-size: 24px;
  color: var(--cp-accent, #d4af37);
  font-weight: 700;
  margin-bottom: 8px;
}

.package-duration {
  font-size: 16px;
  color: var(--cp-text-secondary, #334155);
  margin: 0;
}

.package-features,
.package-excludes {
  flex: 1;
  margin-bottom: 32px;
}

.package-features h4,
.package-excludes h4 {
  font-size: 18px;
  color: var(--cp-text-primary, #0a1a2f);
  margin-bottom: 16px;
  font-weight: 600;
}

.package-feature {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: var(--cp-text-secondary, #334155);
  font-size: 15px;
  margin-bottom: 12px;
  line-height: 1.6;
}

.package-feature i {
  color: var(--cp-accent, #d4af37);
  font-size: 16px;
  margin-top: 4px;
  flex-shrink: 0;
}

.package-excludes .package-feature i {
  color: #ef4444;
}

.package-actions {
  margin-top: auto;
  display: flex;
  justify-content: center;
  width: 100%;
}

.btn-primary {
  padding: 16px 32px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 16px;
  background: linear-gradient(135deg, #f4d03f 0%, #d4af37 100%);
  color: #0a1a2f;
  box-shadow: 0 4px 16px rgba(212, 175, 55, 0.4);
  border: 2px solid rgba(212, 175, 55, 0.3);
  cursor: pointer;
}

/* Button primary di section putih harus lebih kontras - sama seperti Home */
.section:not(.package-hero):not(.cta-section) .btn-primary {
  background: linear-gradient(135deg, #f4d03f 0%, #d4af37 100%);
  color: #0a1a2f;
  box-shadow: 0 4px 16px rgba(212, 175, 55, 0.4);
  border: 2px solid rgba(212, 175, 55, 0.3);
  font-weight: 700;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(212, 175, 55, 0.4);
}

.btn-full {
  width: 100%;
}

/* Info Section */
.info-section {
  background: var(--cp-bg-secondary, #faf9f6);
}

.info-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}

.info-card {
  flex: 1 1 400px;
  min-width: 300px;
  max-width: 500px;
  padding: 40px 32px;
  background: var(--cp-bg-primary, #ffffff);
  border-radius: 16px;
  border: 1px solid var(--cp-border, rgba(212, 175, 55, 0.2));
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--cp-card-shadow, 0 4px 20px rgba(10, 26, 47, 0.08));
  border-color: var(--cp-accent, #d4af37);
}

.info-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
  border-radius: 16px;
  color: #0a1a2f;
  font-size: 28px;
}

.info-card h3 {
  font-size: 24px;
  color: var(--cp-text-primary, #0a1a2f);
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
}

.info-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-card li {
  font-size: 15px;
  color: var(--cp-text-secondary, #334155);
  line-height: 1.8;
  margin-bottom: 12px;
  padding-left: 24px;
  position: relative;
}

.info-card li:before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--cp-accent, #d4af37);
  font-weight: bold;
  font-size: 20px;
}

.info-card p {
  font-size: 15px;
  color: var(--cp-text-secondary, #334155);
  line-height: 1.8;
  margin-bottom: 24px;
  text-align: center;
}

/* Responsive */
@media (max-width: 1024px) {
  .page-title {
    font-size: 48px;
  }
  
  .section {
    padding: 80px 0;
  }
  
  .packages-wrapper {
    flex-direction: column;
  }
  
  .package-card {
    max-width: 100%;
  }
  
  .info-wrapper {
    flex-direction: column;
  }
  
  .info-card {
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

  .section {
    padding: 60px 0;
  }
  
  .package-hero {
    padding: 80px 0;
  }
  
  .package-card {
    min-width: 100%;
  }
}
</style>

