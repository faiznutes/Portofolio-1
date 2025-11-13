<template>
  <div class="home-page">
    <section class="profile-section">
      <img src="/assets/images/1000121680.png" alt="Muhamad Faiz Abdurrahman - Graphic Designer & Video Editor" class="profile-photo" loading="eager" fetchpriority="high">
      <h2 class="profile-name">Muhamad Faiz Abdurrahman</h2>
      <h4 class="profile-job">Graphic Designer & Video Editor</h4>
      <p class="profile-bio">
        Saya adalah seorang <strong>Graphic Designer</strong> dan <strong>Video Editor</strong> dengan gaya visual modern dan elegan.
        Selain itu, saya juga aktif sebagai <strong>operator streaming</strong> dan <strong>live content creator di TikTok</strong> yang berfokus pada kualitas visual dan pengalaman interaktif.
      </p>
    </section>

    <section class="skills-section">
      <h2 class="skills-title">Keahlian Saya</h2>
      <div class="skills-grid">
        <div class="skill-box" v-for="skill in skills" :key="skill.name">
          <img :src="skill.icon" :alt="skill.name" loading="lazy">
          <h3>{{ skill.name }}</h3>
          <p>{{ skill.description }}</p>
          <div class="skill-progress">
            <div class="progress-bar" :style="{ width: skill.progress + '%' }"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="projects1-section" id="projects">
      <h2 class="projects-title">My Projects</h2>
      <div class="projects-grid">
        <div 
          class="project-card" 
          v-for="project in featuredProjects" 
          :key="project.id"
          @click="goToProject(project.id)"
        >
          <img :src="project.image" :alt="project.title" class="project-thumb" loading="lazy">
          <h3 class="project-name">{{ project.title }}</h3>
          <p class="project-desc">{{ truncate(project.description, 20) }}</p>
          <span class="project-tag">{{ capitalizeFirst(project.category) }}</span>
          <router-link :to="getProjectRoute(project)" class="project-read">Read More</router-link>
        </div>
      </div>
      <div class="project-more">
        <router-link to="/projects" class="project-btn">View All Projects</router-link>
      </div>
    </section>

    <section class="social-section">
      <h2 class="social-title">Social Media</h2>
      <div class="social-icons">
        <a href="https://instagram.com/faiznute" target="_blank" class="social-link">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://youtube.com/bangalexzz" target="_blank" class="social-link">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://tiktok.com/@bangalexzz" target="_blank" class="social-link">
          <i class="fab fa-tiktok"></i>
        </a>
        <a href="mailto:faiznute07@gmail.com" class="social-link">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="tel:wa.me/+6285155043133" class="social-link">
          <i class="fas fa-phone"></i>
        </a>
        <a href="https://faiznute.site" target="_blank" class="social-link">
          <i class="fas fa-globe"></i>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useProjects } from '../composables/useProjects'

export default {
  name: 'Home',
  setup() {
    const router = useRouter()
    const { getFeaturedProjects, getAllProjects, truncate, capitalizeFirst } = useProjects()
    
    const skills = [
      {
        name: 'Adobe Photoshop',
        icon: '/assets/images/Ps.png',
        description: 'Menguasai manipulasi foto, color grading, dan desain visual.',
        progress: 75
      },
      {
        name: 'Adobe Premiere Pro',
        icon: '/assets/images/premiere.png',
        description: 'Editing video profesional dengan transisi dan efek cinematic.',
        progress: 90
      },
      {
        name: 'Adobe Illustrator',
        icon: '/assets/images/ai.png',
        description: 'Membuat vektor dan ilustrasi branding bergaya minimalis.',
        progress: 90
      },
      {
        name: 'Adobe After Effects',
        icon: '/assets/images/Ae.png',
        description: 'Motion graphics, animasi logo, dan efek visual kreatif.',
        progress: 50
      },
      {
        name: 'Streamer Operator',
        icon: '/assets/images/tt studio.webp',
        description: 'Mengatur live, kontrol kamera, audio, dan interaksi penonton TikTok.',
        progress: 90
      },
      {
        name: 'TikTok Live Content',
        icon: '/assets/images/tiktok.png',
        description: 'Mengelola siaran live game, mengatur tampilan, audio, dan interaksi penonton.',
        progress: 90
      }
    ]

    const featuredProjects = getFeaturedProjects()

    const goToProject = (id) => {
      const project = getAllProjects().find(p => p.id === id)
      // Project dengan category fnb, umroh, travel, it adalah website company profile
      const websiteCategories = ['website', 'fnb', 'umroh', 'travel', 'it']
      if (project && websiteCategories.includes(project.category)) {
        router.push(`/website/${id}`)
      } else {
        router.push(`/project/${id}`)
      }
    }

    const getProjectRoute = (project) => {
      const websiteCategories = ['website', 'fnb', 'umroh', 'travel', 'it']
      if (websiteCategories.includes(project.category)) {
        return `/website/${project.id}`
      }
      return `/project/${project.id}`
    }

    return {
      skills,
      featuredProjects,
      truncate,
      capitalizeFirst,
      goToProject,
      getProjectRoute
    }
  }
}
</script>

<style scoped>
.home-page {
  width: 100%;
}
</style>

