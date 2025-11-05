<template>
  <div class="login-page">
    <section class="login-section">
      <div v-if="!isLoggedIn" id="password-gate">
        <h1>Access Project Management</h1>
        <div class="form-group">
          <label for="access-password">Password:</label>
          <input 
            type="password" 
            id="access-password" 
            v-model="password"
            @input="checkPassword"
            @keyup.enter="login"
            required
          >
        </div>
      </div>

      <div v-if="isLoggedIn" id="main-content">
        <h1>Project Management</h1>

        <!-- Existing Projects Section -->
        <div id="existing-projects">
          <h2>Manage Existing Projects</h2>
          <div class="form-group">
            <label for="project-select">Select Project:</label>
            <select id="project-select" v-model="selectedProjectId" @change="onProjectSelect">
              <option value="">-- Choose a project --</option>
              <option 
                v-for="project in availableProjects" 
                :key="project.id" 
                :value="project.id"
              >
                {{ project.title }}{{ project.label }}
              </option>
            </select>
          </div>
          <div v-if="selectedProjectId" id="project-actions">
            <button 
              v-if="canEdit"
              @click="editSelectedProject" 
              class="edit-btn"
            >
              Edit Selected Project
            </button>
            <button 
              v-if="canEdit"
              @click="deleteSelectedProject" 
              class="delete-btn"
            >
              Delete Selected Project
            </button>
            <button 
              v-if="canApprove"
              @click="approveSelectedProject" 
              class="edit-btn"
            >
              Approve
            </button>
            <button 
              v-if="canApprove"
              @click="rejectSelectedProject" 
              class="delete-btn"
            >
              Reject
            </button>
            <button @click="exportProjects" class="edit-btn">Export Projects to JSON</button>
            <button @click="compressAllImages" class="edit-btn">Compress All Images</button>
          </div>
        </div>

        <h2 id="form-title">Submit New Project</h2>
        <form id="project-form" @submit.prevent="submitProject">
          <div class="form-group">
            <label for="title">Project Title:</label>
            <input type="text" id="title" v-model="form.title" required>
          </div>

          <div class="form-group">
            <label for="category">Category:</label>
            <select id="category" v-model="form.category" required>
              <option value="website">Website</option>
              <option value="design">Design</option>
              <option value="video">Video</option>
            </select>
          </div>

          <div class="form-group">
            <label for="tags">Tags (comma separated):</label>
            <input type="text" id="tags" v-model="form.tags" placeholder="e.g. Website, UI/UX, Responsive">
          </div>

          <div class="form-group" id="thumbnail-group">
            <label for="thumbnail">Thumbnail Image (optional):</label>
            <input type="file" id="thumbnail" @change="handleThumbnailChange" accept="image/*">
          </div>

          <div class="form-group">
            <label for="description">Description:</label>
            <textarea id="description" v-model="form.description" required></textarea>
          </div>

          <div class="form-group">
            <label for="date">Date (MM/DD/YYYY):</label>
            <input type="text" id="date" v-model="form.date" placeholder="e.g. 10/7/2025">
          </div>

          <div class="form-group">
            <label for="tools">Tools (comma separated):</label>
            <input type="text" id="tools" v-model="form.tools" placeholder="e.g. Figma, HTML, CSS">
          </div>

          <div class="form-group">
            <label>Gallery Images:</label>
            <div id="images-container">
              <div 
                v-for="(image, index) in form.galleryImages" 
                :key="index" 
                class="image-item"
              >
                <input 
                  type="text" 
                  placeholder="Image Title" 
                  v-model="image.title"
                  class="image-title"
                >
                <input 
                  type="file" 
                  accept="image/*" 
                  @change="handleImageChange(index, $event)"
                  class="image-file"
                >
                <button type="button" @click="removeImage(index)" class="remove-image">Remove</button>
              </div>
            </div>
            <button type="button" @click="addImage">Add Image</button>
          </div>

          <div class="form-group">
            <label>Video Links:</label>
            <div id="video-container">
              <div 
                v-for="(video, index) in form.videos" 
                :key="index" 
                class="video-item"
              >
                <input 
                  type="text" 
                  placeholder="Video Title" 
                  v-model="video.title"
                  class="video-title"
                >
                <input 
                  type="url" 
                  placeholder="https://..." 
                  v-model="video.url"
                  class="video-link"
                >
                <button type="button" @click="removeVideo(index)" class="remove-video">Remove</button>
              </div>
            </div>
            <button type="button" @click="addVideo">Add Video</button>
          </div>

          <button type="submit">Submit Project</button>
        </form>

        <!-- Edit Project Section -->
        <div v-if="isEditing" id="edit-project">
          <h2>Edit Project</h2>
          <div class="form-group">
            <label for="import-json">Import JSON (paste project data to auto-fill form):</label>
            <textarea id="import-json" v-model="importJson" placeholder="Paste JSON here..."></textarea>
            <button type="button" @click="importJsonData">Import JSON</button>
          </div>
          <form id="edit-form">
            <div class="form-group">
              <label for="edit-title">Project Title:</label>
              <input type="text" id="edit-title" v-model="editForm.title" required>
            </div>

            <div class="form-group">
              <label for="edit-category">Category:</label>
              <select id="edit-category" v-model="editForm.category" required>
                <option value="website">Website</option>
                <option value="design">Design</option>
                <option value="video">Video</option>
              </select>
            </div>

            <div class="form-group">
              <label for="edit-thumbnail">Thumbnail Image (leave empty to keep current):</label>
              <input type="file" id="edit-thumbnail" @change="handleEditThumbnailChange" accept="image/*">
            </div>

            <div class="form-group">
              <label for="edit-description">Description:</label>
              <textarea id="edit-description" v-model="editForm.description" required></textarea>
            </div>

            <div class="form-group">
              <label for="edit-tools">Tools (comma separated):</label>
              <input type="text" id="edit-tools" v-model="editForm.tools" placeholder="e.g. Figma, HTML, CSS">
            </div>

            <div class="form-group">
              <label for="edit-tags">Tags (comma separated):</label>
              <input type="text" id="edit-tags" v-model="editForm.tags" placeholder="e.g. Website, UI/UX, Responsive">
            </div>

            <div class="form-group">
              <label>Gallery Images:</label>
              <div id="edit-images-container">
                <div 
                  v-for="(image, index) in editForm.galleryImages" 
                  :key="index" 
                  class="image-item"
                >
                  <input 
                    type="text" 
                    placeholder="Image Title" 
                    v-model="image.title"
                    class="image-title"
                  >
                  <input 
                    type="file" 
                    @change="handleEditImageChange(index, $event)"
                    class="image-file"
                  >
                  <button type="button" @click="removeEditImage(index)" class="remove-image">Remove</button>
                </div>
              </div>
              <button type="button" @click="addEditImage">Add Image</button>
            </div>

            <div class="form-group">
              <label>Video Links:</label>
              <div id="edit-video-container">
                <div 
                  v-for="(video, index) in editForm.videos" 
                  :key="index" 
                  class="video-item"
                >
                  <input 
                    type="text" 
                    placeholder="Video Title" 
                    v-model="video.title"
                    class="video-title"
                  >
                  <input 
                    type="url" 
                    placeholder="https://..." 
                    v-model="video.url"
                    class="video-link"
                  >
                  <button type="button" @click="removeEditVideo(index)" class="remove-video">Remove</button>
                </div>
              </div>
              <button type="button" @click="addEditVideo">Add Video</button>
            </div>

            <button type="button" @click="saveEdit">Save Changes</button>
            <button type="button" @click="cancelEdit">Cancel</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
