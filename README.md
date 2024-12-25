# GitHub Profile Explorer

![GitHub Profile Screenshot](./src/assets/images/GitHubProfileExplorer.png)

## Description

GitHub Profile Explorer is a simple web application built using **React**, **TypeScript**, and **Vite** that allows users to search for GitHub profiles using the [GitHub API](https://api.github.com/users/). The app displays the profile details, including the user's avatar, name, bio, location, and more.

## Features

- **Search for GitHub users**: Users can search for any GitHub username to fetch their profile details.
- **User Profile Display**: Displays the user's avatar, name, bio, location, followers, following, and public repositories.
- **Dark Mode**: Toggle between dark and light mode for the UI.
- **Error Handling**: Displays an error message if the user is not found.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that provides static typing.
- **Vite**: A fast development server and build tool.
- **GitHub API**: Used to fetch public user data from GitHub.

## How it Works

1. **User Search**: Users can enter a GitHub username in the search bar.
2. **Fetch Profile**: The app makes an API call to `https://api.github.com/users/{username}` to fetch the user data.
3. **Display Data**: If the user is found, their profile data (name, avatar, bio, etc.) will be displayed. If not, an error message will show.
4. **Dark Mode Toggle**: A dark mode option is available for a better user experience.

## Installation

To run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/github-profile-explorer.git
   ```
