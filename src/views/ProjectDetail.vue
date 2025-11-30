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
        <img :src="project.image || '/assets/images/project1.jpg'" :alt="project.title" loading="eager" fetchpriority="high">
      </div>

      <div class="projects3-desc">
        <p v-for="(item, index) in processedParagraphs" :key="index" :class="{ 'desc-title': item.isTitle }">
          <strong v-if="item.isTitle">{{ item.text }}</strong>
          <template v-else>{{ item.text }}</template>
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
            loading="lazy"
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
import { computed, watch } from 'vue'
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
    
    // Update meta tags when project changes
    watch(() => project, (newProject) => {
      if (newProject) {
        document.title = `${newProject.title} - Faiznute Portfolio`
        let metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
          metaDescription.setAttribute('content', newProject.description || 'Project detail Faiznute Portfolio')
        }
      }
    }, { immediate: true })

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

    // Function to detect if a paragraph is a title
    // Titles typically start with emoji (🎯, 🎨, 🎬, etc.) or are short standalone lines
    const isTitle = (text, index, paragraphs) => {
      if (!text || text.length === 0) return false
      
      const trimmedText = text.trim()
      
      // Check if starts with emoji (most common case for titles)
      // Covers wide range of emoji: 🎯, 🎨, 🎬, 🎞, ⭐, etc.
      const emojiPattern = /^[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}]/u
      if (emojiPattern.test(trimmedText)) {
        return true
      }
      
      // Exclude lines that are clearly not titles
      const hasBullet = /^[•\-\*]\s/.test(trimmedText)
      const hasNumber = /^\d+\.\s/.test(trimmedText)
      const hasCheckmark = /^[✔✓]\s/.test(trimmedText)
      
      if (hasBullet || hasNumber || hasCheckmark) {
        return false
      }
      
      // Check for short standalone lines that might be section headers
      // But only if they don't look like regular content
      if (trimmedText.length < 100 && trimmedText.length > 3) {
        // Simple heuristic: if it's short and next line exists with content, might be a title
        const nextParagraph = paragraphs[index + 1]
        if (nextParagraph && nextParagraph.trim().length > 0) {
          // If next line starts with bullet or is much longer, current line might be a title
          if (/^[•\-\*]/.test(nextParagraph.trim()) || nextParagraph.trim().length > trimmedText.length * 1.5) {
            return true
          }
        }
      }
      
      return false
    }

    const processedParagraphs = computed(() => {
      const paragraphs = descriptionParagraphs.value
      return paragraphs.map((text, index) => ({
        text,
        isTitle: isTitle(text, index, paragraphs)
      }))
    })

    return {
      project,
      projectYear,
      descriptionParagraphs,
      processedParagraphs
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

