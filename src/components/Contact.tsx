import { useState, type FormEvent } from 'react'
import { Send, CheckCircle, Sparkles } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('short')
  const [volume, setVolume] = useState('5-10')
  const [footage, setFootage] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1200)
  }

  const handleReset = () => {
    setName('')
    setEmail('')
    setService('short')
    setVolume('5-10')
    setFootage('')
    setMessage('')
    setIsSubmitted(false)
  }

  return (
    <section id="contact" className="relative py-24 bg-brand-black px-4 sm:px-6 lg:px-8 border-t border-zinc-950">
      
      {/* Background spotlight */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-red/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-brand-red text-xs font-mono tracking-widest uppercase block mb-2">PROJECT BRIEF</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white">
              START A <span className="text-brand-red text-glow-red">CONVERSATION</span>
            </h2>
            <div className="w-12 h-[1px] bg-brand-red mx-auto mt-4" />
            <p className="text-zinc-400 mt-4 max-w-lg mx-auto font-light text-sm sm:text-base leading-relaxed">
              Specify your editorial requirements and media assets. We will analyze your specifications and respond with custom workflow packages within 24 hours.
            </p>
          </div>
        </ScrollReveal>

        {/* Dynamic Form */}
        <ScrollReveal delay={200}>
          <div className="bg-zinc-950/20 rounded-2xl border border-zinc-900 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            
            {/* Subtle Top Red Accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 font-mono">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="px-4 py-3 bg-zinc-950/80 border border-zinc-900 rounded-lg text-white placeholder-zinc-700 focus:outline-none focus:border-brand-red/80 focus:shadow-[0_0_8px_rgba(229,9,20,0.15)] transition-all duration-300 font-sans text-sm"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 font-mono">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="px-4 py-3 bg-zinc-950/80 border border-zinc-900 rounded-lg text-white placeholder-zinc-700 focus:outline-none focus:border-brand-red/80 focus:shadow-[0_0_8px_rgba(229,9,20,0.15)] transition-all duration-300 font-sans text-sm"
                    />
                  </div>
                </div>

                {/* Row 2: Service and Volume Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="service" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 font-mono">
                      CHOOSE DISCIPLINE
                    </label>
                    <select
                      id="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="px-4 py-3 bg-zinc-950/80 border border-zinc-900 rounded-lg text-white focus:outline-none focus:border-brand-red/80 focus:shadow-[0_0_8px_rgba(229,9,20,0.15)] transition-all duration-300 font-sans text-sm appearance-none cursor-pointer"
                    >
                      <option value="short">Vertical Social Strategy (9:16)</option>
                      <option value="long">Episodic Narratives & Film (16:9)</option>
                      <option value="grading">High-Fidelity Color Mastering</option>
                      <option value="motion">Visual Effects & Motion Identity</option>
                      <option value="full">Full-Scale Post-Production Contract</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="volume" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 font-mono">
                      EXPECTED MONTHLY VOLUME
                    </label>
                    <select
                      id="volume"
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      className="px-4 py-3 bg-zinc-950/80 border border-zinc-900 rounded-lg text-white focus:outline-none focus:border-brand-red/80 focus:shadow-[0_0_8px_rgba(229,9,20,0.15)] transition-all duration-300 font-sans text-sm appearance-none cursor-pointer"
                    >
                      <option value="1-4">1 to 4 Deliveries / Month</option>
                      <option value="5-10">5 to 10 Deliveries / Month</option>
                      <option value="10-20">10 to 20 Deliveries / Month</option>
                      <option value="20+">20+ Deliveries / Month</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Raw Footage Link */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="footage" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 font-mono">
                    LINK TO RAW FOOTAGE / CREATIVE BRIEF (OPTIONAL)
                  </label>
                  <input
                    type="url"
                    id="footage"
                    value={footage}
                    onChange={(e) => setFootage(e.target.value)}
                    placeholder="Frame.io, Google Drive, or Dropbox link"
                    className="px-4 py-3 bg-zinc-950/80 border border-zinc-900 rounded-lg text-white placeholder-zinc-700 focus:outline-none focus:border-brand-red/80 focus:shadow-[0_0_8px_rgba(229,9,20,0.15)] transition-all duration-300 font-sans text-sm"
                  />
                </div>

                {/* Row 4: Message */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 font-mono">
                    PROJECT SPECIFICATIONS
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Outline your editing guidelines, narrative structure, audio references, and target delivery timelines..."
                    className="px-4 py-3 bg-zinc-950/80 border border-zinc-900 rounded-lg text-white placeholder-zinc-700 focus:outline-none focus:border-brand-red/80 focus:shadow-[0_0_8px_rgba(229,9,20,0.15)] transition-all duration-300 font-sans text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative py-4 bg-brand-red disabled:bg-zinc-800 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(229,9,20,0.4)] flex items-center justify-center gap-3 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span>SUBMIT BRIEF</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success State */
              <div className="py-10 text-center flex flex-col items-center justify-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-brand-red/10 rounded-full blur-xl scale-125 animate-pulse" />
                  <CheckCircle className="w-14 h-14 text-brand-red relative z-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2">
                  Brief Submitted Successfully
                </h3>
                <p className="text-zinc-450 font-light text-xs sm:text-sm max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{name}</span>. Our editorial director is reviewing your creative brief. We will reach out to <span className="text-white font-semibold">{email}</span> within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 border border-zinc-900 hover:border-zinc-800 bg-zinc-950/80 hover:bg-zinc-950 text-zinc-400 hover:text-white text-[10px] font-mono font-bold rounded-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-brand-red" />
                  SUBMIT ANOTHER BRIEF
                </button>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
