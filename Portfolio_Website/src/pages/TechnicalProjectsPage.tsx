import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProjectCard from '../components/projects/ProjectCard';
import { technicalProjects } from '../data/projects';

const TechnicalProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBackClick}
            className="flex items-center space-x-2 mb-6 text-blue-100 hover:text-white transition-colors duration-200 md:hidden"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Portfolio</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Projects</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Full-stack applications and software solutions showcasing modern development practices
          </p>
        </div>
      </div>

      {/* Projects List */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {technicalProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalProjectsPage;