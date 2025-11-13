<template>
  <div class="company-home">
    <!-- Hero Section dengan Background Visual -->
    <section class="hero-section">
      <div class="hero-background">
        <img :src="companyData?.image || 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&auto=format&fit=crop'" 
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
              <i class="fas fa-envelope"></i> Get In Touch
            </router-link>
            <router-link :to="`/website/${projectId}/services`" class="btn-secondary">
              <i class="fas fa-briefcase"></i> Our Services
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Offer Section -->
    <section class="offer-section section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What We Offer</h2>
          <p class="section-description">{{ getOfferDescription() }}</p>
        </div>
        <div class="offer-grid">
          <div class="offer-card card" v-for="(offer, index) in offers" :key="index">
            <div class="offer-icon">{{ offer.icon }}</div>
            <h3>{{ offer.title }}</h3>
            <p>{{ offer.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section section section-alt">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Let's work together to achieve your goals. Contact us today and discover how we can help you.</p>
          <router-link :to="`/website/${projectId}/contact`" class="btn-primary btn-large">
            <i class="fas fa-paper-plane"></i> Contact Us Now
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
    
    const getHeroDescription = () => {
      const desc = props.companyData?.description || ''
      const firstLine = desc.split('\n')[0] || 'Welcome to our company'
      return firstLine.length > 150 ? firstLine.substring(0, 150) + '...' : firstLine
    }
    
    const getOfferDescription = () => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return 'We provide exceptional food and beverage services tailored to your needs, from fine dining to catering events.'
      } else if (category === 'umroh' || category === 'travel') {
        return 'Experience unforgettable journeys with our carefully curated travel packages and professional services.'
      }
      return 'We deliver comprehensive solutions designed to help your business grow and succeed.'
    }
    
    const heroInfo = computed(() => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return [
          { icon: 'fas fa-users', text: 'Serving Thousands' },
          { icon: 'fas fa-map-marker-alt', text: 'Multiple Locations' },
          { icon: 'fas fa-star', text: '5 Star Rated' }
        ]
      } else if (category === 'umroh' || category === 'travel') {
        return [
          { icon: 'fas fa-plane', text: 'Trusted Travel Partner' },
          { icon: 'fas fa-users', text: '10,000+ Happy Travelers' },
          { icon: 'fas fa-globe', text: 'Worldwide Coverage' }
        ]
      }
      return [
        { icon: 'fas fa-briefcase', text: 'Professional Service' },
        { icon: 'fas fa-clock', text: '24/7 Support' },
        { icon: 'fas fa-trophy', text: 'Award Winning' }
      ]
    })
    
    const offers = computed(() => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return [
          { icon: '🍽️', title: 'What We Serve', description: 'Delicious meals made with fresh, quality ingredients' },
          { icon: '👥', title: 'Who We Serve', description: 'Individuals, families, and businesses of all sizes' },
          { icon: '💡', title: 'How We Help', description: 'From menu planning to delivery, we handle everything' },
          { icon: '📍', title: 'Where We Are', description: 'Serving customers across multiple locations' }
        ]
      } else if (category === 'umroh' || category === 'travel') {
        return [
          { icon: '✈️', title: 'What We Offer', description: 'Complete travel packages and religious tours' },
          { icon: '👥', title: 'Who We Serve', description: 'Individuals, families, and groups seeking spiritual journeys' },
          { icon: '💡', title: 'How We Help', description: 'From visa processing to guided tours, we make it easy' },
          { icon: '🌍', title: 'Where We Go', description: 'Destinations worldwide with trusted partners' }
        ]
      }
      return [
        { icon: '💼', title: 'What We Do', description: 'Professional services and solutions' },
        { icon: '👥', title: 'Who We Serve', description: 'Businesses looking to grow and succeed' },
        { icon: '💡', title: 'How We Help', description: 'Customized solutions tailored to your needs' },
        { icon: '📍', title: 'Where We Operate', description: 'Serving clients globally' }
      ]
    })
    
    return {
      projectId,
      getHeroDescription,
      getOfferDescription,
      heroInfo,
      offers
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

/* Offer Section */
.offer-section {
  background: #ffffff;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 42px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 15px;
}

.section-description {
  font-size: 18px;
  color: #6c757d;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
}

.offer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.offer-card {
  text-align: center;
  padding: 40px 30px;
}

.offer-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.offer-card h3 {
  font-size: 22px;
  color: #1a1a1a;
  margin-bottom: 15px;
  font-weight: 600;
}

.offer-card p {
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

  .offer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
