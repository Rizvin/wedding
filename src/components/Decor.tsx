import { motion } from "framer-motion";

export function FloralCorners() {
  return (
    <>
      <motion.img
        src="/wedding/assets/floral-corner-left.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 w-36 opacity-80 sm:w-52"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.8, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.img
        src="/wedding/assets/floral-corner-right.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 w-36 opacity-80 sm:w-52"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 0.8, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    </>
  );
}

export function PatternOverlay({ dark = false }: { dark?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${
        dark ? "opacity-[0.055]" : "opacity-[0.045]"
      }`}
      style={{
        backgroundImage: "url('/wedding/assets/islamic-pattern.svg')",
        backgroundSize: "180px 180px",
      }}
    />
  );
}

export function GoldDivider() {
  return (
    <motion.img
      src="/wedding/assets/floral-divider.svg"
      alt=""
      aria-hidden="true"
      className="mx-auto h-12 w-40"
      initial={{ opacity: 0, scaleX: 0.6 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    />
  );
}

export function FloatingStars() {
  const stars = [
    { left: "12%", top: "22%", delay: 0 },
    { left: "82%", top: "18%", delay: 0.8 },
    { left: "74%", top: "68%", delay: 1.4 },
    { left: "18%", top: "74%", delay: 2 },
  ];

  return (
    <>
      {stars.map((star, index) => (
        <motion.img
          key={index}
          src="/wedding/assets/gold-star.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute h-3 w-3"
          style={{ left: star.left, top: star.top }}
          animate={{ y: [0, -10, 0], opacity: [0.25, 0.75, 0.25] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
