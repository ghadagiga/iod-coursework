const express = require("express");
const router = express.Router();

// Import your individual route files
const userRoutes = require("./userRoutes");
const orderRoutes = require("./orderRoutes");
const cardRoutes = require("./cardRoutes");
const customerCardRoutes = require("./customerCardRoutes");
const cartItemsRoutes = require("./cartItemsRoutes");

// Use them
router.use("/users", userRoutes);
router.use("/orders", orderRoutes);
router.use("/cards", cardRoutes);
router.use("/customer-cards", customerCardRoutes);
router.use("/cart-items", cartItemsRoutes);

module.exports = router;
