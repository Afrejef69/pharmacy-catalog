import { getProducts } from "@/app/lib/getProducts";
import { NextResponse } from "next/server";

export async function GET() {
    const products = await getProducts();
    return NextResponse.json(products);
}