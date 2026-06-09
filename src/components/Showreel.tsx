import { useState } from 'react'
import { Play, Film, Zap, Palette, Layers } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

interface ReelItem {
  id: string
  title: string
  subtitle: string
  desc: string
  category: string
  thumbnail: string
  videoUrl: string
  aspectRatio: '16:9' | '9:16'
  duration: string
  icon: typeof Film
}

export default function Showreel() {
  const reels: ReelItem[] = [
    {
      id: 'master',
      title: 'Master Showcase Reel 2026',
      subtitle: 'Creative Studio Showreel',
      desc: 'Our flagship compilation demonstrating cinematic storytelling, structural pacing, soundscapes, and comprehensive post-production direction.',
      category: 'Master Reel',
      thumbnail: '/showreel_thumbnail.png',
      videoUrl: 'https://www.youtube.com/embed/_8nO4rpeo0E?autoplay=1&rel=0',
      aspectRatio: '16:9',
      duration: '1:45',
      icon: Film
    },
    {
      id: 'commercial',
      title: 'Commercial & Brand Campaigns',
      subtitle: 'Advertising Showcase',
      desc: 'High-impact product ads and commercial campaigns. Focuses on razor-sharp visual transitions, speed-ramping, and brand storytelling.',
      category: 'Commercials',
      thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/y9j-NF99r3o?autoplay=1&rel=0',
      aspectRatio: '16:9',
      duration: '1:10',
      icon: Zap
    },
    {
      id: 'vertical',
      title: 'Vertical Social Hook Cut',
      subtitle: 'Short-Form Montage',
      desc: 'Staged vertical clips designed for modern platforms. We show our dynamic caption workflows, animation overlays, and attention-retention cuts.',
      category: 'Verticals',
      thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
      videoUrl: 'https://player.vimeo.com/video/517616641?autoplay=1&loop=1',
      aspectRatio: '9:16',
      duration: '0:45',
      icon: Layers
    },
    {
      id: 'color',
      title: 'Color Grading & VFX Mastering',
      subtitle: 'Grade Showcase',
      desc: 'Showcasing raw LOG files color-matched and stylized into rich, atmospheric color environments. Includes camera solves and tracking integrations.',
      category: 'Color & VFX',
      thumbnail: '/graded_car.png',
      videoUrl: 'https://www.youtube.com/embed/y9j-NF99r3o?autoplay=1&rel=0',
      aspectRatio: '16:9',
      duration: '1:20',
      icon: Palette
    }
  ]

  const [activeReel, setActiveReel] = useState<ReelItem>(reels[0])
  const [isPlaying, setIsPlaying] = useState(false)

  const handleSelectReel = (reel: ReelItem) => {
    setActiveReel(reel)
    setIsPlaying(false) // Reset inline playback on change
  }

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
              Explore our diverse post-production outputs. Select a showreel from the director track to view details and inline playback.
            </p>
          </div>
        </ScrollReveal>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Theater Display (Left 8 Columns) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <ScrollReveal className="h-full flex flex-col justify-between">
              {/* Screen Shell */}
              <div className="relative aspect-video w-full bg-black rounded-2xl overflow-hidden border border-zinc-900 shadow-2xl flex items-center justify-center">
                
                {isPlaying ? (
                  /* Inline Player */
                  activeReel.aspectRatio === '9:16' ? (
                    /* Vertical Video mockup overlay */
                    <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-3">
                      <div className="relative h-full aspect-[9/16] max-h-[360px] rounded-[30px] border-4 border-zinc-800 overflow-hidden bg-black shadow-2xl">
                        <iframe
                          className="w-full h-full absolute inset-0"
                          src={activeReel.videoUrl}
                          title={activeReel.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  ) : (
                    /* Widescreen Video Iframe */
                    <iframe
                      className="w-full h-full"
                      src={activeReel.videoUrl}
                      title={activeReel.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  )
                ) : (
                  /* Facade Overlay (Cover thumbnail + play) */
                  <div 
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 cursor-pointer group select-none"
                  >
                    <img
                      src={activeReel.thumbnail}
                      alt={activeReel.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-all duration-700 scale-[1.01] group-hover:scale-102"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
                    
                    {/* Pulsing Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-20 h-20 rounded-full border border-brand-red/25 bg-brand-red/5 animate-ping duration-1000" />
                        <div className="absolute w-14 h-14 rounded-full border border-brand-red/35 animate-pulse duration-700" />
                        <button
                          className="w-14 h-14 rounded-full bg-brand-red flex items-center justify-center shadow-[0_0_20px_rgba(229,9,20,0.6)] group-hover:bg-white group-hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-all duration-300 group-hover:scale-105"
                          aria-label="Play Active Reel"
                        >
                          <Play className="w-5 h-5 fill-white text-white group-hover:fill-brand-black group-hover:text-brand-black ml-0.5 transition-colors duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Active Reel Metadata Details */}
              <div className="mt-6 text-left">
                <div className="flex items-center gap-3">
                  <span className="bg-brand-red/10 border border-brand-red/25 text-brand-red font-mono text-[9px] px-2.5 py-0.5 rounded uppercase font-semibold">
                    {activeReel.category}
                  </span>
                  <span className="text-zinc-650 font-mono text-[10px] uppercase">
                    Duration: {activeReel.duration}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mt-2">
                  {activeReel.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-3 font-light leading-relaxed max-w-3xl">
                  {activeReel.desc}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Director Track Selector List (Right 4 Columns) */}
          <div className="lg:col-span-4 space-y-3">
            {reels.map((reel, idx) => {
              const IconComponent = reel.icon
              const isActive = activeReel.id === reel.id

              return (
                <ScrollReveal key={reel.id} delay={100 * idx} className="h-[23%] flex">
                  <button
                    onClick={() => handleSelectReel(reel)}
                    className={`w-full text-left p-4 rounded-xl border flex items-center gap-4 transition-all duration-300 ${
                      isActive
                        ? 'bg-zinc-950/80 border-brand-red/60 shadow-[0_0_15px_rgba(229,9,20,0.08)]'
                        : 'bg-zinc-950/20 border-zinc-900/60 hover:border-zinc-800 hover:bg-zinc-950/40'
                    }`}
                  >
                    {/* Small Mini Thumbnail */}
                    <div className="w-16 sm:w-20 aspect-video rounded-lg overflow-hidden bg-zinc-900 relative hidden sm:block">
                      <img 
                        src={reel.thumbnail} 
                        alt="" 
                        className={`w-full h-full object-cover opacity-60 ${isActive ? 'opacity-85' : ''}`}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className={`w-3.5 h-3.5 ${isActive ? 'text-brand-red' : 'text-zinc-400'}`} />
                      </div>
                    </div>

                    {/* Metadata titles */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-mono text-brand-red uppercase tracking-wider">
                          {reel.category}
                        </span>
                        <span className="text-[9px] font-mono text-zinc-500 uppercase">
                          {reel.duration}
                        </span>
                      </div>
                      <h4 className={`font-bold text-xs uppercase truncate mt-0.5 ${isActive ? 'text-white' : 'text-zinc-400'}`}>
                        {reel.title}
                      </h4>
                      <p className="text-[10px] text-zinc-500 truncate mt-1">
                        {reel.subtitle}
                      </p>
                    </div>

                    {/* Selector check icon */}
                    <div className={`p-1.5 rounded-full ${isActive ? 'bg-brand-red/10 text-brand-red' : 'text-zinc-700'}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </button>
                </ScrollReveal>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
