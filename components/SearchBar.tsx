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
      className="w-full p-2 border rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
   );
}
