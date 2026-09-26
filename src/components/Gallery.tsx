import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { weddingData } from "../data/weddingData";
import { PatternOverlay, GoldDivider } from "./Decor";

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden px-6 py-28">
      <PatternOverlay />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-xs tracking-[0.3em] text-[#a0824d] uppercase">Memories</p>
          <h2 className="font-display mt-4 text-5xl text-[#294637]">Our Moments</h2>
          <div className="mt-5"><GoldDivider /></div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {weddingData.gallery.map((image, index) => (
            <motion.button
              key={image}
              onClick={() => setSelected(image)}
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.06, duration: 0.7 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group overflow-hidden rounded-2xl ${index % 3 === 1 ? "sm:translate-y-8" : ""}`}
            >
              <motion.img
                src={image}
                alt={`Wedding moment ${index + 1}`}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          ))}
        </div>
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
          onClick={() => setSelected(null)}
        >
          <button className="absolute right-5 top-5 text-white" aria-label="Close image">
            <X />
          </button>
          <motion.img
            initial={{ scale: 0.94 }}
            animate={{ scale: 1 }}
            src={selected}
            alt="Selected wedding moment"
            className="max-h-[90vh] max-w-full rounded-xl object-contain"
          />
        </motion.div>
      )}
    </section>
  );
}
