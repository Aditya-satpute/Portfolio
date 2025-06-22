import React, { useState } from 'react';
import { X, Code, Database, Cloud, Wrench, Users, Brain } from 'lucide-react';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('frontend');

  if (!isOpen) return null;

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        'React', 'TypeScript', 'JavaScript',
        'HTML5', 'CSS3', 'Tailwind CSS',
        'Bootstrap', 'Responsive Design', 'Progressive Web Apps'
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: Database,
      skills: [
        'Python',
        'Django','REST APIs',
        'Authentication', 'Authorization'
      ]
    },
    // database: {
    //   title: 'Database & Storage',
    //   icon: Database,
    //   skills: [
    //     'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase',
    //     'SQLite', 'Database Design', 'Query Optimization', 'Data Modeling',
    //     'NoSQL', 'ACID Properties', 'Indexing'
    //   ]
    // },
    // cloud: {
    //   title: 'Cloud & DevOps',
    //   icon: Cloud,
    //   skills: [
    //     'AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD',
    //     'Jenkins', 'GitHub Actions', 'Terraform', 'Linux', 'Nginx',
    //     'Load Balancing', 'Monitoring', 'Logging'
    //   ]
    // },
    tools: {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: [
        'Git', 'GitHub', 'VS Code','Figma',
        'Vite','Notion','Google Sheets + Apps Script'
        
      ]
    },
    soft: {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        'Team Leadership', 'Project Management', 'Problem Solving',
        'Communication', 'Mentoring', 'Code Review', 'Technical Writing',
        'Presentation Skills', 'Time Management', 'Adaptability'
      ]
    },
    algorithms: {
      title: 'Algorithms & CS',
      icon: Brain,
      skills: [
        'Data Structures', 'Algorithms', 'System Design', 'Competitive Programming',
        'Dynamic Programming', 'Graph Theory', 'Tree Algorithms',
        'Sorting & Searching', 'Complexity Analysis', 'Design Patterns'
      ]
    }
  };

  const tabs = Object.keys(skillCategories) as Array<keyof typeof skillCategories>;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Technical Skills & Expertise
            </h3>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => {
              const category = skillCategories[tab];
              const IconComponent = category.icon;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-t-lg font-medium transition-colors duration-200 ${
                    activeTab === tab
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-b-2 border-blue-500'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                  <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="min-h-[300px]">
            {tabs.map((tab) => {
              const category = skillCategories[tab];
              return (
                <div
                  key={tab}
                  className={`${activeTab === tab ? 'block' : 'hidden'} animate-fade-in`}
                >
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    {category.title}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {category.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Continuously learning and expanding expertise in emerging technologies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsModal;