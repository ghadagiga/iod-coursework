/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 */ "use strict";
const express = require("express");
const router = express.Router();
const cartItemsController = require("../controllers/cartItemsController");

// GET /api/cart - get all cart items
router.get("/", (req, res) => {
  cartItemsController.getCartItems(res);
});

// POST /api/cart - add item to cart
router.post("/", (req, res) => {
  cartItemsController.createCartItems(req.body, res);
});

// DELETE /api/cart/:id - remove item from cart
router.delete("/:id", (req, res) => {
  cartItemsController.removeCartItems(req.params.id, res);
});

module.exports = router;
