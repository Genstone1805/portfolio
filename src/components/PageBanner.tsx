"use client";
import { motion } from "framer-motion";

export default function ServicesPage({ title }: { title: string }) {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <img
        src="/page-banner.webp"
        alt="Services Background"
        className="object-cover absolute opacity-40 inset-0"
      />
      <div className="absolute inset-0 bg-purple-950/90 "></div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-5xl font-bold text-center text-white drop-shadow-lg"
      >
        {title}
      </motion.h1>
    </section>
  );
}
