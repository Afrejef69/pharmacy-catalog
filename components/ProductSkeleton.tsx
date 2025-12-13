export default function ProductSkeleton() {
    return (
        <div className="border rounded-lg pg-4 animate-pulse">
            <div className="w-full h-40 bg-gray-200 mb-3 rounded" />
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-3 bg-gray-200 rounded w-full mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>
    )
}