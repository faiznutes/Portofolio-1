<template>
  <div class="company-home">
    <!-- Content akan diisi ulang -->
  </div>
</template>

<script>
export default {
  name: 'CompanyHome',
  props: {
    companyData: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
.company-home {
  width: 100%;
}
</style>
