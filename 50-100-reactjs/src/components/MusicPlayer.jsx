import React, { useEffect, useRef, useState } from 'react'

const tracks = [
  {
    title: "Track 1",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    title: "Track 2",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    image: "https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg",
  },
  {
    title: "Track 3",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusicTrack, SetCurrentMusicTrack] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setTrackProgress((audioRef.current.currentTime / (audioRef.current.duration || 1)) * 100);
      }, 1000);

      return () => clearInterval(interval);
    };
  }, [isPlaying]);

  useEffect(() => {
    setTrackProgress(0);
    if (isPlaying) {
      audioRef.current.play();
    };
  }, [currentMusicTrack]);

  function handlePauseAndPlay() {
    setIsPlaying((prev) => {
      if (!prev) {
        audioRef.current.play(); // ✅ Jab prev false hoga to play chalega
      } else {
        audioRef.current.pause(); // ✅ Jab prev true hoga to pause chalega
      }
      return !prev; // ✅ isPlaying ko toggle kar raha hai
    });
  };

  function handleSkipTrack(getDirection) {
    if (getDirection === "forward") {
      SetCurrentMusicTrack((prevTrack) => prevTrack === tracks.length - 1 ? 0 : prevTrack + 1);
    } else if (getDirection === "backward") {
      SetCurrentMusicTrack((prevTrack) => prevTrack === 0 ? tracks.length - 1 : prevTrack - 1);
    };
    setIsPlaying(true);
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-3 items-center py-10 px-4">
      <h1 className="text-3xl font-bold">Music Player</h1>
      <h2 className="text-2xl font-bold">{tracks[currentMusicTrack].title}</h2>
      <img
        src={tracks[currentMusicTrack].image}
        alt={tracks[currentMusicTrack].title}
        className="w-[400px] object-cover"
      />
      <audio ref={audioRef} src={tracks[currentMusicTrack].source} />
      <div className="w-[400px] h-3 bg-slate-700 rounded-md overflow-hidden">
        <div
          className="h-full transition-all duration-300 ease-in-out rounded-md"
          style={{
            width: `${trackProgress}%`,
            backgroundColor: isPlaying ? "#3498db" : "#a43636",
          }}
        ></div>
      </div>
      <div className="flex gap-3 justify-center mt-4">
        <button
          className="px-3 py-2 border-2 border-gray-500 
          rounded-md shadow-md text-xl"
          onClick={() => handleSkipTrack("backward")}
        >
          Backward
        </button>
        <button
          className="px-3 py-2 border-2 border-gray-500 rounded-md shadow-md text-xl"
          onClick={handlePauseAndPlay}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          className="px-3 py-2 border-2 border-gray-500 rounded-md shadow-md text-xl"
          onClick={() => handleSkipTrack("forward")}
        >
          Forward
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer