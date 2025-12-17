"use client";

import { Suspense } from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

export default function Wrapper() {
  return (
    <Suspense fallback={null}>
        <div className="flex flex-col gap-2">
            <SearchBar />
            <CategoryFilter />
        </div>
    </Suspense>
  );
}