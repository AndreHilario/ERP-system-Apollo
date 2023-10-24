import { prisma } from "@/config";
import { faker } from "@faker-js/faker";
import { randomColor } from "../helpers";
import { ProductCategory } from "@prisma/client";
import { calculateDiscount } from "@/utils/calculateDiscount";

export async function insertProdcut() {
    const price = faker.number.float({ min: 149.90, max: 10999.99, precision: 2 });
    return await prisma.product.create({
        data: {
            name: faker.internet.userName(),
            description: faker.lorem.words(),
            color: randomColor(),
            product_category: ProductCategory.Appliances,
            price,
            promotional_price: calculateDiscount(price, ProductCategory.Appliances)
        },
    });
}
