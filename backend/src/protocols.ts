import { ProductCategory } from "@prisma/client";

export type ApplicationError = {
    name: string;
    message: string;
};

export type CreateProduct = {
    name: string
    description: string
    color: string
    product_category: ProductCategory
    price: number
};

export type Params = {
    id: number
};
