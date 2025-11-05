export function compressImage(file, quality = 0.7) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
        canvas.toBlob((blob) => {
          const reader2 = new FileReader()
          reader2.onload = () => resolve(reader2.result)
          reader2.onerror = reject
          reader2.readAsDataURL(blob)
        }, 'image/jpeg', quality)
      }
      img.onerror = reject
      img.src = e.target.result
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

export function compressBase64Image(base64, quality = 0.7) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
      canvas.toBlob((blob) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
      }, 'image/jpeg', quality)
    }
    img.onerror = reject
    img.src = base64
  })
}

