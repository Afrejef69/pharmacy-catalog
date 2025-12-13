"use client";

import { useCatalog } from "@/app/context/CatalogContext";

type Props ={
    categories: string[];
}

export default function CategoryFilter({ categories }: Props) {
    const { category, setCategory } = useCatalog();

    return (
        <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-md px-3 py-2 w-full sm:w-64"
        >
            <option value="">All categories</option>
            {categories.map((cat) => (
                <option key={cat} value={cat}>
                    {cat}
                </option>
            ))}
        </select>
    )
}