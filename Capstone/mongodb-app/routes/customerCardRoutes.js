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
const customerCardController = require("../controllers/customerCardController");

// GET /api/custom-cards - get all user custom cards
router.get("/", (req, res) => {
  customerCardController.getCustomerCards(res);
});

// POST /api/custom-cards - create new custom card
router.post("/", (req, res) => {
  customerCardController.createCustomerCard(req.body, res);
});

module.exports = router;
