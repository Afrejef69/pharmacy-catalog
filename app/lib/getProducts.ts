import Papa from "papaparse";

export type Product = {
    name: string;
    description: string;
    price: string;
    image: string;
    category: string;
    stock: string;
    code: string;
};

type RawProduct = Partial<Product>;

export async function getProducts(): Promise<Product[]>{
    const csvUrl = 
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRDnhchvf_h1q2cnlaSSk5gtYuavuaeJdnhYoIzhxhu57wHGoLMBlhksGgA7krSCru0dlzV5QkoFZ74/pub?output=csv";

    const response = await fetch(csvUrl, {
        //next: { revalidate: 3600 },
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
        if (!p.name || !p.image) continue;

        products.push({
            name: p.name.trim(),
            description: p.description?.trim() ?? "",
            price: p.price?.trim() ?? "",
            image: p.image.trim(),
            category: p.category?.trim() ?? "",
            stock: p.stock?.trim() ?? "",
            code: p.code?.trim() ?? "",
        });
    }

    return products;
}
