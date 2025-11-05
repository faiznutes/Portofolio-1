import { ref, computed } from 'vue'
import { staticProjectsData } from '../data/projects-data'

export function useProjects() {
  const getProjectsData = () => {
    const stored = localStorage.getItem('submittedProjects')
    const dynamicData = stored ? JSON.parse(stored).filter(p => p.status === 'approved') : []
    const deletedStatic = localStorage.getItem('deletedStaticProjects') || '[]'
    const deleted = JSON.parse(deletedStatic)
    const filteredStatic = staticProjectsData.filter(p => !deleted.includes(p.id))
    return [...dynamicData, ...filteredStatic]
  }

  const getAllProjects = () => {
    return getProjectsData()
  }

  const getFeaturedProjects = () => {
    const projectsData = getProjectsData()
    const featuredIds = ['banner-pencalonan-bupati-lamongan', 'ayam-lepas-lebak-bulus', 'logo-fossei-rakereg-2021']
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

