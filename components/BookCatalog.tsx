"use client";

import { useState, useEffect, useMemo } from "react";
import { Book } from "@/types/book";
import { fetchBooks } from "@/lib/fetchBooks";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import BookCard from "@/components/BookCard";
import BookCardSkeleton from "@/components/BookCardSkeleton";
import Hero from "@/components/Hero";

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

    // Reset to first page when search or category changes
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

    // Pagination Logic
    const totalPages = Math.ceil(filteredBooks.length / BOOKS_PER_PAGE);
    const paginatedBooks = useMemo(() => {
        const start = (currentPage - 1) * BOOKS_PER_PAGE;
        return filteredBooks.slice(start, start + BOOKS_PER_PAGE);
    }, [filteredBooks, currentPage]);

    // Scroll to products when page changes
    useEffect(() => {
        if (currentPage > 1 || searchQuery || selectedCategory) {
            const element = document.getElementById("search-input");
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [currentPage, searchQuery, selectedCategory]);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Banner */}
            <Hero />

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto relative z-20 px-4 sm:px-6 lg:px-8">

                {/* Search Bar - Repositioned for elegance */}
                <div className="relative -mt-10 md:-mt-14 mb-12 md:mb-20 animate-premium-in">
                    <div className="flex justify-center">
                        <div className="w-full max-w-2xl soft-glow rounded-2xl md:rounded-3xl">
                            <SearchBar onSearch={setSearchQuery} />
                        </div>
                    </div>
                </div>

                {/* Refining the Category Filter Spacing */}
                <div className="mb-12 md:mb-20">
                    {categories.length > 0 && (
                        <div className="flex flex-col items-center gap-6">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                                Browse by Genre
                            </span>
                            <CategoryFilter
                                categories={categories}
                                selected={selectedCategory}
                                onSelect={setSelectedCategory}
                            />
                        </div>
                    )}
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <BookCardSkeleton key={i} />
                        ))}
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="py-20 text-center">
                        <div className="inline-flex p-4 rounded-full bg-red-50 mb-4">
                            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Connection Issue</h3>
                        <p className="text-slate-500 mt-2">{error}</p>
                        <button onClick={() => window.location.reload()} className="mt-6 px-6 py-2 bg-brand text-white rounded-full hover:bg-brand-dark transition-all">
                            Try Again
                        </button>
                    </div>
                )}


                {/* Books Grid */}
                {!loading && !error && filteredBooks.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {paginatedBooks.map((book, index) => (
                            <div
                                key={`${book.title}-${index}`}
                                className="opacity-0 animate-premium-in"
                                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                            >
                                <BookCard book={book} />
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!loading && !error && filteredBooks.length === 0 && (
                    <div className="py-12 text-center border-2 border-dashed border-slate-100 rounded-3xl">
                        <h3 className="text-lg font-bold text-slate-400">No books match your criteria</h3>
                        <p className="text-slate-400 text-sm mt-1">Try a different search term or category</p>
                    </div>
                )}

                {/* Pagination Controls */}
                {!loading && !error && totalPages > 1 && (
                    <div className="mt-12 flex items-center justify-center gap-4">
                        <button
                            id="pagination-prev"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prev => prev - 1)}
                            className="flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Prev
                        </button>

                        <div className="flex items-center gap-2 text-xs">
                            <span className="font-bold text-slate-400 uppercase tracking-widest">Page</span>
                            <span className="bg-brand/10 text-brand px-2.5 py-1 rounded-lg font-black">
                                {currentPage}
                            </span>
                            <span className="font-bold text-slate-400 uppercase tracking-widest">of {totalPages}</span>
                        </div>

                        <button
                            id="pagination-next"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            className="group flex items-center gap-2 px-6 py-2 rounded-full bg-brand text-white font-bold text-sm hover:bg-brand-dark shadow-md shadow-brand/20 disabled:opacity-30 disabled:shadow-none transition-all"
                        >
                            Next
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="bg-slate-50 py-10 mt-12 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-xl font-black text-brand tracking-tighter mb-2 opacity-50">KIGLADSBOOKS</p>
                    <p className="text-slate-400 text-xs">© {new Date().getFullYear()} — Premium Books</p>
                </div>
            </footer>
        </div>
    );
}
