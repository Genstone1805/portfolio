"use client";

import FAQ from "@/components/FAQ";
import CTASection2 from "@/components/CTASection2";
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
        <img
          src="https://scopicsoftware.com/static/hero-background-ba7ab5d15dfafb129e2fe94bea2cad3b.jpg"
          alt="Services Background"
          className="object-cover absolute opacity-40 inset-0"
        />
        {/* <Image
          src="/services-bg.webp"
          alt="Services Background"
          fill
          className="object-cover opacity-40"
        /> */}
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
              Backend Development
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              A fast, secure, clean, well-structured, scalable and robust API
              systems that power reliable web applications.
            </p>
          </motion.div>

          {/* Graphic & Brand Design */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="md:col-span-2 rounded-2xl bg-purple-800/10 p-8 shadow-md transition flex flex-col items-center text-center"
          >
            <FaPencilRuler className="text-5xl text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              Frontend Development
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A modern user experience that follows SEO best practices, Core Web
              Vitals and strong performance across all devices.
            </p>
          </motion.div>

          {/* UI/UX Design */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="md:col-span-2 rounded-2xl bg-purple-800/10 p-8 shadow-md transition flex flex-col items-center text-center"
          >
            <SiFigma className="text-5xl text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              Site Management
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I manage websites for businesses by handling updates, monitoring
              performance, and keeping sites running smoothly and securely.
            </p>
          </motion.div>

          {/* Shopify */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="md:col-span-2 rounded-2xl bg-purple-800/10 p-8 shadow-md transition flex flex-col items-center text-center"
          >
            <SiShopify className="text-5xl text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              Content Management System
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I build, customize, and manage websites on CMS platforms like
              Shopify, WordPress, Wix, Shift4shop, Bigcommerce and other major
              CMS solutions.
            </p>
          </motion.div>

          {/* Data Analysis and Project Writing */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="md:col-span-2 rounded-2xl bg-purple-800/10 p-8 shadow-md transition flex flex-col items-center text-center"
          >
            <FaChartBar className="text-5xl text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              Automation & AI-Powered Solutions
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I create automated and AI-powered workflows on Zapier, Make, and
              other automation and AI platforms to reduce manual work and
              improve efficiency by connecting the right tools.
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

      <FAQ />

      {/* CTA Section */}
      <CTASection2 />
    </main>
  );
}
