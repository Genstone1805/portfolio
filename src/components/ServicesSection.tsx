import * as motion from "motion/react-client";

const services = [
  {
    title: "Web Design & Development",
    desc: "Responsive, modern websites tailored for your business.",
  },
  {
    title: "Brand Identity & Graphics",
    desc: "Logos, business cards, and brand systems that stand out.",
  },
  { title: "Other Services", desc: "UI/UX Design, consulting, and more." },
];

export default function ServicesSection() {
  const cards = [
    {
      title: "Backend Development",
      desc: "A fast, secure, clean, well-structured, scalable and robust API systems that power reliable web applications.",
      bullets: [
        "Python, Django & FastAPI",
        "RESTful API Development",
        "Database Design (MySQL & PostgreSQL)",
        "Performance & Security",
      ],
    },
    {
      title: "Frontend Development",
      desc: "A modern user experience that follows SEO best practices, Core Web Vitals and strong performance across all devices.",
      bullets: [
        "UI/UX Implementation",
        "Performance & Core Web Vitals",
        "SEO & Mobile Responsiveness",
      ],
    },
    {
      title: "Website Maintenance",
      desc: "I manage websites for businesses by handling updates, monitoring performance, and keeping sites running smoothly and securely.",
      bullets: [
        "Ongoing Maintenance",
        "Performance & SEO Upkeep",
        "Continuous Improvements",
      ],
    },
  ];
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-15 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold md:text-4xl"
        >
          Services
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-purple-600/5 p-6 transition hover:bg-white/10"
            >
              <h3 className="text-xl font-bold text-white">{c.title}</h3>
              <p className="mt-2 text-zinc-300">{c.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />{" "}
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/services"
            className="rounded-2xl bg-gradient-to-br from-purple-600 to-amber-400 px-6 py-3 font-semibold text-[#0a0714] shadow-lg shadow-purple-900/30 transition hover:brightness-110"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
