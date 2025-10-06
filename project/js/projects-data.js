const staticProjectsData = [
  {
    id: "project1",
    title: "Modern Website Design",
    category: "website",
    image: "assets/images/project1.jpg",
    description: "Desain website portofolio modern dengan layout clean dan animasi halus.",
    longDescription: `
      Desain website portofolio modern dengan tampilan bersih dan fokus pada user experience.
      Dibuat menggunakan HTML, CSS, dan JavaScript dengan layout fleksibel dan responsive.
      Terdapat animasi subtle serta dark mode untuk tampilan profesional.
    `,
    date: "September 2025",
    tools: ["Figma", "HTML", "CSS", "JavaScript"],
    tags: ["Website", "UI/UX", "Responsive"],
    gallery: [
      { type: "image", title: "Tampilan Homepage", src: "assets/images/project1.jpg" },
      { type: "image", title: "Mode Gelap", src: "assets/images/project1.jpg" },
      { type: "video", title: "Video Product", src: "https://www.youtube.com/watch?v=Ef2JX3gbShM" }
    ]
  },

  {
    id: "project2",
    title: "Creative Logo Concept",
    category: "design",
    image: "assets/images/project2.jpg",
    description: "Logo minimalis untuk brand digital yang menonjolkan identitas visual.",
    longDescription: `
      Desain logo kreatif dengan konsep minimalis yang fokus pada identitas visual brand.
      Menggunakan elemen-elemen sederhana namun kuat untuk menciptakan kesan yang memorable.
      Cocok untuk brand digital dan startup yang ingin tampil profesional.
    `,
    date: "October 2025",
    tools: ["Adobe Illustrator", "Figma"],
    tags: ["Logo Design", "Branding", "Minimalist"],
    gallery: [
      { type: "image", title: "Konsep Awal", src: "assets/images/project2.jpg" },
      { type: "image", title: "Varian Warna", src: "assets/images/project2.jpg" },
      { type: "video", title: "Animasi Logo", src: "https://www.youtube.com/watch?v=example2" }
    ]
  },

  {
    id: "project3",
    title: "Promotional Video Edit",
    category: "video",
    image: "assets/images/project1.jpg",
    description: "Editing video promo dengan efek cinematic dan transisi halus.",
    longDescription: `
      Proyek editing video promosional dengan gaya cinematic yang menarik perhatian.
      Menggunakan transisi halus, efek visual, dan musik latar yang sesuai untuk meningkatkan engagement.
      Ditujukan untuk kampanye pemasaran produk atau layanan.
    `,
    date: "November 2025",
    tools: ["Adobe Premiere Pro", "After Effects"],
    tags: ["Video Editing", "Cinematic", "Promotion"],
    gallery: [
      { type: "image", title: "Thumbnail Video", src: "assets/images/project1.jpg" },
      { type: "video", title: "Full Video", src: "https://www.youtube.com/watch?v=example3" }
    ]
  }

  // Tambahan project lain bisa ditambahkan di sini dengan format yang sama
];

const getProjectsData = () => {
  const stored = localStorage.getItem('submittedProjects');
  const dynamicData = stored ? JSON.parse(stored) : [];
  return [...staticProjectsData, ...dynamicData];
};
