import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import Testimonials from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import NoiseBg from "@/components/NoiseBg";
import BrandsBar from "@/components/BrandsBar";
import ScrollProgress from "@/components/ScrollProgress";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gusanu Joshua | Full Stack Developer",
  description:
    "Building fast, secure, and scalable web solutions with modern frontend, backend APIs, CMS platforms, and automation",
  openGraph: {
    title: "Gusanu Joshua | Full Stack Developer",
    description:
      "Building fast, secure, and scalable web solutions with modern frontend, backend APIs, CMS platforms, and automation",
    url: "/",
    siteName: "Gusanu Joshua",
    images: [{ url: "/graph.webp", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

const testimonials = [
  {
    name: "Aduraleke",
    image: "/team/adura.webp",
    quote:
      "Aduraleke is part of the frontend team, focused on turning designs into smooth, responsive user interfaces. He contributes clean, reliable code and helps deliver consistent and user-friendly web experiences.",
    role: "Frontend Developer",
  },
  {
    name: "Jcob (B-Code)",
    image: "/team/blessingjacob.webp",
    quote:
      "Jacob is a key member of the product team, bridging design and development. He helps shape intuitive user experiences, creates strong visual designs, and supports frontend implementation to ensure ideas are delivered clearly.",
    role: "UI/UX Designer, Graphic Designer & Frontend Developer",
  },
];

const projects = () => [
  {
    title: "Anki Remote",
    tag: "Shopify Migration",
    description:
      "Optimized theme assets, Liquid logic, and migrated the site to Shopify.",
    img: "/projects/anki.webp",
    href: "https://www.ankiremote.com/",
  },
  {
    title: "Mission Aware Defense",
    tag: "Lovable Project",
    description:
      "Maintained clean, reusable, and scalable component structures.",
    img: "/projects/AwareDefenseHomeBanner.webp",
    href: "https://awaredefense.us/",
  },
  {
    title: "Press Print Pro",
    tag: "Shopify Migration",
    description:
      "Analyzed the existing platform and migrated the site to Shopify.",
    img: "/projects/RDExpressPrints.webp",
    href: "https://pressprintpro.com/",
  },
  {
    title: "Impress Athletix",
    tag: "Big Commerce Theme",
    description:
      "Built a BigCommerce themes using Stencil, Handlebars, and modern frontend.",
    img: "/projects/impressathletix.webp",
    href: "https://impressathletix.com/",
  },
  {
    title: "Crybaby Tattoo",
    tag: "Shopify Theme Development",
    description:
      "Built custom Shopify theme from scratch using Shopify Liquid.",
    img: "/projects/CrybabyTattoo.webp",
    href: "https://crybabytattooproducts.com/",
  },
  {
    title: "Carplay NAv",
    tag: "Shopify Theme",
    description:
      "Built a BigCommerce themes using Stencil, Handlebars, and modern frontend.",
    img: "/projects/carplay.webp",
    href: "https://carplaynav.com/",
  },
  // {
  //   title: "Mightyciti",
  //   tag: "Developing",
  //   description:
  //     "Built a BigCommerce themes using Stencil, Handlebars, and modern frontend.",
  //   img: "/projects/mightyciti.webp",
  //   href: "https://mighticiti-v3-backend-hrav.vercel.app/",
  // },
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
