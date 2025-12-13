"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
   const router = useRouter();
   const params = useSearchParams();
   const search = params.get("q") ?? "";
   
   return (
    <input type="text"
      placeholder="Buscar producto..."
      defaultValue={search}
      onChange={(e) => {
        const newValue = e.target.value;
        router.push(`/?q=${newValue}`);
      }}
      className="w-full p-2 border rounded-md"
    />
   );
}
