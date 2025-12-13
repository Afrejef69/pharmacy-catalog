import Image from "next/image";
import { Products } from "@/app/lib/getProducts";

export default function Card({ product }: {product: Products}) {
    return (
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <Image
                src={product.Image}
                alt={product.Name}
                fill
                className="w-full h-40 object-contain mb-3"
            />
            
            <h3 className="text-lg font-semibold">{product.Name}</h3>
            {product.Description && (
                <p className="text-sm text-gray-600">{product.Description}</p>
            )}

            <p className="mt-2 font-bold text-blue-600">Q{product.Price}</p>

            <p className="text-xs text-gray-500 mt-1">Stock: {product.Stock}</p>
        </div>
    );
}