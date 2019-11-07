'use strict';

const jwt = require('jsonwebtoken');
const loginQuery = require('./login-query');
const loginResponseQuery = require('./login-response-query');

async function loginService (username, password) {
  const secret = process.env.SECRET;
  try {
    const foundUser = await loginQuery.findPlayer(username, password);
    if (!foundUser.length) {
      return null;
    }
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

module.exports = loginService;
