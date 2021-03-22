import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [randomNumber, setRandomNumber] = useState("ff5050");

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
    setInterval(() => {
      var letters = "0123456789ABCDEF";
      var color = "";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      setRandomNumber(color);
    }, 2000);
    return () => {
      clearInterval();
    };
  }, []);

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  };
  return (
    <div
      className="c-player"
      style={{
        background: `linear-gradient(to bottom, #${randomNumber} 0%, #000000 100%)`,
        webkitTransition: "background-color 1000ms linear",
        msTransition: "background-color 1000ms linear",
        transition: "background-color 1000ms linear",
      }}
    >
      <audio
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
      ></audio>
      <h3>MUSIC IS MAGIC</h3>

      <PlayerDetails song={props.songs[props.currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <p>
        <strong>Next up:</strong> {props.songs[props.nextSongIndex].title} by{" "}
        {props.songs[props.nextSongIndex].artist}
      </p>
      <h5>
        <strong>
          Happy listening
          <img src="./images/heart-solid.svg" height="10" width="20" />
          <a
            href="https://github.com/ps-lolfan"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Praveen Sinnur
          </a>
        </strong>
      </h5>
    </div>
  );
}

export default Player;
