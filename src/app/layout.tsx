import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#0a0714] text-gray-300 selection:bg-purple-600/30 selection:text-gray-300`}
      >
        <Nav />
        <ScrollProgress />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
