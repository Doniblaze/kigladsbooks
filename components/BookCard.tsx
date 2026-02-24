"use client";

import { useState } from "react";
import Image from "next/image";
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
        <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-neutral-100 transition-all duration-700 hover:shadow-premium hover:-translate-y-2">
            {/* Book Cover Container */}
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-neutral-50 p-4">
                <div className="relative h-full w-full shadow-lg group-hover:shadow-2xl transition-shadow duration-700 rounded-sm">
                    {hasValidImage ? (
                        <Image
                            src={book.imageUrl}
                            alt={book.title}
                            fill
                            loading="lazy"
                            onError={() => setImageError(true)}
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-neutral-100 italic font-serif text-neutral-300 text-xs">
                            Cover Image Unavailable
                        </div>
                    )}
                </div>

                {/* Premium Category Overlay */}
                <div className="absolute top-6 left-6">
                    <span className="glass px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-brand border-white/20 rounded-md shadow-sm">
                        {book.category}
                    </span>
                </div>
            </div>

            {/* Details Container */}
            <div className="flex flex-1 flex-col justify-between p-6 md:p-10">
                <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-medium leading-tight text-neutral-900 line-clamp-2 transition-colors duration-500 group-hover:text-brand">
                        {book.title}
                    </h3>
                    <div className="w-10 h-0.5 bg-neutral-100 transition-all duration-500 group-hover:w-20 group-hover:bg-accent/40" />
                </div>

                <div className="mt-10 flex flex-col gap-8">
                    <div className="flex items-end justify-between">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">Acquisition</span>
                            <p className="text-3xl font-light text-brand tracking-tighter">
                                {book.price}
                            </p>
                        </div>
                        {/* Subtle Badge */}
                        <div className="text-xs font-medium text-neutral-300 italic">
                            Limited Edition
                        </div>
                    </div>

                    <a
                        href={book.sellarLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`buy-${book.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="w-full flex items-center justify-center gap-3 rounded-xl bg-neutral-950 py-5 text-xs font-black uppercase tracking-[0.3em] text-white transition-all duration-500 hover:bg-brand hover:shadow-xl active:scale-95 group/btn"
                    >
                        <span>Acquire Now</span>
                        <svg className="w-5 h-5 text-white/40 transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
