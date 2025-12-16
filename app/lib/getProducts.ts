import Papa from "papaparse";

export type Product = {
    nombre: string;
    presentacion: string;
    descripcion: string;
    precio: string;
    imagen: string;
    categoria: string;
    existencia: string;
    prescripcion: string;
    codigo: string;
};

type RawProduct = Partial<Product>;

export async function getProducts(): Promise<Product[]>{
    const csvUrl = process.env.GOOGLE_SHEETS_CSV_URL;

    if(!csvUrl) {
        throw new Error("Missing Google_SHEETS_CSV_URL env variable");
    }

    const response = await fetch(csvUrl, {
        //next: { revalidate: 1800 },
        cache: "no-store"
    });
    const csvText = await response.text();

    const parsed = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
    });

    const rawProducts = parsed.data as RawProduct[];
    
    const products: Product[] = [];
    
    for (const p of rawProducts) {
        if (!p.nombre || !p.prescripcion || !p.presentacion) continue;

        products.push({
            nombre: p.nombre.trim(),
            presentacion: p.presentacion.trim(),
            descripcion: p.descripcion?.trim() ?? "",
            precio: p.precio?.trim() ?? "",
            imagen: p.imagen?.trim() ?? "",
            categoria: p.categoria?.trim() ?? "",
            existencia: p.existencia?.trim() ?? "",
            prescripcion: p.prescripcion.trim(),
            codigo: p.codigo?.trim() ?? "",
        });
    }

    return products;
}
