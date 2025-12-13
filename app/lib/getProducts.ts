import Papa from "papaparse";

export type Products = {
    Name: string;
    Description?: string;
    Price: string;
    Image: string;
    Category?: string;
    Stock: string;
    Code: string;
};

export async function getProducts(): Promise<Products[]>{
    const product = 
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRDnhchvf_h1q2cnlaSSk5gtYuavuaeJdnhYoIzhxhu57wHGoLMBlhksGgA7krSCru0dlzV5QkoFZ74/pub?output=csv";

    const response = await fetch(product, { cache: "no-cache" });
    const csvText = await response.text();

    const parsed = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
    });

    return parsed.data as Products[];
}
