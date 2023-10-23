import { prisma } from "../config";
import { CreateProduct } from "@/protocols";

async function insertProductDB(data: CreateProduct, promotional_price: number) {
    return await prisma.product.create({
        data: {
            name: data.name,
            description: data.description,
            color: data.color,
            product_category: data.product_category,
            price: data.price,
            promotional_price
        },
    });
}

const productsRepository = {
    insertProductDB
};

export default productsRepository;