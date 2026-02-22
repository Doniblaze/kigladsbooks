"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative overflow-hidden h-[650px] flex flex-col items-center justify-center text-white px-4">
            {/* Background Image with Brightened & Filtered Overlay */}
            <div className="absolute inset-0 z-0 bg-[#6A7843]">
                <Image
                    src="/hero.jpg"
                    alt="KiGlads Books Hero"
                    fill
                    className="object-cover opacity-75"
                    priority
                />
                {/* Subtle Brand Wash */}
                <div className="absolute inset-0 bg-[#6A7843]/40" />
                {/* Soft Vignette & Bottom Blend */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white" />
            </div>

            <div className="relative z-10 text-center space-y-6 max-w-4xl">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-2 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                    KIGLADSBOOKS
                </h1>
                <div className="mx-auto w-32 h-1.5 bg-white/40 rounded-full" />
                <p className="text-xl md:text-3xl font-medium text-white/95 italic tracking-wide max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                    Curating the world's most <span className="underline decoration-white/30 underline-offset-8">impactful</span> literature.
                </p>
            </div>
        </div>
    );
}
