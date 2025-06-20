import React from 'react';
import { porList } from '../../data/projects';

const PORSection: React.FC = () => {
  return (
    <section id="por" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Positions of Responsibility</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Leadership roles and organizational contributions
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 md:p-12">
          <ul className="space-y-4">
            {porList.map((position, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 text-lg"
              >
                <span className="text-gray-400 dark:text-gray-500 mt-1">•</span>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {position}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PORSection;