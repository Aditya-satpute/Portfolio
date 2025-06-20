import React from 'react';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

interface HeroSectionProps {
  githubHandle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ githubHandle }) => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Aditya Satpute
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            IITP Undergrad | Full Stack Developer & DSA Enthusiast skilled in system design and performance-oriented coding.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <a
              href="https://drive.google.com/file/d/1GrsfpI9-wsP46uXj9tWckh4Y4V5iRQ4-/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-medium"
            >
              
              <span>Resume</span>
              <ArrowUpRight className="h-5 w-5" />
            </a>
            
            <div className="flex space-x-4">
              <a
                href={`https://github.com/Aditya-satpute`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-satpute-b46831291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;