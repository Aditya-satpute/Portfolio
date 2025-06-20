import React from 'react';

const AboutSection: React.FC = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js',
    'Python', 'C++', 'MongoDB', 'PostgreSQL',
    'AWS', 'Docker', 'Git', 'System Design'
  ];

  return (
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
                Experienced software developer with a strong foundation in full-stack development 
                and system design. Passionate about creating efficient, scalable solutions that 
                solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Committed to continuous learning and staying current with emerging technologies. 
                Strong background in competitive programming with proven problem-solving abilities 
                and algorithmic thinking.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-md text-sm font-medium text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;