"use strict";
const Models = require("../models");

const getOrders = (res) => {
  Models.Order.findAll({})
    .then((data) => {
      res.send({ result: 200, data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

const createOrder = (data, res) => {
  Models.Order.create(data)
    .then((data) => {
      res.send({ result: 200, data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getOrders,
  createOrder,
};
