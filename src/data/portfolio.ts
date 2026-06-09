export const personalInfo = {
  name: "Fabianugerah Bainasshiddiq",
  brandName: "GreXXDev",
  tagline: "Junior Web Developer",
  description:
    "Hiii, Saya adalah junior Web Developer yang berdomisili di Pandaan dan sekarang sedang bersekolah di SMKN 1 Purwosari jurusan Rekayasa Perangkat Lunak.",
  email: "fabianugerah@gmail.com",
  phone: "088217418481",
  location: "Pandaan, Pasuruan - Jawa Timur",
  website: "Fabianugerah.github.io",
  birthdate: "05 Mei 2007",
  age: "18 Tahun",
  status: "Pelajar",
  cvPath: "/assets/cv/My CV.pdf",
};

export const socialLinks = [
  {
    name: "GitHub",
    icon: "bi-github",
    url: "https://github.com/Fabianugerah",
  },
  {
    name: "LinkedIn",
    icon: "bi-linkedin",
    url: "https://www.linkedin.com/in/fabianugerah-bainasshiddiq-3a7645309",
  },
  {
    name: "Dribbble",
    icon: "bi-dribbble",
    url: "https://dribbble.com/Fabianugerah",
  },
  {
    name: "Instagram",
    icon: "bi-instagram",
    url: "https://www.instagram.com/fbian_nugrhx/",
  },
  {
    name: "Twitter",
    icon: "bi-twitter-x",
    url: "https://x.com/Fabianugerah?t=YbknnXCLWBE8ac6vpOkuxg&s=08",
  },
];

export const education = [
  {
    period: "2014 - 2020",
    school: "SDN Kutorejo 2",
    location: "Pandaan, Kabupaten Pasuruan",
  },
  {
    period: "2020 - 2023",
    school: "SMP Negeri 1 Pandaan",
    location: "Pandaan, Kabupaten Pasuruan",
  },
  {
    period: "2023 - Sekarang",
    school: "SMK Negeri 1 Purwosari",
    location: "Purwosari, Kabupaten Pasuruan",
    competency: "Rekayasa Perangkat Lunak",
  },
];

export const services = [
  {
    icon: "bi-brush",
    title: "UI/UX Design",
    colorClass: "icon-uiux",
    description:
      "Merancang pengalaman pengguna (UX) yang intuitif dan antarmuka pengguna (UI) yang menarik, dengan fokus pada kemudahan penggunaan, aksesibilitas, dan estetika visual.",
  },
  {
    icon: "bi-code-slash",
    title: "Front End Developer",
    colorClass: "icon-frontend",
    description:
      "Membangun antarmuka pengguna yang responsif dan interaktif menggunakan teknologi web modern seperti React, Angular, atau Vue.js.",
  },
  {
    icon: "bi-database",
    title: "Back End Developer",
    colorClass: "icon-backend",
    description:
      "Mengembangkan logika sisi server, API, dan mengelola database untuk memastikan fungsionalitas aplikasi yang kuat, aman, dan efisien.",
  },
  {
    icon: "bi-window",
    title: "Web Design",
    colorClass: "icon-web-design",
    description:
      "Menciptakan tata letak visual, estetika, dan interaksi yang menarik untuk situs web, memastikan pengalaman pengguna yang intuitif dan responsif.",
  },
  {
    icon: "bi-phone",
    title: "Mobile Developer",
    colorClass: "icon-mobile",
    description:
      "Membangun aplikasi mobile untuk platform iOS dan Android, memastikan kinerja optimal, antarmuka intuitif, dan pengalaman pengguna yang mulus.",
  },
];

export const skills = [
  { name: "C++", icon: "/assets/img/logo/c++.png" },
  { name: "HTML", icon: "/assets/img/logo/html.png" },
  { name: "CSS", icon: "/assets/img/logo/css.png" },
  { name: "JavaScript", icon: "/assets/img/logo/js.png" },
  { name: "PHP", icon: "/assets/img/logo/php.png" },
  { name: "Dart", icon: "/assets/img/logo/dart.png" },
  { name: "Laravel", icon: "/assets/img/logo/laravel.png" },
  { name: "Vue", icon: "/assets/img/logo/vue.png" },
  { name: "Flutter", icon: "/assets/img/logo/flutter.png" },
  { name: "Bootstrap", icon: "/assets/img/logo/bootstrap.png" },
  { name: "Tailwind", icon: "/assets/img/logo/tailwind.png" },
  { name: "GitHub", icon: "/assets/img/logo/github.png" },
  { name: "Figma", icon: "/assets/img/logo/figma.png" },
  { name: "Canva", icon: "/assets/img/logo/canva.png" },
];

