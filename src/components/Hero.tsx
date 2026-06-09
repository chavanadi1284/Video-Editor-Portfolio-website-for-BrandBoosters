import { Play, ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4 sm:px-6 lg:px-8">
      {/* Background Loop: Hardware-Accelerated Native HTML5 Video Loop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Dark Vignettes & Soft Red Ambient Halo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/70 to-brand-black z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.12)_0%,transparent_60%)] z-10" />
        
        {/* Native HTML5 Video (Plays instantly, no watermarks, no cookies, 100% reliable) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-35 scale-[1.02] transition-opacity duration-500"
          src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c02cba73e1c8578519992011326c7104&profile_id=165&oauth2_token_id=57447761"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto mt-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-800 bg-zinc-950/80 text-zinc-400 text-xs font-medium tracking-wider uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
          BrandBoosters Studio
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[0.95] text-white">
          WE DON'T JUST EDIT.
          <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-white text-glow-red">
            WE ENGINEER VISUAL
          </span>
          <span className="block mt-2 text-white">
            EXPERIENCE.
          </span>
        </h1>

        <p className="mt-8 text-base sm:text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
          A premium post-production studio partnering with world-class brands and creators. We combine narrative editing, cinematic color mastering, and visual effects to build digital authority.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('showreel')}
            className="group relative px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(229,9,20,0.45)] flex items-center gap-3 w-full sm:w-auto justify-center cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>EXPLORE SHOWREEL</span>
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 border border-zinc-850 hover:border-zinc-700 bg-zinc-950/40 hover:bg-zinc-950/85 text-zinc-300 hover:text-white font-bold rounded-lg transition-all duration-300 flex items-center gap-2.5 w-full sm:w-auto justify-center cursor-pointer"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Down Mouse Indicator */}
      <div 
        onClick={() => scrollToSection('showreel')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-300 hidden sm:flex"
      >
        <span className="text-zinc-500 text-[10px] tracking-widest font-mono uppercase">SCROLL</span>
        <div className="w-5 h-8 border border-zinc-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 bg-brand-red rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
