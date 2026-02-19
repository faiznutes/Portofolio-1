<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col bg-background-light text-slate-900">
    <!-- Header -->
    <header class="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-background-light/90 backdrop-blur-md px-4 py-4 md:px-10">
      <div class="flex items-center gap-4">
        <span class="material-symbols-outlined text-3xl text-primary">ramen_dining</span>
        <h2 class="text-slate-900 text-lg md:text-xl font-bold">Bangalexzz Mie Ayam</h2>
      </div>
      <nav class="hidden md:flex items-center gap-6">
        <a href="#menu" class="text-slate-600 hover:text-primary text-sm font-semibold transition-colors">Menu Pilihan</a>
        <a href="#story" class="text-slate-600 hover:text-primary text-sm font-semibold transition-colors">Cerita Kami</a>
        <a href="#location" class="text-slate-600 hover:text-primary text-sm font-semibold transition-colors">Lokasi</a>
      </nav>
      <button class="md:hidden text-slate-900">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </header>

    <main class="flex-1">
      <!-- Hero Section -->
      <section class="relative pt-8 pb-16 lg:pt-16 lg:pb-24 px-4 md:px-10">
        <div class="mx-auto max-w-7xl">
          <div class="flex flex-col lg:flex-row gap-12 items-center">
            <!-- Hero Image -->
            <div class="w-full lg:w-1/2 relative group">
              <div class="absolute -inset-2 bg-gradient-to-r from-primary to-yellow-400 rounded-2xl opacity-30 blur-2xl group-hover:opacity-50 transition duration-1000"></div>
              <div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img alt="Mie Ayam" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&auto=format&crop=center" />
              </div>
              <div class="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style="animation-duration: 3s;">
                <div class="bg-yellow-100 p-2 rounded-full text-yellow-600">
                  <span class="material-symbols-outlined">star</span>
                </div>
                <div>
                  <p class="text-xs text-slate-500 font-medium">Teratas</p>
                  <p class="text-sm font-bold text-slate-900">Surabaya Terbaik 2024</p>
                </div>
              </div>
            </div>

            <!-- Hero Content -->
            <div class="w-full lg:w-1/2 flex flex-col gap-6">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
                <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span class="text-primary text-xs font-bold uppercase tracking-wider">Cita Rasa Autentik</span>
              </div>
              <h1 class="text-slate-900 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Tradisi yang <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600">Diperbaharui</span>.
              </h1>
              <p class="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
                Mi yang ditarik dengan tangan, kaldu gurih 24 jam, dan topping premium. Kami menghadirkan semangat makanan jalan menjadi bentuk seni kuliner modern.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 pt-4">
                <button class="flex items-center justify-center gap-2 h-12 px-8 bg-primary hover:bg-primary/90 text-slate-900 text-base font-bold rounded-lg transition-all shadow-lg shadow-primary/25">
                  Pesan Sekarang
                </button>
                <button class="flex items-center justify-center gap-2 h-12 px-8 bg-white border border-slate-200 hover:border-primary text-slate-900 text-base font-bold rounded-lg transition-all">
                  Lihat Menu
                </button>
              </div>
              <div class="flex items-center gap-4 pt-8 border-t border-slate-200">
                <div class="flex -space-x-3">
                  <img alt="Customer" class="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&crop=faces" />
                  <img alt="Customer" class="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format&crop=faces" />
                  <img alt="Customer" class="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&auto=format&crop=faces" />
                </div>
                <div>
                  <div class="flex text-yellow-400">
                    <span class="material-symbols-outlined text-sm fill-current">star</span>
                    <span class="material-symbols-outlined text-sm fill-current">star</span>
                    <span class="material-symbols-outlined text-sm fill-current">star</span>
                    <span class="material-symbols-outlined text-sm fill-current">star</span>
                    <span class="material-symbols-outlined text-sm fill-current">star</span>
                  </div>
                  <span class="text-sm font-medium text-slate-900">4.8/5 dari 150+ ulasan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Menu Section -->
      <section id="menu" class="py-16 lg:py-24 px-4 md:px-10 bg-white">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Menu Pilihan Kami</h2>
          <p class="text-slate-600 mb-12">Cita rasa autentik yang diperbarui dengan sentuhan modern</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Menu Item 1 -->
            <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div class="aspect-video bg-gray-200"></div>
              <div class="p-4">
                <h3 class="font-bold text-lg text-slate-900">Mie Ayam Spesial</h3>
                <p class="text-slate-600 text-sm mt-1">Mi dicukil tangan, ayam goreng renyah, telur keras</p>
                <p class="text-primary font-bold text-lg mt-3">Rp 25.000</p>
              </div>
            </div>

            <!-- Menu Item 2 -->
            <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div class="aspect-video bg-gray-200"></div>
              <div class="p-4">
                <h3 class="font-bold text-lg text-slate-900">Mie Ayam Premium</h3>
                <p class="text-slate-600 text-sm mt-1">Mi dicukil, daging ayam premium, pangsit goreng</p>
                <p class="text-primary font-bold text-lg mt-3">Rp 35.000</p>
              </div>
            </div>

            <!-- Menu Item 3 -->
            <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div class="aspect-video bg-gray-200"></div>
              <div class="p-4">
                <h3 class="font-bold text-lg text-slate-900">Paket Bundling</h3>
                <p class="text-slate-600 text-sm mt-1">2 porsi mie ayam + minuman</p>
                <p class="text-primary font-bold text-lg mt-3">Rp 55.000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Story Section -->
      <section id="story" class="py-16 lg:py-24 px-4 md:px-10 bg-slate-900 text-white">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Cerita Kami</h2>
          <p class="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Bangalexzz Mie Ayam dimulai dari passion untuk menghadirkan cita rasa autentik nusantara dengan standar internasional. 
            Setiap bowl mi adalah hasil dari dedikasi, inovasi, dan cinta terhadap kuliner Indonesia.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <div>
              <h3 class="text-2xl font-bold text-primary">15+</h3>
              <p class="text-slate-400 text-sm mt-1">Tahun Pengalaman</p>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-primary">10K+</h3>
              <p class="text-slate-400 text-sm mt-1">Pelanggan per Bulan</p>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-primary">100%</h3>
              <p class="text-slate-400 text-sm mt-1">Bahan Segar</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Location Section -->
      <section id="location" class="py-16 lg:py-24 px-4 md:px-10 bg-white">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Kunjungi Kami</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="bg-gray-200 rounded-xl aspect-video"></div>
            <div class="space-y-6">
              <div>
                <h3 class="font-bold text-lg text-slate-900 flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary">location_on</span>
                  Lokasi
                </h3>
                <p class="text-slate-600 mt-2">Jl. Raya Kraton No. 123, Surabaya 60175, Indonesia</p>
              </div>
              <div>
                <h3 class="font-bold text-lg text-slate-900 flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary">phone</span>
                  Telepon
                </h3>
                <p class="text-slate-600 mt-2">+62 851-5504-3133</p>
              </div>
              <div>
                <h3 class="font-bold text-lg text-slate-900 flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary">schedule</span>
                  Jam Operasional
                </h3>
                <p class="text-slate-600 mt-2">Senin - Jumat: 10:00 - 21:00<br/>Sabtu - Minggu: 09:00 - 22:00</p>
              </div>
              <button class="w-full bg-primary hover:bg-primary/90 text-slate-900 font-bold py-3 rounded-lg transition-all mt-6">
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Back Button - Fixed Bottom Right -->
    <router-link to="/projects" 
      class="fixed bottom-6 right-6 z-30 w-14 h-14 bg-primary hover:bg-primary/90 text-slate-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
      title="Kembali ke Projects">
      <span class="material-symbols-outlined text-2xl">arrow_back</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'RestoMieAyamLanding',
  mounted() {
    document.documentElement.lang = 'id'
    document.title = 'Bangalexzz Mie Ayam - Pengalaman Mi Nusantara Terbaik'
  }
}
</script>

<style scoped>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .5; }
}

.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>
