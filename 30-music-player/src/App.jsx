import React, { useEffect, useRef, useState } from "react";

const tracks = [
  {
    title: "Track 1",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Track 2",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Track 3",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    image: "https://via.placeholder.com/150",
  },
];

const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusicTrack, SetCurrentMusicTrack] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setTrackProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  function handlePauseAndPlay() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  function handleSkipTrack(getDirection) {
    if (getDirection === "forward") {
      SetCurrentMusicTrack((prevTrack) => (prevTrack + 1) % tracks.length);
    } else if (getDirection === "backward") {
      SetCurrentMusicTrack(currentMusicTrack === 0 ? tracks.length - 1 : currentMusicTrack - 1)
    };
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-3 items-center mt-10">
      <h1 className="text-3xl font-bold">Music Player</h1>
      <h2 className="text-2xl font-bold">{tracks[currentMusicTrack].title}</h2>
      <img
        src={tracks[currentMusicTrack].image}
        alt={tracks[currentMusicTrack].title}
      />
      <audio ref={audioRef} src={tracks[currentMusicTrack].source} />
      <div className="w-full h-3 bg-slate-700 rounded-md overflow-hidden">
        <div
          className="h-full transition-all duration-300 ease-in-out rounded-md"
          style={{
            width: `${trackProgress}%`,
            backgroundColor: isPlaying ? "#3498db" : "#a43636"
          }}
        ></div>
      </div>
      <div className="flex gap-3 justify-center mt-4">
        <button
          className="px-4 py-2 border-2 border-gray-500 
          rounded-md shadow-md text-xl"
          onClick={() => handleSkipTrack("backward")}
        >
          Backward
        </button>
        <button
          className="px-4 py-2 border-2 border-gray-500 rounded-md shadow-md text-xl"
          onClick={handlePauseAndPlay}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          className="px-4 py-2 border-2 border-gray-500 rounded-md shadow-md text-xl"
          onClick={() => handleSkipTrack("forward")}
        >
          Forward
        </button>
      </div>
    </div>
  );
};

export default App;
