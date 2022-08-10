import "./App.css";
import { YouTubeIcon } from "./icons/youtube";
import {
  MdSearch,
  MdUpload,
  MdApps,
  MdNotificationsNone,
} from "react-icons/md";

function App() {
  return (
    <div className="App">
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
            <MdUpload />
          </a>
          <a href="#">
            <MdApps />
          </a>
          <a href="#">
            <MdNotificationsNone />
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
      <div className="categories">
        <section className="category-section">
          <button className="category active">All</button>
          <button className="category">Category 1</button>
          <button className="category">Category 2</button>
          <button className="category">Category 3</button>
          <button className="category">Category 4</button>
          <button className="category">Category 5</button>
          <button className="category">Category 6</button>
          <button className="category">Category 7</button>
          <button className="category">Category 8</button>
          <button className="category">Category 9</button>
        </section>
      </div>
      <div className="videos">
        <section className="video-section">
          <article className="video-container">
            <a href="#" className="thumbnail" data-duration="12:24">
              <img
                className="thumbnail-image"
                src="http://unsplash.it/250/150?gravity=center"
              ></img>
            </a>
            <div className="video-bottom-section">
              <a href="#">
                <img
                  className="channel-icon"
                  src="http://unsplash.it/36/36?gravity-center"
                ></img>
              </a>
              <div className="video-details">
                <a href="#" className="video-title">
                  Video Title
                </a>
                <a href="#" className="video-channel-name">
                  Channel name
                </a>
                <div className="video-metadata">
                  <span>14k views</span> • <span>2 days ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className="video-container">
            <a href="#" className="thumbnail" data-duration="12:24">
              <img
                className="thumbnail-image"
                src="http://unsplash.it/250/150?gravity=center"
              ></img>
            </a>
            <div className="video-bottom-section">
              <a href="#">
                <img
                  className="channel-icon"
                  src="http://unsplash.it/36/36?gravity-center"
                ></img>
              </a>
              <div className="video-details">
                <a href="#" className="video-title">
                  Video Title
                </a>
                <a href="#" className="video-channel-name">
                  Channel name
                </a>
                <div className="video-metadata">
                  <span>14k views</span> • <span>2 days ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className="video-container">
            <a href="#" className="thumbnail" data-duration="12:24">
              <img
                className="thumbnail-image"
                src="http://unsplash.it/250/150?gravity=center"
              ></img>
            </a>
            <div className="video-bottom-section">
              <a href="#">
                <img
                  className="channel-icon"
                  src="http://unsplash.it/36/36?gravity-center"
                ></img>
              </a>
              <div className="video-details">
                <a href="#" className="video-title">
                  Video Title
                </a>
                <a href="#" className="video-channel-name">
                  Channel name
                </a>
                <div className="video-metadata">
                  <span>14k views</span> • <span>2 days ago</span>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="video-section">
          <h2 className="video-section-title">Trending</h2>
          <article className="video-container">
            <a href="#" className="thumbnail" data-duration="12:24">
              <img
                className="thumbnail-image"
                src="http://unsplash.it/250/150?gravity=center"
              ></img>
            </a>
            <div className="video-bottom-section">
              <a href="#">
                <img
                  className="channel-icon"
                  src="http://unsplash.it/36/36?gravity-center"
                ></img>
              </a>
              <div className="video-details">
                <a href="#" className="video-title">
                  Video Title
                </a>
                <a href="#" className="video-channel-name">
                  Channel name
                </a>
                <div className="video-metadata">
                  <span>14k views</span> • <span>2 days ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className="video-container">
            <a href="#" className="thumbnail" data-duration="12:24">
              <img
                className="thumbnail-image"
                src="http://unsplash.it/250/150?gravity=center"
              ></img>
            </a>
            <div className="video-bottom-section">
              <a href="#">
                <img
                  className="channel-icon"
                  src="http://unsplash.it/36/36?gravity-center"
                ></img>
              </a>
              <div className="video-details">
                <a href="#" className="video-title">
                  Video Title
                </a>
                <a href="#" className="video-channel-name">
                  Channel name
                </a>
                <div className="video-metadata">
                  <span>14k views</span> • <span>2 days ago</span>
                </div>
              </div>
            </div>
          </article>
          <article className="video-container">
            <a href="#" className="thumbnail" data-duration="12:24">
              <img
                className="thumbnail-image"
                src="http://unsplash.it/250/150?gravity=center"
              ></img>
            </a>
            <div className="video-bottom-section">
              <a href="#">
                <img
                  className="channel-icon"
                  src="http://unsplash.it/36/36?gravity-center"
                ></img>
              </a>
              <div className="video-details">
                <a href="#" className="video-title">
                  Video Title
                </a>
                <a href="#" className="video-channel-name">
                  Channel name
                </a>
                <div className="video-metadata">
                  <span>14k views</span> • <span>2 days ago</span>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default App;
