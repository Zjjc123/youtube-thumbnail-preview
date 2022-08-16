import "../styles/header.css";

import { MdNotificationsNone, MdSearch, MdUpload } from "react-icons/md";
import { YouTubeIcon } from "../icons/youtube";

export const Header = () => {
  return (
    <header className="header">
      <div>
        <YouTubeIcon />
      </div>
      <form className="search-bar">
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="search-btn" type="submit">
          <MdSearch />
        </button>
      </form>
      <div className="menu-icons">
        <div>
          <MdUpload size={24} color="black" />
        </div>
        <div>
          <MdNotificationsNone size={24} color="black" />
        </div>
        <div>
          <img
            className="menu-channel-icon"
            src="http://unsplash.it/36/36?gravity=center"
            alt="Your Channel"
          />
        </div>
      </div>
    </header>
  );
};
