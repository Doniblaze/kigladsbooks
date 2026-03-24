import Hero from "@/components/Hero";
import FeaturedPlanner from "@/components/FeaturedPlanner";
import Divider from "@/components/Divider";
import PlannersGrid from "@/components/PlannersGrid";
import FreeTemplates from "@/components/FreeTemplates";
import HowItWorks from "@/components/HowItWorks";
import BookCatalog from "@/components/BookCatalog";

export default function Home() {
  return (
    <main className="bg-dark text-cream font-dm-sans selection:bg-gold/30 selection:text-cream min-h-screen overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-4 bg-dark/70 backdrop-blur-[30px] border-b border-white/5 shadow-2xl shadow-black/50">
        <a href="#" className="flex items-center gap-4 no-underline group scale-95 md:scale-100">
          <div className="relative flex items-center justify-center w-11 h-11 bg-gradient-to-br from-gold/10 to-transparent rounded-xl border border-gold/20 group-hover:border-gold/50 transition-all duration-700 overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
             <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
             <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 relative z-10 transition-transform duration-700 group-hover:scale-110">
               <path d="M16 11V21M16 11C14.5 11 11 12 8 12V22C11 22 14.5 21 16 21M16 11C17.5 11 21 12 24 12V22C21 22 17.5 21 16 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold"/>
               <path d="M12 16H13M19 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gold opacity-50"/>
             </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-cormorant text-2xl font-normal text-cream tracking-wide group-hover:text-gold transition-colors duration-500">KiGlads</span>
            <span className="text-[0.55rem] tracking-[0.35em] uppercase text-gold/60 font-semibold -mt-1 ml-0.5">Collection</span>
          </div>
        </a>
        
        <ul className="hidden md:flex items-center gap-12 list-none m-0 p-0">
          {[
            { label: "Planners", id: "planners" },
            { label: "Free", id: "free" },
            { label: "How It Works", id: "how" },
            { label: "Books", id: "catalog" }
          ].map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="relative text-cream/70 no-underline text-[0.68rem] font-semibold tracking-[0.2em] uppercase transition-colors duration-500 hover:text-gold group py-2">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold to-gold-dark transition-all duration-500 group-hover:w-full rounded-full" />
              </a>
            </li>
          ))}
        </ul>
        <a href="#planners" className="hidden md:flex relative overflow-hidden bg-gold/10 border border-gold/30 text-gold px-7 py-2.5 font-dm-sans text-[0.7rem] font-bold tracking-[0.15em] uppercase cursor-pointer no-underline transition-all duration-500 hover:bg-gold hover:text-dark hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] rounded-full">
          Shop Now
        </a>
      </nav>

      <Hero />
      <Divider />
      <FeaturedPlanner />
      <Divider />
      <PlannersGrid />
      <FreeTemplates />
      <HowItWorks />
      <Divider />
      <div id="catalog">
        <BookCatalog />
      </div>
      
      <footer className="border-t border-[var(--border)] py-16 px-6 relative overflow-hidden mt-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
            <div className="flex items-center justify-center w-16 h-16 bg-gold/5 rounded-2xl border border-gold/10 mb-6 shadow-gold-glow">
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M16 11V21M16 11C14.5 11 11 12 8 12V22C11 22 14.5 21 16 21M16 11C17.5 11 21 12 24 12V22C21 22 17.5 21 16 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold"/>
                 </svg>
            </div>
            <div className="font-cormorant text-4xl font-light text-gradient tracking-wide mb-4">KiGlads Books</div>
            <p className="text-[0.85rem] text-muted tracking-[0.15em] mb-12 uppercase font-medium">Premium Book Curation & Planners</p>
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <a href="#planners" className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-cream/60 hover:text-gold transition-colors no-underline">Shop Planners</a>
              <a href="#free" className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-cream/60 hover:text-gold transition-colors no-underline">Free Templates</a>
              <a href="#how" className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-cream/60 hover:text-gold transition-colors no-underline">About Us</a>
              <a href="#catalog" className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-cream/60 hover:text-gold transition-colors no-underline">Book Catalog</a>
            </div>
            <div className="w-24 h-[1px] bg-gold/20 mb-8" />
            <p className="text-[0.75rem] text-muted opacity-50">© {new Date().getFullYear()} KiGlads Books. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
