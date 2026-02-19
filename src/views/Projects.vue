<template>
  <div class="projects-page">
    <section class="projects2-section">
      <h1 class="projects2-title">All Projects</h1>

      <div class="projects2-filters">
        <button 
          v-for="filter in filters" 
          :key="filter.value"
          :class="{ active: currentFilter === filter.value }"
          @click="setFilter(filter.value)"
        >
          {{ filter.label }}
        </button>
      </div>

      <div class="projects2-grid" v-if="paginatedProjects.length > 0">
        <div 
          class="project-card" 
          v-for="project in paginatedProjects" 
          :key="project.id"
          @click="goToProject(project.id)"
        >
          <img :src="project.image || '/assets/images/project1.jpg'" :alt="project.title" loading="lazy">
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ truncate(project.description, 5) }}</p>
            <span v-if="getYear(project.date)" class="project-year">{{ getYear(project.date) }}</span>
          </div>
        </div>
      </div>

      <div v-else class="no-projects">
        <p>Tidak ada proyek untuk kategori ini.</p>
      </div>

      <div class="pagination" v-if="totalPages > 1">
        <button 
          v-for="page in totalPages" 
          :key="page"
          class="page-btn"
          :class="{ active: currentPage === page }"
          @click="setPage(page)"
        >
          {{ page }}
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProjects } from '../composables/useProjects'

export default {
  name: 'Projects',
  setup() {
    const router = useRouter()
    const { getAllProjects, getProjectsByCategory, truncate, getProjectById } = useProjects()
    
    const currentFilter = ref('all')
    const currentPage = ref(1)
    const perPage = 9

    const filters = [
      { label: 'All', value: 'all' },
      { label: 'Website', value: 'website' },
      { label: 'Video', value: 'video' },
      { label: 'Design', value: 'design' },
      { label: 'Landing Page', value: 'landing-page' }
    ]

    const filteredProjects = computed(() => {
      return getProjectsByCategory(currentFilter.value)
    })

    const totalPages = computed(() => {
      return Math.ceil(filteredProjects.value.length / perPage)
    })

    const paginatedProjects = computed(() => {
      const start = (currentPage.value - 1) * perPage
      const end = start + perPage
      return filteredProjects.value.slice(start, end)
    })

    const setFilter = (filter) => {
      currentFilter.value = filter
      currentPage.value = 1
    }

    const setPage = (page) => {
      currentPage.value = page
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const goToProject = (id) => {
      const project = getAllProjects().find(p => p.id === id)
      // Landing pages → direct ke fullscreen
      if (project && project.category === 'landing-page') {
        window.location.href = project.landingPageUrl
      } 
      // Website company profile (fnb, umroh, travel, it)
      else if (project && ['website', 'fnb', 'umroh', 'travel', 'it'].includes(project.category)) {
        router.push(`/website/${id}`)
      } 
      // Design & Video → project detail review
      else {
        router.push(`/project/${id}`)
      }
    }

    const getYear = (date) => {
      if (!date) return ''
      return date.split('/')[2]
    }

    return {
      filters,
      currentFilter,
      currentPage,
      filteredProjects,
      paginatedProjects,
      totalPages,
      setFilter,
      setPage,
      goToProject,
      truncate,
      getYear,
      getAllProjects
    }
  }
}
</script>

<style scoped>
.projects-page {
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background: linear-gradient(135deg, rgba(26, 35, 50, 0.9) 0%, rgba(13, 27, 42, 0.95) 100%);
}

.projects2-section {
  max-width: 1280px;
  margin: 0 auto;
}

.projects2-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.projects2-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
  width: 100%;
  max-width: 100%;
}

.projects2-filters button {
  padding: 10px 20px;
  border: 2px solid rgba(19, 236, 164, 0.3);
  background: transparent;
  color: #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 14px;
}

.projects2-filters button:hover {
  border-color: #13eca4;
  color: #13eca4;
  box-shadow: 0 0 10px rgba(19, 236, 164, 0.2);
}

.projects2-filters button.active {
  background: #13eca4;
  color: #0d1b2a;
  border-color: #13eca4;
}

.projects2-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.project-card {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(19, 236, 164, 0.1);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 100%;
  backdrop-filter: blur(10px);
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(19, 236, 164, 0.4);
  box-shadow: 0 12px 32px rgba(19, 236, 164, 0.15);
  background: rgba(255, 255, 255, 0.05);
}

.project-card img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.3s ease;
}

.project-card:hover img {
  transform: scale(1.08);
}

.project-info {
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-info h3 {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px 0;
  overflow: hidden;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}

.project-info p {
  font-size: 13px;
  color: #b0b0b0;
  margin: 0 0 12px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-year {
  font-size: 12px;
  color: #13eca4;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.no-projects {
  text-align: center;
  padding: 80px 20px;
  color: #e0e0e0;
  font-size: 18px;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 40px;
}

.page-btn {
  padding: 8px 14px;
  border: 2px solid rgba(19, 236, 164, 0.2);
  background: transparent;
  color: #b0b0b0;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 13px;
}

.page-btn:hover {
  border-color: #13eca4;
  color: #13eca4;
}

.page-btn.active {
  background: #13eca4;
  color: #0d1b2a;
  border-color: #13eca4;
}

@media (max-width: 1024px) {
  .projects2-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px;
  }

  .projects2-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .projects2-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }

  .projects2-title {
    font-size: 1.75rem;
    margin-bottom: 28px;
  }

  .projects2-filters {
    gap: 8px;
    margin-bottom: 28px;
  }

  .projects2-filters button {
    padding: 8px 14px;
    font-size: 12px;
  }

  .project-info {
    padding: 12px;
  }

  .project-info h3 {
    font-size: 14px;
  }

  .project-info p {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .projects-page {
    padding: 20px 12px;
  }

  .projects2-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
  }

  .projects2-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .projects2-filters button {
    padding: 6px 12px;
    font-size: 11px;
  }

  .project-info {
    padding: 10px;
  }

  .project-info h3 {
    font-size: 13px;
  }

  .project-info p {
    font-size: 11px;
  }
}
</style>

