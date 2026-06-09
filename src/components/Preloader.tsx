import { useEffect, useState } from 'react'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState('Initiating Post-Production Pipeline...')
  const [fadeExit, setFadeExit] = useState(false)

  useEffect(() => {
    const statusMessages = [
      { threshold: 0, text: 'Resolving A/B Timeline Tracks...' },
      { threshold: 25, text: 'Synchronizing Dialogue Audio...' },
      { threshold: 50, text: 'Injecting Crimson LUT Color Profiles...' },
      { threshold: 75, text: 'Rendering 4K Motion Sequences...' },
      { threshold: 95, text: 'Finalizing HDR Master Export...' }
    ]

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4
        
        // Update status messages as progress grows
        const activeMessage = statusMessages.reduce((acc, curr) => {
          if (next >= curr.threshold) return curr.text
          return acc
        }, 'Calibrating Assets...')
        
        setStatus(activeMessage)

        if (next >= 100) {
          clearInterval(interval)
          // Initiate fade out
          setTimeout(() => {
            setFadeExit(true)
            // Unmount from App after fade animation completes
            setTimeout(() => {
              onComplete()
            }, 600)
          }, 300)
          return 100
        }
        return next
      })
    }, 80)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 bg-black z-50 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        fadeExit ? 'opacity-0 scale-[1.05] pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="max-w-md w-full px-6 flex flex-col items-center">
        
        {/* Animated Brand Logo */}
        <div className="font-display font-black text-3xl tracking-tighter text-white uppercase select-none animate-pulse mb-8">
          BRAND<span className="text-brand-red text-glow-red">BOOSTERS</span>
        </div>

        {/* Outer Progress Tracker */}
        <div className="w-full bg-zinc-950 border border-zinc-900 h-1.5 rounded-full overflow-hidden relative mb-4 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
          <div
            className="h-full bg-brand-red transition-all duration-100 ease-out shadow-[0_0_8px_#e50914] rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Text Details */}
        <div className="w-full flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-zinc-500">
          <span className="truncate max-w-[250px]">{status}</span>
          <span className="text-brand-red text-glow-red font-bold font-mono">
            {progress}%
          </span>
        </div>

      </div>
    </div>
  )
}
