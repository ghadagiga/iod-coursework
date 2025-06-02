const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Cards Web App API",
      version: "1.0.0",
      description: "API documentation for the Cards Creating Web Application",
    },
    servers: [
      {
        url: "http://127.0.0.1:27017/api",
      },
    ],
  },
  apis: [
    "userRoutes.js",
    "./orderRoutes",
    "./cardRoutes",
    "./customerCardRoutes",
    "./cartItemsRoutes.jsx",
  ], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
