import "../styles/video.css";
import React, { useState, useRef } from "react";

export interface VideoElement {
  thumbnail: string;
  title: string;
  views: string;
  date: string;
  channel: string;
  channel_icon: string;
}

export const Video = (props: VideoElement) => {
  const [file, setFile] = useState<string>("");
  const fileHandler = useRef<HTMLInputElement>(null);

  const openFileHandler = () => {
    fileHandler.current?.click();
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(file);
    if (e.target.files) setFile(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files);
  };

  return (
    <article className="video-container">
      <input
        className="hidden"
        type="file"
        onChange={(e) => handleFile(e)}
        ref={fileHandler}
      />
      <a
        href="#"
        className="thumbnail"
        data-duration="12:24"
        onClick={openFileHandler}
      >
        <img
          className="thumbnail-image"
          src={file !== "" ? file : props.thumbnail}
        ></img>
      </a>
      <div className="video-bottom-section">
        <a href="#">
          <img className="channel-icon" src={props.channel_icon}></img>
        </a>
        <div className="video-details">
          <a href="#" className="video-title">
            {props.title}
          </a>
          <a href="#" className="video-channel-name">
            {props.channel}
          </a>
          <div className="video-metadata">
            <span>{props.views} views</span> • <span>{props.date}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
