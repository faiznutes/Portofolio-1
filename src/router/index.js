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
import { useProjects } from '../composables/useProjects'

const { getProjectById } = useProjects()

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
          title: (route) => {
            const project = getProjectById(route.params.id)
            return project ? `${project.title} - Home` : 'Company Profile - Home'
          },
          description: (route) => {
            const project = getProjectById(route.params.id)
            return project ? `Welcome to ${project.title}. ${project.description?.split('\n')[0] || 'Professional services tailored to your needs.'}` : 'Company profile homepage'
          }
        }
      },
      {
        path: 'about',
        name: 'CompanyAbout',
        component: CompanyAbout,
        meta: {
          title: (route) => {
            const project = getProjectById(route.params.id)
            return project ? `About - ${project.title}` : 'About - Company Profile'
          },
          description: (route) => {
            const project = getProjectById(route.params.id)
            return project ? `Learn more about ${project.title} - our mission, vision, values, and team.` : 'About our company'
          }
        }
      },
      {
        path: 'services',
        name: 'CompanyServices',
        component: CompanyServices,
        meta: {
          title: (route) => {
            const project = getProjectById(route.params.id)
            return project ? `Services - ${project.title}` : 'Services - Company Profile'
          },
          description: (route) => {
            const project = getProjectById(route.params.id)
            return project ? `Our comprehensive services at ${project.title}. Discover how we can help you achieve your goals.` : 'Our services'
          }
        }
      },
      {
        path: 'gallery',
        name: 'CompanyGallery',
        component: CompanyGallery,
        meta: {
          title: (route) => {
            const project = getProjectById(route.params.id)
            return project ? `Gallery - ${project.title}` : 'Gallery - Company Profile'
          },
          description: (route) => {
            const project = getProjectById(route.params.id)
            return project ? `Explore our gallery showcasing ${project.title}'s work, achievements, and visual stories.` : 'Our gallery'
          }
        }
      },
      {
        path: 'contact',
        name: 'CompanyContact',
        component: CompanyContact,
        meta: {
          title: (route) => {
            const project = getProjectById(route.params.id)
            return project ? `Contact - ${project.title}` : 'Contact - Company Profile'
          },
          description: (route) => {
            const project = getProjectById(route.params.id)
            return project ? `Get in touch with ${project.title}. Contact us for inquiries, quotes, or support.` : 'Contact us'
          }
        }
      },
      {
        path: 'terms',
        name: 'CompanyTerms',
        component: CompanyTerms,
        meta: {
          title: (route) => {
            const project = getProjectById(route.params.id)
            return project ? `Terms & Conditions - ${project.title}` : 'Terms & Conditions'
          },
          description: 'Terms and conditions, privacy policy, and legal information.',
          robots: 'noindex, nofollow'
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
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
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
  
  // Scroll to top on route change
  window.scrollTo({ top: 0, behavior: 'instant' })
  
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

