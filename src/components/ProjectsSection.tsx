import * as motion from "motion/react-client";

export default function ProjectsSection({
  projects,
}: {
  projects: {
    title: string;
    tag: string;
    description: string;
    img: string;
    href: string;
  }[];
}) {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-15 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold md:text-4xl"
        >
          Selected Work
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div
                className="aspect-[4/3] w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${p.img || "/placeholder.png"})`,
                }}
              />
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-300">{p.description}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm text-amber-300">
                  View Project{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 7H17V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/Projects"
            className="rounded-2xl bg-gradient-to-br from-purple-600 to-amber-400 px-6 py-3 font-semibold text-[#0a0714] shadow-lg shadow-purple-900/30 transition hover:brightness-110"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
