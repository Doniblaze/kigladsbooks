"use client";

import { useState } from "react";
import { Book } from "@/types/book";

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

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(106,120,67,0.25)] hover:-translate-y-4">
            {/* Book Cover Container */}
            <div className="relative aspect-square w-full overflow-hidden bg-slate-50">
                {hasValidImage ? (
                    <img
                        src={book.imageUrl}
                        alt={book.title}
                        onError={() => setImageError(true)}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-100 italic font-serif text-slate-300">
                        Cover Coming Soon
                    </div>
                )}

                {/* Premium Category Overlay */}
                <div className="absolute top-6 left-6">
                    <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-md px-5 py-2 text-[11px] font-black uppercase tracking-widest text-brand shadow-sm border border-slate-100">
                        {book.category}
                    </span>
                </div>
            </div>

            {/* Details Container */}
            <div className="flex flex-1 flex-col justify-between p-8">
                <div className="space-y-2">
                    <h3 className="text-xl font-bold leading-tight text-slate-800 line-clamp-2 group-hover:text-brand transition-colors duration-500">
                        {book.title}
                    </h3>
                </div>

                <div className="mt-8 flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">Price</span>
                            <p className="text-2xl font-black text-brand tracking-tighter">
                                {book.price}
                            </p>
                        </div>
                        {/* Decorative Element */}
                        <div className="w-10 h-10 rounded-full bg-brand/5 flex items-center justify-center text-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </div>
                    </div>

                    <a
                        href={book.sellarLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`buy-${book.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="w-full flex items-center justify-center gap-3 rounded-[1.25rem] bg-brand py-5 text-sm font-black uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/40 active:scale-95 group/btn"
                    >
                        <span>Buy on Sellar</span>
                        <svg className="w-5 h-5 transition-transform duration-500 group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
