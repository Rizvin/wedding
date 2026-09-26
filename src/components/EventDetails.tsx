import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { GoldDivider } from "./Decor";

interface EventProps {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
  image?: string;
}

export default function EventDetails({ title, date, time, venue, address, mapsUrl, image }: EventProps) {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="text-xs tracking-[0.3em] text-[#a0824d] uppercase">The Celebration</p>
          <h2 className="font-display mt-3 text-5xl text-[#294637]">{title}</h2>
          <div className="mt-5"><GoldDivider /></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85 }}
          className="overflow-hidden rounded-[2rem] border border-[#c6a15b]/30 bg-white/60 shadow-sm"
        >
          {image && (
            <motion.img
              src={image}
              alt=""
              className="h-64 w-full object-cover sm:h-80"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            />
          )}

          <div className="p-8 text-center sm:p-12">
            <div className="grid gap-8 sm:grid-cols-3">
              <Info icon={<CalendarDays size={21} />} label="Date" value={date} />
              <Info icon={<Clock3 size={21} />} label="Time" value={time} />
              <Info icon={<MapPin size={21} />} label="Venue" value={venue} />
            </div>

            <p className="mx-auto mt-9 max-w-xl text-sm leading-7 text-[#777]">{address}</p>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex rounded-full bg-[#294637] px-7 py-3 text-sm text-white transition hover:-translate-y-0.5"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div>
      <div className="mb-3 flex justify-center text-[#a0824d]">{icon}</div>
      <p className="text-[10px] tracking-[0.25em] text-[#999] uppercase">{label}</p>
      <p className="font-display mt-2 text-xl text-[#294637]">{value}</p>
    </div>
  );
}
