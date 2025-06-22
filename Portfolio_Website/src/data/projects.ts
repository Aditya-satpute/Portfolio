import { Code, Eye, FileText, Database, Settings, Users, Target, BarChart3, Award, Brain, CircuitBoard, BookOpen, Monitor, AppWindow, Smartphone } from 'lucide-react';
import { TechnicalProject, CoreProject, ManagementProject } from '../types';

export const technicalProjects: TechnicalProject[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Implemented responsive design and optimized for performance.',
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
    technologies: ['React', 'Python', 'TensorFlow', 'Redis', 'Docker'],
    tabs: [
      { label: 'Source Code', icon: Code, link: 'https://github.com/your_handle/social-analytics' },
      { label: 'Demo Video', icon: Eye, link: 'https://youtube.com/watch?v=demo-video' },
      { label: 'Research Paper', icon: FileText, link: '/docs/social-analytics-research.pdf' }
    ]
  }
];

export const coreProjects: CoreProject[] = [
  {
    id: 1,
    title: 'Hardy Cross Network',
    description: 'A web-based tool to simulate fluid flow in pipe networks using the Hardy Cross method. Users input pipe resistances, initial discharge guesses, loop weights, and iterations. The backend calculates balanced discharges, and the React frontend displays results in an intuitive format, ideal for engineering applications.',
    technologies: ['Python', 'React.js', 'Typescript', 'Tailwind CSS', 'Vite'],
    tabs: [
      { label: 'Logic', icon: CircuitBoard, link: 'https://github.com/Aditya-satpute/Hardy_Cross/blob/main/Python%20Code/Hardy%20Cross%20Pipeline%20network.py' },
      { label: 'Source Code', icon: Code, link: 'https://github.com/Aditya-satpute/Hardy_Cross' }
      // { label: 'Performance Report', icon: BarChart3, link: '/docs/db-performance-analysis.pdf' }
    ]
  },
  // {
  //   id: 2,
  //   title: 'Custom Operating System Kernel',
  //   description: 'A minimal operating system kernel developed in C and Assembly language. Features include process scheduling, memory management, file system implementation, and device drivers. Supports multitasking, inter-process communication, and system calls with a custom bootloader.',
  //   technologies: ['C', 'Assembly', 'x86 Architecture', 'Memory Management', 'File Systems'],
  //   tabs: [
  //     { label: 'Source Code', icon: Code, link: 'https://github.com/your_handle/custom-os' },
  //     { label: 'System Design', icon: Settings, link: '/docs/os-system-design.pdf' },
  //     { label: 'Demo Video', icon: Eye, link: 'https://youtube.com/watch?v=os-demo' }
  //   ]
  // }
];

export const managementProjects: ManagementProject[] = [
  {
    id: 1,
    title: 'Experience Optimization of OneIITP – The Campus App of IIT Patna',
    description: 'Redesigned and reimagined OneIITP by identifying UX flaws, proposing innovative solutions, and creating an implementation roadmap to boost student engagement and operational efficiency.',
    scope: ['ProductStrategy', 'PrioritizationFrameworks', 'KPITracking', 'UserResearch','UXAudit','Wireframing'],
    impact: '30–50% expected rise in engagement, Faster issue resolution & better navigation, Personalized student experience',
    tabs: [
      { label: 'PRD Doc.', icon: FileText, link: 'https://www.notion.so/Product-Requirements-Document-OneIITP-App-1c6d038f707b80a79f31f2bee977097c?source=copy_link' },
      { label: 'PPT', icon: Monitor, link: 'https://drive.google.com/file/d/1nPqv82BQO2OH_HTEy27TgbDca_jwAz6R/view?usp=sharing' },
      { label: 'Application', icon: Smartphone, link: 'https://play.google.com/store/apps/details?id=com.oneiitp.app' }
    ]
  },
  {
    id: 2,
    title: 'Instacart Checkout Optimization',
    description: 'Redesigned Instacart’s first-time checkout flow to reduce cart abandonment by solving UX and technical bottlenecks.Backed by research, A/B testing, and competitor analysis to deliver a faster, simpler user experience. Secured 1st Rank for this case study.',
    scope: ['UserResearch', 'TechnicalAnalysis', 'A/BTesting', 'CheckoutFlow','ConversionOptimization','CompetitiveBenchmarking','UXDesign'],
    impact: 'Reduced checkout friction, Increased conversion rates, Improved first-time user experience',
    tabs: [
      { label: 'Case Study PDF', icon: BookOpen, link: 'https://drive.google.com/file/d/1cxtSVxBGn7zaOBpgW-6Jts8b9c69rvXV/view?usp=sharing' },
      // { label: 'Success Stories', icon: Award, link: '/docs/mentorship-success-stories.pdf' },
      // { label: 'Impact Analysis', icon: Target, link: '/docs/mentorship-impact-report.pdf' }
    ]
  }
];

export const porList = [
  'Founder & Organizer, Project Seva, IIT Patna',
  'Overall Co-ordinator, Marketing & Sponsorship, Anwesha, Cultural Fest of IIT Patna',
  'Overall Co-ordinator, Guest Lecture & Exhibition, Celesta, Techfest of IIT Patna',
  'Executive, E-Cell, IIT Patna',
  'Mentor, National Service Scheme (NSS), IIT Patna',
  'Mentor, Student Mentorhsip Program, IIT Patna'
];