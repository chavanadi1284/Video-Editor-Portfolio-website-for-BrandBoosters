import { useState } from 'react'
import Header from './components/Header'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import Showreel from './components/Showreel'
import Services from './components/Services'
import Brands from './components/Brands'
import VideoGrid from './components/VideoGrid'
import Feedback from './components/Feedback'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-brand-red selection:text-white antialiased">
      
      {/* Cinematic Intro Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Floating Glassmorphic Navigation */}
      <Header />

      {/* Main Page Layout */}
      <main>
        {/* Hero Banner w/ Ambient Video Loop */}
        <Hero />

        {/* Cinema Player Master Showreel (Interactive selector list) */}
        <Showreel />

        {/* Core Services w/ Live Interactive Preview & Before/After Slider */}
        <Services />

        {/* Infinite horizontally scrolling creator marquee */}
        <Brands />

        {/* Facade-optimized filterable portfolio grid */}
        <VideoGrid />

        {/* Client reviews and live feedback submission */}
        <Feedback />

        {/* High-impact project estimation form */}
        <Contact />
      </main>

      {/* Utility Footer and Links */}
      <Footer />
      
    </div>
  )
}

export default App
