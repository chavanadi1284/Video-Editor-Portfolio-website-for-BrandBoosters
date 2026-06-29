import { useState } from 'react'
import { Play, X, SlidersHorizontal } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

type Category = 'all' | 'reels_campaigns' | 'saas_videos' | 'intro_videos' | 'client_projects'

interface VideoItem {
  id: string
  title: string
  client: string
  category: Category
  thumbnail: string
  videoUrl: string
  aspectRatio: '16:9' | '9:16'
  duration: string
}

export default function VideoGrid() {
  const [activeFilter, setActiveFilter] = useState<Category>('all')
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)

  const portfolioItems: VideoItem[] = [
    // ReelsCampaigns
    {
      id: 'rc1',
      title: 'DAY1 FINAL',
      client: 'BrandBoosters',
      category: 'reels_campaigns',
      thumbnail: 'https://drive.google.com/thumbnail?id=1kt04t1pHMq5o4abpLrUtCK_WBRPhmu_T&sz=w800',
      videoUrl: 'https://drive.google.com/file/d/1kt04t1pHMq5o4abpLrUtCK_WBRPhmu_T/preview',
      aspectRatio: '9:16',
      duration: '0:30'
    },
    {
      id: 'rc2',
      title: 'Day 2 ZOMATO',
      client: 'Zomato',
      category: 'reels_campaigns',
      thumbnail: 'https://drive.google.com/thumbnail?id=1pAGnVhUabToauSTHxSau9XpXMK22PDVs&sz=w800',
      videoUrl: 'https://drive.google.com/file/d/1pAGnVhUabToauSTHxSau9XpXMK22PDVs/preview',
      aspectRatio: '9:16',
      duration: '0:45'
    },
    {
      id: 'rc3',
      title: 'Day 3 nayka',
      client: 'Nykaa',
      category: 'reels_campaigns',
      thumbnail: 'https://drive.google.com/thumbnail?id=14IkuaXeIKzmkkcHjbxn9XwnTbL38rxIv&sz=w800',
      videoUrl: 'https://drive.google.com/file/d/14IkuaXeIKzmkkcHjbxn9XwnTbL38rxIv/preview',
      aspectRatio: '9:16',
      duration: '0:40'
    },
    {
      id: 'rc4',
      title: 'Day 4',
      client: 'BrandBoosters',
      category: 'reels_campaigns',
      thumbnail: 'https://drive.google.com/thumbnail?id=166eyh1yWDC_SOkIUKSGVMQbPyXfcf9wP&sz=w800',
      videoUrl: 'https://drive.google.com/file/d/166eyh1yWDC_SOkIUKSGVMQbPyXfcf9wP/preview',
      aspectRatio: '9:16',
      duration: '0:35'
    },
    {
      id: 'rc5',
      title: 'DAY 5 FINAL',
      client: 'BrandBoosters',
      category: 'reels_campaigns',
      thumbnail: 'https://drive.google.com/thumbnail?id=17zsi8F7E3MXxUvBaw60NkH2qpxISuigl&sz=w800',
      videoUrl: 'https://drive.google.com/file/d/17zsi8F7E3MXxUvBaw60NkH2qpxISuigl/preview',
      aspectRatio: '9:16',
      duration: '0:50'
    },
    {
      id: 'rc6',
      title: 'DAY6',
      client: 'BrandBoosters',
      category: 'reels_campaigns',
      thumbnail: 'https://drive.google.com/thumbnail?id=1ildcHXfal40CLFs5qu9OTHQOwkAm1yZg&sz=w800',
      videoUrl: 'https://drive.google.com/file/d/1ildcHXfal40CLFs5qu9OTHQOwkAm1yZg/preview',
      aspectRatio: '9:16',
      duration: '0:45'
    },
    {
      id: 'rc7',
      title: 'DAY7mp4',
      client: 'BrandBoosters',
      category: 'reels_campaigns',
      thumbnail: 'https://drive.google.com/thumbnail?id=1pkP_AQ-ziAlXid6weQrRgazF6r4uSL7T&sz=w800',
      videoUrl: 'https://drive.google.com/file/d/1pkP_AQ-ziAlXid6weQrRgazF6r4uSL7T/preview',
      aspectRatio: '9:16',
      duration: '0:30'
    },
    {
      id: 'rc8',
      title: 'DAY8',
      client: 'BrandBoosters',
      category: 'reels_campaigns',
      thumbnail: 'https://drive.google.com/thumbnail?id=1J5-vH8Wy9qPANtfgaTvp6YdpL3uwBmMr&sz=w800',
      videoUrl: 'https://drive.google.com/file/d/1J5-vH8Wy9qPANtfgaTvp6YdpL3uwBmMr/preview',
      aspectRatio: '9:16',
      duration: '1:00'
    },
    {
      id: 'rc9',
      title: 'CAMPAIGN 1',
      client: 'BrandBoosters',
      category: 'reels_campaigns',
      thumbnail: 'https://drive.google.com/thumbnail?id=19hgtjKim0h5UShqUOSSQNDENFb1-8Wyg&sz=w800',
      videoUrl: 'https://drive.google.com/file/d/19hgtjKim0h5UShqUOSSQNDENFb1-8Wyg/preview',
      aspectRatio: '16:9',
      duration: '1:30'
    },
    // SaaS Videos
    {
      id: 'sv1',
      title: 'SAAS VIDEO WITH SFX',
      client: 'SaaS Client',
      category: 'saas_videos',
      thumbnail: 'https://drive.google.com/thumbnail?id=1K-9ySQlYb-ICJ307dZ30f9IdOEySQCAR&sz=w800',
      videoUrl: 'https://drive.google.com/file/d/1K-9ySQlYb-ICJ307dZ30f9IdOEySQCAR/preview',
      aspectRatio: '16:9',
      duration: '2:15'
    },
    {
      id: 'sv2',
      title: 'Service video',
      client: 'Enterprise Client',
      category: 'saas_videos',
      thumbnail: 'https://drive.google.com/thumbnail?id=1lrcR8J80R1urnm9cheWiWhyrnsdHM3Gc&sz=w800',
      videoUrl: 'https://drive.google.com/file/d/1lrcR8J80R1urnm9cheWiWhyrnsdHM3Gc/preview',
      aspectRatio: '9:16',
      duration: '1:45'
    },
    // Intro Videos
    {
      id: 'iv1',
      title: 'INTRO VIDEO',
      client: 'BrandBoosters',
      category: 'intro_videos',
      thumbnail: 'https://drive.google.com/thumbnail?id=1TfGwmjqwXHTmcNkD5sx9tCAeaMjLhrUG&sz=w800',
      videoUrl: 'https://drive.google.com/file/d/1TfGwmjqwXHTmcNkD5sx9tCAeaMjLhrUG/preview',
      aspectRatio: '9:16',
      duration: '0:15'
    },
    {
      id: 'iv2',
      title: 'INTRO TIMELINE EDIT',
      client: 'BrandBoosters',
      category: 'intro_videos',
      thumbnail: 'https://drive.google.com/thumbnail?id=1f1qzDFwejc10lXRjWbVRTDNoyqYgq28k&sz=w800',
      videoUrl: 'https://drive.google.com/file/d/1f1qzDFwejc10lXRjWbVRTDNoyqYgq28k/preview',
      aspectRatio: '9:16',
      duration: '0:25'
    },
    {
      id: 'iv3',
      title: 'TIME LINE EDIT',
      client: 'BrandBoosters',
      category: 'intro_videos',
      thumbnail: 'https://drive.google.com/thumbnail?id=1s_DuyO-8yUb7oC_W6VAUpFAR6Av65U9p&sz=w800',
      videoUrl: 'https://drive.google.com/file/d/1s_DuyO-8yUb7oC_W6VAUpFAR6Av65U9p/preview',
      aspectRatio: '9:16',
      duration: '0:35'
    },
    // Client Projects
    {
      id: 'cp1',
      title: 'Athrav Final V2',
      client: 'Athrav',
      category: 'client_projects',
      thumbnail: 'https://drive.google.com/thumbnail?id=1VmwhBq4pqn_m6CWckMOY-2b2RZI4qUwP&sz=w800',
      videoUrl: 'https://drive.google.com/file/d/1VmwhBq4pqn_m6CWckMOY-2b2RZI4qUwP/preview',
      aspectRatio: '9:16',
      duration: '3:45'
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="relative py-24 bg-brand-black px-4 sm:px-6 lg:px-8 border-t border-zinc-950">
      
      {/* Background spotlight */}
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-brand-red/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header and Filters */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="text-brand-red text-xs font-mono tracking-widest uppercase block mb-2">CASE STUDIES</span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white">
                SELECTED <span className="text-brand-red text-glow-red">PORTFOLIO</span>
              </h2>
              <div className="w-12 h-[1px] bg-brand-red mt-4" />
            </div>

            {/* Filter Navigation */}
            <div className="flex flex-wrap gap-1.5 items-center bg-zinc-950/40 p-1.5 rounded-xl border border-zinc-900">
              <div className="px-3 py-1.5 text-zinc-500 hidden sm:flex items-center gap-1.5 text-[10px] font-mono border-r border-zinc-900 mr-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                FILTER
              </div>
              {(['all', 'reels_campaigns', 'saas_videos', 'intro_videos', 'client_projects'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeFilter === filter
                      ? 'bg-brand-red text-white shadow-[0_0_12px_rgba(229,9,20,0.35)]'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/30'
                  }`}
                >
                  {filter === 'all' && 'All Projects'}
                  {filter === 'reels_campaigns' && 'ReelsCampaigns'}
                  {filter === 'saas_videos' && 'SaaS Videos'}
                  {filter === 'intro_videos' && 'Intro Videos'}
                  {filter === 'client_projects' && 'Client Projects'}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Video Portfolio Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 [column-fill:_balance]">
          {filteredItems.map((item, idx) => (
            <div key={item.id} className="break-inside-avoid mb-8">
              <ScrollReveal delay={100 * (idx % 3)}>
                <div
                  onClick={() => setSelectedVideo(item)}
                  className="group cursor-pointer bg-zinc-950/30 border border-zinc-900 hover:border-zinc-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.01] flex flex-col glow-border"
                >
                  {/* Media Container (Dynamic Aspect Ratio for vertical vs widescreen) */}
                  <div className={`relative bg-zinc-950 overflow-hidden w-full ${
                    item.aspectRatio === '9:16' ? 'aspect-[9/16]' : 'aspect-video'
                  }`}>
                    {/* Lazy-loaded Cover Thumbnail */}
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-75 group-hover:opacity-85 group-hover:scale-103 transition-all duration-700"
                      loading="lazy"
                    />
                    
                    {/* Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10 pointer-events-none" />

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/80 border border-zinc-900 text-[9px] font-mono text-zinc-450 px-2 py-0.5 rounded">
                      {item.duration}
                    </div>

                    {/* Aspect Badge (9:16 or 16:9) */}
                    <div className={`absolute top-3 left-3 border text-[9px] font-mono font-bold px-2 py-0.5 rounded ${
                      item.aspectRatio === '9:16' 
                        ? 'bg-brand-red/10 border-brand-red/40 text-brand-red' 
                        : 'bg-zinc-900/60 border-zinc-850 text-zinc-400'
                    }`}>
                      {item.aspectRatio}
                    </div>

                    {/* Hover Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/10">
                      <div className="w-11 h-11 rounded-full bg-brand-red text-white flex items-center justify-center shadow-[0_0_15px_rgba(229,9,20,0.5)] transform scale-95 group-hover:scale-100 transition-transform duration-300">
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Text Meta Content */}
                  <div className="p-5 bg-zinc-950/40 border-t border-zinc-900/20">
                    <span className="text-[9px] font-mono text-brand-red uppercase tracking-wider block mb-1">
                      {item.category === 'reels_campaigns' && 'Reels & Campaigns'}
                      {item.category === 'saas_videos' && 'SaaS Product Video'}
                      {item.category === 'intro_videos' && 'Timeline & Intros'}
                      {item.category === 'client_projects' && 'Client Production'}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight uppercase group-hover:text-brand-red transition-colors duration-300 truncate">
                      {item.title}
                    </h3>
                    <div className="flex justify-between items-center mt-3.5 pt-3 border-t border-zinc-900/40">
                      <span className="text-[10px] text-zinc-550 font-mono">CLIENT</span>
                      <span className="text-[10px] font-medium text-zinc-400 font-mono">{item.client}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>

      {/* Adaptive Lightbox Player */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md transition-opacity duration-300 animate-fadeIn">
          {/* Close button */}
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 p-2.5 text-zinc-400 hover:text-brand-red hover:scale-105 transition-all z-50 bg-zinc-900/60 rounded-full border border-zinc-800"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Dynamic Iframe Panel */}
          <div className={`w-full bg-zinc-950 rounded-xl overflow-hidden border border-zinc-900 shadow-[0_0_40px_rgba(229,9,20,0.2)] flex flex-col md:flex-row items-stretch ${
            selectedVideo.aspectRatio === '9:16'
              ? 'max-w-md aspect-[9/16] md:max-w-3xl md:aspect-auto md:h-[80vh]'
              : 'max-w-5xl aspect-video'
          }`}>
            
            {/* If 9:16 we present a Phone container layout side by side with details on desktop */}
            {selectedVideo.aspectRatio === '9:16' ? (
              <div className="w-full h-full flex flex-col md:flex-row">
                {/* Left: Vertical Phone Wrapper */}
                <div className="flex-1 bg-black flex items-center justify-center p-4 min-h-[450px]">
                  <div className="relative h-full aspect-[9/16] max-h-[520px] rounded-[32px] border border-zinc-800 overflow-hidden bg-zinc-950 shadow-2xl flex flex-col justify-between">
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-20" />
                    <iframe
                      className="w-full h-full absolute inset-0"
                      src={selectedVideo.videoUrl}
                      title={selectedVideo.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
                
                {/* Right: Project Details */}
                <div className="w-full md:w-80 p-6 md:p-8 flex flex-col justify-between bg-zinc-950 border-t md:border-t-0 md:border-l border-zinc-900 text-left">
                  <div>
                    <span className="text-[9px] font-mono text-brand-red uppercase tracking-wider block mb-1">
                      {selectedVideo.category === 'reels_campaigns' ? 'Reels & Campaigns' : 'Vertical Social Strategy'}
                    </span>
                    <h3 className="text-lg font-black uppercase text-white tracking-tight leading-snug">
                      {selectedVideo.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-4 leading-relaxed font-light">
                      {selectedVideo.category === 'reels_campaigns'
                        ? 'High-impact short-form creative engineered for maximum audience retention, rapid pacing, and viral visibility.'
                        : 'This mobile-first vertical asset was engineered to bypass early feed drop-offs. Using custom speed ramping, dynamic text frames, and clean sound bridges.'}
                    </p>
                  </div>
                  
                  <div className="mt-6 space-y-3 pt-6 border-t border-zinc-900 font-mono text-[10px]">
                    <div className="flex justify-between">
                      <span className="text-zinc-550">Partner:</span>
                      <span className="text-zinc-450">{selectedVideo.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-550">Format:</span>
                      <span className="text-brand-red font-semibold">9:16 Vertical</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-550">Duration:</span>
                      <span className="text-zinc-450">{selectedVideo.duration}s</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* If 16:9 standard cinematic video iframe */
              <iframe
                className="w-full h-full"
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}
    </section>
  )
}
