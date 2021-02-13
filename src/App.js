import { useState } from "react";
import Player from "./components/Player";
function App() {
  const [songs, setSongs] = useState([
    {
      title: "Forget me",
      artist: "Praveen Sinnur",
      img_src: "./images/img1.jpg",
      src: "./images/img1.jpg",
    },
    {
      title: "Song 2",
      artist: "Praveen Sinnur",
      img_src: "./images/img1.jpg",
      src: "./images/img1.jpg",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="App">
      <Player song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]} />
    </div>
  );
}

export default App;
