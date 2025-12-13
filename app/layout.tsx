import "./globals.css";
import { Footer } from "@/components"
import { SearchBar } from "@/components";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body className="min-h-screen flex flex-col">
          <SearchBar />
          {children}
          <Footer />
        </body>
    </html>
  );
}
