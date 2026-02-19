<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col bg-gradient-to-b from-slate-50 to-white text-slate-900">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <div class="flex items-center gap-3">
            <div class="text-blue-600 p-2 bg-blue-50 rounded-lg">
              <span class="material-symbols-outlined text-2xl">real_estate_agent</span>
            </div>
            <span class="text-xl font-bold text-slate-900">Agent Properti</span>
          </div>
          <nav class="hidden md:flex items-center gap-8">
            <a href="#" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Beranda</a>
            <a href="#" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Dijual</a>
            <a href="#" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Disewa</a>
            <a href="#" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Tentang Kami</a>
          </nav>
          <div class="hidden md:flex items-center gap-4">
            <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-blue-600/20">
              Hubungi Kami
            </button>
          </div>
          <button class="md:hidden text-slate-600">
            <span class="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>

    <main class="flex-1">
      <!-- Hero Section -->
      <section class="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&auto=format&fit=crop');"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/40"></div>
        <div class="relative z-10 w-full max-w-4xl px-4 text-center">
          <span class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-white/10 backdrop-blur-sm rounded-full border border-blue-400/30">
            Solusi Properti Terpercaya
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Temukan Properti Impian Anda</h1>
          <p class="text-slate-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto">Kami menyediakan pilihan properti eksklusif dengan harga terbaik dan proses legalitas yang aman di seluruh Indonesia.</p>
          <div class="bg-white p-3 rounded-xl shadow-2xl max-w-3xl mx-auto">
            <div class="flex flex-col md:flex-row gap-3">
              <div class="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-slate-200">
                <span class="material-symbols-outlined text-slate-400 mr-3">search</span>
                <input class="w-full bg-transparent border-none focus:ring-0 text-slate-700 placeholder:text-slate-400 text-sm h-12" placeholder="Cari lokasi atau area..." type="text"/>
              </div>
              <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition-colors w-full md:w-auto">
                Cari Properti
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-slate-900 mb-4">Mengapa Memilih Kami?</h2>
            <div class="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="group p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl transition-all hover:-translate-y-2">
              <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <span class="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <h3 class="text-xl font-bold mb-3">Legalitas Terjamin</h3>
              <p class="text-slate-600">Kami memastikan setiap properti memiliki kelengkapan dokumen yang sah dan bebas sengketa.</p>
            </div>
            <div class="group p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl transition-all hover:-translate-y-2">
              <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <span class="material-symbols-outlined text-3xl">handshake</span>
              </div>
              <h3 class="text-xl font-bold mb-3">Negosiasi Terbaik</h3>
              <p class="text-slate-600">Tim kami ahli dalam negosiasi untuk mendapatkan harga properti terbaik sesuai budget Anda.</p>
            </div>
            <div class="group p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl transition-all hover:-translate-y-2">
              <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <span class="material-symbols-outlined text-3xl">support_agent</span>
              </div>
              <h3 class="text-xl font-bold mb-3">Layanan 24/7</h3>
              <p class="text-slate-600">Konsultasi gratis kapan saja. Agen kami siap membantu menjawab pertanyaan seputar properti.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Properties -->
      <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-slate-900 mb-12">Properti Pilihan Terkini</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div class="relative aspect-[4/3] overflow-hidden">
                <span class="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">DIJUAL</span>
                <img alt="Luxury modern house" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1560079748-8cc5b8b3859b?w=800&h=600&auto=format&crop=center"/>
              </div>
              <div class="p-5">
                <h3 class="text-lg font-bold text-slate-900 mb-2">Rumah Modern Menteng</h3>
                <p class="text-2xl font-bold text-blue-600 mb-4">Rp 15.000.000.000</p>
                <div class="flex items-center gap-4 text-slate-500 text-sm border-t border-slate-100 pt-4">
                  <div class="flex items-center gap-1"><span class="material-symbols-outlined text-lg">bed</span><span>5 KT</span></div>
                  <div class="flex items-center gap-1"><span class="material-symbols-outlined text-lg">bathtub</span><span>4 KM</span></div>
                  <div class="flex items-center gap-1"><span class="material-symbols-outlined text-lg">square_foot</span><span>350m²</span></div>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div class="relative aspect-[4/3] overflow-hidden">
                <span class="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">DISEWA</span>
                <img alt="Tropical villa" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1570129477492-45c003ed2338?w=800&h=600&auto=format&crop=center"/>
              </div>
              <div class="p-5">
                <h3 class="text-lg font-bold text-slate-900 mb-2">Villa Tropis Bali</h3>
                <p class="text-2xl font-bold text-blue-600 mb-4">Rp 350.000.000 <span class="text-sm text-slate-500 font-normal">/thn</span></p>
                <div class="flex items-center gap-4 text-slate-500 text-sm border-t border-slate-100 pt-4">
                  <div class="flex items-center gap-1"><span class="material-symbols-outlined text-lg">bed</span><span>3 KT</span></div>
                  <div class="flex items-center gap-1"><span class="material-symbols-outlined text-lg">bathtub</span><span>3 KM</span></div>
                  <div class="flex items-center gap-1"><span class="material-symbols-outlined text-lg">square_foot</span><span>200m²</span></div>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div class="relative aspect-[4/3] overflow-hidden">
                <span class="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">DIJUAL</span>
                <img alt="Modern apartment" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&auto=format&crop=center"/>
              </div>
              <div class="p-5">
                <h3 class="text-lg font-bold text-slate-900 mb-2">Apartemen Sky View</h3>
                <p class="text-2xl font-bold text-blue-600 mb-4">Rp 2.100.000.000</p>
                <div class="flex items-center gap-4 text-slate-500 text-sm border-t border-slate-100 pt-4">
                  <div class="flex items-center gap-1"><span class="material-symbols-outlined text-lg">bed</span><span>2 KT</span></div>
                  <div class="flex items-center gap-1"><span class="material-symbols-outlined text-lg">bathtub</span><span>1 KM</span></div>
                  <div class="flex items-center gap-1"><span class="material-symbols-outlined text-lg">square_foot</span><span>78m²</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="bg-blue-600 py-16 md:py-20 relative overflow-hidden">
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div class="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Butuh Konsultasi Lebih Lanjut?</h2>
          <p class="text-white/80 mb-8 text-lg">Agen kami siap membantu Anda menemukan properti impian atau menjual aset Anda dengan harga terbaik.</p>
          <button class="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105">
            Hubungi via WhatsApp
          </button>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="py-16 bg-white px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-slate-900 mb-8">Hubungi Kami</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 class="font-bold text-lg text-slate-900 flex items-center gap-2 mb-2 justify-center">
                <span class="material-symbols-outlined text-blue-600">phone</span>
                Telepon
              </h3>
              <p class="text-slate-600">(021) 1234-5678</p>
            </div>
            <div>
              <h3 class="font-bold text-lg text-slate-900 flex items-center gap-2 mb-2 justify-center">
                <span class="material-symbols-outlined text-blue-600">location_on</span>
                Alamat
              </h3>
              <p class="text-slate-600">Jl. Raya Kraton No. 123, Surabaya 60175</p>
            </div>
            <div>
              <h3 class="font-bold text-lg text-slate-900 flex items-center gap-2 mb-2 justify-center">
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
  name: 'PropertyAgentClassic',
  mounted() {
    document.title = 'Agent Properti - Solusi Properti Terpercaya'
  }
}
</script>
