import { motion } from "framer-motion";
import { PatternOverlay, GoldDivider } from "./Decor";

export default function Invitation() {
  return (
    <section className="relative overflow-hidden bg-[#294637] px-6 py-32 text-white">
      <PatternOverlay dark />
      <motion.img
        src="/wedding/assets/islamic-arch.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-8 w-64 -translate-x-1/2 opacity-20"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="text-xs tracking-[0.3em] text-[#d7bf8b] uppercase">With Gratitude</p>
        <h2 className="font-display mt-8 text-4xl leading-tight sm:text-6xl">
          In the name of Allah,<br />
          the Most Gracious, the Most Merciful
        </h2>
        <div className="my-9"><GoldDivider /></div>
        <p className="text-sm leading-8 text-white/70 sm:text-base">
          With immense joy and gratitude, we invite you to join us as we begin this beautiful journey together.
        </p>
      </div>
    </section>
  );
}
