'use strict';

const registerService = require('../services/register-service');

const register = (req, res, next) => {
  const { username, password } = req.body;
  return registerService(username, password)
    .then((response) => {
      if (response === null) {
        res.status(400).json({ message: 'Username is already taken.' });
      } else {
        res.json(response);
      }
    })
    .catch((err) => next(err));
};

module.exports = register;
