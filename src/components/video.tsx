import "../styles/video.css"

export const Video = () => {
  return (
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
  );
};
