import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProjectCard from '../components/projects/ProjectCard';
import { managementProjects } from '../data/projects';

const ManagementProjectsPage: React.FC = () => {
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
      <div className="bg-gradient-to-r from-purple-600 to-violet-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBackClick}
            className="flex items-center space-x-2 mb-6 text-purple-100 hover:text-white transition-colors duration-200 md:hidden"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Portfolio</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Management Projects</h1>
          <p className="text-xl text-purple-100 max-w-2xl">
            Leadership and organizational initiatives demonstrating project management and team coordination skills
          </p>
        </div>
      </div>

      {/* Projects List */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {managementProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementProjectsPage;