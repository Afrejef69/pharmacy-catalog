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

  type GroupedProduct ={
    codigo: string;
    nombre: string;
    categoria: string;
    imagen?: string;
    precios: Record<string, number>;
    existencia: number;
  };

export default function Home() {
  const { products, setProducts, category} = useCatalog();
  const [error, setError] = useState(false);
  const params = useSearchParams();
  const search = (params.get("q") ?? "").toLowerCase();
  const page = Number(params.get("page")) || 1;
  const router = useRouter();

  useEffect(() => {
    router.replace("/", { scroll:false })
  }, [router]);

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
    [p.nombre, p.presentacion, p.codigo,].join(" ")
    );

    const matchesSearch = searchableText.includes(normalize(search));
    const matchesCategory = category ? p.categoria === category : true;
    return matchesSearch && matchesCategory;
  });

  const grouped: GroupedProduct[] = Object.values(
    filtered.reduce<Record<string, GroupedProduct>>(
      (acc, product: Product) => {
      const key = product.nombre.toLowerCase();

      if (!acc[key]) {
        acc[key] = {
          codigo: product.codigo,
          nombre: product.nombre,
          categoria: product.categoria,
          imagen: product.imagen || './placeholder.png',
          precios: {},
          existencia: 0,
        };
      }

      acc[key].precios[product.presentacion] = parseFloat(product.precio);
      acc[key].existencia = Math.max(
        acc[key].existencia,
        Number(product.existencia)
      );
      return acc;
    }, {})
  );

  const totalPages = Math.ceil(grouped.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = grouped.slice(start, start + ITEMS_PER_PAGE);

  const goToPage = (newPage: number) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("page", newPage.toString());
    router.push(`/?${newParams.toString()}`, { scroll: false });
  };

  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  return (
    <main className="pt-[30px] md:pt-[20px]">
        <div className="w-full min-h-[70vh]">
        <h1 className="text-sm text-muted mb-2 md:text-2xl md:font-bold md:mb-6"> Catalogo de Medicamentos </h1>
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

            {/** Anterior */}
            <button
                onClick={() => goToPage(page-1)}
                disabled={!hasPrev}
                className={`px-3 py-1 rounded-md border transition-all duration-200 ease-out
                            ${hasPrev
                            ? "cursor-pointer hover:bg-black/5 dark:hover:bg-white/10 hover:scale-105 active-95"
                            : "opacity-40 cursor-not-allowed"
                        }`}
            >
                ←
            </button>

            {/** Páginas */}
            {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                const isActive = p === page;
                
                return (
                <button
                    key={p}
                    onClick={() => goToPage(p)}
                    className={`px-3 py-1 rounded-md border transition-all duration-200 ease-out cursor-pointer
                                ${isActive
                                ? "cursor-pointer bg-[var(--accent)] text-white border-transparent scale-105"
                                : "hover:bg-black/5 dark:hover:bg-white/10 haver:scale-105 active:scale-95"
                            }`}
                >
                    {p}
                </button>
                );
            })}

            {/** Siguiente */}
            <button
                onClick={() => goToPage(page + 1)}
                disabled={!hasNext}
                className={`px-3 py-1 rounded-md border transition-all duration-200 ease-out
                            ${hasNext
                            ? "cursor-pointer hover:bg-black/5 dark:hover:bg-white/10 hover:scale-105 active:scale-95"
                            : "opacity-40 cursor-not-allowed"
                        }`}
            >
                →
            </button>
            </div>
        )}
        </div>
    </main>
  );
}
