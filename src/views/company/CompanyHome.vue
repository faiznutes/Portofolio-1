<template>
  <div class="company-home">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">{{ companyData?.title }}</h1>
        <p class="hero-subtitle">{{ companyData?.description?.split('\n')[0] || 'Welcome to our company' }}</p>
        <div class="hero-buttons">
          <router-link :to="`/website/${projectId}/contact`" class="btn-primary">Contact Us</router-link>
          <router-link :to="`/website/${projectId}/services`" class="btn-secondary">Our Services</router-link>
        </div>
      </div>
      <div class="hero-image">
        <img :src="companyData?.image || 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop'" 
             :alt="companyData?.title" 
             loading="eager">
      </div>
    </section>

    <section class="features-section">
      <div class="container">
        <h2 class="section-title">Why Choose Us</h2>
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, index) in features" :key="index">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="services-preview">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <div class="services-grid">
          <div class="service-card" v-for="(service, index) in services" :key="index">
            <img :src="service.image" :alt="service.title" loading="lazy">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
        <div class="text-center">
          <router-link :to="`/website/${projectId}/services`" class="btn-primary">View All Services</router-link>
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
    
    // Features based on company type
    const features = computed(() => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return [
          { icon: '🍽️', title: 'Fresh Ingredients', description: 'We use only the freshest ingredients for our dishes' },
          { icon: '👨‍🍳', title: 'Expert Chefs', description: 'Our experienced chefs create delicious meals' },
          { icon: '🚚', title: 'Fast Delivery', description: 'Quick and reliable delivery service' },
          { icon: '⭐', title: 'Quality Service', description: 'Committed to providing excellent service' }
        ]
      } else if (category === 'travel' || category === 'umroh') {
        return [
          { icon: '✈️', title: 'Best Packages', description: 'Carefully curated travel packages' },
          { icon: '🕌', title: 'Religious Tours', description: 'Authentic religious travel experiences' },
          { icon: '🏨', title: 'Quality Hotels', description: 'Comfortable accommodations' },
          { icon: '👥', title: 'Expert Guides', description: 'Knowledgeable and friendly guides' }
        ]
      }
      return [
        { icon: '💼', title: 'Professional', description: 'Professional service you can trust' },
        { icon: '⚡', title: 'Fast Response', description: 'Quick response to your needs' },
        { icon: '🎯', title: 'Quality Focus', description: 'We focus on quality in everything' },
        { icon: '🤝', title: 'Trusted Partner', description: 'Your trusted business partner' }
      ]
    })
    
    const services = computed(() => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return [
          { title: 'Catering Services', description: 'Professional catering for events', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&auto=format&fit=crop' },
          { title: 'Restaurant Dining', description: 'Fine dining experience', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop' },
          { title: 'Takeaway & Delivery', description: 'Order online and get delivered', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop' }
        ]
      } else if (category === 'travel' || category === 'umroh') {
        return [
          { title: 'Umroh Packages', description: 'Complete umroh travel packages', image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&auto=format&fit=crop' },
          { title: 'Hajj Services', description: 'Professional hajj services', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop' },
          { title: 'Group Tours', description: 'Organized group travel', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&auto=format&fit=crop' }
        ]
      }
      return [
        { title: 'Consulting', description: 'Expert business consulting', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&auto=format&fit=crop' },
        { title: 'Solutions', description: 'Custom business solutions', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop' },
        { title: 'Support', description: '24/7 customer support', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&auto=format&fit=crop' }
      ]
    })
    
    return {
      projectId,
      features,
      services
    }
  }
}
</script>

<style scoped>
.company-home {
  width: 100%;
}

.hero-section {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 80px 40px;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 500px;
}

.hero-content {
  flex: 1;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 20px;
  color: var(--subtext-color);
  margin-bottom: 30px;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  padding: 14px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
  color: #fff;
  box-shadow: 0 4px 15px rgba(91, 143, 199, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(91, 143, 199, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
}

.btn-secondary:hover {
  background: var(--accent-color);
  color: #fff;
}

.hero-image {
  flex: 1;
  max-width: 600px;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  color: var(--text-color);
  text-align: center;
  margin-bottom: 50px;
}

.features-section {
  padding: 80px 0;
  background: linear-gradient(135deg, var(--section-bg) 0%, rgba(26, 35, 50, 0.8) 100%);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  background: linear-gradient(135deg, rgba(15, 20, 25, 0.6) 0%, rgba(26, 35, 50, 0.4) 100%);
  padding: 40px 30px;
  border-radius: 15px;
  text-align: center;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px var(--hover-shadow);
  border-color: var(--accent-color);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 22px;
  color: var(--text-color);
  margin-bottom: 15px;
}

.feature-card p {
  color: var(--subtext-color);
  line-height: 1.6;
}

.services-preview {
  padding: 80px 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.service-card {
  background: linear-gradient(135deg, var(--section-bg) 0%, rgba(26, 35, 50, 0.8) 100%);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px var(--hover-shadow);
}

.service-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.service-card h3 {
  font-size: 22px;
  color: var(--text-color);
  margin: 20px 20px 10px;
}

.service-card p {
  color: var(--subtext-color);
  margin: 0 20px 20px;
  line-height: 1.6;
}

.text-center {
  text-align: center;
}

@media (max-width: 1024px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 60px 20px;
  }

  .hero-image {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .section-title {
    font-size: 28px;
  }

  .features-grid,
  .services-grid {
    grid-template-columns: 1fr;
  }

  .container {
    padding: 0 20px;
  }
}
</style>

