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

    const startAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setNeedsTap(false);
        window.removeEventListener("pointerdown", startAudio);
        window.removeEventListener("keydown", startAudio);
      } catch {
        setNeedsTap(true);
      }
    };

    void startAudio();
    window.addEventListener("pointerdown", startAudio);
    window.addEventListener("keydown", startAudio);

    return () => {
      window.removeEventListener("pointerdown", startAudio);
      window.removeEventListener("keydown", startAudio);
    };
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
        setNeedsTap(false);
      } catch {
        setNeedsTap(true);
      }
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-[320px] items-center justify-center gap-3 rounded-full border border-[#efc5d5] bg-white/90 px-3 py-2 shadow-[0_14px_35px_rgba(126,36,70,0.16)] backdrop-blur sm:inset-x-auto sm:bottom-auto sm:right-4 sm:top-4 sm:mx-0 sm:justify-start">
      <audio ref={audioRef} loop preload="auto" src="/music/graduation.wav" />
      <button
        aria-label={isPlaying ? "Tat nhac nen" : "Bat nhac nen"}
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#c94678] text-sm font-bold text-white transition hover:bg-[#ab2f5f] sm:h-10 sm:w-10"
        onClick={toggleAudio}
        type="button"
      >
        {isPlaying ? "II" : ">"}
      </button>
      <span className="max-w-[170px] text-xs font-semibold leading-4 text-[#7c2446] sm:max-w-[132px]">
        {needsTap ? "Cham de bat nhac" : isPlaying ? "Nhac dang phat" : "Bat nhac nen"}
      </span>
    </div>
  );
}
