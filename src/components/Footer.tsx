export default function Footer() {
  return (
    <footer className="py-12 bg-[#0d0a17] border-t border-white/10 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
        <p className="text-zinc-400 mb-2">
          © {new Date().getFullYear()} Blessing Jacob A. (Bcode). All rights
          reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/bjcode"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/RealBjac"
            className="hover:text-white transition"
          >
            Twitter
          </a>
          <a
            href="https://github.com/bjaclab"
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
