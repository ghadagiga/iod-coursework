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
const express = require("express");
const router = express.Router();
const { register, signin } = require("../controllers/userController");

router.post("/register", register);
router.post("/signin", signin);

module.exports = router;
