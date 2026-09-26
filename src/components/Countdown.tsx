import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import { PatternOverlay, FloatingStars } from "./Decor";

function calculateTimeLeft() {
  const difference = new Date(weddingData.countdown.targetDate).getTime() - Date.now();
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = window.setInterval(() => setTime(calculateTimeLeft()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f1ecdf] px-6 py-28">
      <PatternOverlay />
      <FloatingStars />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="text-xs tracking-[0.3em] text-[#a0824d] uppercase">Our Special Day</p>
        <h2 className="font-display mt-4 text-5xl text-[#294637]">Counting Down</h2>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["Days", time.days],
            ["Hours", time.hours],
            ["Minutes", time.minutes],
            ["Seconds", time.seconds],
          ].map(([label, value]) => (
            <motion.div
              key={label}
              layout
              className="rounded-2xl border border-[#c6a15b]/30 bg-white/55 px-4 py-7 backdrop-blur-sm"
            >
              <motion.div
                key={String(value)}
                initial={{ y: -5, opacity: 0.6 }}
                animate={{ y: 0, opacity: 1 }}
                className="font-display text-5xl text-[#294637]"
              >
                {String(value).padStart(2, "0")}
              </motion.div>
              <div className="mt-2 text-xs tracking-widest text-[#888] uppercase">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
