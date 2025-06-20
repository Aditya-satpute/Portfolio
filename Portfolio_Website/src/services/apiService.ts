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
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
}

export interface CodingProfile {
  platform: string;
  handle: string;
  data: any;
  error?: string;
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

// LeetCode API function
export const fetchLeetCodeStats = async (username: string): Promise<LeetCodeStats | null> => {
  try {
    const query = `
      query getUserProfile($username: String!) {
        allQuestionsCount {
          difficulty
          count
        }
        matchedUser(username: $username) {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
          profile {
            ranking
          }
        }
      }
    `;

    const response = await fetch('/api/leetcode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username }
      })
    });

    const data = await response.json();
    
    if (data.data && data.data.matchedUser) {
      const user = data.data.matchedUser;
      const allQuestions = data.data.allQuestionsCount;
      const acStats = user.submitStats.acSubmissionNum;
      
      const totalQuestions = allQuestions.reduce((sum: number, item: any) => sum + item.count, 0);
      const totalSolved = acStats.reduce((sum: number, item: any) => sum + item.count, 0);
      
      const easySolved = acStats.find((item: any) => item.difficulty === 'Easy')?.count || 0;
      const mediumSolved = acStats.find((item: any) => item.difficulty === 'Medium')?.count || 0;
      const hardSolved = acStats.find((item: any) => item.difficulty === 'Hard')?.count || 0;
      
      return {
        totalSolved,
        totalQuestions,
        easySolved,
        mediumSolved,
        hardSolved,
        acceptanceRate: totalQuestions > 0 ? Math.round((totalSolved / totalQuestions) * 100) : 0,
        ranking: user.profile?.ranking || 0
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching LeetCode data:', error);
    return null;
  }
};

// Combined function to fetch all profile data
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