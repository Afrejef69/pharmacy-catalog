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
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col pt-28">
        <CatalogProvider>
          <Navbar />
          <main className="flex-1 w-full max-w-7xl mx-auto px-8 py-10">{children}</main>
          <Footer />
        </CatalogProvider>
      </body>
    </html>
  );
}
