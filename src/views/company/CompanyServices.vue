<template>
  <div class="company-services">
    <section class="services-hero">
      <div class="container">
        <h1 class="page-title">Our Services</h1>
        <p class="page-subtitle">Comprehensive solutions tailored to your needs</p>
      </div>
    </section>

    <section class="services-content">
      <div class="container">
        <div class="services-list">
          <div class="service-item" v-for="(service, index) in services" :key="index">
            <div class="service-image">
              <img :src="service.image" :alt="service.title" loading="lazy">
            </div>
            <div class="service-details">
              <h2>{{ service.title }}</h2>
              <p>{{ service.description }}</p>
              <ul class="service-features">
                <li v-for="(feature, fIndex) in service.features" :key="fIndex">{{ feature }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'CompanyServices',
  props: {
    companyData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const services = computed(() => {
      const category = props.companyData?.category || 'general'
      
      if (category === 'fnb') {
        return [
          {
            title: 'Catering Services',
            description: 'Professional catering services for all your events, from intimate gatherings to large celebrations.',
            image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop',
            features: ['Custom menu planning', 'Professional staff', 'Event setup & cleanup', 'Flexible pricing']
          },
          {
            title: 'Restaurant Dining',
            description: 'Experience fine dining in our elegant restaurant with a menu featuring the finest ingredients.',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop',
            features: ['Fine dining experience', 'Fresh ingredients', 'Expert chefs', 'Elegant ambiance']
          },
          {
            title: 'Takeaway & Delivery',
            description: 'Order your favorite dishes online and enjoy them at home with our fast delivery service.',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop',
            features: ['Online ordering', 'Fast delivery', 'Hot & fresh food', 'Easy payment']
          }
        ]
      } else if (category === 'umroh') {
        return [
          {
            title: 'Umroh Packages',
            description: 'Complete umroh travel packages with all-inclusive services for a spiritual journey.',
            image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&auto=format&fit=crop',
            features: ['Visa processing', 'Flight tickets', 'Hotel accommodation', 'Religious guide']
          },
          {
            title: 'Hajj Services',
            description: 'Professional hajj services with comprehensive support throughout your pilgrimage.',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop',
            features: ['Complete documentation', 'Group coordination', 'Medical support', '24/7 assistance']
          },
          {
            title: 'Religious Tours',
            description: 'Organized religious tours to holy sites with knowledgeable guides.',
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop',
            features: ['Expert guides', 'Comfortable transport', 'Quality hotels', 'Cultural experiences']
          }
        ]
      } else if (category === 'travel') {
        return [
          {
            title: 'Tour Packages',
            description: 'Carefully curated tour packages to amazing destinations around the world.',
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop',
            features: ['Best destinations', 'Flexible itineraries', 'Group discounts', 'Expert planning']
          },
          {
            title: 'Hotel Booking',
            description: 'Book quality hotels at the best prices for your travel needs.',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop',
            features: ['Best prices', 'Quality hotels', 'Easy booking', '24/7 support']
          },
          {
            title: 'Travel Consultation',
            description: 'Get expert advice on planning your perfect trip.',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop',
            features: ['Personalized planning', 'Budget optimization', 'Travel tips', 'Destination guides']
          }
        ]
      }
      
      // Default services
      return [
        {
          title: 'Consulting Services',
          description: 'Expert business consulting to help you achieve your goals.',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop',
          features: ['Strategic planning', 'Business analysis', 'Expert advice', 'Custom solutions']
        },
        {
          title: 'Custom Solutions',
          description: 'Tailored solutions designed specifically for your business needs.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop',
          features: ['Custom development', 'Integration services', 'Ongoing support', 'Scalable solutions']
        },
        {
          title: 'Support & Maintenance',
          description: '24/7 support and maintenance services to keep your business running smoothly.',
          image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&auto=format&fit=crop',
          features: ['24/7 support', 'Regular maintenance', 'Quick response', 'Expert team']
        }
      ]
    })
    
    return { services }
  }
}
</script>

<style scoped>
.company-services {
  width: 100%;
  min-height: 100vh;
}

.services-hero {
  background: linear-gradient(135deg, var(--section-bg) 0%, rgba(26, 35, 50, 0.8) 100%);
  padding: 80px 0 60px;
  text-align: center;
}

.page-title {
  font-size: 48px;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 15px;
}

.page-subtitle {
  font-size: 20px;
  color: var(--subtext-color);
}

.services-content {
  padding: 80px 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.service-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  background: linear-gradient(135deg, var(--section-bg) 0%, rgba(26, 35, 50, 0.8) 100%);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.service-item:nth-child(even) {
  direction: rtl;
}

.service-item:nth-child(even) > * {
  direction: ltr;
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px var(--hover-shadow);
  border-color: var(--accent-color);
}

.service-image {
  overflow: hidden;
  border-radius: 15px;
}

.service-image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.service-item:hover .service-image img {
  transform: scale(1.05);
}

.service-details h2 {
  font-size: 32px;
  color: var(--text-color);
  margin-bottom: 15px;
}

.service-details p {
  font-size: 16px;
  color: var(--subtext-color);
  line-height: 1.8;
  margin-bottom: 20px;
}

.service-features {
  list-style: none;
  padding: 0;
}

.service-features li {
  color: var(--subtext-color);
  padding: 10px 0;
  padding-left: 25px;
  position: relative;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: bold;
}

@media (max-width: 1024px) {
  .service-item {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .service-item:nth-child(even) {
    direction: ltr;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 32px;
  }

  .service-details h2 {
    font-size: 24px;
  }

  .container {
    padding: 0 20px;
  }

  .service-item {
    padding: 30px 20px;
  }
}
</style>

