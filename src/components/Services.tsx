import { useState } from 'react'
import { Film, Zap, Palette, MoveRight, Layers } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

type ServiceType = 'short' | 'long' | 'grading' | 'motion'

export default function Services() {
  const [activeTab, setActiveTab] = useState<ServiceType>('grading')
  const [sliderPos, setSliderPos] = useState(50)

  const services = [
    {
      id: 'short' as ServiceType,
      title: 'Vertical Social Strategy',
      icon: Zap,
      desc: 'High-retention 9:16 vertical video assets optimized for modern social algorithms. We implement precision cuts, kinetic graphics, and platform-specific audio hooks to maximize viewer dwell time.',
      metrics: 'Algorithm Optimization'
    },
    {
      id: 'long' as ServiceType,
      title: 'Episodic Narratives & Docs',
      icon: Film,
      desc: 'Comprehensive post-production for long-form episodes, corporate profiles, and brand documentaries. We focus on structural pacing, storytelling coherence, and audio engineering.',
      metrics: 'Full Narrative Pipeline'
    },
    {
      id: 'grading' as ServiceType,
      title: 'High-Fidelity Color Mastering',
      icon: Palette,
      desc: 'Precision color grading designed for standard and log color profiles. We guarantee accurate skin-tone calibration, lighting continuity, and bespoke color styling that enhances narrative tone.',
      metrics: '10-Bit Color Pipeline'
    },
    {
      id: 'motion' as ServiceType,
      title: 'Visual Effects & Motion Identity',
      icon: Layers,
      desc: 'Custom motion identity packages, title animations, Lower thirds, and camera-tracked 3D integration. We introduce premium design accents that elevate broadcast value.',
      metrics: '2D & 3D Integration'
    }
  ]

  return (
    <section id="services" className="relative py-24 bg-brand-black px-4 sm:px-6 lg:px-8 border-t border-zinc-950">
      {/* Background ambient spotlight */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-brand-red/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-brand-red text-xs font-mono tracking-widest uppercase block mb-2">SERVICES & SPECIALTIES</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white">
              WE SHARPEN YOUR <span className="text-brand-red text-glow-red">VISUAL EDGE</span>
            </h2>
            <div className="w-12 h-[1px] bg-brand-red mt-4" />
          </div>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Services List (Left 5 Columns) */}
          <div className="lg:col-span-5 space-y-4">
            {services.map((service, idx) => {
              const IconComponent = service.icon
              const isActive = activeTab === service.id

              return (
                <ScrollReveal key={service.id} delay={100 * idx}>
                  <button
                    onClick={() => setActiveTab(service.id)}
                    className={`w-full text-left p-6 rounded-xl border transition-all duration-300 interactive-card ${
                      isActive
                        ? 'bg-zinc-950/80 border-brand-red/60 shadow-[0_0_15px_rgba(229,9,20,0.08)]'
                        : 'bg-zinc-950/20 border-zinc-900/60 hover:border-zinc-800 hover:bg-zinc-950/50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg transition-colors duration-300 ${isActive ? 'bg-brand-red text-white' : 'bg-zinc-900/60 text-zinc-400'}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-bold text-base transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                            {service.title}
                          </h3>
                          <MoveRight className={`w-3.5 h-3.5 transition-transform duration-350 ${isActive ? 'text-brand-red translate-x-1' : 'text-zinc-650'}`} />
                        </div>
                        <p className="text-zinc-400 text-xs mt-2 font-light leading-relaxed">
                          {service.desc}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-[10px] font-mono text-zinc-550 uppercase">Discipline</span>
                          <span className={`text-[9px] font-mono px-2 py-0.5 rounded ${isActive ? 'bg-brand-red/10 text-brand-red' : 'bg-zinc-900/60 text-zinc-400'}`}>
                            {service.metrics}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Interactive Canvas (Right 7 Columns) */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal delay={200}>
              <div className="bg-zinc-950/25 rounded-2xl border border-zinc-900 p-4 sm:p-5 shadow-2xl relative overflow-hidden min-h-[480px] flex flex-col justify-between">
                
                {/* Header info */}
                <div className="flex items-center justify-between mb-4 border-b border-zinc-900 pb-3">
                  <span className="text-[10px] font-mono text-zinc-550 uppercase tracking-widest">
                    Interactive Preview Canvas
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                    <span className="text-[9px] font-mono text-brand-red uppercase tracking-wider">Preview Active</span>
                  </div>
                </div>

                {/* Dynamic Previews */}
                <div className="flex-1 flex items-center justify-center relative rounded-xl overflow-hidden bg-black aspect-video w-full">
                  
                  {/* --- 1. COLOR GRADING SLIDER --- */}
                  {activeTab === 'grading' && (
                    <div className="relative w-full h-full select-none overflow-hidden group">
                      {/* Grad (AFTER) - Underneath */}
                      <img
                        src="/graded_car.png"
                        alt="Color Graded"
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 right-4 bg-brand-red/90 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider z-20">
                        Graded (Rec709)
                      </div>

                      {/* RAW (BEFORE) - Overlay with clipPath */}
                      <img
                        src="/graded_car.png"
                        alt="RAW Log"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ 
                          clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
                          filter: 'saturate(0.35) contrast(0.65) brightness(1.15) sepia(0.05)'
                        }}
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 bg-zinc-900/90 text-zinc-400 text-[9px] font-mono px-2 py-0.5 rounded uppercase tracking-wider z-20">
                        RAW LOG (Flat)
                      </div>

                      {/* Slider Control Input Overlay */}
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderPos}
                        onChange={(e) => setSliderPos(Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-35"
                        aria-label="Color grading slider"
                      />

                      {/* Visual Slider Line (Thin Crimson) */}
                      <div
                        className="absolute top-0 bottom-0 w-[1px] bg-brand-red shadow-[0_0_5px_#e50914] pointer-events-none z-20"
                        style={{ left: `${sliderPos}%` }}
                      />

                      {/* Visual Slider Handle Circle (Minimalist black & silver) */}
                      <div
                        className="absolute top-1/2 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-20 flex items-center justify-center shadow-lg transition-transform duration-300"
                        style={{ left: `${sliderPos}%` }}
                      >
                        <div className="flex gap-1 text-zinc-400 font-mono text-[9px]">
                          <span>‹</span>
                          <span>›</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* --- 2. SHORT-FORM MOBILE --- */}
                  {activeTab === 'short' && (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-950/60 p-4">
                      {/* Phone Mockup Frame */}
                      <div className="relative h-full aspect-[9/16] max-h-[350px] rounded-[32px] border border-zinc-800 overflow-hidden bg-black shadow-2xl flex flex-col justify-between">
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-20" />
                        
                        {/* Looping mobile video */}
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                          src="https://player.vimeo.com/external/517616641.sd.mp4?s=d0799793132e0e5a6ef67e23115456f4d2f099c1&profile_id=165&oauth2_token_id=57447761"
                        />
                        
                        {/* Simulated vertical Captions / Overlay UI */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                        
                        {/* Simulated Neon Subtitle Overlay */}
                        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-20 px-4 pointer-events-none">
                          <span className="bg-black/90 text-white font-extrabold text-[10px] tracking-wider px-2 py-1 rounded border border-brand-red/30 shadow-lg block uppercase">
                            Dynamic Captions
                          </span>
                        </div>

                        {/* Bottom vertical profile simulation */}
                        <div className="absolute bottom-4 left-4 right-4 z-20 text-[9px] pointer-events-none font-sans text-left">
                          <div className="font-bold text-white mb-0.5">@brand_agency</div>
                          <div className="text-zinc-400 font-light truncate">Optimizing mobile retention rates...</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* --- 3. LONG-FORM PREVIEW --- */}
                  {activeTab === 'long' && (
                    <div className="w-full h-full bg-zinc-950 p-6 flex flex-col justify-between font-mono">
                      {/* Simulated Premiere/Resolve Timeline */}
                      <div className="flex-1 flex flex-col justify-between border border-zinc-900 rounded bg-zinc-950/80 p-3 overflow-hidden text-[9px]">
                        <div className="flex justify-between items-center border-b border-zinc-900 pb-2 text-zinc-550">
                          <span>sequence_timeline.prproj</span>
                          <span className="text-brand-red">00:04:12:08</span>
                        </div>
                        {/* Timeline Tracks */}
                        <div className="space-y-1.5 my-3 text-left">
                          <div className="flex gap-1 items-center">
                            <span className="w-6 text-zinc-650 text-[8px]">V2</span>
                            <div className="flex-1 bg-zinc-900 rounded h-4 flex items-center px-2 text-[8px] text-zinc-500 relative overflow-hidden">
                              <div className="absolute left-1/3 w-1/4 h-full bg-brand-red/10 border-l border-r border-brand-red/40 flex items-center px-1 text-[7px] text-brand-red font-bold">
                                Titles Overlay
                              </div>
                              Typography & Identity
                            </div>
                          </div>
                          <div className="flex gap-1 items-center">
                            <span className="w-6 text-zinc-650 text-[8px]">V1</span>
                            <div className="flex-1 bg-zinc-900 rounded h-5 flex items-center gap-0.5 overflow-hidden">
                              <div className="w-1/3 bg-zinc-800 h-full flex items-center px-2 text-[8px] text-zinc-450 border-r border-zinc-900">A-Roll (Interview)</div>
                              <div className="w-1/3 bg-zinc-800/60 h-full flex items-center px-2 text-[8px] text-zinc-450 border-r border-zinc-900">B-Roll (Visuals)</div>
                              <div className="flex-1 bg-zinc-800 h-full flex items-center px-2 text-[8px] text-zinc-450">Cutaway</div>
                            </div>
                          </div>
                          <div className="flex gap-1 items-center">
                            <span className="w-6 text-zinc-650 text-[8px]">A1</span>
                            <div className="flex-1 bg-zinc-900 rounded h-3 flex items-center gap-0.5 overflow-hidden">
                              <div className="w-full bg-zinc-800/40 h-full flex items-center px-1 text-[7px] text-zinc-500">
                                🔊 Dialogue Track (Cleaned)
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Editorial note card */}
                        <div className="bg-black/30 border border-zinc-900 rounded p-2 text-zinc-550 text-[8px] text-left">
                          <span className="text-brand-red font-bold font-mono">EDITORIAL RULE:</span> Applied audio-bridge crossover to maintain auditory continuity between scene swaps.
                        </div>
                      </div>
                    </div>
                  )}

                  {/* --- 4. MOTION GRAPHICS PREVIEW --- */}
                  {activeTab === 'motion' && (
                    <div className="relative w-full h-full overflow-hidden">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        src="https://player.vimeo.com/external/538571052.sd.mp4?s=cf68b75c192d6e0b7466ebc1642220f18837e2df&profile_id=165&oauth2_token_id=57447761"
                      />
                      <div className="absolute inset-0 bg-brand-black/25 flex flex-col items-center justify-center p-4">
                        {/* Simulated tracking frame */}
                        <div className="w-full max-w-xs text-center border border-zinc-800/50 p-6 rounded relative bg-zinc-950/70 backdrop-blur-sm">
                          <span className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-brand-red" />
                          <span className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-brand-red" />
                          <span className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-brand-red" />
                          <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-brand-red" />
                          
                          <div className="text-zinc-550 text-[9px] font-mono tracking-widest uppercase">3D Camera Solve</div>
                          <div className="text-white text-sm font-black tracking-tight uppercase mt-1">TRACKING POINTS ACTIVE</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hint overlay */}
                <div className="mt-4 text-center">
                  <p className="text-[10px] text-zinc-500 font-mono">
                    {activeTab === 'grading' 
                      ? 'Drag or swipe the slider above to see our grading pipeline'
                      : 'Interactive canvas demonstrating platform-specific outputs'
                    }
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
