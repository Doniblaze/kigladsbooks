import PriceDisplay from "./PriceDisplay";

const products = [
  {
    icon: "I",
    tag: "Study · Weekly Ecosystem",
    name: "Digital Student Planner Store",
    desc: "Multiple planner formats covering every study need. From weekly schedules to granular assignment tracking.",
    features: ["Weekly schedules", "Assignment tracker", "Exam tracker", "Interactive PDF"],
    priceUsd: 7.99
  },
  {
    icon: "II",
    tag: "College · Full Year Protocol",
    name: "College Year Planner Ebook",
    desc: "A complete architecture that goes beyond academics — track your finances, mindsets, and academic performance throughout the year.",
    features: ["Study planner", "Financial tracker", "Mood tracking", "Academic goals"],
    priceUsd: 12.99
  },
  {
    icon: "III",
    tag: "Template · Time Architecture",
    name: "Student Planner Template",
    desc: "A structured timetable system engineered for students who prefer building their own routines from a master foundation.",
    features: ["Weekly timetable", "Daily schedule", "Exam tracking", "Digital-ready"],
    priceUsd: 5.99
  }
];

export default function PlannersGrid() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-[100%] blur-[150px] pointer-events-none z-0" />
      
      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-[1px] bg-gold/40" />
          <p className="text-[0.65rem] tracking-[0.25em] font-medium uppercase text-gold">Digital Student Assets</p>
          <span className="w-8 h-[1px] bg-gold/40" />
        </div>
        <h2 className="font-cormorant text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight text-cream mb-6">
          The <span className="text-gradient font-normal italic">Complete</span> Collection.
        </h2>
        <p className="text-muted text-lg leading-relaxed max-w-2xl font-light">Every planner is crafted to perfection for real student life — engineered for intense focus, crafted to be visually stunning.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10 w-full mt-16 max-w-6xl mx-auto">
        {products.map((product, i) => (
          <a key={i} href="https://wa.link/on8d67" target="_blank" rel="noopener noreferrer" className="relative flex flex-col p-px transition-all duration-700 group cursor-pointer no-underline overflow-hidden rounded-3xl bg-surface border border-white/5 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative h-full flex flex-col p-6 md:p-8 bg-dark rounded-[23px] z-10 border border-white/5 transition-all duration-500 group-hover:border-gold/20">
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center font-cormorant text-lg text-gold shadow-[inset_0_0_10px_rgba(212,175,55,0.1)] transition-transform duration-500 group-hover:scale-110">
                  {product.icon}
                </div>
                <div className="px-3 py-1 border border-gold/20 rounded-full text-[0.6rem] tracking-[0.2em] font-bold text-gold uppercase bg-gold/5">
                   <PriceDisplay amountUsd={product.priceUsd} />
                </div>
              </div>

              <p className="text-[0.55rem] tracking-[0.25em] font-medium uppercase text-gold/70 mb-3">{product.tag}</p>
              <h3 className="font-cormorant text-2xl font-normal text-cream leading-tight mb-4 drop-shadow-md group-hover:text-gold transition-colors duration-300">{product.name}</h3>
              <p className="text-[0.85rem] text-muted leading-relaxed font-light mb-6 flex-grow">{product.desc}</p>
              
              <div className="flex flex-col gap-2 mb-8 w-full">
                {product.features.map((feat, j) => (
                  <div key={j} className="flex items-center gap-2 text-[0.7rem] text-cream/70 tracking-wide font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 flex-shrink-0 group-hover:bg-gold transition-colors duration-300" />
                    {feat}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center w-full mt-auto">
                <div className="w-full text-center py-3 border border-white/10 rounded-full font-dm-sans text-[0.65rem] font-bold tracking-[0.15em] uppercase text-cream/80 transition-all duration-500 group-hover:bg-gold group-hover:text-dark group-hover:border-gold shadow-gold-glow pointer-events-none">
                  Acquire Asset
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
