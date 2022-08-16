import "./App.css";

import { Video, VideoElement } from "./components/video";
import { Header } from "./components/header";
import { Categories } from "./components/categories";

import untyped_videos from "./data/recs.json";

const video_list: VideoElement[] = untyped_videos.videos;

function App() {
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
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
