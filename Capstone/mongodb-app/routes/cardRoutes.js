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
const cardController = require("../controllers/cardController");

// GET /api/cards - get all cards
router.get("/", (req, res) => {
  cardController.getCards(res);
});

// POST /api/cards - create new card
router.post("/", (req, res) => {
  cardController.createCard(req.body, res);
});

module.exports = router;
