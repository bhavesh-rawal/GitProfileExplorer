import { useState, useEffect } from "react";
import "./App.css"; // Assuming you have your styles here

// Importing images for icons
import sunIcon from "./assets/images/sun-icon.svg";
import moonIcon from "./assets/images/moon-icon.svg";
import locationIcon from "./assets/images/location-icon.svg";
import websiteIcon from "./assets/images/website-icon.svg";
import twitterIcon from "./assets/images/twitter-icon.svg";
import companyIcon from "./assets/images/company-icon.svg";
import { GitHubUser } from "./App.props";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ProfileSearch = () => {
  // State variables
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark-mode") === "true"
  );
  const [inputValue, setInputValue] = useState("bhavesh-rawal");
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [error, setError] = useState<string | null>(null);

  const url = "https://api.github.com/users/";

  // Effect to handle initial dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark"); // Add dark class to body
      localStorage.setItem("dark-mode", "true");
    } else {
      document.body.classList.remove("dark"); // Remove dark class from body
      localStorage.setItem("dark-mode", "false");
    }
  }, [darkMode]);

  // Functions for handling search and dark mode toggle
  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      getUserData(url + inputValue);
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      getUserData(url + inputValue);
    }
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const getUserData = (gitUrl: string) => {
    fetch(gitUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Not Found") {
          setError("User not found.");
          setUserData(null);
        } else {
          setUserData(data);
          setError(null);
        }
      })
      .catch((err) => {
        setError(`Error fetching ${err}`);
        setUserData(null);
      });
  };

  const checkNull = (param1: string | null) => {
    return param1 === "" || param1 === null ? "Not Available" : param1;
  };

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <header className="header">
        <h1 className="title">Github Profile Explorer</h1>
        <div id="btn-mode" onClick={handleDarkModeToggle}>
          <p id="mode-text">{darkMode ? "LIGHT" : "DARK"}</p>
          <div className="icon-container">
            <img
              id="mode-icon"
              src={darkMode ? sunIcon : moonIcon}
              alt="mode icon"
            />
          </div>
        </div>
      </header>

      <main>
        <div id="app">
          <div className="searchbar-container active">
            <input
              type="search"
              id="input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Enter a GitHub username..."
              required
            />
            <div className="error">
              <p id="no-results">{error ? error : null}</p>
            </div>
            <button className="btn-search" id="submit" onClick={handleSearch}>
              Search
            </button>
          </div>

          <div className="profile-container">
            {userData && (
              <div className="profile-content">
                <div className="profile-header">
                  <img id="avatar" src={userData.avatar_url} alt="Avatar" />
                  <div className="profile-info-wrapper">
                    <div className="profile-name">
                      <h2 id="name">{userData.name || userData.login}</h2>
                      <a
                        href={userData.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="user"
                      >
                        @{userData.login}
                      </a>
                    </div>
                    <p id="date">
                      Joined {new Date(userData.created_at).getDate()}{" "}
                      {months[new Date(userData.created_at).getMonth()]}{" "}
                      {new Date(userData.created_at).getFullYear()}
                    </p>
                  </div>
                </div>
                <p id="bio">{userData.bio || "This profile has no bio"}</p>

                <div className="profile-stats-wrapper">
                  <div className="profile-stat">
                    <p className="stat-title">Repositories</p>
                    <p id="repos" className="stat-value">
                      {userData.public_repos}
                    </p>
                  </div>
                  <div className="profile-stat">
                    <p className="stat-title">Followers</p>
                    <p id="followers" className="stat-value">
                      {userData.followers}
                    </p>
                  </div>
                  <div className="profile-stat">
                    <p className="stat-title">Following</p>
                    <p id="following" className="stat-value">
                      {userData.following}
                    </p>
                  </div>
                </div>

                <div className="profile-bottom-wrapper">
                  <div className="profile-info">
                    <div className="bottom-icons">
                      <img src={locationIcon} alt="Location Icon" />
                    </div>
                    <p id="location">{checkNull(userData.location)}</p>
                  </div>
                  <div className="profile-info">
                    <div className="bottom-icons">
                      <img src={websiteIcon} alt="Website Icon" />
                    </div>
                    <a href={userData.blog || "#"} id="page">
                      {checkNull(userData.blog)}
                    </a>
                  </div>
                  <div className="profile-info">
                    <div className="bottom-icons">
                      <img src={twitterIcon} alt="Twitter Icon" />
                    </div>
                    <a
                      href={
                        userData.twitter_username
                          ? `https://twitter.com/${userData.twitter_username}`
                          : "#"
                      }
                      id="twitter"
                    >
                      {checkNull(userData.twitter_username)}
                    </a>
                  </div>
                  <div className="profile-info">
                    <div className="bottom-icons">
                      <img src={companyIcon} alt="Company Icon" />
                    </div>
                    <p id="company">{checkNull(userData.company)}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileSearch;
