// js/project-detail.js

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

  // Deskripsi panjang (gunakan <p>)
  const descContainer = document.getElementById("project-description");
  project.longDescription
    .trim()
    .split("\n")
    .forEach(paragraph => {
      const p = document.createElement("p");
      p.textContent = paragraph.trim();
      descContainer.appendChild(p);
    });

// === Galeri gambar di bawah deskripsi ===
const gallery = document.getElementById("project-gallery");

// Judul section (optional)
const galleryHeader = document.createElement("h3");
galleryHeader.textContent = "Page Info";
galleryHeader.classList.add("gallery-header");
gallery.appendChild(galleryHeader);

// Tampilkan gambar satu per satu ke bawah
project.gallery.forEach((item, index) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("gallery-item");

  const imgTitle = document.createElement("h4");
  imgTitle.textContent = item.title || `Gambar ${index + 1}`;
  imgTitle.classList.add("gallery-title");
  wrapper.appendChild(imgTitle);

  const img = document.createElement("img");
  img.src = item.image || item;
  img.alt = item.title || `${project.title} - image ${index + 1}`;
  img.classList.add("gallery-image");

  wrapper.appendChild(img);
  gallery.appendChild(wrapper);
});


}

// Galeri gambar dengan judul
const gallery = document.getElementById("project-gallery");

// Cek jika ada galleryDetails
if (project.galleryDetails && project.galleryDetails.length > 0) {
  project.galleryDetails.forEach(item => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("gallery-item");

    if (item.title) {
      const title = document.createElement("h4");
      title.textContent = item.title;
      title.classList.add("gallery-title");
      wrapper.appendChild(title);
    }

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title || project.title;
    img.classList.add("gallery-image");

    wrapper.appendChild(img);
    gallery.appendChild(wrapper);
  });
}
