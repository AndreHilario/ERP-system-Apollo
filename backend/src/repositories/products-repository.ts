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

async function listProductsDB() {
    return await prisma.product.findMany();
}

async function deleteProductDB(id: number) {
    return await prisma.product.delete({
        where: {
            id,
        },
    });
}

async function findProductByIdDB(id: number) {
    return await prisma.product.findFirst({
        where: {
            id,
        },
    });
}

const productsRepository = {
    insertProductDB,
    listProductsDB,
    deleteProductDB,
    findProductByIdDB
};

export default productsRepository;
