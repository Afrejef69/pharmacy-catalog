import Image from "next/image";
import { Product } from "@/app/lib/getProducts";

export default function Card({ product }: {product: Product}) {
    return (
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <div className="relative w-full h-40 mb-3">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain w-full h-40 mb-3"
                />
            </div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            {product.description && (
                <p className="text-sm text-gray-600">{product.description}</p>
            )}

            <p className="mt-2 font-bold text-blue-600">Q{product.price}</p>

            <p className="text-xs text-gray-500 mt-1">Stock: {product.stock}</p>
        </div>
    );
}