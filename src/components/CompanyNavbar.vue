<template>
  <nav class="company-navbar" :class="{ 'mobile-open': menuOpen }" :data-theme="theme">
    <div class="navbar-container">
      <div class="navbar-brand">
        <router-link :to="`/website/${projectId}`" class="brand-link">
          <span class="brand-name">{{ companyName }}</span>
        </router-link>
      </div>

      <button class="mobile-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="navbar-right">
        <ul class="navbar-menu" :class="{ 'show': menuOpen }">
          <li><router-link :to="`/website/${projectId}`" @click="closeMenu">Home</router-link></li>
          <li><router-link :to="`/website/${projectId}/about`" @click="closeMenu">About</router-link></li>
          <li><router-link :to="`/website/${projectId}/services`" @click="closeMenu">Services</router-link></li>
          <li><router-link :to="`/website/${projectId}/gallery`" @click="closeMenu">Gallery</router-link></li>
          <li><router-link :to="`/website/${projectId}/contact`" @click="closeMenu">Contact</router-link></li>
          <li><router-link :to="`/website/${projectId}/terms`" @click="closeMenu">Terms</router-link></li>
        </ul>
        <router-link to="/" class="back-to-home-btn" title="Back to Portfolio">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'CompanyNavbar',
  props: {
    projectId: {
      type: String,
      required: true
    },
    companyName: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'default'
    }
  },
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
  },
  watch: {
    $route() {
      this.closeMenu()
    }
  }
}
</script>

<style scoped>
.company-navbar {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.company-navbar[data-theme="futuristic"] {
  background: rgba(10, 14, 39, 0.95);
  border-bottom-color: rgba(0, 102, 255, 0.3);
}

.company-navbar[data-theme="traditional"] {
  background: rgba(255, 248, 240, 0.95);
  border-bottom-color: rgba(139, 69, 19, 0.2);
}

.company-navbar[data-theme="cozy"] {
  background: rgba(250, 250, 250, 0.95);
  border-bottom-color: rgba(135, 206, 235, 0.3);
}

.company-navbar[data-theme="adventure"] {
  background: rgba(255, 255, 255, 0.95);
  border-bottom-color: rgba(45, 80, 22, 0.2);
}

.company-navbar[data-theme="spiritual"] {
  background: rgba(255, 255, 255, 0.95);
  border-bottom-color: rgba(34, 139, 34, 0.2);
}

.navbar-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  position: relative;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.brand-link {
  text-decoration: none;
  color: var(--cp-text-primary, var(--text-color));
  font-weight: 700;
  font-size: 22px;
  transition: color 0.3s ease;
  letter-spacing: 0.5px;
}

.brand-link:hover {
  color: var(--cp-accent, var(--accent-color));
}

.company-navbar[data-theme] .brand-link {
  color: var(--cp-text-primary);
}

.company-navbar[data-theme] .brand-link:hover {
  color: var(--cp-accent);
}

.brand-name {
  font-size: 22px;
  font-weight: 700;
}

.navbar-menu {
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
  align-items: center;
}

.navbar-menu li a {
  color: var(--cp-text-primary, var(--text-color));
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  padding: 5px 0;
}

.navbar-menu li a:hover,
.navbar-menu li a.router-link-active {
  color: var(--cp-accent, var(--accent-color));
}

.navbar-menu li a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--cp-accent, var(--accent-color));
  border-radius: 2px;
}

.company-navbar[data-theme] .navbar-menu li a {
  color: var(--cp-text-primary);
}

.company-navbar[data-theme] .navbar-menu li a:hover,
.company-navbar[data-theme] .navbar-menu li a.router-link-active {
  color: var(--cp-accent);
}

.company-navbar[data-theme] .navbar-menu li a.router-link-active::after {
  background: var(--cp-accent);
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.mobile-toggle span {
  width: 25px;
  height: 3px;
  background: var(--text-color);
  border-radius: 3px;
  transition: all 0.3s ease;
}

@media (max-width: 1400px) {
  .navbar-container {
    padding: 0 100px;
  }
}

@media (max-width: 1024px) {
  .navbar-container {
    padding: 0 40px;
  }
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0 20px;
  }
  
  .mobile-toggle {
    display: flex;
  }

  .navbar-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: linear-gradient(135deg, rgba(26, 35, 50, 0.98) 0%, rgba(15, 20, 25, 0.98) 100%);
    backdrop-filter: blur(10px);
    padding: 20px;
    gap: 15px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    border-top: 1px solid var(--border-color);
    align-items: flex-start;
  }

  .navbar-menu.show {
    max-height: 500px;
  }

  .navbar-menu li {
    width: 100%;
  }

  .navbar-menu li a {
    display: block;
    padding: 10px 0;
    width: 100%;
  }

  .brand-name {
    font-size: 18px;
  }
}

.back-to-home-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--cp-gradient, linear-gradient(135deg, var(--accent-color), var(--accent-hover)));
  color: #fff;
  text-decoration: none;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px var(--cp-shadow, rgba(91, 143, 199, 0.3));
  white-space: nowrap;
}

.back-to-home-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--cp-shadow, rgba(91, 143, 199, 0.4));
  opacity: 0.9;
}

.company-navbar[data-theme] .back-to-home-btn {
  background: var(--cp-gradient);
  box-shadow: 0 2px 8px var(--cp-shadow);
}

.back-to-home-btn i {
  font-size: 16px;
}

@media (max-width: 768px) {
  .back-to-home-btn {
    padding: 8px 15px;
    font-size: 13px;
  }

  .back-to-home-btn span {
    display: none;
  }

  .back-to-home-btn i {
    font-size: 18px;
  }

  .navbar-right {
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 0 15px;
    height: 60px;
  }

  .brand-name {
    font-size: 16px;
  }
}
</style>

