import { CreateProduct } from "@/protocols";
import productsRepository from "../repositories/products-repository";
import { calculateDiscount } from "../utils/calculateDiscount";

async function createProduct(data: CreateProduct) {
    const promotionalPrice = calculateDiscount(data.price, data.product_category);
    const product = await productsRepository.insertProductDB(data, promotionalPrice);
    return product;
}

const productsService = {
    createProduct
};

export default productsService;