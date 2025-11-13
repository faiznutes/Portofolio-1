<template>
  <div class="company-about">
    <!-- Content akan diisi ulang -->
  </div>
</template>

<script>
export default {
  name: 'CompanyAbout',
  props: {
    companyData: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
.company-about {
  width: 100%;
}
</style>
