/**
 * GitHub API Integration for JuggleTech Dashboard
 * 
 * This file contains functions to fetch and display GitHub data.
 * In a production environment, you would replace the mock data with
 * actual API calls to GitHub's API.
 */

// GitHub username to fetch data for
const GITHUB_USERNAME = 'mzzavaa';

/**
 * Fetch repository data from GitHub API
 * Note: In production, you would use the actual GitHub API
 * Example: https://api.github.com/users/mzzavaa/repos
 */
async function fetchRepositories() {
  // In production, replace this with actual API call
  // const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
  // return await response.json();
  
  // For demo purposes, we're using mock data
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          name: 'juggle-tech-demo',
          description: 'An interactive dashboard for tracking technical skills and learning progress.',
          stargazers_count: 42,
          updated_at: '2025-05-13T10:24:32Z',
          language: 'JavaScript'
        },
        {
          name: 'aws-community-dashboard',
          description: 'A visualization of the global AWS community including Heroes and Community Builders.',
          stargazers_count: 87,
          updated_at: '2025-04-28T15:12:45Z',
          language: 'JavaScript'
        },
        {
          name: 'ml-experiments',
          description: 'Collection of machine learning experiments and models for various use cases.',
          stargazers_count: 63,
          updated_at: '2025-03-15T09:45:18Z',
          language: 'Python'
        }
      ]);
    }, 500);
  });
}

/**
 * Fetch user activity from GitHub API
 * Note: In production, you would use the actual GitHub API
 * Example: https://api.github.com/users/mzzavaa/events
 */
async function fetchUserActivity() {
  // In production, replace this with actual API call
  // const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events`);
  // return await response.json();
  
  // For demo purposes, we're using mock data
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          type: 'PushEvent',
          repo: { name: 'mzzavaa/juggle-tech-demo' },
          created_at: '2025-05-13T14:32:10Z',
          payload: {
            commits: [
              { message: 'Fixed navigation links and added demo banner' }
            ]
          }
        },
        {
          type: 'CreateEvent',
          repo: { name: 'mzzavaa/aws-community-dashboard' },
          created_at: '2025-05-10T09:15:22Z',
          payload: {
            ref_type: 'branch',
            ref: 'feature/ml-filter',
            description: 'Added Machine Learning filter'
          }
        },
        {
          type: 'PullRequestEvent',
          repo: { name: 'mzzavaa/ml-experiments' },
          created_at: '2025-05-08T11:42:35Z',
          payload: {
            action: 'merged',
            pull_request: {
              title: 'Image recognition improvements'
            }
          }
        },
        {
          type: 'IssueCommentEvent',
          repo: { name: 'mzzavaa/juggle-tech-demo' },
          created_at: '2025-05-05T16:28:19Z',
          payload: {
            issue: {
              title: 'URL handling issue'
            },
            comment: {
              body: 'This is related to how Hugo handles relative URLs in subpaths.'
            }
          }
        },
        {
          type: 'PushEvent',
          repo: { name: 'mzzavaa/aws-community-dashboard' },
          created_at: '2025-05-03T08:54:41Z',
          payload: {
            commits: [
              { message: 'Updated community builder data' }
            ]
          }
        }
      ]);
    }, 700);
  });
}

/**
 * Fetch user statistics from GitHub API
 * Note: In production, you would use the actual GitHub API and calculate these values
 */
async function fetchUserStats() {
  // In production, you would calculate these from actual API responses
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        totalCommits: 328,
        currentStreak: 14,
        topLanguage: 'JavaScript'
      });
    }, 600);
  });
}

/**
 * Initialize GitHub data on page load
 */
document.addEventListener('DOMContentLoaded', async function() {
  try {
    // Fetch repositories data
    const repos = await fetchRepositories();
    
    // Update repository cards
    if (repos.length >= 1) {
      document.getElementById('juggletech-stars').textContent = repos[0].stargazers_count;
      document.getElementById('juggletech-updated').textContent = formatDate(repos[0].updated_at);
    }
    
    if (repos.length >= 2) {
      document.getElementById('aws-community-stars').textContent = repos[1].stargazers_count;
      document.getElementById('aws-community-updated').textContent = formatDate(repos[1].updated_at);
    }
    
    if (repos.length >= 3) {
      document.getElementById('ml-projects-stars').textContent = repos[2].stargazers_count;
      document.getElementById('ml-projects-updated').textContent = formatDate(repos[2].updated_at);
    }
    
    // Fetch user activity
    const activities = await fetchUserActivity();
    const activityContainer = document.getElementById('github-activity');
    activityContainer.innerHTML = ''; // Clear loading placeholders
    
    // Display activities
    activities.forEach(activity => {
      const eventElement = document.createElement('div');
      eventElement.className = 'flex items-center py-2 border-b border-gray-200 last:border-0';
      
      let icon = '';
      let message = '';
      
      switch(activity.type) {
        case 'PushEvent':
          icon = '<i class="fas fa-code-commit text-blue-500"></i>';
          message = activity.payload.commits[0].message;
          break;
        case 'CreateEvent':
          icon = '<i class="fas fa-plus-circle text-green-500"></i>';
          message = `Created ${activity.payload.ref_type} ${activity.payload.ref}`;
          break;
        case 'PullRequestEvent':
          icon = '<i class="fas fa-code-branch text-purple-500"></i>';
          message = `${activity.payload.action === 'merged' ? 'Merged' : 'Created'} PR: ${activity.payload.pull_request.title}`;
          break;
        case 'IssueCommentEvent':
          icon = '<i class="fas fa-comment-alt text-yellow-500"></i>';
          message = `Commented on issue: ${activity.payload.issue.title}`;
          break;
        default:
          icon = '<i class="fas fa-code text-gray-500"></i>';
          message = 'Activity in repository';
      }
      
      const repoName = activity.repo.name.split('/')[1];
      
      eventElement.innerHTML = `
        <div class="mr-3">${icon}</div>
        <div class="flex-grow">
          <span class="font-medium">${repoName}</span>: 
          <span class="text-gray-600">${message}</span>
        </div>
        <div class="ml-auto text-xs text-gray-500">${formatDate(activity.created_at)}</div>
      `;
      
      activityContainer.appendChild(eventElement);
    });
    
    // Fetch and display user stats
    const stats = await fetchUserStats();
    document.getElementById('total-commits').textContent = stats.totalCommits;
    document.getElementById('streak-days').textContent = stats.currentStreak;
    document.getElementById('languages').textContent = stats.topLanguage;
    
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
  }
});

/**
 * Format a date string to a more readable format
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}
