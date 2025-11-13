<template>
  <div class="company-gallery">
    <section class="gallery-hero">
      <div class="container">
        <h1 class="page-title">Gallery</h1>
        <p class="page-subtitle">Explore our work and achievements</p>
      </div>
    </section>

    <section class="gallery-content">
      <div class="container">
        <div class="gallery-grid" v-if="galleryItems.length > 0">
          <div class="gallery-item" v-for="(item, index) in galleryItems" :key="index" @click="openLightbox(index)">
            <img :src="item.src" :alt="item.title || `Gallery ${index + 1}`" loading="lazy">
            <div class="gallery-overlay">
              <span class="gallery-title">{{ item.title || `Image ${index + 1}` }}</span>
            </div>
          </div>
        </div>
        <div v-else class="no-gallery">
          <p>No gallery items available</p>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div class="lightbox" v-if="lightboxOpen" @click="closeLightbox">
      <button class="lightbox-close" @click="closeLightbox">×</button>
      <button class="lightbox-prev" @click.stop="prevImage">‹</button>
      <button class="lightbox-next" @click.stop="nextImage">›</button>
      <img :src="currentImage.src" :alt="currentImage.title" @click.stop>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

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
      if (props.companyData?.gallery && props.companyData.gallery.length > 0) {
        return props.companyData.gallery.filter(item => item.type === 'image')
      }
      // Default gallery images based on category
      const category = props.companyData?.category || 'general'
      if (category === 'fnb') {
        return [
          { src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop', title: 'Catering Event' },
          { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop', title: 'Restaurant Interior' },
          { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop', title: 'Food Delivery' }
        ]
      } else if (category === 'umroh' || category === 'travel') {
        return [
          { src: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&auto=format&fit=crop', title: 'Religious Journey' },
          { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop', title: 'Travel Destination' },
          { src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop', title: 'Group Tour' }
        ]
      }
      return [
        { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop', title: 'Business Meeting' },
        { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop', title: 'Team Work' }
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
    
    return {
      galleryItems,
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
  background: linear-gradient(135deg, var(--section-bg) 0%, rgba(26, 35, 50, 0.8) 100%);
  padding: 80px 0 60px;
  text-align: center;
}

.page-title {
  font-size: 48px;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 15px;
}

.page-subtitle {
  font-size: 20px;
  color: var(--subtext-color);
}

.gallery-content {
  padding: 80px 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  aspect-ratio: 4/3;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px var(--hover-shadow);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-title {
  color: #fff;
  font-weight: 600;
}

.no-gallery {
  text-align: center;
  padding: 60px 20px;
  color: var(--subtext-color);
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
}

.lightbox img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  cursor: default;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 48px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.lightbox-close:hover {
  transform: scale(1.2);
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
  transition: background 0.3s ease;
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
    font-size: 32px;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }

  .container {
    padding: 0 20px;
  }

  .lightbox-prev,
  .lightbox-next {
    width: 40px;
    height: 40px;
    font-size: 32px;
  }
}
</style>

