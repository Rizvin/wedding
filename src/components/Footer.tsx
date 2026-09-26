import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import { GoldDivider } from "./Decor";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f8f5ed] px-6 py-24 text-center">
      <motion.img
        src="/wedding/assets/crescent-stars.svg"
        alt=""
        aria-hidden="true"
        className="mx-auto mb-7 h-12 w-12"
        animate={{ rotate: [0, 4, 0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <p className="text-xs tracking-[0.3em] text-[#a0824d] uppercase">With Love</p>
      <h2 className="font-display mt-5 text-5xl text-[#294637]">{weddingData.groom.name}</h2>
      <div className="my-3 font-display text-3xl text-[#b19255]">&</div>
      <h2 className="font-display text-5xl text-[#294637]">{weddingData.bride.name}</h2>
      <div className="mt-7"><GoldDivider /></div>
      <p className="mt-7 text-xs text-[#999]">With love, our families</p>
    </footer>
  );
}
