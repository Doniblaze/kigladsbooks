"use client";

interface CategoryFilterProps {
    categories: string[];
    selected: string;
    onSelect: (category: string) => void;
}

export default function CategoryFilter({
    categories,
    selected,
    onSelect,
}: CategoryFilterProps) {
    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="flex overflow-x-auto pb-4 items-center justify-start sm:justify-center gap-3 px-6 no-scrollbar">
                <button
                    id="category-all"
                    onClick={() => onSelect("")}
                    className={`flex-shrink-0 rounded-full px-6 py-2.5 text-xs font-bold transition-all duration-300 uppercase tracking-[0.15em] transform ${selected === ""
                        ? "bg-brand text-white shadow-premium scale-105"
                        : "bg-white text-neutral-400 border border-neutral-100 hover:border-brand/40 hover:text-brand"
                        }`}
                >
                    All Collections
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        id={`category-${category.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => onSelect(category)}
                        className={`flex-shrink-0 rounded-full px-6 py-2.5 text-xs font-bold transition-all duration-300 uppercase tracking-[0.15em] transform ${selected === category
                            ? "bg-brand text-white shadow-premium scale-105"
                            : "bg-white text-neutral-400 border border-neutral-100 hover:border-brand/40 hover:text-brand"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Subtle Gradient Fades for Mobile Scroll */}
            <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-[#FCFCFB] to-transparent pointer-events-none md:hidden" />
            <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-[#FCFCFB] to-transparent pointer-events-none md:hidden" />
        </div>
    );
}
