import { useState, useEffect } from "react";
import Player from "./components/Player";
function App() {
  const [songs] = useState([
    {
      title: "Bad Guy",
      artist: "Billie Eilish",
      img_src: "./images/billi.jpg",
      src: "./music/badguy.mp3",
    },
    {
      title: "All Apologies",
      artist: "Kurt Cobian",
      img_src: "./images/kurt.jpg",
      src: "./music/allapp.mp3",
    },
    {
      title: "Bad Guy",
      artist: "Billie Eilish",
      img_src: "./images/billi.jpg",
      src: "./music/badguy.mp3",
    },
    {
      title: "All Apologies",
      artist: "Kurt Cobian",
      img_src: "./images/kurt.jpg",
      src: "./music/allapp.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
