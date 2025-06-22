import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import SkillsModal from '../modals/SkillsModal';

const AboutSection: React.FC = () => {
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);

  const topSkills = [
    'C++','React', 'Django', 'Python','JavaScript'
  ];

  return (
    <>
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Professional background and technical expertise
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Professional Summary</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I’m a passionate coder with a strong grip on Data Structures and Algorithms, enjoying the challenge of solving complex problems efficiently. DSA is my favorite area in tech, and I regularly sharpen my skills through coding platforms and contests.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                 Alongside coding, I’m deeply interested in design, development, and team management. I’ve led multiple projects and events, blending creativity with coordination to deliver impactful digital products and organized team efforts.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Core Technical Skills</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {topSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-md text-sm font-medium text-center"
                    >
                      {skill}
                    </div>
                  ))}
                  <button
                    onClick={() => setIsSkillsModalOpen(true)}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-2 rounded-md text-sm font-medium text-center hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center space-x-1"
                  >
                    <Plus className="h-4 w-4" />
                    <span>View All Skills</span>
                  </button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Click "View All Skills" to see complete technical expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SkillsModal 
        isOpen={isSkillsModalOpen} 
        onClose={() => setIsSkillsModalOpen(false)} 
      />
    </>
  );
};

export default AboutSection;