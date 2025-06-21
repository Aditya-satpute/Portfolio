import React from 'react';
import { TechnicalProject, CoreProject, ManagementProject } from '../../types';

interface ProjectCardProps {
  project: TechnicalProject | CoreProject | ManagementProject;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isManagementProject = 'scope' in project;
  const isCoreProject = 'technologies' in project && !('scope' in project);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="p-8 lg:p-12">
        <div className="mb-6">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
            {project.description}
          </p>
        </div>

        {/* Technologies or Scope */}
        <div className="mb-8">
          {isManagementProject ? (
            <>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                Project Scope
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {(project as ManagementProject).scope.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h5 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                  Impact & Results
                </h5>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {(project as ManagementProject).impact}
                </p>
              </div>
            </>
          ) : (
            <>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {(project as TechnicalProject | CoreProject).technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 text-sm font-medium rounded-full ${
                      isCoreProject
                        ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200'
                        : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </>
          )}
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
  );
};

export default ProjectCard;