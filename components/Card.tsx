import Image from "next/image";
import { Product } from "@/app/lib/getProducts";

export default function Card({ product }: {product: Product}) {
    return (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-5 shadow-sm hover:shadow-lg hover:scale-[1.01] transition">
            <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                />
            </div>
            <h3 className="text-lg font-semibold text-[var(--text)]">{product.name}</h3>
            {product.description && (
                <p className="text-sm text-[var(--muted)]">{product.description}</p>
            )}
            <div className="mt-3 flex items-center justify-between">
                <p className="text-lg font-bold text-[var(--text)]">Q{product.price}</p>
                {Number(product.stock) > 0 ? (
                    <span className="text-sm font-medium text-[var(--accent)]">
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