'use client';

import Image from "next/image";
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
            <div className="max-w-7xl mx-auto px-4 py-3 md:px-6 md:py-4">

                {/** Responsive */}
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:items-center">
                    
                    {/** Top Row */}
                    <div className="flex items-center gap-2 order-1 md:order-none">
                        <div className="relative w-10 h-10 md:w-40 md:h-16">
                            <Image
                            src="/logo-shalom.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                        </div>
                        <div className="hidden md:block leading-tight">
                            <p className="text-xs uppercase tracking-widest text-muted">Farmacia</p>
                            <h1 className="text-xl font-extrabold tracking-wide text-[var(--text)]">Shalom</h1>
                            <p className="text-xs italic text-muted">Abierto hasta la media noche</p>
                        </div>
                    </div>

                    {/** Search & CAtegory */}
                    <div className="col-span-2 md:col-span-1 order-3 md:order-none">
                        <Wrapper />
                    </div>

                    {/** Dark mode toggle */}
                    <div className="flex justify-end order-2 md:order-none">
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