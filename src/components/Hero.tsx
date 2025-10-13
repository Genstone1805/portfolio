import * as motion from "motion/react-client";
import Image from "next/image";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-20 md:grid-cols-12 md:gap-8 md:px-6 lg:pt-28 pb-15">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:col-span-7"
        >
          <motion.p
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available
            for select projects
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl font-black leading-tight md:text-6xl"
          >
            I design & code{" "}
            <span className="bg-gradient-to-br from-amber-300 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent">
              fast, premium
            </span>{" "}
            websites that convert.
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-lg text-zinc-300"
          >
            I’m{" "}
            <span className="font-semibold text-white">
              Blessing Jacob A. (Bcode)
            </span>
            , a Designer & Web Developer. I build polished UI, production-grade
            web solutions, and brand systems that make businesses feel
            trustworthy from first click.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-2xl bg-gradient-to-br from-purple-600 to-amber-400 px-5 py-3 font-semibold text-[#0a0714] shadow-lg shadow-purple-900/30 transition hover:brightness-110"
            >
              See projects
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-white/15 px-5 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/5"
            >
              Start a project
            </a>
          </motion.div>
          <motion.div variants={item} className="mt-6 text-sm text-zinc-400">
            • Frontend • Backend • UI/UX • Visual Design • Database Management
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/40 to-fuchsia-900/20 p-2 shadow-2xl">
            {/* <div className="h-full w-full rounded-2xl bg-[url('/blessingjacob.png')] bg-cover bg-center" /> */}
            <div className="h-full w-full rounded-2xl overflow-hidden relative">
              <Image
                src="/blessingjacob.png"
                alt="Blessing Jacob A."
                fill
                className="object-cover object-center"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-purple-900/10" />
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
