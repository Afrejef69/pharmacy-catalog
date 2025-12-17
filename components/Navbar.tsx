"use client";

import Image from "next/image";
import CategoryFilter from "./CategoryFilter";
import { useEffect, useState } from "react";
import { Wrapper } from ".";

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
        <header 
            className="fixed top-0 z-50 left-0 right-0 border-b border-subtle backdrop-blur supports-[backdrop-filter]:bg-[var(--bg)] shadow"
            style={{backgroundColor: "var(--bg) "}}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-center">
                    {/** Top Row */}
                    <div className="flex flex-col items-center text-center gap-2">
                        <div className="relative w-40 h-16 sm:w48 sm:h-20">
                            <Image
                            src="/logo-shalom.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                        </div>
                        <div className="leading-tight">
                            <p className="text-xs uppercase tracking-widest text-muted">Farmacia</p>
                            <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide text-[var(--text)]">Shalom</h1>
                            <p className="text-xs italic text-muted">Abierto hasta la media noche</p>
                        </div>
                    </div>

                    {/** Search & CAtegory */}
                    <div className="flex flex-col gap-2">
                        <Wrapper />
                        <CategoryFilter />
                    </div>

                    {/** Dark mode toggle */}
                    <div className="flex md:justify-end">
                        <button
                            onClick={() => setDark(!dark)}
                            className="rounded-lg p-2 border border-subtle hover:bg-black/5 dark:hover:bg-white/10 transition"
                            aria-label="Toggle theme"
                        >
                            {dark ? "🌙" : "☀️"}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}