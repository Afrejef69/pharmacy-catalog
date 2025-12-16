"use client";

import { useEffect, useState } from "react";
import { Product } from "./lib/getProducts";
import { useSearchParams, useRouter } from "next/navigation";
import { Card } from "@/components";
import { useCatalog } from "./context/CatalogContext";

  const ITEMS_PER_PAGE = 20;
  
  const normalize = (text: string) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

export default function Home() {
  const { products, setProducts, category} = useCatalog();
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
    const searchableText = normalize(
    [
      p.nombre,
      p.presentacion,
      p.codigo,
    ]
      .join(" ")
      .toLowerCase()
    );

    const matchesSearch = searchableText.includes(normalize(search));
    const matchesCategory = category
      ? p.categoria === category
      : true;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="w-full min-h-[70vh]">
      <h1 className="text-2xl font-bold mb-6"> Catalogo de Medicamentos </h1>
      {paginated.length === 0 ? (
        <div className="flex min-h-[50vh] items-center justify-center">
          <p className="text-muted text-lg text-center">
            No se encontraron productos.
          </p>
        </div>
      ) : (
        <div className="grid gap-10 w-full justify-items-stretch [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
          {paginated.map((p) => (
            <Card key={p.codigo} product={p} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-10 flex-wrap">
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
                className="px-3 py-1 rounded-md border border-subtle hover:bg-black/5 dark:bg-white/10 transition"  
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
