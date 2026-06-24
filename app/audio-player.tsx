"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsTap, setNeedsTap] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setNeedsTap(true));
    }
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
      setNeedsTap(false);
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-3 rounded-full border border-[#efc5d5] bg-white/86 px-3 py-2 shadow-[0_14px_35px_rgba(126,36,70,0.16)] backdrop-blur">
      <audio ref={audioRef} loop preload="auto" src="/music/graduation.wav" />
      <button
        aria-label={isPlaying ? "Tat nhac nen" : "Bat nhac nen"}
        className="grid h-10 w-10 place-items-center rounded-full bg-[#c94678] text-sm font-bold text-white transition hover:bg-[#ab2f5f]"
        onClick={toggleAudio}
        type="button"
      >
        {isPlaying ? "II" : ">"}
      </button>
      <span className="max-w-[132px] text-xs font-semibold leading-4 text-[#7c2446]">
        {needsTap ? "Cham de bat nhac" : isPlaying ? "Nhac dang phat" : "Bat nhac nen"}
      </span>
    </div>
  );
}
