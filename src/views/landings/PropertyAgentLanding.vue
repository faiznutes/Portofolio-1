<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col bg-background-light text-slate-900">
    <!-- Header -->
    <header class="sticky top-0 z-40 flex items-center justify-between border-b border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 backdrop-blur-md px-4 py-4 md:px-10">
      <div class="flex items-center gap-4">
        <span class="material-symbols-outlined text-3xl text-blue-600">apartment</span>
        <h2 class="text-slate-900 text-lg md:text-xl font-bold">Bangalexzz Property</h2>
      </div>
      <nav class="hidden md:flex items-center gap-6">
        <a href="#services" class="text-slate-600 hover:text-blue-600 text-sm font-semibold transition-colors">Layanan</a>
        <a href="#properties" class="text-slate-600 hover:text-blue-600 text-sm font-semibold transition-colors">Properti</a>
        <a href="#contact" class="text-slate-600 hover:text-blue-600 text-sm font-semibold transition-colors">Kontak</a>
      </nav>
    </header>

    <main class="flex-1">
      <!-- Hero Section -->
      <section class="relative pt-12 pb-16 px-4 md:px-10 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 text-white">
        <div class="mx-auto max-w-7xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Temukan Properti Impian Anda
              </h1>
              <p class="text-blue-100 text-lg mb-8">
                Kami membantu Anda menemukan properti terbaik dengan layanan profesional dan terpercaya.
              </p>
              <button class="bg-white hover:bg-blue-50 text-blue-600 font-bold py-3 px-8 rounded-lg transition-all shadow-lg">
                Konsultasi Gratis
              </button>
            </div>
            <div class="rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&auto=format&fit=crop" 
                class="w-full h-full object-cover" alt="Property Hero" />
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="py-16 lg:py-24 px-4 md:px-10 bg-white">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Layanan Kami</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="p-6 rounded-xl bg-blue-50 border border-blue-200 hover:shadow-lg transition-shadow">
              <span class="material-symbols-outlined text-4xl text-blue-600 mb-4">search</span>
              <h3 class="font-bold text-lg text-slate-900 mb-2">Pencarian Properti</h3>
              <p class="text-slate-600">Temukan properti sesuai dengan kriteria dan budget Anda</p>
            </div>
            <div class="p-6 rounded-xl bg-blue-50 border border-blue-200 hover:shadow-lg transition-shadow">
              <span class="material-symbols-outlined text-4xl text-blue-600 mb-4">description</span>
              <h3 class="font-bold text-lg text-slate-900 mb-2">Pengurusan Dokumen</h3>
              <p class="text-slate-600">Layanan pengurusan dokumen lengkap dan terpercaya</p>
            </div>
            <div class="p-6 rounded-xl bg-blue-50 border border-blue-200 hover:shadow-lg transition-shadow">
              <span class="material-symbols-outlined text-4xl text-blue-600 mb-4">account_balance</span>
              <h3 class="font-bold text-lg text-slate-900 mb-2">Solusi Pembiayaan</h3>
              <p class="text-slate-600">Bantu Anda mencari solusi pembiayaan terbaik</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Properties Section -->
      <section id="properties" class="py-16 lg:py-24 px-4 md:px-10 bg-slate-50">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Properti Unggulan</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
              <div class="aspect-video overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&auto=format&crop=center" 
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Rumah Mewah Modern" />
              </div>
              <div class="p-4">
                <h3 class="font-bold text-lg text-slate-900">Rumah Mewah Modern</h3>
                <p class="text-blue-600 font-bold text-2xl mt-2">Rp 2.5M</p>
                <p class="text-slate-600 text-sm mt-2">Jl. Gatot Subroto, Surabaya</p>
              </div>
            </div>
            <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
              <div class="aspect-video overflow-hidden">
                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&auto=format&crop=center" 
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Apartemen Premium" />
              </div>
              <div class="p-4">
                <h3 class="font-bold text-lg text-slate-900">Apartemen Premium</h3>
                <p class="text-blue-600 font-bold text-2xl mt-2">Rp 1.2M</p>
                <p class="text-slate-600 text-sm mt-2">Jl. Ahmad Yani, Surabaya</p>
              </div>
            </div>
            <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
              <div class="aspect-video overflow-hidden">
                <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&auto=format&crop=center" 
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Tanah Komersial" />
              </div>
              <div class="p-4">
                <h3 class="font-bold text-lg text-slate-900">Tanah Komersial</h3>
                <p class="text-blue-600 font-bold text-2xl mt-2">Rp 800JT</p>
                <p class="text-slate-600 text-sm mt-2">Jl. Kawi, Malang</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-16 lg:py-24 px-4 md:px-10 bg-white">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Hubungi Kami</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 class="font-bold text-lg text-slate-900 flex items-center gap-2 mb-2">
                <span class="material-symbols-outlined text-blue-600">phone</span>
                Telepon
              </h3>
              <p class="text-slate-600">+62 851-5504-3133</p>
            </div>
            <div>
              <h3 class="font-bold text-lg text-slate-900 flex items-center gap-2 mb-2">
                <span class="material-symbols-outlined text-blue-600">location_on</span>
                Alamat
              </h3>
              <p class="text-slate-600">Jl. Raya Kraton No. 123, Surabaya 60175</p>
            </div>
            <div>
              <h3 class="font-bold text-lg text-slate-900 flex items-center gap-2 mb-2">
                <span class="material-symbols-outlined text-blue-600">schedule</span>
                Jam Kerja
              </h3>
              <p class="text-slate-600">Senin - Jumat: 08:00 - 17:00</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Back Button -->
    <router-link to="/projects" 
      class="fixed bottom-6 right-6 z-30 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
      title="Kembali ke Projects">
      <span class="material-symbols-outlined text-2xl">arrow_back</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PropertyAgentLanding',
  mounted() {
    document.title = 'Bangalexzz Property - Solusi Properti Impian Anda'
  }
}
</script>
