'use strict';

const refreshService = require('../services/refresh-service');

const refreshController = (req, res, next) => {
  const username   = req.username;
  return refreshService(username)
    .then((response) => {
        res.json(response);  
    })
  .catch((err) => next(err));
};

module.exports = refreshController;
