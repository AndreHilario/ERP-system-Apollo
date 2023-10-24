import { ProductCategory } from "@prisma/client";

const promotionalTable = {
    Smartphones: 2.55,
    Furniture: 3,
    Electronics: 4.3,
    Appliances: 5,
    Refrigerators: 7.5
};

export function calculateDiscount(price: number, category: ProductCategory) {
    const percentage = promotionalTable[category] / 100;
    const finalDiscount = price * (1 - percentage);

    return Number(finalDiscount.toFixed(2));
}
