export default function Brands() {
  const brandList = [
    { name: 'Red Bull Media House', subtitle: 'Sports & Adventure' },
    { name: 'MKBHD Studios', subtitle: 'Consumer Tech' },
    { name: 'Acquisition.com', subtitle: 'Business Education' },
    { name: 'Beast Philanthropy', subtitle: 'Entertainment & Charity' },
    { name: 'Logitech G', subtitle: 'Gaming & Hardware' },
    { name: 'Ali Abdaal', subtitle: 'Productivity Media' },
    { name: 'Gadzhi Media', subtitle: 'Educational Content' },
    { name: 'Riot Games', subtitle: 'Esports Broadcasts' }
  ]

  // Duplicate the array to create a seamless infinite scroll loop
  const doubleBrands = [...brandList, ...brandList, ...brandList]

  return (
    <section className="py-16 bg-black border-t border-zinc-950 overflow-hidden relative select-none">
      
      {/* Side gradients to mask the edges of the scrolling marquee */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <h3 className="text-zinc-500 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest">
          COLLABORATIONS WITH LEADING MEDIA PLATFORMS & CREATOR ENTERPRISES
        </h3>
      </div>

      {/* Marquee track */}
      <div className="relative w-full flex items-center">
        <div className="animate-marquee flex gap-8 py-2">
          {doubleBrands.map((brand, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-center items-center px-8 py-3.5 min-w-[220px] bg-zinc-950/20 border border-zinc-900/40 rounded-xl hover:border-brand-red/30 hover:bg-zinc-950/80 transition-all duration-300"
            >
              <span className="text-base sm:text-lg font-bold text-zinc-550 group-hover:text-brand-red group-hover:text-glow-red transition-all duration-300 tracking-tight">
                {brand.name}
              </span>
              <span className="text-[8px] font-mono text-zinc-650 group-hover:text-zinc-555 transition-all duration-300 mt-1.5 uppercase tracking-wider">
                {brand.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
