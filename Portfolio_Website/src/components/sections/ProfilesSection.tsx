import React from 'react';
import CodingProfiles from '../CodingProfiles';
import { GitHubStats } from '../../types';

interface ProfilesSectionProps {
  codeforcesHandle: string;
  leetcodeHandle: string;
  githubHandle: string;
  githubStats: GitHubStats;
}

const ProfilesSection: React.FC<ProfilesSectionProps> = ({
  codeforcesHandle,
  leetcodeHandle,
  githubHandle,
  githubStats
}) => {
  return (
    <section id="profiles" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Coding Profiles</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Live performance metrics across competitive programming platforms
          </p>
        </div>
        
        <CodingProfiles
          codeforcesHandle={codeforcesHandle}
          leetcodeHandle={leetcodeHandle}
          githubHandle={githubHandle}
          githubStats={githubStats}
        />
      </div>
    </section>
  );
};

export default ProfilesSection;