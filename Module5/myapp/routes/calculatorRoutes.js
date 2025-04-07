const express = require("express");
const { addNumbers } = require("../controllers/calculatorController");
const router = express.Router();

// new route for adding two numbers
router.get("/add", (req, res) => {
  addNumbers(req, res);
});
router.get("/subtract", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sub = number1 - number2;
  console.log(sub);
  res.status(200);
  res.json({ result: sub });
});
router.get("/multiply", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let mul = number1 * number2;
  console.log(mul);
  res.status(200);
  res.json({ result: mul });
});
router.get("/divide", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let div = number1 / number2;
  console.log(div);
  res.status(200);
  res.json({ result: div });
});
module.exports = router;
