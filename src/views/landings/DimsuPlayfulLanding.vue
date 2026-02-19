<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col bg-gradient-to-br from-pink-100 via-yellow-50 to-orange-100">
    <!-- Header -->
    <header class="sticky top-0 z-40 flex items-center justify-between border-b border-pink-200 bg-white/90 backdrop-blur-md px-4 py-4 md:px-10">
      <div class="flex items-center gap-4">
        <span class="material-symbols-outlined text-3xl text-pink-600 animate-bounce" style="animation-duration: 2s;">favorite</span>
        <h2 class="text-slate-900 text-lg md:text-xl font-bold">Bangalexzz Dimsum</h2>
      </div>
      <nav class="hidden md:flex items-center gap-6">
        <a href="#menu" class="text-slate-600 hover:text-pink-600 text-sm font-semibold transition-colors">MENU</a>
        <a href="#about" class="text-slate-600 hover:text-pink-600 text-sm font-semibold transition-colors">WHY US</a>
        <a href="#contact" class="text-slate-600 hover:text-pink-600 text-sm font-semibold transition-colors">DROP BY</a>
      </nav>
    </header>

    <main class="flex-1">
      <!-- Hero Section -->
      <section class="relative pt-12 pb-16 px-4 md:px-10">
        <div class="mx-auto max-w-7xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 mb-4 w-fit">
                <span class="text-xl">🔥</span>
                <span class="text-white text-xs font-bold uppercase tracking-wider">Viral di Surabaya!</span>
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 text-slate-900">
                DIMSUM <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">KEPODANG</span>! 🤩
              </h1>
              <p class="text-slate-700 text-lg mb-8 font-medium">
                Bukan dimsum biasa! 🌈 Rasa nya auto ngakak, harga 学生 friendly, dan yang pasti IG-able banget! 
                Suitable buat kamu yang butuh healing setelah deadline 📅
              </p>
              <button class="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg transform hover:scale-105 flex items-center gap-2">
                ORDER NOW! 🛒
              </button>
              <div class="flex items-center gap-2 mt-4">
                <span class="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
                <span class="text-slate-600 text-sm font-medium">4.9/5 (999+ review)</span>
              </div>
            </div>
            <div class="relative rounded-3xl aspect-video shadow-2xl flex items-center justify-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1200&h=800&auto=format&fit=crop" 
                class="w-full h-full object-cover" alt="Dimsum Viral" />
              <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg">
                <span class="text-2xl">📸</span>
                <span class="text-xs font-bold text-slate-900 ml-1">IG Worthy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Menu Section -->
      <section id="menu" class="py-16 lg:py-24 px-4 md:px-10 bg-white">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-2 text-center">MENU ANDALAN 🐼</h2>
          <p class="text-slate-600 text-center mb-12 font-medium">Yang udah jadi favorit anak muda Surabaya! 😍</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-pink-100 to-pink-50 border-2 border-pink-200">
              <div class="aspect-video flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=800&h=600&auto=format&crop=center" 
                  class="w-full h-full object-cover" alt="Shrimp Dimsum" />
              </div>
              <div class="p-4">
                <span class="text-xs font-bold bg-pink-500 text-white px-2 py-1 rounded-full">BEST SELLER! 🔥</span>
                <h3 class="font-bold text-lg text-slate-900 mt-2">Shrimp Dimsum MAX 🍤</h3>
                <p class="text-slate-600 text-sm mt-1">Udang gede-gede, creamy poll! Worth it Rp 95rb! ✨</p>
                <p class="text-pink-600 font-black text-xl mt-3">Rp 95.000</p>
              </div>
            </div>

            <div class="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-yellow-100 to-yellow-50 border-2 border-yellow-200">
              <div class="aspect-video flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&h=600&auto=format&crop=center" 
                  class="w-full h-full object-cover" alt="Pork Bun" />
              </div>
              <div class="p-4">
                <span class="text-xs font-bold bg-yellow-500 text-white px-2 py-1 rounded-full">MUST TRY! 😋</span>
                <h3 class="font-bold text-lg text-slate-900 mt-2">Pork Bun SELOT 💛</h3>
                <p class="text-slate-600 text-sm mt-1">Lumer creamy poll! Bikin ketagihan minta tambah lagi! 🤤</p>
                <p class="text-yellow-600 font-black text-xl mt-3">Rp 75.000</p>
              </div>
            </div>

            <div class="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 bg-gradient-to-br from-orange-100 to-orange-50 border-2 border-orange-200">
              <div class="aspect-video flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=600&auto=format&crop=center" 
                  class="w-full h-full object-cover" alt="Veggie Dimsum" />
              </div>
              <div class="p-4">
                <span class="text-xs font-bold bg-green-500 text-white px-2 py-1 rounded-full">HEALTHY! 🥬</span>
                <h3 class="font-bold text-lg text-slate-900 mt-2">Veggie Dimsum GREEN 🌿</h3>
                <p class="text-slate-600 text-sm mt-1">Sehat tapi tetap jos! Cocok buat yang lagi diet tapi tetap mau jajan! 💪</p>
                <p class="text-orange-600 font-black text-xl mt-3">Rp 65.000</p>
              </div>
            </div>
          </div>
          <div class="text-center mt-8">
            <button class="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl transition-all">
              LIHAT SEMENU →
            </button>
          </div>
        </div>
      </section>

      <!-- Promo Banner -->
      <section class="py-8 px-4 bg-gradient-to-r from-pink-500 to-orange-500">
        <div class="max-w-7xl mx-auto text-center">
          <p class="text-white font-bold text-lg">🎉 AMBIL PROMO!-belanja Rp 150rb FREE Minuman! 🎉</p>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-16 lg:py-24 px-4 md:px-10 bg-slate-900">
        <div class="mx-auto max-w-7xl">
          <h2 class="text-3xl md:text-4xl font-black text-white mb-2 text-center">WHY BANGALEXZZ? 🤔</h2>
          <p class="text-slate-400 text-center mb-12">Nih alasan kenapa kalian harus cobain! 👇</p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-pink-500 transition-all">
              <div class="text-5xl mb-3">👨‍🍳</div>
              <h3 class="font-black text-white text-lg">MASTER CHEF</h3>
              <p class="text-slate-400 text-sm mt-2">Buatnya sama ahlinya, rasanya auto mantap! 🔥</p>
            </div>
            <div class="text-center p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-pink-500 transition-all">
              <div class="text-5xl mb-3">💸</div>
              <h3 class="font-black text-white text-lg">STUDENT BUDGET</h3>
              <p class="text-slate-400 text-sm mt-2">Harga mahasiswa friendly, гаjangan kuat kantong! 😎</p>
            </div>
            <div class="text-center p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-pink-500 transition-all">
              <div class="text-5xl mb-3">📍</div>
              <h3 class="font-black text-white text-lg">EASY GO</h3>
              <p class="text-slate-400 text-sm mt-2">Lokasi strategis, Parkir luas, auto方便的! 🚗</p>
            </div>
            <div class="text-center p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-pink-500 transition-all">
              <div class="text-5xl mb-3">⏰</div>
              <h3 class="font-black text-white text-lg">LONG HOURS</h3>
              <p class="text-slate-400 text-sm mt-2">Buka sampe malem, bisa buat nongkrong atau deadline! 🌙</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimoni -->
      <section class="py-16 px-4 bg-pink-50">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-black text-slate-900 mb-8 text-center">UDANGIN SAMBEL 🤝</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-2xl shadow-lg">
              <div class="flex items-center gap-2 mb-4">
                <span class="text-3xl">🙆‍♀️</span>
                <div>
                  <p class="font-bold text-slate-900">Citra 🧚‍♀️</p>
                  <p class="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
              <p class="text-slate-600 italic">"Gilaa ini dimsum enak bgt! Aku sampe datang 3x dalam seminggu wkwk 🌸"</p>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-lg">
              <div class="flex items-center gap-2 mb-4">
                <span class="text-3xl">🙆‍♂️</span>
                <div>
                  <p class="font-bold text-slate-900">Rezky 🧢</p>
                  <p class="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
              <p class="text-slate-600 italic">"Murah berkualitas gini jarang ada! Fav aku si Pork Bun, LUMER BGT! 😍"</p>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-lg">
              <div class="flex items-center gap-2 mb-4">
                <span class="text-3xl">🙆</span>
                <div>
                  <p class="font-bold text-slate-900">Nadira 💅</p>
                  <p class="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
              <p class="text-slate-600 italic">"Tempat aesthetic bgt buat foto-foto! Yuk sini-sana cobain! 📸✨"</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-16 px-4 bg-gradient-to-r from-pink-500 to-orange-500 text-center">
        <h2 class="text-3xl md:text-4xl font-black text-white mb-4">YUK GAS KE BANGALEXZZ! 🚀</h2>
        <p class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Dijamin ketagihan! Atau uang kembali! ( bercanda 😄 )</p>
        <button class="bg-white text-pink-600 font-black py-4 px-10 rounded-xl shadow-2xl hover:scale-105 transition-transform">
          CHAT VIA WHATSAPP 💬
        </button>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-16 lg:py-24 px-4 md:px-10 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div class="p-6">
              <div class="text-5xl mb-4">📱</div>
              <h3 class="font-black text-lg text-slate-900 mb-2">WHATSAPP</h3>
              <p class="text-slate-600 font-medium">+62 851-5504-3133</p>
              <p class="text-green-500 text-sm font-bold mt-1">Fast Response! ⚡</p>
            </div>
            <div class="p-6">
              <div class="text-5xl mb-4">📍</div>
              <h3 class="font-black text-lg text-slate-900 mb-2">LOKASI</h3>
              <p class="text-slate-600 font-medium">Jl. Raya Kraton No. 123, Surabaya 60175</p>
            </div>
            <div class="p-6">
              <div class="text-5xl mb-4">⏰</div>
              <h3 class="font-black text-lg text-slate-900 mb-2">BUKA</h3>
              <p class="text-slate-600 font-medium">Everyday: 11:00 - 22:00</p>
              <p class="text-pink-500 text-sm font-bold mt-1">Late night available! 🌙</p>
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
    document.title = 'Bangalexzz Dimsum - Viral Dimsum Surabaya! 🌈'
  }
}
</script>
