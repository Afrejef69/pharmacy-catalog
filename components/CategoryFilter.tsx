"use client";

import { useCatalog } from "@/app/context/CatalogContext";

export default function CategoryFilter() {
    const { category, setCategory, categories } = useCatalog();

    return (
        <div>
            <button
                onClick={() => setCategory("")}
                className={`px-3 py-1 rounded-full text-sm border transition
                    ${category === ""
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-surface border-subtle text-muted hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                >
                All
            </button>

            {categories.map((cat) => (
                <button
                    key = {cat}
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-1 rounded-full text-sm border transition whitespace-nowrap
                        ${category === cat
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-surface border-subtle text-muted hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    )
}