import React from 'react';
import { TechnicalProject } from '../../types';

interface ProjectCardProps {
  project: TechnicalProject;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Project Image */}
        <div className="relative h-64 lg:h-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        </div>

        {/* Project Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Tabs */}
          <div className="flex flex-wrap gap-3">
            {project.tabs.map((tab, tabIndex) => {
              const IconComponent = tab.icon;
              return (
                <a
                  key={tabIndex}
                  href={tab.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 font-medium"
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{tab.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;