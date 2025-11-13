<template>
  <div class="company-about">
    <!-- Hero Section -->
    <section class="about-hero section">
      <div class="container">
        <h1 class="page-title">About Us</h1>
        <p class="page-subtitle">Learn more about our company, mission, and values</p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mission-section section section-alt">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-card card">
            <div class="mission-icon">🎯</div>
            <h2>Our Mission</h2>
            <p>To deliver exceptional value and service quality that exceeds our clients' expectations while maintaining the highest standards of professionalism and integrity. We are committed to building lasting relationships and creating positive impact in everything we do.</p>
          </div>
          <div class="mission-card card">
            <div class="mission-icon">👁️</div>
            <h2>Our Vision</h2>
            <p>To become a leading company in our industry, recognized for innovation, quality, and customer satisfaction. We envision a future where our services set the standard for excellence and inspire others in the industry.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="story-section section">
      <div class="container">
        <div class="story-content">
          <h2 class="section-title">Our Story</h2>
          <div class="story-text">
            <p>{{ companyData?.longDescription || companyData?.description || 'We are a dedicated company committed to providing excellent services to our clients. Our journey began with a simple vision: to deliver quality and value in everything we do.' }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="values-section section section-alt">
      <div class="container">
        <h2 class="section-title">Our Core Values</h2>
        <div class="values-grid">
          <div class="value-card card" v-for="(value, index) in values" :key="index">
            <div class="value-icon">{{ value.icon }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Target Market & Advantages -->
    <section class="market-section section">
      <div class="container">
        <div class="market-content">
          <h2 class="section-title">Who We Serve</h2>
          <p class="section-description">{{ getTargetMarket() }}</p>
          
          <h2 class="section-title" style="margin-top: 60px;">Our Advantages</h2>
          <div class="advantages-grid">
            <div class="advantage-item" v-for="(advantage, index) in advantages" :key="index">
              <i :class="advantage.icon"></i>
              <h3>{{ advantage.title }}</h3>
              <p>{{ advantage.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section section section-alt">
      <div class="container">
        <h2 class="section-title">Our Team</h2>
        <p class="section-description">Meet the dedicated professionals behind our success</p>
        <div class="team-grid">
          <div class="team-card card" v-for="(member, index) in teamMembers" :key="index">
            <div class="team-avatar">{{ member.avatar }}</div>
            <h3>{{ member.name }}</h3>
            <p class="team-role">{{ member.role }}</p>
            <p class="team-bio">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section section">
      <div class="container">
        <div class="cta-content">
          <h2>Want to Know More?</h2>
          <p>Discover our services and see how we can help you achieve your goals.</p>
          <div class="cta-buttons">
            <router-link :to="`/website/${projectId}/services`" class="btn-primary">
              <i class="fas fa-briefcase"></i> View Services
            </router-link>
            <router-link :to="`/website/${projectId}/contact`" class="btn-secondary">
              <i class="fas fa-envelope"></i> Contact Us
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
      { icon: '🎯', title: 'Excellence', description: 'We strive for excellence in everything we do, setting high standards and continuously improving.' },
      { icon: '🤝', title: 'Integrity', description: 'Honesty and transparency guide all our actions and business relationships.' },
      { icon: '💡', title: 'Innovation', description: 'We embrace new ideas and technologies to stay ahead and deliver better solutions.' },
      { icon: '❤️', title: 'Customer Focus', description: 'Our customers are at the heart of everything we do, and their success is our priority.' }
    ]
    
    const getTargetMarket = () => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return 'We serve individuals, families, corporate clients, and event organizers looking for exceptional food and beverage experiences. Our services cater to those who value quality, taste, and professional service.'
      } else if (category === 'umroh' || category === 'travel') {
        return 'We serve individuals, families, and groups seeking meaningful travel experiences. Our services are designed for those planning religious journeys, vacations, or business trips who value reliability and quality service.'
      }
      return 'We serve businesses of all sizes looking to grow, improve efficiency, and achieve their goals. Our services are tailored for companies that value professionalism, innovation, and results.'
    }
    
    const advantages = computed(() => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return [
          { icon: 'fas fa-leaf', title: 'Fresh Ingredients', description: 'We source only the finest, freshest ingredients for our dishes' },
          { icon: 'fas fa-award', title: 'Award-Winning', description: 'Recognized for excellence in food quality and service' },
          { icon: 'fas fa-clock', title: 'Fast Service', description: 'Quick preparation and delivery without compromising quality' },
          { icon: 'fas fa-heart', title: 'Passionate Team', description: 'Our chefs and staff are passionate about creating memorable experiences' }
        ]
      } else if (category === 'umroh' || category === 'travel') {
        return [
          { icon: 'fas fa-certificate', title: 'Licensed & Certified', description: 'Fully licensed travel agency with certified guides' },
          { icon: 'fas fa-shield-alt', title: 'Trusted Partner', description: 'Years of experience serving thousands of satisfied travelers' },
          { icon: 'fas fa-handshake', title: 'Best Prices', description: 'Competitive pricing with no hidden fees' },
          { icon: 'fas fa-headset', title: '24/7 Support', description: 'Round-the-clock assistance during your journey' }
        ]
      }
      return [
        { icon: 'fas fa-users', title: 'Expert Team', description: 'Experienced professionals with proven track records' },
        { icon: 'fas fa-rocket', title: 'Innovative Solutions', description: 'Cutting-edge approaches to solve your business challenges' },
        { icon: 'fas fa-chart-line', title: 'Proven Results', description: 'Track record of delivering measurable business outcomes' },
        { icon: 'fas fa-handshake', title: 'Partnership Approach', description: 'We work as your partner, not just a service provider' }
      ]
    })
    
    const teamMembers = [
      {
        avatar: '👤',
        name: 'Leadership Team',
        role: 'Management',
        bio: 'Experienced professionals leading our company with vision and dedication.'
      },
      {
        avatar: '👥',
        name: 'Expert Staff',
        role: 'Operations',
        bio: 'Skilled team members committed to delivering exceptional service.'
      },
      {
        avatar: '💼',
        name: 'Support Team',
        role: 'Customer Service',
        bio: 'Dedicated to ensuring your satisfaction and success.'
      }
    ]
    
    return {
      projectId,
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

.about-hero {
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

.mission-section {
  background: #f8f9fa;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
}

.mission-card {
  text-align: center;
  padding: 50px 40px;
}

.mission-icon {
  font-size: 64px;
  margin-bottom: 25px;
}

.mission-card h2 {
  font-size: 28px;
  color: #1a1a1a;
  margin-bottom: 20px;
}

.mission-card p {
  color: #6c757d;
  line-height: 1.8;
  font-size: 16px;
}

.story-section {
  background: #ffffff;
}

.story-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.story-text p {
  font-size: 18px;
  line-height: 1.8;
  color: #6c757d;
}

.values-section {
  background: #f8f9fa;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.value-card {
  text-align: center;
  padding: 40px 30px;
}

.value-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.value-card h3 {
  font-size: 22px;
  color: #1a1a1a;
  margin-bottom: 15px;
}

.value-card p {
  color: #6c757d;
  line-height: 1.6;
}

.market-section {
  background: #ffffff;
}

.market-content {
  text-align: center;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.advantage-item {
  text-align: center;
  padding: 30px 20px;
}

.advantage-item i {
  font-size: 40px;
  color: #2563eb;
  margin-bottom: 20px;
}

.advantage-item h3 {
  font-size: 20px;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.advantage-item p {
  color: #6c757d;
  line-height: 1.6;
}

.team-section {
  background: #f8f9fa;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.team-card {
  text-align: center;
  padding: 40px 30px;
}

.team-avatar {
  font-size: 64px;
  margin-bottom: 20px;
}

.team-card h3 {
  font-size: 22px;
  color: #1a1a1a;
  margin-bottom: 5px;
}

.team-role {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 16px;
}

.team-bio {
  color: #6c757d;
  line-height: 1.6;
  font-size: 15px;
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

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 36px;
  }

  .mission-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 32px;
  }

  .advantages-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
