import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      // Offset for sticky header
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

  const navLinks = [
    { name: 'Showreel', target: 'showreel' },
    { name: 'Services', target: 'services' },
    { name: 'Portfolio', target: 'portfolio' },
    { name: 'Estimate', target: 'contact' }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-black/80 backdrop-blur-md border-b border-zinc-900 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display font-black text-xl tracking-tighter text-white hover:opacity-90 transition-opacity flex items-center gap-1 cursor-pointer"
        >
          BRAND<span className="text-brand-red text-glow-red">BOOSTERS</span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.target)}
              className="text-sm font-semibold uppercase tracking-wider text-zinc-400 hover:text-white hover:text-glow-red transition-all duration-200 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="group px-5 py-2.5 bg-brand-red text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(229,9,20,0.35)] flex items-center gap-1.5 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-zinc-900 py-6 px-4 flex flex-col gap-4 shadow-2xl animate-slideDown">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.target)}
              className="text-left py-2.5 text-base font-bold uppercase tracking-widest text-zinc-400 hover:text-brand-red transition-colors border-b border-zinc-900/40 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full text-center py-4 bg-brand-red text-white text-sm font-bold uppercase tracking-widest rounded-lg mt-2 cursor-pointer"
          >
            ESTIMATE PROJECT
          </button>
        </div>
      )}
    </header>
  )
}
