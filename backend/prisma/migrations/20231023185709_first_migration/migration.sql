-- CreateEnum
CREATE TYPE "ProductCategory" AS ENUM ('Appliances', 'Furniture', 'Refrigerators', 'Smartphones', 'Electronics');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "product_category" "ProductCategory" NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "promotional_price" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
