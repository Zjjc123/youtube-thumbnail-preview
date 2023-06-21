import "./App.css";

import { Video, VideoElement } from "./components/video";
import { Header } from "./components/header";
import { useState } from "react";
import { Categories } from "./components/categories";

import untyped_videos from "./data/recs.json";
import { MdEdit, MdSave } from "react-icons/md";

const video_list: VideoElement[] = untyped_videos.videos;

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
              thumbnail={v.thumbnail}
              title={v.title}
              views={v.views}
              date={v.date}
              channel={v.channel}
              channel_icon={v.channel_icon}
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
        {
          editable ? <MdSave /> : <MdEdit />
        }
      </button>
    </div>
  );
}

export default App;
