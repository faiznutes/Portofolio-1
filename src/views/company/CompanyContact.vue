<template>
  <div class="company-contact">
    <!-- Content akan diisi ulang -->
  </div>
</template>

<script>
export default {
  name: 'CompanyContact',
  props: {
    companyData: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
.company-contact {
  width: 100%;
}
</style>
