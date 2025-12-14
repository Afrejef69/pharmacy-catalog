import Image from "next/image";
import { Product } from "@/app/lib/getProducts";

export default function Card({ product }: {product: Product}) {
    return (
        <div className="rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur p-6 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-md w-full h-40 mb-3"
                />
            </div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            {product.description && (
                <p className="text-sm text-gray-400 mt-1 line-clamp-2">{product.description}</p>
            )}
            <div className="mt-3 flex items-center justify-between">
                <p className="text-lg font-bold text-blue-500">Q{product.price}</p>
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