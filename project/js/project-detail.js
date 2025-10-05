// Ambil parameter ID dari URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");

// Cari data project berdasarkan ID
const project = projectsData.find(item => item.id === projectId);

// Pastikan data ada
if (!project) {
  document.getElementById("project-detail").innerHTML = `<p>Project tidak ditemukan.</p>`;
} else {
  // Tampilkan judul
  document.getElementById("project-title").textContent = project.title;

  // Tampilkan tags
  const tagsContainer = document.getElementById("project-tags");
  project.tags.forEach(tag => {
    const span = document.createElement("span");
    span.textContent = tag;
    tagsContainer.appendChild(span);
  });

  // Gambar utama
  const mainImage = document.getElementById("project-image");
  mainImage.src = project.image;
  mainImage.alt = project.title;

  // Deskripsi panjang
  const descContainer = document.getElementById("project-description");
  project.longDescription
    .trim()
    .split("\n")
    .forEach(paragraph => {
      const p = document.createElement("p");
      p.textContent = paragraph.trim();
      descContainer.appendChild(p);
    });

  // === Tampilkan gallery (gambar & video) ===
  const galleryContainer = document.getElementById("project-gallery");

  // Section Header
  const galleryHeader = document.createElement("h3");
  galleryHeader.textContent = "Page Info";
  galleryHeader.classList.add("gallery-header");
  galleryContainer.appendChild(galleryHeader);

  // Render Gallery
  project.gallery.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("gallery-item");

    // Judul tiap item
    if (item.title) {
      const title = document.createElement("h4");
      title.textContent = item.title;
      title.classList.add("gallery-title");
      wrapper.appendChild(title);
    }

    // Cek apakah item video
    if (item.type === "video") {
      const linkButton = document.createElement("a");
      linkButton.href = item.src;
      linkButton.target = "_blank";
      linkButton.rel = "noopener noreferrer";
      linkButton.textContent = "Tonton Video";
      linkButton.classList.add("video-button"); // gunakan CSS khusus jika mau
      wrapper.appendChild(linkButton);
    } else {
      // Default: tampilkan gambar
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.title || `Image ${index + 1}`;
      img.classList.add("gallery-image");
      wrapper.appendChild(img);
    }

    galleryContainer.appendChild(wrapper);
  });
}
