import app, { close, init } from "@/app";
import supertest from "supertest";
import { cleanDb, randomColor } from "../helpers";
import httpStatus from "http-status";
import { prisma } from "@/config";
import { insertProdcut } from "../factories/products-factory";
import { ProductCategory } from "@prisma/client";

beforeAll(async () => {
    await init();
});

beforeEach(async () => {
    await cleanDb();
});

afterAll(async () => {
    await close();
});

const server = supertest(app);

describe("POST /products", () => {
    it("should respond with status 400 whey body is empty", async () => {
        const response = await server.post("/products").send({});
        expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });

    it("should respond with status 400 whey body is invalid", async () => {
        const response = await server.post("/products").send({
            name: "iPhone",
            description: "iPhone 15 Pro Max",
            color: randomColor(),
            product_category: "Smartpho",
            price: 10999.99
        });
        expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });

    it("should create a new product, insert in database and return a correct object with status 201", async () => {
        const beforeCount = await prisma.product.count();

        const response = await server.post("/products").send({
            name: "iPhone",
            description: "iPhone 15 Pro Max",
            color: randomColor(),
            product_category: ProductCategory.Smartphones,
            price: 10999.99
        });

        const afterCount = await prisma.product.count();

        expect(response.status).toBe(httpStatus.CREATED);
        expect(response.body).toEqual({
            id: expect.any(Number),
            name: expect.any(String),
            description: expect.any(String),
            color: expect.any(String),
            product_category: expect.any(String),
            price: expect.any(String),
            promotional_price: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
        });

        expect(beforeCount).toEqual(0);
        expect(afterCount).toEqual(1);
    });
});

describe("GET /products", () => {
    it("should return a array with all products and correct body with status 200", async () => {
        const product = await insertProdcut();

        const response = await server.get("/products");
        expect(response.status).toBe(httpStatus.OK);
        expect(response.body).toEqual([
            {
                id: product.id,
                name: product.name,
                description: product.description,
                color: product.color,
                product_category: product.product_category,
                price: product.price.toString(),
                promotional_price: product.promotional_price.toString(),
                createdAt: product.createdAt.toISOString(),
                updatedAt: product.updatedAt.toISOString()
            }
        ]);
    });
});

describe("DELETE /products/:id", () => {
    it("should return a not found error when id does not exist", async () => {
        const nonExistingId = 100;
        const response = await server.delete(`/products/${nonExistingId}`);
        expect(response.status).toBe(httpStatus.NOT_FOUND);
    });

    it("should return a bad request error when id is invalid", async () => {
        const invalidId = "invalid";
        const response = await server.delete(`/products/${invalidId}`);
        expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });

    it("should delete a product correctly by id", async () => {
        const product = await insertProdcut();
        const beforeCount = await prisma.product.count();

        const response = await server.delete(`/products/${product.id}`);

        const afterCount = await prisma.product.count();

        expect(response.status).toBe(httpStatus.NO_CONTENT);
        expect(beforeCount).toEqual(1);
        expect(afterCount).toEqual(0);
    });
});
