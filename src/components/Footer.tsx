export default function Footer() {
  return (
    <footer className="py-12 bg-[#0d0a17] border-t border-white/10 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
        <p className="text-zinc-400 mb-2">
          © {new Date().getFullYear()} Gusanu Joshua. All rights
          reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Genstone1805/"
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
