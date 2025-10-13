export default function BrandsBar() {
  return (
    <section className="border-y border-white/5 bg-purple-600/10 ">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 py-6 md:px-6">
        {[
          "React.js",
          "Next.js",
          "Tailwind CSS",
          "Adobe Illustrator",
          "Figma",
          "Framer Motion",
          "Node.js",
          "Express.js",
          "SQL",
          "Python",
        ].map((b) => (
          <span
            key={b}
            className="text-xs uppercase tracking-widest text-zinc-400"
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}
