import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import Login from '../views/Login.vue'
import CompanyProfile from '../views/CompanyProfile.vue'
import CompanyHome from '../views/company/CompanyHome.vue'
import CompanyAbout from '../views/company/CompanyAbout.vue'
import CompanyServices from '../views/company/CompanyServices.vue'
import CompanyGallery from '../views/company/CompanyGallery.vue'
import CompanyContact from '../views/company/CompanyContact.vue'
import CompanyTerms from '../views/company/CompanyTerms.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Faiznute - Graphic Designer & Video Editor Portfolio',
      description: 'Portfolio Muhamad Faiz Abdurrahman (Faiznute) - Graphic Designer & Video Editor profesional dengan pengalaman di branding, motion graphics, dan streaming operator.',
      keywords: 'graphic designer, video editor, portfolio, faiznute, branding, motion graphics'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'Tentang Saya - Faiznute Portfolio',
      description: 'Tentang Muhamad Faiz Abdurrahman (Faiznute) - Graphic Designer & Video Editor dengan pengalaman profesional di berbagai perusahaan.',
      keywords: 'about, faiznute, graphic designer, video editor, pengalaman kerja'
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: 'Projects - Faiznute Portfolio',
      description: 'Koleksi project portfolio Faiznute - Graphic Design, Video Editing, Branding, dan Motion Graphics.',
      keywords: 'projects, portfolio, graphic design, video editing, branding'
    }
  },
  {
    path: '/project/:id',
    name: 'ProjectDetail',
    component: ProjectDetail,
    props: true,
    meta: {
      title: 'Project Detail - Faiznute Portfolio',
      description: 'Detail project portfolio Faiznute',
      keywords: 'project detail, portfolio'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login - Faiznute Portfolio',
      description: 'Project Management Login',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/website/:id',
    component: CompanyProfile,
    props: true,
    children: [
      {
        path: '',
        name: 'CompanyHome',
        component: CompanyHome,
        meta: {
          title: 'Company Profile - Faiznute Portfolio'
        }
      },
      {
        path: 'about',
        name: 'CompanyAbout',
        component: CompanyAbout,
        meta: {
          title: 'About - Company Profile'
        }
      },
      {
        path: 'services',
        name: 'CompanyServices',
        component: CompanyServices,
        meta: {
          title: 'Services - Company Profile'
        }
      },
      {
        path: 'gallery',
        name: 'CompanyGallery',
        component: CompanyGallery,
        meta: {
          title: 'Gallery - Company Profile'
        }
      },
      {
        path: 'contact',
        name: 'CompanyContact',
        component: CompanyContact,
        meta: {
          title: 'Contact - Company Profile'
        }
      },
      {
        path: 'terms',
        name: 'CompanyTerms',
        component: CompanyTerms,
        meta: {
          title: 'Terms & Conditions - Company Profile'
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: '404 - Page Not Found - Faiznute Portfolio',
      robots: 'noindex, nofollow'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Update document title and meta tags on route change
router.beforeEach((to, from, next) => {
  // Update document title
  document.title = to.meta.title || 'Faiznute - Portfolio'
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }
  metaDescription.setAttribute('content', to.meta.description || 'Portfolio Faiznute - Graphic Designer & Video Editor')
  
  // Update robots meta
  let metaRobots = document.querySelector('meta[name="robots"]')
  if (to.meta.robots) {
    if (!metaRobots) {
      metaRobots = document.createElement('meta')
      metaRobots.setAttribute('name', 'robots')
      document.head.appendChild(metaRobots)
    }
    metaRobots.setAttribute('content', to.meta.robots)
  }
  
  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', `https://portofolio-1-alpha.vercel.app${to.fullPath}`)
  
  // Update Open Graph tags
  const updateOGTag = (property, content) => {
    let tag = document.querySelector(`meta[property="${property}"]`)
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('property', property)
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
  }
  
  updateOGTag('og:title', to.meta.title || document.title)
  updateOGTag('og:description', to.meta.description || metaDescription.getAttribute('content'))
  updateOGTag('og:url', `https://portofolio-1-alpha.vercel.app${to.fullPath}`)
  
  next()
})

export default router

