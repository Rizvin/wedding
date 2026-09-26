import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export default function Timeline() {
  const events = [
    { title: "Nikkah", time: weddingData.nikkah.time, venue: weddingData.nikkah.venue, side: "left" },
    { title: "Reception", time: weddingData.reception.time, venue: weddingData.reception.venue, side: "right" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#294637] px-6 py-28 text-white">
      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="text-xs tracking-[0.3em] text-[#d7bf8b] uppercase">The Day</p>
          <h2 className="font-display mt-4 text-5xl">Our Celebration</h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#c6a15b]/40" />
          {events.map((event) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: event.side === "left" ? -45 : 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
              className={`relative mb-16 flex w-1/2 ${event.side === "left" ? "pr-10 text-right" : "ml-auto pl-10 text-left"}`}
            >
              <div className="w-full">
                <div className="mb-3 inline-flex h-4 w-4 rounded-full border-2 border-[#c6a15b] bg-[#294637]" />
                <h3 className="font-display text-3xl">{event.title}</h3>
                <p className="mt-2 text-[#d7bf8b]">{event.time}</p>
                <p className="mt-1 text-sm text-white/60">{event.venue}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
