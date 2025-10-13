"use client"; // (only if you're in app/ directory)

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const progressEl = progressRef.current;

    const setProgress = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      const pct = dh > 0 ? (st / dh) * 100 : 0;
      if (progressEl) {
        progressEl.style.width = pct + "%";
      }
    };

    window.addEventListener("scroll", setProgress, { passive: true });
    window.addEventListener("resize", setProgress);
    setProgress();

    return () => {
      window.removeEventListener("scroll", setProgress);
      window.removeEventListener("resize", setProgress);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        ref={progressRef}
        className="fixed left-0 top-0 z-50 h-1 w-0 origin-left bg-gradient-to-r from-purple-500 via-fuchsia-500 to-amber-400"
      ></div>

      {/* Background (Noise + Blobs + Divider line) */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-blobs"></div>
        <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-noise"></div>
        <div className="absolute inset-x-0 top-[35%] -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
    </>
  );
}
