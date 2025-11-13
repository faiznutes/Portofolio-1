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
            title: 'Tour Packages',
            description: 'Carefully curated tour packages to amazing destinations around the world. From budget-friendly to luxury experiences, we have something for everyone.',
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop',
            benefits: [
              'Best destinations',
              'Value for money',
              'Hassle-free planning',
              'Memorable experiences'
            ],
            features: ['Best destinations', 'Flexible itineraries', 'Group discounts', 'Expert planning', '24/7 support']
          },
          {
            title: 'Hotel Booking',
            description: 'Book quality hotels at the best prices for your travel needs. We partner with trusted hotels worldwide to offer you the best deals.',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop',
            benefits: [
              'Best price guarantee',
              'Quality accommodations',
              'Easy booking process',
              'Flexible cancellation'
            ],
            features: ['Best prices', 'Quality hotels', 'Easy booking', '24/7 support', 'Price match guarantee']
          },
          {
            title: 'Travel Consultation',
            description: 'Get expert advice on planning your perfect trip. Our travel consultants help you create the ideal itinerary based on your preferences and budget.',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop',
            benefits: [
              'Personalized recommendations',
              'Budget optimization',
              'Time-saving planning',
              'Expert local knowledge'
            ],
            features: ['Personalized planning', 'Budget optimization', 'Travel tips', 'Destination guides', 'Free consultation']
          }
        ]
      }
      
      // Default services
      return [
        {
          title: 'Consulting Services',
          description: 'Expert business consulting to help you achieve your goals. We provide strategic advice and actionable solutions.',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop',
          benefits: [
            'Strategic insights',
            'Expert guidance',
            'Customized solutions',
            'Proven methodologies'
          ],
          features: ['Strategic planning', 'Business analysis', 'Expert advice', 'Custom solutions', 'Ongoing support']
        },
        {
          title: 'Custom Solutions',
          description: 'Tailored solutions designed specifically for your business needs. We create unique approaches that fit your requirements.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop',
          benefits: [
            'Tailored to your needs',
            'Scalable solutions',
            'Future-proof design',
            'Competitive advantage'
          ],
          features: ['Custom development', 'Integration services', 'Ongoing support', 'Scalable solutions', 'Training provided']
        },
        {
          title: 'Support & Maintenance',
          description: '24/7 support and maintenance services to keep your business running smoothly. We're here when you need us.',
          image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&auto=format&fit=crop',
          benefits: [
            'Peace of mind',
            'Quick problem resolution',
            'Preventive maintenance',
            'Expert technical support'
          ],
          features: ['24/7 support', 'Regular maintenance', 'Quick response', 'Expert team', 'SLA guarantee']
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
          { icon: 'fas fa-birthday-cake', title: 'Special Events', description: 'Custom menus for birthdays, anniversaries, and celebrations' },
          { icon: 'fas fa-utensils', title: 'Menu Consulting', description: 'Expert advice on menu planning and food presentation' },
          { icon: 'fas fa-gift', title: 'Gift Cards', description: 'Perfect gift for food lovers - available in various denominations' }
        ]
      } else if (category === 'umroh' || category === 'travel') {
        return [
          { icon: 'fas fa-passport', title: 'Visa Services', description: 'Assistance with visa applications and documentation' },
          { icon: 'fas fa-suitcase', title: 'Travel Insurance', description: 'Comprehensive travel insurance for your peace of mind' },
          { icon: 'fas fa-camera', title: 'Photography Services', description: 'Professional photography to capture your journey' }
        ]
      }
      return [
        { icon: 'fas fa-graduation-cap', title: 'Training Programs', description: 'Comprehensive training for your team' },
        { icon: 'fas fa-chart-bar', title: 'Analytics & Reporting', description: 'Detailed insights and performance metrics' },
        { icon: 'fas fa-tools', title: 'Custom Integration', description: 'Seamless integration with your existing systems' }
      ]
    })
    
    return {
      projectId,
      services,
      testimonials,
      metrics,
      additionalServices
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  color: #6c757d;
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
  color: #1a1a1a;
  margin-bottom: 15px;
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
  color: #6c757d;
}

.benefits-list li i,
.features-list li i {
  color: #2563eb;
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
  color: #6c757d;
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
  color: #1a1a1a;
  font-size: 16px;
}

.testimonial-author span {
  color: #6c757d;
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
  color: #2563eb;
  margin-bottom: 10px;
}

.metric-label {
  font-size: 16px;
  color: #6c757d;
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
  color: #2563eb;
  margin-bottom: 20px;
}

.additional-card h3 {
  font-size: 22px;
  color: #1a1a1a;
  margin-bottom: 15px;
}

.additional-card p {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 20px;
}

.btn-small {
  padding: 10px 20px;
  font-size: 14px;
}

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
