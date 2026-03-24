const steps = [
  { num: "I", title: "Curation & Selection", desc: "Browse our elite academic collection and select the template architecture that aligns perfectly with your goals." },
  { num: "II", title: "Instant Procurement", desc: "Complete a secure, one-time transaction and receive immediate, lifetime access to your digital files." },
  { num: "III", title: "Execution & Mastery", desc: "Import directly into GoodNotes or your preferred PDF annotator, and execute your academic vision with precision." }
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative" id="how">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/5 rounded-[100%] blur-[120px] pointer-events-none z-0" />
      
      <div className="flex flex-col items-center text-center mb-20 relative z-10">
        <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-gold/20 bg-gold/5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="text-[0.65rem] tracking-[0.25em] uppercase text-gold font-medium">The Blueprint</span>
        </div>
        <h2 className="font-cormorant text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-tight text-cream">
          Seamless <span className="text-gradient italic font-medium">Integration.</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col p-10 md:p-12 border border-gold/10 bg-dark/50 backdrop-blur-xl transition-all duration-500 hover:border-gold/30 hover:bg-gold/5 hover:-translate-y-2 group rounded-2xl shadow-soft">
            <div className="font-cormorant text-6xl font-light text-gold/20 leading-none mb-8 transition-colors duration-500 group-hover:text-gold/60">{step.num}</div>
            <h3 className="font-cormorant text-2xl text-cream mb-4 font-normal tracking-wide transition-colors group-hover:text-gold">{step.title}</h3>
            <p className="text-[0.9rem] text-muted leading-relaxed font-light">{step.desc}</p>
            <div className="mt-8 w-12 h-[1px] bg-gold/20 transition-all duration-500 group-hover:w-full group-hover:bg-gold/50" />
          </div>
        ))}
      </div>
    </section>
  );
}
