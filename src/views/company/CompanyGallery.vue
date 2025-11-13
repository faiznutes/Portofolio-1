<template>
  <div class="company-gallery">
    <!-- Hero Section -->
    <section class="gallery-hero section">
      <div class="container">
        <h1 class="page-title">Galeri</h1>
        <p class="page-subtitle">Jelajahi karya, pencapaian, dan cerita visual kami</p>
      </div>
    </section>

    <!-- Gallery Description -->
    <section class="gallery-intro section section-alt">
      <div class="container">
        <div class="intro-content">
          <h2>Cerita Visual Kami</h2>
          <p>{{ getGalleryDescription() }}</p>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="gallery-content section">
      <div class="container">
        <div class="gallery-grid" v-if="galleryItems.length > 0">
          <div class="gallery-item" v-for="(item, index) in galleryItems" :key="index" @click="openLightbox(index)">
            <img :src="optimizeImageUrl(item.src, 800)" :alt="item.title || `Galeri ${index + 1}`" loading="lazy">
            <div class="gallery-overlay">
              <div class="gallery-info">
                <span class="gallery-title">{{ item.title || `Image ${index + 1}` }}</span>
                <span class="gallery-detail" v-if="item.detail">{{ item.detail }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="no-gallery">
          <i class="fas fa-images"></i>
          <p>Tidak ada item galeri tersedia</p>
        </div>
      </div>
    </section>

    <!-- Story Behind Photos -->
    <section class="gallery-stories section section-alt" v-if="galleryStories.length > 0">
      <div class="container">
        <h2 class="section-title">Cerita di Balik Foto</h2>
        <div class="stories-grid">
          <div class="story-card card" v-for="(story, index) in galleryStories" :key="index">
            <h3>{{ story.title }}</h3>
            <p>{{ story.description }}</p>
            <div class="story-meta">
              <span><i class="fas fa-map-marker-alt"></i> {{ story.location }}</span>
              <span><i class="fas fa-calendar"></i> {{ story.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section section">
      <div class="container">
        <div class="cta-content">
          <h2>Ingin Melihat Lebih Banyak?</h2>
          <p>Hubungi kami untuk mengetahui lebih lanjut tentang karya dan layanan kami.</p>
          <router-link :to="`/website/${projectId}/contact`" class="btn-primary btn-large">
            <i class="fas fa-envelope"></i> Hubungi Kami
          </router-link>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div class="lightbox" v-if="lightboxOpen" @click="closeLightbox">
      <button class="lightbox-close" @click="closeLightbox" aria-label="Close">×</button>
      <button class="lightbox-prev" @click.stop="prevImage" aria-label="Previous">‹</button>
      <button class="lightbox-next" @click.stop="nextImage" aria-label="Next">›</button>
      <div class="lightbox-content">
        <img :src="currentImage.src" :alt="currentImage.title" @click.stop loading="eager">
        <div class="lightbox-info" v-if="currentImage.title">
          <h3>{{ currentImage.title }}</h3>
          <p v-if="currentImage.detail">{{ currentImage.detail }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { optimizeImageUrl } from '../../composables/useImageOptimizer'

export default {
  name: 'CompanyGallery',
  props: {
    companyData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const route = useRoute()
    const projectId = computed(() => route.params.id)
    const lightboxOpen = ref(false)
    const currentIndex = ref(0)
    
    const getGalleryDescription = () => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return 'Galeri kami menampilkan kreasi kuliner, suasana restoran, dan acara-acara tak terlupakan yang telah kami layani. Setiap foto menceritakan kisah tentang kualitas, passion, dan dedikasi terhadap keunggulan dalam makanan dan layanan.'
      } else if (category === 'umroh' || category === 'travel') {
        return 'Jelajahi galeri pengalaman perjalanan, perjalanan religi, dan destinasi indah kami. Foto-foto ini mengabadikan momen dan kenangan yang telah kami bantu ciptakan untuk traveler terhormat kami.'
      } else if (category === 'it') {
        return 'Galeri kami menampilkan project IT, infrastruktur teknologi, dan pencapaian tim kami. Setiap gambar merepresentasikan komitmen kami terhadap inovasi teknologi dan keunggulan dalam solusi digital.'
      }
      return 'Galeri kami menampilkan project, pencapaian, dan dampak yang telah kami buat untuk klien. Setiap gambar merepresentasikan komitmen kami terhadap keunggulan dan inovasi.'
    }
    
    const galleryItems = computed(() => {
      if (props.companyData?.gallery && props.companyData.gallery.length > 0) {
        return props.companyData.gallery.filter(item => item.type === 'image').map(item => ({
          src: item.src,
          title: item.title,
          detail: `Captured during our service delivery`
        }))
      }
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return [
          { src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop', title: 'Catering Event', detail: 'Professional catering setup for corporate event' },
          { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop', title: 'Restaurant Interior', detail: 'Elegant dining atmosphere' },
          { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop', title: 'Food Delivery', detail: 'Fresh meals ready for delivery' }
        ]
      } else if (category === 'umroh' || category === 'travel') {
        return [
          { src: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&auto=format&fit=crop', title: 'Religious Journey', detail: 'Pilgrimage to holy sites' },
          { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop', title: 'Travel Destination', detail: 'Beautiful destinations we visit' },
          { src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop', title: 'Group Tour', detail: 'Organized group travel experience' }
        ]
      }
      } else if (category === 'it') {
        return [
          { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop', title: 'Konsultasi IT', detail: 'Sesi konsultasi dengan klien untuk solusi teknologi' },
          { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop', title: 'Tim Development', detail: 'Kolaborasi tim dalam pengembangan project' },
          { src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop', title: 'Infrastruktur Server', detail: 'Setup dan maintenance server infrastructure' }
        ]
      }
      return [
        { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop', title: 'Pertemuan Bisnis', detail: 'Sesi konsultasi dengan klien' },
        { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop', title: 'Kerja Tim', detail: 'Pengiriman project kolaboratif' }
      ]
    })
    
    const galleryStories = computed(() => {
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return [
          { title: 'Acara Grand Opening', description: 'Grand opening restoran kami adalah acara yang tak terlupakan dengan ratusan tamu menikmati hidangan signature kami.', location: 'Restoran Utama', date: '2024' },
          { title: 'Catering Korporat', description: 'Berhasil melayani acara korporat 500 orang dengan menu custom dan layanan profesional.', location: 'Convention Center', date: '2024' }
        ]
      } else if (category === 'umroh' || category === 'travel') {
        return [
          { title: 'Perjalanan Umroh 2024', description: 'Memandu 50 jamaah dalam perjalanan umroh yang bermakna dengan dukungan lengkap dan bimbingan spiritual.', location: 'Makkah & Madinah', date: '2024' },
          { title: 'Pengalaman Group Tour', description: 'Mengorganisir group tour 30 orang ke destinasi indah dengan pemandu ahli.', location: 'Berbagai Destinasi', date: '2024' }
        ]
      } else if (category === 'it') {
        return [
          { title: 'Project Cloud Migration', description: 'Berhasil membantu klien melakukan migrasi ke cloud dengan downtime minimal dan performa optimal.', location: 'Kantor Klien', date: '2024' },
          { title: 'Launch Aplikasi Mobile', description: 'Meluncurkan aplikasi mobile yang sukses dengan 10.000+ download dalam bulan pertama.', location: 'App Store & Play Store', date: '2024' }
        ]
      }
      return [
        { title: 'Kisah Sukses Klien', description: 'Membantu klien mencapai pertumbuhan 300% melalui layanan konsultasi strategis kami.', location: 'Kantor Klien', date: '2024' }
      ]
    })
    
    const currentImage = computed(() => galleryItems.value[currentIndex.value] || {})
    
    const openLightbox = (index) => {
      currentIndex.value = index
      lightboxOpen.value = true
      document.body.style.overflow = 'hidden'
    }
    
    const closeLightbox = () => {
      lightboxOpen.value = false
      document.body.style.overflow = ''
    }
    
    const nextImage = () => {
      currentIndex.value = (currentIndex.value + 1) % galleryItems.value.length
    }
    
    const prevImage = () => {
      currentIndex.value = currentIndex.value === 0 ? galleryItems.value.length - 1 : currentIndex.value - 1
    }
    
    // Keyboard navigation
    const handleKeydown = (e) => {
      if (!lightboxOpen.value) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    
    watch(lightboxOpen, (isOpen) => {
      if (isOpen) {
        window.addEventListener('keydown', handleKeydown)
      } else {
        window.removeEventListener('keydown', handleKeydown)
      }
    })
    
    return {
      projectId,
      optimizeImageUrl,
      getGalleryDescription,
      galleryItems,
      galleryStories,
      lightboxOpen,
      currentImage,
      openLightbox,
      closeLightbox,
      nextImage,
      prevImage
    }
  }
}
</script>

<style scoped>
.company-gallery {
  width: 100%;
  min-height: 100vh;
}

.gallery-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  text-align: center;
  padding: 100px 0;
}

.page-title {
  font-size: 56px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
}

.page-subtitle {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.95);
}

.gallery-intro {
  background: #f8f9fa;
}

.intro-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.intro-content h2 {
  font-size: 36px;
  color: #1a1a1a;
  margin-bottom: 20px;
}

.intro-content p {
  font-size: 18px;
  color: #6c757d;
  line-height: 1.8;
}

.gallery-content {
  background: #ffffff;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  aspect-ratio: 4/3;
  background: #f8f9fa;
  transition: all 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
  padding: 25px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.gallery-title {
  color: #fff;
  font-weight: 600;
  font-size: 18px;
}

.gallery-detail {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
}

.no-gallery {
  text-align: center;
  padding: 100px 20px;
  color: #6c757d;
}

.no-gallery i {
  font-size: 64px;
  margin-bottom: 20px;
  color: #dee2e6;
}

.gallery-stories {
  background: #f8f9fa;
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.story-card {
  padding: 30px;
}

.story-card h3 {
  font-size: 22px;
  color: #1a1a1a;
  margin-bottom: 15px;
}

.story-card p {
  color: #6c757d;
  line-height: 1.8;
  margin-bottom: 20px;
}

.story-meta {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  font-size: 14px;
  color: #6c757d;
}

.story-meta span {
  display: flex;
  align-items: center;
  gap: 8px;
}

.story-meta i {
  color: #2563eb;
}

.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  text-align: center;
}

.cta-content h2 {
  font-size: 42px;
  margin-bottom: 20px;
  color: #fff;
}

.cta-content p {
  font-size: 18px;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.95);
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  cursor: pointer;
  padding: 20px;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  cursor: default;
  border-radius: 8px;
}

.lightbox-info {
  margin-top: 20px;
  text-align: center;
  color: #fff;
}

.lightbox-info h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff;
}

.lightbox-info p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: #fff;
  font-size: 36px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  z-index: 2001;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: #fff;
  font-size: 48px;
  cursor: pointer;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  z-index: 2001;
}

.lightbox-prev {
  left: 20px;
}

.lightbox-next {
  right: 20px;
}

.lightbox-prev:hover,
.lightbox-next:hover {
  background: rgba(255, 255, 255, 0.3);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 36px;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }

  .stories-grid {
    grid-template-columns: 1fr;
  }

  .lightbox-prev,
  .lightbox-next {
    width: 40px;
    height: 40px;
    font-size: 32px;
  }

  .lightbox-prev {
    left: 10px;
  }

  .lightbox-next {
    right: 10px;
  }

  .lightbox-close {
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