export const techLogos = [
  { name: "Dribbble", icon: "/assets/img/logo/dribbble.png" },
  { name: "GitHub", icon: "/assets/img/logo/github.png" },
  { name: "Laravel", icon: "/assets/img/logo/laravel.png" },
  { name: "Bootstrap", icon: "/assets/img/logo/bootstrap.png" },
  { name: "Figma", icon: "/assets/img/logo/figma.png" },
  { name: "Canva", icon: "/assets/img/logo/canva.png" },
  { name: "Tailwind", icon: "/assets/img/logo/tailwind.png" },
  { name: "Flutter", icon: "/assets/img/logo/flutter.png" },
  { name: "Vue", icon: "/assets/img/logo/vue.png" },
];

export type ProjectCategory = "all" | "frontend" | "backend" | "uiux" | "mobile";

export const projectItems = [
  {
    id: 1,
    title: "Yuk Travel - Bootstrap",
    description: "Landing page responsif dengan HTML, CSS, dan Bootstrap 5.",
    image: "/assets/img/project/yuk_travel.png",
    category: "frontend" as ProjectCategory,
    link: "#",
    year: "2023",
    overview: "Yuk Travel is a responsive landing page designed to showcase travel destinations and packages. It utilizes modern web technologies to ensure a seamless experience across all devices, helping users find their dream vacations quickly and easily.\n\nKey features include:\n• Responsive layout tailored for mobile and desktop\n• Interactive UI elements with smooth transitions\n• Integrated booking form templates",
    techStack: ["HTML", "CSS", "Bootstrap 5"],
  },
  {
    id: 2,
    title: "Spacond Store",
    description: "Landing page responsif dengan HTML, CSS, dan Bootstrap 5.",
    image: "/assets/img/project/spacond.png",
    category: "frontend" as ProjectCategory,
    link: "#",
    year: "2023",
    overview: "Spacond Store is a modern e-commerce landing page template designed for retail businesses. It focuses on clean typography and product showcases to drive conversions. The project highlights front-end development capabilities with a focus on CSS frameworks.\n\nKey features include:\n• Clean product grid layouts\n• Accessible navigation menu\n• Optimized image loading",
    techStack: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
  },
  {
    id: 3,
    title: "Validation JS",
    description: "Checklist Reminder API menggunakan JWT dan Swagger Documentation.",
    image: "/assets/img/project/validasi.png",
    category: "backend" as ProjectCategory,
    link: "#",
    year: "2024",
    overview: "A robust backend API service built to handle checklist reminders and user validations. The system incorporates JWT for secure authentication and uses Swagger for comprehensive API documentation, making it easy for front-end developers to integrate.\n\nKey features include:\n• Secure JWT authentication\n• RESTful API endpoints\n• Automated Swagger documentation",
    techStack: ["Node.js", "Express", "JWT", "Swagger"],
  },
  {
    id: 4,
    title: "UI/UX Figma Kit",
    description: "Desain aplikasi tugas harian dengan prototipe interaktif di Figma.",
    image: "/assets/img/project/perpustakaan.png",
    category: "uiux" as ProjectCategory,
    link: "#",
    year: "2024",
    overview: "A comprehensive UI/UX design kit for a daily task management application. Created entirely in Figma, this project showcases user-centered design principles, wireframing, and interactive prototyping to ensure a seamless user experience.\n\nKey features include:\n• High-fidelity interactive prototypes\n• Custom design system and components\n• User flow documentation",
    techStack: ["Figma", "UI Design", "Prototyping"],
  },
  {
    id: 5,
    title: "LuxeV - Car Showroom",
    description: "Aplikasi kalkulasi suhu dengan Flutter dan animasi interaktif.",
    image: "/assets/img/project/luxev_mobile.png",
    category: "mobile" as ProjectCategory,
    link: "#",
    year: "2025",
    overview: "LuxeV is an interactive mobile application built with Flutter, designed to showcase luxury cars. It features smooth animations and complex state management, demonstrating advanced mobile development skills and cross-platform compatibility.\n\nKey features include:\n• Smooth native-like animations\n• Cross-platform compatibility (iOS & Android)\n• Complex state management",
    techStack: ["Flutter", "Dart", "Firebase"],
  },
];

export const filterCategories = [
  { value: "all", label: "Semua" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "uiux", label: "UI/UX Design" },
  { value: "mobile", label: "Mobile" },
];

export const certifications = [
  {
    id: 1,
    title: "Sertifikat Web Developer Junior",
    issuer: "Dicoding Indonesia",
    date: "Oktober 2023",
    image: "/assets/img/project/yuk_travel.png",
  },
  {
    id: 2,
    title: "Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Agustus 2023",
    image: "/assets/img/project/spacond.png",
  },
  {
    id: 3,
    title: "Belajar Dasar UX Design",
    issuer: "Google",
    date: "Januari 2024",
    image: "/assets/img/project/perpustakaan.png",
  }
];

