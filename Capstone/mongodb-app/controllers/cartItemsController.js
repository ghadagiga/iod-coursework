"use strict";
const Models = require("../models");

const getCartItems = (res) => {
  Models.CartItem.findAll({})
    .then((data) => {
      res.send({ result: 200, data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

const createCartItem = (data, res) => {
  Models.CartItem.create(data)
    .then((data) => {
      res.send({ result: 200, data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

const removeCartItem = (id, res) => {
  Models.CartItem.destroy({ where: { id } })
    .then(() => {
      res.send({ result: 200, message: "Cart item removed" });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getCartItems,
  createCartItem,
  removeCartItem,
};
