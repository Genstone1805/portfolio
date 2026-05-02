"use client";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import CTASection2 from "@/components/CTASection2";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";

type Project = {
  title: string;
  tag: string;
  image: string;
  link: string;
  dev?: boolean;
};

const projects: Project[] = [
  {
    title: "Mightyciti",
    tag: "Backend",
    image: "/projects/mightyciti.webp",
    link: "https://mightyciti.com/",
  },
  {
    title: "First Class Transfers",
    tag: "Backend",
    image: "/projects/firstclass.webp",
    link: "https://firstclasstransfers.eu/",
  },
  {
    title: "Vila Arpeggio",
    tag: "Backend",
    image: "/projects/vila.webp",
    link: "https://luzholidayvilla.com/",
  },
  {
    title: "Scaftech",
    tag: "Frontend",
    image: "/projects/scaftech.webp",
    link: "https://academy.scaftechservices.com/",
  },
  {
    title: "Open My Pro",
    tag: "backend",
    image: "/projects/omp.webp",
    link: "https://openmypro.com/",
  },
  {
    title: "Amp Motor Tech",
    tag: "development",
    image: "/projects/omp.webp",
    link: "https://amp-motor-tech.vercel.app/",
  },
  {
    title: "Silky Blinks",
    tag: "Shopify",
    image: "/projects/silkyblink.webp",
    link: "https://silkyblink.com/",
  },
  {
    title: "Kyshmysh",
    tag: "Shopify",
    image: "/projects/lash.webp",
    link: "https://www.kyshmysh.com",
  },
  {
    title: "Lock Hub Cars",
    tag: "Shopify",
    image: "/projects/car.webp",
    link: "https://lockhubcars.com/",
  },
  {
    title: "Anki Remote",
    tag: "Shopify",
    image: "/projects/anki.webp",
    link: "https://www.ankiremote.com/",
  },
  {
    title: "Mission Aware Defense",
    tag: "Lovable",
    image: "/projects/AwareDefenseHomeBanner.webp",
    link: "https://awaredefense.us/",
  },
  {
    title: "Mustard Vertual Card",
    tag: "Mobile App",
    image: "/projects/mustard.webp",
    link: "https://mustard.ng/index",
  },
  {
    title: "Press Print Pro",
    tag: "Shopify",
    image: "/projects/RDExpressPrints.webp",
    link: "https://pressprintpro.com/",
  },
  {
    title: "Impress Athletix",
    tag: "Big Commerce",
    image: "/projects/impressathletix.webp",
    link: "https://impressathletix.com/",
  },
  {
    title: "Crybaby Tattoo",
    tag: "Shopify",
    image: "/projects/CrybabyTattoo.webp",
    link: "https://crybabytattooproducts.com/",
  },
  {
    title: "Carplay NAv",
    tag: "Shopify",
    image: "/projects/carplay.webp",
    link: "https://carplaynav.com/",
  },
  {
    title: "Hero Medallions",
    tag: "Shopify",
    image: "/projects/heromedallions.webp",
    link: "https://heromedallions.com/",
  },
  {
    title: "Black DOg Ink",
    tag: "Shopify",
    image: "/projects/blackDog.webp",
    link: "https://blackdogink.com.au/",
  },
  {
    title: "Nexus",
    tag: "Shopify",
    image: "/projects/nexus.webp",
    link: "https://www.nexus-sportsmed.com/",
  },
  {
    title: "MB Prototyping",
    tag: "Shopify",
    image: "/projects/mbPrototype.webp",
    link: "https://www.mbprototyping.com/",
  },
  {
    title: "Mb Hair",
    tag: "Shopify",
    image: "/projects/mbHair.webp",
    link: "https://www.markbirchhair.ae/",
  },
  {
    title: "Psacot",
    tag: "Wordpress",
    image: "/projects/psacot.webp",
    link: "https://psacot.com/",
  },
  {
    title: "Black Friday",
    tag: "Lovable",
    image: "/projects/blackFriday.webp",
    link: "https://lovable.dev/projects/f818b6fe-5f97-4080-8ed2-45382e9032aa",
    dev: true,
  },
  {
    title: "Mc Clure Tables",
    tag: "Shopify",
    image: "/projects/mcClure.webp",
    link: "https://mccluretables.com/",
  },
  {
    title: "E-Residence",
    tag: "Shopify",
    image: "/projects/eResidence.webp",
    link: "https://e-residence.com/",
    dev: true,
  },
  {
    title: "Mr Abraham",
    tag: "Developing",
    image: "/projects/mrAbraham.webp",
    link: "https://mr-abraham-project-preview.vercel.app/",
    dev: true,
  },
  {
    title: "Mr West",
    tag: "Developing",
    image: "/projects/mrWest.webp",
    link: "https://mr-west.vercel.app/#",
    dev: true,
  },
  {
    title: "Wise Essentials",
    tag: "Shopify",
    image: "/projects/wiseEssentials.webp",
    link: "https://wiseessentials.com/",
  },
  {
    title: "Orca Divers",
    tag: "Wordpress",
    image: "/projects/dive.webp",
    link: "https://pink-porpoise-701989.hostingersite.com/",
  },
  {
    title: "ECS Patches",
    tag: "Shopify",
    image: "/projects/ecspatches.webp",
    link: "https://ecspatches.com/",
  },
  {
    title: "Total Cards",
    tag: "Shopify",
    image: "/projects/leggos.webp",
    link: "https://totalcards.net/",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="pt-12 bg-[#0a0714] text-[#F5F5F5] selection:bg-purple-600/30 selection:text-white"
    >
      <PageBanner title="My Projects" />

      <div className="container mx-auto px-6 pt-10 text-center">
        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {projects.map((project, i) => (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className="cursor-pointer group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center flex-col justify-center transition space-y-2">
                <p className="text-white font-semibold text-lg">
                  {project.dev ? "This project in development" : project.title}
                </p>
                <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
                  View Site
                </div>
              </div>
            </Link>
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

      <FAQ />

      {/* CTA Section */}
      <CTASection2 />
    </section>
  );
}
