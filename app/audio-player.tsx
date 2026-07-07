"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    const startAudio = async (restart = false) => {
      try {
        if (restart) {
          audio.currentTime = 0;
        }
        await audio.play();
        removeFirstInteractionListeners();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    function removeFirstInteractionListeners() {
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    }

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleFirstInteraction = () => {
      void startAudio(true);
    };

    const handleCanPlay = () => {
      void startAudio(true);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("loadeddata", handleCanPlay, { once: true });
    audio.addEventListener("canplay", handleCanPlay, { once: true });
    window.addEventListener("pointerdown", handleFirstInteraction);
    window.addEventListener("keydown", handleFirstInteraction);

    audio.load();
    void startAudio(true);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("loadeddata", handleCanPlay);
      audio.removeEventListener("canplay", handleCanPlay);
      removeFirstInteractionListeners();
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
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-[48px] items-center justify-center rounded-full border border-[#efc5d5] bg-white/90 p-2 shadow-[0_14px_35px_rgba(126,36,70,0.16)] backdrop-blur sm:inset-x-auto sm:bottom-auto sm:right-4 sm:top-4 sm:mx-0">
      <audio
        ref={audioRef}
        autoPlay
        loop
        playsInline
        preload="auto"
        src="/music/gra.mp3"
      />
      <button
        aria-label={isPlaying ? "Tat nhac nen" : "Bat nhac nen"}
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#c94678] text-sm font-bold text-white transition hover:bg-[#ab2f5f] sm:h-10 sm:w-10"
        onClick={toggleAudio}
        type="button"
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M11 5 6 9H3v6h3l5 4V5Z" />
          {isPlaying ? (
            <>
              <path d="M15.5 8.5a5 5 0 0 1 0 7" />
              <path d="M18.5 5.5a9 9 0 0 1 0 13" />
            </>
          ) : (
            <>
              <path d="m16 9 5 5" />
              <path d="m21 9-5 5" />
            </>
          )}
        </svg>
      </button>
    </div>
  );
}
