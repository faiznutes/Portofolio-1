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
      // Project dengan category fnb, umroh, travel, it adalah website company profile
      const websiteCategories = ['website', 'fnb', 'umroh', 'travel', 'it']
      if (project && project.category === 'landing-page') {
        router.push(`/landing/${id}`)
      } else if (project && websiteCategories.includes(project.category)) {
        router.push(`/website/${id}`)
      } else {
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
}

.no-projects {
  text-align: center;
  padding: 60px 20px;
  color: var(--subtext-color);
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-bottom: 40px;
}

.projects-grid .project-card img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
}
</style>

