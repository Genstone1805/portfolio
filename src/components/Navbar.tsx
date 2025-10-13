"use client";
// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const links = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Services", href: "#services" },
//     { name: "Projects", href: "#projects" },
//     { name: "Testimonials", href: "#testimonials" },
//     { name: "Contact", href: "#cta" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
//       <div className="mx-auto max-w-7xl px-4 md:px-6 flex justify-between items-center h-16">
//         <Link
//           href="/"
//           className="font-bold text-xl md:text-2xl bg-gradient-to-br from-amber-300 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent"
//         >
//           Bcode
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden md:flex gap-8">
//           {links.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-zinc-300 hover:text-white transition"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Menu */}
//         <button
//           className="md:hidden text-zinc-300"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <motion.div
//           initial={{ height: 0, opacity: 0 }}
//           animate={{ height: "auto", opacity: 1 }}
//           className="md:hidden bg-white/5 border-t border-white/10 flex flex-col gap-4 px-4 py-4"
//         >
//           {links.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-zinc-300 hover:text-white transition"
//             >
//               {link.name}
//             </a>
//           ))}
//         </motion.div>
//       )}
//     </nav>
//   );
// }

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Common links (desktop + mobile)
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ];

  // Smooth scroll handler
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const target = document.getElementById(targetId.substring(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false); // close menu if mobile
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f0c29]/80 via-[#302b63]/80 to-[#24243e]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wrapper */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#home" className="group inline-flex items-center gap-2">
            <span className="h-8 w-8 rounded-2xl bg-gradient-to-br from-purple-500 to-amber-400" />
            <span className="font-black tracking-wide text-white">Bcode</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-white/80 hover:text-white transition"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-white transition"
                >
                  {link.name}
                </Link>
              )
            )}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="rounded-2xl bg-gradient-to-br from-purple-600 to-amber-400 px-4 py-2 text-sm font-semibold text-[#0a0714] shadow-lg shadow-purple-900/30 transition hover:brightness-110"
            >
              Start a project
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.href.startsWith("#") ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-white/80 hover:text-white transition"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white/80 hover:text-white transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-purple-500/30 transition text-center"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
