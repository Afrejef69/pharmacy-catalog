"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCatalog } from "@/app/context/CatalogContext";
import React from "react";

export default function SearchBar() {
   const router = useRouter();
   const params = useSearchParams();
   const { search, setSearch} = useCatalog();

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    const newParams = new URLSearchParams(params.toString());

    if (value) {
      newParams.set("q", value.toLowerCase());
      newParams.delete("page");
    } else {
      newParams.delete("q");
      newParams.delete("page");
    }

    router.replace(`/?${newParams.toString()}`, { scroll: false });
   };
   
   return (
    <div className="relative w-full">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]">
        🔍
      </span>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={handleChange}
        className="w-full px-4 py-3 pl-11 text-sm rounded-xl bg-[var(--card-bg)] text-[var(--text)] border border-[var(--border)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition"
      />
    </div>
   );
}
