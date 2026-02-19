import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [activeMenu, setActiveMenu] = useState('all')

  const menuItems = [
    {
      id: 1,
      category: 'signature',
      name: 'Mie Ayam Spesial Original',
      description: 'Resep rahasia turun temurun dengan bumbu pilihan dan daging ayam premium yang dimasak sempurna',
      price: 'Rp 28.000',
      image: '🍜',
      badge: 'Bestseller'
    },
    {
      id: 2,
      category: 'signature',
      name: 'Mie Ayam Bombay',
      description: 'Kombinasi unik mie ayam dengan cita rasa India yang bold dan nikmat',
      price: 'Rp 32.000',
      image: '🌶️',
      badge: 'Favorit'
    },
    {
      id: 3,
      category: 'signature',
      name: 'Mie Ayam Level Maksimal',
      description: 'Untuk yang berani, mie ayam dengan sambel yang super pedas dan menggigit',
      price: 'Rp 30.000',
      image: '🔥',
      badge: 'Paling Pedas'
    },
    {
      id: 4,
      category: 'special',
      name: 'Mie Ayam Telur Ceplok',
      description: 'Mie ayam dengan topping telur ceplok yang matang sempurna dan kuning menggoda',
      price: 'Rp 31.000',
      image: '🥚',
    },
    {
      id: 5,
      category: 'special',
      name: 'Mie Ayam Extra Ayam',
      description: 'Porsi daging ayam berlipat ganda untuk yang suka ayam, daging empuk dan banyak',
      price: 'Rp 38.000',
      image: '🍗',
    },
    {
      id: 6,
      category: 'special',
      name: 'Mie Ayam Pedas Manis Korea',
      description: 'Kolaborasi unik dengan citarasa Korea yang pedas dan manis berpadu sempurna',
      price: 'Rp 34.000',
      image: '🇰🇷',
    },
    {
      id: 7,
      category: 'noodles',
      name: 'Kwetiau Ayam',
      description: 'Kwetiau tebal dengan bumbu mie ayam kua dan sayuran segar pilihan',
      price: 'Rp 30.000',
      image: '🍲',
    },
    {
      id: 8,
      category: 'noodles',
      name: 'Bihun Goreng Ayam',
      description: 'Bihun yang renyah dengan daging ayam, sayuran, dan telur dalam satu piring',
      price: 'Rp 27.000',
      image: '✨',
    },
    {
      id: 9,
      category: 'sides',
      name: 'Bakso Ayam Homemade',
      description: 'Bakso buatan sendiri dengan daging ayam berkualitas dan bumbu alami',
      price: 'Rp 18.000',
      image: '⚪',
    },
    {
      id: 10,
      category: 'sides',
      name: 'Pangsit Goreng (6 pcs)',
      description: 'Pangsit renyah dengan isian daging ayam yang gurih dan lezat',
      price: 'Rp 16.000',
      image: '📦',
    },
    {
      id: 11,
      category: 'drinks',
      name: 'Es Teh Manis Original',
      description: 'Tehnya segar dengan manisan yang pas, perfect untuk menemani mie ayam panas',
      price: 'Rp 8.000',
      image: '🧋',
    },
    {
      id: 12,
      category: 'drinks',
      name: 'Jus Jeruk Segar Premium',
      description: 'Jeruk pilihan diambil sarinya langsung, tanpa pengawet, asli 100%',
      price: 'Rp 15.000',
      image: '🧡',
    },
  ]

  const filteredMenu = activeMenu === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeMenu)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🍜</span>
              <h1 className="text-xl font-bold text-amber-900">Mie Ayam Mas Reza</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#menu" className="text-gray-700 hover:text-amber-600 transition">Menu</a>
              <a href="#location" className="text-gray-700 hover:text-amber-600 transition">Lokasi</a>
              <a href="#testimonial" className="text-gray-700 hover:text-amber-600 transition">Review</a>
            </div>
            <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ✨ Mie Ayam Terbaik di Kota
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Mie Ayam Legendaris yang <span className="text-amber-600">Bikin Ketagihan</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Sejak 1995, kami melayani setiap mangkuk mie ayam dengan passion dan dedikasi. Bahan premium, bumbu pilihan, dan resep turun temurun menjadi rahasia kelezatan kami. Bukan sekadar mie ayam, tapi pengalaman kuliner yang memorable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition transform hover:scale-105">
                  📱 Pesan via WhatsApp
                </button>
                <button className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-50 transition">
                  📍 Lihat Lokasi
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-center">
                <div className="inline-block text-9xl animate-bounce">
                  🍜
                </div>
                <p className="text-gray-600 mt-4 text-lg">Mie ayam premium siap memanjakan lidah Anda</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white/80 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-600">28K+</div>
              <p className="text-gray-600 mt-2">Pelanggan Puas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600">29 Tahun</div>
              <p className="text-gray-600 mt-2">Berpengalaman</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600">5⭐</div>
              <p className="text-gray-600 mt-2">Rating Cemerlang</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600">16 Menu</div>
              <p className="text-gray-600 mt-2">Pilihan Istimewa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Kenapa Pilih Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bahan Premium</h3>
              <p className="text-gray-600 leading-relaxed">
                Kami hanya gunakan daging ayam pilihan dari supplier terpercaya. Setiap bahan dipilih dengan teliti untuk memastikan kualitas terbaik di setiap mangkuk.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">👨‍🍳</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Resep Legendaris</h3>
              <p className="text-gray-600 leading-relaxed">
                Resep rahasia kami merupakan warisan dari pendiri di tahun 1995. Bumbu unik dan teknik memasak khusus menjadi ciri khas yang tak tergantikan.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cepat & Fresh</h3>
              <p className="text-gray-600 leading-relaxed">
                Pesanan dimasak fresh saat Anda memesan. Dalam 5-10 menit, mie ayam panas kaya rasa sudah siap dinikmati dengan condiment lengkap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Menu Istimewa Kami</h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Dari mie ayam klasik hingga kreasi terbaru, semua dibuat dengan passion dan kualitas terbaik
          </p>

          {/* Filter */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActiveMenu('all')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeMenu === 'all'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Semua Menu
            </button>
            <button
              onClick={() => setActiveMenu('signature')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeMenu === 'signature'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Signature
            </button>
            <button
              onClick={() => setActiveMenu('special')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeMenu === 'special'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Special Edition
            </button>
            <button
              onClick={() => setActiveMenu('noodles')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeMenu === 'noodles'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Noodles Lainnya
            </button>
            <button
              onClick={() => setActiveMenu('sides')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeMenu === 'sides'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Lauk Pauk
            </button>
            <button
              onClick={() => setActiveMenu('drinks')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeMenu === 'drinks'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Minuman
            </button>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenu.map((item) => (
              <div key={item.id} className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-amber-300 transition group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-6xl groupe-hover:scale-110 transition">{item.image}</div>
                  {item.badge && (
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                  <button className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-700 transition">
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Kunjungi Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📍 Lokasi</h3>
              <p className="text-gray-600 text-lg mb-6">
                Jl. Mie Ayam Raya No. 123<br/>
                Kelurahan Cita Rasa<br/>
                Kota Istimewa<br/>
                Indonesia
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">⏰ Jam Operasional</h3>
              <div className="space-y-2 text-gray-600">
                <p>Senin - Jumat: 10:00 - 21:00</p>
                <p>Sabtu - Minggu: 09:00 - 22:00</p>
                <p className="text-amber-600 font-semibold">Buka setiap hari (No Rest Day!)</p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">📞 Hubungi Kami</h3>
              <div className="space-y-3">
                <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2">
                  💬 WhatsApp: 0812-3456-7890
                </button>
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition flex items-center justify-center gap-2">
                  📞 Telepon: (021) 5555-1234
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 text-center flex flex-col justify-center">
              <div className="text-8xl mb-4">🗺️</div>
              <p className="text-gray-700 text-lg">
                Lokasi strategis di pusat kota<br/>
                Mudah diakses dengan transportasi umum<br/>
                Tersedia area parkir luas<br/>
                Suasana nyaman untuk keluarga tercinta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonial" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Kata-Kata Pelanggan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 rounded-xl p-8 border-l-4 border-amber-600">
              <div className="flex gap-1 mb-4">
                {'⭐⭐⭐⭐⭐'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Mie ayam paling enak yang pernah saya makan! Bumbunya perfect, ayamnya empuk, dan harganya sangat terjangkau. Sekarang jadi rutinitas makan di sini!"
              </p>
              <p className="font-semibold text-gray-900">- Budi Sentosa</p>
              <p className="text-gray-600 text-sm">Pelanggan Setia (10 tahun)</p>
            </div>

            <div className="bg-amber-50 rounded-xl p-8 border-l-4 border-amber-600">
              <div className="flex gap-1 mb-4">
                {'⭐⭐⭐⭐⭐'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Saya pindah ke negara lain tapi saya tetap rindu Mie Ayam Mas Reza. Tidak ada bandingannya! Ini adalah cita rasa sejati Indonesia yang autentik."
              </p>
              <p className="font-semibold text-gray-900">- Siti Nurhaliza</p>
              <p className="text-gray-600 text-sm">Singapore</p>
            </div>

            <div className="bg-amber-50 rounded-xl p-8 border-l-4 border-amber-600">
              <div className="flex gap-1 mb-4">
                {'⭐⭐⭐⭐⭐'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Menu spesial mereka selalu inovatif tapi tetap menjaga cita rasa asli. Favorit saya adalah Mie Ayam Bombay, super lezat dan unik!"
              </p>
              <p className="font-semibold text-gray-900">- Ahmad Wijaya</p>
              <p className="text-gray-600 text-sm">Food Blogger</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Siap Merasakan Kelezatan?</h2>
          <p className="text-xl mb-8 opacity-90">
            Jangan tunda lagi, pesan mie ayam favorit Anda sekarang dan rasakan perbedaannya!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition transform hover:scale-105">
              💬 Pesan via WhatsApp
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition">
              📲 Buka di Google Maps
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🍜</span>
                <h3 className="text-xl font-bold">Mie Ayam Mas Reza</h3>
              </div>
              <p className="text-gray-400">
                Sejak 1995, kami melayani dengan hati dan dedikasi. Terima kasih atas dukungan Anda!
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Menu</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#menu" className="hover:text-white transition">Mie Ayam Original</a></li>
                <li><a href="#menu" className="hover:text-white transition">Special Edition</a></li>
                <li><a href="#menu" className="hover:text-white transition">Noodles Lainnya</a></li>
                <li><a href="#menu" className="hover:text-white transition">Minuman Segar</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Ikuti Kami</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition">📘 Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition">📷 Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition">🎵 TikTok</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Mie Ayam Mas Reza. Semua hak dilindungi. Made with ❤️ for delicious food!</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
