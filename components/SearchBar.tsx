"use client";

import { useState } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [query, setQuery] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <div className="relative w-full group">
            {/* The Input Container */}
            <div className="relative flex items-center w-full">
                <div className="absolute left-6 md:left-8 flex items-center pointer-events-none z-10">
                    <svg
                        className="w-5 h-5 text-muted transition-colors duration-500 group-focus-within:text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <input
                    id="search-input"
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search the collection..."
                    className="w-full bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 py-5 md:py-6 pl-14 md:pl-20 pr-8 text-base md:text-lg text-cream placeholder:text-muted/60 focus:outline-none focus:ring-0 focus:border-gold focus:bg-white/10 transition-all duration-500 focus:shadow-[0_0_30px_rgba(212,175,55,0.15)] font-light tracking-wide"
                />
            </div>
            {/* Subtle glow layer behind the input */}
            <div className="absolute inset-0 bg-gold/5 rounded-full blur-xl -z-10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>
    );
}
