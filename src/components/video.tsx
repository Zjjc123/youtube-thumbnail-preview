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
      <div
        className="thumbnail"
        data-duration="12:24"
        onClick={openFileHandler}
      >
        <img
          className="thumbnail-image"
          src={file !== "" ? file : props.thumbnail}
          alt="thumbnail"
        ></img>
      </div>
      <div className="video-bottom-section">
        <div>
          <img className="channel-icon" src={props.channel_icon} alt="channel icon"></img>
        </div>
        <div className="video-details">
          <div className="video-title editable" contentEditable>
            {props.title}
          </div>
          <div className="video-channel-name editable" contentEditable>
            {props.channel}
          </div>
          <div className="video-metadata">
            <span className="editable" contentEditable>{props.views}</span> <span>views</span> • <span  className="editable" contentEditable>{props.date}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
