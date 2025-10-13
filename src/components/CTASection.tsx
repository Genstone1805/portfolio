import * as motion from "motion/react-client";
import ScrollProgress from "./ScrollProgress";

export default function CTASection() {
  return (
    <>
      <ScrollProgress />
      <section id="contact" className="relative">
        <div className="mx-auto max-w-4xl px-4 py-15 text-center md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold md:text-4xl"
          >
            Got a project? Let’s make it feel premium.
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
            <a
              href="mailto:jakedamilare@gmail.com?subject=Project%20Inquiry%20—%20Bcode&body=Hi%20Blessing,%20we'd%20like%20to%20work%20with%20you%20on..."
              className="rounded-2xl bg-gradient-to-br from-purple-600 to-amber-400 px-6 py-3 font-semibold text-[#0a0714] shadow-lg shadow-purple-900/30 transition hover:brightness-110"
            >
              Email me
            </a>
            <a
              href="https://wa.me/2349064612799?text=Hi%20Blessing%2C%20I%27d%20love%20to%20discuss%20a%20project."
              className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/5"
            >
              WhatsApp
            </a>
            <a
              href="/Blessing-Jacob-A_designer&developer_CV.pdf"
              download="Blessing-Jacob-A_CV.pdf"
              className="rounded-2xl border border-white/15 px-6 py-3 text-sm text-zinc-300 hover:bg-white/5"
            >
              Download Résumé
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
