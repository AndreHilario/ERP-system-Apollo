import { PrismaClient, ProductCategory } from "@prisma/client";

const prisma = new PrismaClient();

const productsData = [
    {
        name: "iPhone",
        description: "iPhone 15 Pro Max",
        color: "Natural Titanium",
        product_category: ProductCategory.Smartphones,
        price: 10999.00,
        promotional_price: 10718.52,
    },
    {
        name: "Wardrobe",
        description: "4 doors, 6 drawers",
        color: "Varnish",
        product_category: ProductCategory.Furniture,
        price: 799.89,
        promotional_price: 775.89,
    },
    {
        name: "Home theater",
        description: "Bluetooth wireless soundbar",
        color: "Silver",
        product_category: ProductCategory.Electronics,
        price: 1299.00,
        promotional_price: 1243.14,
    },
    {
        name: "Toaster",
        description: "Space for 66 slices of bread",
        color: "Black",
        product_category: ProductCategory.Appliances,
        price: 149.90,
        promotional_price: 142.40,
    },
    {
        name: "Refrigerator",
        description: "2 doors with freezer",
        color: "White",
        product_category: ProductCategory.Refrigerators,
        price: 4789.89,
        promotional_price: 4430.64,
    },
];

async function seed() {
    for (const data of productsData) {
        await prisma.product.create({
            data,
        });
    }
}

seed()
    .catch((error) => {
        console.error('Error:', error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });