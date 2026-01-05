import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Gusanu Joshua. | Full Stack Developer",
//   description:
//     "Portfolio of Gusanu Joshua.",
//   openGraph: {
//     title: "Blessing Jacob A. | Designer & Developer",
//     description: "Portfolio of Blessing Jacob A. (Bcode)",
//     url: "https://yourdomain.com",
//     siteName: "Bcode",
//     images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
//     locale: "en_US",
//     type: "website",
//   },
//   icons: {
//     icon: [
//       { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
//       { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
//       { url: "/favicon.ico", type: "image/x-icon" },
//     ],
//     apple: [
//       { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
//     ],
//     other: [
//       { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
//       { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
//     ],
//   },
// };

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
