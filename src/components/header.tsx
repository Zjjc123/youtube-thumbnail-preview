import "../styles/header.css"

import { MdNotificationsNone, MdSearch, MdUpload } from "react-icons/md";
import { YouTubeIcon } from "../icons/youtube";

export const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <YouTubeIcon />
      </a>
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
        <a href="#">
          <MdUpload size={24} color="black"/>
        </a>
        <a href="#">
          <MdNotificationsNone size={24} color="black"/>
        </a>
        <a href="#">
          <img
            className="menu-channel-icon"
            src="http://unsplash.it/36/36?gravity=center"
            alt="Your Channel"
          />
        </a>
      </div>
    </header>
  );
};
