// import { motion } from "framer-motion";
import * as motion from "motion/react-client";

export default function About() {
  //   return (
  //     <section id="about" className="py-24 relative">
  //       {/* <motion.div */}
  //       <div
  //         // initial={{ opacity: 0, y: 20 }}
  //         // whileInView={{ opacity: 1, y: 0 }}
  //         // viewport={{ once: true }}
  //         // transition={{ duration: 0.6 }}
  //         className="mx-auto max-w-4xl text-center"
  //       >
  //         <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
  //         <p className="text-zinc-300 text-lg md:text-xl">
  //           I help businesses and creators build stunning websites, craft powerful
  //           brand identities, and bring ideas to life digitally. I focus on
  //           **fast, visually appealing, and high-converting designs** that create
  //           a lasting impression.
  //         </p>
  //       </div>
  //       {/* </motion.div> */}
  //     </section>
  //   );
  return (
    <section id="about" className="relative">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-15 md:grid-cols-12 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-6"
        >
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Website Management & Continuous Improvement.
          </h2>
          <p className="mt-4 max-w-prose text-zinc-300">
            I also manage live websites to ensure site remains secure, fast, and
            reliable over time. This includes regular updates, performance
            monitoring, SEO maintenance, and proactive issue resolution. I
            handle problems before they affect users or business outcomes.
          </p>
          <p className="mt-4 max-w-prose text-zinc-300">
            Beyond maintenance, I continuously optimize and redesign any part of
            the website when needed, aligning it with the latest design trends
            and modern UX standards. The goal is simple: keep your website
            current, visually relevant, and performing at a high level as your
            brand and audience evolve.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Adaptability",
              "User-Centered Thinking",
              "Performance Focus",
              "Security Awareness",
              "SEO Responsibility",
              "Clear Communication",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-zinc-200">
                <span className="h-2 w-2 rounded-full bg-amber-400" /> {t}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-6"
        >
          <div className="rounded-3xl border border-white/10 bg-purple-600/5 p-6">
            <h3 className="font-semibold text-white">Quick Stats</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
              {[
                ["7+", "Years of creating"],
                ["30+", "Projects completed"],
                ["50+", "Tools Mastered"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <div className="text-3xl font-black text-white">{n}</div>
                  <div className="text-xs text-zinc-400">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
