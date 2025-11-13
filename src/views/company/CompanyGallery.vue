<template>
  <div class="company-gallery">
    <!-- Hero Section -->
    <section class="gallery-hero section">
      <div class="container">
        <h1 class="page-title">Galeri Perjalanan</h1>
        <p class="page-subtitle">Momen-momen indah perjalanan suci bersama Barokah Journey</p>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-section section">
      <div class="container">
        <div class="gallery-wrapper" v-if="galleryItems.length > 0">
          <div 
            class="gallery-item" 
            v-for="(item, index) in galleryItems" 
            :key="index"
            @click="openLightbox(index)"
          >
            <img 
              :src="optimizeImageUrl(item.src, 600)" 
              :alt="item.title || 'Gallery Image'"
              loading="lazy"
            >
            <div class="gallery-overlay">
              <i class="fas fa-search-plus"></i>
              <span v-if="item.title">{{ item.title }}</span>
            </div>
          </div>
        </div>
        <div v-else class="no-gallery">
          <i class="fas fa-images"></i>
          <p>Galeri akan segera tersedia</p>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div class="lightbox" v-if="lightboxOpen" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">
          <i class="fas fa-times"></i>
        </button>
        <button class="lightbox-prev" @click="prevImage" v-if="galleryItems.length > 1">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="lightbox-next" @click="nextImage" v-if="galleryItems.length > 1">
          <i class="fas fa-chevron-right"></i>
        </button>
        <img 
          :src="optimizeImageUrl(currentImage.src, 1200)" 
          :alt="currentImage.title || 'Gallery Image'"
          class="lightbox-image"
        >
        <div class="lightbox-title" v-if="currentImage.title">
          {{ currentImage.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
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
    const lightboxOpen = ref(false)
    const currentIndex = ref(0)
    
    const galleryItems = computed(() => {
      const gallery = props.companyData?.gallery || []
      return gallery.filter(item => item.type === 'image')
    })
    
    const currentImage = computed(() => {
      return galleryItems.value[currentIndex.value] || {}
    })
    
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
      currentIndex.value = (currentIndex.value - 1 + galleryItems.value.length) % galleryItems.value.length
    }
    
    // Keyboard navigation
    const handleKeydown = (e) => {
      if (!lightboxOpen.value) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    
    window.addEventListener('keydown', handleKeydown)
    
    return {
      galleryItems,
      lightboxOpen,
      currentImage,
      currentIndex,
      optimizeImageUrl,
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
}

/* Container */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
}

/* Section Base */
.section {
  padding: 100px 0;
}

/* Hero Section */
.gallery-hero {
  background: var(--cp-gradient);
  color: #fff;
  text-align: center;
  padding: 120px 0;
}

.page-title {
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #ffffff !important;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.5);
  opacity: 1 !important;
}

.page-subtitle {
  font-size: 22px;
  color: #ffffff !important;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 0.7), 0 0 2px rgba(0, 0, 0, 0.5);
  font-weight: 600;
  opacity: 1 !important;
}

/* Gallery Section */
.gallery-section {
  background: var(--cp-bg-primary, #ffffff);
}

.gallery-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.gallery-item {
  flex: 1 1 300px;
  min-width: 300px;
  max-width: 400px;
  height: 350px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--cp-bg-secondary, #faf9f6);
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--cp-card-shadow, 0 4px 20px rgba(10, 26, 47, 0.08));
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(10, 26, 47, 0.85), transparent);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 24px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay i {
  font-size: 32px;
  color: #fff;
  margin-bottom: 12px;
}

.gallery-overlay span {
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
}

.no-gallery {
  text-align: center;
  padding: 100px 20px;
  color: var(--cp-text-secondary, #334155);
}

.no-gallery i {
  font-size: 64px;
  color: var(--cp-accent, #d4af37);
  margin-bottom: 24px;
}

.no-gallery p {
  font-size: 18px;
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 26, 47, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
}

.lightbox-title {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
}

.lightbox-close,
.lightbox-prev,
.lightbox-next {
  position: absolute;
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid #ffffff;
  color: #ffffff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 20px;
  backdrop-filter: blur(10px);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.lightbox-close:hover,
.lightbox-prev:hover,
.lightbox-next:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: #ffffff;
  color: #ffffff;
}

.lightbox-close {
  top: -60px;
  right: 0;
}

.lightbox-prev {
  left: -80px;
}

.lightbox-next {
  right: -80px;
}

/* Responsive */
@media (max-width: 1024px) {
  .page-title {
    font-size: 48px;
  }
  
  .section {
    padding: 80px 0;
  }
  
  .gallery-wrapper {
    gap: 16px;
  }
  
  .gallery-item {
    min-width: calc(50% - 8px);
    max-width: calc(50% - 8px);
    height: 300px;
  }
  
  .lightbox-prev {
    left: 20px;
  }
  
  .lightbox-next {
    right: 20px;
  }
  
  .lightbox-close {
    top: 20px;
    right: 20px;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 36px;
  }

  .page-subtitle {
    font-size: 18px;
  }

  .section {
    padding: 60px 0;
  }
  
  .gallery-hero {
    padding: 80px 0;
  }
  
  .gallery-item {
    min-width: 100%;
    max-width: 100%;
    height: 280px;
  }
  
  .lightbox {
    padding: 20px;
  }
  
  .lightbox-prev,
  .lightbox-next {
    width: 40px;
    height: 40px;
    font-size: 16px;
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
    font-size: 16px;
  }
}
</style>
