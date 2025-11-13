<template>
  <header class="app-header">
    <div class="container">
      <router-link to="/" class="logo-link">
        <div class="logo">FAIZNUTE</div>
      </router-link>

      <div class="menu-toggle" @click="toggleMenu" :class="{ active: menuOpen }">
        ☰
      </div>

      <nav :class="{ show: menuOpen }">
        <ul class="nav-list">
          <li><router-link to="/" @click="closeMenu">Home</router-link></li>
          <li><router-link to="/projects" @click="closeMenu">Portofolio</router-link></li>
          <li><router-link to="/about" @click="closeMenu">About</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    }
  }
}
</script>

<style scoped>
.app-header {
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, rgba(26, 35, 50, 0.95) 0%, rgba(15, 20, 25, 0.95) 100%);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 6px var(--shadow-color);
  z-index: 1000;
  padding: 20px;
  max-width: 100vw;
  border-bottom: 1px solid var(--border-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
}

.logo {
  font-size: 18px;
  font-weight: bold;
  color: var(--text-color);
}

.logo-link {
  text-decoration: none;
  color: inherit;
}

.logo-link .logo {
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
}

.nav-list li a {
  text-decoration: none;
  color: var(--text-color);
  font-size: 15px;
  transition: color 0.3s ease;
}

.nav-list li a:hover,
.nav-list li a.router-link-active {
  color: var(--accent-color);
}

.menu-toggle {
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--text-color);
  background: none;
  border: none;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  nav {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--section-bg);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  nav.show {
    max-height: 300px;
    padding: 20px 0;
  }

  .nav-list {
    flex-direction: column;
    gap: 15px;
    padding: 0 20px;
  }
}
</style>

