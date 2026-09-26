import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { weddingData } from "../data/weddingData";
import { FloralCorners, FloatingStars, PatternOverlay } from "./Decor";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen overflow-hidden bg-[#f8f5ed]">
      <PatternOverlay />
      <FloralCorners />
      <FloatingStars />

      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-[0.22] filter saturate-105"
        style={{
          y: imageY,
          backgroundImage: "url('/images/hero.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5ed]/40 via-[#f8f5ed]/80 to-[#f8f5ed]" />

      <motion.div
        style={{ y: contentY }}
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center"
      >
        <div>
          <motion.img
            src="/assets/crescent-stars.svg"
            alt=""
            aria-hidden="true"
            className="mx-auto mb-7 h-14 w-14"
            initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          />

          <p className="mb-7 text-[11px] tracking-[0.34em] text-[#8d7549] uppercase">
            Bismillahir Rahmanir Raheem
          </p>

          <p className="mb-5 text-sm text-[#6d746f]">
            With the blessings of Allah and the love of our families
          </p>

          <h1 className="font-display text-6xl font-medium leading-[0.88] text-[#243d31] sm:text-8xl">
            {weddingData.groom.name}
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="my-6 font-display text-4xl text-[#b19255]"
          >
            &
          </motion.div>

          <h1 className="font-display text-6xl font-medium leading-[0.88] text-[#243d31] sm:text-8xl">
            {weddingData.bride.name}
          </h1>

          <p className="mx-auto mt-9 max-w-md text-sm leading-7 text-[#69716c]">
            Together with their families, they invite you to celebrate their wedding.
          </p>
        </div>
      </motion.div>

      <motion.a
        href="#couple"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-[#8d7549]"
      >
        <ChevronDown size={26} strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}
