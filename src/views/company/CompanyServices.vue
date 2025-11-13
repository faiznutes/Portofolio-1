<template>
  <div class="company-services">
    <!-- Hero Section -->
    <section class="services-hero section">
      <div class="container">
        <h1 class="page-title">Layanan Kami</h1>
        <p class="page-subtitle">Solusi lengkap yang disesuaikan dengan kebutuhan Anda</p>
      </div>
    </section>

    <!-- Services List -->
    <section class="services-content section section-alt">
      <div class="container">
        <div class="services-list">
          <div class="service-item card" v-for="(service, index) in services" :key="index">
            <div class="service-header">
              <div class="service-number">{{ String(index + 1).padStart(2, '0') }}</div>
              <h2>{{ service.title }}</h2>
            </div>
            <div class="service-body">
              <div class="service-image">
                <img :src="optimizeImageUrl(service.image, 600)" :alt="service.title" loading="lazy">
              </div>
              <div class="service-details">
                <p class="service-description">{{ service.description }}</p>
                
                <div class="service-benefits">
                  <h3>Manfaat untuk Anda:</h3>
                  <ul class="benefits-list">
                    <li v-for="(benefit, bIndex) in service.benefits" :key="bIndex">
                      <i class="fas fa-check-circle"></i>
                      <span>{{ benefit }}</span>
                    </li>
                  </ul>
                </div>

                <div class="service-features">
                  <h3>Yang Termasuk:</h3>
                  <ul class="features-list">
                    <li v-for="(feature, fIndex) in service.features" :key="fIndex">
                      <i class="fas fa-check"></i>
                      <span>{{ feature }}</span>
                    </li>
                  </ul>
                </div>

                <div class="service-cta">
                  <router-link :to="`/website/${projectId}/contact`" class="btn-primary">
                    <i class="fas fa-envelope"></i> Dapatkan Penawaran
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section section">
      <div class="container">
        <h2 class="section-title">Apa Kata Klien Kami</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card card" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-rating">
              <i class="fas fa-star" v-for="n in 5" :key="n"></i>
            </div>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <div class="testimonial-author">
              <strong>{{ testimonial.name }}</strong>
              <span>{{ testimonial.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Metrics -->
    <section class="metrics-section section section-alt">
      <div class="container">
        <h2 class="section-title">Metrik Kesuksesan Kami</h2>
        <div class="metrics-grid">
          <div class="metric-card" v-for="(metric, index) in metrics" :key="index">
            <div class="metric-value">{{ metric.value }}</div>
            <div class="metric-label">{{ metric.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Services / Cross-sell -->
    <section class="additional-section section">
      <div class="container">
        <h2 class="section-title">Layanan Tambahan</h2>
        <p class="section-description">Tingkatkan pengalaman Anda dengan layanan pelengkap ini</p>
        <div class="additional-grid">
          <div class="additional-card card" v-for="(item, index) in additionalServices" :key="index">
            <i :class="item.icon"></i>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <router-link :to="`/website/${projectId}/contact`" class="btn-secondary btn-small">
              Pelajari Lebih Lanjut
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section section section-alt">
      <div class="container">
        <div class="cta-content">
          <h2>Siap Memulai?</h2>
          <p>Hubungi kami hari ini untuk membahas kebutuhan Anda dan temukan bagaimana layanan kami dapat membantu Anda mencapai tujuan.</p>
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
  name: 'CompanyServices',
  props: {
    companyData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const route = useRoute()
    const projectId = computed(() => route.params.id)
    
    const services = computed(() => {
      const category = props.companyData?.category || 'general'
      
      if (category === 'fnb') {
        return [
          {
            title: 'Catering Services',
            description: 'Professional catering services for all your events, from intimate gatherings to large celebrations. We handle everything from menu planning to setup and cleanup.',
            image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop',
            benefits: [
              'Stress-free event planning',
              'Customized menus for your preferences',
              'Professional presentation',
              'On-time delivery and setup'
            ],
            features: ['Custom menu planning', 'Professional staff', 'Event setup & cleanup', 'Flexible pricing', 'Dietary accommodations']
          },
          {
            title: 'Restaurant Dining',
            description: 'Experience fine dining in our elegant restaurant with a menu featuring the finest ingredients. Perfect for business meetings, dates, or special occasions.',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop',
            benefits: [
              'Memorable dining experience',
              'High-quality ingredients',
              'Expert culinary team',
              'Elegant ambiance'
            ],
            features: ['Fine dining experience', 'Fresh ingredients', 'Expert chefs', 'Elegant ambiance', 'Reservation system']
          },
          {
            title: 'Takeaway & Delivery',
            description: 'Order your favorite dishes online and enjoy them at home with our fast delivery service. Available for lunch, dinner, and special occasions.',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop',
            benefits: [
              'Convenience at your doorstep',
              'Hot and fresh food',
              'Easy online ordering',
              'Fast delivery times'
            ],
            features: ['Online ordering', 'Fast delivery', 'Hot & fresh food', 'Easy payment', 'Order tracking']
          }
        ]
      } else if (category === 'umroh') {
        return [
          {
            title: 'Umroh Packages',
            description: 'Complete umroh travel packages with all-inclusive services for a spiritual journey. We handle all arrangements so you can focus on your ibadah.',
            image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&auto=format&fit=crop',
            benefits: [
              'Complete travel arrangements',
              'Peace of mind during journey',
              'Expert guidance',
              'Comfortable accommodations'
            ],
            features: ['Visa processing', 'Flight tickets', 'Hotel accommodation', 'Religious guide', 'Group coordination']
          },
          {
            title: 'Hajj Services',
            description: 'Professional hajj services with comprehensive support throughout your pilgrimage. We ensure everything is taken care of for a smooth journey.',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop',
            benefits: [
              'Complete documentation support',
              '24/7 assistance',
              'Medical support available',
              'Group coordination'
            ],
            features: ['Complete documentation', 'Group coordination', 'Medical support', '24/7 assistance', 'Pre-departure briefing']
          },
          {
            title: 'Religious Tours',
            description: 'Organized religious tours to holy sites with knowledgeable guides. Experience meaningful journeys with proper guidance and support.',
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop',
            benefits: [
              'Educational experience',
              'Spiritual guidance',
              'Cultural insights',
              'Safe and comfortable travel'
            ],
            features: ['Expert guides', 'Comfortable transport', 'Quality hotels', 'Cultural experiences', 'Itinerary planning']
          }
        ]
      } else if (category === 'travel') {
        return [
          {
            title: 'Paket Wisata',
            description: 'Paket wisata yang dipilih dengan cermat ke destinasi menakjubkan di seluruh dunia. Dari pengalaman budget-friendly hingga mewah, kami punya sesuatu untuk semua orang.',
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop',
            benefits: [
              'Destinasi terbaik',
              'Nilai terbaik untuk uang',
              'Perencanaan tanpa repot',
              'Pengalaman tak terlupakan'
            ],
            features: ['Destinasi terbaik', 'Itinerary fleksibel', 'Diskon grup', 'Perencanaan ahli', 'Dukungan 24/7']
          },
          {
            title: 'Pemesanan Hotel',
            description: 'Pesan hotel berkualitas dengan harga terbaik untuk kebutuhan perjalanan Anda. Kami bermitra dengan hotel terpercaya di seluruh dunia untuk menawarkan penawaran terbaik.',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop',
            benefits: [
              'Jaminan harga terbaik',
              'Akomodasi berkualitas',
              'Proses pemesanan mudah',
              'Pembatalan fleksibel'
            ],
            features: ['Harga terbaik', 'Hotel berkualitas', 'Pemesanan mudah', 'Dukungan 24/7', 'Jaminan harga']
          },
          {
            title: 'Konsultasi Perjalanan',
            description: 'Dapatkan saran ahli untuk merencanakan perjalanan sempurna Anda. Konsultan perjalanan kami membantu Anda membuat itinerary ideal berdasarkan preferensi dan budget Anda.',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop',
            benefits: [
              'Rekomendasi personal',
              'Optimasi budget',
              'Perencanaan hemat waktu',
              'Pengetahuan lokal ahli'
            ],
            features: ['Perencanaan personal', 'Optimasi budget', 'Tips perjalanan', 'Panduan destinasi', 'Konsultasi gratis']
          }
        ]
      } else if (category === 'it') {
        return [
          {
            title: 'Pengembangan Software',
            description: 'Layanan pengembangan aplikasi custom untuk berbagai platform. Dari web application hingga mobile app, kami menghadirkan solusi teknologi yang sesuai kebutuhan bisnis Anda.',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop',
            benefits: [
              'Aplikasi sesuai kebutuhan',
              'Teknologi terkini',
              'Skalabilitas tinggi',
              'Maintenance berkelanjutan'
            ],
            features: ['Web development', 'Mobile app development', 'API integration', 'Database design', 'Testing & QA']
          },
          {
            title: 'IT Support & Maintenance',
            description: 'Layanan dukungan IT 24/7 dan maintenance untuk memastikan sistem Anda berjalan lancar. Tim ahli kami siap membantu kapan saja Anda membutuhkan.',
            image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&auto=format&fit=crop',
            benefits: [
              'Dukungan 24/7',
              'Respon cepat',
              'Maintenance preventif',
              'Tim ahli berpengalaman'
            ],
            features: ['Helpdesk support', 'System monitoring', 'Regular maintenance', 'Quick response', 'SLA guarantee']
          },
          {
            title: 'Cloud & Infrastructure',
            description: 'Layanan cloud computing dan infrastruktur IT untuk mengoptimalkan operasional bisnis Anda. Dari migrasi cloud hingga optimasi server, kami siap membantu.',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop',
            benefits: [
              'Skalabilitas tinggi',
              'Biaya efisien',
              'Keamanan terjamin',
              'Backup & recovery'
            ],
            features: ['Cloud migration', 'Server optimization', 'Data backup', 'Security management', 'Disaster recovery']
          }
        ]
      }
      
      // Default services
      return [
        {
          title: 'Layanan Konsultasi',
          description: 'Konsultasi bisnis ahli untuk membantu Anda mencapai tujuan. Kami menyediakan saran strategis dan solusi yang dapat ditindaklanjuti.',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop',
          benefits: [
            'Wawasan strategis',
            'Bimbingan ahli',
            'Solusi yang disesuaikan',
            'Metodologi terbukti'
          ],
          features: ['Perencanaan strategis', 'Analisis bisnis', 'Saran ahli', 'Solusi custom', 'Dukungan berkelanjutan']
        },
        {
          title: 'Solusi Custom',
          description: 'Solusi yang dirancang khusus untuk kebutuhan bisnis Anda. Kami menciptakan pendekatan unik yang sesuai dengan persyaratan Anda.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop',
          benefits: [
            'Disesuaikan dengan kebutuhan',
            'Solusi yang dapat diskalakan',
            'Desain future-proof',
            'Keunggulan kompetitif'
          ],
          features: ['Pengembangan custom', 'Layanan integrasi', 'Dukungan berkelanjutan', 'Solusi scalable', 'Pelatihan disediakan']
        },
        {
          title: 'Dukungan & Maintenance',
          description: 'Layanan dukungan dan maintenance 24/7 untuk menjaga bisnis Anda berjalan lancar. Kami siap membantu kapan saja Anda membutuhkan.',
          image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&auto=format&fit=crop',
          benefits: [
            'Ketenteraman pikiran',
            'Resolusi masalah cepat',
            'Maintenance preventif',
            'Dukungan teknis ahli'
          ],
          features: ['Dukungan 24/7', 'Maintenance rutin', 'Respon cepat', 'Tim ahli', 'Jaminan SLA']
        }
      ]
    })
    
    const testimonials = computed(() => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return [
          { text: 'The catering service was exceptional! The food was delicious and the staff was professional. Highly recommended!', name: 'Sarah Johnson', role: 'Event Organizer' },
          { text: 'Best restaurant in town! The ambiance is perfect and the food quality is outstanding. Will definitely come back.', name: 'Michael Chen', role: 'Regular Customer' },
          { text: 'Fast delivery and the food arrived hot and fresh. The ordering process was so easy. Great service!', name: 'Emily Davis', role: 'Online Customer' }
        ]
      } else if (category === 'umroh' || category === 'travel') {
        return [
          { text: 'Our umroh journey was smooth and well-organized. The guide was knowledgeable and helpful throughout the trip.', name: 'Ahmad Rahman', role: 'Umroh Participant' },
          { text: 'Excellent travel agency! They handled everything professionally and made our vacation stress-free.', name: 'Lisa Anderson', role: 'Traveler' },
          { text: 'The hotel booking service was great. We got the best price and the hotel was exactly as described.', name: 'David Wilson', role: 'Business Traveler' }
        ]
      }
      return [
        { text: 'Outstanding consulting services! They helped us identify key opportunities and provided actionable strategies.', name: 'John Smith', role: 'CEO, Tech Company' },
        { text: 'The custom solution they built for us exceeded our expectations. Highly professional and reliable team.', name: 'Maria Garcia', role: 'Operations Manager' },
        { text: '24/7 support is a game-changer. They respond quickly and always solve our issues efficiently.', name: 'Robert Brown', role: 'IT Director' }
      ]
    })
    
    const metrics = [
      { value: '10,000+', label: 'Happy Clients' },
      { value: '98%', label: 'Satisfaction Rate' },
      { value: '15+', label: 'Years Experience' },
      { value: '500+', label: 'Projects Completed' }
    ]
    
    const additionalServices = computed(() => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return [
          { icon: 'fas fa-birthday-cake', title: 'Acara Khusus', description: 'Menu khusus untuk ulang tahun, pernikahan, dan perayaan lainnya' },
          { icon: 'fas fa-utensils', title: 'Konsultasi Menu', description: 'Saran ahli untuk perencanaan menu dan penyajian makanan' },
          { icon: 'fas fa-gift', title: 'Voucher Makanan', description: 'Hadiah sempurna untuk pecinta kuliner - tersedia dalam berbagai nominal' },
          { icon: 'fas fa-calendar-alt', title: 'Catering Bulanan', description: 'Paket catering bulanan untuk kebutuhan kantor atau keluarga' },
          { icon: 'fas fa-heart', title: 'Menu Khusus Diet', description: 'Menu khusus untuk kebutuhan diet, vegetarian, dan alergi makanan' },
          { icon: 'fas fa-users', title: 'Katering Kelompok', description: 'Layanan catering untuk kelompok besar dengan harga spesial' }
        ]
      } else if (category === 'umroh' || category === 'travel') {
        return [
          { icon: 'fas fa-passport', title: 'Layanan Visa', description: 'Bantuan pengurusan visa dan dokumen perjalanan' },
          { icon: 'fas fa-suitcase', title: 'Asuransi Perjalanan', description: 'Asuransi perjalanan komprehensif untuk ketenangan pikiran Anda' },
          { icon: 'fas fa-camera', title: 'Jasa Fotografi', description: 'Fotografi profesional untuk mengabadikan perjalanan Anda' },
          { icon: 'fas fa-book', title: 'Bimbingan Ibadah', description: 'Bimbingan ibadah dan panduan spiritual selama perjalanan' },
          { icon: 'fas fa-plane', title: 'Pemesanan Tiket', description: 'Layanan pemesanan tiket pesawat dengan harga terbaik' },
          { icon: 'fas fa-hotel', title: 'Reservasi Hotel', description: 'Bantuan reservasi hotel dengan akomodasi terbaik' }
        ]
      }
      return [
        { icon: 'fas fa-graduation-cap', title: 'Program Pelatihan', description: 'Pelatihan komprehensif untuk tim Anda' },
        { icon: 'fas fa-chart-bar', title: 'Analisis & Laporan', description: 'Wawasan mendalam dan metrik kinerja terperinci' },
        { icon: 'fas fa-tools', title: 'Integrasi Custom', description: 'Integrasi seamless dengan sistem yang sudah ada' },
        { icon: 'fas fa-headset', title: 'Dukungan Teknis', description: 'Dukungan teknis 24/7 untuk semua kebutuhan Anda' },
        { icon: 'fas fa-shield-alt', title: 'Keamanan Data', description: 'Layanan keamanan data dan backup otomatis' },
        { icon: 'fas fa-sync-alt', title: 'Maintenance Rutin', description: 'Pemeliharaan rutin untuk menjaga performa optimal' }
      ]
    })
    
    return {
      projectId,
      services,
      testimonials,
      metrics,
      additionalServices,
      optimizeImageUrl
    }
  }
}
</script>

