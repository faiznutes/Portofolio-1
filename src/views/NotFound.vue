<template>
  <div class="not-found-page">
    <section class="not-found-section">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <router-link to="/" class="back-btn">Go Back Home</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found-page {
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.not-found-section {
  text-align: center;
  padding: 60px 40px;
}

.not-found-section h1 {
  font-size: 48px;
  color: var(--text-color);
  margin-bottom: 20px;
}

.not-found-section p {
  font-size: 18px;
  color: var(--subtext-color);
  margin-bottom: 30px;
}

.back-btn {
  display: inline-block;
  background-color: var(--accent-color);
  color: #fff;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background-color: #ffffff;
  color: #000;
}
</style>

