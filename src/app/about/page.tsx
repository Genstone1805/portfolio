"use client";

import ScrollProgress from "@/components/ScrollProgress";
import CTASection2 from "@/components/CTASection2";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { FaReact, FaPython, FaWordpress } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiDjango,
  SiJavascript,
  SiFastapi,
  SiSvelte,
  SiPostgresql,
  SiMysql,
  SiShopify,
} from "react-icons/si";

export default function AboutPage() {
  const [expanded, setExpanded] = useState(false);
  return (
    <main className="overflow-hidden text-gray-100 bg-[#0e0b1f]">
      <ScrollProgress />
      {/* Hero Section */}
      <PageBanner title="About Me" />

      <section className="container mx-auto max-w-7xl grid gap-10 px-6 py-15 md:grid-cols-2 items-start relative">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-purple-400 mb-4">
            Gusanu Joshua
          </h2>

          <p className="text-gray-300 leading-relaxed ">
            I’m a full-stack web developer focused on building fast, reliable,
            and scalable digital products. I approach every project with a
            balance of clean architecture, performance, usability, and long-term
            maintainability in mind. I’m comfortable working across the full
            development lifecycle, which includes planning and design
            implementation, optimization, and ongoing maintenance. I also pay
            close attention to SEO, Core Web Vitals, and modern best practices
            to ensure that every site I build or manage is future-ready.
          </p>

          {/* Expandable Content */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-1.5 py-3">
                  <h3 className="font-semibold text-lg text-purple-400">
                    Frontend Development
                  </h3>
                  <p className=" text-base text-gray-300 leading-relaxed">
                    I build modern, responsive, and user-friendly interfaces. I
                    follow UI/UX designs closely and improve them when necessary
                    to align with best practices. Performance, accessibility,
                    mobile responsiveness, and SEO are always core priorities in
                    my frontend work. I work confidently with modern frameworks
                    and tools to create clean, reusable, and scalable components
                    for smooth user experiences across all devices.
                  </p>
                  <p className=" text-sm text-gray-400 leading-relaxed bg-[#50A2FF]/10 px-2 py-1 rounded-sm sm:inline-flex">
                    <strong className="text-[#50A2FF]/80 mr-1">
                      Technologies:{" "}
                    </strong>{" "}
                    React, Next.js, Svelte, SvelteKit, Tailwind CSS, HTML, CSS,
                    JavaScript
                  </p>
                </div>
                <div className="space-y-1.5 py-2">
                  <h3 className="font-semibold text-lg text-purple-400">
                    Backend Development
                  </h3>
                  <p className=" text-base text-gray-300 leading-relaxed">
                    On the backend, I build secure, fast, and well-structured
                    systems that support scalable applications. I design RESTful
                    APIs that are easy to consume, efficient, and built with
                    performance and security in mind. I also handle database
                    design, carefully structuring schemas and models to support
                    efficient querying and fast response times.
                  </p>
                  <p className=" text-sm text-gray-400 leading-relaxed bg-[#50A2FF]/10 px-2 py-1 rounded-sm sm:inline-flex text-left">
                    <strong className="text-[#50A2FF]/80 mr-1">
                      Technologies:{" "}
                    </strong>{" "}
                    Python, Django, FastAPI, MySQL, PostgreSQL
                  </p>
                </div>
                <div className="space-y-1.5 py-2">
                  <h3 className="font-semibold text-lg text-purple-400">
                    Shopify Development
                  </h3>
                  <p className=" text-base text-gray-300 leading-relaxed">
                    I build and customize Shopify themes with a strong focus on
                    flexibility and performance. My Shopify work ensures that
                    all key sections and content are editable from the admin,
                    allowing non-technical users to manage their stores easily.
                    I modify existing themes or build custom solutions while
                    following Shopify best practices, ensuring the storefront is
                    responsive, fast, and scalable.
                  </p>
                </div>
                <div className="space-y-1.5 py-2">
                  <h3 className="font-semibold text-lg text-purple-400">
                    WordPress Development
                  </h3>
                  <p className=" text-base text-gray-300 leading-relaxed">
                    I build and customize WordPress themes that are lightweight,
                    responsive, and easy to manage. My focus is on clean
                    structure, performance optimization, and creating themes
                    that are simple to maintain and extend over time.
                  </p>
                </div>
                <div className="space-y-1.5 py-2">
                  <h3 className="font-semibold text-lg text-purple-400">
                    Website Management & Maintenance
                  </h3>
                  <p className=" text-base text-gray-300 leading-relaxed">
                    I help individuals and businesses who don’t have the time to
                    manage their websites. This includes regular updates,
                    performance monitoring, SEO maintenance, bug fixes, and
                    continuous improvements. I also redesign or update sections
                    of websites when needed to keep them aligned with modern
                    design trends and usability standards.
                  </p>
                </div>
                <div className="space-y-1.5 py-2">
                  <h3 className="font-semibold text-lg text-purple-400">
                    CMS, Automation & AI-Powered Solutions
                  </h3>
                  <p className=" text-base text-gray-300 leading-relaxed">
                    I work with modern CMS platforms and automation tools to
                    reduce manual work and improve efficiency. This includes
                    building automated workflows, connecting tools, and guiding
                    AI platforms with clear, well-structured prompts to generate
                    high-quality, production-ready results.
                  </p>
                  <p className=" text-sm text-gray-400 leading-relaxed bg-[#50A2FF]/10 px-2 py-1 rounded-sm sm:inline-flex text-left">
                    <strong className="text-[#50A2FF]/80 mr-1">
                      Tools & Platforms:{" "}
                    </strong>{" "}
                    Make, Zapier, Softr, Lovable, AI-powered workflows.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Read More Button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-sm text-gray-400 font-medium hover:text-purple-300 transition"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        </div>

        {/* Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          <div className="relative w-83 h-83 rounded-full overflow-hidden shadow-2xl border-4 border-purple-600/30">
            <Image
              src="/gusanu-joshua.webp"
              alt="Gusanu Joshua"
              fill
              className="object-cover object-top scale-110"
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
            To build and maintain high-quality web solutions using clean code,
            modern best practices, strong performance systems that are easy to
            manage, adapt, and scale.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl p-8 shadow-md bg-purple-800/10 transition"
        >
          <h3 className="text-2xl font-bold text-purple-300 mb-3">My Vision</h3>
          <p className="text-gray-300">
            To build fast, scalable web products that deliver great user
            experience and helping businesses grow through strong SEO that
            boosts organic traffic.
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
          <SiSvelte className="text-pink-400 hover:scale-110 transition" />
          <SiDjango className="text-blue-400 hover:scale-110 transition" />
          <FaWordpress className="text-blue-600 hover:scale-110 transition" />
          <SiJavascript className="text-green-400 hover:scale-110 transition" />
          <SiMysql className="text-gray-200 hover:scale-110 transition" />
          <SiShopify className="text-emerald-500 hover:scale-110 transition" />
          <SiFastapi className="text-orange-400 hover:scale-110 transition" />
          <SiPostgresql className="text-indigo-400 hover:scale-110 transition" />
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] w-full my-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Stats */}
      <section className="container mx-auto grid gap-8 md:grid-cols-4 text-center max-w-7xl px-6">
        {[
          { number: "7+", label: "Years Experience" },
          { number: "30+", label: "Projects Completed" },
          { number: "25+", label: "Happy Clients" },
          { number: "50+", label: "Tools Mastered" },
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
        <div className="space-y-3 border-l-2 border-purple-700 pl-6">
          <motion.div whileHover={{ scale: 1.02 }}>
            <p className="text-gray-300 leading-relaxed">
              My journey into web development started with a strong curiosity
              for how websites work and quickly grew into a passion for building
              meaningful digital products. Over time, I’ve worked across
              frontend, backend, and platform-specific development, learning how
              to balance clean code, performance, design, and real business
              needs.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <p className="text-gray-300 leading-relaxed">
              Through hands-on projects, continuous learning, and
              problem-solving, I’ve developed a practical approach to building
              websites that are fast, scalable, and easy to maintain. I have
              contributed to various projects, and I’m currently developing my
              own website, which is in progress and will be launching soon.
              Today, my focus is on creating solutions that don’t just look
              good—but work efficiently, rank well, and grow with the business
              behind them.
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
      <CTASection2 />
    </main>
  );
}
