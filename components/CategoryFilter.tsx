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
        <div className="flex flex-wrap items-center justify-center gap-3">
            <button
                id="category-all"
                onClick={() => onSelect("")}
                className={`rounded-full px-8 py-3 text-sm font-black transition-all duration-500 uppercase tracking-widest ${selected === ""
                        ? "bg-brand text-white shadow-xl shadow-brand/30 scale-110"
                        : "bg-white text-slate-400 border-2 border-slate-100 hover:border-brand/40 hover:text-brand"
                    }`}
            >
                All
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    id={`category-${category.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => onSelect(category)}
                    className={`rounded-full px-8 py-3 text-sm font-black transition-all duration-500 uppercase tracking-widest ${selected === category
                            ? "bg-brand text-white shadow-xl shadow-brand/30 scale-110"
                            : "bg-white text-slate-400 border-2 border-slate-100 hover:border-brand/40 hover:text-brand"
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
