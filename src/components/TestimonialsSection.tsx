// import { motion } from "framer-motion";

import * as motion from "motion/react-client";

export default function Testimonials({
  data,
}: {
  data: { name: string; role: string; quote: string; image:string }[];
}) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-4 py-8 space-y-8 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-extrabold md:text-4xl"
        >
          My Team
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2">
          {data.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-3xl border border-white/10 bg-purple-600/5 p-6 relative"
            >
              <div className="relative w-full flex items-center justify-center h-8">
                <div className="size-18 md:size-19 rounded-full overflow-hidden absolute -top-14 border-gray-200 bg-[#110820] border-2">
                  <img src={t.image} className="size-full object-contain object-top" />
                </div>
              </div>
              <p className="text-zinc-200 text-center">“{t.quote}”</p>
              <p className="mt-4 text-sm text-center text-zinc-400">
                {t.name}
              </p>
              <p className="text-sm text-center text-zinc-400">
                {t.role}
              </p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
