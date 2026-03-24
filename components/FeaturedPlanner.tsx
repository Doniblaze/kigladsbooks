import PriceDisplay from "./PriceDisplay";

export default function FeaturedPlanner() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-24 px-6 md:px-12 max-w-[1400px] mx-auto" id="planners">
      <div className="relative flex items-center justify-center w-full min-h-[500px] group">
        <div className="absolute inset-0 bg-gold/5 rounded-[40px] blur-3xl group-hover:bg-gold/10 transition-colors duration-1000" />
        <div className="book-mock-container relative w-full flex justify-center perspective-[2000px]">
          <div className="book-mock">
            <div className="flex flex-col items-center">
              <span className="text-[0.6rem] tracking-[0.3em] font-semibold uppercase text-gold/60 mb-4 inline-block opacity-80">2026 Edition</span>
              <div className="font-cormorant text-3xl font-normal text-cream text-center tracking-wide leading-tight drop-shadow-lg">Full Study<br /><span className="text-gradient font-medium italic">Planner</span></div>
            </div>
            
            <div className="w-full flex justify-center py-6">
              <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center relative shadow-[inset_0_0_15px_rgba(212,175,55,0.1)]">
                <div className="absolute w-full h-full border border-gold/10 rounded-full animate-[spin_10s_linear_infinite]" />
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="text-gold opacity-80">
                  <path d="M16 11V21M16 11C14.5 11 11 12 8 12V22C11 22 14.5 21 16 21M16 11C17.5 11 21 12 24 12V22C21 22 17.5 21 16 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            
            <div className="w-full flex flex-col gap-1 items-center px-6 opacity-60">
              <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent w-full mb-2" />
              <div className="text-[0.6rem] tracking-[0.25em] font-bold uppercase text-gold/80">KiGlads Books</div>
            </div>
          </div>
          <div className="absolute -bottom-10 right-10 md:right-20 glass text-cream text-[0.65rem] font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full shadow-2xl rotate-[-5deg] backdrop-blur-3xl border-gold/30 flex items-center gap-2 animate-float">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Best Seller
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start text-left relative z-10 px-4 md:px-0">
        <div className="inline-flex items-center gap-3 border border-[var(--border)] px-4 py-1.5 rounded-full mb-8">
          <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gold">Featured Item</span>
        </div>
        <h2 className="font-cormorant text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.1] text-cream mb-6">
          The All-in-One<br /><span className="text-gradient">Study Ebook.</span>
        </h2>
        <p className="text-muted text-lg leading-relaxed mb-10 max-w-lg font-light">
          The ultimate academic companion. Everything you need to master your semester, track complex exams, and elevate your goals within one gorgeous ecosystem.
        </p>
        <ul className="flex flex-col gap-5 mb-12 w-full max-w-lg">
          {[
            "Interactive monthly & chronological timeline",
            "Advanced study block & rhythm scheduling",
            "Sleek deadline architecture and metrics",
            "Optimized exclusively for GoodNotes & iPadOS",
          ].map((feature, i) => (
            <li key={i} className="flex items-start gap-4 text-[0.9rem] text-cream/90 border-b border-white/5 pb-4">
              <div className="w-5 h-5 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              </div>
              <span className="leading-snug tracking-wide font-light">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8 w-full">
          <div className="flex flex-col">
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-muted mb-1">Lifetime Access</span>
            <span className="font-cormorant text-5xl font-semibold text-gold tracking-tight"><PriceDisplay amountUsd={9.99} /></span>
          </div>
          <div className="h-10 w-[1px] bg-[var(--border)] hidden sm:block" />
          <p className="text-[0.75rem] text-muted/70 uppercase tracking-widest font-medium max-w-[150px]">One-time transaction. Instant Digital Access.</p>
        </div>
        <a href="https://wa.link/on8d67" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto text-center group inline-flex items-center justify-center gap-4">
          Acquire Planner 
          <svg className="w-5 h-5 text-dark transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>
    </div>
  );
}
