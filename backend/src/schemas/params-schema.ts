import { Params } from "@/protocols";
import Joi from "joi";

export const paramsSchema = Joi.object<Params>({
    id: Joi.number().min(1).required(),
});
