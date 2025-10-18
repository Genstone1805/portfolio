import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import Testimonials from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import NoiseBg from "@/components/NoiseBg";
import BrandsBar from "@/components/BrandsBar";
import ScrollProgress from "@/components/ScrollProgress";
// import { desc } from "framer-motion/client";

// Example testimonials data; replace with your actual data or import as needed
const testimonials = [
  {
    name: "Mighticiti",
    quote:
      "Blessing Jacob turned our vision and website experience into a premium digital product that feels world-class. Everyone loves it.",
    role: "Mighticiti Founder",
  },
  {
    name: "Temi T",
    quote:
      "He took scattered ideas and built a brand system that looks polished and professional. It instantly built trust.",
    role: "Founder, Temi's Trove",
  },
];

const projects = () => [
  // {
  //   title: "Mighticiti Website",
  //   tag: "Web Design & Development",
  //   description:
  //     "A clean, professional website built to give the brand a trustworthy digital presence with smooth user experience.",
  //   img: "/projects/mighticiti-cover.png",
  //   href: "/projects",
  // },

  {
    title: "Logo and Brand Identity Designs",
    tag: "Logo & Brand Identity",
    description:
      "Designed a warm and premium visual identity with logo, brand colors, and print materials that reflect elegance and trust.",
    img: "/design-awesome-monogram-or-initial-letter-logo.png",
    href: "/projects",
  },

  // {
  //   title: "Flourishmore Electricals",
  //   tag: "Logo & Brand Identity",
  //   description:
  //     "Created a simple yet bold brand identity system that communicates reliability and professionalism.",
  //   img: "/projects/flourishmore-cover.png",
  //   href: "/projects",
  // },

  {
    title: "Mission Aware Defense",
    tag: "Web Design",
    description:
      "Concept design for a defense brand website, combining clarity, confidence, and modern structure.",
    img: "/AwareDefenseHomeBanner.PNG",
    href: "/projects",
  },

  {
    title: "Press Print Pro",
    tag: "Web Design & Development",
    description:
      "A responsive print-on-demand website built to make ordering faster and more seamless for customers.",
    img: "/RDExpressPrints.PNG",
    href: "/projects",
  },

  {
    title: "Crybaby Tattoo",
    tag: "E-Commerce Website",
    description:
      "Designed and developed a bold, artistic e-commerce website that fits the creative vibe of the tattoo brand.",
    img: "CrybabyTattoo.png",
    href: "/projects",
  },

  {
    title: "Impress Athletix",
    tag: "E-Commerce Website",
    description:
      "Built a fast, energetic online store that reflects the brand’s athletic spirit and premium look.",
    img: "/RDExpressPrints.PNG",
    href: "/projects",
  },

  {
    title: "E Magazines and Other Designs",
    tag: "Graphic Design",
    description:
      "Created social media visuals, print designs and a lot more for brands, maintaining consistent and catchy style.",
    img: "/P4JQUM1.jpg",
    href: "/projects",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden min-h-screen bg-[#0a0714] text-[#F5F5F5] selection:bg-purple-600/30 selection:text-white">
      <NoiseBg />
      <ScrollProgress />
      <Hero />
      <BrandsBar />
      <About />
      <div className="h-[1px] w-full my-8 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <ServicesSection />
      <div className="h-[1px] w-full my-8 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <ProjectsSection projects={projects()} />
      <div className="h-[1px] w-full my-8 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <Testimonials data={testimonials} />
      <div className="h-[1px] w-full my-8 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <CTASection />
    </main>
  );
}
