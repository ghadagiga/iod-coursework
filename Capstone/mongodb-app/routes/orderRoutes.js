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
 */
"use strict";
const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// GET /api/orders - get all orders
router.get("/", (req, res) => {
  orderController.getOrders(res);
});

// POST /api/orders - create new order
router.post("/", (req, res) => {
  orderController.createOrder(req.body, res);
});

module.exports = router;
