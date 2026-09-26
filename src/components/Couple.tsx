import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import { GoldDivider, PatternOverlay } from "./Decor";

function Person({ name, fatherName, motherName, address, image, side }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -55 : 55 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9 }}
      className="text-center"
    >
      <motion.div
        whileHover={{ scale: 1.025 }}
        className="relative mx-auto mb-7 h-64 w-64 sm:h-72 sm:w-72"
      >
        <div className="absolute -inset-2 rounded-full border border-[#c6a15b]/40" />
        <div className="absolute -inset-5 rounded-full border border-[#c6a15b]/15" />
        <motion.img
          src={image}
          alt={name}
          className="h-full w-full rounded-full object-cover"
          loading="lazy"
          initial={{ scale: 0.98 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      <h3 className="font-display text-4xl text-[#294637]">{name}</h3>
      <p className="mt-3 text-sm text-[#6d746f]">{fatherName} & {motherName}</p>
      <p className="mx-auto mt-2 max-w-xs text-xs leading-6 text-[#858b87]">{address}</p>
    </motion.div>
  );
}

export default function Couple() {
  return (
    <section id="couple" className="relative overflow-hidden bg-[#f8f5ed] px-6 py-28">
      <PatternOverlay />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-xs tracking-[0.3em] text-[#a0824d] uppercase">The Couple</p>
          <h2 className="font-display mt-4 text-5xl text-[#294637]">Two Hearts, One Journey</h2>
          <div className="mt-6"><GoldDivider /></div>
        </div>

        <div className="grid items-center gap-16 md:grid-cols-[1fr_auto_1fr]">
          <Person {...weddingData.groom} side="left" />
          <motion.img
            src="/wedding/assets/wedding-rings.svg"
            alt=""
            aria-hidden="true"
            className="mx-auto hidden h-20 w-20 md:block"
            animate={{ rotate: [0, 3, 0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <Person {...weddingData.bride} side="right" />
        </div>
      </div>
    </section>
  );
}
