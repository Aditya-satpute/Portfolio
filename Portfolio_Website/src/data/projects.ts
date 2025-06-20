import { Code, Eye, FileText } from 'lucide-react';
import { TechnicalProject } from '../types';

export const technicalProjects: TechnicalProject[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Implemented responsive design and optimized for performance.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
    tabs: [
      { label: 'Source Code', icon: Code, link: 'https://github.com/your_handle/ecommerce-platform' },
      { label: 'Live Preview', icon: Eye, link: 'https://your-ecommerce-demo.com' },
      { label: 'Documentation', icon: FileText, link: '/docs/ecommerce-platform.pdf' }
    ]
  },
  {
    id: 2,
    title: 'Task Management System',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking. Built using React, Firebase, and Material-UI. Includes drag-and-drop functionality, notifications, and analytics dashboard.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket', 'Chart.js'],
    tabs: [
      { label: 'Source Code', icon: Code, link: 'https://github.com/your_handle/task-management' },
      { label: 'Live Preview', icon: Eye, link: 'https://your-taskmanager-demo.com' },
      { label: 'Case Study', icon: FileText, link: '/docs/task-management-case-study.pdf' }
    ]
  },
  {
    id: 3,
    title: 'Weather Analytics Dashboard',
    description: 'A comprehensive weather analytics dashboard that aggregates data from multiple APIs and provides detailed insights. Features interactive charts, location-based forecasts, and historical data analysis. Built with Vue.js and D3.js for data visualization.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    tabs: [
      { label: 'Source Code', icon: Code, link: 'https://github.com/your_handle/weather-dashboard' },
      { label: 'Live Preview', icon: Eye, link: 'https://your-weather-demo.com' },
      { label: 'API Docs', icon: FileText, link: '/docs/weather-api-documentation.pdf' }
    ]
  },
  {
    id: 4,
    title: 'Social Media Analytics Tool',
    description: 'An advanced social media analytics platform that tracks engagement metrics, sentiment analysis, and competitor insights. Integrates with multiple social media APIs and provides comprehensive reporting. Built with React, Python, and machine learning models.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Python', 'TensorFlow', 'Redis', 'Docker'],
    tabs: [
      { label: 'Source Code', icon: Code, link: 'https://github.com/your_handle/social-analytics' },
      { label: 'Demo Video', icon: Eye, link: 'https://youtube.com/watch?v=demo-video' },
      { label: 'Research Paper', icon: FileText, link: '/docs/social-analytics-research.pdf' }
    ]
  }
];

export const porList = [
  'Founder & Organizer, Project Seva, IIT Patna',
    'Overall Co-ordinator, Sponsorship & Marketing, Anwesha 2026, Cultural Fest IIT Patna',
    'Mentor, Student Mentorship Programme, IIT Patna',
    'Overall Co-ordinator, Guest Lect & Exhibition, Celesta 2025, Tech Fest, IIT Patna',
    'Executive, E-Cell, IIT Patna',
    'Mentor, NSS IIT Patna',
];