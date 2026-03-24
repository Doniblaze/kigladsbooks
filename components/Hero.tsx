"use client";

import { useEffect, useState } from "react";

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 relative overflow-hidden bg-dark">
            <div className="absolute inset-0 z-0 hero-gradient pointer-events-none opacity-80 mix-blend-screen" />
            <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

            <div className={`relative z-10 max-w-5xl w-full flex flex-col items-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-md mb-10 overflow-hidden group">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse-gold inline-block" />
                    <span className="text-[0.68rem] tracking-[0.25em] uppercase text-gold font-medium">The 2026 Academic Collection</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-[200%] group-hover:animate-shimmer" />
                </div>

                <h1 className="font-cormorant text-[clamp(4rem,10vw,8.5rem)] font-light leading-[1] tracking-tight text-cream mb-6 drop-shadow-2xl">
                    <span className="block opacity-90 animate-fade-in" style={{ animationDelay: '0.1s' }}>Plan your success,</span>
                    <span className="block italic text-gradient font-medium pr-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>With Intention.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted max-w-[550px] leading-[1.8] mt-6 mb-12 animate-fade-in font-light" style={{ animationDelay: '0.5s' }}>
                    Beautifully crafted ebook planners and academic trackers. Designed exclusively for students who treat their education as a masterpiece.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto animate-fade-in" style={{ animationDelay: '0.7s' }}>
                    <a href="#planners" className="btn-primary w-full sm:w-auto text-center px-6">Acquire Planners</a>
                    <a href="#free" className="btn-outline w-full sm:w-auto text-center group">
                        <span className="relative z-10">Free Templates</span>
                    </a>
                    <a href="https://wa.link/on8d67" target="_blank" rel="noopener noreferrer" className="btn-outline w-full sm:w-auto text-center group border-green-700/50 hover:bg-green-600/10 hover:border-green-500">
                        <span className="relative z-10 flex items-center justify-center gap-2 text-green-500 font-bold tracking-[0.15em]">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                            Event Planner Enquiry
                        </span>
                    </a>
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-[0.65rem] tracking-[0.3em] uppercase text-gold/60 pointer-events-none animate-fade-in" style={{ animationDelay: '1s' }}>
                <span className="rotate-90 origin-left translate-x-3 mb-8 opacity-50">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold to-transparent opacity-50 animate-float" />
            </div>
        </div>
    );
}
