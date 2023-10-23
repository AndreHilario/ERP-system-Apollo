import { Router } from "express";

const productsRouter = Router();

productsRouter
    .post("/")
    .get("/")
    .delete("/:id")

export { productsRouter };
