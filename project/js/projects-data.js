const staticProjectsData = [
  {
    id: "logo-fossei-rakereg-2021",
    title: "Logo FoSSEI RAKEREG 2021",
    category: "design",
    image: "../assets/images/fossei/logo.jpg",
    description: "Logo ini menggambarkan semangat kebersamaan, pertumbuhan, dan intelektualitas mahasiswa ekonomi Islam di wilayah Jabodetabek dalam kegiatan Rakereg (Rapat Kerja Regional) 2021.\n\nBentuk utama terdiri dari kombinasi huruf F dan I yang disusun secara geometris untuk merepresentasikan identitas FOSEI (Forum Silaturahmi Studi Ekonomi Islam) — simbol soliditas, struktur, dan arah yang jelas dalam pengembangan ekonomi Islam.\n\nElemen daun berwarna hijau di bagian bawah melambangkan pertumbuhan, keseimbangan, dan nilai keberlanjutan (sustainability) yang menjadi dasar ekonomi Islam.\n\nSedangkan lengkungan biru di atas menggambarkan lingkaran ukhuwah dan perlindungan, mencerminkan semangat kolaborasi antar lembaga di bawah satu visi besar.\n\nWarna biru merepresentasikan profesionalisme dan intelektualitas, sementara hijau melambangkan spiritualitas dan kesejahteraan umat.\n\nKeduanya berpadu membentuk harmoni antara ilmu dan nilai keislaman.\n\nDengan gaya modern-minimalis, logo ini dirancang agar fleksibel digunakan dalam berbagai media visual acara, baik cetak maupun digital, serta tetap menonjolkan identitas khas FOSEI yang berkarakter dan bermakna.",
    longDescription: "Logo ini menggambarkan semangat kebersamaan, pertumbuhan, dan intelektualitas mahasiswa ekonomi Islam di wilayah Jabodetabek dalam kegiatan Rakereg (Rapat Kerja Regional) 2021.\n\nBentuk utama terdiri dari kombinasi huruf F dan I yang disusun secara geometris untuk merepresentasikan identitas FOSEI (Forum Silaturahmi Studi Ekonomi Islam) — simbol soliditas, struktur, dan arah yang jelas dalam pengembangan ekonomi Islam.\n\nElemen daun berwarna hijau di bagian bawah melambangkan pertumbuhan, keseimbangan, dan nilai keberlanjutan (sustainability) yang menjadi dasar ekonomi Islam.\n\nSedangkan lengkungan biru di atas menggambarkan lingkaran ukhuwah dan perlindungan, mencerminkan semangat kolaborasi antar lembaga di bawah satu visi besar.\n\nWarna biru merepresentasikan profesionalisme dan intelektualitas, sementara hijau melambangkan spiritualitas dan kesejahteraan umat.\n\nKeduanya berpadu membentuk harmoni antara ilmu dan nilai keislaman.\n\nDengan gaya modern-minimalis, logo ini dirancang agar fleksibel digunakan dalam berbagai media visual acara, baik cetak maupun digital, serta tetap menonjolkan identitas khas FOSEI yang berkarakter dan bermakna.",
    date: "October 2025",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    tags: ["Logo", "Design"],
    gallery: [
      { type: "image", title: "Logo FoSSEI", src: "../assets/images/fossei/logo.jpg" },
      { type: "image", title: "Filosofi", src: "../assets/images/fossei/FIlsof 1.jpg" },
      { type: "image", title: "", src: "../assets/images/fossei/FIlsof 2.jpg" },
      { type: "image", title: "", src: "../assets/images/fossei/FIlsof 3.jpg" },
      { type: "image", title: "", src: "../assets/images/fossei/FIlsof 4.jpg" },
      { type: "image", title: "Background Zoom", src: "../assets/images/fossei/banner zoom.jpg" }
    ]
  }
];

const getProjectsData = () => {
  const stored = localStorage.getItem('submittedProjects');
  const dynamicData = stored ? JSON.parse(stored).filter(p => p.status === 'approved') : [];
  const deletedStatic = localStorage.getItem('deletedStaticProjects') || '[]';
  const deleted = JSON.parse(deletedStatic);
  const filteredStatic = staticProjectsData.filter(p => !deleted.includes(p.id));
  return [...dynamicData, ...filteredStatic];
};
