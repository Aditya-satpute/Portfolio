import React from 'react';
import { Github, Linkedin } from 'lucide-react';

interface FooterProps {
  githubHandle: string;
}

const Footer: React.FC<FooterProps> = ({ githubHandle }) => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Aditya Satpute</h3>
          <p className="text-gray-400 mb-6">
            Code. Debug. Optimize. Repeat with curiosity and purpose :
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href={`https://github.com/Aditya-satpute`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-satpute-b46831291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2024 Aditya Satpute. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;