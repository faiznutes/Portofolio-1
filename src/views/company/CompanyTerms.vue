<template>
  <div class="company-terms">
    <!-- Hero Section -->
    <section class="terms-hero section">
      <div class="container">
        <h1 class="page-title">Syarat & Ketentuan</h1>
        <p class="page-subtitle">Harap baca syarat dan ketentuan kami dengan seksama sebelum menggunakan layanan kami</p>
      </div>
    </section>

    <!-- Terms Content -->
    <section class="terms-content section section-alt">
      <div class="container">
        <div class="terms-intro">
          <p>Dengan mengakses dan menggunakan website dan layanan kami, Anda menerima dan menyetujui untuk terikat oleh syarat dan ketentuan perjanjian ini. Jika Anda tidak setuju dengan syarat-syarat ini, harap jangan menggunakan layanan kami.</p>
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
          <h2 class="section-title">Kebijakan Privasi</h2>
          <div class="privacy-content card">
            <p>Kami menghormati privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda ketika Anda menggunakan website dan layanan kami.</p>
            <ul>
              <li>Kami mengumpulkan informasi yang Anda berikan langsung kepada kami</li>
              <li>Kami menggunakan cookies dan teknologi serupa untuk meningkatkan pengalaman Anda</li>
              <li>Kami tidak menjual informasi pribadi Anda kepada pihak ketiga</li>
              <li>Kami menerapkan langkah-langkah keamanan untuk melindungi data Anda</li>
              <li>Anda berhak mengakses, memperbarui, atau menghapus informasi pribadi Anda</li>
            </ul>
          </div>
        </div>

        <!-- Cookies Policy -->
        <div class="cookies-section">
          <h2 class="section-title">Kebijakan Cookies</h2>
          <div class="cookies-content card">
            <p>Website kami menggunakan cookies untuk meningkatkan pengalaman menjelajah Anda dan menyediakan konten yang dipersonalisasi. Dengan melanjutkan penggunaan website kami, Anda menyetujui penggunaan cookies oleh kami.</p>
            <ul>
              <li><strong>Cookies Penting:</strong> Diperlukan agar website berfungsi dengan baik</li>
              <li><strong>Cookies Analitik:</strong> Membantu kami memahami bagaimana pengunjung berinteraksi dengan website kami</li>
              <li><strong>Cookies Preferensi:</strong> Mengingat pengaturan dan preferensi Anda</li>
            </ul>
            <p>Anda dapat mengelola preferensi cookie melalui pengaturan browser Anda.</p>
          </div>
        </div>

        <!-- Legal Information -->
        <div class="legal-section">
          <h2 class="section-title">Informasi Legal</h2>
          <div class="legal-content card">
            <div class="legal-item">
              <strong>Nama Perusahaan:</strong> {{ companyData?.title || 'Nama Perusahaan' }}
            </div>
            <div class="legal-item">
              <strong>Hukum yang Berlaku:</strong> Syarat-syarat ini diatur oleh hukum yurisdiksi di mana kami beroperasi.
            </div>
            <div class="legal-item">
              <strong>Penyelesaian Sengketa:</strong> Setiap sengketa yang timbul dari syarat-syarat ini akan diselesaikan melalui saluran hukum yang sesuai.
            </div>
          </div>
        </div>

        <!-- Contact for Questions -->
        <div class="terms-cta">
          <div class="cta-card card">
            <h3>Pertanyaan Tentang Syarat Kami?</h3>
            <p>Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, jangan ragu untuk menghubungi kami.</p>
            <router-link :to="`/website/${projectId}/contact`" class="btn-primary">
              <i class="fas fa-envelope"></i> Hubungi Kami
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
        title: '1. Penerimaan Syarat',
        description: 'Dengan mengakses dan menggunakan website ini, Anda menerima dan menyetujui untuk terikat oleh syarat dan ketentuan perjanjian ini. Jika Anda tidak setuju dengan syarat-syarat di atas, harap jangan menggunakan layanan ini.',
        items: []
      },
      {
        title: '2. Lisensi Penggunaan',
        description: 'Izin diberikan untuk sementara mengunduh satu salinan materi di website kami hanya untuk keperluan penayangan pribadi, non-komersial, dan sementara.',
        items: [
          'Ini adalah pemberian lisensi, bukan transfer kepemilikan',
          'Anda tidak boleh memodifikasi atau menyalin materi',
          'Anda tidak boleh menggunakan materi untuk tujuan komersial',
          'Anda tidak boleh menghapus hak cipta atau notasi kepemilikan lainnya',
          'Lisensi ini akan secara otomatis berakhir jika Anda melanggar salah satu pembatasan ini'
        ]
      },
      {
        title: '3. Penafian',
        description: 'Materi di website kami disediakan berdasarkan "sebagaimana adanya". Kami tidak memberikan jaminan, baik tersurat maupun tersirat, dan dengan ini menyangkal dan meniadakan semua jaminan lain termasuk, tanpa batasan, jaminan tersirat atau kondisi dapat diperdagangkan, kesesuaian untuk tujuan tertentu, atau tidak melanggar kekayaan intelektual atau pelanggaran hak lainnya.',
        items: []
      },
      {
        title: '4. Pembatasan',
        description: 'Dalam keadaan apapun, perusahaan kami atau pemasoknya tidak bertanggung jawab atas kerusakan apa pun (termasuk, tanpa batasan, kerusakan karena kehilangan data atau keuntungan, atau karena gangguan bisnis) yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan materi di website kami, bahkan jika kami atau perwakilan resmi kami telah diberitahu secara lisan atau tertulis tentang kemungkinan kerusakan tersebut.',
        items: []
      },
      {
        title: '5. Akurasi Materi',
        description: 'Materi yang muncul di website kami mungkin termasuk kesalahan teknis, tipografi, atau fotografi. Kami tidak menjamin bahwa materi di website kami akurat, lengkap, atau terkini. Kami dapat mengubah materi yang terdapat di website kami kapan saja tanpa pemberitahuan.',
        items: []
      },
      {
        title: '6. Tautan',
        description: 'Kami belum meninjau semua situs yang tertaut ke website kami dan tidak bertanggung jawab atas isi situs tertaut tersebut. Penyertaan tautan apa pun tidak menyiratkan dukungan kami terhadap situs tersebut. Penggunaan situs web tertaut tersebut adalah risiko pengguna sendiri.',
        items: []
      },
      {
        title: '7. Modifikasi',
        description: 'Kami dapat merevisi syarat layanan untuk website kami kapan saja tanpa pemberitahuan. Dengan menggunakan website ini, Anda menyetujui untuk terikat oleh versi syarat layanan yang berlaku saat ini.',
        items: []
      },
      {
        title: '8. Hak dan Kewajiban Pengguna',
        description: 'Sebagai pengguna layanan kami, Anda memiliki hak dan kewajiban tertentu:',
        items: [
          'Anda berhak mengakses dan menggunakan layanan kami sesuai dengan syarat ini',
          'Anda berkewajiban memberikan informasi yang akurat',
          'Anda tidak boleh menggunakan layanan kami untuk tujuan ilegal atau tidak sah',
          'Anda bertanggung jawab untuk menjaga kerahasiaan informasi akun Anda',
          'Anda harus segera memberi tahu kami tentang penggunaan akun yang tidak sah'
        ]
      },
      {
        title: '9. Hak dan Kewajiban Penyedia Layanan',
        description: 'Sebagai penyedia layanan, kami memiliki hak dan kewajiban tertentu:',
        items: [
          'Kami berhak memodifikasi atau menghentikan layanan kapan saja',
          'Kami berkomitmen untuk menyediakan layanan berkualitas seperti yang dijelaskan',
          'Kami akan mempertahankan langkah-langkah keamanan yang wajar untuk melindungi informasi Anda',
          'Kami berhak menolak layanan kepada siapa pun dengan alasan apa pun',
          'Kami akan memberikan dukungan dan bantuan seperti yang diuraikan dalam perjanjian layanan kami'
        ]
      },
      {
        title: '10. Hukum yang Berlaku',
        description: 'Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum yurisdiksi di mana kami beroperasi, dan Anda secara tidak dapat dibatalkan tunduk pada yurisdiksi eksklusif pengadilan di lokasi tersebut.',
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
  background: linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%);
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
  border-left: 4px solid #0ea5e9;
}

.terms-intro p {
  font-size: 18px;
  color: #64748b;
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
  color: #1e293b;
  margin-bottom: 20px;
  font-weight: 700;
}

.terms-section p {
  font-size: 16px;
  color: #64748b;
  line-height: 1.8;
  margin-bottom: 15px;
}

.terms-section ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.terms-section ul li {
  color: #64748b;
  padding: 12px 0;
  padding-left: 30px;
  position: relative;
  line-height: 1.6;
}

.terms-section ul li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #0ea5e9;
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
  color: #1e293b;
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
  color: #64748b;
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
  color: #0ea5e9;
  font-size: 20px;
}

.legal-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.legal-item {
  padding: 15px 0;
  border-bottom: 1px solid #e2e8f0;
  color: #64748b;
  line-height: 1.8;
}

.legal-item:last-child {
  border-bottom: none;
}

.legal-item strong {
  color: #1e293b;
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
  color: #1e293b;
  margin-bottom: 15px;
}

.cta-card p {
  font-size: 16px;
  color: #64748b;
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
