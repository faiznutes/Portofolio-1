<template>
  <div class="company-profile-wrapper">
    <CompanyNavbar 
      :project-id="projectId" 
      :company-name="companyData?.title || 'Company'"
      :logo="companyData?.image"
    />
    <div class="company-content">
      <router-view v-if="companyData" :company-data="companyData" />
      <div v-else class="not-found-company">
        <h2>Company Profile Not Found</h2>
        <router-link to="/projects">Back to Projects</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProjects } from '../composables/useProjects'
import CompanyNavbar from '../components/CompanyNavbar.vue'

export default {
  name: 'CompanyProfile',
  components: {
    CompanyNavbar
  },
  setup() {
    const route = useRoute()
    const { getProjectById } = useProjects()
    
    const projectId = computed(() => route.params.id)
    const companyData = computed(() => getProjectById(projectId.value))
    
    return {
      projectId,
      companyData
    }
  }
}
</script>

<style>
@import '../styles/company-profile.css';
</style>

<style scoped>
.company-profile-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: 100%;
  position: relative;
}

.company-content {
  flex: 1;
  width: 100%;
  padding: 0;
  margin: 0;
}

.not-found-company {
  text-align: center;
  padding: 100px 20px;
  color: var(--subtext-color);
}

.not-found-company h2 {
  font-size: 32px;
  color: var(--text-color);
  margin-bottom: 20px;
}

.not-found-company a {
  color: var(--accent-color);
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;
}

.not-found-company a:hover {
  color: var(--accent-hover);
}
</style>

