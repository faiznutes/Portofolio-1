<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col bg-gradient-to-b from-emerald-50 via-white to-teal-50 text-slate-900">
    <!-- Header -->
    <header class="sticky top-0 z-50 flex items-center justify-between bg-white/90 backdrop-blur-md border-b border-emerald-100 px-6 py-4 lg:px-10">
      <div class="flex items-center gap-3">
        <div class="text-emerald-600 p-2 bg-emerald-100 rounded-lg">
          <span class="material-symbols-outlined text-2xl">eco</span>
        </div>
        <span class="text-xl font-bold text-slate-900">Eco-Living Pro</span>
      </div>
      <nav class="hidden md:flex items-center gap-8">
        <a href="#" class="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Properti Hijau</a>
        <a href="#" class="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Sewa</a>
        <a href="#" class="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Tentang</a>
      </nav>
      <button class="hidden sm:flex h-10 px-5 items-center justify-center rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-lg shadow-emerald-600/20 transition-all">
        Hubungi
      </button>
      <button class="md:hidden text-slate-600"><span class="material-symbols-outlined">menu</span></button>
    </header>

    <!-- Hero Section with Eco Theme -->
    <section class="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 opacity-15"></div>
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-emerald-300 rounded-full blur-3xl opacity-20"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-300 rounded-full blur-3xl opacity-20"></div>
      
      <div class="relative z-10 w-full max-w-5xl px-4 text-center">
        <div class="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full mb-6 border border-emerald-300">
          🌱 PROPERTI RAMAH LINGKUNGAN
        </div>
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">
          Hunian Eco-Living <span class="text-emerald-600">Masa Depan</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Properti berkelanjutan dengan teknologi hijau, hemat energi, dan menciptakan komunitas yang sehat untuk keluarga Anda.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button class="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-emerald-600/30">
            Lihat Katalog
          </button>
          <button class="px-8 py-4 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold rounded-xl transition-all">
            Konsultasi Gratis
          </button>
        </div>

        <div class="inline-block bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-emerald-200 shadow-2xl">
          <div class="grid grid-cols-3 gap-6 text-center">
            <div>
              <div class="text-3xl font-bold text-emerald-600 mb-2">50+</div>
              <p class="text-sm text-slate-600">Properti Tersedia</p>
            </div>
            <div>
              <div class="text-3xl font-bold text-emerald-600 mb-2">2.5K+</div>
              <p class="text-sm text-slate-600">Keluarga Puas</p>
            </div>
            <div>
              <div class="text-3xl font-bold text-emerald-600 mb-2">7+</div>
              <p class="text-sm text-slate-600">Kota Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-slate-900 text-center mb-16">Keunggulan Properti Eco-Living</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="group p-8 bg-white rounded-2xl border border-emerald-100 hover:border-emerald-400 hover:shadow-2xl transition-all">
            <div class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <span class="material-symbols-outlined text-3xl">energy_savings_leaf</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Hemat Energi</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Panel surya dan sistem hemat energi mengurangi biaya listrik hingga 80% setiap bulannya.</p>
          </div>

          <div class="group p-8 bg-white rounded-2xl border border-emerald-100 hover:border-emerald-400 hover:shadow-2xl transition-all">
            <div class="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all">
              <span class="material-symbols-outlined text-3xl">water_drop</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Konservasi Air</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Sistem rainwater harvesting dan toilet hemat air untuk pembangunan sustainable.</p>
          </div>

          <div class="group p-8 bg-white rounded-2xl border border-emerald-100 hover:border-emerald-400 hover:shadow-2xl transition-all">
            <div class="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-all">
              <span class="material-symbols-outlined text-3xl">forest</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Ruang Hijau</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Taman komunal, taman vertikal, dan area bermain ramah lingkungan untuk keluarga.</p>
          </div>

          <div class="group p-8 bg-white rounded-2xl border border-emerald-100 hover:border-emerald-400 hover:shadow-2xl transition-all">
            <div class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <span class="material-symbols-outlined text-3xl">favorite</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Sehat & Aman</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Material eco-friendly, ventilasi alami, dan lingkungan bebas polusi untuk kesehatan optimal.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Properties -->
    <section class="py-20 px-4 bg-gradient-to-b from-white to-emerald-50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-slate-900 mb-12 text-center">Unit Pilihan</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="group bg-white rounded-2xl overflow-hidden border border-emerald-100 hover:border-emerald-400 hover:shadow-2xl transition-all">
            <div class="relative aspect-[4/3] overflow-hidden">
              <div class="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">TERSEDIA</div>
              <img src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&auto=format&crop=center" alt="Eco modern home" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-slate-900 mb-2">Rumah Eco-Modern Jakarta</h3>
              <p class="text-2xl font-bold text-emerald-600 mb-4">Rp 1.8M</p>
              <div class="flex gap-4 text-slate-600 text-sm pb-4 border-b border-emerald-100">
                <div class="flex items-center gap-1"><span class="material-symbols-outlined">bed</span> 3 KT</div>
                <div class="flex items-center gap-1"><span class="material-symbols-outlined">bathtub</span> 2 KM</div>
              </div>
              <p class="text-sm text-slate-600 mt-4">Energi terbarukan, taman pribadi, sistem smart home</p>
            </div>
          </div>

          <div class="group bg-white rounded-2xl overflow-hidden border border-emerald-100 hover:border-emerald-400 hover:shadow-2xl transition-all">
            <div class="relative aspect-[4/3] overflow-hidden">
              <div class="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">TERSEDIA</div>
              <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&auto=format&crop=center" alt="Solar home design" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-slate-900 mb-2">Villa Elite Surabaya</h3>
              <p class="text-2xl font-bold text-emerald-600 mb-4">Rp 3.2M</p>
              <div class="flex gap-4 text-slate-600 text-sm pb-4 border-b border-emerald-100">
                <div class="flex items-center gap-1"><span class="material-symbols-outlined">bed</span> 4 KT</div>
                <div class="flex items-center gap-1"><span class="material-symbols-outlined">bathtub</span> 3 KM</div>
              </div>
              <p class="text-sm text-slate-600 mt-4">Area hijau luas, water feature, renewable energy</p>
            </div>
          </div>

          <div class="group bg-white rounded-2xl overflow-hidden border border-emerald-100 hover:border-emerald-400 hover:shadow-2xl transition-all">
            <div class="relative aspect-[4/3] overflow-hidden">
              <div class="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">TERSEDIA</div>
              <img src="https://images.unsplash.com/photo-1560518099-ce7a7c2c32ca?w=800&h=600&auto=format&crop=center" alt="Garden living space" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-slate-900 mb-2">Apartemen Green Living</h3>
              <p class="text-2xl font-bold text-emerald-600 mb-4">Rp 850K</p>
              <div class="flex gap-4 text-slate-600 text-sm pb-4 border-b border-emerald-100">
                <div class="flex items-center gap-1"><span class="material-symbols-outlined">bed</span> 2 KT</div>
                <div class="flex items-center gap-1"><span class="material-symbols-outlined">bathtub</span> 1 KM</div>
              </div>
              <p class="text-sm text-slate-600 mt-4">Taman vertikal, rooftop hijau, smart facilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="bg-gradient-to-r from-emerald-600 to-teal-600 py-16 px-4 text-center text-white">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Jadilah Bagian dari Gerakan Eco-Living</h2>
      <p class="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Investasi properti yang menguntungkan sekaligus menjaga kelestarian lingkungan.</p>
      <button class="bg-white text-emerald-600 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all transform hover:scale-105">
        Hubungi Konsultan Kami
      </button>
    </section>

    <!-- Back Button -->
    <router-link to="/projects" 
      class="fixed bottom-6 right-6 z-30 w-14 h-14 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
      title="Kembali ke Projects">
      <span class="material-symbols-outlined text-2xl">arrow_back</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PropertyAgentEcoLiving',
  mounted() {
    document.title = 'Eco-Living Pro - Properti Berkelanjutan'
  }
}
</script>
