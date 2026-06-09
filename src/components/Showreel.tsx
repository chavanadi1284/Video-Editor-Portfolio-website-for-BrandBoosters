import { useState } from 'react'
import { Play, X } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function Showreel() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="showreel" className="relative py-24 bg-brand-black px-4 sm:px-6 lg:px-8 border-t border-zinc-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              THE <span className="text-brand-red text-glow-red">SHOWREEL</span>
            </h2>
            <div className="w-12 h-[1px] bg-brand-red mx-auto mt-4" />
            <p className="text-zinc-400 mt-4 max-w-xl mx-auto font-light text-sm sm:text-base leading-relaxed">
              Our master reel features a curated compilation of editorial direction, color mastering, and visual effects for commercial, brand, and creative partners.
            </p>
          </div>
        </ScrollReveal>

        {/* Cinematic Play Card */}
        <ScrollReveal delay={200}>
          <div 
            onClick={() => setIsOpen(true)}
            className="interactive-card group relative aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950/20 cursor-pointer shadow-2xl transition-all duration-500 hover:scale-[1.005] glow-border"
          >
            {/* Cover Image */}
            <img 
              src="/showreel_thumbnail.png" 
              alt="Showreel Preview" 
              className="w-full h-full object-cover opacity-65 group-hover:opacity-75 group-hover:scale-102 transition-all duration-700"
              loading="lazy"
            />

            {/* Color overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            
            {/* Metadata */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 z-20">
              <span className="text-brand-red text-xs font-mono tracking-widest uppercase mb-1">BRANDBOOSTERS STUDIOS</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase transition-colors duration-300">
                Master Showcase Reel
              </h3>
            </div>

            {/* Pulsing Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="relative flex items-center justify-center">
                {/* Outer pulsing rings */}
                <div className="absolute w-20 h-20 rounded-full border border-brand-red/25 bg-brand-red/5 animate-ping duration-1000" />
                <div className="absolute w-14 h-14 rounded-full border border-brand-red/35 animate-pulse duration-700" />
                
                {/* Core button */}
                <button 
                  className="w-14 h-14 rounded-full bg-brand-red flex items-center justify-center shadow-[0_0_20px_rgba(229,9,20,0.6)] hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-all duration-300 group-hover:scale-105"
                  aria-label="Play Showreel"
                >
                  <Play className="w-5 h-5 fill-white text-white group-hover:fill-brand-black group-hover:text-brand-black ml-0.5 transition-colors duration-300" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Video Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md transition-opacity duration-300 animate-fadeIn">
          {/* Close button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2.5 text-zinc-400 hover:text-brand-red hover:scale-105 transition-all z-50 bg-zinc-900/60 rounded-full border border-zinc-800"
            aria-label="Close video modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video Container */}
          <div className="w-full max-w-5xl aspect-video bg-zinc-950 rounded-lg overflow-hidden border border-zinc-900 shadow-[0_0_40px_rgba(229,9,20,0.2)]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/y9j-NF99r3o?autoplay=1&rel=0"
              title="BrandBoosters Master Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
