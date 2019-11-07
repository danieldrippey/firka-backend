'use strict';

const jwt = require('jsonwebtoken');
const loginResponseQuery = require('./login-response-query');

async function refreshService(username) {
  const secret = process.env.SECRET;
  try {
    const token = jwt.sign({ username }, secret, {
      expiresIn: process.env.TOKEN_LIFE,
    });
    const playerDetails = await loginResponseQuery.responseQuery(username);
    const response = { playerDetails, token };
    return response;
  } catch (error) {
    throw new Error();
  }
}

module.exports = refreshService;
