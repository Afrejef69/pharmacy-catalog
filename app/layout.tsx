import "./globals.css";
import { Footer } from "@/components"
import { CatalogProvider } from "./context/CatalogContext";
import { SearchBar } from "@/components"
import React from "react";

export const metada = {
  title: "Pharmacy Product Catalog",
  description: "Browse pharmacy products easily and quickly",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body className="min-h-screen flex flex-col">
          <CatalogProvider>
            <header className="p-4">
              <SearchBar />
            </header>
            <main className="flex-1">{children}</main>
            <Footer />
          </CatalogProvider>
        </body>
    </html>
  );
}
