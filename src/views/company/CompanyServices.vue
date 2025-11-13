<template>
  <div class="company-services">
    <!-- Content akan diisi ulang -->
  </div>
</template>

<script>
export default {
  name: 'CompanyServices',
  props: {
    companyData: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
.company-services {
  width: 100%;
}
</style>
