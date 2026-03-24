"use client";

import { useState, useEffect, useMemo } from "react";
import { Book } from "@/types/book";
import { fetchBooks } from "@/lib/fetchBooks";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import BookCard from "@/components/BookCard";
import BookCardSkeleton from "@/components/BookCardSkeleton";

const BOOKS_PER_PAGE = 10;

export default function BookCatalog() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const loadBooks = async () => {
            try {
                setLoading(true);
                const data = await fetchBooks();
                setBooks(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to load books");
            } finally {
                setLoading(false);
            }
        };

        loadBooks();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedCategory]);

    const categories = useMemo(() => {
        const uniqueCategories = [
            ...new Set(books.map((b) => b.category).filter(Boolean)),
        ];
        return uniqueCategories.sort();
    }, [books]);

    const filteredBooks = useMemo(() => {
        return books.filter((book) => {
            const matchesSearch = book.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
            const matchesCategory =
                selectedCategory === "" || book.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [books, searchQuery, selectedCategory]);

    const totalPages = Math.ceil(filteredBooks.length / BOOKS_PER_PAGE);
    const paginatedBooks = useMemo(() => {
        const start = (currentPage - 1) * BOOKS_PER_PAGE;
        return filteredBooks.slice(start, start + BOOKS_PER_PAGE);
    }, [filteredBooks, currentPage]);

    useEffect(() => {
        if (currentPage > 1 || searchQuery || selectedCategory) {
            const element = document.getElementById("search-input");
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [currentPage, searchQuery, selectedCategory]);

    return (
        <div className="py-20 relative overflow-hidden bg-dark">
            <div className="absolute top-1/4 -left-[20%] w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none z-0" />
            <div className="max-w-7xl mx-auto relative z-20 px-6 sm:px-8 lg:px-12">
                
                <div className="flex flex-col items-center text-center mb-16 relative z-10">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="w-6 h-[1px] bg-gold/40" />
                        <p className="text-[0.65rem] tracking-[0.25em] font-medium uppercase text-gold">Printed Editions</p>
                        <span className="w-6 h-[1px] bg-gold/40" />
                    </div>
                    <h2 className="font-cormorant text-[clamp(2.5rem,3.5vw,3.5rem)] font-light leading-tight text-cream mb-4">
                        The <span className="text-gradient italic font-medium">Library.</span>
                    </h2>
                    <p className="text-muted text-base leading-relaxed max-w-xl font-light">Explore our curated collection of impactful literature, engineered for deep academic and entrepreneurial growth.</p>
                </div>

                <div className="relative mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    <div className="flex justify-center">
                        <div className="w-full max-w-3xl glass p-2 rounded-2xl md:rounded-[32px] soft-glow border border-gold/10">
                            <SearchBar onSearch={setSearchQuery} />
                        </div>
                    </div>
                </div>

                <div className="mb-16 md:mb-24 relative z-20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    {categories.length > 0 && (
                        <div className="flex flex-col items-center gap-6">
                            <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-muted relative group cursor-default">
                                Browse by Category
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-gold/50 group-hover:w-full transition-all duration-300" />
                            </span>
                            <CategoryFilter
                                categories={categories}
                                selected={selectedCategory}
                                onSelect={setSelectedCategory}
                            />
                        </div>
                    )}
                </div>

                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <BookCardSkeleton key={i} />
                        ))}
                    </div>
                )}

                {error && (
                    <div className="py-24 text-center">
                        <div className="inline-flex p-5 rounded-3xl bg-red-950/20 border border-red-900/30 mb-6 backdrop-blur-md">
                            <svg className="w-10 h-10 text-red-500/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-cormorant text-cream font-light tracking-wide">Connection Interrupted</h3>
                        <p className="text-muted mt-3 font-light">{error}</p>
                        <button onClick={() => window.location.reload()} className="mt-8 px-8 py-3 bg-gold/10 border border-gold/30 text-gold font-medium tracking-[0.15em] uppercase text-xs hover:bg-gold hover:text-dark transition-all rounded-full">
                            Refresh Connection
                        </button>
                    </div>
                )}

                {!loading && !error && filteredBooks.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
                        {paginatedBooks.map((book, index) => (
                            <div
                                key={`${book.title}-${index}`}
                                className="animate-fade-in"
                                style={{ animationDelay: `${0.2 + (index * 0.08)}s`, animationFillMode: 'both' }}
                            >
                                <BookCard book={book} />
                            </div>
                        ))}
                    </div>
                )}

                {!loading && !error && filteredBooks.length === 0 && (
                    <div className="py-20 text-center glass rounded-3xl border border-white/5 mx-auto max-w-2xl">
                        <h3 className="font-cormorant text-2xl text-cream font-light">No volumes found</h3>
                        <p className="text-muted/70 text-sm mt-3 font-light tracking-wide">Refine your search parameters to discover our collection.</p>
                    </div>
                )}

                {!loading && !error && totalPages > 1 && (
                    <div className="mt-24 flex items-center justify-center gap-8">
                        <button
                            id="pagination-prev"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prev => prev - 1)}
                            className="flex items-center gap-3 px-6 py-3 border border-white/10 rounded-full text-muted font-normal text-[0.7rem] tracking-[0.2em] uppercase hover:bg-white/5 hover:text-cream hover:border-white/20 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                            </svg>
                            Prev
                        </button>

                        <div className="flex items-center gap-3 text-[0.75rem] uppercase tracking-[0.25em] text-muted/70 bg-white/5 px-6 py-2 rounded-full border border-white/5">
                            <span className="text-gold font-medium">
                                {currentPage}
                            </span>
                            <span className="opacity-50">/</span>
                            <span>{totalPages}</span>
                        </div>

                        <button
                            id="pagination-next"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gold to-gold-light text-dark shadow-gold-glow rounded-full font-semibold text-[0.7rem] tracking-[0.2em] uppercase hover:scale-105 disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
                        >
                            Next
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
