<template>
  <header class="header">
    <nav class="navbar">
      <div class="container">
        <div class="nav-content">
          <!-- Logo -->
          <div class="logo">
            <router-link to="/" class="logo-link">
              <span class="logo-icon">🇨🇳</span>
              <span class="logo-text chinese-text">CN 中文</span>
            </router-link>
          </div>

          <!-- Desktop Navigation -->
          <ul class="nav-menu" :class="{ active: isMenuOpen }">
            <li class="nav-item">
              <router-link to="/" class="nav-link" exact @click="closeMenu">首页 Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" @click="closeMenu">关于我们 About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/courses" class="nav-link" @click="closeMenu">课程 Courses</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/teacher" class="nav-link" @click="closeMenu">老师 Teacher</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link" @click="closeMenu">联系我们 Contact</router-link>
            </li>
          </ul>

          <!-- CTA Button -->
          <el-button type="primary" class="cta-button" @click="scrollToContact">
            免费试课 Free Trial
          </el-button>
          </div>

          <!-- Mobile Menu Toggle -->
          <div class="hamburger" :class="{ active: isMenuOpen }" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    scrollToContact() {
      this.$router.push('/contact')
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.navbar {
  padding: 0;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-dark);
}

.logo-icon {
  font-size: 2rem;
  margin-right: 10px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-right: 8px;
}

.logo-english {
  font-size: 0.9rem;
  color: var(--text-light);
  font-weight: 500;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 30px;
}

.nav-item {
  position: relative;
}

.nav-link {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  font-size: 0.95rem;
  padding: 8px 0;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link.router-link-active {
  color: var(--primary-color);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 1px;
}

.cta-button {
  background: var(--primary-color);
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 5px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: var(--text-dark);
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: white;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: var(--shadow);
    padding: 20px 0;
    gap: 0;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-item {
    margin: 10px 0;
  }

  .nav-link {
    font-size: 1.1rem;
    padding: 15px;
    display: block;
  }

  .hamburger {
    display: flex;
  }

  .nav-cta {
    display: none;
  }

  .logo-text {
    font-size: 1.3rem;
  }

  .logo-english {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .nav-content {
    padding: 12px 0;
  }

  .logo-icon {
    font-size: 1.5rem;
  }

  .logo-text {
    font-size: 1.2rem;
  }

  .logo-english {
    display: none;
  }
}
</style>