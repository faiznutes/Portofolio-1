<template>
  <div class="company-terms">
    <section class="terms-hero">
      <div class="container">
        <h1 class="page-title">Terms & Conditions</h1>
        <p class="page-subtitle">Please read our terms and conditions carefully</p>
      </div>
    </section>

    <section class="terms-content">
      <div class="container">
        <div class="terms-sections">
          <div class="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </div>

          <div class="terms-section">
            <h2>2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.</p>
            <ul>
              <li>This is the grant of a license, not a transfer of title</li>
              <li>You may not modify or copy the materials</li>
              <li>You may not use the materials for any commercial purpose</li>
              <li>You may not remove any copyright or other proprietary notations</li>
            </ul>
          </div>

          <div class="terms-section">
            <h2>3. Disclaimer</h2>
            <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </div>

          <div class="terms-section">
            <h2>4. Limitations</h2>
            <p>In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.</p>
          </div>

          <div class="terms-section">
            <h2>5. Accuracy of Materials</h2>
            <p>The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current.</p>
          </div>

          <div class="terms-section">
            <h2>6. Links</h2>
            <p>We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site.</p>
          </div>

          <div class="terms-section">
            <h2>7. Modifications</h2>
            <p>We may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
          </div>

          <div class="terms-section">
            <h2>8. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CompanyTerms'
}
</script>

<style scoped>
.company-terms {
  width: 100%;
  min-height: 100vh;
}

.terms-hero {
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

.terms-content {
  padding: 80px 0;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
}

.terms-sections {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.terms-section {
  background: linear-gradient(135deg, var(--section-bg) 0%, rgba(26, 35, 50, 0.8) 100%);
  padding: 40px;
  border-radius: 15px;
  border: 1px solid var(--border-color);
}

.terms-section h2 {
  font-size: 28px;
  color: var(--text-color);
  margin-bottom: 20px;
}

.terms-section p {
  font-size: 16px;
  color: var(--subtext-color);
  line-height: 1.8;
  margin-bottom: 15px;
}

.terms-section ul {
  list-style: none;
  padding: 0;
  margin: 15px 0;
}

.terms-section ul li {
  color: var(--subtext-color);
  padding: 10px 0;
  padding-left: 25px;
  position: relative;
  line-height: 1.6;
}

.terms-section ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-size: 20px;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 32px;
  }

  .terms-section h2 {
    font-size: 24px;
  }

  .container {
    padding: 0 20px;
  }

  .terms-section {
    padding: 30px 20px;
  }
}
</style>

