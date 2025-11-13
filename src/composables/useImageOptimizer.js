/**
 * Image Optimizer - Auto compress images before use
 * Mengoptimalkan gambar dengan kompresi otomatis untuk performa lebih baik
 */

/**
 * Optimize image URL dengan menambahkan parameter kompresi
 * Untuk external images (Unsplash, dll)
 */
export function optimizeImageUrl(url, width = 800, quality = 80) {
  if (!url) return url
  
  // Jika sudah base64, return as is
  if (url.startsWith('data:image/')) return url
  
  // Jika URL external (Unsplash, dll), tambahkan parameter optimasi
  if (url.includes('unsplash.com') || url.includes('images.unsplash.com')) {
    // Unsplash sudah support parameter w dan q
    const separator = url.includes('?') ? '&' : '?'
    return `${url}${separator}w=${width}&auto=format&fit=crop&q=${quality}`
  }
  
  // Untuk URL lain, return as is
  return url
}

/**
 * Lazy load image dengan optimasi
 */
export function createOptimizedImage(src, alt = '', width = 800) {
  const optimizedSrc = optimizeImageUrl(src, width)
  
  return {
    src: optimizedSrc,
    alt,
    loading: 'lazy',
    decoding: 'async'
  }
}

/**
 * Preload critical images
 */
export function preloadImage(src) {
  if (!src) return
  
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = optimizeImageUrl(src, 1920, 85)
  document.head.appendChild(link)
}

