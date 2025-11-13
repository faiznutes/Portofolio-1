<template>
  <div class="company-terms">
    <!-- Hero Section -->
    <section class="terms-hero section">
      <div class="container">
        <h1 class="page-title">Terms & Conditions</h1>
        <p class="page-subtitle">Please read our terms and conditions carefully before using our services</p>
      </div>
    </section>

    <!-- Terms Content -->
    <section class="terms-content section section-alt">
      <div class="container">
        <div class="terms-intro">
          <p>By accessing and using this website and our services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.</p>
        </div>

        <div class="terms-sections">
          <div class="terms-section card" v-for="(term, index) in terms" :key="index">
            <h2>{{ term.title }}</h2>
            <p>{{ term.description }}</p>
            <ul v-if="term.items && term.items.length > 0">
              <li v-for="(item, iIndex) in term.items" :key="iIndex">{{ item }}</li>
            </ul>
          </div>
        </div>

        <!-- Privacy Policy Section -->
        <div class="privacy-section">
          <h2 class="section-title">Privacy Policy</h2>
          <div class="privacy-content card">
            <p>We respect your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and safeguard your data when you use our website and services.</p>
            <ul>
              <li>We collect information that you provide directly to us</li>
              <li>We use cookies and similar technologies to enhance your experience</li>
              <li>We do not sell your personal information to third parties</li>
              <li>We implement security measures to protect your data</li>
              <li>You have the right to access, update, or delete your personal information</li>
            </ul>
          </div>
        </div>

        <!-- Cookies Policy -->
        <div class="cookies-section">
          <h2 class="section-title">Cookies Policy</h2>
          <div class="cookies-content card">
            <p>Our website uses cookies to improve your browsing experience and provide personalized content. By continuing to use our website, you consent to our use of cookies.</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p>You can manage your cookie preferences through your browser settings.</p>
          </div>
        </div>

        <!-- Legal Information -->
        <div class="legal-section">
          <h2 class="section-title">Legal Information</h2>
          <div class="legal-content card">
            <div class="legal-item">
              <strong>Company Name:</strong> {{ companyData?.title || 'Company Name' }}
            </div>
            <div class="legal-item">
              <strong>Governing Law:</strong> These terms are governed by the laws of the jurisdiction in which we operate.
            </div>
            <div class="legal-item">
              <strong>Dispute Resolution:</strong> Any disputes arising from these terms will be resolved through appropriate legal channels.
            </div>
          </div>
        </div>

        <!-- Contact for Questions -->
        <div class="terms-cta">
          <div class="cta-card card">
            <h3>Questions About Our Terms?</h3>
            <p>If you have any questions about these terms and conditions, please don't hesitate to contact us.</p>
            <router-link :to="`/website/${projectId}/contact`" class="btn-primary">
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
  name: 'CompanyTerms',
  props: {
    companyData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const route = useRoute()
    const projectId = computed(() => route.params.id)
    
    const terms = [
      {
        title: '1. Acceptance of Terms',
        description: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
        items: []
      },
      {
        title: '2. Use License',
        description: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.',
        items: [
          'This is the grant of a license, not a transfer of title',
          'You may not modify or copy the materials',
          'You may not use the materials for any commercial purpose',
          'You may not remove any copyright or other proprietary notations',
          'This license shall automatically terminate if you violate any of these restrictions'
        ]
      },
      {
        title: '3. Disclaimer',
        description: 'The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
        items: []
      },
      {
        title: '4. Limitations',
        description: 'In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.',
        items: []
      },
      {
        title: '5. Accuracy of Materials',
        description: 'The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.',
        items: []
      },
      {
        title: '6. Links',
        description: 'We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user\'s own risk.',
        items: []
      },
      {
        title: '7. Modifications',
        description: 'We may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.',
        items: []
      },
      {
        title: '8. User Rights and Obligations',
        description: 'As a user of our services, you have certain rights and obligations:',
        items: [
          'You have the right to access and use our services in accordance with these terms',
          'You are obligated to provide accurate information',
          'You must not use our services for any illegal or unauthorized purpose',
          'You are responsible for maintaining the confidentiality of your account information',
          'You must notify us immediately of any unauthorized use of your account'
        ]
      },
      {
        title: '9. Service Provider Rights and Obligations',
        description: 'As a service provider, we have certain rights and obligations:',
        items: [
          'We reserve the right to modify or discontinue services at any time',
          'We are committed to providing quality services as described',
          'We will maintain reasonable security measures to protect your information',
          'We reserve the right to refuse service to anyone for any reason',
          'We will provide support and assistance as outlined in our service agreements'
        ]
      },
      {
        title: '10. Governing Law',
        description: 'These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which we operate, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.',
        items: []
      }
    ]
    
    return {
      projectId,
      terms
    }
  }
}
</script>

<style scoped>
.company-terms {
  width: 100%;
  min-height: 100vh;
}

.terms-hero {
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

.terms-content {
  background: #f8f9fa;
}

.terms-intro {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 40px;
  border-left: 4px solid #2563eb;
}

.terms-intro p {
  font-size: 18px;
  color: #6c757d;
  line-height: 1.8;
  margin: 0;
}

.terms-sections {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 60px;
}

.terms-section {
  padding: 35px;
}

.terms-section h2 {
  font-size: 28px;
  color: #1a1a1a;
  margin-bottom: 20px;
  font-weight: 700;
}

.terms-section p {
  font-size: 16px;
  color: #6c757d;
  line-height: 1.8;
  margin-bottom: 15px;
}

.terms-section ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.terms-section ul li {
  color: #6c757d;
  padding: 12px 0;
  padding-left: 30px;
  position: relative;
  line-height: 1.6;
}

.terms-section ul li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #2563eb;
  font-weight: bold;
  font-size: 18px;
}

.privacy-section,
.cookies-section,
.legal-section {
  margin-bottom: 50px;
}

.section-title {
  font-size: 32px;
  color: #1a1a1a;
  margin-bottom: 25px;
  font-weight: 700;
}

.privacy-content,
.cookies-content,
.legal-content {
  padding: 35px;
}

.privacy-content ul,
.cookies-content ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.privacy-content ul li,
.cookies-content ul li {
  color: #6c757d;
  padding: 10px 0;
  padding-left: 25px;
  position: relative;
  line-height: 1.6;
}

.privacy-content ul li::before,
.cookies-content ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #2563eb;
  font-size: 20px;
}

.legal-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.legal-item {
  padding: 15px 0;
  border-bottom: 1px solid #e5e7eb;
  color: #6c757d;
  line-height: 1.8;
}

.legal-item:last-child {
  border-bottom: none;
}

.legal-item strong {
  color: #1a1a1a;
  display: block;
  margin-bottom: 5px;
}

.terms-cta {
  margin-top: 60px;
}

.cta-card {
  text-align: center;
  padding: 50px 40px;
}

.cta-card h3 {
  font-size: 28px;
  color: #1a1a1a;
  margin-bottom: 15px;
}

.cta-card p {
  font-size: 16px;
  color: #6c757d;
  margin-bottom: 25px;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 36px;
  }

  .terms-section h2 {
    font-size: 24px;
  }

  .section-title {
    font-size: 28px;
  }

  .terms-section,
  .privacy-content,
  .cookies-content,
  .legal-content {
    padding: 25px 20px;
  }

  .cta-card {
    padding: 40px 25px;
  }
}
</style>
