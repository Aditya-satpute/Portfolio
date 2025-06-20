import React, { useState, useEffect } from 'react';
import { Code, Trophy, Github, ExternalLink, Loader2, AlertCircle } from 'lucide-react';
import { fetchAllProfiles, CodeforcesUser, CodeforcesRating, LeetCodeStats } from '../services/apiService';

interface CodingProfilesProps {
  codeforcesHandle: string;
  leetcodeHandle: string;
  githubHandle: string;
  githubStats: {
    repos: string;
    followers: string;
    stars: string;
  };
}

const CodingProfiles: React.FC<CodingProfilesProps> = ({
  codeforcesHandle,
  leetcodeHandle,
  githubHandle,
  githubStats
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<{
    codeforces: {
      user: CodeforcesUser | null;
      rating: CodeforcesRating[];
    };
    leetcode: LeetCodeStats | null;
  } | null>(null);

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchAllProfiles(codeforcesHandle, leetcodeHandle);
        setProfileData(data);
      } catch (err) {
        setError('Failed to load profile data. Please try again later.');
        console.error('Error loading profile data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProfileData();
  }, [codeforcesHandle, leetcodeHandle]);

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center h-32">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
        <div className="flex items-center space-x-3">
          <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
          <p className="text-red-800 dark:text-red-200">{error}</p>
        </div>
      </div>
    );
  }

  const codingProfiles = [
    {
      platform: 'Codeforces',
      handle: codeforcesHandle,
      icon: Code,
      color: 'from-blue-600 to-blue-700',
      link: `https://codeforces.com/profile/${codeforcesHandle}`,
      data: profileData?.codeforces
    },
    {
      platform: 'LeetCode',
      handle: leetcodeHandle,
      icon: Trophy,
      color: 'from-orange-600 to-red-600',
      link: `https://leetcode.com/${leetcodeHandle}`,
      data: profileData?.leetcode
    },
    {
      platform: 'GitHub',
      handle: githubHandle,
      icon: Github,
      color: 'from-gray-700 to-gray-900',
      link: `https://github.com/${githubHandle}`,
      data: githubStats
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {codingProfiles.map((profile, index) => {
        const IconComponent = profile.icon;
        return (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className={`h-1 bg-gradient-to-r ${profile.color}`}></div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${profile.color}`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{profile.platform}</h3>
                    <p className="text-gray-600 dark:text-gray-400">@{profile.handle}</p>
                  </div>
                </div>
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              
              <div className="space-y-4">
                {profile.platform === 'Codeforces' && profile.data && (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Current Rating</span>
                      <span className="font-semibold text-blue-600">
                        {profile.data.user?.rating || 'Unrated'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Max Rating</span>
                      <span className="font-semibold">
                        {profile.data.user?.maxRating || 'N/A'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Rank</span>
                      <span className="font-semibold">
                        {profile.data.user?.rank || 'Unranked'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Contests</span>
                      <span className="font-semibold">{profile.data.rating?.length || 0}</span>
                    </div>
                  </>
                )}
                {profile.platform === 'LeetCode' && profile.data && (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Problems Solved</span>
                      <span className="font-semibold text-green-600">
                        {profile.data.totalSolved}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Easy / Medium / Hard</span>
                      <span className="font-semibold text-sm">
                        {profile.data.easySolved} / {profile.data.mediumSolved} / {profile.data.hardSolved}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Acceptance Rate</span>
                      <span className="font-semibold">{profile.data.acceptanceRate}%</span>
                    </div>
                    {profile.data.ranking > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Ranking</span>
                        <span className="font-semibold">{profile.data.ranking.toLocaleString()}</span>
                      </div>
                    )}
                  </>
                )}
                {profile.platform === 'GitHub' && (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Repositories</span>
                      <span className="font-semibold">{profile.data.repos}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Followers</span>
                      <span className="font-semibold">{profile.data.followers}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Total Stars</span>
                      <span className="font-semibold text-yellow-600">{profile.data.stars}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CodingProfiles;