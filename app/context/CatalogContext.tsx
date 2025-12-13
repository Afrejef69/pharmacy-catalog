"use client";

import React, { createContext, useContext, useState } from "react";

type CatalogContextType = {
    search: string;
    category: string;
    setSearch: (value:string) => void;
    setCategory: (value:string) => void;
}

const CatalogContext = createContext<CatalogContextType | null>(null);

export function CatalogProvider({ children }: { children: React.ReactNode}) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    return(
        <CatalogContext.Provider
            value={{ search, category, setSearch, setCategory }}
        >
            {children}
        </CatalogContext.Provider>
    );
}

export function useCatalog() {
    const context = useContext(CatalogContext);
    if (!context) {
        throw new Error("useCatalog must be used within CatalogProvider");
    }
    return context;
}