import { CreateProduct } from "@/protocols";
import productsRepository from "../repositories/products-repository";
import { calculateDiscount } from "../utils/calculateDiscount";

async function createProduct(data: CreateProduct) {
    const promotionalPrice = calculateDiscount(data.price, data.product_category);
    const product = await productsRepository.insertProductDB(data, promotionalPrice);
    return product;
}

async function getProducts() {
    const allProducts = await productsRepository.listProductsDB();
    return allProducts;
}
const productsService = {
    createProduct,
    getProducts
};

export default productsService;