"use client";

import { useCatalog } from "@/app/context/CatalogContext";
import { useEffect, useRef, useState } from "react";

export default function CategoryFilter() {
    const { category, setCategory, categories } = useCatalog();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative w-full sm:w-64">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm rounded-xl bg-[var(--card-bg)] text-[var(--text)] border border-[var(--border)] hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
                <span className="truncate">
                    {category || "Todas las categorias"}
                </span>
                <span className="text-xs opacity-70">▼</span>
            </button>

            {/** Dropdown */}
            {open && (
                <div className="absolute z-50 mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--card-bg)] shadow-lg max-h-60 overflow-auto">
                    <button onClick={() => {
                        setCategory("");
                        setOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                    >
                        Todas las categorias
                    </button>
                    
                    {categories.map((cat) => (
                        <button
                            key = {cat}
                            onClick={() => {
                                setCategory(cat);
                                setOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}