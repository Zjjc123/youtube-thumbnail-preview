import "../styles/video.css";
import React, { useState, useRef } from "react";

export interface VideoElement {
  title: string;
  url: string;
  thumbnail_cover: string;
  channel_name: string;
  channel_icon: string;
  views: string;
  date: string;
  duration: string;

  editable?: boolean;
}

export const Video = (props: VideoElement) => {
  const [file, setFile] = useState<string>("");
  const fileHandler = useRef<HTMLInputElement>(null);

  const openFileHandler = () => {
    fileHandler.current?.click();
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <article className="video-container">
      {props.editable ? (
        <input
          className="hidden"
          type="file"
          onChange={(e) => handleFile(e)}
          ref={fileHandler}
        />
      ) : null}

      <div
        className={"thumbnail " + (props.editable ? "editable" : "")}
        data-duration="12:24"
        onClick={openFileHandler}
      >
        <img
          className="thumbnail-image"
          src={file !== "" ? file : props.thumbnail_cover}
          alt="thumbnail"
        ></img>
      </div>
      <div className="video-bottom-section">
        <div className={props.editable ? "editable" : ""}>
          <img
            className="channel-icon"
            src={props.channel_icon}
            alt="channel icon"
          ></img>
        </div>
        <div className="video-details">
          <div
            className={"video-title " + (props.editable ? "editable" : "")}
            contentEditable={props.editable}
          >
            {props.title}
          </div>
          <div
            className={
              "video-channel-name " + (props.editable ? "editable" : "")
            }
            contentEditable={props.editable}
          >
            {props.channel_name}
          </div>
          <div className="video-metadata">
            <span
              className={props.editable ? "editable" : ""}
              contentEditable={props.editable}
            >
              {props.views}
            </span>{" "}
            •{" "}
            <span
              className={props.editable ? "editable" : ""}
              contentEditable={props.editable}
            >
              {props.date}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
