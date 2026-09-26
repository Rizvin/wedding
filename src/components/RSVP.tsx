import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { GoldDivider, FloralCorners } from "./Decor";
import { useState } from "react";

export default function RSVP() {
  const [response, setResponse] = useState<"yes" | "no" | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#294637] px-6 py-28 text-center text-white">
      <FloralCorners />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-xl"
      >
        <p className="text-xs tracking-[0.3em] text-[#d7bf8b] uppercase">RSVP</p>
        <h2 className="font-display mt-4 text-5xl">Will You Join Us?</h2>
        <div className="my-6"><GoldDivider /></div>
        <p className="text-sm leading-7 text-white/60">
          Your presence would make our celebration even more special.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => setResponse("yes")}
            className="flex items-center justify-center gap-2 rounded-full bg-[#c6a15b] px-7 py-3 text-sm text-white transition hover:-translate-y-0.5"
          >
            <Check size={17} /> Yes, I'll Be There
          </button>
          <button
            onClick={() => setResponse("no")}
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm transition hover:-translate-y-0.5"
          >
            <X size={17} /> Sorry, Can't Make It
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {response && (
          <motion.div
            key="rsvp-thanks"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className="pointer-events-auto fixed left-1/2 top-1/3 z-50 -translate-x-1/2 mx-auto w-[min(92%,520px)] rounded-2xl bg-white/95 p-6 text-center text-[#243d31] shadow-2xl backdrop-blur"
          >
            <motion.div
              initial={{ rotate: -6 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-3 inline-flex items-center justify-center rounded-full bg-[#f6eddc] p-3"
            >
              {response === "yes" ? (
                <Check size={24} className="text-[#2b5c44]" />
              ) : (
                <X size={24} className="text-[#a33a3a]" />
              )}
            </motion.div>

            <h3 className="font-display mb-1 text-2xl">
              {response === "yes" ? "Thank you — see you there!" : "We're sorry you can't make it"}
            </h3>
            <p className="mb-4 text-sm text-[#44544a]">
              {response === "yes"
                ? "Your RSVP is received. We can't wait to celebrate together."
                : "Thank you for letting us know. We'll miss you and send our love."}
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => setResponse(null)}
                className="rounded-full bg-[#294637] px-5 py-2 text-sm text-white"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative floating petals */}
      <motion.img
        src="/wedding/assets/petal.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-6 top-6 h-8 w-8 opacity-60"
        animate={{ y: [0, -12, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
