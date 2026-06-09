import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let glowX = 0
    let glowY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      // Use state updater callback to safely verify state without closure lag
      setIsVisible((prev) => {
        if (!prev) {
          document.body.classList.add('custom-cursor-active')
          return true
        }
        return prev
      })
    }

    const handleTouchStart = () => {
      setIsVisible(false)
      document.body.classList.remove('custom-cursor-active')
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('mouseleave', handleTouchStart)

    // Smooth animation loop
    let animationFrameId: number

    const updatePosition = () => {
      if (dotRef.current && ringRef.current && glowRef.current) {
        // Dot moves instantly
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`

        // Ring LERP (snappy trail)
        const ringEase = 0.15
        ringX += (mouseX - ringX) * ringEase
        ringY += (mouseY - ringY) * ringEase
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`

        // Spotlight LERP (heavy trailing ambient light)
        const glowEase = 0.05
        glowX += (mouseX - glowX) * glowEase
        glowY += (mouseY - glowY) * glowEase
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`
      }
      animationFrameId = requestAnimationFrame(updatePosition)
    }

    updatePosition()

    // Setup hover listeners for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isHoverable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('[role="button"]') ||
        target.closest('.interactive-card') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT'

      if (isHoverable) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('mouseleave', handleTouchStart)
      document.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(animationFrameId)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [])

  return (
    <>
      {/* Background Spotlight Glow (Trails slowly behind all content) */}
      <div
        ref={glowRef}
        className={`fixed top-0 left-0 w-[300px] h-[300px] -ml-[150px] -mt-[150px] rounded-full bg-brand-red/[0.04] blur-[80px] pointer-events-none z-0 transition-opacity duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Inner Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-brand-red rounded-full pointer-events-none z-50 transition-[transform,opacity] duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovering ? 'scale-[2.2] bg-red-400 shadow-[0_0_8px_#e50914]' : ''
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Outer Glow Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 border border-brand-red rounded-full pointer-events-none z-50 transition-[width,height,margin,border-color,background-color,transform,opacity] duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovering 
            ? 'scale-[1.6] bg-brand-red/[0.06] border-red-500 shadow-[0_0_12px_rgba(229,9,20,0.35)]' 
            : 'opacity-60'
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  )
}
