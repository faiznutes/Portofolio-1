<template>
  <div class="landing-page-container">
    <div class="landing-page-header">
      <router-link to="/projects" class="back-button">
        ← Kembali ke Projects
      </router-link>
      <h1 v-if="project" class="landing-page-title">{{ project.title }}</h1>
    </div>

    <div v-if="project" class="landing-page-content">
      <div class="landing-page-info">
        <p class="description">{{ project.description }}</p>
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          <span v-if="projectYear" class="year">{{ projectYear }}</span>
        </div>
      </div>

      <div class="iframe-container">
        <iframe 
          :src="project.landingPageUrl" 
          title="Landing Page Preview"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div class="landing-page-action">
        <a 
          :href="project.landingPageUrl" 
          target="_blank"
          rel="noopener noreferrer"
          class="open-fullscreen"
        >
          Buka Halaman Lengkap →
        </a>
      </div>

      <div class="landing-page-footer">
        <router-link to="/projects" class="back-button-bottom">
          ← Kembali ke Projects
        </router-link>
      </div>
    </div>

    <section v-else class="not-found">
      <p>Landing Page tidak ditemukan.</p>
      <router-link to="/projects">Kembali ke Projects</router-link>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProjects } from '../composables/useProjects'

export default {
  name: 'LandingPageView',
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

    return {
      project,
      projectYear
    }
  }
}
</script>

<style scoped>
.landing-page-container {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 40px 20px;
}

.landing-page-header {
  max-width: 1200px;
  margin: 0 auto 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: white;
  color: #1a202c;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.back-button:hover {
  background: #2d3748;
  color: white;
  transform: translateX(-5px);
}

.landing-page-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
  flex: 1;
}

.landing-page-content {
  max-width: 1200px;
  margin: 0 auto;
}

.landing-page-info {
  background: white;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.description {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #4a5568;
  margin: 0 0 20px 0;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  display: inline-block;
  padding: 6px 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.year {
  display: inline-block;
  padding: 6px 12px;
  background: #e2e8f0;
  color: #2d3748;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;
  background: white;
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.landing-page-action {
  text-align: center;
  margin-bottom: 30px;
}

.open-fullscreen {
  display: inline-block;
  padding: 14px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.05rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.open-fullscreen:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
}

.landing-page-footer {
  text-align: center;
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid #e2e8f0;
}

.back-button-bottom {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: white;
  color: #1a202c;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.back-button-bottom:hover {
  background: #2d3748;
  color: white;
  transform: translateX(-5px);
}

.not-found {
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.not-found p {
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 20px;
}

.not-found a {
  display: inline-block;
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.not-found a:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .landing-page-container {
    padding: 20px 10px;
  }

  .landing-page-header {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
  }

  .landing-page-title {
    font-size: 1.5rem;
    width: 100%;
  }

  .landing-page-info {
    padding: 20px;
    margin-bottom: 20px;
  }

  .description {
    font-size: 0.95rem;
  }

  .iframe-container {
    margin-bottom: 20px;
  }
}
</style>
