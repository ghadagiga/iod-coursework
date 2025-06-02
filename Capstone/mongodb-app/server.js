const express = require("express");
const mongoose = require("mongoose");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/CapstoneDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Import routes
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API documentation for my app",
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
  console.log(`Swagger docs at http://127.0.0.1:${PORT}/api-docs`);
});
