<template>
  <div class="about-page">
    <section class="about2-section">
      <h2 class="skills-title">Tentang Saya</h2>
      <div class="about2-content">
        <div class="about2-image">
          <img src="/assets/images/1000121680.png" alt="Foto Faiz Nute">
        </div>

        <div class="about2-text">
          <h2>Muhamad Faiz A aka Faiznute</h2>
          <p>
            Saya adalah seorang <strong>Graphic Designer</strong> dan <strong>Video Editor</strong> dengan gaya visual modern dan elegan.  
            Selain itu, saya juga aktif sebagai <strong>operator streaming</strong> dan <strong>live content creator di TikTok</strong> yang berfokus pada kualitas visual dan pengalaman interaktif.
          </p>

          <h3>🎓 Pendidikan</h3>
          <ul>
            <li>SMK Negeri 12 Surabaya — Seni Rupa</li>
            <li>SMP Negeri 29 Surabaya</li>
          </ul>

          <h3>💼 Pengalaman Kerja</h3>
          <ul>
            <li><strong>Freelance (2021 Januari - Sekarang)</strong><br>Mengelola media sosial, membuat desain grafis, dan desain undangan web pernikahan secara freelance.</li>
            <li><strong>PT Symphony Kreasi Indonesia (2024 Juni - Sekarang)</strong><br>Bekerja sebagai desainer grafis, editor video, digital marketing, operator streaming TikTok, talent manager, dan content manager.</li>
            <li><strong>PT Ethnic Indonesia Pusaka (2023 November - 2024 Juni)</strong><br>Membuat desain grafis, mengedit video, dan menangani digital marketing untuk promosi produk.</li>
            <li><strong>Professional Motorsport (2022 Desember - 2023 November)</strong><br>Sebagai desainer grafis, admin penjualan, sales marketing, dan digital marketing untuk industri motorsport.</li>
            <li><strong>Fitto Bike Indonesia (2021 Desember - 2022 Desember)</strong><br>Membuat desain grafis dan mengelola media sosial untuk promosi sepeda dan produk terkait.</li>
            <li><strong>CV Kado Impian Indonesia (2019 September - 2020 September)</strong><br>Membuat desain grafis untuk kartu ucapan dan produk kado dengan gaya kreatif dan menarik.</li>
            <li><strong>CV Alam Raya Boga (2019 April - 2019 September)</strong><br>Bekerja sebagai frontliner dan kurir untuk penjualan makanan dan pengiriman pesanan.</li>
            <li><strong>Badan Pertanahan Nasional (2018 September - 2018 Desember)</strong><br>Mengoperasikan scanner untuk pemindaian dokumen pertanahan dan administrasi terkait.</li>
          </ul>

          <h3>🧠 Keahlian</h3>
          <div class="skills-list">
            <div class="skill-item" v-for="skill in skills" :key="skill.name">
              <span>{{ skill.name }}</span>
              <div class="skill-progress">
                <div class="progress-bar" :style="{ width: skill.progress + '%' }"></div>
              </div>
            </div>
          </div>

          <h3>🌐 Bahasa</h3>
          <div class="languages-list">
            <div class="skill-item" v-for="lang in languages" :key="lang.name">
              <span>{{ lang.name }}</span>
              <div class="skill-progress">
                <div class="progress-bar" :style="{ width: lang.progress + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  setup() {
    const skills = [
      { name: 'Adobe Photoshop', progress: 75 },
      { name: 'Adobe Illustrator', progress: 90 },
      { name: 'Adobe Premiere Pro', progress: 90 },
      { name: 'After Effects', progress: 50 },
      { name: 'Branding Design', progress: 75 },
      { name: 'Motion Graphics', progress: 50 },
      { name: 'Streaming Setup', progress: 95 }
    ]

    const languages = [
      { name: 'Indonesian', progress: 100 },
      { name: 'English', progress: 80 }
    ]

    return {
      skills,
      languages
    }
  }
}
</script>

<style scoped>
.about-page {
  width: 100%;
}
</style>

