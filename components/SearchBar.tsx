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
        <div className="relative w-full max-w-3xl mx-auto group">
            {/* Decorative Blur behind search */}
            <div className="absolute inset-0 bg-brand/5 blur-3xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-700" />

            {/* The Mask: A small horizontal padding of white to cover the intersecting line neatly */}
            <div className="relative flex items-center px-4 rounded-full">
                <div className="absolute left-12 flex items-center pointer-events-none transition-colors group-focus-within:text-brand">
                    <svg
                        className="w-7 h-7 text-slate-300 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <input
                    id="search-input"
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search for a masterpiece..."
                    className="w-full rounded-[2.5rem] border-2 border-brand/30 bg-white py-6 pl-20 pr-10 text-xl text-slate-800 placeholder:font-light placeholder:text-slate-300 shadow-xl shadow-brand/5 transition-all duration-700 focus:outline-none focus:ring-8 focus:ring-brand/5 focus:border-brand focus:shadow-brand/20"
                />
                {/* Animated line indicator */}
                <div className="absolute bottom-4 left-14 right-14 h-0.5 bg-brand scale-x-0 group-focus-within:scale-x-100 transition-transform duration-700 origin-center opacity-30" />
            </div>
        </div>
    );
}
