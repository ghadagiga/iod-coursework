"use strict";
const Models = require("../models");

const getCustomerCards = (res) => {
  Models.CustomerCard.findAll({})
    .then((data) => {
      res.send({ result: 200, data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

const createCustomerCard = (data, res) => {
  Models.CustomerCard.create(data)
    .then((data) => {
      res.send({ result: 200, data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getCustomerCards,
  createCustomerCard,
};
