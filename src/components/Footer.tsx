import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black border-t border-zinc-950 py-12 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo Branding */}
        <div className="text-left">
          <div className="font-display font-black text-xl tracking-tighter text-white">
            BRAND<span className="text-brand-red text-glow-red">BOOSTERS</span>
          </div>
          <p className="text-[10px] font-mono text-zinc-600 mt-1 uppercase tracking-widest">
            weapons of mass attention © {new Date().getFullYear()}
          </p>
        </div>

        {/* Social Icons Links */}
        <div className="flex gap-4">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-brand-red hover:border-brand-red/50 hover:shadow-[0_0_10px_rgba(255,0,60,0.3)] rounded-lg transition-all duration-300 flex items-center justify-center"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-brand-red hover:border-brand-red/50 hover:shadow-[0_0_10px_rgba(255,0,60,0.3)] rounded-lg transition-all duration-300 flex items-center justify-center"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-brand-red hover:border-brand-red/50 hover:shadow-[0_0_10px_rgba(255,0,60,0.3)] rounded-lg transition-all duration-300 flex items-center justify-center"
            aria-label="Twitter"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-brand-red hover:border-brand-red/50 hover:shadow-[0_0_10px_rgba(255,0,60,0.3)] rounded-lg transition-all duration-300 flex items-center justify-center"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          </a>
        </div>

        {/* Scroll To Top Trigger */}
        <button
          onClick={scrollToTop}
          className="group p-2.5 bg-zinc-950 border border-zinc-900 hover:border-brand-red/50 hover:bg-brand-red/5 text-zinc-500 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  )
}