<style scoped>
.company-services {
  width: 100%;
  min-height: 100vh;
}

.services-hero {
  background: linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%);
  color: #fff;
  text-align: center;
  padding: 100px 0;
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
}

.services-content {
  background: #f8f9fa;
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.service-item {
  padding: 0;
  overflow: hidden;
}

.service-header {
  background: linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%);
  color: #fff;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.service-number {
  font-size: 48px;
  font-weight: 700;
  opacity: 0.3;
}

.service-header h2 {
  font-size: 32px;
  color: #fff;
  margin: 0;
}

.service-body {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  padding: 40px;
}

.service-image {
  border-radius: 12px;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 300px;
}

.service-description {
  font-size: 18px;
  color: #64748b;
  line-height: 1.8;
  margin-bottom: 30px;
}

.service-benefits,
.service-features {
  margin-bottom: 30px;
}

.service-benefits h3,
.service-features h3 {
  font-size: 20px;
  color: #1e293b;
  margin-bottom: 15px;
  font-weight: 600;
}

.benefits-list,
.features-list {
  list-style: none;
  padding: 0;
}

.benefits-list li,
.features-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 0;
  color: #64748b;
}

.benefits-list li i,
.features-list li i {
  color: #0ea5e9;
  margin-top: 4px;
  flex-shrink: 0;
}

