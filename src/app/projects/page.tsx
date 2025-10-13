"use client";

import { useState } from "react";
// import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  category: "Branding & Graphics" | "Website & UI/UX" | "Others";
  image: string;
  link?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Temi's Trove Branding",
    category: "Branding & Graphics",
    image: "/Temi Trove Fruit Parfait.png",
  },
  {
    id: 2,
    title: "Flourishmore Electricals Branding",
    category: "Branding & Graphics",
    image: "/FlourishMore1.jpg",
  },
  {
    id: 3,
    title: "Crybaby Tattoo Website",
    category: "Website & UI/UX",
    image: "/CrybabyTattoo.png",
    link: "https://crybabytattooproducts.com",
  },
  {
    id: 4,
    title: "Podcast Social Media Ads",
    category: "Others",
    image: "/ALTE MDT 1_050714.jpg",
  },
  {
    id: 5,
    title: "Mighticiti Website",
    category: "Website & UI/UX",
    image: "/mighticiti.jpg",
    link: "https://mighticiti.com",
  },
  {
    id: 6,
    title: "Mission Aware Defense",
    category: "Website & UI/UX",
    image: "/missionaware-cover.png",
  },
  {
    id: 7,
    title: "Press Print Pro",
    category: "Website & UI/UX",
    image: "/pressprintpro-cover.png",
    link: "http://pressprintpro.espwebsites.com",
  },
  {
    id: 8,
    title: "Impress Athletix",
    category: "Website & UI/UX",
    image: "/impressathletix.jpg",
    link: "https://impressathletix.com",
  },
  {
    id: 9,
    title: "Podcast Print Designs",
    category: "Branding & Graphics",
    image: "/podcast-print-designs.jpg",
  },
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "Branding & Graphics",
    "Website & UI/UX",
    "Others",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="pt-15 bg-[#0a0714] text-[#F5F5F5] selection:bg-purple-600/30 selection:text-white"
    >
      <section className="relative h-[50vh] flex items-center justify-center">
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
          My Projects
        </motion.h1>
      </section>

      <div className="container mx-auto px-6 pt-10 text-center">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? "rounded-2xl bg-gradient-to-br from-purple-600 to-amber-400 px-6 py-3 font-semibold text-[#0a0714] shadow-lg shadow-purple-900/30 transition hover:brightness-110"
                  : "rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="cursor-pointer group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <p className="text-white font-semibold text-lg">
                  {project.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

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

      {/* Modal Popup */}
      {activeProject && (
        <div
          // Overlay: clicking this closes modal
          onClick={() => setActiveProject(null)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
        >
          {/* Content: stop propagation so clicks inside modal don't close it */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 rounded-2xl shadow-lg p-6 max-w-lg w-full relative"
            style={{ maxHeight: "90vh", overflowY: "auto" }}
          >
            {/* Floating close button (always visible) */}
            <button
              onClick={() => setActiveProject(null)}
              aria-label="Close project modal"
              className="fixed top-6 right-6 z-[60] bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
            >
              ✕
            </button>

            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-white-900 mb-3">
              {activeProject.title}
            </h3>
            {activeProject.link && (
              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
              >
                View Site
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
