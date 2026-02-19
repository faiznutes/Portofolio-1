<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col bg-gradient-to-br from-pink-100 via-yellow-50 to-orange-100">
    <!-- Header -->
    <header class="sticky top-0 z-40 flex items-center justify-between border-b border-pink-200 bg-white/90 backdrop-blur-md px-4 py-4 md:px-10">
      <div class="flex items-center gap-4">
        <span class="material-symbols-outlined text-3xl text-pink-600 animate-bounce" style="animation-duration: 2s;">favorite</span>
        <h2 class="text-slate-900 text-lg md:text-xl font-bold">Bangalexzz Dimsum Playful</h2>
      </div>
      <nav class="hidden md:flex items-center gap-6">
        <a href="#menu" class="text-slate-600 hover:text-pink-600 text-sm font-semibold transition-colors">Menu Seru</a>
        <a href="#about" class="text-slate-600 hover:text-pink-600 text-sm font-semibold transition-colors">Tentang</a>
        <a href="#contact" class="text-slate-600 hover:text-pink-600 text-sm font-semibold transition-colors">Kontak</a>
      </nav>
    </header>

    <main class="flex-1">
      <!-- Hero Section -->
      <section class="relative pt-12 pb-16 px-4 md:px-10">
        <div class="mx-auto max-w-7xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-200 mb-4 w-fit">
                <span class="text-2xl">😂</span>
                <span class="text-pink-700 text-xs font-bold uppercase">Dimsum Bikin Tertawa!</span>
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-pink-700">
                Dimsum yang Bikin NGAKAK!
              </h1>
              <p class="text-slate-700 text-lg mb-8">
                Rasa yang unexpected, harga yang friendly, dan pengalaman yang unforgettable. 
                Dimsum untuk orang-orang yang suka fun!
              </p>
              <button class="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg transform hover:scale-105">
                Pesan Yuk! 🍜
              </button>
            </div>
            <div class="relative rounded-3xl aspect-video shadow-2xl flex items-center justify-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1200&h=800&auto=format&fit=crop" 
                class="w-full h-full object-cover" alt="Dimsum Playful Hero" />
            </div>
          </div>
        </div>
      </section>

      <!-- Menu Section -->
      <section id="menu" class="py-16 lg:py-24 px-4 md:px-10 bg-white">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">Menu Seru Kami</h2>
          <p class="text-slate-600 text-center mb-12">Dimsum yang bikin senyum dari telinga ke telinga!</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-pink-100 to-pink-50 border-2 border-pink-200">
              <div class="aspect-video flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=800&h=600&auto=format&crop=center" 
                  class="w-full h-full object-cover" alt="Shrimp Dimsum" />
              </div>
              <div class="p-4">
                <h3 class="font-bold text-lg text-slate-900">Shrimp Dimsum Rainbow</h3>
                <p class="text-slate-600 text-sm mt-1">Warna-warni cerah, rasa yang ngakak! ✨</p>
                <p class="text-pink-600 font-bold text-lg mt-3">Rp 95.000</p>
              </div>
            </div>

            <div class="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-yellow-100 to-yellow-50 border-2 border-yellow-200">
              <div class="aspect-video flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&h=600&auto=format&crop=center" 
                  class="w-full h-full object-cover" alt="Pork Bun" />
              </div>
              <div class="p-4">
                <h3 class="font-bold text-lg text-slate-900">Pork Bun Creamy</h3>
                <p class="text-slate-600 text-sm mt-1">Lumer di mulut, bikin senyum! 😋</p>
                <p class="text-yellow-600 font-bold text-lg mt-3">Rp 75.000</p>
              </div>
            </div>

            <div class="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-orange-100 to-orange-50 border-2 border-orange-200">
              <div class="aspect-video flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1496116214517-7982d5a9d84f?w=800&h=600&auto=format&crop=center" 
                  class="w-full h-full object-cover" alt="Veggie Dimsum" />
              </div>
              <div class="p-4">
                <h3 class="font-bold text-lg text-slate-900">Veggie Dimsum Crunchy</h3>
                <p class="text-slate-600 text-sm mt-1">Sehat tapi tetap fun! 🥬</p>
                <p class="text-orange-600 font-bold text-lg mt-3">Rp 65.000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-16 lg:py-24 px-4 md:px-10 bg-gradient-to-br from-pink-50 to-orange-50">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Kenapa Kami? 🤔</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center p-4 rounded-xl bg-pink-100 border-2 border-pink-300">
              <div class="text-4xl mb-2">✨</div>
              <h3 class="font-bold text-slate-900">Rasa Fun</h3>
              <p class="text-sm text-slate-600 mt-2">Dimsum yang bikin senang</p>
            </div>
            <div class="text-center p-4 rounded-xl bg-yellow-100 border-2 border-yellow-300">
              <div class="text-4xl mb-2">💰</div>
              <h3 class="font-bold text-slate-900">Harga Bersaing</h3>
              <p class="text-sm text-slate-600 mt-2">Terjangkau untuk semua</p>
            </div>
            <div class="text-center p-4 rounded-xl bg-orange-100 border-2 border-orange-300">
              <div class="text-4xl mb-2">🍽️</div>
              <h3 class="font-bold text-slate-900">Bahan Segar</h3>
              <p class="text-sm text-slate-600 mt-2">Kualitas terjamin</p>
            </div>
            <div class="text-center p-4 rounded-xl bg-pink-100 border-2 border-pink-300">
              <div class="text-4xl mb-2">😊</div>
              <h3 class="font-bold text-slate-900">Pelayanan Ramah</h3>
              <p class="text-sm text-slate-600 mt-2">Keluarga yang hangat</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-16 lg:py-24 px-4 md:px-10 bg-white">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Hubungi Kami</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div class="text-4xl mb-4">📱</div>
              <h3 class="font-bold text-lg text-slate-900 mb-2">Telepon</h3>
              <p class="text-slate-600">+62 851-5504-3133</p>
            </div>
            <div>
              <div class="text-4xl mb-4">📍</div>
              <h3 class="font-bold text-lg text-slate-900 mb-2">Lokasi</h3>
              <p class="text-slate-600">Jl. Raya Kraton No. 123, Surabaya 60175</p>
            </div>
            <div>
              <div class="text-4xl mb-4">⏰</div>
              <h3 class="font-bold text-lg text-slate-900 mb-2">Jam Buka</h3>
              <p class="text-slate-600">Setiap hari 11:00 - 22:00</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Back Button -->
    <router-link to="/projects" 
      class="fixed bottom-6 right-6 z-30 w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
      title="Kembali ke Projects">
      <span class="material-symbols-outlined text-2xl">arrow_back</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'DimsuPlayfulLanding',
  mounted() {
    document.title = 'Bangalexzz Dimsum Playful - Dimsum Seru yang Bikin TERTAWA!'
  }
}
</script>
