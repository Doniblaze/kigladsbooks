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
            <div className="max-w-7xl mx-auto relative z-20 pb-20">

                {/* Search Bar with Intersecting Line Section - Moved Up & Boldened */}
                <div className="relative mb-20 px-4 sm:px-6 lg:px-8 -mt-24">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t-2 border-brand/40" />
                    </div>
                    <div className="relative flex justify-center">
                        <SearchBar onSearch={setSearchQuery} />
                    </div>
                </div>

                {/* Category Pills */}
                <div className="mb-10">
                    {categories.length > 0 && (
                        <CategoryFilter
                            categories={categories}
                            selected={selectedCategory}
                            onSelect={setSelectedCategory}
                        />
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

                {/* Results Info */}
                {!loading && !error && filteredBooks.length > 0 && (
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-sm font-medium text-slate-600">
                            Found <span className="text-brand font-bold">{filteredBooks.length}</span> titles
                        </p>
                        {(searchQuery || selectedCategory) && (
                            <button
                                onClick={() => { setSearchQuery(""); setSelectedCategory(""); }}
                                className="text-sm font-bold text-brand hover:underline"
                            >
                                Reset Filters
                            </button>
                        )}
                    </div>
                )}

                {/* Books Grid */}
                {!loading && !error && filteredBooks.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {paginatedBooks.map((book, index) => (
                            <div
                                key={`${book.title}-${index}`}
                                className="opacity-0 animate-fadeIn"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <BookCard book={book} />
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!loading && !error && filteredBooks.length === 0 && (
                    <div className="py-20 text-center border-2 border-dashed border-slate-100 rounded-3xl">
                        <h3 className="text-xl font-bold text-slate-400">No books match your criteria</h3>
                        <p className="text-slate-400 mt-1">Try a different search term or category</p>
                    </div>
                )}

                {/* Pagination Controls - Per Sketch */}
                {!loading && !error && totalPages > 1 && (
                    <div className="mt-16 flex items-center justify-center gap-4">
                        <button
                            id="pagination-prev"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prev => prev - 1)}
                            className="flex items-center gap-2 px-6 py-2 rounded-full border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Prev
                        </button>

                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-slate-400">Page</span>
                            <span className="bg-brand/10 text-brand px-3 py-1 rounded-lg text-sm font-black">
                                {currentPage}
                            </span>
                            <span className="text-sm font-bold text-slate-400">of {totalPages}</span>
                        </div>

                        <button
                            id="pagination-next"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            className="group flex items-center gap-2 px-8 py-3 rounded-full bg-brand text-white font-bold hover:bg-brand-dark shadow-lg shadow-brand/20 disabled:opacity-30 disabled:shadow-none transition-all scale-105"
                        >
                            Next
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="bg-slate-50 py-12 mt-20 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-2xl font-black text-brand tracking-tighter mb-4 opacity-50">KIGLADSBOOKS</p>
                    <p className="text-slate-400 text-sm">© {new Date().getFullYear()} — Premium Book Curation</p>
                </div>
            </footer>
        </div>
    );
}
