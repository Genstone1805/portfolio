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
      title: "UI/UX Design",
      desc: "I design clean, modern interfaces that are easy to use and visually engaging.",
      bullets: [
        "Wireframes & Prototypes",
        "Web & App UI Design",
        "Design systems",
      ],
    },
    {
      title: "Web Development",
      desc: "Fast, responsive websites that look great and perform smoothly, from business sites to portfolios and online stores.",
      bullets: ["Custom Website", "Shopify / WordPress", "Analytics & SEO"],
    },
    {
      title: "Brand Identity & Graphics",
      desc: "visuals that tell your story and make your brand stand out.",
      bullets: [
        "Logos & Brand Identity",
        "Social Media Designs",
        "Flyers, Posters & Banners",
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
