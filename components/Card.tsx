import Image from "next/image";
import { Product } from "@/app/lib/getProducts";

export default function Card({ product }: {product: Product}) {
    return (
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:shadow-xl">
            <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-md w-full h-40 mb-3"
                />
            </div>
            <h3 className="text-lg font-semibold text-[var(--text)]">{product.name}</h3>
            {product.description && (
                <p className="text-sm text-[var(--muted)]">{product.description}</p>
            )}
            <div className="mt-3 flex items-center justify-between">
                <p className="text-lg font-bold text-[var(--text)]">Q{product.price}</p>
                {Number(product.stock) > 0 ? (
                    <span className="text-sm font-medium text-emerald-500">
                        Disponible
                    </span>
                ) : (
                    <span className="text-sm font-medium text-red-500">
                        Agotado
                    </span>
                )}
            </div>
        </div>
    );
}