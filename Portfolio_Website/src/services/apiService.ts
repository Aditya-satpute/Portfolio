// API service for fetching coding profile data
export interface CodeforcesUser {
  handle: string;
  rating?: number;
  maxRating?: number;
  rank?: string;
  maxRank?: string;
}

export interface CodeforcesRating {
  contestId: number;
  contestName: string;
  handle: string;
  rank: number;
  ratingUpdateTimeSeconds: number;
  oldRating: number;
  newRating: number;
}

export interface LeetCodeStats {
  totalSolved: number;
}

// Codeforces API functions
export const fetchCodeforcesUser = async (handle: string): Promise<CodeforcesUser | null> => {
  try {
    const response = await fetch(`https://codeforces.com/api/user.info?handles=${handle}`);
    const data = await response.json();
    
    if (data.status === 'OK' && data.result.length > 0) {
      return data.result[0];
    }
    return null;
  } catch (error) {
    console.error('Error fetching Codeforces user data:', error);
    return null;
  }
};

export const fetchCodeforcesRating = async (handle: string): Promise<CodeforcesRating[]> => {
  try {
    const response = await fetch(`https://codeforces.com/api/user.rating?handle=${handle}`);
    const data = await response.json();
    
    if (data.status === 'OK') {
      return data.result;
    }
    return [];
  } catch (error) {
    console.error('Error fetching Codeforces rating data:', error);
    return [];
  }
};

// LeetCode API function using a public API
export const fetchLeetCodeStats = async (username: string): Promise<LeetCodeStats | null> => {
  try {
    // Using a public LeetCode stats API
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch LeetCode data');
    }
    
    const data = await response.json();
    
    if (data.status === 'success' && data.totalSolved !== undefined) {
      return {
        totalSolved: data.totalSolved
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching LeetCode data:', error);
    return null;
  }
};

// Combined function to fetch profile data
export const fetchAllProfiles = async (codeforcesHandle: string, leetcodeHandle: string) => {
  const [codeforcesUser, codeforcesRating, leetcodeStats] = await Promise.all([
    fetchCodeforcesUser(codeforcesHandle),
    fetchCodeforcesRating(codeforcesHandle),
    fetchLeetCodeStats(leetcodeHandle)
  ]);

  return {
    codeforces: {
      user: codeforcesUser,
      rating: codeforcesRating
    },
    leetcode: leetcodeStats
  };
};