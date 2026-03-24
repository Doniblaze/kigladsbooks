const freeLibrary = [
  { name: "Daily Planner", type: "PDF Document", file: "kiglads_daily_planner.pdf" },
  { name: "Weekly Schedule", type: "PDF Document", file: "kiglads_weekly_schedule.pdf" },
  { name: "Exam Tracker", type: "Excel / PDF", file: "kiglads_exam_tracker.pdf" }
];

export default function FreeTemplates() {
  return (
    <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="free">
      <div className="relative w-full py-24 px-8 md:px-16 flex flex-col items-center justify-center overflow-hidden border border-gold/20 rounded-[40px] shadow-[0_20px_60px_-15px_rgba(212,175,55,0.1)] group">
        <div className="absolute inset-0 bg-dark z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 z-0 opacity-50 transition-opacity duration-1000 group-hover:opacity-100" />
        <div className="absolute -left-32 -top-32 w-64 h-64 bg-gold/10 rounded-full blur-[80px] z-0" />
        <div className="absolute -right-32 -bottom-32 w-64 h-64 bg-gold/10 rounded-full blur-[80px] z-0" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-cormorant font-bold text-[10rem] md:text-[16rem] text-gold/5 tracking-[0.1em] pointer-events-none z-0 select-none whitespace-nowrap overflow-hidden w-full text-center">
          FREE
        </div>

        <p className="text-[0.65rem] tracking-[0.3em] font-medium uppercase text-gold mb-6 relative z-10">No cost. No catch.</p>
        <h2 className="font-cormorant text-5xl md:text-6xl font-light text-cream mb-6 relative z-10 tracking-wide text-center">
          Curated Free Library.
        </h2>
        <p className="text-muted text-lg mb-12 max-w-xl relative z-10 text-center font-light leading-relaxed">
          Download our premium planner templates at absolutely no cost and experience the KiGlads structural quality firsthand.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 w-full max-w-4xl relative z-10">
          {freeLibrary.map((item, i) => (
            <a key={i} href={`/${item.file}`} download className="flex flex-col items-center justify-center p-8 bg-surface border border-white/5 rounded-2xl hover:bg-gold/5 hover:border-gold/20 hover:-translate-y-1 transition-all duration-300 group/download no-underline relative">
              <span className="absolute top-4 right-4 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              <svg className="w-8 h-8 text-gold/50 mb-4 group-hover/download:text-gold transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              <h4 className="font-cormorant text-xl text-cream font-medium tracking-wide mb-1 text-center">{item.name}</h4>
              <span className="text-[0.55rem] uppercase tracking-widest text-gold opacity-80 mt-1 flex items-center gap-1 group-hover/download:text-gold transition-colors">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download Master
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
