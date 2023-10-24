# ERP system - Apollo Solutions
_This project consists of implementing an ERP system for customers to register new products. The idea is to allow new products to be registered in the customer's ERP system, including all the product details and the discount that each product category will receive._. 

Try it out API at: https://erp-system-api.onrender.com

## About this project
The ERP system is a powerful REST API designed to be a place for registering new products. With it, you can register products as you wish and receive the discounted price through each registered product category.

The highlighted features? It includes:

- **Health** (`/health`) 
  - A route for testing the application's health.

- **Prodcuts** (`/products`) 
  - Products creation:
    - Products can be created by the customer, containing name, description, color, product category, price, and promotional price based on a category-based promotion table.

  - List products:
    - All created products can be viewed.

  - Delete products:
    - Products can be deleted by their own ID.
    
## Why
This project has been a tremendous source of motivation for me due to its comprehensive nature. It encompasses a fully developed Node.js API framework, which is highly relevant and powerful technology. This endeavor has provided me with a deep understanding of this technology and the intricate art of creating a robust REST API.

Enterprise Resource Planning (ERP) is a software system that helps you manage the entire business by supporting automation and processes in finance, human resources, production, supply chain, services, procurement, and more.

In summary, this project has given me a valuable learning experience, allowing me to delve into Node.js, understand and navigate the complexities of an ERP, all within the context of an API.

## Tecnologias
The following badges represent the tools and technologies used in the project:

- [![Node.js](https://img.shields.io/badge/Node.js-Active-brightgreen)](https://nodejs.org/)

- [![Express](https://img.shields.io/badge/Express-Web%20Framework-lightgrey)](https://expressjs.com/)

- [![TypeScript](https://img.shields.io/badge/TypeScript-Programming%20Language-blue)](https://www.typescriptlang.org/)

- [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Open--Source%20DB-blue)](https://www.postgresql.org/)

- [![Prisma](https://img.shields.io/badge/Prisma-Database%20ORM-brightgreen)](https://www.prisma.io/)

- [![Jest](https://img.shields.io/badge/Jest-Testing-blue)](https://jestjs.io/)

- [![Supertest](https://img.shields.io/badge/Supertest-Testing%20Library-orange)](https://github.com/visionmedia/supertest)

- [![Docker](https://img.shields.io/badge/Docker-Containerization-blue)](https://www.docker.com/)
 

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
$ npm i
```

3. Now you can run through the deploy, the link is further up.

4. Create a PostgreSQL database with whatever name you want

5. Configure the `.env.development` file using the `.env.example` file as a basis

6. Run your database with Prisma:

```bash
# prisma create DB and migrations
$ npm run migration:generate

# prisma deploy
$ npm run migration:run

# seed
$ npm run dev:seed
```

7. Start the server, running in the development environment:

```bash
# build
$ npm run start

# development
$ npm run dev
```

## How to run with Docker

1. If you don't have Docker installed, you need to install it on your machine first. Visit [docker](https://www.docker.com/) for more information.

### Building the image and running:

2. Everything through the `docker-compose` file, and for this, it is necessary that the `.env.development` file is configured as specified above and the mapped ports are available.

3. Run the `docker-compose` file:
```bash
# With logs
docker compose up

# Without logs
docker compose up -d
```

4. The application will be accessible at `http://localhost:4001` in your browser, as per the port mapped in the YAML file.

## How to run tests

1. Follow the steps in the last section
2.Configure the `.env.test` file using `.env.example` file as a basis
3. Run your database with prisma:

```bash
# prisma create DB and migrations
$ npm run test:migration:generate

# prisma deploy
$ npm run test:migration:run
```

4. Runing tests:

```bash
# integration tests
$ npm run test

# coverage
$ npm run test:coverage
```

## Support

Node is an open-source project licensed under MIT. It can grow thanks to sponsors and the support of incredible supporters. If you would like to join them, please [read more here](https://nodesource.com/services/support).

## Contact

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## Licença

Node is [MIT licensed](LICENSE)