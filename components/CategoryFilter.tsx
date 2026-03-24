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
        <div className="relative w-full max-w-[1000px] mx-auto z-20">
            <div className="flex overflow-x-auto pb-4 items-center justify-start sm:justify-center gap-4 px-6 no-scrollbar">
                <button
                    id="category-all"
                    onClick={() => onSelect("")}
                    className={`flex-shrink-0 px-7 py-2.5 rounded-full text-[0.65rem] font-bold transition-all duration-500 uppercase tracking-[0.2em] transform border border-white/10 ${selected === ""
                        ? "bg-gradient-to-r from-gold to-gold-light text-dark shadow-[0_0_20px_rgba(212,175,55,0.3)] border-gold/50 scale-105"
                        : "bg-white/5 text-muted hover:bg-white/10 hover:text-cream hover:border-white/20"
                        }`}
                >
                    All Collections
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        id={`category-${category.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => onSelect(category)}
                        className={`flex-shrink-0 px-7 py-2.5 rounded-full text-[0.65rem] font-bold transition-all duration-500 uppercase tracking-[0.2em] transform border border-white/10 ${selected === category
                            ? "bg-gradient-to-r from-gold to-gold-light text-dark shadow-[0_0_20px_rgba(212,175,55,0.3)] border-gold/50 scale-105"
                            : "bg-white/5 text-muted hover:bg-white/10 hover:text-cream hover:border-white/20"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Subtle Gradient Fades for Mobile Scroll */}
            <div className="absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-dark to-transparent pointer-events-none md:hidden z-10" />
            <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-dark to-transparent pointer-events-none md:hidden z-10" />
        </div>
    );
}
