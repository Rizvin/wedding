import { Music, Pause } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { weddingData } from "../data/weddingData";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [showPrompt, setShowPrompt] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    // If currently muted (from autoplay), unmute on first user gesture
    if (audioRef.current.muted) {
      audioRef.current.muted = false;
      setMuted(false);
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
      return;
    }

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch {
      // Browser autoplay policy: playback requires the user's gesture.
      setPlaying(false);
    }
  };

  useEffect(() => {
    // Try to autoplay on mount. If blocked by browser, user can still toggle.
    const tryAutoplay = async () => {
      if (!audioRef.current) return;
      // Start muted playback — this is allowed by most browsers
      audioRef.current.muted = true;
      setMuted(true);
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch {
        // Autoplay blocked — show prompt to request user interaction
        setPlaying(false);
        setShowPrompt(true);
      }
    };

    tryAutoplay();
  }, []);

  return (
    <>
      <audio ref={audioRef} loop src={weddingData.music} playsInline preload="auto" />
      {showPrompt && !playing && (
        <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full bg-[#294637] px-4 py-2 text-sm text-white shadow-lg">
          <button
            onClick={toggleMusic}
            className="flex items-center gap-2"
            aria-label="Enable audio"
          >
            <Music size={16} /> Enable background music
          </button>
        </div>
      )}
      <button
        onClick={toggleMusic}
        aria-label="Toggle music"
        title={muted ? "Tap to unmute music" : "Toggle music"}
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#294637] text-white shadow-xl"
      >
        {playing ? <Pause size={18} /> : <Music size={18} />}
      </button>
    </>
  );
}
