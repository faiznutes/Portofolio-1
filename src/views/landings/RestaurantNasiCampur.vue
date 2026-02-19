<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root bg-background-light dark:bg-background-dark text-text-main">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full bg-background-light/95 backdrop-blur-md border-b border-[#e7f3ef] px-4 lg:px-10 py-3">
      <div class="layout-container mx-auto max-w-7xl flex items-center justify-between">
        <div class="flex items-center gap-4 text-text-main">
          <div class="size-8 text-primary">
            <span class="material-symbols-outlined text-3xl">rice_bowl</span>
          </div>
          <h2 class="text-text-main text-lg font-bold leading-tight tracking-[-0.015em]">Bangalexzz Nasi Campur</h2>
        </div>
        <!-- Desktop Nav -->
        <div class="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div class="flex items-center gap-9">
            <a class="text-text-main text-sm font-medium hover:text-primary transition-colors" href="#menu">Menu Kami</a>
            <a class="text-text-main text-sm font-medium hover:text-primary transition-colors" href="#build">Buat Piring Anda</a>
            <a class="text-text-main text-sm font-medium hover:text-primary transition-colors" href="#story">Cerita Kami</a>
          </div>
          <button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary-dark transition-colors text-text-main text-sm font-bold leading-normal tracking-[0.015em]">
            <span class="truncate">Pesan Sekarang</span>
          </button>
        </div>
        <!-- Mobile Menu Button -->
        <button class="md:hidden text-text-main">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="w-full px-4 py-12 lg:py-20 lg:px-10 mx-auto max-w-7xl">
      <div class="flex flex-col-reverse lg:flex-row gap-10 items-center">
        <div class="flex-1 flex flex-col gap-6 text-left lg:pr-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
            <span class="material-symbols-outlined text-primary text-sm">restaurant</span>
            <span class="text-primary-dark text-xs font-bold uppercase tracking-wider">Autentik Indonesia</span>
          </div>
          <h1 class="text-text-main text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-[-0.033em]">
            Seni Mencampur.<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">Cita rasa tradisional</span>, piring modern.
          </h1>
          <p class="text-text-muted text-lg font-normal leading-relaxed max-w-xl">
            Rasakan kekayaan warisan kuliner Indonesia dengan sentuhan kontemporer. Bahan segar, rempah berani, kombinasi tak terbatas.
          </p>
          <div class="flex gap-4 pt-4">
            <button class="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 text-text-main text-base font-bold">
              Pesan Delivery
            </button>
            <button class="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-white border border-[#e7f3ef] hover:border-primary text-text-main text-base font-bold transition-colors">
              Lihat Menu
            </button>
          </div>
          <div class="flex items-center gap-4 mt-8 pt-8 border-t border-[#e7f3ef]">
            <div class="flex -space-x-4">
              <img alt="Customer avatar" class="w-10 h-10 rounded-full border-2 border-white object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0cDg011H3Kem3h_PIcfZ5LjrpRTzuG5F3Xc4I5Btj5wwGc" />
              <img alt="Customer avatar" class="w-10 h-10 rounded-full border-2 border-white object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtqA3M1dcLb5YM2P4DPeMpR6tjXF1yfCV6TtG77XV9s3hqz5SwX9DbFiKWYBTpoMrDJRnd54BWmXjlWUjT1ryKlePbOdaP" />
              <img alt="Customer avatar" class="w-10 h-10 rounded-full border-2 border-white object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuY6UD-ThQWAYFUISNBNfUWxipScoTU" />
            </div>
            <div class="flex flex-col">
              <div class="flex text-yellow-400">
                <span class="material-symbols-outlined text-sm fill-current">star</span>
                <span class="material-symbols-outlined text-sm fill-current">star</span>
                <span class="material-symbols-outlined text-sm fill-current">star</span>
                <span class="material-symbols-outlined text-sm fill-current">star</span>
                <span class="material-symbols-outlined text-sm fill-current">star</span>
              </div>
              <span class="text-sm font-medium text-text-main">4.9/5 dari 200+ ulasan</span>
            </div>
          </div>
        </div>
        <div class="flex-1 w-full relative group">
          <div class="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl transform rotate-3 scale-95 opacity-50 group-hover:rotate-6 transition-transform duration-700"></div>
          <div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img alt="Nasi Campur" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEYfy7J788RR2Hmtg_jTeCS_9VfdL8tI6dspLJUeXw8AyItyLMLeoO4CJZtdsktGsXr5Hmi-H3nwbQn1D9fSGpM4kDkBeyzlHtl8dkVle" />
          </div>
          <!-- Floating Badge -->
          <div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style="animation-duration: 3s;">
            <div class="bg-red-100 p-2 rounded-full text-red-600">
              <span class="material-symbols-outlined">local_fire_department</span>
            </div>
            <div>
              <p class="text-xs text-text-muted font-semibold uppercase">Tingkat Kepedasan</p>
              <p class="text-sm font-bold text-text-main">Dapat Disesuaikan</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu Grid -->
    <section class="w-full px-4 py-16 bg-white mx-auto" id="menu">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 class="text-text-main text-3xl font-bold leading-tight tracking-[-0.015em] mb-2">Pilihan Menu Harian</h2>
            <p class="text-text-muted">Komponen segar disiapkan untuk membangun hidangan sempurna Anda.</p>
          </div>
          <a class="text-primary-dark font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">
            Lihat Menu Lengkap <span class="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          <!-- Menu items grid -->
          <div class="md:col-span-2 md:row-span-2 relative group rounded-2xl overflow-hidden cursor-pointer bg-gray-200">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
              <span class="bg-primary text-text-main text-xs font-bold px-2 py-1 rounded w-fit mb-2">Spesialisasi</span>
              <h3 class="text-white text-2xl font-bold">Rendang Daging</h3>
              <p class="text-gray-300 text-sm mt-1">Dimasak 8 jam dalam santan kaya dan rempah.</p>
            </div>
          </div>
          <div class="md:col-span-1 md:row-span-1 relative group rounded-2xl overflow-hidden cursor-pointer bg-gray-200">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
              <h3 class="text-white text-lg font-bold">Sate Ayam</h3>
              <p class="text-gray-300 text-xs">Tusuk ayam panggang.</p>
            </div>
          </div>
          <div class="md:col-span-1 md:row-span-1 relative group rounded-2xl overflow-hidden cursor-pointer bg-orange-50">
            <div class="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              <div class="size-12 rounded-full bg-orange-100 flex items-center justify-center mb-3 text-orange-600">
                <span class="material-symbols-outlined">local_fire_department</span>
              </div>
              <h3 class="text-text-main text-lg font-bold">Pilihan Sambal</h3>
              <p class="text-text-muted text-xs mt-1">Terasi, Matah, Ijo & lebih banyak.</p>
              <button class="mt-4 text-xs font-bold underline decoration-2 decoration-primary underline-offset-4">Jelajahi Pedas</button>
            </div>
          </div>
          <div class="md:col-span-2 md:row-span-1 relative group rounded-2xl overflow-hidden cursor-pointer bg-gray-200">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end">
              <h3 class="text-white text-lg font-bold">Gado Gado</h3>
              <p class="text-gray-300 text-xs">Sayuran campur dengan kuah kacang.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Builder -->
    <section class="w-full px-4 py-20 bg-[#f8fcfa] relative overflow-hidden" id="build">
      <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div class="max-w-5xl mx-auto text-center mb-12 relative z-10">
        <span class="text-primary-dark font-bold tracking-widest uppercase text-sm">Menu Interaktif</span>
        <h2 class="text-text-main text-3xl md:text-4xl font-black mt-2 mb-4">Buat Piring Impian Anda</h2>
        <p class="text-text-muted max-w-lg mx-auto">Jangan puas dengan yang sudah ada. Bangun piring Anda sendiri langkah demi langkah dan kami siap menyiapkannya.</p>
      </div>
      <div class="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10 relative z-10">
        <!-- Steps indicator and builder content -->
        <div class="flex justify-between mb-8 border-b border-gray-100 pb-6">
          <div class="flex items-center gap-2 min-w-max">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-text-main font-bold text-sm">1</span>
            <span class="font-bold text-text-main">Nasi</span>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-10">
          <div class="flex-1">
            <h3 class="font-bold text-xl mb-4">Pilih Nasi Anda</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 border-primary bg-primary/5 p-4 rounded-xl cursor-pointer flex flex-col items-center gap-3">
                <div class="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <span class="text-3xl">🍚</span>
                </div>
                <div class="text-center">
                  <p class="font-bold text-text-main">Nasi Putih</p>
                  <p class="text-xs text-text-muted">Nasi melati wangi</p>
                </div>
                <div class="absolute top-2 right-2 text-primary">
                  <span class="material-symbols-outlined">check_circle</span>
                </div>
              </div>
              <div class="border border-gray-200 hover:border-primary/50 p-4 rounded-xl cursor-pointer flex flex-col items-center gap-3">
                <div class="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
                  <span class="text-3xl">💛</span>
                </div>
                <div class="text-center">
                  <p class="font-bold text-text-main">Nasi Kuning</p>
                  <p class="text-xs text-text-muted">Nasi kunyit santan</p>
                </div>
              </div>
              <div class="border border-gray-200 hover:border-primary/50 p-4 rounded-xl cursor-pointer flex flex-col items-center gap-3">
                <div class="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
                  <span class="text-3xl">❤️</span>
                </div>
                <div class="text-center">
                  <p class="font-bold text-text-main">Nasi Merah</p>
                  <p class="text-xs text-text-muted">Nasi beras merah sehat</p>
                </div>
              </div>
              <div class="border border-gray-200 hover:border-primary/50 p-4 rounded-xl cursor-pointer flex flex-col items-center gap-3">
                <div class="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
                  <span class="text-3xl">🥥</span>
                </div>
                <div class="text-center">
                  <p class="font-bold text-text-main">Nasi Uduk</p>
                  <p class="text-xs text-text-muted">Nasi kelapa gurih</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1 bg-background-light rounded-2xl flex flex-col items-center justify-center p-8 relative min-h-[300px]">
            <p class="absolute top-4 left-4 text-xs font-bold uppercase text-gray-400 tracking-widest">Pratinjau Piring</p>
            <div class="relative w-64 h-64 rounded-full bg-white shadow-2xl border-4 border-gray-100 flex items-center justify-center">
              <span class="material-symbols-outlined text-gray-300 text-6xl opacity-20">add_circle</span>
            </div>
            <div class="w-full mt-8 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div>
                <p class="text-sm text-text-muted">Total Perkiraan</p>
                <p class="text-xl font-black text-text-main">Rp 45K</p>
              </div>
              <button class="bg-primary hover:bg-primary-dark text-text-main font-bold py-2 px-6 rounded-lg transition-colors">
                Langkah Berikutnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="w-full px-4 py-20 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-text-main text-3xl font-bold leading-tight tracking-[-0.015em] mb-12 text-center">Disukai oleh Penduduk Lokal</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-background-light p-8 rounded-2xl relative">
            <span class="material-symbols-outlined absolute top-6 right-6 text-4xl text-primary/20">format_quote</span>
            <div class="flex items-center gap-4 mb-6">
              <img alt="Sarah Jenkins" class="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANK-OY_rCE9oBUSVFTU9Tsrst" />
              <div>
                <h4 class="font-bold text-text-main">Sarah Jenkins</h4>
                <div class="flex text-yellow-400 text-xs">
                  <span class="material-symbols-outlined fill-current text-[16px]">star</span>
                  <span class="material-symbols-outlined fill-current text-[16px]">star</span>
                  <span class="material-symbols-outlined fill-current text-[16px]">star</span>
                  <span class="material-symbols-outlined fill-current text-[16px]">star</span>
                  <span class="material-symbols-outlined fill-current text-[16px]">star</span>
                </div>
              </div>
            </div>
            <p class="text-text-muted italic">"Rendang Daging kami benar-benar luar biasa. Ini mengingatkan saya pada perjalanan saya ke Bali musim lalu. Sistem pemesanan modern membuat istirahat makan siang jauh lebih cepat!"</p>
          </div>
          <div class="bg-background-light p-8 rounded-2xl relative">
            <span class="material-symbols-outlined absolute top-6 right-6 text-4xl text-primary/20">format_quote</span>
            <div class="flex items-center gap-4 mb-6">
              <img alt="Michael Chen" class="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvBxLOjVVz" />
              <div>
                <h4 class="font-bold text-text-main">Michael Chen</h4>
                <div class="flex text-yellow-400 text-xs">
                  <span class="material-symbols-outlined fill-current text-[16px]">star</span>
                  <span class="material-symbols-outlined fill-current text-[16px]">star</span>
                  <span class="material-symbols-outlined fill-current text-[16px]">star</span>
                  <span class="material-symbols-outlined fill-current text-[16px]">star</span>
                </div>
              </div>
            </div>
            <p class="text-text-muted italic">"Cita rasa autentik dalam suasana yang super bersih dan modern. Saya suka bisa menyesuaikan tingkat kepedasan sambal saya. Sangat direkomendasikan!"</p>
          </div>
          <div class="bg-background-light p-8 rounded-2xl relative">
            <span class="material-symbols-outlined absolute top-6 right-6 text-4xl text-primary/20">format_quote</span>
            <div class="flex items-center gap-4 mb-6">
              <img alt="Amanda Lee" class="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxJUjjiE1UcvRb" />
              <div>
                <h4 class="font-bold text-text-main">Amanda Lee</h4>
                <div class="flex text-yellow-400 text-xs">
                  <span class="material-symbols-outlined fill-current text-[16px]">star</span>
                  <span class="material-symbols-outlined fill-current text-[16px]">star</span>
                  <span class="material-symbols-outlined fill-current text-[16px]">star</span>
                  <span class="material-symbols-outlined fill-current text-[16px]">star</span>
                  <span class="material-symbols-outlined fill-current text-[16px]">star</span>
                </div>
              </div>
            </div>
            <p class="text-text-muted italic">"Akhirnya, ada tempat yang menyajikan Nasi Kuning yang tepat! Porsinya sangat besar dan bahannya terasa sangat segar."</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="w-full bg-[#10221c] text-white py-20 px-4" id="story">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div class="flex-1">
          <div class="relative">
            <div class="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-primary"></div>
            <div class="w-full rounded-lg shadow-2xl relative z-10 bg-gray-600 aspect-video"></div>
            <div class="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-primary"></div>
          </div>
        </div>
        <div class="flex-1 space-y-6">
          <h2 class="text-primary font-bold tracking-widest uppercase text-sm">Warisan Kami</h2>
          <h3 class="text-4xl font-display font-bold">Generasi Rasa,<br/>Satu Dapur Modern.</h3>
          <p class="text-gray-300 leading-relaxed">
            Bangalexzz Nasi Campur dimulai dengan buku resep sederhana yang diwariskan dari nenek kami di Yogyakarta. Kami percaya bahwa makanan tradisional tidak harus tertinggal di masa lalu. Dengan menggabungkan teknik memasak kuno dengan presentasi modern dan praktik keberlanjutan, kami menghadirkan yang terbaik dari kedua dunia.
          </p>
          <div class="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h4 class="text-2xl font-bold text-primary">1985</h4>
              <p class="text-sm text-gray-400">Resep Keluarga Pertama</p>
            </div>
            <div>
              <h4 class="text-2xl font-bold text-primary">15+</h4>
              <p class="text-sm text-gray-400">Rempah Unggulan</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-background-light pt-16 pb-8 border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div class="col-span-1 md:col-span-1">
            <div class="flex items-center gap-2 text-text-main mb-4">
              <span class="material-symbols-outlined text-primary text-2xl">rice_bowl</span>
              <span class="font-bold text-lg">Bangalexzz Surabaya</span>
            </div>
            <p class="text-text-muted text-sm mb-4">Cita rasa autentik, pengalaman bersantap modern. Rasakan tradisi hari ini.</p>
            <div class="flex gap-4">
              <a class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-text-main shadow-sm hover:bg-primary transition-colors" href="#">
                <span class="material-symbols-outlined text-sm">public</span>
              </a>
              <a class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-text-main shadow-sm hover:bg-primary transition-colors" href="#">
                <span class="material-symbols-outlined text-sm">alternate_email</span>
              </a>
            </div>
          </div>
          <div>
            <h4 class="font-bold text-text-main mb-4">Tautan Cepat</h4>
            <ul class="space-y-2 text-sm text-text-muted">
              <li><a class="hover:text-primary transition-colors" href="#">Menu</a></li>
              <li><a class="hover:text-primary transition-colors" href="#">Katering</a></li>
              <li><a class="hover:text-primary transition-colors" href="#">Tentang Kami</a></li>
              <li><a class="hover:text-primary transition-colors" href="#">Karir</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-text-main mb-4">Lokasi</h4>
            <ul class="space-y-2 text-sm text-text-muted">
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-primary text-xs mt-1">location_on</span>
                Jl. Raya Kraton No. 123<br/>Surabaya 60175
              </li>
              <li class="flex items-start gap-2">
                <span class="material-symbols-outlined text-primary text-xs mt-1">phone</span>
                085155043133
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-text-main mb-4">Jam Buka</h4>
            <ul class="space-y-2 text-sm text-text-muted">
              <li class="flex justify-between">
                <span>Senin - Jumat</span>
                <span class="font-medium text-text-main">10:00 - 21:00</span>
              </li>
              <li class="flex justify-between">
                <span>Sabtu - Minggu</span>
                <span class="font-medium text-text-main">09:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 Bangalexzz Nasi Campur. Semua hak dilindungi.</p>
          <div class="flex gap-6 mt-4 md:mt-0">
            <a class="hover:text-text-main" href="#">Kebijakan Privasi</a>
            <a class="hover:text-text-main" href="#">Syarat Layanan</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'RestaurantNasiCampur',
  data() {
    return {
      title: 'Nasi Campur Bangalexzz - Hidangan Indonesia Modern',
      description: 'Bangalexzz Nasi Campur - Cita rasa autentik Indonesia dengan sentuhan modern di Surabaya'
    }
  },
  mounted() {
    document.documentElement.lang = 'id'
    document.title = this.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', this.description)
  }
}
</script>

<style scoped>
:root {
  --primary: #13eca4;
  --primary-dark: #0eb57d;
  --background-light: #f6f8f7;
  --background-dark: #10221c;
  --text-main: #0d1b17;
  --text-muted: #4c9a80;
}

/* Tailwind classes will be applied via template classes */
</style>
