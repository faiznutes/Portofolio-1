import { ref, computed } from 'vue'
import { staticProjectsData } from '../data/projects-data'

// Helper function to fix image paths (handle spaces and special characters)
const fixImagePath = (path) => {
  if (!path) return path
  // If it's already a base64 data URL, return as is
  if (path.startsWith('data:image/')) return path
  // If it's already encoded or starts with http, return as is
  if (path.startsWith('http')) return path
  // Encode only the filename parts, keep path separators
  const parts = path.split('/')
  const encodedParts = parts.map((part, index) => {
    // Keep first part (empty string or root) and last part (filename)
    if (index === 0 && part === '') return ''
    // Encode only the filename (last part) and folder names
    return encodeURIComponent(part)
  })
  return encodedParts.join('/')
}

export function useProjects() {
  const getProjectsData = () => {
    const stored = localStorage.getItem('submittedProjects')
    const dynamicData = stored ? JSON.parse(stored).filter(p => p.status === 'approved') : []
    const deletedStatic = localStorage.getItem('deletedStaticProjects') || '[]'
    const deleted = JSON.parse(deletedStatic)
    const filteredStatic = staticProjectsData.filter(p => !deleted.includes(p.id))
    const allProjects = [...dynamicData, ...filteredStatic]
    // Fix image paths in all projects
    return allProjects.map(project => ({
      ...project,
      image: fixImagePath(project.image),
      gallery: project.gallery ? project.gallery.map(item => ({
        ...item,
        src: item.type === 'image' ? fixImagePath(item.src) : item.src
      })) : []
    }))
  }

  const getAllProjects = () => {
    return getProjectsData()
  }

  const getFeaturedProjects = () => {
    const projectsData = getProjectsData()
    const featuredIds = ['pencalonan-bupati-lamongan', 'ayam-lepas-lebak-bulus', 'logo-fossei-rakereg-2021']
    return featuredIds
      .map(id => projectsData.find(p => p.id === id))
      .filter(p => p)
  }

  const getProjectById = (id) => {
    const projectsData = getProjectsData()
    return projectsData.find(p => p.id === id)
  }

  const getProjectsByCategory = (category) => {
    const projectsData = getProjectsData()
    if (category === 'all') return projectsData
    // Filter 'website' akan menampilkan semua project website company profile
    if (category === 'website') {
      const websiteCategories = ['website', 'fnb', 'umroh', 'travel', 'it']
      return projectsData.filter(p => websiteCategories.includes(p.category))
    }
    return projectsData.filter(p => p.category === category)
  }

  const truncate = (text, words) => {
    const wordArray = text.split(' ')
    if (wordArray.length <= words) return text
    return wordArray.slice(0, words).join(' ') + '...'
  }

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return {
    getAllProjects,
    getFeaturedProjects,
    getProjectById,
    getProjectsByCategory,
    truncate,
    capitalizeFirst
  }
}

