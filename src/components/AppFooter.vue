<template>
  <footer class="app-footer">
    <p>© 2025 FaizNute. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.app-footer {
  text-align: center;
  padding: 30px 20px;
  background: linear-gradient(135deg, rgba(26, 35, 50, 0.8) 0%, rgba(15, 20, 25, 0.6) 100%);
  color: var(--subtext-color);
  margin-top: auto;
  border-top: 1px solid var(--border-color);
}

@media (max-width: 600px) {
  .app-footer {
    padding: 20px 15px;
    font-size: 13px;
  }
}

.app-footer p {
  margin: 0;
  font-size: 14px;
}
</style>

