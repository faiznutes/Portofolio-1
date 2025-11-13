<template>
  <div class="company-about">
    <section class="about-hero">
      <div class="container">
        <h1 class="page-title">About Us</h1>
        <p class="page-subtitle">Learn more about our company and mission</p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <h2>Our Story</h2>
            <p>{{ companyData?.longDescription || companyData?.description || 'We are a dedicated company committed to providing excellent services to our clients.' }}</p>
            
            <h2>Our Mission</h2>
            <p>To deliver exceptional value and service quality that exceeds our clients' expectations while maintaining the highest standards of professionalism and integrity.</p>
            
            <h2>Our Vision</h2>
            <p>To become a leading company in our industry, recognized for innovation, quality, and customer satisfaction.</p>
          </div>
          <div class="about-image">
            <img :src="companyData?.image || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop'" 
                 :alt="companyData?.title" 
                 loading="lazy">
          </div>
        </div>

        <div class="values-section">
          <h2 class="section-title">Our Values</h2>
          <div class="values-grid">
            <div class="value-card" v-for="(value, index) in values" :key="index">
              <div class="value-icon">{{ value.icon }}</div>
              <h3>{{ value.title }}</h3>
              <p>{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CompanyAbout',
  props: {
    companyData: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const values = [
      { icon: '🎯', title: 'Excellence', description: 'We strive for excellence in everything we do' },
      { icon: '🤝', title: 'Integrity', description: 'Honesty and transparency in all our dealings' },
      { icon: '💡', title: 'Innovation', description: 'Continuously improving and innovating' },
      { icon: '❤️', title: 'Customer Focus', description: 'Our customers are at the heart of everything' }
    ]
    
    return { values }
  }
}
</script>

<style scoped>
.company-about {
  width: 100%;
  min-height: 100vh;
}

.about-hero {
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

.about-content {
  padding: 80px 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
  margin-bottom: 80px;
}

.about-text h2 {
  font-size: 32px;
  color: var(--text-color);
  margin: 40px 0 20px;
}

.about-text h2:first-child {
  margin-top: 0;
}

.about-text p {
  font-size: 16px;
  color: var(--subtext-color);
  line-height: 1.8;
  margin-bottom: 30px;
}

.about-image {
  position: sticky;
  top: 100px;
}

.about-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.values-section {
  margin-top: 60px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  color: var(--text-color);
  text-align: center;
  margin-bottom: 50px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.value-card {
  background: linear-gradient(135deg, var(--section-bg) 0%, rgba(26, 35, 50, 0.8) 100%);
  padding: 40px 30px;
  border-radius: 15px;
  text-align: center;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px var(--hover-shadow);
  border-color: var(--accent-color);
}

.value-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.value-card h3 {
  font-size: 22px;
  color: var(--text-color);
  margin-bottom: 15px;
}

.value-card p {
  color: var(--subtext-color);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-image {
    position: static;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 32px;
  }

  .about-text h2 {
    font-size: 24px;
  }

  .section-title {
    font-size: 28px;
  }

  .container {
    padding: 0 20px;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>

