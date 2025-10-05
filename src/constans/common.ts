import { FiBookOpen, FiBriefcase, FiClipboard, FiGlobe, FiHome, FiMail, FiUser } from 'react-icons/fi'

export const HOST = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3001'

export const NAV_ITEMS = [
  { path: '/', label: 'Home', Icon: FiHome },
  { path: '/about', label: 'About', Icon: FiUser },
  { path: '/experience', label: 'Experience', Icon: FiBriefcase },
  { path: '/blog', label: 'Blog', Icon: FiGlobe },
  { path: '/projects', label: 'Projects', Icon: FiClipboard },
  { path: '/contact', label: 'Contact', Icon: FiMail },
  { path: '/guestbook', label: 'Guestbook', Icon: FiBookOpen },
]

export const PAGE_TITLES = {
  '/': '._',
  '/about': 'About',
  '/experience': 'Experience',
  '/blog': 'Blog',
  '/projects': 'Projects',
  '/contact': 'Contact',
  '/guestbook': 'G-book',
}

export const SOCIALS = {
  GH: 'https://github.com/tushar-glitch',
  IG: 'https://www.instagram.com/glitch.tushar',
  IN: 'https://www.linkedin.com/in/tushar-chauhan4/',
  WA: 'https://api.whatsapp.com/send?phone=9149329927&text=%3CChatMe%20%2F%3E',
}

export const RESUME_URL = 'https://drive.google.com/file/d/1UvTOynUSZlLxUrVEIP33BGUp7Im7Y0BA/view?usp=sharing'

export const EMAILJS = {
  PUBLIC_KEY: '3dacBXVUOyTeCXMoS',
  SERVICE_ID: 'service_8v4xdbs',
  TEMPLATE_ID: 'template_5i9rzjf'
}

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBs_LvMMjV0QYkXVsmVBJidKkawX6fGqYg",
  authDomain: "tushar-portfolio-e813e.firebaseapp.com",
  projectId: "tushar-portfolio-e813e",
  storageBucket: "tushar-portfolio-e813e.firebasestorage.app",
  messagingSenderId: "467988257045",
  appId: "1:467988257045:web:79607b3961cf85b1f0b11c",
  measurementId: "G-Y76YYMQNWM"
}
