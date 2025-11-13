<template>
  <div class="company-gallery">
    <!-- Content akan diisi ulang -->
  </div>
</template>

<script>
export default {
  name: 'CompanyGallery',
  props: {
    companyData: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
.company-gallery {
  width: 100%;
}
</style>
