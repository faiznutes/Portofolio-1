<template>
  <footer class="company-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>{{ companyName }}</h3>
          <p>{{ companyDescription }}</p>
        </div>
        
        <div class="footer-section">
          <h4>Navigasi</h4>
          <ul class="footer-links">
            <li><router-link :to="`/website/${projectId}`">Home</router-link></li>
            <li><router-link :to="`/website/${projectId}/about`">About</router-link></li>
            <li><router-link :to="`/website/${projectId}/services`">Services</router-link></li>
            <li><router-link :to="`/website/${projectId}/gallery`">Gallery</router-link></li>
            <li><router-link :to="`/website/${projectId}/contact`">Contact</router-link></li>
            <li><router-link :to="`/website/${projectId}/terms`">Terms</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Kontak</h4>
          <p>Hubungi kami untuk informasi lebih lanjut</p>
          <router-link :to="`/website/${projectId}/contact`" class="footer-cta">
            Hubungi Kami
          </router-link>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} {{ companyName }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'CompanyFooter',
  props: {
    projectId: {
      type: String,
      required: true
    },
    companyName: {
      type: String,
      required: true
    },
    companyDescription: {
      type: String,
      default: 'Layanan profesional yang dapat Anda percaya.'
    }
  },
  setup() {
    const currentYear = computed(() => new Date().getFullYear())
    
    return {
      currentYear
    }
  }
}
</script>

<style scoped>
.company-footer {
  background: #1e293b;
  color: #e2e8f0;
  padding: 60px 200px 20px;
  margin-top: auto;
}

@media (max-width: 1400px) {
  .company-footer {
    padding: 60px 100px 20px;
  }
}

@media (max-width: 1024px) {
  .company-footer {
    padding: 60px 40px 20px;
  }
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3 {
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 15px;
  font-weight: 700;
}

.footer-section h4 {
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 600;
}

.footer-section p {
  color: #94a3b8;
  line-height: 1.6;
  font-size: 15px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 15px;
  transition: color 0.3s ease;
  display: inline-block;
}

.footer-links a:hover {
  color: #0ea5e9;
  transform: translateX(5px);
}

.footer-cta {
  display: inline-block;
  margin-top: 15px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%);
  color: #ffffff;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.footer-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);
}

.footer-bottom {
  border-top: 1px solid #334155;
  padding-top: 20px;
  text-align: center;
}

.footer-bottom p {
  color: #94a3b8;
  font-size: 14px;
  margin: 0;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .company-footer {
    padding: 40px 20px 20px;
  }
}
</style>

