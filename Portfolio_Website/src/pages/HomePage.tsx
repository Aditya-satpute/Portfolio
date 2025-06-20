import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ProfilesSection from '../components/sections/ProfilesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import PORSection from '../components/sections/PORSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/common/Footer';
import { GitHubStats } from '../types';

interface HomePageProps {
  codeforcesHandle: string;
  leetcodeHandle: string;
  githubHandle: string;
  githubStats: GitHubStats;
  onTechnicalProjectsClick: () => void;
}

const HomePage: React.FC<HomePageProps> = ({
  codeforcesHandle,
  leetcodeHandle,
  githubHandle,
  githubStats,
  onTechnicalProjectsClick
}) => {
  return (
    <>
      <HeroSection githubHandle={githubHandle} />
      <ProfilesSection
        codeforcesHandle={codeforcesHandle}
        leetcodeHandle={leetcodeHandle}
        githubHandle={githubHandle}
        githubStats={githubStats}
      />
      <ProjectsSection onTechnicalProjectsClick={onTechnicalProjectsClick} />
      <PORSection />
      <AboutSection />
      <ContactSection />
      <Footer githubHandle={githubHandle} />
    </>
  );
};

export default HomePage;