import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Briefcase, Users } from 'lucide-react';
import { ProjectCategory } from '../../types';

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();

  const handleTechnicalProjectsClick = () => {
    navigate('/technical-projects');
  };

  const handleCoreProjectsClick = () => {
    navigate('/core-projects');
  };

  const handleManagementProjectsClick = () => {
    navigate('/management-projects');
  };

  const projectCategories: ProjectCategory[] = [
    {
      title: 'Technical Projects',
      icon: Code,
      color: 'from-blue-600 to-indigo-700',
      description: 'Full-stack applications and software solutions',
      onClick: handleTechnicalProjectsClick
    },
    {
      title: 'Core Projects',
      icon: Briefcase,
      color: 'from-emerald-600 to-teal-700',
      description: 'System design and algorithmic implementations',
      onClick: handleCoreProjectsClick
    },
    {
      title: 'Management Projects',
      icon: Users,
      color: 'from-purple-600 to-violet-700',
      description: 'Leadership and organizational initiatives',
      onClick: handleManagementProjectsClick
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Categories</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Diverse portfolio spanning multiple domains and technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projectCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                onClick={category.onClick}
                className={`bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                  category.onClick ? 'cursor-pointer' : ''
                }`}
              >
                <div className={`h-32 bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <IconComponent className="h-12 w-12 text-white" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;