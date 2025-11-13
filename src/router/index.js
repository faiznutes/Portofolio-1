import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import Login from '../views/Login.vue'
import CompanyProfile from '../views/CompanyProfile.vue'
import CompanyHome from '../views/company/CompanyHome.vue'
import CompanyAbout from '../views/company/CompanyAbout.vue'
import CompanyPackage from '../views/company/CompanyPackage.vue'
import CompanyGallery from '../views/company/CompanyGallery.vue'
import CompanyContact from '../views/company/CompanyContact.vue'
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
            try {
              const project = getProjectById(route.params.id)
              return project ? `${project.title} - Beranda` : 'Company Profile - Beranda'
            } catch {
              return 'Company Profile - Beranda'
            }
          },
          description: (route) => {
            try {
              const project = getProjectById(route.params.id)
              return project ? `Selamat datang di ${project.title}. ${project.description?.split('\n')[0] || 'Layanan profesional yang disesuaikan dengan kebutuhan Anda.'}` : 'Halaman beranda company profile'
            } catch {
              return 'Halaman beranda company profile'
            }
          }
        }
      },
      {
        path: 'about',
        name: 'CompanyAbout',
        component: CompanyAbout,
        meta: {
          title: (route) => {
            try {
              const project = getProjectById(route.params.id)
              return project ? `Tentang - ${project.title}` : 'Tentang - Company Profile'
            } catch {
              return 'Tentang - Company Profile'
            }
          },
          description: (route) => {
            try {
              const project = getProjectById(route.params.id)
              return project ? `Pelajari lebih lanjut tentang ${project.title} - misi, visi, nilai-nilai, dan tim kami.` : 'Tentang perusahaan kami'
            } catch {
              return 'Tentang perusahaan kami'
            }
          }
        }
      },
      {
        path: 'package',
        name: 'CompanyPackage',
        component: CompanyPackage,
        meta: {
          title: (route) => {
            try {
              const project = getProjectById(route.params.id)
              return project ? `Paket - ${project.title}` : 'Paket - Company Profile'
            } catch {
              return 'Paket - Company Profile'
            }
          },
          description: (route) => {
            try {
              const project = getProjectById(route.params.id)
              return project ? `Lihat paket umroh dan haji dari ${project.title}. Pilih paket yang sesuai dengan kebutuhan Anda.` : 'Paket perjalanan kami'
            } catch {
              return 'Paket perjalanan kami'
            }
          }
        }
      },
      {
        path: 'gallery',
        name: 'CompanyGallery',
        component: CompanyGallery,
        meta: {
          title: (route) => {
            try {
              const project = getProjectById(route.params.id)
              return project ? `Galeri - ${project.title}` : 'Galeri - Company Profile'
            } catch {
              return 'Galeri - Company Profile'
            }
          },
          description: (route) => {
            try {
              const project = getProjectById(route.params.id)
              return project ? `Jelajahi galeri perjalanan dari ${project.title}. Lihat momen-momen indah perjalanan suci.` : 'Galeri perjalanan kami'
            } catch {
              return 'Galeri perjalanan kami'
            }
          }
        }
      },
      {
        path: 'contact',
        name: 'CompanyContact',
        component: CompanyContact,
        meta: {
          title: (route) => {
            try {
              const project = getProjectById(route.params.id)
              return project ? `Kontak - ${project.title}` : 'Kontak - Company Profile'
            } catch {
              return 'Kontak - Company Profile'
            }
          },
          description: (route) => {
            try {
              const project = getProjectById(route.params.id)
              return project ? `Hubungi ${project.title}. Daftar sekarang atau konsultasi gratis untuk perjalanan suci Anda.` : 'Hubungi kami'
            } catch {
              return 'Hubungi kami'
            }
          }
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
  // Redirect project website dari /project/{id} ke /website/{id}
  if (to.name === 'ProjectDetail' && to.params.id) {
    const project = getProjectById(to.params.id)
    const websiteCategories = ['website', 'fnb', 'umroh', 'travel', 'it']
    if (project && websiteCategories.includes(project.category)) {
      // Redirect ke /website/{id} untuk project website
      next({ path: `/website/${to.params.id}`, replace: true })
      return
    }
  }
  
  // Scroll to top on route change
  window.scrollTo({ top: 0, behavior: 'instant' })
  
  // Update document title
  const title = typeof to.meta.title === 'function' ? to.meta.title(to) : (to.meta.title || 'Faiznute - Portfolio')
  document.title = title
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }
  const description = typeof to.meta.description === 'function' ? to.meta.description(to) : (to.meta.description || 'Portfolio Faiznute - Graphic Designer & Video Editor')
  metaDescription.setAttribute('content', description)
  
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
  
  updateOGTag('og:title', title)
  updateOGTag('og:description', description)
  updateOGTag('og:url', `https://portofolio-1-alpha.vercel.app${to.fullPath}`)
  
  next()
})

export default router

