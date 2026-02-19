<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col bg-slate-900 text-white">
    <!-- Header -->
    <header class="sticky top-0 z-40 flex items-center justify-between border-b border-slate-700 bg-slate-900/95 backdrop-blur-md px-4 py-4 md:px-10">
      <div class="flex items-center gap-4">
        <span class="material-symbols-outlined text-3xl text-amber-400">dinner_dining</span>
        <h2 class="text-white text-lg md:text-xl font-bold">Bangalexzz Dimsum Modern</h2>
      </div>
      <nav class="hidden md:flex items-center gap-6">
        <a href="#menu" class="text-slate-300 hover:text-amber-400 text-sm font-semibold transition-colors">Menu</a>
        <a href="#about" class="text-slate-300 hover:text-amber-400 text-sm font-semibold transition-colors">Tentang</a>
        <a href="#contact" class="text-slate-300 hover:text-amber-400 text-sm font-semibold transition-colors">Kontak</a>
      </nav>
    </header>

    <main class="flex-1">
      <!-- Hero Section -->
      <section class="relative pt-12 pb-16 px-4 md:px-10">
        <div class="mx-auto max-w-7xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 mb-4 w-fit">
                <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span class="text-amber-400 text-xs font-bold uppercase">Presisi Sempurna</span>
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Dimsum Modern & Presisi
              </h1>
              <p class="text-slate-300 text-lg mb-8">
                100°C, 6 menit uap sempurna. Bahan organik lokal. Dilipat tangan dengan presisi kuliner tertinggi.
              </p>
              <button class="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-lg transition-all shadow-lg">
                Pesan Sekarang
              </button>
            </div>
            <div class="relative rounded-2xl aspect-video shadow-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1496116214517-7982d5a9d84f?w=1200&h=800&auto=format&fit=crop" 
                class="w-full h-full object-cover" alt="Dimsum Modern Hero" />
            </div>
          </div>
        </div>
      </section>

      <!-- Menu Section -->
      <section id="menu" class="py-16 lg:py-24 px-4 md:px-10 bg-slate-800">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-12">Koleksi Dimsum</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="rounded-xl overflow-hidden bg-slate-700 hover:bg-slate-600 transition-colors">
              <div class="aspect-video overflow-hidden">
                <img src="https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=800&h=600&auto=format&crop=center" 
                  class="w-full h-full object-cover" alt="Crystal Shrimp" />
              </div>
              <div class="p-4">
                <h3 class="font-bold text-lg text-white">Crystal Shrimp (Har Gow)</h3>
                <p class="text-slate-300 text-sm mt-1">Kulit bening, udang tiger premium - 4 pcs</p>
                <p class="text-amber-400 font-bold text-lg mt-3">Rp 105.000</p>
              </div>
            </div>

            <div class="rounded-xl overflow-hidden bg-slate-700 hover:bg-slate-600 transition-colors">
              <div class="aspect-video overflow-hidden">
                <img src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&h=600&auto=format&crop=center" 
                  class="w-full h-full object-cover" alt="Siu Mai Truffle" />
              </div>
              <div class="p-4">
                <h3 class="font-bold text-lg text-white">Siu Mai Truffle</h3>
                <p class="text-slate-300 text-sm mt-1">Kurobuta, telur asli, truffle hitam - 4 pcs</p>
                <p class="text-amber-400 font-bold text-lg mt-3">Rp 95.000</p>
              </div>
            </div>

            <div class="rounded-xl overflow-hidden bg-slate-700 hover:bg-slate-600 transition-colors">
              <div class="aspect-video overflow-hidden">
                <img src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=600&auto=format&crop=center" 
                  class="w-full h-full object-cover" alt="Xiao Long Bao Flight" />
              </div>
              <div class="p-4">
                <h3 class="font-bold text-lg text-white">Xiao Long Bao Flight</h3>
                <p class="text-slate-300 text-sm mt-1">Kupuk tangan, jus kepiting harim - 6 pcs</p>
                <p class="text-amber-400 font-bold text-lg mt-3">Rp 125.000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-16 lg:py-24 px-4 md:px-10 bg-slate-900">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">Tentang Kami</h2>
          <p class="text-slate-300 text-lg max-w-2xl leading-relaxed mb-8">
            Bangalexzz Dimsum Modern menggabungkan teknik tradisional dengan teknologi modern. 
            Setiap dimsum adalah karya seni kuliner yang dirancang dengan presisi sempurna.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 class="text-2xl font-bold text-amber-400">37 Thn</h3>
              <p class="text-slate-400 text-sm mt-2">Tradisi Kuliner</p>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-amber-400">100%</h3>
              <p class="text-slate-400 text-sm mt-2">Organik Lokal</p>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-amber-400">24/7</h3>
              <p class="text-slate-400 text-sm mt-2">Layanan Konsierge</p>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-amber-400">5★</h3>
              <p class="text-slate-400 text-sm mt-2">Rating Google</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-16 lg:py-24 px-4 md:px-10 bg-slate-800">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">Hubungi Kami</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 class="font-bold text-lg text-white flex items-center gap-2 mb-2">
                <span class="material-symbols-outlined text-amber-400">phone</span>
                Telepon
              </h3>
              <p class="text-slate-300">+62 851-5504-3133</p>
            </div>
            <div>
              <h3 class="font-bold text-lg text-white flex items-center gap-2 mb-2">
                <span class="material-symbols-outlined text-amber-400">location_on</span>
                Alamat
              </h3>
              <p class="text-slate-300">Jl. Raya Kraton No. 123, Surabaya 60175</p>
            </div>
            <div>
              <h3 class="font-bold text-lg text-white flex items-center gap-2 mb-2">
                <span class="material-symbols-outlined text-amber-400">schedule</span>
                Jam Kerja
              </h3>
              <p class="text-slate-300">Senin - Minggu: 12:00 - 22:00</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Back Button -->
    <router-link to="/projects" 
      class="fixed bottom-6 right-6 z-30 w-14 h-14 bg-amber-400 hover:bg-amber-500 text-slate-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
      title="Kembali ke Projects">
      <span class="material-symbols-outlined text-2xl">arrow_back</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'DimsuModernLanding',
  mounted() {
    document.title = 'Bangalexzz Dimsum Modern - Koleksi Dimsum Premium'
  }
}
</script>
