// Site bilgileri
export const siteConfig = {
  name: 'Ali Olkaç',
  siteName: 'Ali Olkaç',
  title: 'Bilgisayar Mühendisliği Öğrencisi & Full-Stack Developer',
  description: 'Modern web teknolojileri ile kullanıcı dostu ve performanslı uygulamalar geliştiriyorum.',
  url: 'https://aliolkac.com',
  ogImage: 'https://aliolkac.com/og.jpg',
  links: {
    github: 'https://github.com/aliolkac',
    linkedin: 'https://linkedin.com/in/aliolkac',
    email: 'mailto:aliolkac43@gmail.com',
  },
  socialLinks: {
    github: 'https://github.com/aliolkac',
    twitter: 'https://twitter.com/aliolkac',
    linkedin: 'https://linkedin.com/in/aliolkac',
  },
  email: 'aliolkac43@gmail.com'
}

// Navigasyon linkleri
export const navLinks = [
  { title: 'Ana Sayfa', path: '/', name: 'Ana Sayfa', href: '/' },
  { title: 'Projeler & Sertifikalar', path: '/projects', name: 'Projeler & Sertifikalar', href: '/projects' },
  { title: 'CV', path: '/cv', name: 'CV', href: '/cv' },
  { title: 'İletişim', path: '/contact', name: 'İletişim', href: '/contact' },
]

// Teknoloji stack'i - iconName kullanarak React componenti içinde ilgili iconu göstereceğiz
export const techStack = [
  { name: 'React', iconName: 'FaReact', color: 'primary' },
  { name: 'Next.js', iconName: 'SiNextdotjs', color: 'white' },
  { name: 'TypeScript', iconName: 'SiTypescript', color: 'primary' },
  { name: 'Tailwind CSS', iconName: 'SiTailwindcss', color: 'secondary' },
  { name: 'Node.js', iconName: 'FaNodeJs', color: 'highlight' },
  { name: 'Python', iconName: 'FaPython', color: 'secondary' },
  { name: 'MongoDB', iconName: 'SiMongodb', color: 'highlight' },
  { name: 'Firebase', iconName: 'SiFirebase', color: 'accent' },
  { name: 'Git', iconName: 'FaGitAlt', color: 'accent' },
  { name: 'Docker', iconName: 'FaDocker', color: 'primary' },
  { name: 'AWS', iconName: 'FaAws', color: 'secondary' },
  { name: 'GraphQL', iconName: 'SiGraphql', color: 'accent' },
]

// Projeler
export const projects = [
  {
    title: 'Proje 1',
    description: 'Proje açıklaması buraya gelecek.',
    technologies: ['React', 'Next.js', 'TypeScript'],
    image: '/images/project1.jpg',
    github: 'https://github.com/aliolkac/project1',
    demo: 'https://project1.aliolkac.com',
  },
  // Diğer projeler buraya eklenecek
]

// Animasyon varyantları
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Sayfa geçiş animasyonları
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
} 