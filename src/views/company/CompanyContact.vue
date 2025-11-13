<template>
  <div class="company-contact">
    <section class="contact-hero">
      <div class="container">
        <h1 class="page-title">Contact Us</h1>
        <p class="page-subtitle">Get in touch with us</p>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            
            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">📍</div>
                <div>
                  <h3>Address</h3>
                  <p>123 Business Street<br>City, Country 12345</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">📞</div>
                <div>
                  <h3>Phone</h3>
                  <p>+62 123 456 7890</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">✉️</div>
                <div>
                  <h3>Email</h3>
                  <p>info@company.com</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">🕒</div>
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form-wrapper">
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">Name *</label>
                <input type="text" id="name" v-model="form.name" required>
              </div>
              
              <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" id="email" v-model="form.email" required>
              </div>
              
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" v-model="form.phone">
              </div>
              
              <div class="form-group">
                <label for="subject">Subject *</label>
                <input type="text" id="subject" v-model="form.subject" required>
              </div>
              
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea id="message" v-model="form.message" rows="5" required></textarea>
              </div>
              
              <button type="submit" class="btn-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CompanyContact',
  setup() {
    const form = ref({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    
    const handleSubmit = () => {
      alert('Thank you for your message! We will get back to you soon.')
      form.value = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
    
    return {
      form,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.company-contact {
  width: 100%;
  min-height: 100vh;
}

.contact-hero {
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

.contact-content {
  padding: 80px 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.contact-info h2 {
  font-size: 32px;
  color: var(--text-color);
  margin-bottom: 15px;
}

.contact-info > p {
  font-size: 16px;
  color: var(--subtext-color);
  line-height: 1.8;
  margin-bottom: 40px;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.info-icon {
  font-size: 32px;
  width: 50px;
  flex-shrink: 0;
}

.info-item h3 {
  font-size: 20px;
  color: var(--text-color);
  margin-bottom: 8px;
}

.info-item p {
  font-size: 15px;
  color: var(--subtext-color);
  line-height: 1.6;
}

.contact-form-wrapper {
  background: linear-gradient(135deg, var(--section-bg) 0%, rgba(26, 35, 50, 0.8) 100%);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  color: var(--text-color);
  font-weight: 500;
  font-size: 14px;
}

.form-group input,
.form-group textarea {
  padding: 12px;
  background: linear-gradient(135deg, rgba(15, 20, 25, 0.6) 0%, rgba(26, 35, 50, 0.4) 100%);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-color);
  font-size: 14px;
  font-family: inherit;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(91, 143, 199, 0.1);
}

.btn-submit {
  padding: 14px 30px;
  background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
  color: #fff;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(91, 143, 199, 0.3);
  margin-top: 10px;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(91, 143, 199, 0.4);
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 32px;
  }

  .contact-info h2 {
    font-size: 24px;
  }

  .container {
    padding: 0 20px;
  }

  .contact-form-wrapper {
    padding: 30px 20px;
  }
}
</style>

