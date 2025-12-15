"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCatalog } from "@/app/context/CatalogContext";
import React from "react";

export default function SearchBar() {
   const router = useRouter();
   const params = useSearchParams();
   const { search, setSearch} = useCatalog();

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const newParams = new URLSearchParams(params.toString());

    if (value) {
      newParams.set("q", value);
    } else {
      newParams.delete("q");
    }

    router.push(`/?${newParams.toString()}`, { scroll: false });
   };
   
   return (
    <input
      type="text"
      placeholder="Buscar producto..."
      value={search}
      onChange={handleChange}
      className="w-full h-12 px-4 rounded-xl border border-gray-300/60 dark:border-gray-700/60 bg-white/80 dark:bg-gray-900/80 backdrop-blur text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60 transition"
    />
   );
}
