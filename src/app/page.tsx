import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import Testimonials from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import NoiseBg from "@/components/NoiseBg";
import BrandsBar from "@/components/BrandsBar";
import ScrollProgress from "@/components/ScrollProgress";

const testimonials = [
  {
    name: "Aduraleke",
    image: "/team/adura.webp",
    quote:
      "Aduraleke is part of the frontend team, focused on turning designs into smooth, responsive user interfaces. He contributes clean, reliable code and helps deliver consistent and user-friendly web experiences.",
    role: "Frontend Developer",
  },
  {
    name: "Jacob (B-Code)",
    image: "/team/blessingjacob.webp",
    quote:
      "Jacob is a key member of the product team, bridging design and development. He helps shape intuitive user experiences, creates strong visual designs, and supports frontend implementation to ensure ideas are delivered clearly.",
    role: "UI/UX Designer, Graphic Designer & Frontend Developer",
  },
];

const projects = () => [
  {
    title: "Mightyciti",
    tag: "Backend and Dev Hubs",
    description:
      "Built the whole backend and managing the production environment",
    img: "/projects/mightyciti.webp",
    link: "https://mightyciti.com/",
  },
  {
    title: "First Class Transfers",
    tag: "Backend",
    img: "/projects/firstclass.webp",
    description: "Built the whole backend",
    link: "https://firstclasstransfers.eu/",
  },

  {
    title: "Vila Arpeggio",
    tag: "Frontend",
    description: "Designed the whole frontend",
    img: "/projects/vila.webp",
    link: "https://luzholidayvilla.com/",
  },
  {
    title: "Scaftech",
    tag: "Frontend",
    description: "Designed and structured the whole frontend",
    img: "/projects/scaftech.webp",
    link: "https://academy.scaftechservices.com/",
  },
  {
    title: "Open My Pro",
    tag: "backend",
    description: "Worked on the backend",
    img: "/projects/omp.webp",
    link: "https://openmypro.com/",
  },
  {
    title: "Anki Remote",
    tag: "Shopify",
    description: "Built the theme and migrated the store to shopify",
    img: "/projects/anki.webp",
    link: "https://www.ankiremote.com/",
  },
  {
    title: "Kyshmysh",
    tag: "Shopify",
    img: "/projects/lash.webp",
    description: "Built the theme, Redesigned and optimized the store",
    link: "https://www.kyshmysh.com",
  },
  {
    title: "Lock Hub Cars",
    tag: "Shopify",
    img: "/projects/car.webp",
    description:
      "Redesigned the product page using liquid and optimized the store",
    link: "https://lockhubcars.com/",
  },
  {
    title: "Mission Aware Defense",
    tag: "Lovable",
    description:
      "Maintained clean, reuseable and scalable component structures",
    img: "/projects/AwareDefenseHomeBanner.webp",
    link: "https://awaredefense.us/",
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
