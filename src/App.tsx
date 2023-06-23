import "./App.css";

import { Video, VideoElement } from "./components/video";
import { Header } from "./components/header";
import { useState } from "react";
import { Categories } from "./components/categories";

import untyped_videos from "./data/data.json";
import { MdEdit, MdSave } from "react-icons/md";

const video_list: VideoElement[] = untyped_videos as VideoElement[];

function App() {
  const [editable, setEditable] = useState<boolean>(false);

  return (
    <div className="App">
      <Header />
      <Categories />
      <div className="videos">
        <section className="video-section">
          {video_list.map((v) => (
            <Video
              thumbnail_cover={v.thumbnail_cover}
              title={v.title}
              views={v.views}
              date={v.date}
              channel_name={v.channel_name}
              channel_icon={v.channel_icon}
              url={v.url}
              duration={v.duration}
              editable={editable}
            />
          ))}
        </section>
      </div>
      <button
        className="fixed-button"
        onClick={() => {
          setEditable(!editable);
        }}
      >
        {editable ? <MdSave /> : <MdEdit />}
      </button>
    </div>
  );
}

export default App;
