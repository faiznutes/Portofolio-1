<template>
  <div class="company-contact">
    <!-- Hero Section -->
    <section class="contact-hero section">
      <div class="container">
        <h1 class="page-title">Hubungi Kami</h1>
        <p class="page-subtitle">Hubungi kami - Kami siap membantu Anda</p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content section section-alt">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Hubungi Kami</h2>
            <p>Kami senang mendengar dari Anda. Kirimkan pesan kepada kami dan kami akan merespons secepat mungkin. Tim kami siap membantu Anda dengan pertanyaan atau permintaan apa pun.</p>
            
            <div class="info-items">
              <div class="info-item card">
                <div class="info-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3>Alamat</h3>
                  <p>123 Business Street<br>City, Country 12345</p>
                </div>
              </div>
              
              <div class="info-item card">
                <div class="info-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div>
                  <h3>Telepon</h3>
                  <p><a href="tel:+621234567890">+62 123 456 7890</a></p>
                </div>
              </div>
              
              <div class="info-item card">
                <div class="info-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:info@company.com">info@company.com</a></p>
                </div>
              </div>
              
              <div class="info-item card">
                <div class="info-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div>
                  <h3>Jam Operasional</h3>
                  <p>Senin - Jumat: 09:00 - 18:00<br>Sabtu: 10:00 - 16:00<br>Minggu: Tutup</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form-wrapper card">
            <h2>Kirimkan Pesan kepada Kami</h2>
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">Nama *</label>
                <input type="text" id="name" v-model="form.name" required placeholder="Nama lengkap Anda">
              </div>
              
              <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" id="email" v-model="form.email" required placeholder="email@contoh.com">
              </div>
              
              <div class="form-group">
                <label for="phone">Telepon</label>
                <input type="tel" id="phone" v-model="form.phone" placeholder="+62 123 456 7890">
              </div>
              
              <div class="form-group">
                <label for="subject">Subjek *</label>
                <input type="text" id="subject" v-model="form.subject" required placeholder="Mengenai apa?">
              </div>
              
              <div class="form-group">
                <label for="message">Pesan *</label>
                <textarea id="message" v-model="form.message" rows="5" required placeholder="Beritahu kami bagaimana kami dapat membantu Anda..."></textarea>
              </div>
              
              <button type="submit" class="btn-submit">
                <i class="fas fa-paper-plane"></i> Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section section">
      <div class="container">
        <h2 class="section-title">Find Us</h2>
        <div class="map-container">
          <div class="map-placeholder">
            <i class="fas fa-map-marked-alt"></i>
            <p>Map Location</p>
            <span>123 Business Street, City, Country 12345</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section section section-alt">
      <div class="container">
        <div class="cta-content">
          <h2>Lebih Suka Menelepon?</h2>
          <p>Tim kami tersedia selama jam operasional untuk membantu Anda.</p>
          <a href="tel:+621234567890" class="btn-primary btn-large">
            <i class="fas fa-phone"></i> Hubungi Kami Sekarang
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'CompanyContact',
  setup() {
    const route = useRoute()
    const projectId = route.params.id
    
    const form = ref({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    
    const handleSubmit = () => {
      alert('Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda kembali.')
      form.value = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
    
    return {
      projectId,
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

.contact-content {
  background: #f8f9fa;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}

.contact-info h2 {
  font-size: 36px;
  color: #1a1a1a;
  margin-bottom: 15px;
}

.contact-info > p {
  font-size: 18px;
  color: #6c757d;
  line-height: 1.8;
  margin-bottom: 40px;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 25px;
}

.info-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border-radius: 12px;
  flex-shrink: 0;
  font-size: 20px;
}

.info-item h3 {
  font-size: 20px;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.info-item p {
  font-size: 15px;
  color: #6c757d;
  line-height: 1.6;
  margin: 0;
}

.info-item a {
  color: #2563eb;
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-item a:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

.contact-form-wrapper {
  padding: 40px;
}

.contact-form-wrapper h2 {
  font-size: 28px;
  color: #1a1a1a;
  margin-bottom: 30px;
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
  color: #1a1a1a;
  font-weight: 600;
  font-size: 14px;
}

.form-group input,
.form-group textarea {
  padding: 14px;
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  color: #1a1a1a;
  font-size: 15px;
  font-family: inherit;
  transition: all 0.3s ease;
  width: 100%;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #9ca3af;
}

.btn-submit {
  padding: 16px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 16px;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
}

.map-section {
  background: #ffffff;
}

.map-container {
  margin-top: 40px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.map-placeholder {
  background: #f8f9fa;
  padding: 80px 20px;
  text-align: center;
  color: #6c757d;
}

.map-placeholder i {
  font-size: 64px;
  color: #dee2e6;
  margin-bottom: 20px;
}

.map-placeholder p {
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.map-placeholder span {
  font-size: 16px;
  color: #6c757d;
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
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 36px;
  }

  .contact-info h2,
  .contact-form-wrapper h2 {
    font-size: 28px;
  }

  .info-item {
    padding: 20px;
  }

  .contact-form-wrapper {
    padding: 30px 20px;
  }

  .map-placeholder {
    padding: 60px 20px;
  }
}

@media (max-width: 480px) {
  .info-item {
    flex-direction: column;
    text-align: center;
  }

  .info-icon {
    margin: 0 auto;
  }
}
</style>
