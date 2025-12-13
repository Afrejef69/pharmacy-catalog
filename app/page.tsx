"use client";

import { useEffect, useState } from "react";
import { Products } from "./lib/getProducts";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components";

export default function Home() {
  const [prducts, setProducts] = useState<Products[]>([]);
  const params = useSearchParams();
  const search = (params.get("q") ?? "").toLowerCase();

  useEffect(() => {
    fetch("/api/products")
     .then((res) => res.json())
     .then((data: Products[]) => setProducts(data))
  }, []);

  const filtered = prducts.filter((p) =>
    p.name.toLowerCase().includes(search)
  );

  return (
    <div className="p-6 max-w-6x1 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((p, idx) => (
          <Card key={idx} product={p} />
        ))}
      </div>
    </div>
  );
}
