export interface GitHubUser {
    login: string;               // GitHub username
    id: number;                  // User ID
    node_id: string;             // Node ID (used internally by GitHub)
    avatar_url: string;         // URL to the avatar image
    gravatar_id: string;        // Gravatar ID (not used often)
    url: string;                // URL for the GitHub user profile (API endpoint)
    html_url: string;           // URL for the GitHub user profile (website)
    followers_url: string;      // URL to fetch followers
    following_url: string;      // URL to fetch following users
    gists_url: string;          // URL to fetch gists
    starred_url: string;        // URL to fetch starred repositories
    subscriptions_url: string;  // URL to fetch subscriptions
    organizations_url: string;  // URL to fetch organizations
    repos_url: string;          // URL to fetch repositories
    events_url: string;         // URL to fetch events
    received_events_url: string; // URL to fetch received events
    type: string;               // Type of user (e.g., "User")
    user_view_type: string;     // User view type (e.g., "public")
    site_admin: boolean;        // Whether the user is a site admin (GitHub staff)
    name: string | null;        // Name of the user (can be null)
    company: string | null;     // Company the user is associated with (can be null)
    blog: string;               // Blog URL (can be empty string)
    location: string | null;    // User's location (can be null)
    email: string | null;       // Email address (can be null)
    hireable: boolean | null;   // Whether the user is hireable (can be null)
    bio: string | null;         // Bio description (can be null)
    twitter_username: string | null; // Twitter username (can be null)
    public_repos: number;       // Number of public repositories
    public_gists: number;       // Number of public gists
    followers: number;          // Number of followers
    following: number;          // Number of people the user is following
    created_at: string;         // Date the user account was created
    updated_at: string;         // Date the user account was last updated
  }
  