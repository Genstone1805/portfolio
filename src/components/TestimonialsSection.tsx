// import { motion } from "framer-motion";

import * as motion from "motion/react-client";

const testimonials = [
  {
    name: "Mary A.",
    role: "Founder, Mighticiti",
    quote:
      "Blessing delivers like a product team: crisp design, clean code, and business thinking. Our site loads fast and converts.",
  },
  {
    name: "Temi T.",
    role: "Owner, Temi's Trove",
    quote:
      "He turned our scattered ideas into a premium brand system that customers instantly trust.",
  },
];

export default function Testimonials({
  data,
}: {
  data: { name: string; role: string; quote: string }[];
}) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-4 py-15 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-extrabold md:text-4xl"
        >
          Clients say
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {data.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-3xl border border-white/10 bg-purple-600/5 p-6"
            >
              <p className="text-zinc-200">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-zinc-400">
                — {t.name}, {t.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
