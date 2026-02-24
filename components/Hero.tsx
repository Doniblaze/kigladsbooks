"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative overflow-hidden min-h-[350px] md:h-[600px] flex flex-col items-center justify-center text-white px-6">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.jpg"
                    alt="KiGlads Books Hero"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-neutral-900/40" />
                <div className="absolute inset-0 hero-gradient opacity-80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FCFCFB]" />
            </div>

            <div className="relative z-10 text-center max-w-4xl animate-premium-in">
                <div className="inline-block mb-4 px-4 py-2 glass rounded-full border-white/20">
                    <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-white/90">
                        The Literary Collection
                    </span>
                </div>

                <h1 className="text-5xl md:text-8xl font-light tracking-tight mb-4 text-white">
                    KIGLADS<span className="font-black text-white/40">BOOKS</span>
                </h1>

                <div className="mx-auto w-16 h-0.5 bg-accent/60 mb-8" />

                <p className="text-xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
                    Curating the world's most <span className="font-medium italic border-b-2 border-accent/40">impactful</span> literature for the modern reader.
                </p>
            </div>
        </div>
    );
}
