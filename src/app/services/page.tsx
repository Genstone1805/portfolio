"use client";

import ScrollProgress from "@/components/ScrollProgress";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCode, FaPencilRuler, FaChartBar } from "react-icons/fa";

import { SiShopify, SiFigma } from "react-icons/si";

export default function ServicesPage() {
  return (
    <main className="overflow-hidden text-gray-100 bg-[#0e0b1f]">
      <ScrollProgress />
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="/services-bg.webp"
          alt="Services Background"
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
          My Services
        </motion.h1>
      </section>

      {/* My Services Grid */}
      <section className="py-15 container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-14">
          What I Can Do For You
        </h2>
        <div className="grid md:grid-cols-6 gap-6">
          {/* Web Development (Featured, Bigger Card) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="md:col-span-2 md:row-span-2 rounded-2xl bg-purple-800/10 p-10 shadow-md transition flex flex-col items-center text-center justify-center"
          >
            <FaCode className="text-6xl text-cyan-400 mb-6" />
            <h3 className="text-2xl font-semibold text-purple-300 mb-4">
              Web Development
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Building fast, scalable websites using React, Next.js, and also{" "}
              <span className="text-purple-400 font-medium">
                Shopify & WordPress
              </span>{" "}
              for flexible solutions. From landing pages to full-stack web apps,
              I ensure performance and user delight.
            </p>
          </motion.div>

          {/* Graphic & Brand Design */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="md:col-span-2 rounded-2xl bg-purple-800/10 p-8 shadow-md transition flex flex-col items-center text-center"
          >
            <FaPencilRuler className="text-5xl text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              Graphic & Brand Design
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting memorable brand identities, social designs, and sleek
              visuals that speak louder than words.
            </p>
          </motion.div>

          {/* UI/UX Design */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="md:col-span-2 rounded-2xl bg-purple-800/10 p-8 shadow-md transition flex flex-col items-center text-center"
          >
            <SiFigma className="text-5xl text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              UI/UX Design
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Designing interfaces that are not just beautiful, but intuitive
              and user-first for websites & apps.
            </p>
          </motion.div>

          {/* Shopify */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="md:col-span-2 rounded-2xl bg-purple-800/10 p-8 shadow-md transition flex flex-col items-center text-center"
          >
            <SiShopify className="text-5xl text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              Shopify Development
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Custom Shopify stores tailored for eCommerce brands that need
              performance, scalability, and sleek design.
            </p>
          </motion.div>

          {/* Data Analysis and Project Writing */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="md:col-span-2 rounded-2xl bg-purple-800/10 p-8 shadow-md transition flex flex-col items-center text-center"
          >
            <FaChartBar className="text-5xl text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              Data Analysis & Project Writing
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Analyzing & Transforming raw data into actionable insights,
              visualization, to empower decision-making, alongside academic and
              professional project writing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] w-full my-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* How I Work (Process) */}
      <section className="container mx-auto px-6 max-w-7xl py-12">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-8">
          How I Work
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 bg-purple-800/8 shadow-md text-center">
            <h4 className="font-semibold text-white mb-2">1. Discover</h4>
            <p className="text-gray-300 text-sm">
              We talk about your goals, audience and what success looks like.
            </p>
          </div>
          <div className="rounded-2xl p-6 bg-purple-800/8 shadow-md text-center">
            <h4 className="font-semibold text-white mb-2">2. Plan</h4>
            <p className="text-gray-300 text-sm">
              I create a clear plan with design direction, scope and timeline.
            </p>
          </div>
          <div className="rounded-2xl p-6 bg-purple-800/8 shadow-md text-center">
            <h4 className="font-semibold text-white mb-2">3. Build</h4>
            <p className="text-gray-300 text-sm">
              Design and development happen together — tested and polished.
            </p>
          </div>
          <div className="rounded-2xl p-6 bg-purple-800/8 shadow-md text-center">
            <h4 className="font-semibold text-white mb-2">4. Launch</h4>
            <p className="text-gray-300 text-sm">
              I hand off files, provide support, and help you go live smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] w-full my-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* FAQ (Accordion) */}
      <section className="container mx-auto px-6 max-w-7xl py-12">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <details className="group rounded-2xl p-5 bg-purple-800/8">
            <summary className="cursor-pointer font-medium text-white list-none">
              How long does a typical website project take?
            </summary>
            <div className="mt-3 text-gray-300 text-sm">
              Timelines vary by scope, a website design and development can be
              completed and delivered in few days to weeks depending on the
              complexity. I’ll share a clear timeline after the discovery call.
            </div>
          </details>

          <details className="group rounded-2xl p-5 bg-purple-800/8">
            <summary className="cursor-pointer font-medium text-white list-none">
              Do you work with clients outside my country?
            </summary>
            <div className="mt-3 text-gray-300 text-sm">
              Yes, I work with clients globally. We communicate over email,
              calls, and collaboration tools to keep things smooth.
            </div>
          </details>

          <details className="group rounded-2xl p-5 bg-purple-800/8">
            <summary className="cursor-pointer font-medium text-white list-none">
              Will I be able to update the site myself?
            </summary>
            <div className="mt-3 text-gray-300 text-sm">
              Absolutely. I can build sites on WordPress or provide a simple
              admin panel and documentation so you can make edits easily.
            </div>
          </details>

          <details className="group rounded-2xl p-5 bg-purple-800/8">
            <summary className="cursor-pointer font-medium text-white list-none">
              Can you handle both design and development?
            </summary>
            <div className="mt-3 text-gray-300 text-sm">
              Yes, I handle everything from UI/UX design to front-end and basic
              back-end development. This helps maintain a consistent look and
              feel across your project.
            </div>
          </details>

          <details className="group rounded-2xl p-5 bg-purple-800/8">
            <summary className="cursor-pointer font-medium text-white list-none">
              Do you redesign existing websites?
            </summary>
            <div className="mt-3 text-gray-300 text-sm">
              Definitely. I can audit your current website, modernize its
              layout, improve performance, and enhance user experience without
              losing your existing content or SEO value.
            </div>
          </details>

          <details className="group rounded-2xl p-5 bg-purple-800/8">
            <summary className="cursor-pointer font-medium text-white list-none">
              What do you need from me to get started?
            </summary>
            <div className="mt-3 text-gray-300 text-sm">
              I’ll need your brand assets (logo, colors, content, etc.), a short
              description of your goals, and any reference websites or
              inspirations you have in mind.
            </div>
          </details>

          <details className="group rounded-2xl p-5 bg-purple-800/8">
            <summary className="cursor-pointer font-medium text-white list-none">
              What if I need support after launch?
            </summary>
            <div className="mt-3 text-gray-300 text-sm">
              I offer ongoing support and maintenance options — or one-off
              updates. We can discuss the right plan for your needs.
            </div>
          </details>

          <details className="group rounded-2xl p-5 bg-purple-800/8">
            <summary className="cursor-pointer font-medium text-white list-none">
              Can you integrate third-party tools like payment gateways or
              booking systems?
            </summary>
            <div className="mt-3 text-gray-300 text-sm">
              Absolutely. I can integrate systems like Paystack, Stripe,
              WhatsApp, Calendly, or others that fit your business workflow.
            </div>
          </details>

          <details className="group rounded-2xl p-5 bg-purple-800/8">
            <summary className="cursor-pointer font-medium text-white list-none">
              What if I don’t have a design idea yet?
            </summary>
            <div className="mt-3 text-gray-300 text-sm">
              No problem at all. I’ll help you with creative direction — from
              color palette and typography to layout suggestions — that align
              perfectly with your brand personality.
            </div>
          </details>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="px-6 md:px-20 text-center py-14 bg-gradient-to-r from-amber-900/10 to-purple-950/50"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Ready to bring your ideas to life?
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Whether you need branding, a modern UI/UX, or a powerful website, I’ll
          deliver work that makes an impact.
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
        </div>
      </section>
    </main>
  );
}
