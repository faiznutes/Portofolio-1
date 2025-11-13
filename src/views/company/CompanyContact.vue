<template>
  <div class="company-contact">
    <!-- Hero Section -->
    <section class="contact-hero section">
      <div class="container">
        <h1 class="page-title">Hubungi Kami</h1>
        <p class="page-subtitle">Daftar sekarang atau konsultasi gratis untuk perjalanan suci Anda</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section section">
      <div class="container">
        <div class="contact-wrapper">
          <!-- Contact Form -->
          <div class="contact-form-wrapper">
            <h2>Form Pendaftaran</h2>
            <p class="form-description">Isi form di bawah ini dan tim kami akan menghubungi Anda segera.</p>
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <label for="name">Nama Lengkap *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  required
                  placeholder="Masukkan nama lengkap"
                >
              </div>
              <div class="form-group">
                <label for="phone">No. WhatsApp *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone"
                  required
                  placeholder="08xxxxxxxxxx"
                >
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  placeholder="nama@email.com"
                >
              </div>
              <div class="form-group">
                <label for="package">Paket yang Diminati</label>
                <select id="package" v-model="form.package">
                  <option value="">Pilih Paket</option>
                  <option value="umroh-regular">Umroh Regular</option>
                  <option value="umroh-plus-turki">Umroh Plus Turki</option>
                  <option value="haji-khusus">Haji Khusus</option>
                  <option value="konsultasi">Konsultasi Gratis</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Pesan</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  rows="5"
                  placeholder="Tuliskan pertanyaan atau informasi yang ingin Anda ketahui..."
                ></textarea>
              </div>
              <button type="submit" class="btn-primary btn-full" :disabled="submitting">
                <i class="fas fa-paper-plane"></i>
                {{ submitting ? 'Mengirim...' : 'Kirim Pesan' }}
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info-wrapper">
            <h2>Informasi Kontak</h2>
            <div class="contact-info">
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="info-content">
                  <h3>Telepon / WhatsApp</h3>
                  <a href="https://wa.me/6285155043133" target="_blank">+62 851-5504-3133</a>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="info-content">
                  <h3>Email</h3>
                  <a href="mailto:info@barokahjourney.com">info@barokahjourney.com</a>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="info-content">
                  <h3>Alamat</h3>
                  <p>Jl. Raya Jakarta No. 123<br>Jakarta Selatan, 12345</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="info-content">
                  <h3>Jam Operasional</h3>
                  <p>Senin - Jumat: 09:00 - 17:00 WIB<br>Sabtu: 09:00 - 13:00 WIB</p>
                </div>
              </div>
            </div>
            <div class="social-links">
              <h3>Ikuti Kami</h3>
              <div class="social-icons">
                <a href="https://instagram.com/barokahjourney" target="_blank" class="social-icon">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://facebook.com/barokahjourney" target="_blank" class="social-icon">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="https://youtube.com/barokahjourney" target="_blank" class="social-icon">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
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
  props: {
    companyData: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const submitting = ref(false)
    const form = ref({
      name: '',
      phone: '',
      email: '',
      package: '',
      message: ''
    })
    
    const handleSubmit = async () => {
      submitting.value = true
      
      // Format WhatsApp message
      const packageNames = {
        'umroh-regular': 'Umroh Regular',
        'umroh-plus-turki': 'Umroh Plus Turki',
        'haji-khusus': 'Haji Khusus',
        'konsultasi': 'Konsultasi Gratis'
      }
      
      const packageText = form.value.package ? packageNames[form.value.package] || form.value.package : 'Belum memilih paket'
      
      const message = `Halo, saya ${form.value.name} ingin mendaftar untuk paket ${packageText}.\n\n` +
        `No. WhatsApp: ${form.value.phone}\n` +
        (form.value.email ? `Email: ${form.value.email}\n` : '') +
        (form.value.message ? `Pesan: ${form.value.message}` : '')
      
      // Encode message for WhatsApp
      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/6285155043133?text=${encodedMessage}`
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank')
      
      // Reset form after a delay
      setTimeout(() => {
        form.value = {
          name: '',
          phone: '',
          email: '',
          package: '',
          message: ''
        }
        submitting.value = false
        alert('Terima kasih! Kami akan segera menghubungi Anda melalui WhatsApp.')
      }, 1000)
    }
    
    return {
      form,
      submitting,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.company-contact {
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

/* Hero Section */
.contact-hero {
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

/* Contact Section */
.contact-section {
  background: var(--cp-bg-primary, #ffffff);
}

.contact-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
  align-items: flex-start;
}

.contact-form-wrapper,
.contact-info-wrapper {
  flex: 1 1 500px;
  min-width: 300px;
}

.contact-form-wrapper h2,
.contact-info-wrapper h2 {
  font-size: 32px;
  color: var(--cp-text-primary, #0a1a2f);
  margin-bottom: 16px;
  font-weight: 700;
}

.form-description {
  font-size: 16px;
  color: var(--cp-text-secondary, #334155);
  margin-bottom: 32px;
  line-height: 1.7;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 16px;
  color: var(--cp-text-primary, #0a1a2f);
  font-weight: 600;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 14px 18px;
  border: 2px solid var(--cp-border, rgba(212, 175, 55, 0.2));
  border-radius: 12px;
  font-size: 16px;
  color: var(--cp-text-primary, #0a1a2f);
  background: var(--cp-bg-primary, #ffffff);
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--cp-accent, #d4af37);
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
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
.section:not(.contact-hero):not(.cta-section) .btn-primary {
  background: linear-gradient(135deg, #f4d03f 0%, #d4af37 100%);
  color: #0a1a2f;
  box-shadow: 0 4px 16px rgba(212, 175, 55, 0.4);
  border: 2px solid rgba(212, 175, 55, 0.3);
  font-weight: 700;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(212, 175, 55, 0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-full {
  width: 100%;
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 48px;
}

.info-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.info-icon {
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
  border-radius: 12px;
  color: #0a1a2f;
  font-size: 24px;
}

.info-content h3 {
  font-size: 18px;
  color: var(--cp-text-primary, #0a1a2f);
  margin-bottom: 8px;
  font-weight: 600;
}

.info-content a {
  color: var(--cp-accent, #d4af37);
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.info-content a:hover {
  color: var(--cp-accent-hover, #b8941f);
}

.info-content p {
  color: var(--cp-text-secondary, #334155);
  font-size: 16px;
  line-height: 1.7;
  margin: 0;
}

.social-links {
  padding-top: 32px;
  border-top: 2px solid var(--cp-border, rgba(212, 175, 55, 0.2));
}

.social-links h3 {
  font-size: 20px;
  color: var(--cp-text-primary, #0a1a2f);
  margin-bottom: 20px;
  font-weight: 600;
}

.social-icons {
  display: flex;
  gap: 16px;
}

.social-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cp-bg-secondary, #faf9f6);
  border: 2px solid var(--cp-border, rgba(212, 175, 55, 0.2));
  border-radius: 12px;
  color: var(--cp-accent, #d4af37);
  font-size: 20px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
  color: #0a1a2f;
  border-color: var(--cp-accent, #d4af37);
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 1024px) {
  .page-title {
    font-size: 48px;
  }
  
  .section {
    padding: 80px 0;
  }
  
  .contact-wrapper {
    flex-direction: column;
  }
  
  .contact-form-wrapper,
  .contact-info-wrapper {
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
  
  .contact-hero {
    padding: 80px 0;
  }
  
  .contact-form-wrapper h2,
  .contact-info-wrapper h2 {
    font-size: 28px;
  }
  
  .contact-wrapper {
    gap: 48px;
  }
}
</style>
