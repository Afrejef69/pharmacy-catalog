import "./globals.css";
import { CatalogProvider } from "./context/CatalogContext";
import { Navbar } from "@/components";
import { Footer } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <CatalogProvider>
          <Navbar />
          <main className="flex-1 max-w-7xl mx-auto px-8 py-10">{children}</main>
          <Footer />
        </CatalogProvider>
      </body>
    </html>
  );
}
