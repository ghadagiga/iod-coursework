"use strict";
const Models = require("../models");

const getCards = (res) => {
  Models.Card.findAll({})
    .then((data) => {
      res.send({ result: 200, data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

const createCard = (data, res) => {
  Models.Card.create(data)
    .then((data) => {
      res.send({ result: 200, data });
    })
    .catch((err) => {
      console.error(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getCards,
  createCard,
};
