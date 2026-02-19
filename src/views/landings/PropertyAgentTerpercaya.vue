<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-blue-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <div class="flex items-center gap-3">
          <div class="p-2 bg-blue-100 rounded-lg">
            <span class="material-symbols-outlined text-2xl text-blue-700">home_work</span>
          </div>
          <span class="text-xl font-bold text-blue-900">Properti Terpercaya</span>
        </div>
        <nav class="hidden md:flex items-center gap-8">
          <a href="#" class="text-sm font-semibold text-blue-900 hover:text-blue-600 transition-colors">Panduan Beli</a>
          <a href="#" class="text-sm font-semibold text-blue-900 hover:text-blue-600 transition-colors">Properti Kami</a>
          <a href="#" class="text-sm font-semibold text-blue-900 hover:text-blue-600 transition-colors">Edukasi</a>
          <a href="#" class="text-sm font-semibold text-blue-900 hover:text-blue-600 transition-colors">FAQ</a>
        </nav>
        <button class="hidden md:block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-600/20">
          Konsultasi Gratis
        </button>
        <button class="md:hidden text-blue-900"><span class="material-symbols-outlined">menu</span></button>
      </div>
    </header>

    <!-- Hero with Trust Theme -->
    <section class="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-12">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-400/10"></div>
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-15"></div>
      
      <div class="relative z-10 w-full max-w-5xl px-4">
        <div class="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-700 text-xs font-bold rounded-full border border-blue-200">
          ✓ TERPERCAYA SEJAK 12 TAHUN
        </div>
        
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-950 leading-tight mb-6">
          Panduan Lengkap <span class="text-blue-600">Beli Rumah</span> Aman
        </h1>
        
        <p class="text-lg md:text-xl text-blue-800 mb-10 max-w-3xl leading-relaxed font-medium">
          Kami membantu ribuan keluarga menemukan rumah impian mereka dengan proses yang transparan, aman, dan terpercaya. Dapatkan edukasi gratis tentang investasi properti.
        </p>

        <div class="bg-white border-l-4 border-blue-600 rounded-lg p-8 shadow-lg max-w-lg mb-8">
          <div class="flex items-start gap-4">
            <span class="material-symbols-outlined text-blue-600 text-3xl flex-shrink-0 mt-1">verified</span>
            <div>
              <h3 class="font-bold text-blue-900 mb-2">Proses Aman 4 Tahap</h3>
              <p class="text-sm text-blue-700">Verifikasi dokumen → Negosiasi → Survey → Serah Terima | Semua dipandu langsung oleh kami</p>
            </div>
          </div>
        </div>

        <button class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30">
          Mulai Konsultasi
        </button>
      </div>
    </section>

    <!-- 4-Step Guide Section -->
    <section class="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-blue-950 text-center mb-20">4 Langkah Mudah Membeli Properti</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="relative">
            <div class="bg-white rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-600 transition-all">
              <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
              <h3 class="text-xl font-bold text-blue-950 mb-3">Konsultasi Kebutuhan</h3>
              <p class="text-blue-700 text-sm leading-relaxed">Tim ahli kami mendengarkan kebutuhan, budget, dan lokasi idaman Anda untuk menemukan properti yang cocok.</p>
            </div>
            <div class="hidden md:block absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-blue-600 border-4 border-blue-50 -translate-y-1/2"></div>
          </div>

          <div class="relative">
            <div class="bg-white rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-600 transition-all">
              <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h3 class="text-xl font-bold text-blue-950 mb-3">Verifikasi Dokumen</h3>
              <p class="text-blue-700 text-sm leading-relaxed">Kami memverifikasi semua dokumen properti untuk memastikan legalitas dan mencegah risiko sengketa tanah.</p>
            </div>
            <div class="hidden md:block absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-blue-600 border-4 border-blue-50 -translate-y-1/2"></div>
          </div>

          <div class="relative">
            <div class="bg-white rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-600 transition-all">
              <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
              <h3 class="text-xl font-bold text-blue-950 mb-3">Negosiasi Harga</h3>
              <p class="text-blue-700 text-sm leading-relaxed">Kami melakukan negosiasi untuk mendapatkan harga terbaik sesuai kondisi pasar dan nilai properti.</p>
            </div>
            <div class="hidden md:block absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-blue-600 border-4 border-blue-50 -translate-y-1/2"></div>
          </div>

          <div class="relative">
            <div class="bg-white rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-600 transition-all">
              <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">4</div>
              <h3 class="text-xl font-bold text-blue-950 mb-3">Serah Terima</h3>
              <p class="text-blue-700 text-sm leading-relaxed">Proses notaris, pencatatan, dan serah terima properti dilakukan dengan aman dan transparan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Properties -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-blue-950 text-center mb-12">Properti Rekomendasi</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl overflow-hidden border border-blue-200 hover:border-blue-600 hover:shadow-xl transition-all">
            <div class="relative aspect-[4/3] overflow-hidden bg-blue-100">
              <span class="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">TERSEDIA</span>
              <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&auto=format&crop=center" alt="Rumah keluarga modern" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700"/>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-blue-950 mb-2">Rumah Keluarga Aman Bintaro</h3>
              <p class="text-2xl font-bold text-blue-600 mb-4">Rp 890 Juta</p>
              <p class="text-sm text-blue-700 mb-4">Area aman dengan keamanan 24 jam, dekat  sekolah dan pusat perbelanjaan.</p>
              <div class="flex gap-3 text-blue-600 text-sm font-semibold border-t border-blue-100 pt-4">
                <div><span class="material-symbols-outlined text-base">bed</span> 3 KT</div>
                <div><span class="material-symbols-outlined text-base">square_foot</span> 150m²</div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl overflow-hidden border border-blue-200 hover:border-blue-600 hover:shadow-xl transition-all">
            <div class="relative aspect-[4/3] overflow-hidden bg-blue-100">
              <span class="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">BEST DEAL</span>
              <img src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&auto=format&crop=center" alt="Apartemen nyaman" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700"/>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-blue-950 mb-2">Apartemen Modern Kemayoran</h3>
              <p class="text-2xl font-bold text-blue-600 mb-4">Rp 475 Juta</p>
              <p class="text-sm text-blue-700 mb-4">Unit baru dengan fasilitas lengkap, lokasi strategis dekat kantor dan mall.</p>
              <div class="flex gap-3 text-blue-600 text-sm font-semibold border-t border-blue-100 pt-4">
                <div><span class="material-symbols-outlined text-base">bed</span> 2 KT</div>
                <div><span class="material-symbols-outlined text-base">square_foot</span> 68m²</div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl overflow-hidden border border-blue-200 hover:border-blue-600 hover:shadow-xl transition-all">
            <div class="relative aspect-[4/3] overflow-hidden bg-blue-100">
              <span class="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">INVESTASI</span>
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&auto=format&crop=center" alt="Townhouse premium" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700"/>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-blue-950 mb-2">Townhouse Premium Puri</h3>
              <p class="text-2xl font-bold text-blue-600 mb-4">Rp 1.2 Miliar</p>
              <p class="text-sm text-blue-700 mb-4">Investasi menguntungkan dengan potensi rental tinggi dan apresiasi tahunan stabil.</p>
              <div class="flex gap-3 text-blue-600 text-sm font-semibold border-t border-blue-100 pt-4">
                <div><span class="material-symbols-outlined text-base">bed</span> 4 KT</div>
                <div><span class="material-symbols-outlined text-base">square_foot</span> 180m²</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 px-4 bg-blue-50">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-blue-950 text-center mb-16">Pertanyaan Sering Diajukan</h2>
        <div class="space-y-4">
          <details class="group p-6 bg-white rounded-xl border border-blue-200 hover:border-blue-600 transition-all cursor-pointer">
            <summary class="flex justify-between items-center font-bold text-blue-950">
              <span>Berapa lama proses beli rumah dari awal hingga serah terima?</span>
              <span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p class="text-blue-700 mt-4 leading-relaxed">Rata-rata proses memakan waktu 3-6 bulan tergantung kelancaran verifikasi dokumen dan negosiasi. Kami memandu setiap tahapan untuk mempercepat prosesnya.</p>
          </details>

          <details class="group p-6 bg-white rounded-xl border border-blue-200 hover:border-blue-600 transition-all cursor-pointer">
            <summary class="flex justify-between items-center font-bold text-blue-950">
              <span>Apa saja dokumen yang harus kami persiapkan?</span>
              <span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p class="text-blue-700 mt-4 leading-relaxed">Dokumen penting: KTP, NPWP, Buku Tabungan, Surat Nikah (jika telah menikah), Slip Gaji, dan Surat Keterangan Kerja. Kami akan memandu Anda lengkap.</p>
          </details>

          <details class="group p-6 bg-white rounded-xl border border-blue-200 hover:border-blue-600 transition-all cursor-pointer">
            <summary class="flex justify-between items-center font-bold text-blue-950">
              <span>Bagaimana cara mengajukan KPR?</span>
              <span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p class="text-blue-700 mt-4 leading-relaxed">Kami memiliki kerjasama dengan berbagai bank. Setelah properti dipilih, kami bantu proses verifikasi kelayakan KPR ke bank. Bunga kompetitif mulai 3.5% per tahun.</p>
          </details>

          <details class="group p-6 bg-white rounded-xl border border-blue-200 hover:border-blue-600 transition-all cursor-pointer">
            <summary class="flex justify-between items-center font-bold text-blue-950">
              <span>Apakah ada biaya tersembunyi?</span>
              <span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p class="text-blue-700 mt-4 leading-relaxed">TIDAK. Semua biaya dijelaskan transparent di awal: PPN, Notaris, Pajak Balik Nama, dan Uji Tanah. Tidak ada biaya mendadak atau tersembunyi.</p>
          </details>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 px-4 text-center text-white">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Siap Memulai Perjalanan Memiliki Rumah?</h2>
      <p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto">Hubungi konsultan kami hari ini untuk mendapatkan konsultasi gratis tanpa kewajiban apapun.</p>
      <button class="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105">
        Hubungi Sekarang
      </button>
    </section>

    <!-- Back Button -->
    <router-link to="/projects" 
      class="fixed bottom-6 right-6 z-30 w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
      title="Kembali ke Projects">
      <span class="material-symbols-outlined text-2xl">arrow_back</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PropertyAgentTerpercaya',
  mounted() {
    document.title = 'Properti Terpercaya - Panduan Beli Rumah Aman'
  }
}
</script>
