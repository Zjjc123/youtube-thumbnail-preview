import "./App.css";

import { Video } from "./components/video";
import { Header } from "./components/header";
import { Categories } from "./components/categories";

function App() {
  return (
    <div className="App">
      <Header /> 
      <Categories /> 
      <div className="videos">
        <section className="video-section">
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
        </section>
        <section className="video-section">
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
        </section>
      </div>
    </div>
  );
}

export default App;
