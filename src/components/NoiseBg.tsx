export default function NoiseBg() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_50%_-10%,rgba(110,43,242,0.25),transparent),radial-gradient(40rem_40rem_at_10%_110%,rgba(245,158,11,0.15),transparent)]" />
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.2'/></svg>')",
        }}
      />
      <div className="absolute inset-x-0 top-[35%] -z-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}
