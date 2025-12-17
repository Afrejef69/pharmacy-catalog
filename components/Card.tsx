import Image from "next/image";

type CardProduct = {
    nombre: string;
    imagen?: string;
    precios: Record<string, number>;
    existencia: number;
}

export default function Card({ product }: {product: CardProduct}) {
    return (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-5 shadow-sm hover:shadow-lg hover:scale-[1.01] transition">
            <div className="relative w-full h-40 sm:h-48 mb-4 rounded-xl overflow-hidden">
                {product.imagen && (
                    <Image
                        src={product.imagen || '/placeholder.png'}
                        alt={product.nombre}
                        fill
                        className="object-contain"
                    />
                )}
            </div>

            <h3 className="text-lg font-semibold text-[var(--text)]">{product.nombre}</h3>

            <div className="mt-3 flex items-center justify-between">
                {Object.entries(product.precios).map(([tipo, precio]) => (
                    <p key={tipo} className="text-lg font-bold text-[var(--text)]">
                        Q{precio}
                            <span className="text-sm text-muted"> / {tipo} </span>
                    </p>
                ))}    
                {Number(product.existencia) > 0 ? (
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