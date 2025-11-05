<template>
  <div class="project-detail-page">
    <section class="projects3-section" v-if="project">
      <div class="projects3-head">
        <h1 class="projects3-title">{{ project.title }}</h1>
        <div class="projects3-tags">
          <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          <span v-if="projectYear" class="project-year">{{ projectYear }}</span>
        </div>
      </div>

      <div class="projects3-image">
        <img :src="project.image || '/assets/images/project1.jpg'" :alt="project.title">
      </div>

      <div class="projects3-desc">
        <p v-for="(paragraph, index) in descriptionParagraphs" :key="index">
          {{ paragraph }}
        </p>
      </div>

      <div class="projects3-gallery" v-if="project.gallery && project.gallery.length > 0">
        <h3 class="gallery-header">Page Info</h3>
        <div class="gallery-item" v-for="(item, index) in project.gallery" :key="index">
          <h4 v-if="item.title" class="gallery-title">{{ item.title }}</h4>
          <a 
            v-if="item.type === 'video'" 
            :href="item.src" 
            target="_blank" 
            rel="noopener noreferrer"
            class="video-button"
          >
            Tonton Video
          </a>
          <img 
            v-else 
            :src="item.src" 
            :alt="item.title || `Image ${index + 1}`"
            class="gallery-image"
          >
        </div>
      </div>

      <div class="projects3-back">
        <router-link to="/projects">← Back to All Projects</router-link>
      </div>
    </section>

    <section v-else class="not-found">
      <p>Project tidak ditemukan.</p>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProjects } from '../composables/useProjects'

export default {
  name: 'ProjectDetail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    const { getProjectById } = useProjects()
    
    const projectId = props.id || route.params.id
    const project = getProjectById(projectId)

    const projectYear = computed(() => {
      if (!project || !project.date) return ''
      return project.date.split('/')[2]
    })

    const descriptionParagraphs = computed(() => {
      if (!project || !project.longDescription) return []
      return project.longDescription
        .trim()
        .split('\n')
        .map(p => p.trim())
        .filter(p => p)
    })

    return {
      project,
      projectYear,
      descriptionParagraphs
    }
  }
}
</script>

<style scoped>
.project-detail-page {
  width: 100%;
}

.not-found {
  text-align: center;
  padding: 60px 20px;
  color: var(--subtext-color);
}
</style>

