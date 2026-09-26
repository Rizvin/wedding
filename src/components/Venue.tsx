import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { FloralCorners, PatternOverlay } from "./Decor";

interface VenueProps {
  name: string;
  address: string;
  mapsUrl: string;
  image?: string;
}

export default function Venue({ name, address, mapsUrl, image }: VenueProps) {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      <PatternOverlay />
      <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#e9e1d0]">
        <FloralCorners />
        <div className="grid md:grid-cols-2">
          <motion.div
            className="min-h-[350px] overflow-hidden bg-[#dcd3bf]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {image ? (
              <motion.img
                src={image}
                alt={name}
                className="h-full min-h-[350px] w-full object-cover"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              />
            ) : (
              <div className="flex h-full items-center justify-center text-[#294637]">
                <MapPin size={42} />
              </div>
            )}
          </motion.div>

          <div className="flex flex-col justify-center p-10 sm:p-14">
            <p className="text-xs tracking-[0.3em] text-[#a0824d] uppercase">Find Us</p>
            <h2 className="font-display mt-4 text-4xl text-[#294637]">{name}</h2>
            <p className="mt-5 text-sm leading-7 text-[#70756f]">{address}</p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit rounded-full bg-[#294637] px-7 py-3 text-sm text-white"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
