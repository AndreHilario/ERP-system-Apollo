import { CreateProduct } from "@/protocols";
import Joi from "joi";

export const productSchema = Joi.object<CreateProduct>({
    name: Joi.string().required(),
    description: Joi.string().required(),
    color: Joi.string().required(),
    product_category: Joi.string().valid("Appliances", "Furniture", "Refrigerators", "Smartphones", "Electronics"),
    price: Joi.number().precision(2).positive().required(),
  });
