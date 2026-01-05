// components/TechStackMarquee.tsx
import Image from "next/image";

const techStack = [
  { rating: 4, name: "React", logo: "/languages/react.webp", },
  { rating: 3, name: "Next.js", logo: "/languages/nextjs.webp" },
  { rating: 5, name: "SvelteKit", logo: "/languages/sveltekit.webp" },
  { rating: 5, name: "Tailwind CSS", logo: "/languages/tailwind.webp" },
  { rating: 5, name: "JavaScript", logo: "/languages/javascript.webp" },
  { rating: 3, name: "MySQL", logo: "/languages/mysql.webp" },
  { rating: 5, name: "Python", logo: "/languages/python.webp" },
  { rating: 3, name: "FastAPI", logo: "/languages/fastapi.webp" },
  { rating: 5, name: "Django", logo: "/languages/django.webp" },
  { rating: 5, name: "Shopify", logo: "/languages/shopify.webp" },
  { rating: 4, name: "Wordpress", logo: "/languages/wordpress.webp" },
  { rating: 5, name: "HTML", logo: "/languages/html.webp" },
  { rating: 5, name: "CSS", logo: "/languages/css.webp" },
  { rating: 3, name: "Postgress", logo: "/languages/postgress.webp" },
];

export default function TechStackMarquee() {
  return (
    <section className="border-y border-white/5 bg-purple-600/10 w-full overflow-hidden py-4">
      
      <div className="group relative">
        <div className="flex w-max animate-marquee gap-14 px-6 group-hover:[animation-play-state:paused]">
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              <div
              className="md:size-20 size-16 bg-gray-200 relative p-1 overflow-hidden rounded-full flex items-center content-center"
              >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={48}
                height={48}
                className="object-contain grayscale-0 transition duration-300 hover:grayscale size-full"
              />
              </div>
              <span className="mt-2 text-sm font-medium text-white">
                {tech.name}
              </span>

              {/* Rating */}
              <div className="mt-2 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className={`h-4 w-4 ${
                      i < tech.rating
                        ? "text-yellow-500"
                        : "text-gray-600"
                    }`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
