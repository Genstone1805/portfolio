"use client";

import ScrollProgress from "@/components/ScrollProgress";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact, FaFigma, FaPython, FaWordpress } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiNodedotjs,
  SiExpress,
  SiShopify,
} from "react-icons/si";

export default function AboutPage() {
  return (
    <main className="overflow-hidden text-gray-100 bg-[#0e0b1f]">
      <ScrollProgress />
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/blessingjacob.webp"
          alt="About Background"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-purple-950/70"></div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-5xl font-bold text-center text-white drop-shadow-lg"
        >
          About Me
        </motion.h1>
      </section>

      {/* My Story + Floating Image */}
      <section className="container mx-auto max-w-7xl grid gap-10 px-6 py-15 md:grid-cols-2 items-center relative">
        <div>
          <h2 className="text-3xl font-bold text-purple-400 mb-4">My Story</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I love creating things that make life and business easier. My work,
            from websites to brand visuals doesn’t just look good, it works
            beautifully and leaves a lasting impression. Every project I take on
            is built with care, clarity, and attention to detail. My goal is
            simple: to create designs that feel professional, and valuable. From
            graphics to UI/UX and full web solutions, my journey blends
            creativity with problem-solving.
          </p>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-purple-600/30">
            <Image
              src="/blessingjacob.png"
              alt="Blessing Jacob"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Mission + Vision */}
      <section className="container mx-auto grid gap-8 md:grid-cols-2 max-w-7xl px-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl p-8 shadow-md bg-purple-800/10 transition"
        >
          <h3 className="text-2xl font-bold text-purple-300 mb-3">
            My Mission
          </h3>
          <p className="text-gray-300">
            To empower businesses and individuals by creating impactful designs
            and scalable web solutions that solve real problems.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl p-8 shadow-md bg-purple-800/10 transition"
        >
          <h3 className="text-2xl font-bold text-purple-300 mb-3">My Vision</h3>
          <p className="text-gray-300">
            To be a trusted global designer & developer, known for crafting
            unique, high-performing digital products.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="h-[1px] w-full my-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Skills Grid */}
      <section className="py-15 container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-10">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-5xl justify-items-center">
          <FaReact className="text-cyan-400 hover:scale-110 transition" />
          <SiNextdotjs className="text-white hover:scale-110 transition" />
          <SiTailwindcss className="text-sky-400 hover:scale-110 transition" />
          <FaPython className="text-yellow-400 hover:scale-110 transition" />
          <FaFigma className="text-pink-400 hover:scale-110 transition" />
          <SiAdobephotoshop className="text-blue-400 hover:scale-110 transition" />
          <FaWordpress className="text-blue-600 hover:scale-110 transition" />
          <SiNodedotjs className="text-green-400 hover:scale-110 transition" />
          <SiExpress className="text-gray-200 hover:scale-110 transition" />
          <SiShopify className="text-emerald-500 hover:scale-110 transition" />
          <SiAdobeillustrator className="text-orange-400 hover:scale-110 transition" />
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] w-full my-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Stats */}
      <section className="container mx-auto grid gap-8 md:grid-cols-4 text-center max-w-7xl px-6">
        {[
          { number: "3+", label: "Years Experience" },
          { number: "50+", label: "Projects Completed" },
          { number: "20+", label: "Happy Clients" },
          { number: "6+", label: "Tools Mastered" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl bg-purple-800/10 p-8 shadow-md transition"
          >
            <h3 className="text-4xl font-bold text-purple-300">
              {stat.number}
            </h3>
            <p className="text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Divider */}
      <div className="h-[1px] w-full my-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Timeline */}
      <section className="py-15 container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
          My Journey
        </h2>
        <div className="space-y-8 border-l-2 border-purple-700 pl-6">
          <motion.div whileHover={{ scale: 1.02 }}>
            <p className="text-gray-300 leading-relaxed">
              I started as a graphic designer, helping brands find their voice
              visually. Over time, I transitioned into UI/UX design and web
              development because I wanted to do more than make things look
              good, I wanted to make them work beautifully. <br />
              <br /> Now I combine creativity with code to build experiences
              that convert, connect, and last. I believe in steady growth, quiet
              discipline, and doing the real work — whether it’s on Figma, code
              or in life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] w-full my-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* WHY ME / WHY WORK WITH ME */}
      <section className="py-15 container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-8">
          Why work with me
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl p-6 bg-purple-800/10 shadow-md"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Clear Communication
            </h3>
            <p className="text-gray-300 text-sm">
              I listen, explain clearly, and keep you updated every step of the
              way.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl p-6 bg-purple-800/10 shadow-md"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Practical Solutions
            </h3>
            <p className="text-gray-300 text-sm">
              I focus on work that helps your business — not just what looks
              cool.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl p-6 bg-purple-800/10 shadow-md"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Attention to Detail
            </h3>
            <p className="text-gray-300 text-sm">
              From pixels to performance, I make sure everything is polished.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl p-6 bg-purple-800/10 shadow-md"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Reliable Support
            </h3>
            <p className="text-gray-300 text-sm">
              I provide ongoing help and clear handoffs so your project stays
              healthy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] w-full my-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* CTA */}
      <section className="px-6 md:px-20 text-center py-14 bg-gradient-to-r from-amber-900/10 to-purple-950/50">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Want to see what I can do?
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Whether it’s a brand identity, UI/UX design, or a full website, I’d
          love to bring your ideas to life.
        </p>
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
            href="/Blessing-Jacob-A-Bcode-Resume.pdf"
            className="rounded-2xl border border-white/15 px-6 py-3 text-sm text-zinc-300 hover:bg-white/5"
          >
            Download Résumé
          </a>
          <a
            href="/services"
            className="rounded-2xl bg-gradient-to-br from-purple-600 to-amber-400 px-6 py-3 font-semibold text-[#0a0714] shadow-lg shadow-purple-900/30 transition hover:brightness-110"
          >
            Explore My Services
          </a>
        </div>
      </section>
    </main>
  );
}
