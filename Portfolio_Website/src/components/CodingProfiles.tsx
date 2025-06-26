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
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left side loading */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center h-48">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        </div>
        {/* Right side loading */}
        <div className="grid gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center h-20">
              <Loader2 className="h-6 w-6 animate-spin text-orange-600" />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center h-20">
              <Loader2 className="h-6 w-6 animate-spin text-gray-600" />
            </div>
          </div>
        </div>
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

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Left Side - Codeforces (Larger Card) */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-700"></div>
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700">
                <Code className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Codeforces</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">@{codeforcesHandle}</p>
              </div>
            </div>
            <a
              href={`https://codeforces.com/profile/${codeforcesHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
            >
              <ExternalLink className="h-6 w-6" />
            </a>
          </div>
          
          <div className="space-y-6">
            {profileData?.codeforces.user ? (
              <>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 dark:text-gray-400 text-lg">Current Rating</span>
                  <span className="font-semibold text-blue-600 text-xl">
                    {profileData.codeforces.user.rating || 'Unrated'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 dark:text-gray-400 text-lg">Max Rating</span>
                  <span className="font-semibold text-xl">
                    {profileData.codeforces.user.maxRating || 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 dark:text-gray-400 text-lg">Rank</span>
                  <span className="font-semibold text-xl">
                    {profileData.codeforces.user.rank || 'Unranked'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 dark:text-gray-400 text-lg">Contests</span>
                  <span className="font-semibold text-xl">{profileData.codeforces.rating?.length || 0}</span>
                </div>
              </>
            ) : (
              <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                Unable to load Codeforces data
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Side - LeetCode and GitHub (Stacked) */}
      <div className="grid gap-6">
        {/* LeetCode Profile */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-orange-600 to-red-600"></div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-gradient-to-r from-orange-600 to-red-600">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">LeetCode</h3>
                  <p className="text-gray-600 dark:text-gray-400">@{leetcodeHandle}</p>
                </div>
              </div>
              <a
                href={`https://leetcode.com/${leetcodeHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Problems Solved</span>
                <span className="font-semibold text-green-600 text-lg">
                  {profileData?.leetcode?.totalSolved || 'Loading...'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Profile */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-gray-700 to-gray-900"></div>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">GitHub</h3>
                  <p className="text-gray-600 dark:text-gray-400">@{githubHandle}</p>
                </div>
              </div>
              <a
                href={`https://github.com/${githubHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;