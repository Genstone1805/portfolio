import * as motion from "motion/react-client";
import ScrollProgress from "./ScrollProgress";
import Link from "next/link";

export default function CTASection() {
  return (
    <>
      <ScrollProgress />
      <section className="px-6 md:px-20 text-center py-14 bg-gradient-to-r from-amber-900/10 to-purple-950/50">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold md:text-4xl"
        >
          Contact Me?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-3 max-w-2xl text-zinc-300"
        >
          Tell me about your goals and timeline. I’ll respond with a simple
          plan, scope, and budget range.
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            target="_blank"
            href="mailto:gusanujoshua39@gmail.com?subject=Hi%20Joshua,%20I%20have%20a%20project%20idea%20and%20would%20love%20to%20discuss%20it%20with%20you."
            className="rounded-2xl bg-gradient-to-br from-purple-600 to-amber-400 px-6 py-3 font-semibold text-[#0a0714] shadow-lg shadow-purple-900/30 transition hover:brightness-110"
          >
            Email me
          </Link>
          <Link
            target="_blank"
            href="https://wa.me/qr/Z4PQRHIORXZCJ1?text=Hi%20Joshua,%20I%20have%20a%20project%20idea%20and%20would%20love%20to%20discuss%20it%20with%20you.%20My%20name%20is%E2%80%A6"
            className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/5"
          >
            WhatsApp
          </Link>
          <Link
            target="_blank"
            href="/Gusanu-Joshua.pdf"
            className="rounded-2xl border border-white/15 px-6 py-3 text-sm text-zinc-300 hover:bg-white/5"
          >
            View Résumé
          </Link>
        </div>
      </section>
    </>
  );
}
