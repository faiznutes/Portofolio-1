<template>
  <div class="app-container">
    <AppHeader v-if="!isCompanyProfile" />
    <main class="main-content" :class="{ 'full-page': isCompanyProfile }">
      <router-view />
    </main>
    <AppFooter v-if="!isCompanyProfile" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  setup() {
    const route = useRoute()
    const isCompanyProfile = computed(() => 
      route.path.startsWith('/website/') || route.path.startsWith('/landing-pages/')
    )
    
    return {
      isCompanyProfile
    }
  }
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  width: 100%;
}

.main-content.full-page {
  padding: 0;
  max-width: 100%;
}
</style>

