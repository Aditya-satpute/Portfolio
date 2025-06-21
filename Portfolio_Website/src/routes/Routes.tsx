import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TechnicalProjectsPage from '../pages/TechnicalProjectsPage';
import CoreProjectsPage from '../pages/CoreProjectsPage';
import ManagementProjectsPage from '../pages/ManagementProjectsPage';
import { GitHubStats } from '../types';

interface AppRoutesProps {
  codeforcesHandle: string;
  leetcodeHandle: string;
  githubHandle: string;
  githubStats: GitHubStats;
}

const AppRoutes: React.FC<AppRoutesProps> = ({
  codeforcesHandle,
  leetcodeHandle,
  githubHandle,
  githubStats
}) => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <HomePage
            codeforcesHandle={codeforcesHandle}
            leetcodeHandle={leetcodeHandle}
            githubHandle={githubHandle}
            githubStats={githubStats}
          />
        } 
      />
      <Route 
        path="/technical-projects" 
        element={<TechnicalProjectsPage />} 
      />
      <Route 
        path="/core-projects" 
        element={<CoreProjectsPage />} 
      />
      <Route 
        path="/management-projects" 
        element={<ManagementProjectsPage />} 
      />
    </Routes>
  );
};

export default AppRoutes;