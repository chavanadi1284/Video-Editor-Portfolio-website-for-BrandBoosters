import { useState, type FormEvent } from 'react'
import { Star, MessageSquare, Plus, CheckCircle, Sparkles } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

interface Review {
  id: string
  name: string
  role: string
  rating: number
  comment: string
  date: string
  avatarInitials: string
  metric?: string
}

export default function Feedback() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      name: 'Marcus Thorne',
      role: 'Head of Content, TechStudio',
      rating: 5,
      comment: 'BrandBoosters transformed our edit flow. Their pacing structure raised our 30-second retention rate from 40% to 68%. Color grading is cinematic and consistent.',
      date: 'June 2, 2026',
      avatarInitials: 'MT',
      metric: '+70% Retention'
    },
    {
      id: '2',
      name: 'Sarah Vance',
      role: 'Creative Director, Apex Media',
      rating: 5,
      comment: 'The vertical social cuts they build are absolute hooks. Our last series scaled past 4.2 million views on Instagram. Highly recommend their vertical team.',
      date: 'May 28, 2026',
      avatarInitials: 'SV',
      metric: '4.2M views'
    },
    {
      id: '3',
      name: 'Aron Hormoz',
      role: 'Founder, ScaleScale Corp',
      rating: 5,
      comment: 'Excellent storytelling. They managed our 8-part business documentary series with zero revisions. The sound bridges and VFX are broadcast grade.',
      date: 'May 14, 2026',
      avatarInitials: 'AH',
      metric: 'Zero Revisions'
    }
  ])

  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    const newReview: Review = {
      id: Date.now().toString(),
      name,
      role,
      rating,
      comment,
      date: 'Today',
      avatarInitials: name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'U',
      metric: 'Verified client'
    }

    setReviews([newReview, ...reviews])
    setIsSuccess(true)

    // Reset inputs
    setName('')
    setRole('')
    setRating(5)
    setComment('')

    // Reset success animation after a few seconds
    setTimeout(() => {
      setIsSuccess(false)
      setShowForm(false)
    }, 2500)
  }

  return (
    <section id="feedback" className="relative py-24 bg-brand-black px-4 sm:px-6 lg:px-8 border-t border-zinc-950">
      {/* Background ambient spotlight */}
      <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] bg-brand-red/[0.015] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title and Stats */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
          <ScrollReveal>
            <div>
              <span className="text-brand-red text-xs font-mono tracking-widest uppercase block mb-2 font-semibold">FEEDBACK</span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white">
                CLIENT <span className="text-brand-red text-glow-red">IMPACT</span>
              </h2>
              <div className="w-12 h-[1px] bg-brand-red mt-4" />
            </div>
          </ScrollReveal>

          {/* Key Metrics Display */}
          <ScrollReveal delay={150}>
            <div className="grid grid-cols-3 gap-6 sm:gap-10 border border-zinc-900 bg-zinc-950/20 px-6 py-4 rounded-xl max-w-lg">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-black text-brand-red text-glow-red">150M+</div>
                <div className="text-[9px] font-mono text-zinc-500 uppercase mt-0.5">Views Scaled</div>
              </div>
              <div className="text-center border-l border-zinc-900 px-2 sm:px-6">
                <div className="text-lg sm:text-2xl font-black text-white">+85%</div>
                <div className="text-[9px] font-mono text-zinc-500 uppercase mt-0.5">Dwell Time</div>
              </div>
              <div className="text-center border-l border-zinc-900 pl-2">
                <div className="text-lg sm:text-2xl font-black text-white">4.9/5</div>
                <div className="text-[9px] font-mono text-zinc-500 uppercase mt-0.5">Satisfaction</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Reviews Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          
          {/* Static CTA card to open the Feedback form drawer */}
          <ScrollReveal delay={100}>
            <div className="bg-zinc-950/20 border border-zinc-900 hover:border-zinc-800 p-6 rounded-xl flex flex-col justify-between h-[280px] text-left relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <div className="p-3 bg-zinc-900/60 text-brand-red w-fit rounded-lg mb-6 group-hover:shadow-[0_0_10px_rgba(229,9,20,0.15)] transition-all">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-white uppercase tracking-wider">
                  Partnered with us?
                </h3>
                <p className="text-zinc-400 text-xs mt-3 font-light leading-relaxed">
                  We are constantly refining our editing pipelines. Share your workflow experience and performance metrics with us.
                </p>
              </div>
              <button
                onClick={() => setShowForm(!showForm)}
                className="w-full py-3 border border-zinc-900 hover:border-brand-red/60 hover:bg-brand-red/5 text-zinc-400 hover:text-white text-xs font-mono font-bold rounded-lg transition-all duration-350 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Plus className={`w-3.5 h-3.5 text-brand-red transition-transform duration-300 ${showForm ? 'rotate-45' : ''}`} />
                <span>{showForm ? 'CLOSE REVIEW DRAWER' : 'SUBMIT TESTIMONIAL'}</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Testimonial Cards Staggered Loop */}
          {reviews.map((review, idx) => (
            <ScrollReveal key={review.id} delay={150 * ((idx + 1) % 3)}>
              <div className="bg-zinc-950/40 border border-zinc-900 p-6 rounded-xl h-[280px] flex flex-col justify-between text-left glow-border relative group">
                {/* Metric Badge */}
                {review.metric && (
                  <span className="absolute top-6 right-6 bg-brand-red/10 border border-brand-red/20 text-brand-red font-mono text-[8px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">
                    {review.metric}
                  </span>
                )}
                
                {/* Review Text */}
                <div className="flex-1">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < review.rating ? 'text-brand-red fill-brand-red' : 'text-zinc-800'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-xs font-light leading-relaxed italic pr-2">
                    "{review.comment}"
                  </p>
                </div>

                {/* Client Metadata */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-zinc-900/40 mt-4">
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-850 flex items-center justify-center font-mono text-[10px] font-bold text-white shadow-inner select-none">
                    {review.avatarInitials}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wide flex items-center gap-1.5">
                      {review.name}
                      <CheckCircle className="w-3 h-3 text-brand-red" />
                    </div>
                    <div className="text-[10px] text-zinc-500 font-light truncate max-w-[170px] mt-0.5">
                      {review.role}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Live Submission Form Drawer */}
        {showForm && (
          <div className="max-w-xl mx-auto mt-12 bg-zinc-950/50 rounded-xl border border-zinc-900 p-6 sm:p-8 relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] animate-fadeIn">
            
            {/* Top Subtle Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red/35 to-transparent" />

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-bold font-mono text-zinc-400 uppercase tracking-wider">
                    Add Testimonial
                  </h3>
                  {/* Rating stars selector */}
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] font-mono text-zinc-550 uppercase mr-1">Rating:</span>
                    {[1, 2, 3, 4, 5].map((starValue) => (
                      <button
                        type="button"
                        key={starValue}
                        onClick={() => setRating(starValue)}
                        className="p-0.5 hover:scale-110 transition-transform cursor-pointer"
                        aria-label={`Rate ${starValue} stars`}
                      >
                        <Star
                          className={`w-4 h-4 ${
                            starValue <= rating ? 'text-brand-red fill-brand-red' : 'text-zinc-800'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1 text-left">
                  <label htmlFor="client-name" className="text-[9px] font-bold uppercase tracking-wider text-zinc-550 font-mono">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="client-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g., Marcus Thorne"
                    className="px-3.5 py-2.5 bg-zinc-950/80 border border-zinc-900 rounded-lg text-white placeholder-zinc-700 focus:outline-none focus:border-brand-red/80 focus:shadow-[0_0_8px_rgba(229,9,20,0.1)] text-xs font-sans"
                  />
                </div>

                {/* Role */}
                <div className="flex flex-col gap-1 text-left">
                  <label htmlFor="client-role" className="text-[9px] font-bold uppercase tracking-wider text-zinc-550 font-mono">
                    Title / Organization
                  </label>
                  <input
                    type="text"
                    id="client-role"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="E.g., Head of Content, TechStudio"
                    className="px-3.5 py-2.5 bg-zinc-950/80 border border-zinc-900 rounded-lg text-white placeholder-zinc-700 focus:outline-none focus:border-brand-red/80 focus:shadow-[0_0_8px_rgba(229,9,20,0.1)] text-xs font-sans"
                  />
                </div>

                {/* Feedback comment */}
                <div className="flex flex-col gap-1 text-left">
                  <label htmlFor="client-comment" className="text-[9px] font-bold uppercase tracking-wider text-zinc-550 font-mono">
                    Your Experience
                  </label>
                  <textarea
                    id="client-comment"
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Outline your metrics, storytelling growth, or grading results..."
                    className="px-3.5 py-2.5 bg-zinc-950/80 border border-zinc-900 rounded-lg text-white placeholder-zinc-700 focus:outline-none focus:border-brand-red/80 focus:shadow-[0_0_8px_rgba(229,9,20,0.1)] text-xs font-sans resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-brand-red hover:bg-red-700 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_15px_rgba(229,9,20,0.4)] flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>ADD TO TESTIMONIAL FEED</span>
                </button>
              </form>
            ) : (
              /* Success State */
              <div className="py-8 text-center flex flex-col items-center justify-center animate-fadeIn">
                <div className="p-3 bg-brand-red/10 border border-brand-red/35 rounded-full text-brand-red mb-4 scale-110 animate-bounce">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold uppercase tracking-tight text-white mb-1">
                  Testimonial Feed Updated!
                </h4>
                <p className="text-zinc-550 font-mono text-[9px] uppercase tracking-wider">
                  Appending review to client showcase grid...
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
