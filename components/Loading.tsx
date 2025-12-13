import ProductSkeleton from "./ProductSkeleton";

export default function Loading() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
            {Array.from({ length: 8 }).map((_, i) =>(
                <ProductSkeleton key={i} />
            ))}
        </div>
    )
}