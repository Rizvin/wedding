import { motion } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react";
import { weddingData } from "../data/weddingData";
import { PatternOverlay } from "./Decor";

export default function QRCodeSection() {
  return (
    <section className="relative overflow-hidden bg-[#f1ecdf] px-6 py-28 text-center">
      <PatternOverlay />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-xl"
      >
        <p className="text-xs tracking-[0.3em] text-[#a0824d] uppercase">Digital Invitation</p>
        <h2 className="font-display mt-4 text-5xl text-[#294637]">Scan to View</h2>

        <div className="relative mx-auto mt-10 w-fit">
          <motion.img
            src="/assets/invitation-frame.svg"
            alt=""
            aria-hidden="true"
            className="absolute -inset-8 h-[calc(100%+4rem)] w-[calc(100%+4rem)]"
            animate={{ rotate: [0, 1, 0, -1, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          />
          <div className="rounded-3xl bg-white p-5 shadow-lg">
            <QRCodeCanvas value={weddingData.qr.url} size={220} bgColor="#fff" fgColor="#294637" level="H" />
          </div>
        </div>

        <p className="mt-12 text-sm text-[#777]">Scan the QR code with your phone camera</p>
      </motion.div>
    </section>
  );
}
