"use client";

import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

export const Navbar = () => {
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
                <div className="relative">
                    <SearchBar />
                </div>

                {/** Categories */}
                <div className="flex gap-2 overflow-x-auto pb-1">
                    <CategoryFilter />
                </div>

            </div>
        </header>
    )
}