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
            <div className="relative flex items-center">
                <div className="absolute left-6 md:left-8 flex items-center pointer-events-none z-10">
                    <svg
                        className="w-5 h-5 text-neutral-400 group-focus-within:text-brand transition-colors duration-500"
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
                    placeholder="Search titles..."
                    className="w-full glass rounded-2xl md:rounded-3xl py-4 md:py-6 pl-14 md:pl-20 pr-6 text-base md:text-xl text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-0 focus:border-brand/30 border-neutral-200 transition-all duration-500 shadow-premium"
                />
            </div>
        </div>
    );
}