import { staticProjectsData } from '../data/projects-data'
import { compressImage, compressBase64Image } from '../composables/useImageCompression'

export default {
  name: 'Login',
  setup() {
    const password = ref('')
    const isLoggedIn = ref(false)
    const selectedProjectId = ref('')
    const isEditing = ref(false)
    const importJson = ref('')
    const editingProject = ref(null)
    const thumbnailFile = ref(null)
    const editThumbnailFile = ref(null)

    const form = ref({
      title: '',
      category: 'website',
      tags: '',
      description: '',
      date: '',
      tools: '',
      galleryImages: [{ title: '', file: null }],
      videos: [{ title: '', url: '' }]
    })

    const editForm = ref({
      title: '',
      category: 'website',
      tags: '',
      description: '',
      tools: '',
      galleryImages: [],
      videos: []
    })

    const checkPassword = () => {
      if (password.value === 'faiznute') {
        login()
      }
    }

    const login = () => {
      if (password.value === 'faiznute') {
        localStorage.setItem('projectManagementLoggedIn', 'true')
        isLoggedIn.value = true
        loadAvailableProjects()
      } else {
        alert('Password salah')
      }
    }

    onMounted(() => {
      if (localStorage.getItem('projectManagementLoggedIn') === 'true') {
        isLoggedIn.value = true
        loadAvailableProjects()
      }
    })

    const availableProjects = ref([])

    const loadAvailableProjects = () => {
      const projects = []
      const deletedStatic = localStorage.getItem('deletedStaticProjects') || '[]'
      const deleted = JSON.parse(deletedStatic)
      
      staticProjectsData.forEach(project => {
        if (!deleted.includes(project.id)) {
          projects.push({ id: project.id, title: project.title, label: ' (Static)', isStatic: true })
        }
      })

      const stored = localStorage.getItem('submittedProjects')
      const submittedProjects = stored ? JSON.parse(stored) : []
      submittedProjects.filter(p => p.status !== 'rejected').forEach(project => {
        projects.push({ 
          id: project.id, 
          title: project.title, 
          label: project.status === 'approved' ? '' : ` (${project.status || 'pending'})`,
          isStatic: false,
          status: project.status
        })
      })

      availableProjects.value = projects
    }

    const selectedProject = computed(() => {
      if (!selectedProjectId.value) return null
      const stored = localStorage.getItem('submittedProjects')
      const submittedProjects = stored ? JSON.parse(stored) : []
      let project = submittedProjects.find(p => p.id === selectedProjectId.value)
      if (!project) {
        project = staticProjectsData.find(p => p.id === selectedProjectId.value)
      }
      return project
    })

    const canEdit = computed(() => {
      if (!selectedProject.value) return false
      const stored = localStorage.getItem('submittedProjects')
      const submittedProjects = stored ? JSON.parse(stored) : []
      const isSubmitted = submittedProjects.some(p => p.id === selectedProjectId.value)
      if (isSubmitted) {
        const proj = submittedProjects.find(p => p.id === selectedProjectId.value)
        return proj && proj.status === 'approved'
      }
      return true
    })

    const canApprove = computed(() => {
      if (!selectedProject.value) return false
      const stored = localStorage.getItem('submittedProjects')
      const submittedProjects = stored ? JSON.parse(stored) : []
      const isSubmitted = submittedProjects.some(p => p.id === selectedProjectId.value)
      if (isSubmitted) {
        const proj = submittedProjects.find(p => p.id === selectedProjectId.value)
        return proj && proj.status !== 'approved'
      }
      return false
    })

    const onProjectSelect = () => {
      // Triggered when project is selected
    }

    const handleThumbnailChange = (e) => {
      thumbnailFile.value = e.target.files[0]
    }

    const handleEditThumbnailChange = (e) => {
      editThumbnailFile.value = e.target.files[0]
    }

    const handleImageChange = (index, e) => {
      form.value.galleryImages[index].file = e.target.files[0]
    }

    const handleEditImageChange = (index, e) => {
      editForm.value.galleryImages[index].file = e.target.files[0]
    }

    const addImage = () => {
      form.value.galleryImages.push({ title: '', file: null })
    }

    const removeImage = (index) => {
      form.value.galleryImages.splice(index, 1)
    }

    const addEditImage = () => {
      editForm.value.galleryImages.push({ title: '', file: null, src: '' })
    }

    const removeEditImage = (index) => {
      editForm.value.galleryImages.splice(index, 1)
    }

    const addVideo = () => {
      form.value.videos.push({ title: '', url: '' })
    }

    const removeVideo = (index) => {
      form.value.videos.splice(index, 1)
    }

    const addEditVideo = () => {
      editForm.value.videos.push({ title: '', url: '' })
    }

    const removeEditVideo = (index) => {
      editForm.value.videos.splice(index, 1)
    }

    const submitProject = async () => {
      if (!form.value.title || !form.value.category || !form.value.description) {
        alert('Please fill all required fields: Title, Category, Description')
        return
      }

      const thumbnailBase64 = thumbnailFile.value ? await compressImage(thumbnailFile.value) : ''
      
      const gallery = []
      for (let image of form.value.galleryImages) {
        if (image.file) {
          const base64 = await compressImage(image.file)
          gallery.push({ type: 'image', title: image.title, src: base64 })
        }
      }

      for (let video of form.value.videos) {
        if (video.title && video.url) {
          gallery.push({ type: 'video', title: video.title, src: video.url })
        }
      }

      const project = {
        id: form.value.title.replace(/\s+/g, '-').toLowerCase(),
        title: form.value.title,
        category: form.value.category,
        image: thumbnailBase64,
        description: form.value.description,
        longDescription: form.value.description,
        date: form.value.date || new Date().toLocaleDateString(),
        tools: form.value.tools.split(',').map(t => t.trim()).filter(t => t),
        tags: form.value.tags.split(',').map(t => t.trim()).filter(t => t),
        gallery,
        status: 'pending'
      }

      const stored = localStorage.getItem('submittedProjects')
      const projects = stored ? JSON.parse(stored) : []
      projects.push(project)
      localStorage.setItem('submittedProjects', JSON.stringify(projects))

      alert('Project submitted successfully!')
      loadAvailableProjects()
      resetForm()
    }

    const resetForm = () => {
      form.value = {
        title: '',
        category: 'website',
        tags: '',
        description: '',
        date: '',
        tools: '',
        galleryImages: [{ title: '', file: null }],
        videos: [{ title: '', url: '' }]
      }
      thumbnailFile.value = null
    }

    const editSelectedProject = () => {
      if (!selectedProjectId.value) return
      const stored = localStorage.getItem('submittedProjects')
      const submittedProjects = stored ? JSON.parse(stored) : []
      let project = submittedProjects.find(p => p.id === selectedProjectId.value)
      if (!project) {
        project = staticProjectsData.find(p => p.id === selectedProjectId.value)
        if (project) {
          project = { ...project }
        }
      }
      if (project) {
        editingProject.value = project
        editForm.value = {
          title: project.title,
          category: project.category,
          tags: (project.tags || []).join(', '),
          description: project.description,
          tools: (project.tools || []).join(', '),
          galleryImages: (project.gallery || []).filter(g => g.type === 'image').map(g => ({ title: g.title, file: null, src: g.src })),
          videos: (project.gallery || []).filter(g => g.type === 'video').map(g => ({ title: g.title, url: g.src }))
        }
        isEditing.value = true
      }
    }

    const cancelEdit = () => {
      isEditing.value = false
      editingProject.value = null
      editForm.value = {
        title: '',
        category: 'website',
        tags: '',
        description: '',
        tools: '',
        galleryImages: [],
        videos: []
      }
    }

    const saveEdit = async () => {
      if (!editingProject.value) return

      let thumbnailBase64 = editingProject.value.image
      if (editThumbnailFile.value) {
        thumbnailBase64 = await compressImage(editThumbnailFile.value)
      }

      const gallery = []
      for (let image of editForm.value.galleryImages) {
        if (image.file) {
          const base64 = await compressImage(image.file)
          gallery.push({ type: 'image', title: image.title, src: base64 })
        } else if (image.src) {
          gallery.push({ type: 'image', title: image.title, src: image.src })
        }
      }

      for (let video of editForm.value.videos) {
        if (video.title && video.url) {
          gallery.push({ type: 'video', title: video.title, src: video.url })
        }
      }

      editingProject.value.title = editForm.value.title
      editingProject.value.id = editForm.value.title.replace(/\s+/g, '-').toLowerCase()
      editingProject.value.category = editForm.value.category
      editingProject.value.description = editForm.value.description
      editingProject.value.longDescription = editForm.value.description
      editingProject.value.tools = editForm.value.tools.split(',').map(t => t.trim()).filter(t => t)
      editingProject.value.tags = editForm.value.tags.split(',').map(t => t.trim()).filter(t => t)
      editingProject.value.image = thumbnailBase64
      editingProject.value.gallery = gallery

      const stored = localStorage.getItem('submittedProjects')
      const projects = stored ? JSON.parse(stored) : []
      const index = projects.findIndex(p => p.id === editingProject.value.id)
      if (index !== -1) {
        projects[index] = editingProject.value
      } else {
        projects.push(editingProject.value)
      }
      localStorage.setItem('submittedProjects', JSON.stringify(projects))

      alert('Project updated successfully!')
      isEditing.value = false
      editingProject.value = null
      loadAvailableProjects()
    }

    const deleteSelectedProject = () => {
      if (!selectedProjectId.value) return
      if (!confirm('Are you sure you want to delete this project?')) return

      const isStatic = staticProjectsData.some(p => p.id === selectedProjectId.value)
      if (isStatic) {
        const deletedStatic = localStorage.getItem('deletedStaticProjects') || '[]'
        let deleted = JSON.parse(deletedStatic)
        if (!deleted.includes(selectedProjectId.value)) {
          deleted.push(selectedProjectId.value)
          localStorage.setItem('deletedStaticProjects', JSON.stringify(deleted))
        }
      } else {
        const stored = localStorage.getItem('submittedProjects')
        if (stored) {
          let projects = JSON.parse(stored)
          projects = projects.filter(p => p.id !== selectedProjectId.value)
          localStorage.setItem('submittedProjects', JSON.stringify(projects))
        }
      }
      loadAvailableProjects()
      selectedProjectId.value = ''
    }

    const approveSelectedProject = () => {
      if (!selectedProjectId.value) return
      const stored = localStorage.getItem('submittedProjects')
      let projects = stored ? JSON.parse(stored) : []
      const index = projects.findIndex(p => p.id === selectedProjectId.value)
      if (index !== -1) {
        projects[index].status = 'approved'
        localStorage.setItem('submittedProjects', JSON.stringify(projects))
        alert('Project approved!')
        loadAvailableProjects()
      }
    }

    const rejectSelectedProject = () => {
      if (!selectedProjectId.value) return
      const stored = localStorage.getItem('submittedProjects')
      let projects = stored ? JSON.parse(stored) : []
      const index = projects.findIndex(p => p.id === selectedProjectId.value)
      if (index !== -1) {
        projects[index].status = 'rejected'
        localStorage.setItem('submittedProjects', JSON.stringify(projects))
        alert('Project rejected!')
        loadAvailableProjects()
      }
    }

    const exportProjects = () => {
      const stored = localStorage.getItem('submittedProjects')
      const projects = stored ? JSON.parse(stored) : []
      const json = JSON.stringify(projects, null, 2)
      navigator.clipboard.writeText(json).then(() => {
        alert('Projects JSON copied to clipboard. Paste it into src/data/projects-data.js to replace staticProjectsData.')
      }).catch(err => {
        console.error('Failed to copy: ', err)
        alert('Failed to copy to clipboard. Check console for JSON.')
        console.log(json)
      })
    }

    const compressAllImages = async () => {
      if (!confirm('This will compress all images in all projects. This may take some time. Continue?')) return
      
      // Compress submitted projects
      const stored = localStorage.getItem('submittedProjects')
      if (stored) {
        let projects = JSON.parse(stored)
        for (let project of projects) {
          if (project.image && project.image.startsWith('data:image/')) {
            project.image = await compressBase64Image(project.image)
          }
          for (let item of project.gallery) {
            if (item.type === 'image' && item.src && item.src.startsWith('data:image/')) {
              item.src = await compressBase64Image(item.src)
            }
          }
        }
        localStorage.setItem('submittedProjects', JSON.stringify(projects))
      }
      alert('All images compressed successfully!')
    }

    const importJsonData = () => {
      try {
        const json = JSON.parse(importJson.value)
        editForm.value = {
          title: json.title || '',
          category: json.category || '',
          tags: (json.tags || []).join(', '),
          description: json.description || '',
          tools: (json.tools || []).join(', '),
          galleryImages: (json.gallery || []).filter(g => g.type === 'image').map(g => ({ title: g.title, file: null, src: g.src })),
          videos: (json.gallery || []).filter(g => g.type === 'video').map(g => ({ title: g.title, url: g.src }))
        }
        alert('JSON imported successfully!')
      } catch (e) {
        alert('Invalid JSON: ' + e.message)
      }
    }

    return {
      password,
      isLoggedIn,
      selectedProjectId,
      isEditing,
      importJson,
      form,
      editForm,
      availableProjects,
      canEdit,
      canApprove,
      checkPassword,
      login,
      onProjectSelect,
      handleThumbnailChange,
      handleEditThumbnailChange,
      handleImageChange,
      handleEditImageChange,
      addImage,
      removeImage,
      addEditImage,
      removeEditImage,
      addVideo,
      removeVideo,
      addEditVideo,
      removeEditVideo,
      submitProject,
      editSelectedProject,
      cancelEdit,
      saveEdit,
      deleteSelectedProject,
      approveSelectedProject,
      rejectSelectedProject,
      exportProjects,
      compressAllImages,
      importJsonData
    }
  }
}
</script>

<style scoped>
.login-page {
  width: 100%;
}
</style>

