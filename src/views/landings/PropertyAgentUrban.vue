<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 text-white">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-orange-600/30 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <div class="flex items-center gap-3">
          <div class="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg">
            <span class="material-symbols-outlined text-2xl">apartment</span>
          </div>
          <span class="text-xl font-black text-orange-400">URBAN PROPERTI</span>
        </div>
        <nav class="hidden md:flex items-center gap-8">
          <a href="#" class="text-sm font-bold text-gray-300 hover:text-orange-400 transition-colors">BERANDA</a>
          <a href="#" class="text-sm font-bold text-gray-300 hover:text-orange-400 transition-colors">PROYEK</a>
          <a href="#" class="text-sm font-bold text-gray-300 hover:text-orange-400 transition-colors">GALERI</a>
          <a href="#" class="text-sm font-bold text-gray-300 hover:text-orange-400 transition-colors">KONTAK</a>
        </nav>
        <button class="hidden md:block px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-600/40">
          HUBUNGI SEKARANG
        </button>
        <button class="md:hidden text-orange-400"><span class="material-symbols-outlined text-2xl">menu</span></button>
      </div>
    </header>

    <!-- Hero Section - Bold & Dynamic -->
    <section class="relative min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent"></div>
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-15 animate-pulse"></div>
      </div>
      
      <div class="relative z-10 w-full max-w-5xl px-4">
        <div class="inline-block mb-8 px-5 py-2 bg-orange-600/20 border border-orange-400/50 rounded-full text-orange-300 text-xs font-black tracking-widest">
          PROPERTI MODERN JAKARTA | SURABAYA | BANDUNG
        </div>
        
        <h1 class="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
          INVESTASI <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">CERDAS</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl font-medium leading-relaxed">
          Properti premium di lokasi strategis dengan ROI terbaik. Ratusan investor telah merasakan peningkatan nilai aset mereka hingga 300%.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 mb-12">
          <button class="px-8 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 font-black text-lg rounded-lg shadow-2xl shadow-orange-600/50 transition-all transform hover:scale-105 text-white">
            JADILAH INVESTOR
          </button>
          <button class="px-8 py-5 border-3 border-orange-500 hover:bg-orange-500/10 font-black text-lg rounded-lg transition-all text-orange-400">
            LIHAT KATALOG LENGKAP
          </button>
        </div>

        <div class="grid grid-cols-3 gap-6 text-center">
          <div class="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-orange-400/30">
            <div class="text-4xl font-black text-orange-400 mb-2">1000+</div>
            <p class="text-sm font-bold text-gray-300">Unit Terjual</p>
          </div>
          <div class="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-orange-400/30">
            <div class="text-4xl font-black text-orange-400 mb-2">98%</div>
            <p class="text-sm font-bold text-gray-300">Kepuasan Klien</p>
          </div>
          <div class="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-orange-400/30">
            <div class="text-4xl font-black text-orange-400 mb-2">15+</div>
            <p class="text-sm font-bold text-gray-300">Tahun Berpengalaman</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Urban Section -->
    <section class="py-24 px-4 bg-slate-800/50 relative">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-5xl font-black text-white text-center mb-20">MENGAPA URBAN PROPERTI?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="group p-8 bg-gradient-to-br from-orange-600/20 to-transparent border border-orange-500/40 rounded-2xl hover:border-orange-500/80 hover:shadow-2xl hover:shadow-orange-600/30 transition-all">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-3xl">trending_up</span>
            </div>
            <h3 class="text-xl font-black text-orange-400 mb-3">YIELD TINGGI</h3>
            <p class="text-gray-300 font-medium">ROI 12-18% per tahun dengan appreciation value yang konsisten.</p>
          </div>

          <div class="group p-8 bg-gradient-to-br from-orange-600/20 to-transparent border border-orange-500/40 rounded-2xl hover:border-orange-500/80 hover:shadow-2xl hover:shadow-orange-600/30 transition-all">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-3xl">location_on</span>
            </div>
            <h3 class="text-xl font-black text-orange-400 mb-3">LOKASI PRIME</h3>
            <p class="text-gray-300 font-medium">Berada di kawasan komersial dengan lalulintas tinggi dan akses mudah.</p>
          </div>

          <div class="group p-8 bg-gradient-to-br from-orange-600/20 to-transparent border border-orange-500/40 rounded-2xl hover:border-orange-500/80 hover:shadow-2xl hover:shadow-orange-600/30 transition-all">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-3xl">verified</span>
            </div>
            <h3 class="text-xl font-black text-orange-400 mb-3">LEGALITAS JELAS</h3>
            <p class="text-gray-300 font-medium">Semua dokumen legal lengkap, tersertifikasi dan aman dari masalah.</p>
          </div>

          <div class="group p-8 bg-gradient-to-br from-orange-600/20 to-transparent border border-orange-500/40 rounded-2xl hover:border-orange-500/80 hover:shadow-2xl hover:shadow-orange-600/30 transition-all">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-3xl">support_agent</span>
            </div>
            <h3 class="text-xl font-black text-orange-400 mb-3">SUPPORT 24/7</h3>
            <p class="text-gray-300 font-medium">Tim profesional siap membantu proses jual-beli hingga selesai.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="py-24 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-5xl font-black text-white text-center mb-20">PROYEK UNGGULAN TAHUN INI</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="group relative overflow-hidden rounded-2xl border border-orange-500/50 hover:border-orange-400 transition-all hover:shadow-2xl hover:shadow-orange-600/40">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&auto=format&crop=center" alt="Jakarta Premium Tower" class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8">
              <h3 class="text-3xl font-black text-white mb-2">Jakarta Premium Tower</h3>
              <p class="text-orange-400 font-black text-2xl mb-3">Rp 5.2 MILIAR</p>
              <p class="text-gray-300 text-sm mb-4">Unit premium di Senayan dengan fasilitas world-class dan lokasi strategis.</p>
              <div class="flex gap-4 text-xs font-bold text-gray-300">
                <div class="flex items-center gap-1"><span class="material-symbols-outlined text-base">bed</span> 3 BED</div>
                <div class="flex items-center gap-1"><span class="material-symbols-outlined text-base">square_foot</span> 250 M²</div>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden rounded-2xl border border-orange-500/50 hover:border-orange-400 transition-all hover:shadow-2xl hover:shadow-orange-600/40">
            <img src="https://images.unsplash.com/photo-1512174786900-eb277915b5f1?w=800&h=600&auto=format&crop=center" alt="Surabaya Business Hub" class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8">
              <h3 class="text-3xl font-black text-white mb-2">Surabaya Business Hub</h3>
              <p class="text-orange-400 font-black text-2xl mb-3">Rp 2.8 MILIAR</p>
              <p class="text-gray-300 text-sm mb-4">Apartemen modern di pusat bisnis Surabaya dengan ROI tetap stabil.</p>
              <div class="flex gap-4 text-xs font-bold text-gray-300">
                <div class="flex items-center gap-1"><span class="material-symbols-outlined text-base">bed</span> 2 BED</div>
                <div class="flex items-center gap-1"><span class="material-symbols-outlined text-base">square_foot</span> 180 M²</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative bg-gradient-to-r from-orange-600 to-orange-700 py-20 px-4 overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform skew-x-12"></div>
      </div>
      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-black text-white mb-6">JANGAN LEWATKAN KESEMPATAN EMAS INI</h2>
        <p class="text-xl text-white/90 mb-10">Hanya tersisa 5 unit dengan harga pre-launch untuk investor awal. Buruan sebelum kehabisan!</p>
        <button class="px-10 py-5 bg-white text-orange-600 font-black text-lg rounded-xl hover:bg-gray-100 transition-all transform hover:scale-110 shadow-2xl">
          PESAN SEKARANG VIA WHATSAPP
        </button>
      </div>
    </section>

    <!-- Back Button -->
    <router-link to="/projects" 
      class="fixed bottom-6 right-6 z-30 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-orange-600/50 transition-all transform hover:-translate-y-1 hover:scale-110"
      title="Kembali ke Projects">
      <span class="material-symbols-outlined text-2xl">arrow_back</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PropertyAgentUrban',
  mounted() {
    document.title = 'Urban Properti - Investasi Cerdas Jakarta'
  }
}
</script>
