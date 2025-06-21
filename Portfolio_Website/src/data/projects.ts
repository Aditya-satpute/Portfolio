import { Code, Eye, FileText, Database, Settings, Users, Target, BarChart3, Award } from 'lucide-react';
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
    title: 'Distributed Database System',
    description: 'Implementation of a distributed database system with ACID properties, replication, and fault tolerance. Built from scratch using C++ with custom consensus algorithms for data consistency across multiple nodes. Supports SQL-like query processing and transaction management.',
    technologies: ['C++', 'Networking', 'Consensus Algorithms', 'SQL Parser', 'Multi-threading'],
    tabs: [
      { label: 'Source Code', icon: Code, link: 'https://github.com/your_handle/distributed-db' },
      { label: 'Architecture', icon: Database, link: '/docs/distributed-db-architecture.pdf' },
      { label: 'Performance Report', icon: BarChart3, link: '/docs/db-performance-analysis.pdf' }
    ]
  },
  {
    id: 2,
    title: 'Custom Operating System Kernel',
    description: 'A minimal operating system kernel developed in C and Assembly language. Features include process scheduling, memory management, file system implementation, and device drivers. Supports multitasking, inter-process communication, and system calls with a custom bootloader.',
    technologies: ['C', 'Assembly', 'x86 Architecture', 'Memory Management', 'File Systems'],
    tabs: [
      { label: 'Source Code', icon: Code, link: 'https://github.com/your_handle/custom-os' },
      { label: 'System Design', icon: Settings, link: '/docs/os-system-design.pdf' },
      { label: 'Demo Video', icon: Eye, link: 'https://youtube.com/watch?v=os-demo' }
    ]
  }
];

export const managementProjects: ManagementProject[] = [
  {
    id: 1,
    title: 'Annual Tech Conference Organization',
    description: 'Led the organization of a 3-day technical conference with 500+ attendees, 20+ speakers, and 15+ sponsors. Managed budget allocation, vendor coordination, speaker management, and logistics. Implemented digital registration system and mobile app for attendees with real-time updates.',
    scope: ['Event Planning', 'Budget Management', 'Vendor Coordination', 'Team Leadership'],
    impact: '500+ Attendees, $50K Budget, 95% Satisfaction Rate',
    tabs: [
      { label: 'Event Report', icon: FileText, link: '/docs/tech-conference-report.pdf' },
      { label: 'Photo Gallery', icon: Eye, link: 'https://photos.google.com/conference-2023' },
      { label: 'Feedback Analysis', icon: BarChart3, link: '/docs/conference-feedback.pdf' }
    ]
  },
  {
    id: 2,
    title: 'Student Mentorship Program',
    description: 'Designed and implemented a comprehensive mentorship program connecting senior students with juniors. Established structured curriculum, progress tracking system, and regular evaluation metrics. Successfully mentored 50+ students with 90% program completion rate and significant improvement in academic performance.',
    scope: ['Program Design', 'Curriculum Development', 'Progress Tracking', 'Performance Analysis'],
    impact: '50+ Students Mentored, 90% Completion Rate, 25% Grade Improvement',
    tabs: [
      { label: 'Program Guide', icon: FileText, link: '/docs/mentorship-program-guide.pdf' },
      { label: 'Success Stories', icon: Award, link: '/docs/mentorship-success-stories.pdf' },
      { label: 'Impact Analysis', icon: Target, link: '/docs/mentorship-impact-report.pdf' }
    ]
  }
];

export const porList = [
  'Technical Lead, University Tech Club',
  'Event Coordinator, Annual Tech Fest 2023',
  'Mentor, Coding Bootcamp Program',
  'Organizer, XYZ Fest',
  'Founder, XYZ Company',
  'Vice President, Computer Science Society',
  'Team Captain, Programming Contest Team',
  'Workshop Coordinator, Developer Meetups'
];