"use client";

import { useEffect, useState } from "react";
import { Product } from "./lib/getProducts";
import { useSearchParams, useRouter } from "next/navigation";
import { Card } from "@/components";

  const ITEMS_PER_PAGE = 20;
  
  const normalize = (text: string) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false);
  const params = useSearchParams();
  const search = (params.get("q") ?? "").toLowerCase();
  const page = Number(params.get("page")) || 1;
  const router = useRouter();

  useEffect(() => {
    fetch("/api/products")
     .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();  
    })
     .then((data: Product[]) => setProducts(data))
     .catch(() => setError(true));
  }, [setProducts]);

  if (error) {
    return(
      <p className="text-center text-red-500 mt-10">
        Unable to load products at this time.
      </p>
    );
  }

  const filtered = products.filter((p) => {
    const serchableText = normalize(
    [
      p.name,
      p.description ?? "",
      p.category ?? "",
      p.code,
    ]
      .join(" ")
      .toLowerCase()
    );

    return serchableText.includes(normalize(search));
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4"> Product Catalog </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {paginated.map((p) => (
          <Card key={p.code} product={p}/>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No products found
        </p>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => {
                  const newParams = new URLSearchParams(params.toString());
                  newParams.set("page", page.toString());
                  router.push(`/?${newParams.toString()}`);
                }}  
              >
                {page}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
