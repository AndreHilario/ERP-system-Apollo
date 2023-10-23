import { CreateProduct } from "@/protocols";
import productsService from "../services/products-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function insertProduct(req: Request, res: Response) {
    const productData = req.body as CreateProduct;
    try {
        const newProduct = await productsService.createProduct(productData);
        return res.status(httpStatus.CREATED).send(newProduct);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }
}

export async function listAllProducts(req: Request, res: Response) {
    try {
        const products = await productsService.getProducts();
        return res.status(httpStatus.OK).send(products);
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }
}

export async function deleteProduct(req: Request, res: Response) {
    try {

    } catch (error) {

    }
}