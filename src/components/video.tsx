import "../styles/video.css";
import React, { useState, useRef } from "react";

export const Video = () => {
  const [file, setFile] = useState<string>("");
  const fileHandler = useRef<HTMLInputElement>(null)

  const openFileHandler = () => {
    fileHandler.current?.click()
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(file)
    if (e.target.files) setFile(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files)
  };

  return (
    <article className="video-container">
      <input className="hidden" type="file" onChange= {e => handleFile(e)} ref={fileHandler}/>
      <a
        href="#"
        className="thumbnail"
        data-duration="12:24"
        onClick={openFileHandler}
      >
        <img
          className="thumbnail-image"
          src={file !== ""? file : "http://unsplash.it/250/150?gravity-center"}
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
