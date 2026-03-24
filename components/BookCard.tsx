"use client";

import { useState } from "react";
import Image from "next/image";
import { Book } from "@/types/book";
import PriceDisplay from "./PriceDisplay";

function isValidUrl(str: string): boolean {
    if (!str) return false;
    try {
        return str.startsWith("http");
    } catch {
        return false;
    }
}

interface BookCardProps {
    book: Book;
}

export default function BookCard({ book }: BookCardProps) {
    const [imageError, setImageError] = useState(false);
    const hasValidImage = book.imageUrl && isValidUrl(book.imageUrl) && !imageError;

    const isUsd = book.price ? book.price.includes('$') : false;
    const parsedAmount = book.price ? parseFloat(book.price.replace(/[^0-9.]/g, '')) : NaN;
    const priceUsd = isUsd && !isNaN(parsedAmount) ? parsedAmount : null;

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-dark border border-white/5 transition-all duration-700 hover:shadow-gold-glow hover:-translate-y-2 hover:bg-surface/50">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/0 via-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
            
            {/* Book Cover Container */}
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-surface p-4 border-b border-white/5 z-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/40 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-[90%] w-[90%] shadow-[5px_5px_20px_rgba(0,0,0,0.8)] group-hover:shadow-[10px_10px_30px_rgba(212,175,55,0.15)] transition-all duration-700 group-hover:scale-105">
                    {hasValidImage ? (
                        <Image
                            src={book.imageUrl}
                            alt={book.title}
                            fill
                            loading="lazy"
                            unoptimized={true}
                            onError={() => setImageError(true)}
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                        />
                    ) : (
                        <div className="flex flex-col h-full w-full items-center justify-center bg-dark/50 border border-white/5 p-3 text-center gap-2">
                            <span className="w-6 h-[1px] bg-gold/30" />
                            <span className="italic font-cormorant text-muted text-xs">Artwork Unavailable</span>
                            <span className="w-6 h-[1px] bg-gold/30" />
                        </div>
                    )}
                </div>

                {/* Premium Category Overlay */}
                <div className="absolute top-3 right-3 z-20">
                    <span className="glass px-2.5 py-1 text-[0.5rem] font-bold uppercase tracking-[0.2em] text-gold rounded-full shadow-sm backdrop-blur-xl border-gold/20">
                        {book.category}
                    </span>
                </div>
            </div>

            {/* Details Container */}
            <div className="relative flex flex-1 flex-col justify-between p-5 md:p-6 z-10">
                <div className="space-y-3">
                    <h3 className="font-cormorant text-xl md:text-2xl font-light leading-snug text-cream line-clamp-2 transition-colors duration-500 group-hover:text-gold">
                        {book.title}
                    </h3>
                    <div className="w-8 h-px bg-white/10 transition-all duration-500 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-gold group-hover:to-transparent" />
                </div>

                <div className="mt-6 flex flex-col gap-4">
                    <div className="flex items-end justify-between">
                        <div className="flex flex-col">
                            <span className="text-[0.55rem] text-muted/70 uppercase tracking-[0.2em] mb-1">Valuation</span>
                            <p className="font-dm-sans text-lg font-medium text-cream tracking-tight group-hover:text-gold transition-colors duration-300">
                                {priceUsd !== null ? <PriceDisplay amountUsd={priceUsd} /> : book.price}
                            </p>
                        </div>
                        {/* Subtle Badge */}
                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gold/5 border border-gold/10 rounded-full">
                            <span className="w-1 h-1 rounded-full bg-gold" />
                            <span className="text-[0.45rem] text-gold tracking-widest uppercase font-bold">
                                Ltd Ed.
                            </span>
                        </div>
                    </div>

                    <a
                        href={book.sellarLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`buy-${book.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="relative w-full overflow-hidden flex items-center justify-center gap-3 py-2.5 border border-white/10 rounded-full text-[0.6rem] font-bold tracking-[0.2em] uppercase text-cream/90 transition-all duration-500 hover:bg-gold hover:text-dark hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] group/btn"
                    >
                        <span className="relative z-10">Acquire Volume</span>
                        <svg className="relative z-10 w-3.5 h-3.5 opacity-50 transition-all duration-500 group-hover/btn:translate-x-1.5 group-hover/btn:opacity-100 text-gold group-hover/btn:text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
