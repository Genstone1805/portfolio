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
    title: "ECS Patches",
    category: "Website & UI/UX",
    image: "/ecspatches.png",
    link: "https://ecspatches.com/",
  },
  {
    id: 2,
    title: "Temi's Trove Branding",
    category: "Branding & Graphics",
    image: "/Temi Trove Fruit Parfait.png",
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
    title: "Flourishmore Electricals Branding",
    category: "Branding & Graphics",
    image: "/FlourishMore1.jpg",
  },
  {
    id: 5,
    title: "Meet me Social Media Ads",
    category: "Others",
    image: "/ALTE MDT 1_050714.jpg",
  },
  {
    id: 6,
    title: "Mighticiti Website",
    category: "Website & UI/UX",
    image: "/mighticiti.jpg",
    link: "https://mighticiti.com",
  },
  {
    id: 7,
    title: "Mission Aware Defense",
    category: "Website & UI/UX",
    image: "/AwareDefenseHomeBanner.PNG",
    link: "https://mission-aware-tactical-ui.lovable.app/",
  },
  {
    id: 8,
    title: "Press Print Pro",
    category: "Website & UI/UX",
    image: "/pressprintpro-espwebsites.png",
    link: "http://pressprintpro.espwebsites.com",
  },
  {
    id: 9,
    title: "Impress Athletix",
    category: "Website & UI/UX",
    image: "/impressathletix.PNG",
    link: "https://impressathletix.com",
  },
  {
    id: 10,
    title: "Cookbook",
    category: "Branding & Graphics",
    image: "/P4JQUM1.jpg",
  },
  {
    id: 11,
    title: "Temi's Trove Logo",
    category: "Branding & Graphics",
    image: "/TemisTrove.jpg",
  },
  {
    id: 12,
    title: "Gbemi Splendid",
    category: "Branding & Graphics",
    image: "/GbemSplemdid.jpg",
  },
  {
    id: 13,
    title: "Hero Medallion",
    category: "Website & UI/UX",
    image: "/heromedallions.png",
    link: "https://heromedallions.com/",
  },
  {
    id: 14,
    title: "Sapient Ragal",
    category: "Branding & Graphics",
    image: "/sapientRagalLogo.jpg",
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
      className="pt-12 bg-[#0a0714] text-[#F5F5F5] selection:bg-purple-600/30 selection:text-white"
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

      {/* Divider */}
      <div className="h-[1px] w-full my-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* WHY ME / WHY WORK WITH ME */}
      <section className="py-6 container mx-auto px-6 max-w-7xl">
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

      {/* FAQ (Accordion) */}
      <section className="container mx-auto px-6 max-w-7xl py-8">
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
