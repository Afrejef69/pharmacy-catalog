import "./globals.css";
import { SearchBar } from "@/components";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body className="min-h-screen flex flex-col">
          <header className="p-4 shadow">
            <SearchBar />
          </header>
          <main className="flex-1 p-6">{children}</main>
        </body>
    </html>
  );
}
