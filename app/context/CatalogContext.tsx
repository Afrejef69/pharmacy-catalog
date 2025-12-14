"use client";

import React, { createContext, useContext, useState, useMemo } from "react";
import { Product } from "../lib/getProducts";

type CatalogContextType = {
    products: Product[];
    categories: string[];
    search: string;
    category: string;
    setSearch: (value:string) => void;
    setCategory: (value:string) => void;
    setProducts: (products: Product[]) => void;
}

const CatalogContext = createContext<CatalogContextType | null>(null);

export function CatalogProvider({ 
    children,
 }: { 
    children: React.ReactNode;
}) {
    const [products,setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    const categories = useMemo(() => {
        return Array.from(
            new Set(
                products
                .map((p) => p.category)
                .filter((c): c is string => Boolean(c))
            )
        );
    }, [products]);
    
    return(
        <CatalogContext.Provider
            value={{
                products,
                setProducts,
                categories,
                search,
                category,
                setSearch,
                setCategory
            }}
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