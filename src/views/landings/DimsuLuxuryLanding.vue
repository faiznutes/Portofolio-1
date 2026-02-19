<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-black">
    <!-- Header -->
    <header class="sticky top-0 z-40 flex items-center justify-between border-b border-amber-600/30 bg-slate-900/90 backdrop-blur-md px-4 py-4 md:px-10">
      <div class="flex items-center gap-4">
        <span class="material-symbols-outlined text-3xl text-amber-400">crown</span>
        <h2 class="text-amber-400 text-lg md:text-xl font-bold">Bangalexzz Dimsum Luxury</h2>
      </div>
      <nav class="hidden md:flex items-center gap-6">
        <a href="#experience" class="text-slate-400 hover:text-amber-400 text-sm font-semibold transition-colors">Experience</a>
        <a href="#menu" class="text-slate-400 hover:text-amber-400 text-sm font-semibold transition-colors">Collection</a>
        <a href="#contact" class="text-slate-400 hover:text-amber-400 text-sm font-semibold transition-colors">Concierge</a>
      </nav>
    </header>

    <main class="flex-1">
      <!-- Hero Section -->
      <section class="relative pt-12 pb-16 px-4 md:px-10 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-transparent to-amber-600/10 pointer-events-none"></div>
        <div class="relative mx-auto max-w-7xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/30 border border-amber-600/50 mb-4 w-fit">
                <span class="text-amber-400">✦</span>
                <span class="text-amber-400 text-xs font-bold uppercase">Premium Collection</span>
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
                Dimsum Masterpiece
              </h1>
              <p class="text-slate-300 text-lg mb-8 leading-relaxed">
                Pengalaman kuliner eksklusif dengan tradisi 37 tahun. 
                Setiap gigitan adalah karya seni yang dirancang untuk memberikan kepuasan maksimal.
              </p>
              <button class="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg transform hover:scale-105">
                Reservasi Sekarang ✦
              </button>
            </div>
            <div class="relative rounded-3xl aspect-video shadow-2xl flex items-center justify-center overflow-hidden border border-amber-600/50 backdrop-blur-sm">
               <img src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=1200&h=800&auto=format&fit=crop" 
                 class="w-full h-full object-cover" alt="Dimsum Luxury Hero" />
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="py-16 lg:py-24 px-4 md:px-10 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-3xl md:text-4xl font-bold text-amber-400 mb-4 text-center">Pengalaman Luxury</h2>
          <p class="text-slate-400 text-center mb-12">Tradisi sempurna yang diwariskan turun temurun</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="rounded-xl overflow-hidden bg-slate-800/50 border border-amber-600/30 p-6 hover:border-amber-400/50 transition-colors text-center">
              <div class="text-5xl mb-4">⏰</div>
              <h3 class="font-bold text-lg text-amber-400">37 Tahun</h3>
              <p class="text-slate-400 text-sm mt-2">Tradisi Kuliner Sempurna</p>
            </div>
            <div class="rounded-xl overflow-hidden bg-slate-800/50 border border-amber-600/30 p-6 hover:border-amber-400/50 transition-colors text-center">
              <div class="text-5xl mb-4">🏆</div>
              <h3 class="font-bold text-lg text-amber-400">Michelin Standard</h3>
              <p class="text-slate-400 text-sm mt-2">Kualitas Internasional</p>
            </div>
            <div class="rounded-xl overflow-hidden bg-slate-800/50 border border-amber-600/30 p-6 hover:border-amber-400/50 transition-colors text-center">
              <div class="text-5xl mb-4">👨‍🍳</div>
              <h3 class="font-bold text-lg text-amber-400">Master Chef</h3>
              <p class="text-slate-400 text-sm mt-2">Ahli Dimsum Bersertifikat</p>
            </div>
            <div class="rounded-xl overflow-hidden bg-slate-800/50 border border-amber-600/30 p-6 hover:border-amber-400/50 transition-colors text-center">
              <div class="text-5xl mb-4">✨</div>
              <h3 class="font-bold text-lg text-amber-400">100% Premium</h3>
              <p class="text-slate-400 text-sm mt-2">Bahan Terbaik Dunia</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Menu Collection Section -->
      <section id="menu" class="py-16 lg:py-24 px-4 md:px-10 bg-slate-900/80">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-3xl md:text-4xl font-bold text-amber-400 mb-4 text-center">Masterpiece Collection</h2>
          <p class="text-slate-400 text-center mb-12">Limited edition dimsum untuk kesempurnaan rasa</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div class="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-600/40 hover:border-amber-400 transition-all transform hover:scale-105 shadow-xl">
              <div class="aspect-video flex items-center justify-center overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1496116214517-7982d5a9d84f?w=800&h=600&auto=format&crop=center" 
                   class="w-full h-full object-cover" alt="Crystal Shrimp Perfection" />
              </div>
              <div class="p-6">
                <h3 class="font-bold text-xl text-amber-400">Crystal Shrimp Perfection</h3>
                <p class="text-slate-400 text-sm mt-2">Udang pilihan dengan pasta krim eksklusif dari Perancis</p>
                <div class="mt-4 flex justify-between items-end">
                  <div class="flex gap-2">
                    <span class="text-xs px-2 py-1 rounded bg-amber-900/50 text-amber-300">Limited</span>
                    <span class="text-xs px-2 py-1 rounded bg-amber-900/50 text-amber-300">Import</span>
                  </div>
                  <p class="text-amber-400 font-bold text-lg">Rp 320.000</p>
                </div>
              </div>
            </div>

            <div class="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-600/40 hover:border-amber-400 transition-all transform hover:scale-105 shadow-xl">
              <div class="aspect-video flex items-center justify-center overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=800&h=600&auto=format&crop=center" 
                   class="w-full h-full object-cover" alt="Siu Mai Truffle Premium" />
              </div>
              <div class="p-6">
                <h3 class="font-bold text-xl text-amber-400">Siu Mai Truffle Premium</h3>
                <p class="text-slate-400 text-sm mt-2">Daging babi premium dengan truffle hitam dari Italia</p>
                <div class="mt-4 flex justify-between items-end">
                  <div class="flex gap-2">
                    <span class="text-xs px-2 py-1 rounded bg-amber-900/50 text-amber-300">Premium</span>
                    <span class="text-xs px-2 py-1 rounded bg-amber-900/50 text-amber-300">Exclusive</span>
                  </div>
                  <p class="text-amber-400 font-bold text-lg">Rp 285.000</p>
                </div>
              </div>
            </div>

            <div class="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-600/40 hover:border-amber-400 transition-all transform hover:scale-105 shadow-xl">
              <div class="aspect-video flex items-center justify-center overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&h=600&auto=format&crop=center" 
                   class="w-full h-full object-cover" alt="Xiao Long Bao Gold" />
              </div>
              <div class="p-6">
                <h3 class="font-bold text-xl text-amber-400">Xiao Long Bao Gold Edition</h3>
                <p class="text-slate-400 text-sm mt-2">Pangsit emas dengan kuah kaldu gading 24 jam</p>
                <div class="mt-4 flex justify-between items-end">
                  <div class="flex gap-2">
                    <span class="text-xs px-2 py-1 rounded bg-amber-900/50 text-amber-300">Signature</span>
                    <span class="text-xs px-2 py-1 rounded bg-amber-900/50 text-amber-300">Melds</span>
                  </div>
                  <p class="text-amber-400 font-bold text-lg">Rp 350.000</p>
                </div>
              </div>
            </div>

            <div class="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-600/40 hover:border-amber-400 transition-all transform hover:scale-105 shadow-xl">
              <div class="aspect-video flex items-center justify-center overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=600&auto=format&crop=center" 
                   class="w-full h-full object-cover" alt="Har Gow Royal" />
              </div>
              <div class="p-6">
                <h3 class="font-bold text-xl text-amber-400">Har Gow Royal Collection</h3>
                <p class="text-slate-400 text-sm mt-2">Udang raksasa dengan kulit transparan sempurna</p>
                <div class="mt-4 flex justify-between items-end">
                  <div class="flex gap-2">
                    <span class="text-xs px-2 py-1 rounded bg-amber-900/50 text-amber-300">Prestige</span>
                    <span class="text-xs px-2 py-1 rounded bg-amber-900/50 text-amber-300">5★</span>
                  </div>
                  <p class="text-amber-400 font-bold text-lg">Rp 300.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="py-16 lg:py-24 px-4 md:px-10 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-3xl md:text-4xl font-bold text-amber-400 mb-12 text-center">Testimonial Kritikus</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="rounded-xl bg-slate-800/50 border border-amber-600/30 p-6">
              <div class="flex gap-1 mb-3">
                <span class="text-amber-400">★</span><span class="text-amber-400">★</span><span class="text-amber-400">★</span><span class="text-amber-400">★</span><span class="text-amber-400">★</span>
              </div>
              <p class="text-slate-300 italic mb-4">"Dimsum terbaik yang pernah saya cicipi. Setiap detail sempurna."</p>
              <p class="text-amber-400 font-bold">- Kritikus Kuliner Detik Food</p>
            </div>
            <div class="rounded-xl bg-slate-800/50 border border-amber-600/30 p-6">
              <div class="flex gap-1 mb-3">
                <span class="text-amber-400">★</span><span class="text-amber-400">★</span><span class="text-amber-400">★</span><span class="text-amber-400">★</span><span class="text-amber-400">★</span>
              </div>
              <p class="text-slate-300 italic mb-4">"Kualitas internasional dengan sentuhan lokal yang autentik."</p>
              <p class="text-amber-400 font-bold">- Chef Ahmad Jauhari</p>
            </div>
            <div class="rounded-xl bg-slate-800/50 border border-amber-600/30 p-6">
              <div class="flex gap-1 mb-3">
                <span class="text-amber-400">★</span><span class="text-amber-400">★</span><span class="text-amber-400">★</span><span class="text-amber-400">★</span><span class="text-amber-400">★</span>
              </div>
              <p class="text-slate-300 italic mb-4">"Pengalaman fine dining yang tak terlupakan untuk dimsum."</p>
              <p class="text-amber-400 font-bold">- Majalah Gourmet Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-16 lg:py-24 px-4 md:px-10 bg-slate-900/80">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-3xl md:text-4xl font-bold text-amber-400 mb-8 text-center">Hubungi Concierge Kami</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-600/40 rounded-xl p-8 text-center">
              <div class="text-5xl mb-4">📞</div>
              <h3 class="font-bold text-lg text-amber-400 mb-2">Layanan Premium</h3>
              <p class="text-slate-400">+62 851-5504-3133</p>
              <p class="text-slate-500 text-sm mt-2">24/7 Concierge Service</p>
            </div>
            <div class="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-600/40 rounded-xl p-8 text-center">
              <div class="text-5xl mb-4">📍</div>
              <h3 class="font-bold text-lg text-amber-400 mb-2">Alamat Eksklusif</h3>
              <p class="text-slate-400">Jl. Raya Kraton No. 123</p>
              <p class="text-slate-400">Surabaya 60175</p>
            </div>
            <div class="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-600/40 rounded-xl p-8 text-center">
              <div class="text-5xl mb-4">⏰</div>
              <h3 class="font-bold text-lg text-amber-400 mb-2">Jam Operasional</h3>
              <p class="text-slate-400">Setiap Hari</p>
              <p class="text-slate-400">11:00 - 22:00 WIB</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Back Button -->
    <router-link to="/projects" 
      class="fixed bottom-6 right-6 z-30 w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
      title="Kembali ke Projects">
      <span class="material-symbols-outlined text-2xl">arrow_back</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'DimsuLuxuryLanding',
  mounted() {
    document.title = 'Bangalexzz Dimsum Luxury - Premium Dimsum Masterpiece'
  }
}
</script>
