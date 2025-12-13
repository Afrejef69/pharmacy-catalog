"use client";

import { useEffect, useState } from "react";
import { Product } from "./lib/getProducts";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const params = useSearchParams();
  const search = (params.get("q") ?? "").toLowerCase();

  useEffect(() => {
    fetch("/api/products")
     .then((res) => res.json())
     .then((data: Product[]) => setProducts(data))
  }, []);

  const filtered = products.filter((p) => {
    if (!p.name) return false;
    return p.name.toLowerCase().includes(search);
  }
  );

  return (
    <div className="p-6 max-w-6x1 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((p, idx) => (
          <Card key={idx} product={p} />
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}
