"use client";

import { Suspense } from "react";
import SearchBar from "./SearchBar";

export default function Wrapper() {
  return (
    <Suspense fallback={null}>
      <SearchBar />
    </Suspense>
  );
}