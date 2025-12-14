"use client";

import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    return (
        <header className="sticky top-0 z-50 bg-surface border-b border-subtle dark:bg-black shadow">
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-3">
                
                {/** Top Row */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                            Rx
                        </div>
                        <div className="leading-tight">
                            <p className="text-sm text-muted">Pharmacy</p>
                            <h1 className="text-lg font-semibold">Name</h1>
                        </div>
                    </div>
                </div>

                {/** Search */}
                <SearchBar />

                {/** Categories */}
                <CategoryFilter />

                {/** Dark mode toggle */}
                <button
                    onClick={() => setDark(!dark)}
                    className="rounded-lg p-2 hover:bg-black/10 dark:hover:bg-white/10 transition"
                    aria-label="Toggle theme"
                >
                    {dark ? "🌙" : "☀️"}
                </button>
            </div>
        </header>
    )
}