.service-cta {
  margin-top: 30px;
}

.testimonials-section {
  background: #ffffff;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.testimonial-card {
  padding: 30px;
}

.testimonial-rating {
  color: #ffc107;
  margin-bottom: 15px;
  font-size: 18px;
}

.testimonial-text {
  font-size: 16px;
  color: #64748b;
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 20px;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.testimonial-author strong {
  color: #1e293b;
  font-size: 16px;
}

.testimonial-author span {
  color: #64748b;
  font-size: 14px;
}

.metrics-section {
  background: #f8f9fa;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

.metric-card {
  text-align: center;
  padding: 30px 20px;
}

.metric-value {
  font-size: 48px;
  font-weight: 700;
  color: #0ea5e9;
  margin-bottom: 10px;
}

.metric-label {
  font-size: 16px;
  color: #64748b;
  font-weight: 500;
}

.additional-section {
  background: #ffffff;
}

.additional-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.additional-card {
  text-align: center;
  padding: 40px 30px;
}

.additional-card i {
  font-size: 48px;
  color: #0ea5e9;
  margin-bottom: 20px;
}

.additional-card h3 {
  font-size: 22px;
  color: #1e293b;
  margin-bottom: 15px;
}

.additional-card p {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 20px;
}

.btn-small {
  padding: 10px 20px;
  font-size: 14px;
}

.cta-section {
  background: linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%);
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
}

@media (max-width: 1024px) {
  .service-body {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 36px;
  }

  .service-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .service-header h2 {
    font-size: 24px;
  }

  .service-body {
    padding: 30px 20px;
  }

  .testimonials-grid,
  .additional-grid {
    grid-template-columns: 1fr;
  }

  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
