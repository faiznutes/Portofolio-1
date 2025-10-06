const staticProjectsData = [
  {
    id: "modern-website-design",
    title: "Modern Website Design",
    category: "website",
    image: "assets/images/project1.jpg",
    description: "Desain website portofolio dengan tampilan responsif dan modern.",
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
    id: "creative-logo-concept",
    title: "Creative Logo Concept",
    category: "design",
    image: "assets/images/project1.jpg",
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
      { type: "image", title: "Konsep Awal", src: "assets/images/project1.jpg" },
      { type: "image", title: "Varian Warna", src: "assets/images/project1.jpg" },
      { type: "video", title: "Animasi Logo", src: "https://www.youtube.com/watch?v=example2" }
    ]
  },

  
];

const getProjectsData = () => {
  const stored = localStorage.getItem('submittedProjects');
  const dynamicData = stored ? JSON.parse(stored) : [];
  const deletedStatic = localStorage.getItem('deletedStaticProjects') || '[]';
  const deleted = JSON.parse(deletedStatic);
  const filteredStatic = staticProjectsData.filter(p => !deleted.includes(p.id));
  return [...dynamicData, ...filteredStatic];
};
