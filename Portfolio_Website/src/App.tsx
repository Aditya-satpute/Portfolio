import React, { useState } from 'react';
import Navigation from './components/common/Navigation';
import HomePage from './pages/HomePage';
import TechnicalProjectsPage from './pages/TechnicalProjectsPage';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useDarkMode } from './hooks/useDarkMode';
import { scrollToSection } from './utils/navigation';
import { GitHubStats } from './types';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  
  const sections = ['home', 'profiles', 'projects', 'por', 'about', 'contact'];
  const activeSection = useScrollSpy(sections);

  // Configuration - easily editable
  const CODEFORCES_HANDLE = 'adityasatpute402';
  const LEETCODE_HANDLE = 'Aditya_Satpute';
  const GITHUB_HANDLE = 'your_handle';

  const githubStats: GitHubStats = {
    repos: '42',
    followers: '120',
    stars: '250'
  };

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleTechnicalProjectsClick = () => {
    setCurrentPage('technical-projects');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          activeSection={activeSection}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          scrollToSection={handleScrollToSection}
        />

        {currentPage === 'home' ? (
          <HomePage
            codeforcesHandle={CODEFORCES_HANDLE}
            leetcodeHandle={LEETCODE_HANDLE}
            githubHandle={GITHUB_HANDLE}
            githubStats={githubStats}
            onTechnicalProjectsClick={handleTechnicalProjectsClick}
          />
        ) : (
          <TechnicalProjectsPage onBackClick={handleBackToHome} />
        )}
      </div>
    </div>
  );
}

export default App;