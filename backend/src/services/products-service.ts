import { CreateProduct } from "@/protocols";
import productsRepository from "../repositories/products-repository";
import { calculateDiscount } from "../utils/calculateDiscount";
import { notFoundError } from "../errors";

async function createProduct(data: CreateProduct) {
    const promotionalPrice = calculateDiscount(data.price, data.product_category);
    const product = await productsRepository.insertProductDB(data, promotionalPrice);
    return product;
}

async function getProducts() {
    const allProducts = await productsRepository.listProductsDB();
    return allProducts;
}

async function deleteProduct(id: number) {
    const product = await productsRepository.findProductByIdDB(id);
    if(!product) throw notFoundError();

    await productsRepository.deleteProductDB(id);
    return product;
}

const productsService = {
    createProduct,
    getProducts,
    deleteProduct
};

export default productsService;