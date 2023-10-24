import { validateBody, validateParams } from "../middlewares/validation-middleware";
import { deleteProduct, insertProduct, listAllProducts } from "../controllers/products-controller";
import { Router } from "express";
import { productSchema } from "../schemas/product-schema";
import { paramsSchema } from "../schemas/params-schema";

const productsRouter = Router();

productsRouter
    .post("/", validateBody(productSchema), insertProduct)
    .get("/", listAllProducts)
    .delete("/:id", validateParams(paramsSchema), deleteProduct);

export { productsRouter };
