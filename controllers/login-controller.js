'use strict';

const loginService = require('../services/login-service');

const login = (req, res, next) => {
  const { username, password } = req.body;
  return loginService(username, password)
    .then((response) => {
      if (response === null) {
        res.status(401).json({ message: 'Wrong username or password.' });
      } else {
        res.json(response);
      }
    })
    .catch((err) => next(err));
};
  
module.exports = login;
